import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#FAF6EF",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="site-container">
        <div className="masthead-inner">
          {/* Brand: logo + stacked text */}
          <Link
            href="/"
            className="masthead-brand"
            aria-label="Remote Workforce Cost Index — home"
          >
            <Logo size={32} />
            <div className="masthead-text-block">
              <span className="masthead-wordmark">Remote Workforce Cost Index</span>
              <span className="masthead-identifier">VOL. I · MMXXVI · EDITED BY JOEL DEUTSCH</span>
            </div>
          </Link>

          {/* Primary navigation */}
          <nav aria-label="Primary navigation" className="masthead-nav">
            <ul className="masthead-nav-list">
              <li>
                <Link href="/methodology" className="masthead-nav-link">
                  Methodology
                </Link>
              </li>

              <li style={{ position: "relative" }}>
                <details className="nav-dropdown">
                  <summary className="masthead-nav-link masthead-nav-summary">
                    Salaries{" "}
                    <span aria-hidden="true" className="nav-caret">▾</span>
                  </summary>
                  <div className="nav-dropdown-menu">
                    <Link href="/salaries/india" className="nav-dropdown-item">
                      India
                    </Link>
                    <Link href="/salaries/philippines" className="nav-dropdown-item">
                      Philippines
                    </Link>
                  </div>
                </details>
              </li>

              <li style={{ position: "relative" }}>
                <details className="nav-dropdown">
                  <summary className="masthead-nav-link masthead-nav-summary">
                    Total Cost{" "}
                    <span aria-hidden="true" className="nav-caret">▾</span>
                  </summary>
                  <div className="nav-dropdown-menu">
                    <Link href="/total-cost/india" className="nav-dropdown-item">
                      India
                    </Link>
                    <Link href="/total-cost/philippines" className="nav-dropdown-item">
                      Philippines
                    </Link>
                  </div>
                </details>
              </li>

              <li>
                <Link href="/about" className="masthead-nav-link">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Double rule: 2px gold + 12px gap + 1px navy 15% */}
      <div style={{ height: "2px", backgroundColor: "#C9A961" }} />
      <div style={{ height: "12px", backgroundColor: "#FAF6EF" }} />
      <div style={{ height: "1px", backgroundColor: "rgba(10, 37, 64, 0.15)" }} />
    </header>
  );
}
