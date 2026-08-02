"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const cls = {
    tl: "left-0 top-0",
    tr: "right-0 top-0 rotate-90",
    bl: "left-0 bottom-0 -rotate-90",
    br: "right-0 bottom-0 rotate-180",
  }[pos];
  return (
    <span className={`pointer-events-none absolute z-20 h-6 w-6 text-copper ${cls}`} aria-hidden>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-full w-full">
        <path d="M2 22 V6 Q2 2 6 2 H22" />
        <circle cx="5.5" cy="5.5" r="1.7" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

export default function OrnateFrame({
  children,
  className = "",
  plaque,
  overlay,
}: {
  children: ReactNode;
  className?: string;
  plaque?: string;
  overlay?: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.012 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group/frame relative ${className}`}
    >
      <div className="relative rounded-[3px] border border-copper/50 bg-canvas-raised p-2 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9),0_0_60px_-20px_oklch(0.66_0.14_32/0.35)] transition-shadow duration-500 group-hover/frame:shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9),0_0_90px_-14px_oklch(0.75_0.13_40/0.6)]">
        <div className="relative border border-copper-bright/35 p-1.5">
          <div className="relative overflow-hidden border border-copper/15 bg-canvas-deep">
            {children}
            {overlay}
          </div>
          <Corner pos="tl" />
          <Corner pos="tr" />
          <Corner pos="bl" />
          <Corner pos="br" />
        </div>
      </div>
      {plaque && (
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-copper/50" />
          <span className="font-sans text-[9px] uppercase tracking-[0.34em] text-copper/80">{plaque}</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-copper/50" />
        </div>
      )}
    </motion.div>
  );
}
