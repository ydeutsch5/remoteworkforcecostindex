import type { Metadata } from "next";
import { generateArticleSchema, generateDatasetSchema } from "@/lib/schema";
import { formatUSD } from "@/lib/utils";
import costData from "@/data/total-cost-india.json";

export const metadata: Metadata = {
  title: "Fully loaded employer cost for remote workers in India, 2026",
  description:
    "Base salary plus statutory contributions (EPF, gratuity), equipment, internet, and management overhead. Monthly employer cost for 15 roles, India, 2026.",
  openGraph: {
    title: "India Remote Worker Total Employer Cost 2026 | Remote Workforce Cost Index",
    description:
      "Fully loaded monthly employer cost for 15 remote roles in India, including EPF, gratuity reserve, equipment, and overhead.",
    url: "https://remoteworkforcecostindex.com/total-cost/india",
  },
};

type CostRole = {
  id: string;
  role: string;
  section: string;
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
            in USD, India, 2026. All figures are monthly.
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
            {sectionRoles.map((role) => (
              <tr key={role.id}>
                <td>{role.role}</td>
                <td className="num">{formatUSD(role.baseSalaryUSD)}</td>
                <td className="num">{formatUSD(role.epfEmployerUSD)}</td>
                <td className="num">{formatUSD(role.gratuityReserveUSD)}</td>
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
        * Calculated on basic salary assumed at 40% of gross CTC, per common
        employer practice. EPF employer rate: 12%. Gratuity reserve: 4.81% of
        basic (Payment of Gratuity Act formula: 15/26 × basic per year).
        <br />
        † Management overhead is an industry-typical estimate (7.5% of base
        salary) for organizations using managed remote workforce providers. Not
        a quoted rate from any specific provider. Professional tax of $2/month
        (Karnataka/Maharashtra model) included in Total Monthly but shown as
        rounding in column values.
      </p>
    </div>
  );
}

export default function IndiaTotalCostPage() {
  const articleSchema = generateArticleSchema({
    title: "Fully loaded employer cost for remote workers in India, 2026",
    description:
      "Base salary plus EPF, gratuity reserve, equipment, internet stipend, management overhead, and training reserve. Monthly employer cost for 15 roles.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    url: "/total-cost/india",
  });

  const datasetSchema = generateDatasetSchema({
    name: "India Remote Workforce Total Employer Cost 2026",
    description:
      "Fully loaded monthly employer cost for 15 remote-friendly roles in India, including statutory contributions, equipment, and overhead.",
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
            <a href="/">Home</a> / <a href="/total-cost/india">Total Cost — India</a>
          </p>
          <h1>Fully loaded employer cost for remote workers in India, 2026.</h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#6b6354",
              marginBottom: "0.75rem",
            }}
          >
            Base salary plus statutory contributions, equipment, facilities,
            and overhead, expressed as monthly employer cost in USD.
          </p>
          <span className="last-updated">Last updated: May 2026</span>
        </div>

        <div className="prose-rwci">
          <p>
            &quot;Fully loaded employer cost&quot; is the total monthly expenditure an
            organization incurs to employ a remote worker in India, beyond the
            base salary paid to the employee. It includes statutory
            contributions mandated by Indian law, equipment provision, internet
            reimbursement, and an estimate of management overhead. It does not
            include income taxes paid by the employee, optional benefits such as
            private health insurance, or equity compensation.
          </p>

          <p>
            For organizations employing workers directly in India, these
            contributions are calculated and remitted by the employer. Managed
            remote workforce providers such as{" "}
            <a href="https://f5hiringsolutions.com" rel="noopener">
              F5 Hiring Solutions
            </a>{" "}
            absorb statutory contributions, equipment, and overhead into a
            single all-inclusive rate. The breakdown below reflects the
            underlying components those providers must cover.
          </p>

          <p>
            Base salary figures are drawn from{" "}
            <a href="/salaries/india">Salaries — India</a> (median monthly USD
            for each role). For full methodology, see{" "}
            <a href="/methodology">Methodology</a>.
          </p>

          <h2>Statutory contributions — India</h2>

          <p>
            The following statutory contributions apply to employers with
            employees in India. Rates reflect 2025–2026 government schedules.
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
                    Employer 12% split: 3.67% to EPF, 8.33% to EPS (Employee
                    Pension Scheme). Basic typically 40–50% of CTC.
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
                    ESI does not apply to roles in this dataset. All roles
                    report gross wages above the ₹21,000 threshold at
                    international remote rates.
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
                    Formula: 15/26 × basic salary per year × years of service.
                    Monthly reserve: 4.81% of basic ≈ 1.92% of gross CTC.
                  </td>
                </tr>
                <tr>
                  <td>Professional Tax</td>
                  <td className="num">≤ ₹2,400/year</td>
                  <td>State-levied</td>
                  <td>
                    Karnataka and Maharashtra impose a maximum of ₹2,400/year
                    (₹200/month). Modeled at $2/month.
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
              ESI and Gratuity Regulations. greythr.com/blog/decoding-pf-esi-and-gratuity-regulations/.
              Accessed May 2026.
            </li>
          </ol>

          <div className="callout">
            <p>
              <strong>Methodology note:</strong> EPF is calculated on basic
              salary, modeled at 40% of gross CTC. Effective EPF rate on gross
              CTC: approximately 4.8%. Gratuity reserve effective rate on gross
              CTC: approximately 1.9%. Management overhead (7.5%) is an
              industry-typical estimate for managed-service arrangements and
              should be understood as approximate. Equipment is amortized over
              36 months at Dell India/Lenovo India pricing (accessed May 2026).
            </p>
          </div>

          <h2>Monthly employer cost by role</h2>
          <p>
            The tables below apply the statutory and additional cost components
            to the median base salary for each role. Figures represent the
            monthly total an employer incurs per worker at median pay, before
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
            rates sourced from EPFO and ESIC (May 2026). Salary data from
            Glassdoor India, Payscale India, Indeed India, and Arc.dev (May
            2026). See <a href="/methodology">Methodology</a> for full source
            list and limitations.
          </p>
        </div>
      </article>
    </>
  );
}
