interface BrandMarkProps {
  /** Rendered width/height in px. */
  size?: number;
  /** Accessible title. Omit for decorative use (mark is then hidden from AT). */
  title?: string;
  className?: string;
}

/**
 * Aurentyr monogram — a custom, geometric capital "A" built to stand alone.
 * Monoline and single-tone (inherits currentColor), drawn with a high crossbar
 * and a sharp apex for a restrained, timeless mark. Pairs with the lowercase
 * "urentyr" wordmark to read as "Aurentyr".
 */
export default function BrandMark({ size = 28, title, className }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <path d="M9 41 L24 6 L39 41" />
      <path d="M16.3 24 L31.7 24" />
    </svg>
  );
}
