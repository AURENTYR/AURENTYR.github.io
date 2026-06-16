import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div>
          <Link to="/" className={styles.logo} aria-label="AURENTYR home">
            AURENTYR
          </Link>
          <p className={styles.tagline}>Delivering excellence through innovation and precision.</p>
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
            &copy; {new Date().getFullYear()} AURENTYR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
