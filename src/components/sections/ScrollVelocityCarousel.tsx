"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const N = 16;
const HALF = N / 2;
const STEP_X = 95;
const STEP_Y = -78;
const CONVEYOR_SPEED = 2.2;

const SPRING_STIFFNESS = 100;
const SPRING_DAMPING = 35;
const SPRING_MASS = 0.5;

const DEFAULT_IMAGES = Array.from(
  { length: N },
  (_, i) => `https://picsum.photos/seed/svc-${i}/600/800`
);

const DEFAULT_ITEMS = [
  {
    title: "Heritage FW25/26",
    detail: "Exploring tactile digital interfaces and volumetric motion.",
  },
  {
    title: "Drift Frame UI",
    detail: "High-frequency interaction system with fluid physics.",
  },
  {
    title: "Backlight Spatial",
    detail: "Volumetric light studies & real-time ray-marching shaders.",
  },
  {
    title: "Peripheral Vision",
    detail: "Generative canvas experiments with camera parallax.",
  },
  {
    title: "Shadow Work",
    detail: "Monochromatic editorial typography and micro-interactions.",
  },
  {
    title: "Hyperstasis System",
    detail: "Next-gen design system for high-density SaaS analytics.",
  },
  {
    title: "Spectral Shift",
    detail: "Color theory and chromatic dispersion shader experiments.",
  },
  {
    title: "Negative Space",
    detail: "Minimalist spatial composition and adaptive grid structure.",
  },
  {
    title: "Chroma Noise",
    detail: "Audio-reactive web graphics with WebGL particle streams.",
  },
  {
    title: "Grain & Static",
    detail: "Analog film emulation combined with modern CSS layout.",
  },
  {
    title: "Optical Bleed",
    detail: "Experimental refraction effects for landing page heroes.",
  },
  {
    title: "Resonance Engine",
    detail: "Interactive 3D viewport canvas for creative coding.",
  },
  {
    title: "Lumina Archive",
    detail: "Curated collection of spatial UI prototypes and assets.",
  },
  {
    title: "Abstract Motion",
    detail: "Velocity-based scroll interactions and dynamic physics.",
  },
  {
    title: "Zero Frequency",
    detail: "Dark-mode aesthetic sandbox testing micro-animations.",
  },
  {
    title: "Aura Kinetic",
    detail: "Curiosity-driven interface design and spatial interactions.",
  },
];

function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  let val = (v - min) % range;
  if (val < 0) val += range;
  return val + min;
}

function mapRange(
  v: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
  clampOut?: boolean
): number {
  const t = (v - inMin) / (inMax - inMin);
  let out = outMin + t * (outMax - outMin);
  if (clampOut) {
    const lo = Math.min(outMin, outMax);
    const hi = Math.max(outMin, outMax);
    out = Math.max(lo, Math.min(hi, out));
  }
  return out;
}

function mapPiecewise(v: number, xs: number[], ys: number[]): number {
  if (v <= xs[0]) return ys[0];
  if (v >= xs[xs.length - 1]) return ys[ys.length - 1];
  for (let i = 0; i < xs.length - 1; i++) {
    if (v >= xs[i] && v <= xs[i + 1]) {
      const t = (v - xs[i]) / (xs[i + 1] - xs[i]);
      return ys[i] + t * (ys[i + 1] - ys[i]);
    }
  }
  return ys[ys.length - 1];
}

interface ItemSpec {
  title: string;
  detail: string;
}

interface ScrollVelocityCarouselProps {
  images?: string[];
  items?: ItemSpec[];
  title?: string;
  count?: number;
}

