"use client";
import { m } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const A = "#A855F7", G = "#C084FC", V = "#7C3AED";

/** Hero: orbital rings + connected nodes. One subtle pulse on a few nodes only. */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const nodes = [
    [200, 60], [320, 120], [340, 250], [250, 340], [110, 320], [60, 200], [110, 100], [200, 200], [270, 190], [150, 240],
  ];
  const links = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[7,0],[7,2],[7,4],[7,6],[8,1],[8,7],[9,5],[9,7],[9,3]];
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Abstract network of connected nodes inside orbital rings" className="mx-auto h-auto w-full max-w-[460px]">
      <defs>
        <radialGradient id="hv-glow"><stop offset="0" stopColor={A} stopOpacity=".35" /><stop offset="1" stopColor={A} stopOpacity="0" /></radialGradient>
        <linearGradient id="hv-ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={G} /><stop offset="1" stopColor={V} /></linearGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#hv-glow)" />
      <circle cx="200" cy="200" r="170" fill="none" stroke="url(#hv-ring)" strokeOpacity=".35" />
      <circle cx="200" cy="200" r="120" fill="none" stroke={A} strokeOpacity=".2" strokeDasharray="3 7" />
      <circle cx="200" cy="200" r="70" fill="none" stroke={A} strokeOpacity=".2" />
      {links.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={A} strokeOpacity=".35" />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          {!reduce && i % 3 === 0 && (
            <m.circle cx={x} cy={y} r="5" fill={G}
              animate={{ r: [5, 14], opacity: [0.5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }} />
          )}
          <circle cx={x} cy={y} r={i === 7 ? 7 : 4.5} fill={i === 7 ? G : "#171222"} stroke={G} strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  );
}
