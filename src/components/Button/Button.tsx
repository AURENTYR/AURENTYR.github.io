import { Link } from "react-router-dom";
import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonAsButton = {
  as?: "button";
  to?: never;
} & ComponentPropsWithoutRef<"button">;

type ButtonAsLink = {
  as: "link";
  to: string;
  onClick?: MouseEventHandler;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  variant?: Variant;
  size?: Size;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], size !== "md" ? styles[size] : "", className]
    .filter(Boolean)
    .join(" ");

  if (rest.as === "link") {
    const {
      as: _as,
      to,
      onClick,
      ...linkRest
    } = rest as ButtonAsLink & {
      variant?: Variant;
      size?: Size;
      className?: string;
    };
    return (
      <Link to={to} className={cls} onClick={onClick} {...(linkRest as object)}>
        {children}
      </Link>
    );
  }

  const { as: _as, ...btnRest } = rest as ButtonAsButton & {
    variant?: Variant;
    size?: Size;
    className?: string;
  };
  return (
    <button className={cls} {...btnRest}>
      {children}
    </button>
  );
}