export default function ScrollVelocityCarousel({
  images = DEFAULT_IMAGES,
  items = DEFAULT_ITEMS,
  title = "Scroll Velocity",
  count = N,
}: ScrollVelocityCarouselProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const planeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let smoothedVelocity = 0;
    let springVel = 0;
    let rafId: number;

    function getScrollProgress() {
      if (!section) return 0;
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = -rect.top;
      return Math.max(0, Math.min(1, scrolled / total));
    }

    function tick(now: number) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const currentScrollY = window.scrollY;
      const rawVelocity = dt > 0 ? (currentScrollY - lastScrollY) / dt : 0;
      lastScrollY = currentScrollY;

      const accel =
        (SPRING_STIFFNESS * (rawVelocity - smoothedVelocity) -
          SPRING_DAMPING * springVel) /
        SPRING_MASS;
      springVel += accel * dt;
      smoothedVelocity += springVel * dt;

      const waveStrength = mapRange(smoothedVelocity, -2500, 2500, -1, 1, true);
      const progress = getScrollProgress();
      const conveyor = progress * N * CONVEYOR_SPEED;

      for (let i = 0; i < N; i++) {
        const el = planeRefs.current[i];
        if (!el) continue;

        const raw = i - conveyor;
        const wrapped = wrap(-HALF, HALF, raw);

        const x = wrapped * STEP_X;
        const baseY = wrapped * STEP_Y;
        // Positive Z baseline so 3D raycast hit-testing works on all cards (z >= 0)
        const z = (HALF - Math.abs(wrapped)) * 35;
        const rotateY = mapRange(wrapped, -HALF, HALF, 22, -22, true);
        const opacity = mapPiecewise(
          wrapped,
          [-HALF, -HALF * 0.6, 0, HALF * 0.6, HALF],
          [0, 1, 1, 1, 0]
        );

        const phaseSign = Math.round(wrapped) % 2 === 0 ? 1 : -1;
        const rippleSkewY = waveStrength * phaseSign * 14;
        const rippleYOffset = waveStrength * Math.sin(wrapped * 0.9) * 30;
        const finalY = baseY + rippleYOffset;

        const w = el.offsetWidth;
        const h = el.offsetHeight;
        el.style.marginLeft = -w / 2 + "px";
        el.style.marginTop = -h / 2 + "px";
        el.style.transform =
          `translate3d(${x.toFixed(2)}px, ${finalY.toFixed(2)}px, ${z.toFixed(2)}px) ` +
          `rotateY(${rotateY.toFixed(2)}deg) skewY(${rippleSkewY.toFixed(2)}deg)`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = String(1000 - Math.round(Math.abs(wrapped) * 10));
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section ref={sectionRef} className="svc-section">
      <div className="svc-sticky">
        <div className="svc-header">
          <h2>
            {title}
            <span className="svc-count">({count})</span>
          </h2>

          <Link href="/" className="svc-back-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10H5M5 10L10 15M5 10L10 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <span className="svc-hint">Scroll to surf</span>

        <div className="svc-stage">
          {images.map((src, i) => {
            const item = items[i % items.length];
            return (
              <div
                key={i}
                className="svc-plane"
                ref={(el) => {
                  planeRefs.current[i] = el;
                }}
              >
                <div className="svc-plane-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="svc-plane-image"
                    src={src}
                    alt={item.title}
                    draggable={false}
                  />

                  {/* Hover Detail Card Overlay */}
                  <div className="svc-plane-hover-card">
                    <div className="svc-accent-line" />
                    <h3 className="svc-hover-title">{item.title}</h3>
                    <p className="svc-hover-detail">{item.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .svc-section {
          position: relative;
          height: 450vh;
          background: #000000;
          user-select: none;
        }
        .svc-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #000000;
        }
        .svc-header {
          position: absolute;
          top: 6vh;
          left: 5vw;
          right: 5vw;
          z-index: 50;
          color: #ffffff;
          font-family: var(--font-moderniz), ui-sans-serif, system-ui, sans-serif;
          display: flex;
          align-items: center;
          justify-content: space-between;
          pointer-events: auto;
        }
        .svc-header h2 {
          margin: 0;
          font-size: clamp(1.6rem, 4vw, 3.2rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .svc-count {
          font-size: 0.5em;
          font-weight: 400;
          margin-left: 0.4em;
          opacity: 0.6;
          font-family: var(--font-adventor), sans-serif;
        }
        .svc-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: ui-monospace, monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          padding: 0.5rem 1.25rem;
          backdrop-filter: blur(8px);
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .svc-back-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.4);
        }
        .svc-hint {
          position: absolute;
          bottom: 6vh;
          right: 5vw;
          z-index: 50;
          font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          pointer-events: none;
        }
        .svc-stage {
          position: relative;
          width: 100%;
          height: 100%;
          perspective: 1400px;
          transform-style: preserve-3d;
          pointer-events: auto;
        }
        .svc-plane {
          position: absolute;
          top: 50%;
          left: 50%;
          width: min(22vw, 280px);
          aspect-ratio: 3 / 4;
          will-change: transform, opacity;
          pointer-events: auto;
          cursor: pointer;
        }
        .svc-plane:hover {
          z-index: 9999 !important;
        }
        .svc-plane-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
          transform: scale(1) translateZ(0px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          pointer-events: auto;
        }
        .svc-plane:hover .svc-plane-inner {
          transform: scale(1.08) translateZ(40px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
        }
        .svc-plane-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }
        .svc-plane-hover-card {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.7) 75%,
            transparent 100%
          );
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .svc-plane:hover .svc-plane-hover-card {
          opacity: 1;
          transform: translateY(0);
        }
        .svc-accent-line {
          width: 28px;
          height: 2px;
          background: #ff0004;
          margin-bottom: 8px;
          border-radius: 1px;
        }
        .svc-hover-title {
          margin: 0 0 4px 0;
          font-family: var(--font-moderniz), "Orbitron", sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.25;
        }
        .svc-hover-detail {
          margin: 0;
          font-family: var(--font-adventor), sans-serif;
          font-size: 0.72rem;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.85);
        }
      `}</style>
    </section>
  );
}
