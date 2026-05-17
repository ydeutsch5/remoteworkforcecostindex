import type { Metadata } from "next";
import { generateArticleSchema, generateDatasetSchema } from "@/lib/schema";
import { formatUSD, formatPHP } from "@/lib/utils";
import salariesData from "@/data/salaries-philippines.json";

export const metadata: Metadata = {
  title: "Salary ranges for remote workers in the Philippines, 2026",
  description:
    "Median monthly compensation and 30th–70th percentile ranges for 15 remote-friendly roles in the Philippines. Sources: Glassdoor, Payscale, Indeed, Arc.dev. Data accessed May 2026.",
  openGraph: {
    title: "Philippines Remote Worker Salaries 2026 | Remote Workforce Cost Index",
    description:
      "Monthly salary ranges for 15 roles: Software Engineer, DevOps, Data Scientist, AI/ML Engineer, UX Designer, and more.",
    url: "https://remoteworkforcecostindex.com/salaries/philippines",
  },
};

type Role = {
  id: string;
  role: string;
  section: string;
  yearsExperience: string;
  medianMonthlyUSD: number;
  percentile30USD: number;
  percentile70USD: number;
  medianMonthlyPHP: number;
  percentile30PHP: number;
  percentile70PHP: number;
  sampleSizeNote: string;
  caveats: string;
  sources: { name: string; url: string; accessed: string }[];
};

const roles: Role[] = salariesData.roles as Role[];
const sectionLabels: Record<string, string> = salariesData.sections;

function getSectionRoles(section: string) {
  return roles.filter((r) => r.section === section);
}

