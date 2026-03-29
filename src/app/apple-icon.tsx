import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a35, #0f0f23)",
          borderRadius: "32px",
          fontSize: 120,
        }}
      >
        <span>♠</span>
      </div>
    ),
    { ...size }
  );
}
