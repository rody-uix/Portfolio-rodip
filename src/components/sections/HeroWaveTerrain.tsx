"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface HeroWaveTerrainProps {
  onError?: () => void;
}

export default function HeroWaveTerrain({ onError }: HeroWaveTerrainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let initFrameId = 0;
    let animationFrameId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let isDisposed = false;
    let cleanupHandler: (() => void) | null = null;

    initFrameId = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container || isDisposed) return;

      let renderer: THREE.WebGLRenderer | null = null;
      let grid: THREE.GridHelper | null = null;
      let dots: THREE.Points | null = null;
      let dotsGeometry: THREE.BufferGeometry | null = null;
      let dotsMaterial: THREE.PointsMaterial | null = null;

      let mouseX = 0;
      let targetMouseX = 0;

      try {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0xffffff, 200, 1800);

        const camera = new THREE.PerspectiveCamera(55, width / height, 1, 5000);
        camera.position.set(0, 40, 180);
        camera.lookAt(0, 0, -300);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(width, height);
        renderer.setClearColor(0xffffff, 0);

        if (!renderer.getContext()) throw new Error("WebGL Context unavailable");
        container.appendChild(renderer.domElement);

        const gridSize = 2000;
        const gridDivisions = 100;
        grid = new THREE.GridHelper(gridSize, gridDivisions, 0xd0d0d0, 0xd0d0d0);

        const gridMat = grid.material as THREE.Material & { opacity: number };
        gridMat.transparent = true;
        gridMat.opacity = 0.15;
        gridMat.depthWrite = false;
        scene.add(grid);

        const half = gridSize / 2;
        const step = gridSize / gridDivisions;
        const positions: number[] = [];
        for (let x = -half; x <= half; x += step) {
          for (let z = -half; z <= half; z += step) {
            positions.push(x, 0, z);
          }
        }

        dotsGeometry = new THREE.BufferGeometry();
        dotsGeometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(positions, 3)
        );

        dotsMaterial = new THREE.PointsMaterial({
          color: 0x888888,
          size: 1.2,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.20,
          depthWrite: false,
        });

        dots = new THREE.Points(dotsGeometry, dotsMaterial);
        scene.add(dots);

        const clock = new THREE.Clock();

        const onMouseMove = (e: MouseEvent) => {
          if (prefersReducedMotion) return;
          const rect = container.getBoundingClientRect();
          const nx = (e.clientX - rect.left) / rect.width - 0.5;
          targetMouseX = nx * 8;
        };
        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
          if (isDisposed) return;
          animationFrameId = requestAnimationFrame(animate);

          if (!prefersReducedMotion) {
            const elapsed = clock.getElapsedTime();
            const speed = 3;
            const offset = (elapsed * speed) % step;

            mouseX += (targetMouseX - mouseX) * 0.05;

            if (grid) {
              grid.position.z = offset;
              grid.position.x = mouseX;
            }
            if (dots) {
              dots.position.z = offset;
              dots.position.x = mouseX;
            }
          }

          if (renderer) {
            renderer.render(scene, camera);
          }
        };
        animate();

        resizeObserver = new ResizeObserver(() => {
          if (!container || !renderer) return;
          const w = container.clientWidth;
          const h = container.clientHeight;
          if (w === 0 || h === 0) return;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        });
        resizeObserver.observe(container);

        cleanupHandler = () => {
          isDisposed = true;
          window.removeEventListener("mousemove", onMouseMove);
          cancelAnimationFrame(animationFrameId);
          resizeObserver?.disconnect();
          grid?.geometry.dispose();
          (grid?.material as THREE.Material)?.dispose();
          dotsGeometry?.dispose();
          dotsMaterial?.dispose();
          if (renderer) {
            renderer.forceContextLoss();
            renderer.dispose();
            const el = renderer.domElement;
            if (el && el.parentNode) {
              el.parentNode.removeChild(el);
            }
            renderer = null;
          }
        };
      } catch (err) {
        console.error("HeroWaveTerrain failed to initialize:", err);
        setFailed(true);
        onError?.();
      }
    });

    return () => {
      isDisposed = true;
      cancelAnimationFrame(initFrameId);
      if (cleanupHandler) cleanupHandler();
    };
  }, [onError]);

  if (failed) return null;

  return (
    <div
      ref={containerRef}
      data-horizon="true"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "78%",
        width: "100%",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 30%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 30%, black 100%)",
      }}
      aria-hidden="true"
    />
  );
}
