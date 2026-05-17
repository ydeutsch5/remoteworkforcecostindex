import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not in the index.",
};

export default function NotFound() {
  return (
    <div className="prose-rwci" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <p
        style={{
          fontFamily: "var(--font-ibm-plex-mono), 'Courier New', monospace",
          fontSize: "0.875rem",
          color: "#6b6354",
          marginBottom: "0.5rem",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        This page is not in the index.
      </h1>
      <p style={{ color: "#6b6354" }}>
        The page requested does not exist on this publication.
      </p>
      <p>
        <Link href="/">Return to the index</Link>
      </p>
    </div>
  );
}
