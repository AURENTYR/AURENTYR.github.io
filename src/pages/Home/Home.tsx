import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import type { IconName } from "@/components/Icon/Icon";
import BrandMark from "@/components/BrandMark/BrandMark";
import HeroScene from "@/components/HeroScene/HeroScene";
import { usePageTitle } from "@/hooks/usePageTitle";
import { verticals } from "@/data/verticals";
import styles from "./Home.module.css";

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const PILLARS: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "horizon",
    title: "We build to hold",
    description:
      "Patient capital and a multi-decade view. We measure success in decades, not quarters.",
  },
  {
    icon: "support",
    title: "Autonomy with backing",
    description:
      "Each business runs on its own terms, with the conviction and resources of the group behind it.",
  },
  {
    icon: "expansion",
    title: "Deliberate by design",
    description:
      "We expand rarely and with intent. Few decisions, each made with care — and revealed in their time.",
  },
];

const ACTIVE_COUNT = verticals.filter((v) => v.status === "active").length;

export default function Home() {
  usePageTitle("");

  return (
    <>
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aurentyr",
          url: "https://aurentyr.github.io",
          description:
            "Aurentyr is a holding company that builds, owns, and operates enduring businesses across distinct sectors.",
          subOrganization: verticals.map((v) => ({
            "@type": "Organization",
            name: v.name,
            description: v.tagline,
          })),
        })}
      </script>

      {/* Hero */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <HeroScene className={styles.heroScene} />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <BrandMark size={16} className={styles.eyebrowMark} />A holding company
            </span>
            <h1 className={styles.heroTitle} id="hero-heading">
              Building enduring businesses,
              <br />
              <span className={styles.highlight}>one vertical at a time.</span>
            </h1>
            <p className={styles.heroDescription}>
              Aurentyr builds, owns, and operates enduring businesses across distinct sectors. We
              invest with conviction, hold for the long term, and reveal only what is necessary.
            </p>
            <div className={styles.heroActions}>
              <Button as="link" to="/verticals" variant="primary" size="lg">
                Our Portfolio
                <ArrowRight />
              </Button>
              <Button as="link" to="/contact" variant="outline" size="lg">
                Work With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Group at a Glance */}
      <section className={styles.glance} aria-labelledby="glance-heading">
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Group at a glance</span>
            <h2 className={styles.sectionTitle} id="glance-heading">
              {ACTIVE_COUNT === 1 ? "One active vertical, more on the way" : "Our verticals"}
            </h2>
            <p className={styles.sectionDescription}>
              A focused portfolio. Each business stands on its own, under a single long-term owner.
            </p>
          </header>

          <ul className={styles.glanceList} role="list">
            {verticals.map((v) => (
              <li key={v.slug} className={styles.glanceItem}>
                <div className={styles.glanceTop}>
                  <span className={styles.glanceSector}>{v.sector}</span>
                  <span
                    className={`${styles.badge} ${
                      v.status === "active" ? styles.badgeActive : styles.badgeSoon
                    }`}
                  >
                    {v.status === "active" ? "Active" : "Coming soon"}
                  </span>
                </div>
                <h3 className={styles.glanceName}>{v.name}</h3>
                <p className={styles.glanceTagline}>{v.tagline}</p>
              </li>
            ))}
          </ul>

          <div className={styles.glanceActions}>
            <Button as="link" to="/verticals" variant="secondary">
              View the full portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className={styles.features} aria-labelledby="features-heading">
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What we believe</span>
            <h2 className={styles.sectionTitle} id="features-heading">
              A disciplined holding company
            </h2>
            <p className={styles.sectionDescription}>
              A few convictions guide everything we do. The rest, we let the work speak for.
            </p>
          </header>

          <div className={styles.grid}>
            {PILLARS.map(({ icon, title, description }) => (
              <article key={title} className={styles.card}>
                <div className={styles.cardIcon} aria-hidden="true">
                  <Icon name={icon} size={26} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className="container">
          <h2 className={styles.sectionTitle} id="cta-heading">
            Invest or partner with Aurentyr
          </h2>
          <p className={styles.sectionDescription}>
            We work with investors and partners who share a long-term view. Conversations begin in
            confidence.
          </p>
          <div className={styles.ctaActions}>
            <Button as="link" to="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button as="link" to="/about" variant="outline" size="lg">
              Our Vision
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
