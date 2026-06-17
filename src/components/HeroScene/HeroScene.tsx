interface HeroSceneProps {
  className?: string;
}

/**
 * Cinematic full-bleed hero backdrop — an original, layered horizon at dawn in
 * the brand's teal/sage palette. Fully owned artwork (no licensed photography),
 * scales to any viewport via preserveAspectRatio slice. Evokes land, horizon,
 * and the group's long-term thesis.
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
          <stop offset="0" stop-color="#0c2425" />
          <stop offset="0.42" stop-color="#1a4441" />
          <stop offset="0.7" stop-color="#356a61" />
          <stop offset="0.86" stop-color="#8db09e" />
          <stop offset="1" stop-color="#e6e7d0" />
        </linearGradient>
        <radialGradient id="hero-sun" cx="0.61" cy="0.64" r="0.4">
          <stop offset="0" stop-color="#f6efd6" stop-opacity="0.6" />
          <stop offset="1" stop-color="#f6efd6" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#hero-sky)" />
      <circle cx="878" cy="576" r="420" fill="url(#hero-sun)" />

      <path
        d="M0 540 C 240 502, 480 560, 720 522 S 1200 502, 1440 540 L1440 900 L0 900 Z"
        fill="#6f968b"
        opacity="0.85"
      />
      <path
        d="M0 602 C 300 562, 520 622, 800 586 S 1240 602, 1440 576 L1440 900 L0 900 Z"
        fill="#43706a"
        opacity="0.92"
      />
      <path
        d="M0 672 C 280 702, 560 640, 840 682 S 1200 702, 1440 660 L1440 900 L0 900 Z"
        fill="#2b524e"
      />
      <path
        d="M0 786 C 360 742, 720 802, 1080 770 S 1380 760, 1440 782 L1440 900 L0 900 Z"
        fill="#17312e"
      />

      <ellipse cx="720" cy="566" rx="760" ry="26" fill="#ffffff" opacity="0.05" />
      <ellipse cx="720" cy="624" rx="900" ry="20" fill="#ffffff" opacity="0.04" />
    </svg>
  );
}
