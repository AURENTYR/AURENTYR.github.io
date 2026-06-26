import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell/PageShell";
import Reveal from "@/components/Reveal/Reveal";
import { usePageTitle } from "@/hooks/usePageTitle";
import { verticals } from "@/data/verticals";
import styles from "./Verticals.module.css";

export default function Verticals() {
  usePageTitle("Verticals");

  return (
    <PageShell
      title="The Portfolio"
      subtitle="The enterprises we steward — today, and as they emerge."
      narrow={false}
    >
      <ul className={styles.list} role="list">
        {verticals.map((v, i) => (
          <Reveal key={v.slug} as="li" delay={i * 100} className={styles.item}>
            <div className={styles.meta}>
              <span className={styles.sector}>{v.sector}</span>
              <span className={styles.status}>
                {v.status === "active" ? "Active" : "In development"}
              </span>
            </div>
            <div className={styles.body}>
              <h2 className={styles.name}>{v.name}</h2>
              <p className={styles.description}>{v.description}</p>
              {v.status === "active" && (
                <Link to={`/verticals/${v.slug}`} className={styles.viewLink}>
                  View position <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}
