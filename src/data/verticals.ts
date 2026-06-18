/**
 * Aurentyr group verticals — single source of truth.
 *
 * This file is the ONLY place you need to edit to add, remove, or update a
 * business vertical. The homepage "Group at a Glance" section and the
 * /verticals page both render directly from this array — no layout code
 * changes are required when the group grows.
 *
 * To add a new vertical: copy the commented TEMPLATE at the bottom of this
 * file, fill in every field, and append it to the `verticals` array.
 */

export type VerticalStatus = "active" | "coming-soon" | "announced";

export interface Vertical {
  /** URL-safe identifier, also used as the React key. */
  slug: string;
  /** Display name of the vertical / portfolio company. */
  name: string;
  /** Short sector label, e.g. "Land & Property". */
  sector: string;
  /** One-line summary shown on cards and the homepage glance. */
  tagline: string;
  /** Fuller paragraph shown on the Verticals page card. */
  description: string;
  /** Lifecycle stage — drives the status badge and styling. */
  status: VerticalStatus;
  /**
   * Optional link to the vertical's own site or a details page.
   * Omit while a vertical is still coming soon.
   */
  href?: string;
}

export const verticals: Vertical[] = [
  {
    slug: "lie",
    name: "LIE",
    sector: "Land & Property",
    // TODO: confirm the real LIE positioning when finalised (keep it outcome-led, not mechanical).
    tagline: "Tangible assets, held for the long term.",
    description:
      "Our land and property vertical — the tangible foundation of the group, " +
      "built to endure and to appreciate over decades.",
    status: "active",
  },
  {
    slug: "healthcare-ai",
    name: "Healthcare AI",
    sector: "AI Healthcare",
    // Kept deliberately opaque — reveal nothing of the approach until it is ready.
    tagline: "In development. Introduced when ready.",
    description: "Our next vertical is taking shape. We will share more when the time is right.",
    status: "coming-soon",
  },

  /*
   * ── TEMPLATE: copy this block to add a new vertical ──────────────────────
   * {
   *   slug: "unique-kebab-case-id",
   *   name: "Vertical Name",
   *   sector: "Sector Label",
   *   tagline: "One-line summary for cards and the homepage glance.",
   *   description: "A fuller paragraph describing the vertical for the /verticals page.",
   *   status: "active",        // "active" | "coming-soon" | "announced"
   *   href: "https://example.com", // optional — omit while coming soon
   * },
   * ─────────────────────────────────────────────────────────────────────────
   */
];
