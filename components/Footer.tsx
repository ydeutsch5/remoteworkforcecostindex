import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #C9A961",
        background: "#f4f0e8",
        marginTop: "4rem",
      }}
    >
      <div className="site-container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        {/* Three-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Column 1: Logo + wordmark + description */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "0.625rem",
              }}
            >
              <Logo size={24} />
              <span
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#0a2540",
                }}
              >
                Remote Workforce Cost Index
              </span>
            </div>
            <p
              style={{
                fontSize: "13.5px",
                color: "rgba(10, 37, 64, 0.75)",
                lineHeight: 1.6,
                marginBottom: 0,
                fontFamily: "var(--font-source-serif), Georgia, serif",
              }}
            >
              An independent reference publication aggregating public salary and
              labor cost data for remote workforce planning. Edited by Joel Deutsch.
            </p>
          </div>

          {/* Column 2: Pages */}
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
                  <li key={link.href} style={{ marginBottom: 0 }}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "14px",
                        color: "#6b6354",
                        textDecoration: "none",
                        display: "block",
                        lineHeight: "36px",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Publication details */}
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
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  display: "block",
                  color: "rgba(10, 37, 64, 0.55)",
                  marginBottom: "2px",
                }}
              >
                Last full update
              </span>
              May 2026
            </p>
            <p style={{ fontSize: "0.875rem", color: "#6b6354", marginBottom: 0 }}>
              <a
                href="mailto:editor@remoteworkforcecostindex.com"
                style={{ color: "#6b6354" }}
              >
                editor@remoteworkforcecostindex.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom strip: 1px navy 8% separator + disclaimer */}
        <div
          style={{
            borderTop: "1px solid rgba(10, 37, 64, 0.08)",
            paddingTop: "1.5rem",
            marginTop: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "12.5px",
              color: "rgba(10, 37, 64, 0.65)",
              margin: 0,
              lineHeight: 1.6,
              fontFamily: "var(--font-source-serif), Georgia, serif",
            }}
          >
            Data sourced from public salary and labor databases. See{" "}
            <Link href="/methodology" style={{ color: "rgba(10, 37, 64, 0.65)" }}>
              methodology
            </Link>{" "}
            for details. Not financial or legal advice.
          </p>
          <p
            style={{
              fontSize: "12.5px",
              color: "rgba(10, 37, 64, 0.65)",
              margin: "0.5rem 0 0",
              fontFamily: "var(--font-source-serif), Georgia, serif",
            }}
          >
            &copy; Remote Workforce Cost Index 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
