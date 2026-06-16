import { useEffect } from "react";
import Button from "@/components/Button/Button";
import styles from "./NotFound.module.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Page Not Found | AURENTYR";
  }, []);

  return (
    <section className={styles.page} aria-labelledby="error-heading">
      <div className="container">
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title} id="error-heading">
          Page Not Found
        </h1>
        <p className={styles.description}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Button as="link" to="/" variant="primary" size="lg">
            Go Home
          </Button>
          <Button as="link" to="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
