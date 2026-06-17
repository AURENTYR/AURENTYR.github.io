import PageShell from "@/components/PageShell/PageShell";
import Button from "@/components/Button/Button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { verticals } from "@/data/verticals";
import styles from "./Verticals.module.css";

const STATUS_LABEL: Record<string, string> = {
  active: "Active",
  "coming-soon": "Coming soon",
  announced: "Announced",
};

export default function Verticals() {
  usePageTitle("Verticals");

  return (
    <PageShell
      title="Our Verticals"
      subtitle="The businesses that make up the Aurentyr group — today and as we grow."
    >
      <ul className={styles.grid} role="list">
        {verticals.map((v) => (
          <li
            key={v.slug}
            className={`${styles.card} ${v.status !== "active" ? styles.cardSoon : ""}`}
          >
            <div className={styles.top}>
              <span className={styles.sector}>{v.sector}</span>
              <span
                className={`${styles.badge} ${
                  v.status === "active" ? styles.badgeActive : styles.badgeSoon
                }`}
              >
                {STATUS_LABEL[v.status] ?? v.status}
              </span>
            </div>

            <h2 className={styles.name}>{v.name}</h2>
            <p className={styles.description}>{v.description}</p>

            {v.href ? (
              <div className={styles.actions}>
                <Button as="link" to={v.href} variant="secondary" size="sm">
                  Learn more
                </Button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
