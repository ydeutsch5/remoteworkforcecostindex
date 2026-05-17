import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-cream border-b border-rule sticky top-0 z-50 shadow-subtle">
      <div className="site-container py-4">
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="no-underline hover:no-underline"
            aria-label="Remote Workforce Cost Index — home"
          >
            <span
              className="text-navy"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                textDecoration: "none",
              }}
            >
              Remote Workforce Cost Index
            </span>
          </Link>

          <nav aria-label="Primary navigation">
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                alignItems: "center",
                fontSize: "0.875rem",
                fontFamily: "var(--font-source-serif), Georgia, serif",
              }}
            >
              <li>
                <Link href="/methodology" style={{ textDecoration: "none", color: "#6b6354" }}>
                  Methodology
                </Link>
              </li>

              <li>
                <details style={{ display: "inline" }}>
                  <summary
                    style={{
                      cursor: "pointer",
                      color: "#6b6354",
                      listStyle: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    Salaries
                    <span aria-hidden="true" style={{ fontSize: "0.65rem" }}>▾</span>
                  </summary>
                  <div
                    style={{
                      position: "absolute",
                      background: "#faf6ef",
                      border: "1px solid #e5dfd3",
                      padding: "0.5rem 0",
                      marginTop: "0.25rem",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                      zIndex: 100,
                      minWidth: "140px",
                    }}
                  >
                    <Link
                      href="/salaries/india"
                      style={{
                        display: "block",
                        padding: "0.4rem 0.875rem",
                        color: "#0a2540",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                      }}
                    >
                      India
                    </Link>
                    <Link
                      href="/salaries/philippines"
                      style={{
                        display: "block",
                        padding: "0.4rem 0.875rem",
                        color: "#0a2540",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                      }}
                    >
                      Philippines
                    </Link>
                  </div>
                </details>
              </li>

              <li>
                <details style={{ display: "inline" }}>
                  <summary
                    style={{
                      cursor: "pointer",
                      color: "#6b6354",
                      listStyle: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    Total Cost
                    <span aria-hidden="true" style={{ fontSize: "0.65rem" }}>▾</span>
                  </summary>
                  <div
                    style={{
                      position: "absolute",
                      background: "#faf6ef",
                      border: "1px solid #e5dfd3",
                      padding: "0.5rem 0",
                      marginTop: "0.25rem",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                      zIndex: 100,
                      minWidth: "140px",
                    }}
                  >
                    <Link
                      href="/total-cost/india"
                      style={{
                        display: "block",
                        padding: "0.4rem 0.875rem",
                        color: "#0a2540",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                      }}
                    >
                      India
                    </Link>
                    <Link
                      href="/total-cost/philippines"
                      style={{
                        display: "block",
                        padding: "0.4rem 0.875rem",
                        color: "#0a2540",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                      }}
                    >
                      Philippines
                    </Link>
                  </div>
                </details>
              </li>

              <li>
                <Link href="/about" style={{ textDecoration: "none", color: "#6b6354" }}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div style={{ height: "1px", background: "#c9a961", width: "100%" }} />
    </header>
  );
}
