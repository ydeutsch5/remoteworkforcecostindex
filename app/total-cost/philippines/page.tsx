import type { Metadata } from "next";
import { generateArticleSchema, generateDatasetSchema } from "@/lib/schema";
import { formatUSD } from "@/lib/utils";
import costData from "@/data/total-cost-philippines.json";

export const metadata: Metadata = {
  title: "Fully loaded employer cost for remote workers in the Philippines, 2026",
  description:
    "Two scenarios: local employer base and US employer remote base, both with full Philippines statutory costs (SSS, PhilHealth, Pag-IBIG, 13th month), equipment, and overhead. Monthly employer cost for 15 roles.",
  openGraph: {
    title: "Philippines Remote Worker Total Employer Cost 2026 | Remote Workforce Cost Index",
    description:
      "Dual-scenario fully loaded monthly employer cost for 15 remote roles in the Philippines, including SSS, PhilHealth, Pag-IBIG, and mandatory 13th month.",
    url: "https://remoteworkforcecostindex.com/total-cost/philippines",
  },
};

type Scenario = {
  baseSalaryUSD: number;
  sssEmployerUSD: number;
  philhealthEmployerUSD: number;
  pagibigEmployerUSD: number;
  thirteenthMonthUSD: number;
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
            scenario, monthly employer cost in USD, Philippines, 2026. Base
            salary from Arc.dev / BLS OES May 2024 offshore-discount estimate.
          </caption>
          <thead>
            <tr>
              <th>Role</th>
              <th className="num">Base Salary</th>
              <th className="num">SSS 10%</th>
              <th className="num">PhilHealth 2.5%</th>
              <th className="num">Pag-IBIG 2%</th>
              <th className="num">13th Month†</th>
              <th className="num">Equipment</th>
              <th className="num">Internet</th>
              <th className="num">Mgmt Overhead‡</th>
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
                  <td className="num">{formatUSD(s.sssEmployerUSD)}</td>
                  <td className="num">{formatUSD(s.philhealthEmployerUSD)}</td>
                  <td className="num">{formatUSD(s.pagibigEmployerUSD)}</td>
                  <td className="num">{formatUSD(s.thirteenthMonthUSD)}</td>
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
        SSS employer contribution: 10% of MSC, capped at $57/month. PhilHealth
        employer: 2.5% of monthly salary, capped at $41/month (salary base ≤
        $1,623). Pag-IBIG: capped at $3/month for all roles.
        <br />
        † 13th month pay: 8.33% of monthly base (mandatory under Presidential
        Decree 851).
        <br />
        ‡ Management overhead: 7.5% of base salary. Not a quoted rate from any
        specific provider.
      </p>
    </div>
  );
}

