"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useInViewport } from "@/hooks/useInViewport";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

const fragmentShader = `
  uniform float u_time;
  varying vec2 vUv;

  void main( void ) {
    float time = u_time;
    vec2 pos = vUv;
    float amount = 1./10.;
    float thickness = sin(pos.y / 50.) + 0.025;

    vec3 color = vec3(0.97, 0.0, 0.25);
    if (mod((pos.y + (sin(time / 10. + pos.x * 5. - asin(pos.y) * 2.)* cos(time / 3.2))* sin(pos.x * 3. + pos.y * 5.)), amount) <= thickness) 
    {
      color = vec3(0.0, 0.05, 0.25);
    }

    gl_FragColor = vec4( color, 1.0);
  }
`;

interface ShaderCubeProps {
  height?: string | number;
}

export default function ShaderCube({ height = "100%" }: ShaderCubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(containerRef, "300px");
  const inViewportRef = useRef(inViewport);

  useEffect(() => {
    inViewportRef.current = inViewport;
  }, [inViewport]);

  useEffect(() => {
    let animationFrameId: number;
    let resizeObserver: ResizeObserver | null = null;
    let isDisposed = false;
    let cleanupHandler: (() => void) | null = null;

    const initFrameId = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container || isDisposed) return;

      const width = container.clientWidth || 800;
      const height = container.clientHeight || 500;

      // 1. Setup Scene, Camera, Renderer
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        0.1,
        1000
      );
      camera.position.set(5, 3, 10);
      camera.lookAt(0, 0, 0);

      let renderer: THREE.WebGLRenderer | null = null;
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(width, height, false);
      } catch (err) {
        console.warn("ShaderCube renderer initialization failed:", err);
        return;
      }

      if (!renderer || !renderer.getContext()) return;

      container.appendChild(renderer.domElement);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";

      // 2. Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;
      controls.minDistance = 4;
      controls.maxDistance = 20;
      controls.enablePan = false;
      controls.rotateSpeed = 0.5;

      // 3. Geometry, Uniforms, and Material
      const geometry = new THREE.BoxGeometry(3, 3, 3);

      const uniforms = {
        u_time: { value: 1.0 },
      };

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // 4. Resize Handler
      const onResize = () => {
        if (!renderer || !container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w <= 0 || h <= 0) return;

        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      };

      resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(container);

      // 5. Animation Loop
      const animate = () => {
        if (isDisposed) return;
        animationFrameId = requestAnimationFrame(animate);

        if (renderer && inViewportRef.current) {
          uniforms.u_time.value += 0.05;
          mesh.rotation.x += 0.01;

          controls.update();
          renderer.render(scene, camera);
        }
      };
      animate();

      cleanupHandler = () => {
        isDisposed = true;
        if (resizeObserver) resizeObserver.disconnect();
        cancelAnimationFrame(animationFrameId);

        geometry.dispose();
        material.dispose();
        controls.dispose();

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
      className="bg-[#050505] overflow-hidden"
    />
  );
}
