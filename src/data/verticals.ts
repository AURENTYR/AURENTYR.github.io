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

export interface VerticalSection {
  label: string;
  content: string;
}

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
  /** Investment or founding thesis — shown on the detail page header. */
  thesis?: string;
  /** Deep-dive sections for the detail page body. */
  sections?: VerticalSection[];
  /** Operating principles — shown as a list on the detail page. */
  principles?: string[];
}

export const verticals: Vertical[] = [
  {
    slug: "lie",
    name: "LIE",
    sector: "Land & Property",
    tagline: "Tangible assets, held for the long term.",
    description:
      "Our land and property vertical — the tangible foundation of the group, " +
      "built to endure and to appreciate over decades.",
    status: "active",
    thesis:
      "Land is the only asset that cannot be manufactured. As population density " +
      "increases and developable supply contracts, geographically constrained land " +
      "compounds in value not because of market sentiment, but because of structural " +
      "scarcity. We hold it.",
    sections: [
      {
        label: "The position",
        content:
          "LIE is an active land and property holding. We acquire parcels that meet a " +
          "strict set of criteria: geographic constraint, proximity to infrastructure " +
          "investment, and long-horizon upside that is difficult to price in the short " +
          "term. We are not developers building for margin. We are holders building for " +
          "permanence.",
      },
      {
        label: "Why land",
        content:
          "Equities dilute. Debt matures. Land does neither. In a period of monetary " +
          "expansion and supply-chain stress on physical goods, hard assets with " +
          "constrained supply behave differently from financial assets — they do not " +
          "track sentiment, they track reality. The reality is that developable land in " +
          "growing markets is finite, and we are on the right side of that constraint.",
      },
      {
        label: "How we operate",
        content:
          "We hold without exit pressure. There is no fund clock, no LP redemption " +
          "schedule, no quarterly return to optimise. This lets us wait through markets " +
          "that others are forced to exit, and act when others are forced to sell. We " +
          "evaluate each asset on a multi-decade horizon, not a five-year IRR target.",
      },
    ],
    principles: [
      "Buy what cannot be replicated",
      "Hold longer than anyone else is willing to",
      "Development is an option, not a mandate",
      "The best exits are the ones we never need to take",
    ],
  },
  {
    slug: "healthcare-ai",
    name: "Healthcare AI",
    sector: "AI Healthcare",
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
   *   thesis: "The one-paragraph investment thesis shown on the detail page header.",
   *   sections: [
   *     { label: "Section heading", content: "Body copy for this section." },
   *   ],
   *   principles: [
   *     "First operating principle",
   *     "Second operating principle",
   *   ],
   * },
   * ─────────────────────────────────────────────────────────────────────────
   */
];
