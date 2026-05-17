import type { Metadata } from "next";
import { generateArticleSchema, generateDatasetSchema } from "@/lib/schema";
import { formatUSD, formatINR } from "@/lib/utils";
import salariesData from "@/data/salaries-india.json";

export const metadata: Metadata = {
  title: "Salary ranges for remote workers in India, 2026",
  description:
    "Local employer and US employer remote monthly compensation for 15 remote-friendly roles in India. Sources: Glassdoor, Payscale, Indeed, Arc.dev, BLS OES. Data accessed May 2026.",
  openGraph: {
    title: "India Remote Worker Salaries 2026 | Remote Workforce Cost Index",
    description:
      "Dual-market salary data: local employer rates and US employer remote rates for 15 roles in India.",
    url: "https://remoteworkforcecostindex.com/salaries/india",
  },
};

type LocalEmployer = {
  medianMonthlyUSD: number;
  percentile30USD: number;
  percentile70USD: number;
  medianMonthlyINR: number;
  percentile30INR: number;
  percentile70INR: number;
  caveats: string;
  sources: { name: string; url: string; accessed: string }[];
};

type UsEmployerRemote = {
  medianMonthlyUSD: number;
  percentile30USD: number;
  percentile70USD: number;
  source_name: string;
  source_url: string;
  accessed: string;
  outlier_flag: boolean;
  source_note: string | null;
};

