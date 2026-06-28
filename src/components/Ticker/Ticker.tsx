import styles from "./Ticker.module.css";

const PHRASES = [
  "Patient capital",
  "Held for decades",
  "Deliberate selection",
  "Built to endure",
  "Quality without display",
  "Permanence over scale",
  "Autonomy with backing",
  "Operator-led",
  "Integrity first",
  "No exit pressure",
  "The long future",
  "Durable by design",
];

export default function Ticker() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {[...PHRASES, ...PHRASES].map((phrase, i) => (
          <span key={i} className={styles.item}>
            {phrase}
            <span className={styles.dot}>&nbsp;·&nbsp;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
