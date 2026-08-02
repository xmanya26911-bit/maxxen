"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Bespoke Website");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Commission — ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`);
    window.location.href = `mailto:hello@maxxen.ai?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,oklch(0.24_0.05_30/0.5),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl px-6 lg:px-10">
        <SectionHeader eyebrow="Commission">
          Let&apos;s forge <span className="font-script font-normal lowercase text-copper">something beautiful</span>
        </SectionHeader>

        <Reveal>
          <p className="mx-auto max-w-xl text-center font-serif text-lg italic leading-relaxed text-ivory-dim md:text-xl">
            Tell us of your brand — its voice, its hunger, its dreams. We will answer with a design, a
            plan, and a handshake.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-sans text-[10px] uppercase tracking-[0.3em] text-copper">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Keeper of the brand"
                  className="input-dark"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-sans text-[10px] uppercase tracking-[0.3em] text-copper">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourkingdom.com"
                  className="input-dark"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block font-sans text-[10px] uppercase tracking-[0.3em] text-copper">
                What Shall We Forge?
              </label>
              <select id="service" value={service} onChange={(e) => setService(e.target.value)} className="input-dark">
                <option>Bespoke Website</option>
                <option>Web Application</option>
                <option>Design System / Brand</option>
                <option>Something Entirely New</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-sans text-[10px] uppercase tracking-[0.3em] text-copper">
                The Brief
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Speak of your vision…"
                className="input-dark resize-none"
              />
            </div>

            <div className="flex flex-col items-center gap-4 pt-2">
              <button type="submit" className="btn-copper w-full md:w-auto">
                Send the Brief
              </button>
              <p className="font-sans text-[11px] text-ivory-dim/60">
                Prefer a letter? Write to{" "}
                <a href="mailto:hello@maxxen.ai" className="text-copper underline decoration-copper/40 underline-offset-4 hover:text-copper-bright">
                  hello@maxxen.ai
                </a>{" "}
                — we answer within a day.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