type Role = {
  id: string;
  role: string;
  section: string;
  yearsExperience: string;
  local_employer: LocalEmployer;
  us_employer_remote: UsEmployerRemote;
  offshore_pct: number;
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
            Section {section} — {sectionLabels[section]}, monthly base
            compensation in USD, India, 2026. Local = Glassdoor/Payscale/Indeed.
            US Remote = Arc.dev or BLS OES May 2024 offshore-discount estimate.
          </caption>
          <thead>
            <tr>
              <th>Role</th>
              <th>Exp</th>
              <th className="num">Local Median (USD)</th>
              <th className="num">Local Range (USD)</th>
              <th
                className="num"
                style={{ borderLeft: "2px solid #C9A961" }}
              >
                US Remote Median (USD)
              </th>
              <th className="num">US Remote Range (USD)</th>
              <th className="num">Native Range (INR)</th>
              <th className="num">Offshore %</th>
              <th>Sources</th>
            </tr>
          </thead>
          <tbody>
            {sectionRoles.map((role) => {
              const localFootnotes = role.local_employer.sources.map((src) => {
                footnoteIndex++;
                footnotes.push({
                  num: footnoteIndex,
                  content: `${src.name}, accessed ${src.accessed}. ${src.url}`,
                });
                return footnoteIndex;
              });

              footnoteIndex++;
              const usRemoteFootnoteNum = footnoteIndex;
              const usRemoteSource = role.us_employer_remote;
              footnotes.push({
                num: usRemoteFootnoteNum,
                content: `${usRemoteSource.source_name}, accessed ${usRemoteSource.accessed}. ${usRemoteSource.source_url}${usRemoteSource.source_note ? " Note: " + usRemoteSource.source_note : ""}`,
              });

              return (
                <tr key={role.id}>
                  <td>{role.role}</td>
                  <td>{role.yearsExperience} yrs</td>
                  <td className="num">
                    {formatUSD(role.local_employer.medianMonthlyUSD)}
                  </td>
                  <td className="num">
                    {formatUSD(role.local_employer.percentile30USD)}–
                    {formatUSD(role.local_employer.percentile70USD)}
                  </td>
                  <td
                    className="num"
                    style={{ borderLeft: "2px solid #C9A961" }}
                  >
                    {formatUSD(role.us_employer_remote.medianMonthlyUSD)}
                    {role.us_employer_remote.outlier_flag && (
                      <sup style={{ color: "#C9A961", marginLeft: "2px" }}>
                        †
                      </sup>
                    )}
                  </td>
                  <td className="num">
                    {formatUSD(role.us_employer_remote.percentile30USD)}–
                    {formatUSD(role.us_employer_remote.percentile70USD)}
                  </td>
                  <td className="num">
                    {formatINR(role.local_employer.percentile30INR)}–
                    {formatINR(role.local_employer.percentile70INR)}
                  </td>
                  <td className="num">{role.offshore_pct}%</td>
                  <td>
                    {localFootnotes.map((n, i) => (
                      <span key={n}>
                        <sup>
                          <a href={`#fn-in-${n}`}>[{n}]</a>
                        </sup>
                        {i < localFootnotes.length - 1 ? " " : ""}
                      </span>
                    ))}
                    {" "}
                    <sup>
                      <a href={`#fn-in-${usRemoteFootnoteNum}`}>
                        [{usRemoteFootnoteNum}]
                      </a>
                    </sup>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {footnotes.some((fn) =>
        sectionRoles.some(
          (r) => r.us_employer_remote.outlier_flag
        )
      ) && (
        <p
          style={{
            fontSize: "11.5px",
            color: "rgba(10, 37, 64, 0.75)",
            fontFamily: "var(--font-mono), 'Courier New', monospace",
            marginTop: "0.35rem",
            marginBottom: "0.5rem",
          }}
        >
          † US employer remote median falls outside the expected offshore discount
          band for this role. See footnote for detail.
        </p>
      )}
      <ol
        className="table-footnotes"
        start={footnoteOffset + 1}
        style={{ paddingLeft: "1.25rem" }}
      >
        {footnotes.map((fn) => (
          <li key={fn.num} id={`fn-in-${fn.num}`}>
            {fn.content}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function IndiaSalariesPage() {
  const articleSchema = generateArticleSchema({
    title: "Salary ranges for remote workers in India, 2026",
    description:
      "Local employer and US employer remote monthly compensation for 15 remote-friendly roles in India.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    url: "/salaries/india",
  });

  const datasetSchema = generateDatasetSchema({
    name: "India Remote Workforce Salary Ranges 2026",
    description:
      "Dual-market monthly base salary data for 15 remote-friendly roles in India: local employer rates (Glassdoor/Payscale/Indeed) and US employer remote rates (Arc.dev/BLS OES).",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    sources: [
      { name: "Glassdoor India", url: "https://www.glassdoor.co.in" },
      { name: "Payscale India", url: "https://www.payscale.com" },
      { name: "Indeed India", url: "https://in.indeed.com" },
      { name: "Arc.dev", url: "https://arc.dev" },
      {
        name: "U.S. Bureau of Labor Statistics — OEWS May 2024",
        url: "https://www.bls.gov/oes/current/oes_nat.htm",
      },
    ],
    url: "/salaries/india",
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
            <a href="/">Home</a> / <a href="/salaries/india">Salaries — India</a>
          </p>
          <h1>Salary ranges for remote workers in India, 2026.</h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#6b6354",
              marginBottom: "0.75rem",
            }}
          >
            Local employer and US employer remote monthly compensation across 15
            remote-friendly roles.
          </p>
          <span className="last-updated">Last updated: May 2026</span>
        </div>

        <div className="prose-rwci">
          <p>
            This page reports monthly base salary data for remote workers based
            in India across two distinct market contexts. The{" "}
            <strong>local employer</strong> column reflects compensation paid by
            Indian companies, sourced from Glassdoor India, Payscale India, and
            Indeed India. The <strong>US employer remote</strong> column reflects
            compensation paid by US-based employers for the same roles performed
            remotely from India, sourced from Arc.dev or estimated from BLS OES
            May 2024 offshore discount bands where direct data is unavailable.
            These two series are not interchangeable: the same role title
            commands materially different pay depending on the employer&apos;s
            country of domicile.
          </p>
          <p>
            The <strong>offshore %</strong> column expresses the US employer
            remote median as a percentage of the BLS OES May 2024 US domestic
            median for the same occupational category. Roles marked{" "}
            <span style={{ color: "#C9A961" }}>†</span> fall outside the
            expected band for their experience tier. See{" "}
            <a href="/methodology#offshore-discount">Methodology — offshore
            discount</a> for band definitions and outlier handling.
          </p>
          <p>
            All figures are expressed in USD. INR equivalents in the native
            range column are calculated at 1 USD = 96.28 INR (Exchange-Rates.org,
            May 16, 2026). Figures cover base salary only — equity, variable
            bonuses, and employer statutory contributions are excluded. For fully
            loaded employer costs including EPF, gratuity, equipment, and
            overhead, see <a href="/total-cost/india">Total Cost — India</a>. For
            full methodology, see <a href="/methodology">Methodology</a>. Managed
            remote workforce providers such as{" "}
            <a href="https://f5hiringsolutions.com" rel="noopener">
              F5 Hiring Solutions
            </a>{" "}
            absorb statutory contributions, equipment, and overhead into a single
            rate; the figures in the US-employer column reflect the base salary
            component those providers must cover.
          </p>
        </div>

        <div className="tables-rwci" style={{ marginTop: "2rem" }}>
          <RoleTable section="A" footnoteOffset={0} />
          <RoleTable section="B" footnoteOffset={27} />
          <RoleTable section="C" footnoteOffset={39} />
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
