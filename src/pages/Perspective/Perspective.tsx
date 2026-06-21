import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal/Reveal";
import { usePageTitle } from "@/hooks/usePageTitle";
import styles from "./Perspective.module.css";

export default function Perspective() {
  usePageTitle("A Founding Perspective");

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className="container">
          <Reveal>
            <span className={styles.label}>Founding perspective</span>
            <h1 className={styles.title}>On building things that last</h1>
            <p className={styles.meta}>— The Founders, Aurentyr</p>
          </Reveal>
        </div>
      </header>

      <main className={styles.body} id="main-content">
        <div className={`container container--md ${styles.prose}`}>
          <Reveal>
            <p className={styles.lead}>
              Most organisations are built to exit. They raise capital to spend it, hire people to
              ship product, and measure their worth in multiples. We understand this model — it has
              produced extraordinary things. It is simply not the model we have chosen.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <p>
              We founded Aurentyr on a different premise: that the most valuable institutions in the
              world are not those that moved fastest, but those that endured longest. The businesses
              we admire most — and study most closely — share a quiet quality. They were built by
              people who intended to be around to see what they created. People for whom the next
              quarter was noise, and the next decade was the signal.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p>
              This is not a romantic notion. Endurance is a strategy. It means you can pass on
              short-term opportunity in favour of long-term position. It means the people inside
              your enterprises make decisions as owners, not as employees chasing a bonus cycle. It
              means you earn a different kind of trust — from your people, your counterparts, and
              the markets you serve.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p>
              We are building a group of businesses. Each is distinct — different sectors, different
              scales, different rhythms. What connects them is not a shared product category or a
              shared geography. It is a shared operating philosophy: run by people close to the
              work, backed by patient capital, and held to the standard of permanence.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p>
              We reveal little about how we operate. This is intentional. Our methods, our
              frameworks, the way we assess and develop enterprises — these are the result of years
              of thinking and doing, and they belong to the group. What we can say is that we are
              not passive. We are engaged, often deeply, with the businesses we steward. We are not
              a holding company in the traditional sense — a financial container that allocates
              capital and waits. We are builders.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p>
              There is a tension that lives at the heart of any institution that plans to endure:
              the tension between patience and urgency. We have found that the resolution is not to
              choose one over the other, but to apply each at the right level. Patient at the level
              of the enterprise — committed for the long term, unwilling to cut what matters in a
              bad quarter. Urgent at the level of the work — moving with precision, refusing to
              accept good enough, treating every year as if it matters, because it does.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p>
              We do not know exactly what Aurentyr will look like in twenty years. We know what we
              intend it to be: a name associated with quality, with discretion, and with the kind of
              stewardship that is increasingly rare. We know the people we want to work with, and
              the standards we will hold ourselves to. The rest — the size, the shape, the
              portfolio — will follow from the work.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p>
              If you are reading this as a potential partner, an investor, or simply someone curious
              about what we are building — we welcome your interest. We are selective about whom we
              work with, and we expect the same selectivity in return. The conversations worth having
              are the ones where both sides have done the thinking.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className={styles.closing}>
              We are building quietly, and with conviction. There is nothing more to say than that
              — and nothing less.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className={styles.footer}>
              <Link to="/contact" className={styles.cta}>
                Reach us in confidence
                <span aria-hidden="true">&nbsp;→</span>
              </Link>
              <Link to="/about" className={styles.back}>
                ← The institution
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
