import PageShell from "@/components/PageShell/PageShell";
import Reveal from "@/components/Reveal/Reveal";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import styles from "./About.module.css";

const PRINCIPLES = [
  {
    label: "Patient capital",
    description:
      "We measure success in decades. Market cycles are noise; enduring value is signal.",
  },
  {
    label: "Operator-led",
    description:
      "Each vertical is run by people close to its market, with real accountability and full authority.",
  },
  {
    label: "Disciplined growth",
    description:
      "We enter only where we can build a durable position. Saying no is how we protect what matters.",
  },
  {
    label: "Integrity first",
    description:
      "We honour our commitments and build the kind of trust that compounds quietly over time.",
  },
] as const;

export default function About() {
  usePageTitle("The Institution");

  return (
    <PageShell
      title="The Institution"
      subtitle="We build for the long future — and say more through what we build than through what we announce."
    >
      <div className={styles.body}>
        <Reveal className={styles.row}>
          <span className={styles.rowLabel}>Origin</span>
          <div className={styles.rowContent}>
            <p>
              Aurentyr was founded on a simple conviction: lasting institutions are built by patient
              people who care more about the next decade than the next quarter. We are not a fund,
              not a consultancy, and not an accelerator. We are a steward — of capital, of
              enterprises, and of the people who run them.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className={styles.row}>
          <span className={styles.rowLabel}>Thesis</span>
          <div className={styles.rowContent}>
            <p>
              Lasting value is built, not traded. We back enterprises with strong fundamentals and
              the conviction to compound over time. Each vertical is chosen deliberately — where we
              believe the group can create defensible, durable advantage. We say more through what we
              build than through what we announce.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className={styles.row}>
          <span className={styles.rowLabel}>Convictions</span>
          <div className={styles.rowContent}>
            <ul className={styles.principles} role="list">
              {PRINCIPLES.map(({ label, description }, i) => (
                <Reveal key={label} as="li" delay={i * 60} className={styles.principle}>
                  <span className={styles.principleLabel}>{label}</span>
                  <span className={styles.principleDesc}>{description}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160} className={styles.row}>
          <span className={styles.rowLabel}>Direction</span>
          <div className={styles.rowContent}>
            <p>
              Today the group is anchored by its first vertical, with more in deliberate
              development. Our ambition is a resilient family of businesses — each chosen with care,
              each strengthening the whole. We introduce them in their time.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className={styles.row}>
          <span className={styles.rowLabel}>Leadership</span>
          <div className={styles.rowContent}>
            <p>
              Aurentyr is led by a founding team with conviction in long-horizon ownership. We let
              the work speak first.
            </p>
            <Link to="/perspective" className={styles.perspectiveLink}>
              Read our founding perspective
              <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
