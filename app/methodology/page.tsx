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
              ) — Remote developer salary data by country. Primary source for
              the US employer remote series: what US-based employers pay remote
              workers in India and the Philippines.
            </li>
            <li>
              <strong>U.S. Bureau of Labor Statistics — Occupational Employment
              and Wage Statistics (OEWS), May 2024</strong> (
              <a href="https://www.bls.gov/oes/current/oes_nat.htm" rel="noopener" target="_blank">
                bls.gov/oes
              </a>
              ) — National occupational median wages for the United States,
              published annually. Used as the US domestic benchmark for offshore
              discount percentage calculations, and as the basis for
              BLS-estimated US employer remote figures where Arc.dev direct data
              is unavailable.
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
            data is used in v1.x. Sources are cited at the table-footnote level
            with accessed month and year.
          </p>
          <p>
            Beginning with v1.2 (May 2026), salary data for each role is
            reported under two market contexts: a <strong>local employer</strong>{" "}
            series (Glassdoor/Payscale/Indeed — what Indian or Philippine
            companies pay) and a <strong>US employer remote</strong> series
            (Arc.dev or BLS OES offshore-discount estimate — what US-based
            employers pay for the same role performed remotely). These series
            are not interchangeable and are displayed in separate columns on each
            salary page.
          </p>

          <h2 id="offshore-discount">Offshore discount methodology</h2>

          <h3>Definition</h3>
          <p>
            The offshore discount percentage expresses the US employer remote
            median salary as a fraction of the BLS OES May 2024 US domestic
            median for the same occupational category. A role with an offshore
            discount of 35% pays 35 cents on the US dollar. The formula is:
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono), 'Courier New', monospace",
              fontSize: "0.85rem",
              background: "#f4f0e8",
              padding: "0.75rem 1rem",
              borderLeft: "3px solid #c9a961",
            }}
          >
            offshore % = (US employer remote median) ÷ (BLS OES US domestic
            monthly median) × 100
          </p>

          <h3>US baseline — BLS OES May 2024</h3>
          <p>
            The US domestic benchmark is the BLS Occupational Employment and
            Wage Statistics (OEWS) May 2024 national median annual wage for the
            nearest SOC occupational code, divided by 12 to derive a monthly
            figure. The OEWS survey covers approximately 1.1 million employer
            establishments and is the standard labor market reference in US
            workforce analyses. BLS OEWS data is published annually, typically
            in April or May of the following year; May 2024 data (published May
            2025) is the most recent release as of May 2026. Annual median
            wages are converted to monthly by dividing by 12.
          </p>

          <h3>US employer remote sources</h3>
          <p>
            Arc.dev is the primary source for the US employer remote series.
            Arc.dev publishes country-specific remote salary data for technical
            roles, sourced from its network of US-based employers that hire
            internationally. Where Arc.dev publishes a range, the midpoint of
            the reported range is used as the median figure. Arc.dev data is
            available for most technical roles; for roles without direct Arc.dev
            coverage (UI/UX Designer, Product Manager, Project Manager, Customer
            Support Specialist, Medical Billing Specialist, CAD Drafter, and
            AI/ML Engineer), figures are estimated from BLS OES May 2024 using
            the offshore discount bands described below.
          </p>

          <h3>Validation bands</h3>
          <p>
            Observed Arc.dev data for India and Philippines, combined with
            secondary sources (Second Talent, SalaryExpert, Levels.fyi), produces
            the following expected offshore discount bands by experience tier and
            market. These bands are used to validate Arc.dev figures and to
            calibrate BLS-estimated figures for roles without direct Arc.dev data.
          </p>
          <div className="table-scroll" style={{ marginBottom: "1.5rem" }}>
            <table>
              <caption>
                Offshore discount validation bands by market and experience tier.
                Percentages expressed as US employer remote median as % of BLS
                OES US domestic median.
              </caption>
              <thead>
                <tr>
                  <th>Market</th>
                  <th className="num">Mid-level (3–6 yrs)</th>
                  <th className="num">Senior (5–8 yrs)</th>
                  <th className="num">Specialized</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>India</td>
                  <td className="num">30–45%</td>
                  <td className="num">35–50%</td>
                  <td className="num">40–55%</td>
                </tr>
                <tr>
                  <td>Philippines</td>
                  <td className="num">25–35%</td>
                  <td className="num">30–40%</td>
                  <td className="num">35–45%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            &quot;Specialized&quot; roles are those in Section C (Medical Billing,
            CAD Drafter) and technically specialized roles (DevOps, AI/ML) where
            a scarcity premium applies. These bands are derived from observed
            Arc.dev data across covered roles and are consistent with published
            analyses by remote hiring platforms as of early 2026.
          </p>

          <h3>Outlier flagging</h3>
          <p>
            Roles where the reported or estimated US employer remote median falls
            outside the expected band for its market and tier are flagged with a
            dagger (†) in the salary tables. As of May 2026, three roles are
            flagged:
          </p>
          <ul>
            <li>
              <strong>India — QA Engineer:</strong> Arc.dev reports $2,039/month
              (24% of BLS OES May 2024 median for Software Quality Assurance
              Analysts, SOC 15-1253, $8,551/month). This falls below the India
              mid-level floor of 30%. Arc.dev figure is reported as collected.
              Automation QA specialists may command rates toward the band floor.
            </li>
            <li>
              <strong>Philippines — Senior Software Engineer:</strong> Arc.dev
              reports $6,022/month (54% of BLS OES May 2024 median for Software
              Developers, SOC 15-1252, $11,090/month). This exceeds the
              Philippines senior-level ceiling of 40%. The Philippines senior SWE
              market reflects a premium for cloud-architecture specialization and
              long tenure with US product companies. Treat with caution.
            </li>
            <li>
              <strong>Philippines — DevOps Engineer:</strong> Arc.dev reports
              $1,915/month (24% of BLS OES May 2024 median for Network and
              Computer Systems Administrators, SOC 15-1244, $8,067/month). This
              falls partly below the Philippines mid-level floor of 25%. The
              Philippine DevOps market shows high variance; Kubernetes/Terraform
              specialists may command rates above this range.
            </li>
          </ul>
          <p>
            Outlier figures are reported as collected and are not adjusted. The
            dagger notation and footnote detail allow readers to make their own
            judgment about the applicability of the figure to their context.
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
              <strong>Dual-market distinction.</strong> Beginning with v1.2
              (May 2026), salary pages display two series: local employer rates
              and US employer remote rates. These are distinct markets with
              different pay levels; the columns are not interchangeable. US
              employer remote figures sourced from BLS OES offshore-discount
              estimation (rather than Arc.dev direct data) carry additional
              uncertainty and are marked as directional.
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
            <dt style={{ fontWeight: 700, marginTop: "1rem" }}>May 2026 — v1.2 Data Calibration</dt>
            <dd style={{ marginLeft: "1.5rem", color: "#6b6354" }}>
              Dual-market data structure added. All 15 roles for India and
              Philippines now report two separate salary series: local employer
              (Glassdoor/Payscale/Indeed) and US employer remote (Arc.dev /
              BLS OES May 2024 offshore-discount estimate). Arc.dev data moved
              exclusively to the US employer remote series; local employer series
              now contains only Glassdoor/Payscale/Indeed sources. Offshore
              discount percentage column added to salary tables. Three outlier
              roles flagged (India QA Engineer at 24%, Philippines Senior SWE at
              54%, Philippines DevOps at 24%). Total-cost pages updated with
              dual-scenario comparison table (local base vs. US remote base, same
              statutory rates). Offshore discount methodology section added.
              BLS OES added to data sources.
            </dd>
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
