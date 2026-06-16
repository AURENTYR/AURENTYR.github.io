import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import PageShell from "@/components/PageShell/PageShell";
import Button from "@/components/Button/Button";
import styles from "./Contact.module.css";

interface Fields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Fields>;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Full Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email Address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Contact | AURENTYR";
  }, []);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name as keyof Fields]) {
      setErrors(validate({ ...values, [name]: value }));
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate({ ...values, [name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(EMPTY).map((k) => [k, true])
    ) as Record<keyof Fields, boolean>;
    setTouched(allTouched);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    // GitHub Pages is static — simulate backend handoff.
    // Replace with actual endpoint (e.g. Formspree, Netlify Forms) when available.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <PageShell title="Contact" subtitle="Let's talk about what you're building">
        <div
          ref={successRef}
          className={styles.success}
          role="status"
          aria-live="polite"
          tabIndex={-1}
        >
          <strong>Message sent!</strong> Thank you for reaching out. We'll get back to you shortly.
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title="Contact" subtitle="Let's talk about what you're building">
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Contact form"
      >
        {(
          [
            { id: "name", label: "Full Name", type: "text", autocomplete: "name" },
            { id: "email", label: "Email Address", type: "email", autocomplete: "email" },
            { id: "subject", label: "Subject", type: "text", autocomplete: "off" },
          ] as const
        ).map(({ id, label, type, autocomplete }) => (
          <div key={id} className={styles.group}>
            <label className={styles.label} htmlFor={id}>
              {label}{" "}
              <span aria-hidden="true" className={styles.required}>
                *
              </span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              className={`${styles.input} ${touched[id] && errors[id] ? styles.inputError : ""}`}
              id={id}
              name={id}
              type={type}
              autoComplete={autocomplete}
              value={values[id]}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-required="true"
              aria-describedby={`${id}-error`}
              aria-invalid={touched[id] && !!errors[id] ? "true" : undefined}
            />
            <span
              id={`${id}-error`}
              className={styles.error}
              role="alert"
              aria-live="polite"
            >
              {touched[id] ? errors[id] : ""}
            </span>
          </div>
        ))}

        <div className={styles.group}>
          <label className={styles.label} htmlFor="message">
            Message{" "}
            <span aria-hidden="true" className={styles.required}>
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <textarea
            className={`${styles.input} ${styles.textarea} ${
              touched.message && errors.message ? styles.inputError : ""
            }`}
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-describedby="message-error"
            aria-invalid={touched.message && !!errors.message ? "true" : undefined}
          />
          <span id="message-error" className={styles.error} role="alert" aria-live="polite">
            {touched.message ? errors.message : ""}
          </span>
        </div>

        <div className={styles.actions}>
          <Button type="submit" variant="primary" size="lg" disabled={submitting}>
            {submitting ? "Sending…" : "Send Message"}
          </Button>
        </div>
      </form>
    </PageShell>
  );
}
