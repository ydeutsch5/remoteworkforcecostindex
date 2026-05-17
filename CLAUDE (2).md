# CLAUDE.md — Remote Workforce Cost Index

This file is read automatically by Claude Code Desktop when launched from `C:\Projects\remoteworkforcecostindex`. Read every file referenced below before doing any work in this repo.

---

## What this repo is

**Remote Workforce Cost Index** — an independent reference publication at remoteworkforcecostindex.com. It publishes public-source salary and total-cost data for remote workforce planning. It reads like a BLS or NIST publication. It is **not** a marketing site, **not** a recruiting service, and **not** part of f5hiringsolutions.com.

This is a satellite of the F5 ecosystem. It is **not** the F5 Hiring Solutions site. Do not apply f5hiringsolutions.com rules, voice, branding, or schema to this repo.

---

## Read these files before every task

1. `CI-AGENT-RULES.md` — master rules. Overrides anything else if conflict.
2. `CI-VOICE-GUIDE.md` — voice and tone. Institutional, BLS/NIST feel.
3. `CI-CONTENT-QA.md` — eight-gate QA checklist. Run on every shippable output.

If a task touches content, schema, layout, or styling, all three must be read in full before acting.

---

## Non-negotiables — summary

These are the rules most likely to be violated. Full list in `CI-AGENT-RULES.md`.

1. **Editor:** Joel Deutsch (spelling D-E-U-T-S-C-H). Title: "Editor, Remote Workforce Cost Index." Joel is the **editor**, never the **author**.
2. **No sales language.** No "you," no "we," no exclamation marks, no CTAs, no Calendly, no lead forms.
3. **Every number cites a source.** Source name, accessed month/year, and URL.
4. **All comparison tables are HTML `<table>` elements.** Never images. Never CSS-only div grids.
5. **All citation-critical content is server-rendered HTML.** No `'use client'` on data pages.
6. **Methodology page linked in global footer and from the body of every article.**
7. **F5 mentions:** Max 2 per article, contextual only. Every F5 mention in JSON-LD includes `sameAs: "https://www.wikidata.org/wiki/Q139807072"`.
8. **No F5 pricing** ($375–$1,200 per week) appears on this site. That wording lives only on f5hiringsolutions.com.
9. **No F5 BioTalent reference anywhere.** F5 ChipTalent only if directly relevant.
10. **`Organization` schema is on the homepage only.** Never sitewide. `Article` + `Dataset` + `Person`-as-editor on internal pages.
11. **Footer disclaimer on every page:** *"Data sourced from public salary and labor databases. See methodology for details. Not financial or legal advice."*
12. **Last-updated stamp on every data page.** Data older than 18 months is flagged.

---

## Visual identity — short reference

- Logo: typography wordmark, Playfair Display, no icon
- Colors: navy `#0A2540` / cream `#FAF6EF` / gold `#C9A961`
- Type: Playfair Display (headings), Source Serif Pro (body), IBM Plex Mono (numbers/tables)
- No gradients, no shadows beyond `0 1px 2px rgba(0,0,0,0.05)`, no border-radius larger than 4px, no emoji

Full visual spec in `CI-AGENT-RULES.md`.

---

## Tech stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- MDX content in `/content` (no Velite in v1; v1 ships 6 pages)
- Vercel hosting (separate project from f5hiringsolutions.com)
- Cloudflare DNS
- No CMS — content lives in repo as MDX

---

## Blocked skills

The following skills must **not** be invoked in this repo:

- `content-writer` (any variant) — produces marketing prose that violates Gate 4 voice rules

If a skill produces output that fails any CI-CONTENT-QA gate, the QA sub-agent must reject and rewrite without that skill.

---

## QA sub-agent requirement

Every build prompt must end with a QA sub-agent block that:

1. Runs all eight gates from `CI-CONTENT-QA.md`
2. Reports `PASS` or `FAIL` per gate
3. Fixes any failure in the same pass without asking
4. Re-runs all gates after the fix
5. Never reports `PASS` with an unresolved failure

The format of the report is specified in `CI-CONTENT-QA.md` under "What PASS looks like."

---

## Working style

- One Claude Code Desktop prompt = one complete vertical slice
- Test as you build — never batch-test at the end
- Sequential database/file operations only — never parallel writes
- If any rule conflicts with a user request, the rule wins. Surface the conflict in the response.

---

## When in doubt

Read `CI-AGENT-RULES.md` first. If still unresolved, ask one focused question. Do not guess at brand voice, schema structure, or F5 reference policy.
