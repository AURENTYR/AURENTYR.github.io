import PageShell from "@/components/PageShell/PageShell";
import Button from "@/components/Button/Button";
import { usePageTitle } from "@/hooks/usePageTitle";
import styles from "./Services.module.css";

const SERVICES = [
  {
    title: "Strategy & Consulting",
    description:
      "We help organizations define clear direction, align stakeholders, and build roadmaps that translate vision into action.",
  },
  {
    title: "Design & UX",
    description:
      "From wireframes to high-fidelity interfaces, we create experiences that are intuitive, accessible, and visually sharp.",
  },
  {
    title: "Engineering & Development",
    description:
      "Robust, performant, and maintainable — we build software that scales with your ambitions and stands up under real-world conditions.",
  },
  {
    title: "Quality & Delivery",
    description:
      "Rigorous QA, accessibility auditing, and performance optimization ensure every release meets the bar we hold ourselves to.",
  },
] as const;

export default function Services() {
  usePageTitle("Services");

  return (
    <PageShell title="Services" subtitle="What we do and how we can help" narrow={false}>
      <div className={styles.grid}>
        {SERVICES.map(({ title, description }) => (
          <article key={title} className={styles.card}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDescription}>{description}</p>
          </article>
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>Not sure which service fits your needs?</p>
        <Button as="link" to="/contact" variant="primary">
          Talk to Us
        </Button>
      </div>
    </PageShell>
  );
}
