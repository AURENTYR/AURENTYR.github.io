/**
 * AURENTYR group verticals — single source of truth.
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
    // TODO: replace placeholder copy with the real LIE positioning when finalised.
    tagline: "Land acquisition and property development across emerging corridors.",
    description:
      "LIE is AURENTYR's land and property vertical — focused on acquiring, " +
      "assembling, and developing land in high-growth corridors. It anchors the " +
      "group's portfolio with tangible, appreciating assets and long-horizon value.",
    status: "active",
  },
  {
    slug: "healthcare-ai",
    name: "Healthcare AI",
    sector: "AI Healthcare",
    // TODO: replace placeholder name + copy once the healthcare vertical is named and scoped.
    tagline: "AI-driven healthcare — applying intelligence to clinical and patient outcomes.",
    description:
      "AURENTYR's healthcare vertical will bring applied AI to clinical and patient " +
      "workflows. Currently in early development; more detail will be shared as the " +
      "venture takes shape.",
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
