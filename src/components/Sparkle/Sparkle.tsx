interface SparkleProps {
  size?: number;
  className?: string;
}

/**
 * Four-point star sparkle used as the wordmark flourish. Fills with
 * currentColor so it inherits the accent color from its parent.
 */
export default function Sparkle({ size = 14, className }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0 C12.6 7 17 11.4 24 12 C17 12.6 12.6 17 12 24 C11.4 17 7 12.6 0 12 C7 11.4 11.4 7 12 0 Z" />
    </svg>
  );
}
