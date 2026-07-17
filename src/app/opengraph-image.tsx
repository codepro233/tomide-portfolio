import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abere Oluwatomide - Full Stack Developer & AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0e14",
          backgroundImage:
            "radial-gradient(circle at 25% 30%, rgba(16,185,129,0.25) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.2) 0%, transparent 45%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#22d3ee",
              letterSpacing: 4,
              marginBottom: 24,
              fontWeight: 600,
            }}
          >
            TOMIDE.DEV
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Abere Oluwatomide
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 38,
              color: "#34d399",
              fontWeight: 600,
              marginBottom: 32,
            }}
          >
            Full-Stack Developer &amp; AI Engineer
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#94a3b8",
              maxWidth: 850,
              lineHeight: 1.5,
            }}
          >
            Building production-ready AI SaaS with Next.js, TypeScript &amp; AI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
