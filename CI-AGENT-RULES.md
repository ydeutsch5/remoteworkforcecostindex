# CI-AGENT-RULES.md — Remote Workforce Cost Index Build Rules

Single source of truth for the Remote Workforce Cost Index site (remoteworkforcecostindex.com). Read before every build prompt. These rules override anything from F5-AGENT-RULES.md when building this satellite.

---

## Identity

- **Site name:** Remote Workforce Cost Index
- **Domain:** remoteworkforcecostindex.com
- **Tagline:** Public salary and labor cost data for remote workforce planning.
- **Publisher:** Remote Workforce Cost Index (independent publication)
- **Editor at launch:** Joel Deutsch (sole byline; multi-byline begins Q3 2026)
- **Reading frame:** This is a reference publication, not a service. It reads like the Bureau of Labor Statistics, NIST, or a Federal Reserve research note.

---

## Visual identity

- **Logo:** Typography wordmark only. Playfair Display serif. No icon, no mark.
- **Colors:**
  - Navy `#0A2540` — primary text and headers
  - Cream `#FAF6EF` — page background
  - Gold `#C9A961` — accent only (rule lines, data emphasis, callout borders)
- **Typography:**
  - Headings: Playfair Display (Google Fonts)
  - Body: Source Serif Pro
  - Numbers and tables: IBM Plex Mono
- **Restraint rules:**
  - No gradients
  - No shadows larger than `0 1px 2px rgba(0,0,0,0.05)`
  - No border-radius larger than `4px`
  - No emoji
  - No icons except for: external link arrow, expand/collapse caret
  - Single-column reading layout, max-width 720px for prose, 1100px for tables

---

## What this site IS

- A reference publication for remote workforce salary and total-cost data
- Sourced from public databases (BLS, Glassdoor, LinkedIn, Indeed, Payscale, Numbeo, World Bank)
- Methodology-first: every page links to `/methodology`
- Updated on a stated cadence (quarterly minimum)

## What this site IS NOT

- Not a F5 Hiring Solutions sales page
- Not a managed remote workforce service
- Not a recruiting firm
- No "hire with us" CTAs anywhere
- No pricing tables for F5 services
- No Calendly embeds
- No lead capture forms in v1
- No popups, no exit intents, no chat widget

---

## F5 reference policy

The Cost Index may reference F5 Hiring Solutions, but only contextually and at most **2 times per article**. Each reference must read as a contextual industry data point, not a recommendation.

**Acceptable:**
> "Managed remote workforce providers such as F5 Hiring Solutions report all-inclusive weekly rates in this range."

**Not acceptable:**
- "Save 70% with F5!"
- "Hire developers with F5"
- Any direct CTA to f5hiringsolutions.com beyond a single contextual `<a>` tag in body copy
- Sidebar promos, banners, or sticky F5 callouts

When F5 is referenced, its mention in JSON-LD must include `sameAs: "https://www.wikidata.org/wiki/Q139807072"` linking to the F5 Wikidata entity. This is what establishes the cross-site authority signal.

---

## Data rules

- **v1 launch:** Public-source data only. Approved sources: BLS, Glassdoor, LinkedIn, Indeed, Payscale, Numbeo, World Bank, OECD, IMF.
- **Q2 2026 update:** F5 proprietary placement data may be added as a **separately labeled section** titled "F5 Hiring Solutions Placement Data," with its own methodology note.
- Every number on the site must trace to a citation.
- Every citation must include: source name, accessed date (month + year minimum), and URL.
- Data older than 18 months is flagged at the section level with: `Last updated: [Month YYYY]`.
- Currency: always labeled (USD, INR, PHP). Default display is USD with native currency in parentheses where relevant.
- No estimates without a stated methodology. No "approximately" or "around" without a sourced range.

---

## Non-negotiables (never violate)