function RoleTable({
  section,
  footnoteOffset,
}: {
  section: string;
  footnoteOffset: number;
}) {
  const sectionRoles = getSectionRoles(section);
  let footnoteIndex = footnoteOffset;

  const footnotes: { num: number; content: string }[] = [];

  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <div className="table-scroll">
        <table>
          <caption>
            Section {section} — {sectionLabels[section]}, monthly compensation
            in USD, Philippines remote workforce, 2026.
          </caption>
          <thead>
            <tr>
              <th>Role</th>
              <th>Experience</th>
              <th className="num">Median Monthly (USD)</th>
              <th className="num">30th–70th Pct (USD)</th>
              <th className="num">Native Range (PHP)</th>
              <th>Sources</th>
            </tr>
          </thead>
          <tbody>
            {sectionRoles.map((role) => {
              const roleFootnotes = role.sources.map((src) => {
                footnoteIndex++;
                footnotes.push({
                  num: footnoteIndex,
                  content: `${src.name}, accessed ${src.accessed}. ${src.url}`,
                });
                return footnoteIndex;
              });

              return (
                <tr key={role.id}>
                  <td>{role.role}</td>
                  <td>{role.yearsExperience} yrs</td>
                  <td className="num">{formatUSD(role.medianMonthlyUSD)}</td>
                  <td className="num">
                    {formatUSD(role.percentile30USD)}–
                    {formatUSD(role.percentile70USD)}
                  </td>
                  <td className="num">
                    {formatPHP(role.percentile30PHP)}–
                    {formatPHP(role.percentile70PHP)}
                  </td>
                  <td>
                    {roleFootnotes.map((n, i) => (
                      <span key={n}>
                        <sup>
                          <a href={`#fn-ph-${n}`}>[{n}]</a>
                        </sup>
                        {i < roleFootnotes.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ol
        className="table-footnotes"
        start={footnoteOffset + 1}
        style={{ paddingLeft: "1.25rem" }}
      >
        {footnotes.map((fn) => (
          <li key={fn.num} id={`fn-ph-${fn.num}`}>
            {fn.content}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function PhilippinesSalariesPage() {
  const articleSchema = generateArticleSchema({
    title: "Salary ranges for remote workers in the Philippines, 2026",
    description:
      "Median monthly compensation and 30th–70th percentile ranges across 15 remote-friendly roles in the Philippines.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    url: "/salaries/philippines",
  });

  const datasetSchema = generateDatasetSchema({
    name: "Philippines Remote Workforce Salary Ranges 2026",
    description:
      "Monthly base salary ranges (30th–70th percentile) for 15 remote-friendly roles in the Philippines, expressed in USD and PHP.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    sources: [
      { name: "Glassdoor Philippines", url: "https://www.glassdoor.com" },
      { name: "Payscale Philippines", url: "https://www.payscale.com" },
      { name: "Indeed Philippines", url: "https://ph.indeed.com" },
      { name: "Arc.dev", url: "https://arc.dev" },
    ],
    url: "/salaries/philippines",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      <article>
        <div className="prose-rwci page-header">
          <p className="breadcrumb">
            <a href="/">Home</a> /{" "}
            <a href="/salaries/philippines">Salaries — Philippines</a>
          </p>
          <h1>Salary ranges for remote workers in the Philippines, 2026.</h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#6b6354",
              marginBottom: "0.75rem",
            }}
          >
            Median monthly compensation and 30th–70th percentile ranges across
            15 remote-friendly roles.
          </p>
          <span className="last-updated">Last updated: May 2026</span>
        </div>

        <div className="prose-rwci">
          <p>
            This page reports monthly base salary ranges for remote workers
            based in the Philippines and employed by international (primarily
            US-based) organizations. The Philippines has a mature BPO and
            remote-services industry; international employers typically pay
            50–120 percent above local Philippine market rates. Local market
            data from Glassdoor, Payscale, and Indeed Philippines is cited in
            the footnotes as context.
          </p>
          <p>
            All figures are expressed in USD. PHP equivalents appear in the
            native range column, calculated at 1 USD = 61.61 PHP (PhilNews,
            May 17, 2026). Data was collected in May 2026 from Glassdoor
            Philippines, Payscale Philippines, Indeed Philippines, Arc.dev,
            Second Talent, SalaryExpert, and Levels.fyi. Sample sizes are not
            uniformly available; where unavailable, the source column notes
            this. The 30th–70th percentile spread is estimated from the
            aggregate distribution across sources.
          </p>
          <p>
            Figures cover base salary only. The Philippines mandates a 13th
            month pay benefit, which adds approximately 8.33 percent to
            annualized base cost. For fully loaded employer costs including SSS,
            PhilHealth, Pag-IBIG, 13th month, equipment, and overhead, see{" "}
            <a href="/total-cost/philippines">Total Cost — Philippines</a>. For
            full methodology, see <a href="/methodology">Methodology</a>. Managed
            remote workforce providers such as{" "}
            <a href="https://f5hiringsolutions.com" rel="noopener">
              F5 Hiring Solutions
            </a>{" "}
            absorb statutory contributions, 13th month, equipment, and overhead
            into a single rate; the figures below reflect the base salary
            component those providers must cover.
          </p>

          <div className="callout">
            <p>
              <strong>Methodology note:</strong> Compensation ranges below
              reflect base salary only. See{" "}
              <a href="/total-cost/philippines">/total-cost/philippines</a> for
              fully loaded employer cost figures including SSS, PhilHealth,
              Pag-IBIG, mandatory 13th month pay, equipment, and management
              overhead.
            </p>
          </div>
        </div>

        <div className="tables-rwci" style={{ marginTop: "2rem" }}>
          <RoleTable section="A" footnoteOffset={0} />
          <RoleTable section="B" footnoteOffset={21} />
          <RoleTable section="C" footnoteOffset={29} />
        </div>

        <div className="prose-rwci" style={{ paddingBottom: "3rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#6b6354", fontStyle: "italic" }}>
            Edited by Joel Deutsch, Remote Workforce Cost Index. Data sourced
            from public salary databases. See{" "}
            <a href="/methodology">Methodology</a> for full source list,
            collection method, and limitations.
          </p>
        </div>
      </article>
    </>
  );
}
