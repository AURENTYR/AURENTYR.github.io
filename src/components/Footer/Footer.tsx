import { Link } from "react-router-dom";
import BrandMark from "@/components/BrandMark/BrandMark";
import styles from "./Footer.module.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/verticals", label: "Verticals" },
  { to: "/about", label: "About" },
  { to: "/perspective", label: "Perspective" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div>
          <Link to="/" className={styles.logo} aria-label="Aurentyr home">
            <BrandMark size={24} className={styles.logoMark} />
            <span className={styles.logoText}>urentyr</span>
          </Link>
          <p className={styles.tagline}>
            An enduring institution, stewarding exceptional businesses for the long future.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className={styles.links} role="list">
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={styles.link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Aurentyr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
