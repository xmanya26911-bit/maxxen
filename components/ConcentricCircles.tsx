export default function ConcentricCircles({
  className = "",
  rings = [190, 140, 95, 50],
  ticks = 24,
}: {
  className?: string;
  rings?: number[];
  ticks?: number;
}) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible" fill="none" stroke="currentColor">
        {rings.map((r, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={r}
            strokeWidth={i === rings.length - 1 ? 1.1 : 0.7}
            strokeDasharray={i % 2 === 1 ? "3 7" : undefined}
            opacity={1 - i * 0.16}
          />
        ))}
        <g strokeWidth="0.7" opacity="0.75">
          {Array.from({ length: ticks }).map((_, i) => {
            const a = (i * (360 / ticks) * Math.PI) / 180;
            const r1 = rings[rings.length - 1] + 6;
            const r2 = rings[rings.length - 1] + 12;
            return (
              <line
                key={i}
                x1={200 + r1 * Math.cos(a)}
                y1={200 + r1 * Math.sin(a)}
                x2={200 + r2 * Math.cos(a)}
                y2={200 + r2 * Math.sin(a)}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
