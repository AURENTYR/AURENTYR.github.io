import Button from "@/components/Button/Button";
import { usePageTitle } from "@/hooks/usePageTitle";
import styles from "./Home.module.css";

const FEATURES = [
  {
    icon: "◈",
    title: "Precision Engineering",
    description:
      "Every detail is crafted with purpose. We hold our work to the highest standards of quality and reliability.",
  },
  {
    icon: "⟳",
    title: "Continuous Innovation",
    description:
      "Staying ahead means embracing change. We invest in emerging technologies and forward-thinking approaches.",
  },
  {
    icon: "◎",
    title: "Client-First Focus",
    description:
      "Your goals drive our decisions. We build partnerships rooted in transparency, trust, and shared success.",
  },
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
          name: "AURENTYR",
          url: "https://aurentyr.github.io",
          description:
            "AURENTYR — delivering excellence through innovation, precision, and forward-thinking solutions.",
        })}
      </script>

      {/* Hero */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Welcome to AURENTYR</span>
            <h1 className={styles.heroTitle} id="hero-heading">
              Built for the <span className={styles.highlight}>Future</span>,
              <br />
              Delivered Today.
            </h1>
            <p className={styles.heroDescription}>
              AURENTYR brings precision, innovation, and forward momentum to everything we do.
              Explore what we build and how we can work together.
            </p>
            <div className={styles.heroActions}>
              <Button as="link" to="/services" variant="primary" size="lg">
                Explore Services
              </Button>
              <Button as="link" to="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features} aria-labelledby="features-heading">
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What we offer</span>
            <h2 className={styles.sectionTitle} id="features-heading">
              Why Choose AURENTYR
            </h2>
            <p className={styles.sectionDescription}>
              We combine rigorous standards with creative thinking to deliver solutions that stand
              the test of time.
            </p>
          </header>

          <div className={styles.grid}>
            {FEATURES.map(({ icon, title, description }) => (
              <article key={title} className={styles.card}>
                <div className={styles.cardIcon} aria-hidden="true">
                  {icon}
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
            Ready to Start?
          </h2>
          <p className={styles.sectionDescription}>
            Let's explore how AURENTYR can bring your vision to life. Reach out and let's talk.
          </p>
          <div className={styles.ctaActions}>
            <Button as="link" to="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button as="link" to="/about" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
