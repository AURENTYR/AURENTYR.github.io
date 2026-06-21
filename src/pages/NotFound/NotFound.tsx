import Button from "@/components/Button/Button";
import { usePageTitle } from "@/hooks/usePageTitle";
import styles from "./NotFound.module.css";

export default function NotFound() {
  usePageTitle("404 — Page Not Found");

  return (
    <section className={styles.page} aria-labelledby="error-heading">
      <div className="container">
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title} id="error-heading">
          This page does not exist
        </h1>
        <p className={styles.description}>The page you sought has moved, or never was.</p>
        <div className={styles.actions}>
          <Button as="link" to="/" variant="primary" size="lg">
            Return home
          </Button>
          <Button as="link" to="/contact" variant="secondary" size="lg">
            Correspondence
          </Button>
        </div>
      </div>
    </section>
  );
}
