import type { Metadata } from "next";
import { generateArticleSchema, generateDatasetSchema } from "@/lib/schema";
import { formatUSD } from "@/lib/utils";
import costData from "@/data/total-cost-india.json";

export const metadata: Metadata = {
  title: "Fully loaded employer cost for remote workers in India, 2026",
  description:
    "Two scenarios: local employer base and US employer remote base, both with full India statutory costs (EPF, gratuity), equipment, and overhead. Monthly employer cost for 15 roles, India, 2026.",
  openGraph: {
    title: "India Remote Worker Total Employer Cost 2026 | Remote Workforce Cost Index",
    description:
      "Dual-scenario fully loaded monthly employer cost for 15 remote roles in India, including EPF, gratuity reserve, equipment, and overhead.",
    url: "https://remoteworkforcecostindex.com/total-cost/india",
  },
};

type Scenario = {
  baseSalaryUSD: number;
  epfEmployerUSD: number;
  gratuityReserveUSD: number;
  professionalTaxUSD: number;
  equipmentUSD: number;
  internetUSD: number;
  managementOverheadUSD: number;
  trainingReserveUSD: number;
  totalMonthlyEmployerCostUSD: number;
};

type CostRole = {
  id: string;
  role: string;
  section: string;
  local_scenario: Scenario;
  us_remote_scenario: Scenario;
};

const roles: CostRole[] = costData.roles as CostRole[];
const sectionLabels: Record<string, string> = {
  A: "Software and technical roles",
  B: "Operations and design roles",
  C: "Specialized roles",
};

function getSectionRoles(section: string) {
  return roles.filter((r) => r.section === section);
}

