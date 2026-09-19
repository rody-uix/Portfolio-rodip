"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useInViewport } from "@/hooks/useInViewport";

interface Section2ParticlesProps {
  height?: string | number;
}

export function Section2Particles({ height = "100%" }: Section2ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inViewport = useInViewport(containerRef, "300px");
  const inViewportRef = useRef(inViewport);

  useEffect(() => {
    inViewportRef.current = inViewport;
  }, [inViewport]);

  useEffect(() => {
    let initFrameId: number;
    let animFrameId: number;
    let resizeObserver: ResizeObserver | null = null;
    let isDisposed = false;
    let cleanupHandler: (() => void) | null = null;

    initFrameId = requestAnimationFrame(() => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas || isDisposed) return;

      const width = container.clientWidth || 800;
      const height = container.clientHeight || 600;
      let containerHalfX = width / 2;
      let containerHalfY = height / 2;

      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
      let particleCount = 4000;
      if (screenWidth < 768) {
        particleCount = 800;
      } else if (screenWidth < 1024) {
        particleCount = 2000;
      }

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // CAMERA & SCENE
      const fieldOfView = 75;
      const aspectRatio = width / height;
      const nearPlane = 1;
      const farPlane = 3000;
      const cameraZ = 1000;

      const camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      );
      camera.position.z = cameraZ;

      const scene = new THREE.Scene();
      const fogHex = 0x000000;
      scene.fog = new THREE.FogExp2(fogHex, 0.0007);

      let renderer: THREE.WebGLRenderer | null = null;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: false,
          powerPreference: "default",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(width, height, false);
        renderer.setClearColor(fogHex, 1);
      } catch (err) {
        console.warn("Section2Particles WebGLRenderer failed to initialize:", err);
        return;
      }

      if (!renderer || !renderer.getContext()) return;

      // SHARED BUFFER GEOMETRY: Spans -1000 to +1000 on ALL THREE AXES
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const parameters: [[number, number, number], number][] = [
        [[1.0, 1.0, 0.5], 5],
        [[0.95, 1.0, 0.5], 4],
        [[0.90, 1.0, 0.5], 3],
        [[0.85, 1.0, 0.5], 2],
        [[0.80, 1.0, 0.5], 1],
      ];

      const materials: THREE.PointsMaterial[] = [];
      const particleLayers: THREE.Points[] = [];

      for (let i = 0; i < parameters.length; i++) {
        const colorConfig = parameters[i][0];
        const size = parameters[i][1];

        materials[i] = new THREE.PointsMaterial({
          size,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        materials[i].color.setHSL(colorConfig[0], colorConfig[1], colorConfig[2]);

        const particles = new THREE.Points(geometry, materials[i]);

        particles.rotation.x = Math.random() * Math.PI * 2;
        particles.rotation.y = Math.random() * Math.PI * 2;
        particles.rotation.z = Math.random() * Math.PI * 2;

        scene.add(particles);
        particleLayers.push(particles);
      }

      // CONTAINER-SCOPED MOUSE PARALLAX
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        if (prefersReducedMotion) return;
        const rect = container.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;
        mouseX = (clientX - containerHalfX) * 0.5;
        mouseY = (clientY - containerHalfY) * 0.5;
      };

      container.addEventListener("mousemove", handleMouseMove, { passive: true });

      // CONTAINER RESIZE OBSERVER
      const onResize = () => {
        if (!renderer || !container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w <= 0 || h <= 0) return;

        containerHalfX = w / 2;
        containerHalfY = h / 2;

        camera.aspect = w / h;
        camera.updateProjectionMatrix();

        renderer.setSize(w, h, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      };

      resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(container);

      // ANIMATION RENDER LOOP
      const render = () => {
        if (!renderer || isDisposed || !inViewportRef.current) return;

        const time = Date.now() * 0.00005;

        if (!prefersReducedMotion) {
          camera.position.x += (mouseX - camera.position.x) * 0.05;
          camera.position.y += (-mouseY - camera.position.y) * 0.05;
          camera.lookAt(scene.position);

          for (let i = 0; i < particleLayers.length; i++) {
            const layer = particleLayers[i];
            layer.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
          }

          for (let i = 0; i < materials.length; i++) {
            const colorConfig = parameters[i][0];
            const h = ((colorConfig[0] + time) % 1 + 1) % 1;
            materials[i].color.setHSL(h, colorConfig[1], colorConfig[2]);
          }
        }

        renderer.render(scene, camera);
      };

      const animateLoop = () => {
        if (isDisposed) return;
        animFrameId = requestAnimationFrame(animateLoop);
        render();
      };

      animateLoop();

      cleanupHandler = () => {
        isDisposed = true;
        cancelAnimationFrame(animFrameId);
        container.removeEventListener("mousemove", handleMouseMove);
        if (resizeObserver) resizeObserver.disconnect();

        particleLayers.forEach((layer) => {
          scene.remove(layer);
        });

        geometry.dispose();
        materials.forEach((mat) => mat.dispose());

        if (renderer) {
          renderer.dispose();
          if (renderer.domElement && container.contains(renderer.domElement)) {
            renderer.domElement.remove();
          }
          renderer = null;
        }
      };
    });

    return () => {
      isDisposed = true;
      cancelAnimationFrame(initFrameId);
      if (cleanupHandler) cleanupHandler();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height,
        position: "relative",
      }}
      className="bg-neutral-950 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
        className="pointer-events-auto cursor-crosshair"
      />
    </div>
  );
}

