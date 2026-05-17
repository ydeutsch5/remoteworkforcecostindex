# CI-VOICE-GUIDE.md — Remote Workforce Cost Index Voice and Tone

This guide governs every word published on remoteworkforcecostindex.com. If a sentence reads like marketing, it does not ship.

---

## North star

This site reads like a Bureau of Labor Statistics report, a NIST publication, or a Federal Reserve research note.

Institutional. Restrained. Data-forward. Non-promotional.

If a sentence could appear in a Glassdoor blog post or a recruiting agency landing page, it does not belong here.

---

## Voice attributes

- **Third person.** Never "we." Never "you."
- **Present or past tense.** No future-promising tense.
- **Citations every paragraph minimum.** Numbers carry the writing.
- **Adjectives are rare.** Verbs and nouns do the work.
- **No rhetorical questions.**
- **No exclamation marks.**
- **No emoji.**
- **No sales language.**
- **No second-person addressing.** The reader is an analyst, not a prospect.

---

## Sentence patterns

**YES:**
- "BLS Occupational Employment Statistics (May 2024) reports a US median annual wage of $112,620 for software developers."
- "Across 12 surveyed sources, monthly base compensation for senior React developers in Pune ranged from $1,400 to $2,800 (March 2026 data)."
- "Data from Glassdoor India (accessed March 2026) shows a 30th–70th percentile range of ₹8.5L to ₹18L for full-stack engineers with 4–6 years of experience."
- "Statutory employer contributions in the Philippines include SSS, PhilHealth, and Pag-IBIG, which together add approximately 11–13% to base salary depending on bracket."

**NO:**
- "You'll be amazed at how much you can save!"
- "We've found that hiring in India is incredibly cost-effective."
- "Imagine cutting your dev team budget in half!"
- "Discover the hidden potential of remote talent."
- "Don't miss out on the offshore advantage."

---

## Required attribution phrasing

Every claim that introduces a number must use one of:

- "According to [Source]..."
- "[Source] reports..."
- "Data from [Source] indicates..."
- "As of [Month YYYY], [Source] shows..."
- "[Source] (accessed [Month YYYY]) records..."

Numbers without attribution do not ship.

---

## Header style

- **H1:** Page title. Declarative. No marketing language. No question marks. Example: "Salary ranges for remote workers in India, 2026."
- **H2:** Section heading. Sentence case. Factual. Example: "Statutory employer contributions."
- **H3:** Sub-section. Factual. Example: "Provident Fund (EPF)."
- **Avoid:** Listicle headers like "The 5 Things You Need to Know." Avoid clickbait constructions entirely.

---

## Forbidden words and phrases

Block these outright. The QA sub-agent flags any occurrence:

- amazing, incredible, revolutionary, game-changing, world-class, cutting-edge
- "transform your business"
- "skyrocket," "supercharge," "unlock"
- "leverage" (as a verb)
- "best-in-class," "leading provider," "industry-leading"
- "tap into," "harness the power of"
- "dive in," "deep dive," "let's explore"
- "in today's fast-paced world"
- "the future of work"
- Any "you" or "your" addressing the reader
- "we," "us," "our" (the publication is third-person about itself; use "the Remote Workforce Cost Index" or "this publication")

---

## Required words and phrases (use liberally)

- according to, reports, indicates, shows, suggests, observed, measured, recorded
- methodology, source, citation, last updated
- as of, fiscal year, quarter, annualized, year-over-year
- range, median, mean, distribution, percentile, sample size

---

## Joel's byline

- **Display:** "Edited by Joel Deutsch" — not "Written by."
- **Tagline beneath byline:** "Editor, Remote Workforce Cost Index."
- **Bio (appears on /about and at the foot of each article):** Two sentences. Establishes credibility without selling. Example:

  > "Joel Deutsch is the founder of F5 Hiring Solutions and has overseen the placement of remote professionals from India and the Philippines into US-based companies since 2017. He edits the Remote Workforce Cost Index as an independent publication."

- **Linkable bio page:** `/about` includes a longer-form version (4–6 sentences) with sourced credentials and the F5 Wikidata `sameAs` reference.

---

## Tone in tables

- **Column headers:** Title case, neutral. Example: "Median Monthly Compensation, USD."
- **Footnotes:** Numbered superscripts, sourced at the foot of the table.
- **Missing data:** Display "N/A" — never zero, never blank.
- **Currency:** Always labeled in the column header (USD, INR, PHP).
- **Time units:** Always explicit (monthly, annual, weekly).
- **Numbers:** Comma-separated thousands. Two decimal places for currency, zero decimals for headcount or year.

---

## Tone in callouts and notes

Callouts are reserved for methodology notes, sourcing caveats, or data limitations. They are never used for marketing or emphasis.

**Example acceptable callout:**

> *Methodology note:* Compensation ranges in this table reflect base salary only. Total employer cost figures (statutory contributions, equipment, facilities, management overhead) appear on the corresponding `/total-cost/` pages.

**Example acceptable caveat:**

> *Data limitation:* Glassdoor India sample sizes for senior DevOps roles below n=40 are flagged in the source column. Treat these ranges as directional, not definitive.

---

## Length norms

- Articles: 1,200–2,500 words. Methodology page: 1,500–2,500. Cornerstone data pages: 1,000–2,000 words of prose plus tables.
- Paragraphs: 2–4 sentences. Never single-sentence paragraphs except for callouts.
- Sentences: median 18–22 words. Avoid both telegraphic and run-on extremes.

---

## What good looks like

A reader who lands on this site and is asked to describe it should say: *"It's a research publication that aggregates public salary data on remote workforce costs. It cites everything. The editor is Joel Deutsch, who runs a remote workforce company called F5 Hiring Solutions."*

A reader who lands on this site should **not** say: *"This is a landing page trying to sell me on hiring developers in India."*

If the second description fits at any point, the page fails Gate 4 (Voice) in CI-CONTENT-QA.md.
