import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import type { IconName } from "@/components/Icon/Icon";
import BrandMark from "@/components/BrandMark/BrandMark";
import { usePageTitle } from "@/hooks/usePageTitle";
import { verticals } from "@/data/verticals";
import styles from "./Home.module.css";

const PILLARS: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "horizon",
    title: "Long-Horizon Ownership",
    description:
      "We build and hold. Aurentyr backs each venture with patient capital and a multi-decade view, not a quick exit.",
  },
  {
    icon: "support",
    title: "Operating Support",
    description:
      "Each vertical runs independently but draws on shared strategy, governance, and capital discipline from the group.",
  },
  {
    icon: "expansion",
    title: "Selective Expansion",
    description:
      "We add verticals deliberately — entering sectors where durable value can be built, from land to applied AI.",
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
            "Aurentyr is a holding company building and operating a group of businesses across land, property, and AI healthcare.",
          subOrganization: verticals.map((v) => ({
            "@type": "Organization",
            name: v.name,
            description: v.tagline,
          })),
        })}
      </script>

      {/* Hero */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <BrandMark size={420} className={styles.heroWatermark} />
        <div className="container">
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
              Aurentyr is a holding company that builds, owns, and operates ventures across multiple
              sectors — anchored today in land and property, and expanding into AI healthcare.
            </p>
            <div className={styles.heroActions}>
              <Button as="link" to="/verticals" variant="primary" size="lg">
                Our Portfolio
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
              A focused portfolio of businesses, each operating in its own sector under the Aurentyr
              group.
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
            <span className={styles.sectionLabel}>How we operate</span>
            <h2 className={styles.sectionTitle} id="features-heading">
              A disciplined holding company
            </h2>
            <p className={styles.sectionDescription}>
              We give each business room to run, backed by the capital, governance, and long-term
              commitment of the group.
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
            We work with investors and partners who share a long-term view. Let's talk about where
            the group is headed.
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
