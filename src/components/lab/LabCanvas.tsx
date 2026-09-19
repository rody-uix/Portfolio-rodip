"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { LabProject } from "./labTypes";
import { useInViewport } from "@/hooks/useInViewport";

interface LabCanvasProps {
  projects: LabProject[];
  selectedProject: LabProject | null;
  onSelectProject: (project: LabProject | null) => void;
  onHoverProject: (project: LabProject | null) => void;
}

interface CardMeshUserData {
  project: LabProject;
  index: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  baseRotY: number;
  baseRotZ: number;
}

export function LabCanvas({
  projects,
  selectedProject,
  onSelectProject,
  onHoverProject,
}: LabCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inViewport = useInViewport(containerRef, "300px");

  // Store internal refs for scene, objects, and GSAP
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cardsGroupRef = useRef<THREE.Group | null>(null);
  const cardMeshesRef = useRef<THREE.Mesh[]>([]);
  const hoveredCardIndexRef = useRef<number | null>(null);
  const selectedProjectRef = useRef<LabProject | null>(selectedProject);

  // Keep ref in sync
  useEffect(() => {
    selectedProjectRef.current = selectedProject;
  }, [selectedProject]);

  const inViewportRef = useRef(inViewport);

  useEffect(() => {
    inViewportRef.current = inViewport;
  }, [inViewport]);

  useEffect(() => {
    let initFrameId: number;
    let animationFrameId: number;
    let resizeObserver: ResizeObserver | null = null;
    let isDisposed = false;
    let cleanupHandler: (() => void) | null = null;

    // Defer initialization by one requestAnimationFrame to ensure canvas & container DOM nodes are committed
    initFrameId = requestAnimationFrame(() => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas || isDisposed) return;

      // 1. Scene Setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // 2. Camera Setup
      const width = container.clientWidth || 800;
      const height = container.clientHeight || 600;
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 9);
      cameraRef.current = camera;

      // 3. Renderer Setup safely guarded by local canvas variable & try-catch
      let renderer: THREE.WebGLRenderer | null = null;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(width, height);
      } catch (err) {
        console.warn("[LabCanvas] THREE.WebGLRenderer creation failed:", err);
        return;
      }

      if (!renderer || !renderer.getContext()) {
        console.warn("[LabCanvas] WebGL context is null or unavailable.");
        return;
      }
      rendererRef.current = renderer;

      // 4. Minimal Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
      dirLight1.position.set(5, 6, 8);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
      dirLight2.position.set(-5, -4, -2);
      scene.add(dirLight2);

      // 5. Cards Group & Meshes
      const cardsGroup = new THREE.Group();
      scene.add(cardsGroup);
      cardsGroupRef.current = cardsGroup;

      const textureLoader = new THREE.TextureLoader();
      const cardWidth = 3.6;
      const cardHeight = 4.8;
      const cardDepth = 0.08;
      const geometry = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
      const cardMeshes: THREE.Mesh[] = [];

      const sideMaterial = new THREE.MeshStandardMaterial({
        color: 0xdedede,
        roughness: 0.35,
        metalness: 0.1,
      });

      const totalCards = projects.length;

      projects.forEach((proj, i) => {
        const texture = textureLoader.load(proj.image, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.needsUpdate = true;
        });

        const frontMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.25,
          metalness: 0.05,
          color: 0xffffff,
        });

        const materials = [
          sideMaterial,
          sideMaterial,
          sideMaterial,
          sideMaterial,
          frontMaterial,
          sideMaterial,
        ];

        const mesh = new THREE.Mesh(geometry, materials);

        const baseX = (i - (totalCards - 1) / 2) * 0.55;
        const baseY = (i - (totalCards - 1) / 2) * -0.15;
        const baseZ = -i * 0.4;
        const baseRotY = -0.18 + i * 0.035;
        const baseRotZ = 0.04 - i * 0.015;

        mesh.position.set(baseX, baseY, baseZ);
        mesh.rotation.set(0, baseRotY, baseRotZ);

        const userData: CardMeshUserData = {
          project: proj,
          index: i,
          baseX,
          baseY,
          baseZ,
          baseRotY,
          baseRotZ,
        };
        mesh.userData = userData;

        cardsGroup.add(mesh);
        cardMeshes.push(mesh);
      });

      cardMeshesRef.current = cardMeshes;

      // 6. Raycasting & Mouse Interaction Setup
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2(-999, -999);

      const updateMousePos = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      };

      const handlePointerMove = (e: MouseEvent) => {
        updateMousePos(e);
      };

      const handlePointerLeave = () => {
        mouse.set(-999, -999);
        if (hoveredCardIndexRef.current !== null && !selectedProjectRef.current) {
          const prevMesh = cardMeshes[hoveredCardIndexRef.current];
          if (prevMesh) {
            const u = prevMesh.userData as CardMeshUserData;
            gsap.to(prevMesh.position, {
              x: u.baseX,
              y: u.baseY,
              z: u.baseZ,
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
            gsap.to(prevMesh.scale, {
              x: 1,
              y: 1,
              z: 1,
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
          hoveredCardIndexRef.current = null;
          onHoverProject(null);
          document.body.style.cursor = "default";
        }
      };

      const handleClick = (e: MouseEvent) => {
        updateMousePos(e);
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(cardMeshes);

        if (intersects.length > 0) {
          const hitMesh = intersects[0].object as THREE.Mesh;
          const u = hitMesh.userData as CardMeshUserData;

          if (selectedProjectRef.current?.id === u.project.id) {
            onSelectProject(null);
          } else {
            onSelectProject(u.project);
          }
        } else if (selectedProjectRef.current) {
          onSelectProject(null);
        }
      };

      let scrollVelocity = 0;
      let stackOffset = 0;

      const handleWheel = (e: WheelEvent) => {
        const rect = container.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          scrollVelocity += e.deltaY * 0.0006;
        }
      };

      container.addEventListener("mousemove", handlePointerMove);
      container.addEventListener("mouseleave", handlePointerLeave);
      container.addEventListener("click", handleClick);
      container.addEventListener("wheel", handleWheel, { passive: true });

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && selectedProjectRef.current) {
          onSelectProject(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      // 8. Resize Observer
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const newW = entry.contentRect.width;
          const newH = entry.contentRect.height;
          if (newW > 0 && newH > 0) {
            camera.aspect = newW / newH;
            camera.updateProjectionMatrix();
            renderer?.setSize(newW, newH);
          }
        }
      });
      resizeObserver.observe(container);

      // 9. Animation Tick
      const animate = () => {
        if (isDisposed) return;
        animationFrameId = requestAnimationFrame(animate);

        if (inViewportRef.current) {
          scrollVelocity *= 0.9;
          stackOffset = Math.max(-1.5, Math.min(1.5, stackOffset + scrollVelocity));

          if (!selectedProjectRef.current) {
            cardsGroup.position.x = stackOffset * 0.8;
            cardsGroup.rotation.y = stackOffset * 0.08;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(cardMeshes);

            if (intersects.length > 0) {
              const hitMesh = intersects[0].object as THREE.Mesh;
              const u = hitMesh.userData as CardMeshUserData;

              if (hoveredCardIndexRef.current !== u.index) {
                if (hoveredCardIndexRef.current !== null) {
                  const prevMesh = cardMeshes[hoveredCardIndexRef.current];
                  if (prevMesh) {
                    const prevU = prevMesh.userData as CardMeshUserData;
                    gsap.to(prevMesh.position, {
                      x: prevU.baseX,
                      y: prevU.baseY,
                      z: prevU.baseZ,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                    gsap.to(prevMesh.scale, {
                      x: 1,
                      y: 1,
                      z: 1,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                  }
                }

                hoveredCardIndexRef.current = u.index;
                onHoverProject(u.project);
                document.body.style.cursor = "pointer";

                gsap.to(hitMesh.position, {
                  x: u.baseX + 0.2,
                  y: u.baseY + 0.1,
                  z: u.baseZ + 0.6,
                  duration: 0.4,
                  ease: "power2.out",
                  overwrite: "auto",
                });
                gsap.to(hitMesh.scale, {
                  x: 1.08,
                  y: 1.08,
                  z: 1.08,
                  duration: 0.4,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              }
            } else if (hoveredCardIndexRef.current !== null) {
              const prevMesh = cardMeshes[hoveredCardIndexRef.current];
              if (prevMesh) {
                const prevU = prevMesh.userData as CardMeshUserData;
                gsap.to(prevMesh.position, {
                  x: prevU.baseX,
                  y: prevU.baseY,
                  z: prevU.baseZ,
                  duration: 0.4,
                  ease: "power2.out",
                  overwrite: "auto",
                });
                gsap.to(prevMesh.scale, {
                  x: 1,
                  y: 1,
                  z: 1,
                  duration: 0.4,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              }
              hoveredCardIndexRef.current = null;
              onHoverProject(null);
              document.body.style.cursor = "default";
            }
          }

          renderer?.render(scene, camera);
        }
      };

      animate();

      cleanupHandler = () => {
        isDisposed = true;
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("keydown", handleKeyDown);
        container.removeEventListener("mousemove", handlePointerMove);
        container.removeEventListener("mouseleave", handlePointerLeave);
        container.removeEventListener("click", handleClick);
        container.removeEventListener("wheel", handleWheel);

        if (resizeObserver) resizeObserver.disconnect();
        document.body.style.cursor = "default";

        geometry.dispose();
        sideMaterial.dispose();
        cardMeshes.forEach((mesh) => {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              const stdMat = mat as THREE.MeshStandardMaterial;
              if (stdMat.map) stdMat.map.dispose();
              mat.dispose();
            });
          }
        });

        if (renderer) {
          renderer.dispose();
          if (renderer.domElement && container.contains(renderer.domElement)) {
            renderer.domElement.remove();
          }
          rendererRef.current = null;
        }
        sceneRef.current = null;
        cameraRef.current = null;
        cardsGroupRef.current = null;
        cardMeshesRef.current = [];
      };
    });

    return () => {
      isDisposed = true;
      cancelAnimationFrame(initFrameId);
      if (cleanupHandler) cleanupHandler();
    };
  }, [projects]);

  // GSAP Selection State Animation Effect
  useEffect(() => {
    const cardMeshes = cardMeshesRef.current;
    const camera = cameraRef.current;
    const cardsGroup = cardsGroupRef.current;
    if (!cardMeshes.length || !camera || !cardsGroup) return;

    if (selectedProject) {
      gsap.to(cardsGroup.position, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 8.2,
        duration: 0.9,
        ease: "power3.out",
      });

      cardMeshes.forEach((mesh) => {
        const u = mesh.userData as CardMeshUserData;

        if (u.project.id === selectedProject.id) {
          gsap.to(mesh.position, {
            x: 0,
            y: 0,
            z: 2.8,
            duration: 0.9,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(mesh.rotation, {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.9,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(mesh.scale, {
            x: 1.15,
            y: 1.15,
            z: 1.15,
            duration: 0.9,
            ease: "power3.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(mesh.position, {
            x: u.baseX * 1.4,
            y: u.baseY,
            z: u.baseZ - 1.2,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(mesh.rotation, {
            x: 0,
            y: u.baseRotY,
            z: u.baseRotZ,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
          gsap.to(mesh.scale, {
            x: 0.95,
            y: 0.95,
            z: 0.95,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    } else {
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 9,
        duration: 0.8,
        ease: "power3.out",
      });

      cardMeshes.forEach((mesh) => {
        const u = mesh.userData as CardMeshUserData;
        gsap.to(mesh.position, {
          x: u.baseX,
          y: u.baseY,
          z: u.baseZ,
          duration: 0.85,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(mesh.rotation, {
          x: 0,
          y: u.baseRotY,
          z: u.baseRotZ,
          duration: 0.85,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(mesh.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.85,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    }
  }, [selectedProject]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[550px] lg:min-h-[680px]">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
