import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "@/components/Button/Button";
import BrandMark from "@/components/BrandMark/BrandMark";
import Sparkle from "@/components/Sparkle/Sparkle";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/verticals", label: "Verticals", end: false },
  { to: "/about", label: "About", end: false },
] as const;

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Transparent overlay over the homepage hero, until the user scrolls or opens the menu.
  const overHero = isHome && !scrolled && !isOpen;

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) close();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [close]);

  return (
    <header className={`${styles.header} ${overHero ? styles.overHero : ""}`} role="banner">
      <nav className="container" aria-label="Main navigation">
        <div className={styles.inner}>
          <NavLink to="/" className={styles.logo} aria-label="Aurentyr home" onClick={close}>
            <BrandMark size={26} className={styles.logoMark} />
            <span className={styles.logoText}>Aurentyr</span>
            <Sparkle size={14} className={styles.logoSparkle} />
          </NavLink>

          <button
            type="button"
            className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ""}`}
            aria-controls="nav-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((o) => !o)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>

          <ul
            id="nav-menu"
            className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}
            role="list"
          >
            {NAV_LINKS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ""}`
                  }
                  onClick={close}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Button
                as="link"
                to="/contact"
                variant="primary"
                className={styles.cta}
                onClick={close}
              >
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
