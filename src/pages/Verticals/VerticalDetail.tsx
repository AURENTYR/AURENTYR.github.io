import { Link, useParams, Navigate } from "react-router-dom";
import Reveal from "@/components/Reveal/Reveal";
import { usePageTitle } from "@/hooks/usePageTitle";
import { verticals } from "@/data/verticals";
import styles from "./VerticalDetail.module.css";

export default function VerticalDetail() {
  const { slug } = useParams<{ slug: string }>();
  const vertical = verticals.find((v) => v.slug === slug);

  usePageTitle(vertical ? vertical.name : "Not found");

  if (!vertical) {
    return <Navigate to="/not-found" replace />;
  }

  const statusLabel =
    vertical.status === "active"
      ? "Active position"
      : vertical.status === "announced"
        ? "Announced"
        : "In development";

  return (
    <div className={styles.wrapper}>
      {/* ── Dark header ──────────────────────────────────────────────── */}
      <header className={styles.header}>
        <div className="container">
          <Reveal>
            <div className={styles.breadcrumb}>
              <Link to="/verticals" className={styles.breadcrumbLink}>
                ← The Portfolio
              </Link>
            </div>
            <span className={styles.label}>{vertical.sector}</span>
            <h1 className={styles.title}>{vertical.name}</h1>
            <p className={styles.tagline}>{vertical.tagline}</p>
            <span className={styles.status}>{statusLabel}</span>
          </Reveal>
        </div>
      </header>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <main className={styles.body} id="main-content">
        <div className={`container container--md ${styles.prose}`}>

          {/* Thesis */}
          {vertical.thesis && (
            <Reveal>
              <p className={styles.thesis}>{vertical.thesis}</p>
            </Reveal>
          )}

          {/* Coming-soon holding state */}
          {vertical.status === "coming-soon" && !vertical.thesis && (
            <Reveal>
              <p className={styles.thesis}>
                This position is taking shape. We will share our thesis and approach when
                the time is right — consistent with how we operate everything at Aurentyr.
              </p>
            </Reveal>
          )}

          {/* Sections */}
          {vertical.sections && vertical.sections.length > 0 && (
            <div className={styles.sections}>
              {vertical.sections.map((section, i) => (
                <Reveal key={section.label} delay={i * 60}>
                  <div className={styles.section}>
                    <h2 className={styles.sectionLabel}>{section.label}</h2>
                    <p className={styles.sectionContent}>{section.content}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* Principles */}
          {vertical.principles && vertical.principles.length > 0 && (
            <Reveal delay={120}>
              <div className={styles.principlesBlock}>
                <h2 className={styles.principlesHeading}>Operating principles</h2>
                <ul className={styles.principles} role="list">
                  {vertical.principles.map((p) => (
                    <li key={p} className={styles.principle}>
                      <span className={styles.principleMarker} aria-hidden="true">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Footer */}
          <Reveal delay={160}>
            <div className={styles.footer}>
              <Link to="/contact" className={styles.cta}>
                Reach us in confidence
                <span aria-hidden="true">&nbsp;→</span>
              </Link>
              <Link to="/verticals" className={styles.back}>
                ← The Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
