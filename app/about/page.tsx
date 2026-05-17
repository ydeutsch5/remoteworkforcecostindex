import type { Metadata } from "next";
import { generateArticleSchema, generatePersonSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the Remote Workforce Cost Index, its editorial mission, independence statement, and its editor Joel Deutsch.",
  openGraph: {
    title: "About | Remote Workforce Cost Index",
    description:
      "About the Remote Workforce Cost Index and editor Joel Deutsch.",
    url: "https://remoteworkforcecostindex.com/about",
  },
};

export default function AboutPage() {
  const articleSchema = generateArticleSchema({
    title: "About the Remote Workforce Cost Index",
    description:
      "About this publication, its editorial mission, independence statement, and editor Joel Deutsch.",
    datePublished: "2026-05-17",
    dateModified: "2026-05-17",
    url: "/about",
  });

  const personSchema = generatePersonSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <article>
        <div className="prose-rwci page-header">
          <h1>About the Remote Workforce Cost Index.</h1>
        </div>

        <div className="prose-rwci" style={{ paddingBottom: "4rem" }}>
          <h2>What this publication does</h2>
          <p>
            The Remote Workforce Cost Index compiles publicly available salary
            and employer cost data for remote workers based in India and the
            Philippines. Each data point is sourced from a named public database
            — Glassdoor, Payscale, Indeed, BLS, or similar — with an accessed
            date and URL recorded alongside the figure. The publication covers
            base salary ranges (30th–70th percentile) for 15 remote-friendly
            roles, and separately publishes fully loaded employer cost estimates
            that include statutory contributions, equipment, and overhead.
          </p>
          <p>
            The publication is updated on a quarterly minimum cadence. Statutory
            contribution rates are reviewed whenever government agencies issue
            revised schedules. Data older than 18 months is flagged at the
            section level. All methodology, sourcing decisions, and
            limitations are documented on the{" "}
            <a href="/methodology">Methodology</a> page.
          </p>
          <p>
            Version 1, covering India and the Philippines, launched in May 2026.
            Planned expansions include Latin America and Eastern Europe (Q3 2026)
            and a total-cost calculator widget (Q2 2026).
          </p>

          <h2>About the editor</h2>
          <p>
            Joel Deutsch is the founder of{" "}
            <a href="https://f5hiringsolutions.com" rel="noopener">
              F5 Hiring Solutions
            </a>
            , a managed remote workforce company that has placed professionals
            from India and the Philippines into US-based companies since 2017.
            F5 Hiring Solutions operates hubs in Pune, Rajkot, and Manila, and
            has managed engagements across software engineering, operations,
            design, and specialized roles.
          </p>
          <p>
            Deutsch edits the Remote Workforce Cost Index as a separate,
            independent publication. The Cost Index does not sell services,
            generate leads, or carry pricing for any commercial provider
            including F5 Hiring Solutions. Data appears on these pages
            regardless of whether it favors or disfavors any commercial party,
            including F5.
          </p>
          <p>
            Deutsch can be reached at{" "}
            <a href="mailto:editor@remoteworkforcecostindex.com">
              editor@remoteworkforcecostindex.com
            </a>
            .
          </p>

          <h2>Editorial independence</h2>
          <p>
            Joel Deutsch is the founder of F5 Hiring Solutions. This
            relationship is disclosed on this page, on the Methodology page,
            and in the structured data for this publication. The Cost Index
            operates under its own editorial standards: no F5 pricing appears
            on these pages, no calls to action reference F5 services, and data
            collection is not filtered by commercial interest. The methodology
            for each data category is documented publicly and applied
            consistently across all markets covered.
          </p>
          <p>
            Factual corrections and source disputes should be directed to{" "}
            <a href="mailto:editor@remoteworkforcecostindex.com">
              editor@remoteworkforcecostindex.com
            </a>
            . Corrections that affect published figures will be noted in the
            change log on the Methodology page.
          </p>

          <h2>Contact</h2>
          <p>
            <a href="mailto:editor@remoteworkforcecostindex.com">
              editor@remoteworkforcecostindex.com
            </a>
          </p>
        </div>
      </article>
    </>
  );
}
