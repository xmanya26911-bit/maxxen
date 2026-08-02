"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ForgeIcon, SculptIcon, AwakenIcon } from "./icons";

const crafts = [
  {
    numeral: "I",
    icon: <ForgeIcon className="h-7 w-7" />,
    title: "Forge",
    subtitle: "Bespoke Websites",
    body: "We forge bespoke websites that carry your brand's soul — landing pages, e-commerce realms, multi-page sanctuaries built in Next.js and React until they are beautiful, functional, and unforgettable.",
    tech: "Next.js · React · Tailwind CSS",
  },
  {
    numeral: "II",
    icon: <SculptIcon className="h-7 w-7" />,
    title: "Sculpt",
    subtitle: "Web Applications",
    body: "Sculpt interactive experiences that move your audience — dashboards that awaken buried insights, SaaS platforms that breathe, real-time tools built to perform and delight.",
    tech: "Web apps · Real-time · UX",
  },
  {
    numeral: "III",
    icon: <AwakenIcon className="h-7 w-7" />,
    title: "Awaken",
    subtitle: "Your Brand",
    body: "We give your brand a voice that whispers — and converts. Design systems that scale, motion that tells your story, accessibility that welcomes everyone in.",
    tech: "Design systems · Motion · A11y",
  },
];

export default function Services() {
  return (
    <section id="craft" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Our Craft">
          Three disciplines, one{" "}
          <span className="font-script font-normal lowercase text-copper">atelier</span>
        </SectionHeader>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {crafts.map((c, i) => (
            <Reveal key={c.numeral} delay={i * 0.12} className="h-full">
              <article className="card-craft group flex h-full flex-col p-8 md:p-9">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center border border-copper/60 text-copper transition-colors duration-300 group-hover:border-copper-bright">
                    {c.icon}
                  </span>
                  <span className="font-script text-3xl leading-none text-copper-dim">{c.numeral}</span>
                </div>
                <h3 className="mt-8 font-serif text-3xl text-ivory md:text-4xl">{c.title}</h3>
                <p className="mt-1 font-serif text-lg italic text-copper">{c.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ivory-dim/85">{c.body}</p>
                <div className="mt-7 border-t border-copper/20 pt-5">
                  <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-copper">{c.tech}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
