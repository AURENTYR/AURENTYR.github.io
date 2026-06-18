import { Link } from "react-router-dom";
import HeroScene from "@/components/HeroScene/HeroScene";
import { usePageTitle } from "@/hooks/usePageTitle";
import { verticals } from "@/data/verticals";
import styles from "./Home.module.css";

const CONVICTIONS = [
  { title: "We build to hold", line: "Patient capital and a multi-decade view." },
  { title: "Autonomy with backing", line: "Each business runs on its own terms." },
  { title: "Deliberate by design", line: "We expand rarely, and with intent." },
] as const;

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
        })}
      </script>

      {/* Threshold */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <HeroScene className={styles.heroScene} />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Aurentyr — a holding company</span>
            <h1 className={styles.heroTitle} id="hero-heading">
              Institutions built to outlast us
            </h1>
            <p className={styles.heroLede}>
              We build, own, and operate enduring businesses — and reveal only what is necessary.
            </p>
            <Link to="/verticals" className={styles.heroLink}>
              The portfolio
              <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className={styles.statement} aria-label="What we are building">
        <div className="container">
          <p className={styles.statementText}>
            Some companies are built for a quarter. <span>Aurentyr is built for the century.</span>
          </p>
        </div>
      </section>

      {/* Convictions */}
      <section className={styles.section} aria-labelledby="beliefs-heading">
        <div className="container">
          <span className={styles.sectionLabel}>What we believe</span>
          <h2 className={styles.sectionTitle} id="beliefs-heading">
            A few convictions guide everything.
          </h2>
          <ul className={styles.rows} role="list">
            {CONVICTIONS.map(({ title, line }) => (
              <li key={title} className={styles.row}>
                <span className={styles.rowTitle}>{title}</span>
                <span className={styles.rowLine}>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Portfolio */}
      <section className={styles.section} aria-labelledby="portfolio-heading">
        <div className="container">
          <span className={styles.sectionLabel}>The portfolio</span>
          <h2 className={styles.sectionTitle} id="portfolio-heading">
            A focused group of enterprises.
          </h2>
          <ul className={styles.rows} role="list">
            {verticals.map((v) => (
              <li key={v.slug} className={styles.portfolioRow}>
                <span className={styles.portfolioSector}>{v.sector}</span>
                <span className={styles.portfolioName}>{v.name}</span>
                <span className={styles.portfolioStatus}>
                  {v.status === "active" ? "Active" : "In development"}
                </span>
              </li>
            ))}
          </ul>
          <Link to="/verticals" className={styles.quietLink}>
            All verticals
            <span aria-hidden="true">&nbsp;→</span>
          </Link>
        </div>
      </section>

      {/* Correspondence */}
      <section className={styles.closing} aria-label="Correspondence">
        <div className="container">
          <p className={styles.closingText}>
            Enquiries from investors and partners are welcome, in confidence.
          </p>
          <Link to="/contact" className={styles.quietLink}>
            Correspondence
            <span aria-hidden="true">&nbsp;→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
