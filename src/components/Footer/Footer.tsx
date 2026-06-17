import { Link } from "react-router-dom";
import BrandMark from "@/components/BrandMark/BrandMark";
import styles from "./Footer.module.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/verticals", label: "Verticals" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div>
          <Link to="/" className={styles.logo} aria-label="AURENTYR home">
            <BrandMark size={26} className={styles.logoMark} />
            <span>AURENTYR</span>
          </Link>
          <p className={styles.tagline}>
            A holding company building enduring businesses across multiple sectors.
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
            &copy; {new Date().getFullYear()} AURENTYR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
