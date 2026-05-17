import type { Metadata } from "next";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "Data sources, collection method, update cadence, limitations, editorial independence disclosure, and change log for the Remote Workforce Cost Index.",
  openGraph: {
    title: "Methodology | Remote Workforce Cost Index",
    description: "How salary and total-cost data is collected, sourced, and updated.",
    url: "https://remoteworkforcecostindex.com/methodology",
  },
};

export default function MethodologyPage() {
  const articleSchema = generateArticleSchema({
    title: "Methodology",
    description:
      "Data sources, collection method, update cadence, limitations, and editorial independence for the Remote Workforce Cost Index.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    url: "/methodology",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <div className="prose-rwci page-header">
          <h1>Methodology.</h1>
          <span className="last-updated">Last updated: May 2026</span>
        </div>

        <div className="prose-rwci" style={{ paddingBottom: "4rem" }}>
          <h2>Data sources</h2>
          <p>
            The Remote Workforce Cost Index draws from the following public
            databases for salary and compensation data. Each source is cited
            inline with the figure it supports, including accessed date and URL.
          </p>
          <ul>
            <li>
              <strong>Glassdoor India</strong> (
              <a href="https://www.glassdoor.co.in" rel="noopener" target="_blank">
                glassdoor.co.in
              </a>
              ) — Salary reported by Indian employees and workers. Used for
              base salary ranges by role and metro.
            </li>
            <li>
              <strong>Glassdoor Philippines</strong> (
              <a href="https://www.glassdoor.com" rel="noopener" target="_blank">
                glassdoor.com
              </a>
              ) — Salary reported by Philippine employees. Used for base salary
              ranges by role in Manila and Cebu contexts.
            </li>
            <li>
              <strong>Payscale India</strong> (
              <a href="https://www.payscale.com" rel="noopener" target="_blank">
                payscale.com
              </a>
              ) — Reported compensation data for India. Used for cross-reference
              and percentile validation.
            </li>
            <li>
              <strong>Payscale Philippines</strong> — Same platform, Philippine
              data. Used for cross-reference on operations and design roles.
            </li>
            <li>
              <strong>Indeed India</strong> (
              <a href="https://in.indeed.com" rel="noopener" target="_blank">
                in.indeed.com
              </a>
              ) — Salary estimates and job posting data for India. Used for
              specialized roles (CAD drafter, medical billing).
            </li>
            <li>
              <strong>Indeed Philippines</strong> (
              <a href="https://ph.indeed.com" rel="noopener" target="_blank">
                ph.indeed.com
              </a>
              ) — Salary estimates for the Philippines.
            </li>
            <li>
              <strong>Arc.dev</strong> (
              <a href="https://arc.dev" rel="noopener" target="_blank">
                arc.dev
              </a>
              ) — Remote developer salary data by country. Used for technical
              roles with remote/international market context.
            </li>
            <li>
              <strong>Second Talent</strong> (
              <a href="https://www.secondtalent.com" rel="noopener" target="_blank">
                secondtalent.com
              </a>
              ) — Developer and DevOps rate card data for the Philippines.
            </li>
            <li>
              <strong>SalaryExpert / ERI</strong> (
              <a href="https://www.erieri.com" rel="noopener" target="_blank">
                erieri.com
              </a>
              ) — Country-level compensation data used for specialized roles.
            </li>
            <li>
              <strong>Levels.fyi</strong> (
              <a href="https://www.levels.fyi" rel="noopener" target="_blank">
                levels.fyi
              </a>
              ) — Total compensation data for technology roles. Used for
              senior-level cross-reference.
            </li>
          </ul>
          <p>
            Statutory contribution rates are sourced directly from government
            agencies: the Employees&apos; Provident Fund Organisation (
            <a href="https://www.epfindia.gov.in" rel="noopener" target="_blank">
              epfindia.gov.in
            </a>
            ) and the Employees&apos; State Insurance Corporation (
            <a href="https://esic.gov.in" rel="noopener" target="_blank">
              esic.gov.in
            </a>
            ) for India; the Social Security System, PhilHealth, and Pag-IBIG
            for the Philippines.
          </p>
          <p>
            Exchange rates are recorded at the mid-market spot rate on the date
            of data collection, sourced from Exchange-Rates.org and PhilNews.
            A single rate is applied consistently across all roles in a given
            publication cycle to keep cross-role comparisons coherent.
          </p>

          <h2>Collection method</h2>
          <p>
            Data is collected manually by aggregating reported figures from
            multiple public databases for each role and market. Where sources
            report different ranges, the median of reported medians is used for
            the central figure, and the 30th–70th percentile spread is
            estimated from the aggregate distribution. No proprietary employer
            data is used in v1. Sources are cited at the table-footnote level
            with accessed month and year.
          </p>
          <p>
            Salary figures reflect what international (primarily US-based)
            employers pay remote workers based in India or the Philippines. These
            figures are consistently 40–120 percent above what local in-country
            employers report for the same roles. The distinction is noted in the
            introductory text of each salary page.
          </p>

          <h2>Update cadence</h2>
          <p>
            Salary data is reviewed quarterly, with at minimum one full data
            refresh per calendar year. Statutory contribution rates are reviewed
            whenever the relevant government agency announces a rate change;
            updates are applied within 30 days of the announcement. Each update
            is logged in the change log at the bottom of this page.
          </p>
          <p>
            Data older than 18 months without a refresh is flagged at the section
            level with a visible &quot;refresh-needed&quot; indicator. No flagged
            data ships without acknowledgment.
          </p>

          <h2>Currency handling and exchange rate policy</h2>
          <p>
            All figures are displayed in USD as the primary currency, with native
            currency equivalents (INR or PHP) in parentheses. The exchange rate
            applied in each publication cycle is recorded in the data files
            (data/exchange-rates.json) with the source and date. In May 2026,
            the applied rates were 1 USD = 96.28 INR (May 16, 2026; source:
            Exchange-Rates.org) and 1 USD = 61.61 PHP (May 17, 2026; source:
            PhilNews).
          </p>

          <h2>Sample size handling and flagging</h2>
          <p>
            Most public salary databases do not publish role-level sample sizes
            for India and Philippines markets. Where sample sizes are available,
            they are reported in the source column. Where not available, the
            source column notes &quot;N/A — aggregated across multiple sources.&quot;
            Ranges with an aggregated base of fewer than 30 reported salaries
            are treated as directional rather than definitive and are noted
            accordingly.
          </p>

          <h2>Limitations</h2>
          <p>
            The following limitations apply to all data on this site:
          </p>
          <ul>
            <li>
              <strong>Self-report bias.</strong> Glassdoor, Payscale, and Indeed
              data is user-submitted. Respondents may over-report at higher salary
              levels, and the sample skews toward users who seek salary
              benchmarking tools (often those considering a job change).
            </li>
            <li>
              <strong>Metro skew.</strong> Most reported data concentrates on
              Tier-1 cities (Bangalore, Hyderabad, Pune, Mumbai for India;
              Manila and Cebu for Philippines). Tier-2 and Tier-3 city rates are
              typically 15–35% lower.
            </li>
            <li>
              <strong>Sample-size variance.</strong> Specialized roles (CAD
              drafter, medical billing) have smaller reported samples than
              software engineering roles. Treat those ranges as directional.
            </li>
            <li>
              <strong>Remote vs. local rate distinction.</strong> Salary ranges
              on this site reflect what international employers pay, not what
              local Indian or Philippine companies pay. Local market rates are
              consistently lower.
            </li>
            <li>
              <strong>Base salary only.</strong> Salary pages cover base monthly
              compensation only. Equity, variable bonuses, and benefits are
              excluded unless noted. Total-cost pages include statutory
              contributions and overhead but not optional benefits such as
              private health insurance.
            </li>
            <li>
              <strong>Public-data ceiling.</strong> v1 data relies entirely on
              public sources. Proprietary placement data from the editor&apos;s
              managed workforce company is planned as a separately labeled section
              for Q2 2026 and will be clearly distinguished from public-source data.
            </li>
          </ul>

          <h2>Editorial independence</h2>
          <p>
            The Remote Workforce Cost Index is edited by Joel Deutsch, founder
            of F5 Hiring Solutions. This relationship is disclosed on the{" "}
            <a href="/about">About</a> page and in the structured data for this
            publication. The Cost Index operates under independent editorial
            standards: no commercial pricing appears on these pages, no calls to
            action reference any provider&apos;s services, and data collection is
            not filtered by commercial interest. Factual corrections should be
            sent to{" "}
            <a href="mailto:editor@remoteworkforcecostindex.com">
              editor@remoteworkforcecostindex.com
            </a>
            .
          </p>

          <h2>Future updates</h2>
          <ul>
            <li>
              <strong>Q2 2026.</strong> F5 Hiring Solutions proprietary placement
              data as a separately labeled section, with its own methodology
              note. Total-cost calculator widget.
            </li>
            <li>
              <strong>Q3 2026.</strong> Latin America expansion (Colombia, Mexico,
              Argentina). Eastern Europe expansion (Poland, Romania, Ukraine).
              Multi-byline contributors begin.
            </li>
            <li>
              <strong>Q4 2026.</strong> Role-level analyses. Newsletter signup
              if editorial cadence supports it.
            </li>
          </ul>

          <h2>Change log</h2>
          <dl style={{ lineHeight: 1.7 }}>
            <dt style={{ fontWeight: 700, marginTop: "1rem" }}>May 2026 — v1 Launch</dt>
            <dd style={{ marginLeft: "1.5rem", color: "#6b6354" }}>
              Initial publication. 15 roles for India and Philippines. Base
              salary ranges (30th–70th percentile, USD and native currency) and
              fully loaded employer cost tables. Exchange rates: 1 USD = 96.28
              INR, 1 USD = 61.61 PHP. Sources: Glassdoor, Payscale, Indeed,
              Arc.dev, Second Talent, SalaryExpert, Levels.fyi, EPFO, ESIC, SSS,
              PhilHealth, Pag-IBIG.
            </dd>
          </dl>
        </div>
      </article>
    </>
  );
}
