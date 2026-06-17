interface BrandMarkProps {
  /** Rendered width/height in px. */
  size?: number;
  /** Accessible title. Omit for decorative use (mark is then hidden from AT). */
  title?: string;
  className?: string;
}

/**
 * Aurentyr brand emblem — a faceted "A" fusing a keystone (the arch that holds
 * the group together) with two-tone facets (the gem / value motif). Colors come
 * from the brand-accent tokens so the mark stays on-brand in any context.
 * Scales cleanly from favicon size to hero.
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
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <polygon points="24,5 5,43 16,43 24,21" fill="var(--color-brand-accent)" />
      <polygon points="24,5 43,43 32,43 24,21" fill="var(--color-brand-accent-hover)" />
      <polygon points="17,32 31,32 31,38 17,38" fill="var(--color-brand-accent)" />
    </svg>
  );
}
