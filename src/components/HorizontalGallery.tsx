"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styles from "./HorizontalGallery.module.css";

interface GalleryItem {
  id: number;
  label: string;
  description: string;
  color: string;
  image: string;
}

const items: GalleryItem[] = [
  {
    id: 1,
    label: "Design Systems & Tokens",
    description: "Architecting scalable token systems and reusable component libraries for complex multi-product ecosystems.",
    color: "#252525",
    image: "/designsystem.svg",
  },
  {
    id: 2,
    label: "AI-Powered Workflows",
    description: "Designing dynamic interfaces that turn complex AI responses into intuitive, actionable user decisions.",
    color: "#515151",
    image: "/Gemini_Generated_Image_c1hyu3c1hyu3c1hy 1.jpg",
  },
  {
    id: 3,
    label: "0→1 Product Foundations",
    description: "Taking ambiguous concepts from early whiteboard sketches to polished, production-ready SaaS experiences.",
    color: "#252525",
    image: "/Frame 91.png",
  },
  {
    id: 4,
    label: "Core Architecture Pillars",
    description: "Structuring information hierarchy to streamline high-density data views and multi-step enterprise flows.",
    color: "#515151",
    image: "/last pillers.svg",
  },
  {
    id: 5,
    label: "Curated Visual Assets",
    description: "Crafting custom vectors, illustrations, and visual assets that strengthen brand identity across touchpoints.",
    color: "#252525",
    image: "/imagesgroup.svg",
  },
  {
    id: 6,
    label: "Knowledge & Research",
    description: "Grounding every design decision in continuous user feedback, qualitative research, and behavioral patterns.",
    color: "#515151",
    image: "/books (rasterized).svg",
  },
  {
    id: 7,
    label: "Strategy & Mastery",
    description: "Combining tactical execution with high-level strategic alignment to deliver measurable business outcomes.",
    color: "#252525",
    image: "/god (rasterized).svg",
  },
  {
    id: 8,
    label: "Agile & Dynamic Execution",
    description: "Iterating rapidly with developers to preserve design fidelity from initial prototypes through final deployment.",
    color: "#515151",
    image: "/horse (rasterized).svg",
  },
];

const ITEM_WIDTH = 400;
const GAP = 30;

export function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section className={styles.gallerySection}>
      <div ref={containerRef} className={styles.scrollContainer}>
        <div className={styles.stickyWrapper}>
          <motion.div className={styles.gallery} style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className={styles.galleryItem}
                style={
                  {
                    "--item-color": item.color,
                    "--item-image": `url("${item.image}")`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.itemContent}>
                  <span className={styles.itemNumber}>0{item.id}</span>
                  <h2 className={styles.itemLabel}>{item.label}</h2>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalGallery;