function UsRemoteDetailTable({ section }: { section: string }) {
  const sectionRoles = getSectionRoles(section);

  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <div className="table-scroll">
        <table>
          <caption>
            Section {section} — {sectionLabels[section]}, US employer remote
            scenario, monthly employer cost in USD, India, 2026. Base salary
            from Arc.dev / BLS OES May 2024 offshore-discount estimate.
          </caption>
          <thead>
            <tr>
              <th>Role</th>
              <th className="num">Base Salary</th>
              <th className="num">EPF 12%*</th>
              <th className="num">Gratuity 4.81%*</th>
              <th className="num">Equipment</th>
              <th className="num">Internet</th>
              <th className="num">Mgmt Overhead†</th>
              <th className="num">Training</th>
              <th className="num">Total Monthly</th>
            </tr>
          </thead>
          <tbody>
            {sectionRoles.map((role) => {
              const s = role.us_remote_scenario;
              return (
                <tr key={role.id}>
                  <td>{role.role}</td>
                  <td className="num">{formatUSD(s.baseSalaryUSD)}</td>
                  <td className="num">{formatUSD(s.epfEmployerUSD)}</td>
                  <td className="num">{formatUSD(s.gratuityReserveUSD)}</td>
                  <td className="num">{formatUSD(s.equipmentUSD)}</td>
                  <td className="num">{formatUSD(s.internetUSD)}</td>
                  <td className="num">{formatUSD(s.managementOverheadUSD)}</td>
                  <td className="num">{formatUSD(s.trainingReserveUSD)}</td>
                  <td className="num" style={{ fontWeight: 700 }}>
                    {formatUSD(s.totalMonthlyEmployerCostUSD)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="table-footnotes" style={{ marginTop: "0.5rem" }}>
        * Calculated on basic salary assumed at 40% of gross CTC. EPF employer
        rate: 12%. Gratuity reserve: 4.81% of basic (Payment of Gratuity Act
        formula: 15/26 × basic per year).
        <br />
        † Management overhead is an industry-typical estimate (7.5% of base
        salary). Not a quoted rate from any specific provider. Professional tax
        of $2/month (Karnataka/Maharashtra model) included in Total Monthly.
      </p>
    </div>
  );
}

export default function IndiaTotalCostPage() {
  const articleSchema = generateArticleSchema({
    title: "Fully loaded employer cost for remote workers in India, 2026",
    description:
      "Two scenarios — local employer base and US employer remote base — both with full India statutory costs (EPF, gratuity), equipment, and overhead. Monthly employer cost for 15 roles.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    url: "/total-cost/india",
  });

  const datasetSchema = generateDatasetSchema({
    name: "India Remote Workforce Total Employer Cost 2026",
    description:
      "Dual-scenario fully loaded monthly employer cost for 15 remote-friendly roles in India. Local employer scenario and US employer remote scenario, both with statutory contributions, equipment, and overhead.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    sources: [
      {
        name: "EPFO — Contribution Rate",
        url: "https://www.epfindia.gov.in/site_docs/PDFs/MiscPDFs/ContributionRate.pdf",
      },
      {
        name: "ESIC — Contribution Rates",
        url: "https://esic.gov.in/contribution",
      },
      {
        name: "Payment of Gratuity Act 1972",
        url: "https://empxtrack.com/blog/esi-pf-statutory-compliance/",
      },
      {
        name: "Arc.dev — Remote Salaries in India",
        url: "https://arc.dev/salaries",
      },
      {
        name: "U.S. Bureau of Labor Statistics — OEWS May 2024",
        url: "https://www.bls.gov/oes/current/oes_nat.htm",
      },
    ],
    url: "/total-cost/india",
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
            <a href="/total-cost/india">Total Cost — India</a>
          </p>
          <h1>Fully loaded employer cost for remote workers in India, 2026.</h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#6b6354",
              marginBottom: "0.75rem",
            }}
          >
            Two scenarios: local employer base and US employer remote base, both
            with full India statutory costs, equipment, and overhead. Monthly
            cost in USD.
          </p>
          <span className="last-updated">Last updated: May 2026</span>
        </div>

        <div className="prose-rwci">
          <p>
            This page reports fully loaded monthly employer cost for remote
            workers in India under two base salary scenarios. The{" "}
            <strong>local scenario</strong> applies India statutory contributions
            to the local employer median salary from{" "}
            <a href="/salaries/india">Salaries — India</a> (Glassdoor/Payscale/Indeed
            sources). The <strong>US remote scenario</strong> applies the same
            statutory contributions to the US employer remote median salary from
            the same page (Arc.dev or BLS OES May 2024 offshore-discount
            estimate). The statutory contribution rates, equipment costs, and
            overhead estimate are identical in both scenarios — only the base
            salary differs.
          </p>
          <p>
            &quot;Fully loaded cost&quot; includes EPF, gratuity reserve,
            professional tax, equipment amortization, internet stipend,
            management overhead, and a training reserve. It does not include
            income taxes paid by the employee, optional benefits, or equity.
            For full methodology, see <a href="/methodology">Methodology</a>.
          </p>

          <h2>Statutory contributions — India</h2>
          <p>
            Rates reflect 2025–2026 government schedules and apply equally to
            both scenarios.
          </p>

          <div className="table-scroll" style={{ marginBottom: "2rem" }}>
            <table>
              <caption>
                India statutory employer contributions, 2025–2026. Sources: EPFO
                (accessed May 2026), ESIC (accessed May 2026), Greythr statutory
                compliance guide (accessed May 2026).
              </caption>
              <thead>
                <tr>
                  <th>Contribution</th>
                  <th className="num">Employer Rate</th>
                  <th>Wage Base</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Employees&apos; Provident Fund (EPF){" "}
                    <sup>
                      <a href="#fn-tc-in-1">[1]</a>
                    </sup>
                  </td>
                  <td className="num">12%</td>
                  <td>Basic salary</td>
                  <td>
                    Employer 12% split: 3.67% to EPF, 8.33% to EPS. Basic
                    modeled at 40% of CTC; effective rate on gross ≈ 4.8%.
                  </td>
                </tr>
                <tr>
                  <td>
                    Employees&apos; State Insurance (ESI){" "}
                    <sup>
                      <a href="#fn-tc-in-2">[2]</a>
                    </sup>
                  </td>
                  <td className="num">3.25%</td>
                  <td>Gross wages ≤ ₹21,000/month</td>
                  <td>
                    ESI does not apply to any role in this dataset. All roles
                    exceed the ₹21,000 threshold at international remote
                    compensation levels.
                  </td>
                </tr>
                <tr>
                  <td>
                    Gratuity (Payment of Gratuity Act){" "}
                    <sup>
                      <a href="#fn-tc-in-3">[3]</a>
                    </sup>
                  </td>
                  <td className="num">4.81% of basic</td>
                  <td>Basic salary</td>
                  <td>
                    Formula: 15/26 × basic per year × years of service. Monthly
                    reserve: 4.81% of basic ≈ 1.92% of gross CTC.
                  </td>
                </tr>
                <tr>
                  <td>Professional Tax</td>
                  <td className="num">≤ ₹2,400/year</td>
                  <td>State-levied</td>
                  <td>
                    Karnataka and Maharashtra cap at ₹200/month. Modeled at
                    $2/month for all roles.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ol
            className="table-footnotes"
            style={{ paddingLeft: "1.25rem", marginBottom: "2rem" }}
          >
            <li id="fn-tc-in-1">
              Employees&apos; Provident Fund Organisation — Contribution Rate PDF.
              epfindia.gov.in/site_docs/PDFs/MiscPDFs/ContributionRate.pdf.
              Accessed May 2026.
            </li>
            <li id="fn-tc-in-2">
              Employees&apos; State Insurance Corporation — Contribution Rates.
              esic.gov.in/contribution. Accessed May 2026.
            </li>
            <li id="fn-tc-in-3">
              Payment of Gratuity Act 1972 (amended). Greythr — Decoding PF,
              ESI and Gratuity Regulations.
              greythr.com/blog/decoding-pf-esi-and-gratuity-regulations/.
              Accessed May 2026.
            </li>
          </ol>

          <h2>Scenario comparison — all roles</h2>
          <p>
            The table below compares total monthly employer cost under both
            scenarios for all 15 roles. Base salary source for each scenario is
            documented in <a href="/salaries/india">Salaries — India</a>.
          </p>
        </div>

        <div className="tables-rwci" style={{ marginTop: "1rem" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="table-scroll">
              <table>
                <caption>
                  India — scenario comparison, all 15 roles, monthly employer cost
                  in USD, 2026. Local scenario uses Glassdoor/Payscale/Indeed
                  median. US remote scenario uses Arc.dev / BLS OES May 2024
                  offshore-discount median.
                </caption>
                <thead>
                  <tr>
                    <th>Role</th>
                    <th className="num">Local Base</th>
                    <th className="num">Local Total</th>
                    <th
                      className="num"
                      style={{ borderLeft: "2px solid #C9A961" }}
                    >
                      US Remote Base
                    </th>
                    <th className="num">US Remote Total</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role) => (
                    <tr key={role.id}>
                      <td>{role.role}</td>
                      <td className="num">
                        {formatUSD(role.local_scenario.baseSalaryUSD)}
                      </td>
                      <td className="num">
                        {formatUSD(
                          role.local_scenario.totalMonthlyEmployerCostUSD
                        )}
                      </td>
                      <td
                        className="num"
                        style={{ borderLeft: "2px solid #C9A961" }}
                      >
                        {formatUSD(role.us_remote_scenario.baseSalaryUSD)}
                      </td>
                      <td className="num" style={{ fontWeight: 700 }}>
                        {formatUSD(
                          role.us_remote_scenario.totalMonthlyEmployerCostUSD
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose-rwci" style={{ marginBottom: "1rem" }}>
            <h2>US employer remote scenario — detailed breakdown</h2>
            <p>
              The tables below show the full cost breakdown for the US employer
              remote scenario by section. The local scenario follows the same
              formula applied to the local base salary; detailed local breakdowns
              are available on request or derivable from the salary and
              statutory rate data on this page.
            </p>

            <div className="callout">
              <p>
                <strong>Methodology note:</strong> EPF is calculated on basic
                salary modeled at 40% of gross CTC. Effective EPF rate on gross:
                approximately 4.8%. Gratuity effective rate on gross:
                approximately 1.9%. Management overhead (7.5%) is an
                industry-typical estimate for managed-service arrangements.
                Equipment is amortized over 36 months at Dell India/Lenovo India
                pricing (accessed May 2026).
              </p>
            </div>
          </div>

          <UsRemoteDetailTable section="A" />
          <UsRemoteDetailTable section="B" />
          <UsRemoteDetailTable section="C" />
        </div>

        <div className="prose-rwci" style={{ paddingBottom: "3rem" }}>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b6354",
              fontStyle: "italic",
            }}
          >
            Edited by Joel Deutsch, Remote Workforce Cost Index. Statutory rates
            sourced from EPFO and ESIC (May 2026). US employer remote salary
            data from Arc.dev and BLS OES (May 2026). Local salary data from
            Glassdoor India, Payscale India, and Indeed India (May 2026). See{" "}
            <a href="/methodology">Methodology</a> for full source list and
            limitations.
          </p>
        </div>
      </article>
    </>
  );
}
