"use client";

import Reveal from "./Reveal";
import ConcentricCircles from "./ConcentricCircles";

const steps = [
  { n: "01", label: "Listen" },
  { n: "02", label: "Interpret" },
  { n: "03", label: "Forge" },
  { n: "04", label: "Unveil" },
];

export default function About() {
  return (
    <section id="philosophy" className="relative overflow-hidden py-24 md:py-32">
      <ConcentricCircles
        className="absolute -right-44 top-8 h-[420px] w-[420px] text-copper/20"
        rings={[200, 150, 100, 55]}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        {/* LEFT — layered art */}
        <Reveal direction="left" className="relative mx-auto w-full max-w-md">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-12 -z-10">
              <ConcentricCircles className="h-full w-full text-copper/30" rings={[190, 150, 110, 70]} />
            </div>
            <div className="relative mx-auto w-72 md:w-80">
              <div className="rounded-full border border-copper/50 bg-canvas-raised p-2.5 shadow-[0_0_80px_-20px_oklch(0.66_0.14_32/0.55)]">
                <div className="relative overflow-hidden rounded-full border border-copper-bright/40">
                  <img
                    src="/portfolio/ksperfumes.png"
                    alt="KS Luxury Perfumes — a study in olfactory design"
                    className="aspect-[3/4] w-full object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.55)]" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="font-script text-3xl text-copper">a study in</p>
                <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.34em] text-ivory-dim/70">
                  Olfactory Design · MMXXVI
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT — philosophy */}
        <Reveal direction="right">
          <p className="eyebrow">Philosophy</p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.05] text-ivory md:text-6xl">
            The soul of <span className="font-script font-normal lowercase text-copper">our craft</span>
          </h2>

          <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-ivory-dim md:text-xl">
            <p>Every brand has a soul. Most websites never find it.</p>
            <p>
              We are <span className="font-semibold text-copper-bright">maxxen</span> — a small,
              founder-led atelier of designers and engineers who believe a website should be{" "}
              <span className="italic text-ivory">felt, not just seen</span>. We do not push templates.
              We listen — to your voice, your market, your hunger — and translate it into form:
              typography that speaks, color that carries emotion, interactions that breathe.
            </p>
            <p className="italic text-ivory">This is not sterile tech. This is craftsmanship with a compiler.</p>
            <p>
              When you commission us, your project is not a ticket in a queue. It is a collaboration
              between artists and craftspeople who care — every line of code signed, every pixel
              defended, every detail intentional.
            </p>
          </div>

          {/* rite of commission */}
          <div className="mt-12">
            <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-copper">
              The Rite of Commission
            </p>
            <div className="mt-7 grid grid-cols-4 gap-2">
              {steps.map((s, i) => (
                <div key={s.n} className="relative text-center">
                  {i < steps.length - 1 && (
                    <span className="absolute left-[62%] top-4 hidden h-px w-[76%] bg-gradient-to-r from-copper/50 to-copper/20 md:block" />
                  )}
                  <span className="relative mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-copper/50 font-serif text-[11px] text-copper">
                    {s.n}
                  </span>
                  <p className="mt-2.5 font-sans text-[9px] uppercase tracking-[0.24em] text-ivory-dim/80">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
