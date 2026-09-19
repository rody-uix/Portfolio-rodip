"use client";

import { useEffect, useState, RefObject } from "react";

export function useInViewport(
  ref: RefObject<HTMLElement | null>,
  rootMargin = "300px"
): boolean {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inViewport;
}
