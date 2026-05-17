import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Remote Workforce Cost Index";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#FAF6EF",
          padding: "80px 90px",
        }}
      >
        {/* Gold rule top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#C9A961",
          }}
        />

        {/* Masthead row: logo mark + wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {/* Logo mark (64px) */}
          <svg
            width={64}
            height={64}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.75" y="0.75" width="30.5" height="30.5" stroke="#0A2540" strokeWidth="1.5" />
            <rect x="3.5" y="16" width="6" height="12" fill="#0A2540" />
            <rect x="13" y="12" width="6" height="16" fill="#0A2540" />
            <rect x="22.5" y="8" width="6" height="20" fill="#0A2540" />
          </svg>

          <h1
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#0A2540",
              fontFamily: "serif",
              letterSpacing: "-0.01em",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Remote Workforce Cost Index
          </h1>
        </div>

        {/* 2px gold rule beneath masthead */}
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#C9A961",
            marginBottom: "32px",
          }}
        />

        <p
          style={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#6b6354",
            fontFamily: "serif",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: "0 0 24px",
          }}
        >
          Public salary and labor cost data
        </p>

        <p
          style={{
            fontSize: "22px",
            color: "#6b6354",
            fontFamily: "serif",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          India · Philippines · 15 roles · May 2026
        </p>

        {/* Bottom gold rule */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "#C9A961",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
