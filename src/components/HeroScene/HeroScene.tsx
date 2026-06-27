import { useEffect, useRef } from "react";

interface HeroSceneProps {
  className?: string;
}

// Deterministic star positions: [cx, cy, r, twinkleDuration, twinkleDelay]
const STARS: [number, number, number, number, number][] = [
  [220,  130, 1.0, 5.2, 0.0],
  [430,   80, 1.2, 4.1, 1.4],
  [690,  150, 1.0, 6.8, 0.8],
  [930,   96, 1.1, 4.9, 2.1],
  [1160, 140, 1.0, 5.7, 0.4],
  [1290,  70, 1.2, 4.4, 1.8],
];

/**
 * Hero backdrop — a quiet, monumental threshold.
 * Stars twinkle via SVG declarative animation.
 * Aura slowly breathes. Scene parallaxes on scroll.
 */
export default function HeroScene({ className }: HeroSceneProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let rafId: number;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const svg = svgRef.current;
        if (!svg) return;
        // Parallax: scene drifts up at 18% scroll speed, capped at 120px
        const offset = Math.min(window.scrollY * 0.18, 120);
        svg.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      style={{ willChange: "transform" }}
    >
      <defs>
        <linearGradient id="hero-ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"    stopColor="#050c0c" />
          <stop offset="0.55" stopColor="#081413" />
          <stop offset="1"    stopColor="#0a1a18" />
        </linearGradient>
        <radialGradient id="hero-aura" cx="0.5" cy="0.72" r="0.55">
          <stop offset="0" stopColor="#3f8377" stopOpacity="0.22" />
          <stop offset="1" stopColor="#3f8377" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1"   stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Base field */}
      <rect width="1440" height="900" fill="url(#hero-ink)" />

      {/* Breathing aura */}
      <g style={{ transformOrigin: "720px 650px" }}>
        <ellipse cx="720" cy="650" rx="760" ry="320" fill="url(#hero-aura)">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.08;1"
            dur="6s"
            repeatCount="indefinite"
            additive="sum"
          />
          <animate
            attributeName="opacity"
            values="0.85;1;0.85"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>
      </g>

      {/* Twinkling stars */}
      {STARS.map(([x, y, r, dur, delay], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#cfe3dd">
          <animate
            attributeName="opacity"
            values="0.3;0.75;0.3"
            dur={`${dur}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values={`${r};${r * 1.5};${r}`}
            dur={`${dur}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Horizon line */}
      <rect x="0" y="638" width="1440" height="1" fill="url(#hero-line)" />
    </svg>
  );
}
