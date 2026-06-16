import type { ReactNode } from "react";
import styles from "./PageShell.module.css";

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  narrow?: boolean;
}

export default function PageShell({ title, subtitle, children, narrow = true }: Props) {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container ${narrow ? "container--md" : ""}`}>{children}</div>
      </section>
    </div>
  );
}
