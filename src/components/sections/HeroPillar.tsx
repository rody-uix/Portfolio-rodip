"use client";

import PILLAR_SVG_INNER from "./pillarPaths";

interface HeroPillarProps {
  width?: number;
  height?: number;
  opacity?: number;
  style?: React.CSSProperties;
}

export default function HeroPillar({
  width = 130,
  height = 620,
  opacity = 1,
  style,
}: HeroPillarProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: `${width}px`,
        height: `${height}px`,
        pointerEvents: "none",
        userSelect: "none",
        opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-10px",
          transform: "translateX(-50%)",
          width: "190%",
          height: "30px",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0) 80%)",
          filter: "blur(3px)",
          pointerEvents: "none",
        }}
      />

      <svg
        viewBox="150 -60 540 4160"
        preserveAspectRatio="xMidYMax meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
        dangerouslySetInnerHTML={{ __html: PILLAR_SVG_INNER }}
      />
    </div>
  );
}
