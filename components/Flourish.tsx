export default function Flourish({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-copper/70 ${className}`} aria-hidden>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-copper/60 md:w-28" />
      <span className="h-1.5 w-1.5 rotate-45 border border-copper/70" />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M12 2 L14.8 9.2 L22 12 L14.8 14.8 L12 22 L9.2 14.8 L2 12 L9.2 9.2 Z" />
      </svg>
      <span className="h-1.5 w-1.5 rotate-45 border border-copper/70" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-copper/60 md:w-28" />
    </div>
  );
}
