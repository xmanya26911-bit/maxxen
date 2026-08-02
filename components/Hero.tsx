"use client";

import { motion } from "framer-motion";
import OrnateFrame from "./OrnateFrame";
import ConcentricCircles from "./ConcentricCircles";
import Flourish from "./Flourish";

const EASE = [0.16, 1, 0.3, 1] as const;

function RotatingSeal({ text = "BESPOKE · HANDCRAFTED · DIGITAL · " }: { text?: string }) {
  return (
    <div className="relative h-28 w-28">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" style={{ animation: "spin-slow 26s linear infinite" }}>
        <defs>
          <path id="seal-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-copper" style={{ fontSize: "8.4px", letterSpacing: "2.6px" }}>
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-2.5 w-2.5 rotate-45 bg-copper shadow-[0_0_14px_2px_oklch(0.66_0.14_32/0.6)]" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-44">
      {/* ambient light */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_72%_18%,oklch(0.25_0.04_30/0.5),transparent_60%),radial-gradient(50%_45%_at_8%_85%,oklch(0.19_0.05_260/0.45),transparent_60%)]"
        aria-hidden
      />

      {/* large circle motifs */}
      <ConcentricCircles className="absolute -bottom-48 -left-44 h-[480px] w-[480px] text-copper/25" rings={[230, 180, 130, 80]} />
      <ConcentricCircles className="absolute -top-24 right-[-130px] h-[360px] w-[360px] text-copper/20" rings={[170, 130, 90, 50]} />

      {/* hand-drawn connector */}
      <svg
        className="pointer-events-none absolute left-[56%] top-[96%] hidden h-44 w-80 text-copper/30 lg:block"
        viewBox="0 0 320 176"
        fill="none"
        aria-hidden
      >
        <path d="M12 14 C 96 48, 148 142, 308 160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 7" />
        <path d="M296 152 l12 8 -8 -12 z" fill="currentColor" />
        <circle cx="12" cy="14" r="2.5" fill="currentColor" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:px-10">
        {/* LEFT — copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="eyebrow"
          >
            A Digital Atelier
          </motion.p>

          <h1 className="mt-7 font-serif leading-[0.98]">
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="block text-[2.9rem] font-medium tracking-[0.04em] text-ivory md:text-7xl"
            >
              WE FORGE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24, ease: EASE }}
              className="my-1 block font-script text-5xl font-normal text-copper md:my-2 md:text-7xl"
            >
              digital vessels
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease: EASE }}
              className="block text-[2.9rem] font-medium tracking-[0.04em] text-ivory md:text-7xl"
            >
              WITH SOUL
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
            className="mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-ivory-dim md:text-2xl"
          >
            We design &amp; build custom websites and web applications that move minds and markets.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.64, ease: EASE }}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory-dim/85"
          >
            Not templates. Not AI generators. Bespoke digital experiences where every pixel, every
            interaction, every line of code is chosen intentionally — to express your brand&apos;s soul
            and drive real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.76, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a href="#contact" className="btn-copper">
              Commission a Work
            </a>
            <a href="#gallery" className="btn-ghost">
              Enter the Gallery
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-12 flex items-center gap-6 font-sans text-[10px] uppercase tracking-[0.3em] text-copper-dim"
          >
            <span>Est. MMXXV</span>
            <span className="h-3 w-px bg-copper/40" />
            <span>Founder-Led</span>
            <span className="h-3 w-px bg-copper/40" />
            <span>No Templates</span>
          </motion.div>
        </div>

        {/* RIGHT — framed artwork */}
        <motion.div
          initial={{ opacity: 0, x: 44 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="pointer-events-none absolute -inset-8 -z-10">
            <ConcentricCircles className="h-full w-full text-copper/30" rings={[200, 160, 118, 76]} />
          </div>
          <OrnateFrame plaque="GOLDEN WILLOWE · E-COMMERCE · SRINAGAR">
            <img
              src="/portfolio/goldenwillowe.png"
              alt="Golden Willowe — premium cricket bat e-commerce website"
              className="aspect-[4/3] w-full object-cover object-top"
            />
          </OrnateFrame>
          <div className="absolute -bottom-9 -left-5 md:-left-9">
            <RotatingSeal />
          </div>
        </motion.div>
      </div>

      <Flourish className="mt-24" />
    </section>
  );
}
