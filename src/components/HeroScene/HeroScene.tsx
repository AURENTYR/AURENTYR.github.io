interface HeroSceneProps {
  className?: string;
}

const HORIZON = 486;
const VX = 720;

// Perspective grid — vertical lines fan out from the vanishing point,
// horizontal lines bunch toward the horizon.
const V_LINES = Array.from({ length: 23 }, (_, i) => (i - 11) * 240);
const H_LINES = [496, 512, 534, 564, 606, 664, 742, 846, 900];

// Hand-placed starfield (deterministic — no random, stays stable across renders).
const STARS: [number, number, number][] = [
  [120, 70, 1.4],
  [260, 130, 1],
  [340, 60, 1.6],
  [470, 150, 1],
  [560, 90, 1.3],
  [690, 50, 1.1],
  [780, 120, 1.5],
  [880, 70, 1],
  [980, 140, 1.3],
  [1080, 60, 1.6],
  [1180, 120, 1],
  [1280, 80, 1.4],
  [1360, 150, 1.1],
  [200, 220, 1],
  [620, 200, 1.2],
  [1020, 230, 1],
  [1320, 250, 1.3],
  [60, 160, 1.1],
  [430, 250, 1],
  [840, 260, 1.2],
];

/**
 * Cinematic, futuristic hero backdrop — an original synthwave perspective grid
 * receding to a glowing horizon, over a deep-space gradient. Fully owned artwork
 * (no licensed imagery); scales to any viewport via preserveAspectRatio slice.
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
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#03110f" />
          <stop offset="0.4" stopColor="#06201d" />
          <stop offset="0.72" stopColor="#0a3330" />
          <stop offset="1" stopColor="#0c1f1f" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="0.5" cy="0.54" r="0.5">
          <stop offset="0" stopColor="#56f0d8" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#34dcc4" stopOpacity="0.18" />
          <stop offset="1" stopColor="#34dcc4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-grid-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34dcc4" stopOpacity="0.05" />
          <stop offset="1" stopColor="#34dcc4" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="hero-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a3330" stopOpacity="0" />
          <stop offset="1" stopColor="#041615" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#hero-sky)" />

      {STARS.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#cfeee7" opacity="0.7" />
      ))}

      {/* Horizon glow + sun ring */}
      <ellipse cx={VX} cy={HORIZON} rx="560" ry="240" fill="url(#hero-glow)" />
      <circle
        cx={VX}
        cy={HORIZON}
        r="78"
        fill="none"
        stroke="#7df0dd"
        strokeWidth="2"
        opacity="0.7"
      />
      <circle cx={VX} cy={HORIZON} r="78" fill="#0a3330" opacity="0.35" />

      {/* Perspective grid floor */}
      <g stroke="url(#hero-grid-fade)" strokeWidth="1.5">
        {V_LINES.map((dx, i) => (
          <line key={i} x1={VX} y1={HORIZON} x2={VX + dx} y2={900} />
        ))}
      </g>
      <g stroke="#34dcc4">
        {H_LINES.map((y, i) => (
          <line
            key={i}
            x1="0"
            y1={y}
            x2="1440"
            y2={y}
            strokeWidth={1 + i * 0.25}
            opacity={0.08 + i * 0.05}
          />
        ))}
      </g>

      <rect x="0" y={HORIZON} width="1440" height={900 - HORIZON} fill="url(#hero-floor)" />
    </svg>
  );
}
