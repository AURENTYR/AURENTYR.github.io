export type IconName = "horizon" | "support" | "expansion";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const PATHS: Record<IconName, JSX.Element> = {
  // Long-horizon ownership — faceted peaks over a long baseline.
  horizon: (
    <>
      <path d="M3 15 L9 7 L13 12 L18 5 L21 15" />
      <path d="M2 19 H22" />
    </>
  ),
  // Operating support — a shield that holds / governs.
  support: (
    <>
      <path d="M12 3 L20 6.5 V12 C20 16.5 12 21 12 21 C12 21 4 16.5 4 12 V6.5 Z" />
      <path d="M12 11.5 V13.5" />
    </>
  ),
  // Selective expansion — facets pushing outward from a center.
  expansion: (
    <>
      <path d="M12 8 V3 M9.5 5.5 L12 3 L14.5 5.5" />
      <path d="M12 16 V21 M9.5 18.5 L12 21 L14.5 18.5" />
      <path d="M8 12 H3 M5.5 9.5 L3 12 L5.5 14.5" />
      <path d="M16 12 H21 M18.5 9.5 L21 12 L18.5 14.5" />
    </>
  ),
};

/** Custom geometric icon set, drawn in the brand's facet language. */
export default function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {PATHS[name]}
    </svg>
  );
}
