import PageShell from "@/components/PageShell/PageShell";
import { usePageTitle } from "@/hooks/usePageTitle";

const VALUES = [
  { label: "Integrity", description: "We say what we mean and do what we say." },
  { label: "Excellence", description: "Good enough is never enough." },
  { label: "Collaboration", description: "The best outcomes come from true partnership." },
  { label: "Curiosity", description: "We never stop learning." },
] as const;

export default function About() {
  usePageTitle("About");

  return (
    <PageShell title="About" subtitle="Who we are and what drives us">
      <section aria-label="Our mission">
        <h2>Our Mission</h2>
        <p>
          AURENTYR exists to bridge the gap between ambitious ideas and exceptional execution. We
          believe that great work starts with deep understanding — of the problem, the context, and
          the people involved.
        </p>
      </section>

      <section aria-label="Our values">
        <h2>Our Values</h2>
        <ul>
          {VALUES.map(({ label, description }) => (
            <li key={label}>
              <strong>{label}</strong> — {description}
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Our approach">
        <h2>Our Approach</h2>
        <p>
          Every engagement begins with listening. We take the time to understand your goals,
          constraints, and context before proposing solutions. From there, we move with clarity,
          precision, and purpose — delivering work that holds up over time.
        </p>
      </section>
    </PageShell>
  );
}
