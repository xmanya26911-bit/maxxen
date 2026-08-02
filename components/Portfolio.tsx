"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import OrnateFrame from "./OrnateFrame";
import { ArrowIcon } from "./icons";

const works = [
  {
    name: "Golden Willowe",
    type: "E-Commerce Website",
    img: "/portfolio/goldenwillowe.png",
    url: "https://goldenwillowe.vercel.app",
    desc: "A premium e-commerce vessel for artisanal cricket bats — where every grain of willow is honored in the design, and every pixel exists to convert.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    plaque: "GOLDEN WILLOWE · E-COMMERCE",
    featured: true,
  },
  {
    name: "KS Luxury Perfumes",
    type: "E-Commerce Website",
    img: "/portfolio/ksperfumes.png",
    url: "https://ksperfumes.vercel.app",
    desc: "A perfume house poured into pixels — cream, ink, and gold. An olfactory elegance translated into a boutique that sells with silence and grace.",
    tech: ["Next.js", "Tailwind CSS", "Zustand"],
    plaque: "KS LUXURY PERFUMES · E-COMMERCE",
  },
  {
    name: "Omega AI",
    type: "Web Application",
    img: "/portfolio/omega.png",
    url: "https://omega-chat-five.vercel.app",
    desc: "A multi-model AI platform with memory and cloud sync — an application that remembers, learns, and thinks in real time.",
    tech: ["Next.js", "OAuth", "Real-time"],
    plaque: "OMEGA AI · WEB APPLICATION",
  },
];

function WorkCard({ w, i }: { w: (typeof works)[number]; i: number }) {
  return (
    <figure className="group">
      <OrnateFrame
        plaque={w.plaque}
        overlay={
          <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-canvas-deep/95 via-canvas-deep/55 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="font-serif text-base italic leading-snug text-ivory md:text-lg">{w.desc}</p>
            <a
              href={w.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-copper-bright hover:text-ivory"
            >
              Visit the Work <ArrowIcon className="h-3 w-3" />
            </a>
          </div>
        }
      >
        <img
          src={w.img}
          alt={`${w.name} — ${w.type}`}
          className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </OrnateFrame>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl text-ivory md:text-3xl">{w.name}</h3>
          <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.32em] text-copper">{w.type}</p>
        </div>
        <span className="mt-1 shrink-0 font-script text-2xl text-copper-dim">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-3 max-w-lg text-sm leading-relaxed text-ivory-dim/80">{w.desc}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        {w.tech.map((t) => (
          <span
            key={t}
            className="border border-copper/40 px-2.5 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-ivory-dim/90"
          >
            {t}
          </span>
        ))}
        <a
          href={w.url}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-copper transition-colors hover:text-copper-bright"
        >
          Visit <ArrowIcon />
        </a>
      </div>
    </figure>
  );
}

export default function Portfolio() {
  const featured = works.find((w) => w.featured)!;
  const rest = works.filter((w) => !w.featured);

  return (
    <section id="gallery" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.22_0.04_30/0.35),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Gallery of Creations">
          Works that <span className="font-script font-normal lowercase text-copper">move</span> minds
          &amp; markets
        </SectionHeader>

        {/* Featured masterpiece */}
        <Reveal direction="left" className="mx-auto max-w-4xl">
          <WorkCard w={featured} i={0} />
        </Reveal>

        {/* Remaining pieces */}
        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
          {rest.map((w, i) => (
            <Reveal key={w.name} direction={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <WorkCard w={w} i={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
