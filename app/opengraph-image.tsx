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

        <p
          style={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#6b6354",
            fontFamily: "serif",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "24px",
            margin: "0 0 24px",
          }}
        >
          Public salary and labor cost data
        </p>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#0A2540",
            fontFamily: "serif",
            lineHeight: 1.15,
            margin: "0 0 32px",
            maxWidth: "900px",
          }}
        >
          Remote Workforce Cost Index
        </h1>

        {/* Gold divider */}
        <div
          style={{
            width: "80px",
            height: "3px",
            backgroundColor: "#C9A961",
            marginBottom: "28px",
          }}
        />

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
