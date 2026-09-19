"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useInViewport } from "@/hooks/useInViewport";
import { DiamondCorner } from "@/components/ui/diamond-corner";

export function Section3PhotoParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallbackCanvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  const inViewport = useInViewport(containerRef, "300px");
  const inViewportRef = useRef(inViewport);

  useEffect(() => {
    inViewportRef.current = inViewport;
  }, [inViewport]);

  useEffect(() => {
    if (!webglSupported) return;

    let animFrameId: number;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let isDisposed = false;
    let cleanupHandler: (() => void) | null = null;

    const initFrameId = requestAnimationFrame(() => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas || isDisposed) return;

      // INITIALIZE THREE.JS RENDERER SAFELY
      let renderer: THREE.WebGLRenderer | null = null;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: false,
          powerPreference: "default",
        });
      } catch (err) {
        console.warn("Section 3: THREE.WebGLRenderer initialization failed:", err);
        setWebglSupported(false);
        return;
      }

      if (!renderer || !renderer.getContext()) {
        setWebglSupported(false);
        return;
      }

      // CONTEXT LOSS LISTENERS
      let isContextLost = false;

      const handleContextLost = (event: Event) => {
        event.preventDefault();
        isContextLost = true;
      };

      const handleContextRestored = () => {
        isContextLost = false;
      };

      canvas.addEventListener("webglcontextlost", handleContextLost, false);
      canvas.addEventListener("webglcontextrestored", handleContextRestored, false);

      // CONTAINER DIMENSIONS
      const width = canvas.clientWidth || container.clientWidth || 800;
      const height = canvas.clientHeight || container.clientHeight || 600;
      let windowHalfX = width / 2;
      let windowHalfY = height / 2;

      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
      let particleCount = 12000;
      if (screenWidth < 768) {
        particleCount = 3500;
      } else if (screenWidth < 1024) {
        particleCount = 7000;
      }

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // CAMERA & SCENE
      const fieldOfView = 60;
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
      const fogHex = 0x050505;
      scene.fog = new THREE.FogExp2(fogHex, 0.0006);

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(width, height, false);
      renderer.setClearColor(fogHex, 1);

      // SHARED BUFFER GEOMETRY FOR PARTICLES
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1600;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1600;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const parameters: [[number, number, number], number][] = [
        [[0.95, 1.0, 0.65], 18],
        [[0.75, 1.0, 0.70], 14],
        [[0.55, 1.0, 0.75], 10],
        [[0.35, 1.0, 0.75], 7],
        [[0.15, 1.0, 0.80], 4],
      ];

      const materials: THREE.PointsMaterial[] = [];
      const particleLayers: THREE.Points[] = [];

      for (let i = 0; i < parameters.length; i++) {
        const color = parameters[i][0];
        const size = parameters[i][1];

        materials[i] = new THREE.PointsMaterial({
          size,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        materials[i].color.setHSL(color[0], color[1], color[2]);

        const particles = new THREE.Points(geometry, materials[i]);

        particles.rotation.x = Math.random() * Math.PI * 2;
        particles.rotation.y = Math.random() * Math.PI * 2;
        particles.rotation.z = Math.random() * Math.PI * 2;

        scene.add(particles);
        particleLayers.push(particles);
      }

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        if (screenWidth < 768 || prefersReducedMotion) return;
        const rect = container.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;
        mouseX = (clientX - windowHalfX) * 0.5;
        mouseY = (clientY - windowHalfY) * 0.5;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      const resize = () => {
        if (!renderer || !canvas) return;

        const w = canvas.clientWidth || container.clientWidth;
        const h = canvas.clientHeight || container.clientHeight;

        if (w <= 0 || h <= 0) return;

        windowHalfX = w / 2;
        windowHalfY = h / 2;

        camera.aspect = w / h;
        camera.updateProjectionMatrix();

        renderer.setSize(w, h, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      let isPaused = false;
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isPaused = !entry.isIntersecting;
          });
        },
        { threshold: 0.05 }
      );
      intersectionObserver.observe(container);

      const render = () => {
        if (!renderer || isContextLost || isDisposed || !inViewportRef.current) return;

        const time = Date.now() * 0.0001;

        if (!prefersReducedMotion) {
          camera.position.x += (mouseX - camera.position.x) * 0.05;
          camera.position.y += (-mouseY - camera.position.y) * 0.05;
          camera.lookAt(scene.position);

          for (let i = 0; i < particleLayers.length; i++) {
            const layer = particleLayers[i];
            const speedMultiplier = (i + 1) * 0.4;
            layer.rotation.y = time * (i % 2 === 0 ? speedMultiplier : -speedMultiplier);
            layer.rotation.x = time * 0.2;
          }

          for (let i = 0; i < materials.length; i++) {
            const colorConfig = parameters[i][0];
            const h = (colorConfig[0] + time * 0.05) % 1;
            materials[i].color.setHSL(h, colorConfig[1], colorConfig[2]);
          }
        }

        renderer.render(scene, camera);
      };

      const animateLoop = () => {
        if (isDisposed) return;
        animFrameId = requestAnimationFrame(animateLoop);
        if (!isPaused && !isContextLost) {
          render();
        }
      };

      animateLoop();

      cleanupHandler = () => {
        isDisposed = true;
        cancelAnimationFrame(animFrameId);
        window.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("webglcontextlost", handleContextLost);
        canvas.removeEventListener("webglcontextrestored", handleContextRestored);
        if (resizeObserver) resizeObserver.disconnect();
        if (intersectionObserver) intersectionObserver.disconnect();

        particleLayers.forEach((layer) => {
          scene.remove(layer);
        });

        geometry.dispose();
        materials.forEach((mat) => mat.dispose());

        if (renderer) {
          renderer.dispose();
          renderer = null;
        }
      };
    });

    return () => {
      isDisposed = true;
      cancelAnimationFrame(initFrameId);
      if (cleanupHandler) cleanupHandler();
    };
  }, [webglSupported]);

  // HIGH-VISIBILITY 2D CANVAS FALLBACK IF WEBGL IS COMPLETELY DISABLED
  useEffect(() => {
    if (webglSupported) return;

    const container = containerRef.current;
    const canvas = fallbackCanvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth || 800);
    let height = (canvas.height = container.clientHeight || 600);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      hue: number;
      alpha: number;
    }> = [];

    const numParticles = 250;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        hue: Math.random() * 360,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    let animId: number;

    const draw = () => {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      const time = Date.now() * 0.001;

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentHue = (p.hue + time * 15 + idx) % 360;
        ctx.fillStyle = `hsla(${currentHue}, 90%, 65%, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = container.clientWidth || 800;
      height = canvas.height = container.clientHeight || 600;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [webglSupported]);

  return (
    <section
      id="particle-field-section"
      aria-labelledby="particle-field-heading"
      className="relative py-16 lg:py-24 bg-p-bg"
    >
      {/* Section Divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        {/* Section Subtext */}
        <div className="max-w-[1000px] mx-auto mb-10 text-center">
          <p className="font-adventor text-[15px] sm:text-[16px] leading-[25.6px] text-p-text max-w-[640px] mx-auto">
            3D particle system with continuous HSL color-shifting and multi-layer rotation.
          </p>
        </div>

        {/* Section Canvas Container */}
        <div className="relative border border-p-grey bg-black rounded-xs overflow-hidden shadow-2xs">
          <DiamondCorner position="top-left" />
          <DiamondCorner position="top-right" />
          <DiamondCorner position="bottom-left" />
          <DiamondCorner position="bottom-right" />

          <div
            ref={containerRef}
            className="relative w-full h-[500px] sm:h-[600px] lg:h-[680px] bg-[#050505]"
          >
            {webglSupported ? (
              <canvas
                key="webgl-canvas"
                ref={canvasRef}
                className="w-full h-full block pointer-events-auto cursor-crosshair"
              />
            ) : (
              <canvas
                key="fallback-canvas"
                ref={fallbackCanvasRef}
                className="w-full h-full block pointer-events-auto cursor-crosshair"
              />
            )}

            {/* Interaction Hint */}
            <div className="absolute bottom-6 left-8 z-10 pointer-events-none flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-adventor text-[13px] tracking-wider text-white/80 uppercase font-medium">
                Move cursor to steer camera
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

