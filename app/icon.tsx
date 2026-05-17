import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          backgroundColor: "#FAF6EF",
          position: "relative",
          border: "1.5px solid #0A2540",
        }}
      >
        {/* Three ascending bars, bottom-aligned */}
        <div style={{ position: "absolute", left: 3.5, bottom: 4, width: 6, height: 12, backgroundColor: "#0A2540" }} />
        <div style={{ position: "absolute", left: 13, bottom: 4, width: 6, height: 16, backgroundColor: "#0A2540" }} />
        <div style={{ position: "absolute", left: 22.5, bottom: 4, width: 6, height: 20, backgroundColor: "#0A2540" }} />
      </div>
    ),
    { ...size }
  );
}
