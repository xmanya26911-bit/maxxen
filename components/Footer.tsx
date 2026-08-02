import { GitHubIcon, InstagramIcon, MailIcon } from "./icons";

const links = [
  { href: "#craft", label: "Our Craft" },
  { href: "#gallery", label: "Gallery" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-copper/15 bg-canvas-deep/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-14 lg:px-10">
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className="font-serif text-2xl font-semibold tracking-[0.08em] text-ivory">maxxen</span>
          <span className="font-sans text-[11px] font-medium tracking-[0.4em] text-copper">.AI</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-[10px] uppercase tracking-[0.28em] text-ivory-dim transition-colors hover:text-copper-bright"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/xmanya26911-bit"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center border border-copper/30 text-copper transition-colors hover:border-copper-bright hover:text-copper-bright"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://instagram.com/manyapatel.26911"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center border border-copper/30 text-copper transition-colors hover:border-copper-bright hover:text-copper-bright"
          >
            <InstagramIcon />
          </a>
          <a
            href="mailto:hello@maxxen.ai"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center border border-copper/30 text-copper transition-colors hover:border-copper-bright hover:text-copper-bright"
          >
            <MailIcon />
          </a>
        </div>

        <p className="text-center font-sans text-[10px] uppercase tracking-[0.3em] text-ivory-dim/50">
          © MMXXVI maxxen.ai — Forged with intent. Bespoke websites &amp; web applications.
        </p>
      </div>
    </footer>
  );
}
