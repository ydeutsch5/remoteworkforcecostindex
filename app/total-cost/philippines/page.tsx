import type { Metadata } from "next";
import { generateArticleSchema, generateDatasetSchema } from "@/lib/schema";
import { formatUSD } from "@/lib/utils";
import costData from "@/data/total-cost-philippines.json";

export const metadata: Metadata = {
  title: "Fully loaded employer cost for remote workers in the Philippines, 2026",
  description:
    "Base salary plus SSS, PhilHealth, Pag-IBIG, 13th month pay, equipment, and management overhead. Monthly employer cost for 15 roles, Philippines, 2026.",
  openGraph: {
    title: "Philippines Remote Worker Total Employer Cost 2026 | Remote Workforce Cost Index",
    description:
      "Fully loaded monthly employer cost for 15 remote roles in the Philippines, including SSS, PhilHealth, Pag-IBIG, and mandatory 13th month.",
    url: "https://remoteworkforcecostindex.com/total-cost/philippines",
  },
};

type CostRole = {
  id: string;
  role: string;
  section: string;
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

const roles: CostRole[] = costData.roles as CostRole[];
const sectionLabels: Record<string, string> = {
  A: "Software and technical roles",
  B: "Operations and design roles",
  C: "Specialized roles",
};

function getSectionRoles(section: string) {
  return roles.filter((r) => r.section === section);
}

function CostTable({ section }: { section: string }) {
  const sectionRoles = getSectionRoles(section);

  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <div className="table-scroll">
        <table>
          <caption>
            Section {section} — {sectionLabels[section]}, monthly employer cost
            in USD, Philippines, 2026. All figures are monthly.
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
            {sectionRoles.map((role) => (
              <tr key={role.id}>
                <td>{role.role}</td>
                <td className="num">{formatUSD(role.baseSalaryUSD)}</td>
                <td className="num">{formatUSD(role.sssEmployerUSD)}</td>
                <td className="num">{formatUSD(role.philhealthEmployerUSD)}</td>
                <td className="num">{formatUSD(role.pagibigEmployerUSD)}</td>
                <td className="num">{formatUSD(role.thirteenthMonthUSD)}</td>
                <td className="num">{formatUSD(role.equipmentUSD)}</td>
                <td className="num">{formatUSD(role.internetUSD)}</td>
                <td className="num">{formatUSD(role.managementOverheadUSD)}</td>
                <td className="num">{formatUSD(role.trainingReserveUSD)}</td>
                <td className="num" style={{ fontWeight: 700 }}>
                  {formatUSD(role.totalMonthlyEmployerCostUSD)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="table-footnotes" style={{ marginTop: "0.5rem" }}>
        SSS employer contribution: 10% of monthly salary credit, capped at MSC
        of ₱35,000/month ($568). PhilHealth employer: 2.5% of monthly salary,
        capped at salary base ₱100,000/month ($1,623). Pag-IBIG employer: 2%
        of monthly salary, capped at ₱10,000/month ($162); cap binds for all
        roles.
        <br />
        † 13th month pay is a mandatory annual benefit (Presidential Decree
        851). Modeled as 8.33% of monthly base salary (1/12 of annual
        equivalent).
        <br />
        ‡ Management overhead is an industry-typical estimate (7.5% of base
        salary). Not a quoted rate from any specific provider.
      </p>
    </div>
  );
}

export default function PhilippinesTotalCostPage() {
  const articleSchema = generateArticleSchema({
    title: "Fully loaded employer cost for remote workers in the Philippines, 2026",
    description:
      "Base salary plus SSS, PhilHealth, Pag-IBIG, mandatory 13th month pay, equipment, internet, and management overhead. Monthly employer cost for 15 roles.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    url: "/total-cost/philippines",
  });

  const datasetSchema = generateDatasetSchema({
    name: "Philippines Remote Workforce Total Employer Cost 2026",
    description:
      "Fully loaded monthly employer cost for 15 remote-friendly roles in the Philippines, including SSS, PhilHealth, Pag-IBIG, 13th month, equipment, and overhead.",
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
            Base salary plus statutory contributions, 13th month pay,
            equipment, facilities, and overhead, expressed as monthly employer
            cost in USD.
          </p>
          <span className="last-updated">Last updated: May 2026</span>
        </div>

        <div className="prose-rwci">
          <p>
            &quot;Fully loaded employer cost&quot; is the total monthly expenditure an
            organization incurs to employ a remote worker in the Philippines,
            beyond the base salary paid to the employee. It includes mandatory
            statutory contributions (SSS, PhilHealth, Pag-IBIG), the
            13th-month pay benefit required by Philippine law, equipment
            provision, internet reimbursement, and an estimate of management
            overhead. It does not include income taxes paid by the employee,
            optional benefits such as private health insurance, or equity
            compensation.
          </p>

          <p>
            Base salary figures are drawn from{" "}
            <a href="/salaries/philippines">Salaries — Philippines</a> (median
            monthly USD for each role). For full methodology, see{" "}
            <a href="/methodology">Methodology</a>.
          </p>

          <h2>Statutory contributions — Philippines</h2>

          <p>
            The following statutory contributions apply to employers with
            employees in the Philippines. Rates reflect 2026 government
            schedules.
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
                    Employee contributes 5%. MSC cap: ₱35,000 ($568). Employer
                    also remits ₱10/month Employees&apos; Compensation (EC).
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
                  <td>Monthly salary up to ₱100,000</td>
                  <td>
                    Total premium 5%, split evenly. Minimum monthly
                    contribution: ₱500. Maximum: ₱5,000 (at ₱100,000 salary
                    base).
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
                  <td>Monthly salary up to ₱10,000</td>
                  <td>
                    Maximum mandatory employer contribution: ₱200/month ($3.25).
                    Cap binds for all roles in this dataset.
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
              Social Security System — SSS Contribution Table 2026. Taxumo.com
              — BIR Tax Table and Contribution for 2026.
              taxumo.com/blog/bir-tax-table-2026/. Accessed May 2026.
            </li>
            <li id="fn-tc-ph-2">
              Philippine Health Insurance Corporation — Contribution Table 2026.
              philhealth.gov.ph/partners/employers/ContributionTable_v2.pdf.
              Accessed May 2026.
            </li>
            <li id="fn-tc-ph-3">
              Pag-IBIG Fund — Contribution Table 2026. requirementph.com/pag-ibig-contribution-table-2026/.
              Accessed May 2026.
            </li>
            <li id="fn-tc-ph-4">
              Department of Labor and Employment Philippines — 13th Month Pay
              Guidelines (Presidential Decree 851). taxumo.com/blog/bir-tax-table-2026/.
              Accessed May 2026.
            </li>
          </ol>

          <div className="callout">
            <p>
              <strong>13th month pay note:</strong> The 13th month benefit is
              mandatory under Philippine law and adds approximately 8.33 percent
              to annualized base salary cost. At a base salary of $1,600/month,
              the monthly 13th-month reserve is $133. This figure is included in
              the &quot;Total Monthly&quot; column in all tables below.
            </p>
          </div>

          <div className="callout">
            <p>
              <strong>Methodology note:</strong> Equipment is amortized over 36
              months at Lenovo Philippines and Dell Philippines pricing (accessed
              May 2026). Management overhead (7.5%) is an industry-typical
              estimate and should be understood as approximate. Internet stipend
              ($15/month) reflects typical employer reimbursement for broadband.
            </p>
          </div>

          <h2>Monthly employer cost by role</h2>
          <p>
            The tables below apply all statutory and additional cost components
            to the median base salary for each role. &quot;Total Monthly&quot; represents
            the full monthly expenditure per worker at median pay, before
            optional benefits.
          </p>
        </div>

        <div className="tables-rwci" style={{ marginTop: "1.5rem" }}>
          <CostTable section="A" />
          <CostTable section="B" />
          <CostTable section="C" />
        </div>

        <div className="prose-rwci" style={{ paddingBottom: "3rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#6b6354", fontStyle: "italic" }}>
            Edited by Joel Deutsch, Remote Workforce Cost Index. Statutory
            rates sourced from SSS, PhilHealth, and Pag-IBIG (May 2026).
            Salary data from Glassdoor Philippines, Payscale Philippines,
            Indeed Philippines, and Arc.dev (May 2026). See{" "}
            <a href="/methodology">Methodology</a> for full source list and
            limitations.
          </p>
        </div>
      </article>
    </>
  );
}
