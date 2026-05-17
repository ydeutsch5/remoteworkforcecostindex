import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          backgroundColor: "#FAF6EF",
          position: "relative",
          border: "8px solid #0A2540",
        }}
      >
        {/* Three ascending bars scaled from 32px viewbox (×5.625) */}
        <div style={{ position: "absolute", left: 20, bottom: 22, width: 34, height: 68, backgroundColor: "#0A2540" }} />
        <div style={{ position: "absolute", left: 73, bottom: 22, width: 34, height: 90, backgroundColor: "#0A2540" }} />
        <div style={{ position: "absolute", left: 127, bottom: 22, width: 34, height: 113, backgroundColor: "#0A2540" }} />
      </div>
    ),
    { ...size }
  );
}
