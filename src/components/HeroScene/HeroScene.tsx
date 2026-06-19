interface HeroSceneProps {
  className?: string;
}

// A few barely-there points of light. Deterministic (no random) for stable renders.
const STARS: [number, number, number][] = [
  [220, 130, 1],
  [430, 80, 1.2],
  [690, 150, 1],
  [930, 96, 1.1],
  [1160, 140, 1],
  [1290, 70, 1.2],
];

/**
 * Hero backdrop — a quiet, monumental threshold rather than a busy scene.
 * Deep ink field, a single faint horizon, and a restrained glow. Fully owned
 * artwork; scales to any viewport via preserveAspectRatio slice.
 */
export default function HeroScene({ className }: HeroSceneProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hero-ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#050c0c" />
          <stop offset="0.55" stopColor="#081413" />
          <stop offset="1" stopColor="#0a1a18" />
        </linearGradient>
        <radialGradient id="hero-aura" cx="0.5" cy="0.72" r="0.55">
          <stop offset="0" stopColor="#3f8377" stopOpacity="0.22" />
          <stop offset="1" stopColor="#3f8377" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#hero-ink)" />
      <ellipse cx="720" cy="650" rx="760" ry="320" fill="url(#hero-aura)" />

      {STARS.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#cfe3dd" opacity="0.5" />
      ))}

      <rect x="0" y="638" width="1440" height="1" fill="url(#hero-line)" />
    </svg>
  );
}
