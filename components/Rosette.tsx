const LINE_COUNT = 220;
const R_MIN = 4;
const R_MAX = 100;
const CENTER = 110;

const lines = Array.from({ length: LINE_COUNT }, (_, i) => {
  const angle = (i / LINE_COUNT) * Math.PI * 2;
  const r = R_MIN + (R_MAX - R_MIN) * ((1 - Math.cos(angle)) / 2);
  const x2 = CENTER + r * Math.cos(angle);
  const y2 = CENTER + r * Math.sin(angle);
  return { x1: CENTER, y1: CENTER, x2, y2 };
});

export default function Rosette({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 220 220"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="currentColor"
          strokeWidth={0.6}
        />
      ))}
    </svg>
  );
}
