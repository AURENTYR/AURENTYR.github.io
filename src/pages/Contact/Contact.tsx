import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import PageShell from "@/components/PageShell/PageShell";
import Button from "@/components/Button/Button";
import { usePageTitle } from "@/hooks/usePageTitle";
import styles from "./Contact.module.css";

interface Fields {
  name: string;
  company: string;
  email: string;
  enquiryType: string;
  message: string;
}

type Errors = Partial<Record<keyof Fields, string>>;

const ENQUIRY_TYPES = ["Investment", "Partnership", "Other"] as const;

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
const FORMSPREE_ENDPOINT =
  FORMSPREE_ID && FORMSPREE_ID !== "your_form_id_here"
    ? `https://formspree.io/f/${FORMSPREE_ID}`
    : undefined;
const CONTACT_EMAIL =
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? "hello@aurentyr.com";

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.enquiryType.trim()) errors.enquiryType = "Please choose an enquiry type.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

const EMPTY: Fields = { name: "", company: "", email: "", enquiryType: "", message: "" };

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLDivElement>(null);

  usePageTitle("Contact");

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name as keyof Fields]) {
      setErrors(validate({ ...values, [name]: value }));
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate({ ...values, [name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot: bots fill the hidden _gotcha field. Silently treat as success.
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value;
    if (honeypot) {
      setStatus("success");
      return;
    }

    const allTouched = Object.fromEntries(Object.keys(EMPTY).map((k) => [k, true])) as Record<
      keyof Fields,
      boolean
    >;
    setTouched(allTouched);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // No backend on GitHub Pages — submit to Formspree if configured.
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          company: values.company,
          email: values.email,
          enquiryType: values.enquiryType,
          message: values.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <PageShell title="Get in Touch" subtitle="Partner or invest with Aurentyr">
        <div
          ref={successRef}
          className={styles.success}
          role="status"
          aria-live="polite"
          tabIndex={-1}
        >
          <strong>Thank you — your message is on its way.</strong> A member of the Aurentyr team
          will be in touch shortly.
        </div>
      </PageShell>
    );
  }

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `${values.enquiryType || "Enquiry"} — ${values.name || "Aurentyr website"}`
  )}&body=${encodeURIComponent(values.message)}`;

  return (
    <PageShell title="Get in Touch" subtitle="Partner or invest with Aurentyr">
      <p className={styles.intro}>
        We work with investors and partners who share a long-term view of the businesses we build.
        Tell us a little about your interest and we'll get back to you.
      </p>

      {status === "error" ? (
        <div className={styles.errorBox} role="alert">
          <strong>We couldn't send your message.</strong>{" "}
          {FORMSPREE_ENDPOINT
            ? "Please try again in a moment, or email us directly:"
            : "The form isn't connected yet — please email us directly:"}{" "}
          <a className={styles.errorLink} href={mailtoHref}>
            {CONTACT_EMAIL}
          </a>
        </div>
      ) : null}

      <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Contact form">
        {/* Honeypot — hidden from humans, filled by bots; Formspree discards these. */}
        <div className={styles.hp} aria-hidden="true">
          <label htmlFor="_gotcha">Leave this field empty</label>
          <input id="_gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>

        {(
          [
            { id: "name", label: "Name", type: "text", autocomplete: "name", required: true },
            {
              id: "company",
              label: "Company / Organisation",
              type: "text",
              autocomplete: "organization",
              required: false,
            },
            { id: "email", label: "Email", type: "email", autocomplete: "email", required: true },
          ] as const
        ).map(({ id, label, type, autocomplete, required }) => (
          <div key={id} className={styles.group}>
            <label className={styles.label} htmlFor={id}>
              {label}{" "}
              {required ? (
                <>
                  <span aria-hidden="true" className={styles.required}>
                    *
                  </span>
                  <span className="sr-only">(required)</span>
                </>
              ) : (
                <span className={styles.optional}>(optional)</span>
              )}
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
              required={required}
              aria-required={required || undefined}
              aria-describedby={`${id}-error`}
              aria-invalid={touched[id] && !!errors[id] ? "true" : undefined}
            />
            <span id={`${id}-error`} className={styles.error} role="alert" aria-live="polite">
              {touched[id] ? errors[id] : ""}
            </span>
          </div>
        ))}

        <div className={styles.group}>
          <label className={styles.label} htmlFor="enquiryType">
            Enquiry Type{" "}
            <span aria-hidden="true" className={styles.required}>
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <select
            className={`${styles.input} ${
              touched.enquiryType && errors.enquiryType ? styles.inputError : ""
            }`}
            id="enquiryType"
            name="enquiryType"
            value={values.enquiryType}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-describedby="enquiryType-error"
            aria-invalid={touched.enquiryType && !!errors.enquiryType ? "true" : undefined}
          >
            <option value="" disabled>
              Select one…
            </option>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <span id="enquiryType-error" className={styles.error} role="alert" aria-live="polite">
            {touched.enquiryType ? errors.enquiryType : ""}
          </span>
        </div>

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
          <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Message"}
          </Button>
        </div>
      </form>
    </PageShell>
  );
}
