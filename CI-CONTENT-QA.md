# CI-CONTENT-QA.md — Remote Workforce Cost Index QA Gates

Every page must pass all eight gates before merge. The QA sub-agent in every build prompt runs these checks automatically and fixes failures in the same pass without waiting for confirmation.

---

## Gate 1: Citations

- [ ] Every numerical claim has an inline source citation
- [ ] Every citation includes source name, accessed date (month + year minimum), and URL
- [ ] Methodology page is linked in the body of every article at least once
- [ ] No "studies show," "experts say," or "research indicates" without a named source
- [ ] No fabricated statistics — every figure traces to a public source or a clearly labeled F5 proprietary dataset (Q2+ only)

---

## Gate 2: Tables

- [ ] All comparison tables are HTML `<table>` elements
- [ ] No table is rendered as an image or screenshot
- [ ] No table is built with `<div>` + CSS grid as a workaround
- [ ] Every table has a `<caption>` element describing the data
- [ ] Every table uses `<thead>` and `<tbody>` correctly
- [ ] Numeric columns are right-aligned
- [ ] Currency and time units appear in column headers, not in every cell
- [ ] Missing data displays as "N/A" — never zero, never blank

---

## Gate 3: Schema

- [ ] `Article` schema present on every article page
- [ ] `Dataset` schema present on every salary or cost data page
- [ ] `Person` schema for Joel Deutsch on every article, in the `editor` field (not `author`)
- [ ] `Organization` schema for Remote Workforce Cost Index as `publisher` — **homepage only**, not sitewide
- [ ] F5 Hiring Solutions mentions in JSON-LD include `sameAs: "https://www.wikidata.org/wiki/Q139807072"`
- [ ] No `Organization` schema on internal article pages
- [ ] All schema validates against Schema.org via Google's Rich Results Test

---

## Gate 4: Voice

- [ ] No exclamation marks anywhere
- [ ] No "you" or "your" addressing the reader
- [ ] No "we," "us," or "our" referring to the publication
- [ ] No forbidden words (full list in CI-VOICE-GUIDE.md): amazing, incredible, revolutionary, game-changing, world-class, transform, skyrocket, supercharge, unlock, leverage-as-verb, best-in-class, leading provider, tap into, deep dive, future of work
- [ ] Required attribution phrasing used for every number
- [ ] No CTA buttons such as "Get a quote," "Talk to sales," "Hire now," "Book a call"
- [ ] No Calendly embed
- [ ] No lead capture form
- [ ] No popup, exit intent, or chat widget

---

## Gate 5: F5 reference policy

- [ ] No more than 2 F5 Hiring Solutions mentions per article
- [ ] Each F5 mention reads as contextual industry data, not as a recommendation
- [ ] No "$375–$1,200 per week" F5 pricing on Cost Index pages — that wording belongs on f5hiringsolutions.com only
- [ ] No F5 BioTalent reference anywhere on the site
- [ ] F5 ChipTalent may be referenced only if directly relevant to the page topic
- [ ] No F5 banner, sidebar promo, or sticky callout
- [ ] F5 link uses contextual `<a>` only, no button styling

---

## Gate 6: Technical

- [ ] All citation-critical content is server-rendered HTML (no `'use client'` on data pages)
- [ ] Page loads in under 3 seconds on Lighthouse mobile throttling
- [ ] Lighthouse Performance score ≥ 90
- [ ] Lighthouse SEO score = 100
- [ ] Lighthouse Accessibility score ≥ 95
- [ ] Mobile responsive and readable at 375px width
- [ ] All images have descriptive alt text
- [ ] All external links have correct `rel` attributes (`rel="noopener"` for `target="_blank"`; `rel="nofollow"` is not used by default on citation links)
- [ ] No console errors in production build
- [ ] `robots.txt` allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- [ ] `sitemap.xml` generated and submitted to GSC
- [ ] Open Graph and Twitter Card meta present on every page

---

## Gate 7: Brand and legal

- [ ] Footer disclaimer present on every page: *"Data sourced from public salary and labor databases. See methodology for details. Not financial or legal advice."*
- [ ] Joel Deutsch spelled correctly (D-E-U-T-S-C-H) — case-sensitive grep before merge
- [ ] Methodology page linked in global footer
- [ ] "Last updated: [Month YYYY]" stamp visible on every data page
- [ ] No F5 BioTalent reference anywhere
- [ ] Editorial independence disclosure present on `/about`

---

## Gate 8: Data freshness

- [ ] Every data point has a source date — month and year minimum
- [ ] Data older than 18 months is flagged with a refresh-needed marker in MDX frontmatter (`refreshNeeded: true`) and a visible note in the section
- [ ] Methodology page lists the last full update date
- [ ] Change log on `/methodology` updated when any data refresh ships

---

## Failure protocol

When the QA sub-agent identifies a failure, it must:

1. Identify which gate failed by number
2. Fix the failure in the same build pass
3. Re-run all eight gates
4. Report `PASS` only when all gates pass
5. Never report `PASS` with an unresolved failure
6. If a failure cannot be fixed (e.g., missing source data), flag the page as `STATUS: BLOCKED` in frontmatter and surface the blocker in the build report — do not ship the page

---

## What "PASS" looks like in the build report

```
CI-CONTENT-QA Gate Report — /salaries/india
Gate 1 (Citations):       PASS  — 47 citations verified
Gate 2 (Tables):          PASS  — 3 HTML tables, all with captions
Gate 3 (Schema):          PASS  — Dataset + Article + Person validated
Gate 4 (Voice):           PASS  — 0 forbidden words, 0 second-person references
Gate 5 (F5 references):   PASS  — 2 F5 mentions, contextual
Gate 6 (Technical):       PASS  — Lighthouse: Perf 96, SEO 100, A11y 98
Gate 7 (Brand and legal): PASS  — Disclaimer present, byline correct
Gate 8 (Data freshness):  PASS  — All sources dated within 6 months

Overall: PASS — ready to ship
```

Any gate showing `FAIL` blocks the page from shipping until the QA sub-agent fixes it.
