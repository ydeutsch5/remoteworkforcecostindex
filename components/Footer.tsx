import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5dfd3",
        background: "#f4f0e8",
        marginTop: "4rem",
      }}
    >
      <div className="site-container" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Column 1 */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#0a2540",
                marginBottom: "0.5rem",
              }}
            >
              Remote Workforce Cost Index
            </p>
            <p style={{ fontSize: "0.875rem", color: "#6b6354", lineHeight: 1.6, marginBottom: 0 }}>
              An independent reference publication aggregating public salary and labor cost data for remote workforce planning. Edited by Joel Deutsch.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#0a2540",
                marginBottom: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Pages
            </p>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { href: "/methodology", label: "Methodology" },
                  { href: "/salaries/india", label: "Salaries — India" },
                  { href: "/salaries/philippines", label: "Salaries — Philippines" },
                  { href: "/total-cost/india", label: "Total Cost — India" },
                  { href: "/total-cost/philippines", label: "Total Cost — Philippines" },
                  { href: "/about", label: "About" },
                ].map((link) => (
                  <li key={link.href} style={{ marginBottom: "0.35rem" }}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "0.875rem",
                        color: "#6b6354",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#0a2540",
                marginBottom: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Publication
            </p>
            <p style={{ fontSize: "0.875rem", color: "#6b6354", marginBottom: "0.35rem" }}>
              Last full update: May 2026
            </p>
            <p style={{ fontSize: "0.875rem", color: "#6b6354", marginBottom: 0 }}>
              Contact:{" "}
              <a
                href="mailto:editor@remoteworkforcecostindex.com"
                style={{ color: "#6b6354" }}
              >
                editor@remoteworkforcecostindex.com
              </a>
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e5dfd3", paddingTop: "1rem" }}>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "#6b6354",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Data sourced from public salary and labor databases. See{" "}
            <Link href="/methodology" style={{ color: "#6b6354" }}>
              methodology
            </Link>{" "}
            for details. Not financial or legal advice.
          </p>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "#6b6354",
              margin: "0.5rem 0 0",
            }}
          >
            &copy; Remote Workforce Cost Index 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
