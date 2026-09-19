"use client";

import { useEffect } from "react";

const FRAMES = [
  "/favicon-frames/frame_0.png",
  "/favicon-frames/frame_1.png",
  "/favicon-frames/frame_2.png",
];

export function AnimatedFavicon() {
  useEffect(() => {
    let currentFrame = 0;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    let timer: NodeJS.Timeout | null = null;

    const startAnimation = () => {
      const update = () => {
        if (!ctx) return;
        const img = loadedImages[currentFrame];
        if (img) {
          ctx.clearRect(0, 0, 64, 64);
          ctx.drawImage(img, 0, 0, 64, 64);

          // Remove all existing icon links in <head> to force Chrome/Edge tab refresh
          const existing = document.querySelectorAll("link[rel*='icon']");
          existing.forEach((el) => el.remove());

          // Append fresh link tag with data URL
          const link = document.createElement("link");
          link.rel = "icon";
          link.type = "image/png";
          link.href = canvas.toDataURL("image/png");
          document.head.appendChild(link);
        }

        currentFrame = (currentFrame + 1) % loadedImages.length;
      };

      update();
      timer = setInterval(update, 700);
    };

    FRAMES.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages[idx] = img;
        loadedCount++;
        if (loadedCount === FRAMES.length) {
          startAnimation();
        }
      };
      // In case image is already cached
      if (img.complete) {
        loadedImages[idx] = img;
        loadedCount++;
        if (loadedCount === FRAMES.length) {
          startAnimation();
        }
      }
    });

    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return null;
}
