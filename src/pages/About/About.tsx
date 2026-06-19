import PageShell from "@/components/PageShell/PageShell";
import { usePageTitle } from "@/hooks/usePageTitle";

const PRINCIPLES = [
  {
    label: "Patient capital",
    description: "We invest for the long term and measure success in decades, not quarters.",
  },
  {
    label: "Operator-led",
    description: "Each vertical is run by people close to its market, with real accountability.",
  },
  {
    label: "Disciplined growth",
    description: "We expand only into sectors where we can build durable, defensible value.",
  },
  {
    label: "Integrity first",
    description: "We say what we mean, honour our commitments, and build trust that compounds.",
  },
] as const;

export default function About() {
  usePageTitle("About");

  return (
    <PageShell title="About Aurentyr" subtitle="Our thesis, and where the group is headed">
      <section aria-label="Who we are">
        <h2>Who We Are</h2>
        <p>
          Aurentyr is an enduring institution. We build and steward exceptional businesses across
          distinct sectors — bringing long-term capital and quiet discipline to each, while letting
          every enterprise stand on its own terms.
        </p>
      </section>

      <section aria-label="Our thesis">
        <h2>Our Thesis</h2>
        <p>
          Lasting value is built, not traded. We back enterprises with strong fundamentals and the
          patience to compound over time. Each vertical is chosen deliberately, where we believe the
          group can create durable advantage — and we say more through what we build than through
          what we announce.
        </p>
      </section>

      <section aria-label="What guides us">
        <h2>What Guides Us</h2>
        <ul>
          {PRINCIPLES.map(({ label, description }) => (
            <li key={label}>
              <strong>{label}</strong> — {description}
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Where we are headed">
        <h2>Where We Are Headed</h2>
        <p>
          Today the group is anchored by its first vertical, with more in development. Our ambition
          is a resilient family of businesses — added deliberately, each strengthening the whole. We
          introduce each in its time.
        </p>
      </section>

      <section aria-label="Leadership">
        <h2>Leadership</h2>
        {/* TODO: replace with real leadership bios and photos when available. */}
        <p>
          Aurentyr is led by a founding team with conviction in long-horizon ownership. We let the
          work speak first; profiles will follow in their time.
        </p>
      </section>
    </PageShell>
  );
}
