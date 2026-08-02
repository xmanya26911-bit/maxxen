"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`mb-14 text-center md:mb-20 ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.06] text-ivory md:text-6xl">
        {children}
      </h2>
    </Reveal>
  );
}