export default function PhilippinesTotalCostPage() {
  const articleSchema = generateArticleSchema({
    title: "Fully loaded employer cost for remote workers in the Philippines, 2026",
    description:
      "Two scenarios — local employer base and US employer remote base — both with full Philippines statutory costs (SSS, PhilHealth, Pag-IBIG, 13th month), equipment, and overhead. Monthly employer cost for 15 roles.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    url: "/total-cost/philippines",
  });

  const datasetSchema = generateDatasetSchema({
    name: "Philippines Remote Workforce Total Employer Cost 2026",
    description:
      "Dual-scenario fully loaded monthly employer cost for 15 remote-friendly roles in the Philippines. Local employer scenario and US employer remote scenario, both with statutory contributions, 13th month, equipment, and overhead.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    sources: [
      {
        name: "SSS Contribution Table 2026",
        url: "https://www.taxumo.com/blog/bir-tax-table-2026/",
      },
      {
        name: "PhilHealth Contribution Table 2026",
        url: "https://www.philhealth.gov.ph/partners/employers/ContributionTable_v2.pdf",
      },
      {
        name: "Pag-IBIG Contribution Table 2026",
        url: "https://requirementph.com/pag-ibig-contribution-table-2026/",
      },
      {
        name: "Arc.dev — Remote Salaries in Philippines",
        url: "https://arc.dev/salaries",
      },
      {
        name: "U.S. Bureau of Labor Statistics — OEWS May 2024",
        url: "https://www.bls.gov/oes/current/oes_nat.htm",
      },
    ],
    url: "/total-cost/philippines",
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
            <a href="/total-cost/philippines">Total Cost — Philippines</a>
          </p>
          <h1>
            Fully loaded employer cost for remote workers in the Philippines,
            2026.
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#6b6354",
              marginBottom: "0.75rem",
            }}
          >
            Two scenarios: local employer base and US employer remote base, both
            with full Philippines statutory costs, 13th month, equipment, and
            overhead. Monthly cost in USD.
          </p>
          <span className="last-updated">Last updated: May 2026</span>
        </div>

        <div className="prose-rwci">
          <p>
            This page reports fully loaded monthly employer cost for remote
            workers in the Philippines under two base salary scenarios. The{" "}
            <strong>local scenario</strong> applies Philippines statutory
            contributions to the local employer median salary from{" "}
            <a href="/salaries/philippines">Salaries — Philippines</a>{" "}
            (Glassdoor/Payscale/Indeed sources). The{" "}
            <strong>US remote scenario</strong> applies the same statutory
            contributions to the US employer remote median salary from the same
            page (Arc.dev or BLS OES May 2024 offshore-discount estimate). The
            statutory contribution rates, 13th month benefit, equipment costs,
            and overhead estimate are identical in both scenarios — only the base
            salary differs.
          </p>
          <p>
            &quot;Fully loaded cost&quot; includes SSS, PhilHealth, Pag-IBIG, mandatory
            13th month pay, equipment amortization, internet stipend, management
            overhead, and a training reserve. It does not include income taxes
            paid by the employee, optional benefits, or equity. For full
            methodology, see <a href="/methodology">Methodology</a>.
          </p>

          <h2>Statutory contributions — Philippines</h2>
          <p>
            Rates reflect 2026 government schedules and apply equally to both
            scenarios.
          </p>

          <div className="table-scroll" style={{ marginBottom: "2rem" }}>
            <table>
              <caption>
                Philippines statutory employer contributions, 2026. Sources:
                SSS, PhilHealth, Pag-IBIG, DOLE (all accessed May 2026).
              </caption>
              <thead>
                <tr>
                  <th>Contribution</th>
                  <th className="num">Employer Rate</th>
                  <th>Salary Base / Cap</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Social Security System (SSS){" "}
                    <sup>
                      <a href="#fn-tc-ph-1">[1]</a>
                    </sup>
                  </td>
                  <td className="num">10%</td>
                  <td>MSC up to ₱35,000/month</td>
                  <td>
                    Employee contributes 5%. MSC cap: ₱35,000 ($568). Max
                    employer contribution: $57/month. Cap binds for all roles
                    in the US remote scenario.
                  </td>
                </tr>
                <tr>
                  <td>
                    PhilHealth{" "}
                    <sup>
                      <a href="#fn-tc-ph-2">[2]</a>
                    </sup>
                  </td>
                  <td className="num">2.5%</td>
                  <td>Monthly salary up to ₱100,000 ($1,623)</td>
                  <td>
                    Total premium 5%, split evenly. Capped at $41/month for
                    salaries above $1,623. Uncapped for salaries below;
                    effective rate is 2.5% of base.
                  </td>
                </tr>
                <tr>
                  <td>
                    Pag-IBIG{" "}
                    <sup>
                      <a href="#fn-tc-ph-3">[3]</a>
                    </sup>
                  </td>
                  <td className="num">2%</td>
                  <td>Monthly salary up to ₱10,000 ($162)</td>
                  <td>
                    Maximum mandatory employer contribution: $3/month. Cap
                    binds for all roles in this dataset.
                  </td>
                </tr>
                <tr>
                  <td>
                    13th Month Pay{" "}
                    <sup>
                      <a href="#fn-tc-ph-4">[4]</a>
                    </sup>
                  </td>
                  <td className="num">8.33% of annual basic</td>
                  <td>Full basic salary, no cap</td>
                  <td>
                    Mandatory under Presidential Decree 851. Equivalent to one
                    month&apos;s basic salary, paid before December 24. Modeled
                    monthly as 8.33% of base.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ol
            className="table-footnotes"
            style={{ paddingLeft: "1.25rem", marginBottom: "2rem" }}
          >
            <li id="fn-tc-ph-1">
              Social Security System — SSS Contribution Table 2026.
              taxumo.com/blog/bir-tax-table-2026/. Accessed May 2026.
            </li>
            <li id="fn-tc-ph-2">
              Philippine Health Insurance Corporation — Contribution Table 2026.
              philhealth.gov.ph/partners/employers/ContributionTable_v2.pdf.
              Accessed May 2026.
            </li>
            <li id="fn-tc-ph-3">
              Pag-IBIG Fund — Contribution Table 2026.
              requirementph.com/pag-ibig-contribution-table-2026/. Accessed May
              2026.
            </li>
            <li id="fn-tc-ph-4">
              Department of Labor and Employment Philippines — 13th Month Pay
              Guidelines (Presidential Decree 851).
              taxumo.com/blog/bir-tax-table-2026/. Accessed May 2026.
            </li>
          </ol>

          <h2>Scenario comparison — all roles</h2>
          <p>
            The table below compares total monthly employer cost under both
            scenarios for all 15 roles. Base salary source for each scenario is
            documented in{" "}
            <a href="/salaries/philippines">Salaries — Philippines</a>.
          </p>
        </div>

        <div className="tables-rwci" style={{ marginTop: "1rem" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="table-scroll">
              <table>
                <caption>
                  Philippines — scenario comparison, all 15 roles, monthly
                  employer cost in USD, 2026. Local scenario uses
                  Glassdoor/Payscale/Indeed median. US remote scenario uses
                  Arc.dev / BLS OES May 2024 offshore-discount median.
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
              formula applied to the local base salary; detailed local
              breakdowns are derivable from the salary and statutory rate data
              on this page.
            </p>

            <div className="callout">
              <p>
                <strong>13th month note:</strong> The 13th month benefit is
                mandatory and adds approximately 8.33 percent to annualized base
                salary cost. PhilHealth is uncapped for base salaries below
                $1,623/month; for Customer Support ($950), Medical Billing
                ($1,100), and CAD Drafter ($1,550) in the US remote scenario,
                PhilHealth is calculated at the actual rate (2.5% of base) rather
                than the $41 cap.
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
            sourced from SSS, PhilHealth, and Pag-IBIG (May 2026). US employer
            remote salary data from Arc.dev and BLS OES (May 2026). Local salary
            data from Glassdoor Philippines, Payscale Philippines, and Indeed
            Philippines (May 2026). See{" "}
            <a href="/methodology">Methodology</a> for full source list and
            limitations.
          </p>
        </div>
      </article>
    </>
  );
}
