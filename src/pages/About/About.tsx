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
    <PageShell title="About AURENTYR" subtitle="Our thesis, and where the group is headed">
      <section aria-label="Who we are">
        <h2>Who We Are</h2>
        <p>
          AURENTYR is a holding company. We build, own, and operate a group of businesses across
          distinct sectors — bringing long-term capital, shared governance, and operating discipline
          to each one, while letting every vertical run on its own terms.
        </p>
      </section>

      <section aria-label="Our thesis">
        <h2>Our Thesis</h2>
        <p>
          Lasting value is built, not traded. We back ventures with strong fundamentals and the
          patience to compound over time — starting with tangible assets in land and property, and
          extending into high-potential frontiers such as AI healthcare. Each new vertical is chosen
          deliberately, where we believe the group can create durable, defensible advantage.
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
          Today AURENTYR is anchored in land and property, with an AI healthcare venture in early
          development. Our long-term ambition is a resilient group of complementary businesses —
          added one vertical at a time, each strengthening the whole.
        </p>
      </section>

      <section aria-label="Leadership">
        <h2>Leadership</h2>
        {/* TODO: replace with real leadership bios and photos when available. */}
        <p>
          AURENTYR is led by a founding team with conviction in long-horizon ownership. Detailed
          leadership profiles will be published here soon.
        </p>
      </section>
    </PageShell>
  );
}
