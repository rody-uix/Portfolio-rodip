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
    let faviconLink = document.getElementById("animated-favicon-link") as HTMLLinkElement | null;

    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.id = "animated-favicon-link";
      faviconLink.rel = "icon";
      faviconLink.type = "image/png";
      document.head.appendChild(faviconLink);
    }

    const startAnimation = () => {
      const update = () => {
        if (!ctx || !faviconLink) return;
        const img = loadedImages[currentFrame];
        if (img) {
          ctx.clearRect(0, 0, 64, 64);
          ctx.drawImage(img, 0, 0, 64, 64);
          faviconLink.href = canvas.toDataURL("image/png");
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
      if (faviconLink && faviconLink.parentNode) {
        faviconLink.parentNode.removeChild(faviconLink);
      }
    };
  }, []);

  return null;
}