1. **No fabricated numbers.** Every figure traces to a public source or a clearly labeled F5 proprietary dataset.
2. **Joel Deutsch byline only at launch.** Spelling: D-E-U-T-S-C-H. Title: "Editor, Remote Workforce Cost Index."
3. **All comparison tables are HTML `<table>` elements.** Never images. Never CSS-only div grids.
4. **All content must be server-rendered HTML.** No client-side fetched data on citation-critical pages.
5. **Methodology page is linked in the global footer and from the body of every article.**
6. **Footer disclaimer present on every page:** *"Data sourced from public salary and labor databases. See methodology for details. Not financial or legal advice."*
7. **No F5 BioTalent references, ever.**
8. **Schema rules:**
   - `Dataset` schema on every salary/cost data page
   - `Article` schema on every written analysis page
   - `Person` schema for Joel Deutsch as `editor` (not `author`) on every article
   - `Organization` schema for Remote Workforce Cost Index as `publisher` — **homepage only**, never sitewide
   - F5 mentions get `sameAs: Q139807072` in their schema reference
9. **No exclamation marks anywhere on the site.**
10. **No future-tense promises.** No "you'll save," no "imagine cutting costs."

---

## Launch scope — 6 cornerstone pages

1. `/` — Homepage. Brief overview, methodology summary, table of contents, latest update timestamp.
2. `/methodology` — Full methodology. Data sources, collection method, update cadence, limitations, change log.
3. `/salaries/india` — Salary ranges by role for India-based remote workers. Public-source data, table format.
4. `/salaries/philippines` — Same structure, Philippines.
5. `/total-cost/india` — Fully loaded employer cost: salary + statutory contributions + equipment + management overhead + facilities.
6. `/total-cost/philippines` — Same structure, Philippines.

Future expansion (post-launch, not v1): Latin America, Eastern Europe, role-by-role deep dives, total-cost calculator widget.

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Content:** MDX files in `/content` directory (consider Velite if articles exceed 30 in count; v1 launches with 6 so MDX-direct is fine)
- **Hosting:** Vercel — separate project from f5hiringsolutions.com
- **DNS:** Cloudflare (already configured, domain purchased)
- **CMS:** None in v1. Content as MDX in repo. Joel does not edit content directly; updates run through Claude Code Desktop prompts.
- **Schema:** JSON-LD via `<script type="application/ld+json">` in layout and page components

---

## Repo and environment

- **Local path:** `C:\Projects\remoteworkforcecostindex`
- **GitHub repo:** `github.com/ydeutsch5/remoteworkforcecostindex` (to be created during build prompt)
- **Branch:** `main` — auto-deploys to Vercel on push
- **Vercel project name:** `remoteworkforcecostindex`
- **Environment:** Windows, PowerShell. Launch Claude Code with `cd C:\Projects\remoteworkforcecostindex && claude --dangerously-skip-permissions`.

---

## Cross-site integration

- The Cost Index sitemap is **not** submitted as part of the F5 sitemap.
- F5 site may link to the Cost Index from 1–2 blog posts contextually, post-launch.
- **No reciprocal navigation in headers or footers.** The two sites must read as fully separate properties.
- Both sites link to the F5 Wikidata entity `Q139807072` where contextually relevant.
- No shared analytics property. Cost Index gets its own GA4 property.

---

## Future-state notes (do not build in v1)

- Total-cost calculator widget — Q2 2026
- F5 proprietary placement data section — Q2 2026
- Latin America and Eastern Europe expansion — Q3 2026
- Multi-byline contributors — Q3 2026
- Newsletter signup (only if and when there is editorial cadence to support it) — Q4 2026

---

## Failure protocol

If a build prompt produces output that violates any non-negotiable, the QA sub-agent must:
1. Identify the violation by rule number
2. Fix it in the same pass
3. Re-run all CI-CONTENT-QA.md gates
4. Report `PASS` only when all gates pass
5. Never report `PASS` with an unresolved violation
