import type { Metadata } from "next";
import Link from "next/link";
import { generateOrganizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Remote Workforce Cost Index — Public salary and labor cost data",
  description:
    "Public salary ranges and fully loaded employer costs for remote workers in India and the Philippines. Sourced from Glassdoor, Payscale, Indeed, and BLS. Edited by Joel Deutsch.",
  openGraph: {
    title: "Remote Workforce Cost Index",
    description:
      "Public salary and labor cost data for remote workforce planning.",
    url: "https://remoteworkforcecostindex.com",
  },
};

const dataCards = [
  {
    href: "/salaries/india",
    label: "Salaries",
    title: "India — 15 roles",
    description:
      "Monthly base compensation ranges for remote workers in India.",
  },
  {
    href: "/salaries/philippines",
    label: "Salaries",
    title: "Philippines — 15 roles",
    description:
      "Monthly base compensation ranges for remote workers in the Philippines.",
  },
  {
    href: "/total-cost/india",
    label: "Total Cost",
    title: "India — Fully loaded cost",
    description: "Base salary plus EPF, gratuity, equipment, overhead, and more.",
  },
  {
    href: "/total-cost/philippines",
    label: "Total Cost",
    title: "Philippines — Fully loaded cost",
    description: "Base salary plus SSS, PhilHealth, 13th month, equipment, and more.",
  },
  {
    href: "/methodology",
    label: "Reference",
    title: "Methodology",
    description: "Data sources, collection method, limitations, and change log.",
  },
  {
    href: "/about",
    label: "Publication",
    title: "About",
    description: "About this publication and its editor.",
  },
];

export default function HomePage() {
  const orgSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <section
        style={{
          paddingTop: "3rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid #e5dfd3",
        }}
      >
        <div className="prose-rwci">
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "#0a2540",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Remote Workforce Cost Index
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#0a2540",
              marginBottom: "0.75rem",
            }}
          >
            The Remote Workforce Cost Index aggregates public-source salary and
            total employer cost data for remote workers in India and the
            Philippines. Data is drawn from Glassdoor, Payscale, Indeed, and
            government labor databases, cited with source name, accessed date,
            and URL. This publication is edited by Joel Deutsch and updated on a
            quarterly minimum cadence.
          </p>
          <span className="last-updated">Last updated: May 2026</span>
        </div>
      </section>

      <section style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <div className="tables-rwci">
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#0a2540",
              marginBottom: "1.5rem",
              marginTop: 0,
            }}
          >
            Browse the data
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {dataCards.map((card) => (
              <Link key={card.href} href={card.href} className="data-card">
                <span className="data-card-label">{card.label}</span>
                <span className="data-card-title">{card.title}</span>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b6354",
                    marginTop: "0.4rem",
                    marginBottom: 0,
                    fontFamily: "var(--font-source-serif), Georgia, serif",
                  }}
                >
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          paddingBottom: "3rem",
          borderTop: "1px solid #e5dfd3",
        }}
      >
        <div className="prose-rwci" style={{ paddingTop: "2rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
              marginTop: 0,
            }}
          >
            About the editor
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#0a2540",
              marginBottom: "0.5rem",
            }}
          >
            Joel Deutsch is the founder of{" "}
            <a href="https://f5hiringsolutions.com" rel="noopener">
              F5 Hiring Solutions
            </a>{" "}
            and has overseen the placement of remote professionals from India
            and the Philippines into US-based companies since 2017. He edits
            the Remote Workforce Cost Index as an independent publication.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#6b6354" }}>
            <Link href="/about">Full editorial note and disclosure</Link>
          </p>
        </div>
      </section>
    </>
  );
}
