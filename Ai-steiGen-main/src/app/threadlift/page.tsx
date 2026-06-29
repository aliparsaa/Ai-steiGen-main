import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Threadlift | Steigen",
  description:
    "Learn about threadlift solutions, lifting goals, treatment positioning, and aesthetic enhancement at Steigen.",
};

export default function ThreadliftPage() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "56px 20px",
      }}
    >
      <div
        style={{
          marginBottom: 28,
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 12px",
            borderRadius: 999,
            background: "rgba(122,162,255,0.14)",
            color: "#b7cbff",
            fontSize: 13,
            marginBottom: 14,
          }}
        >
          Steigen / Threadlift
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(34px, 5vw, 58px)",
            lineHeight: 1.05,
            color: "#f7fbff",
          }}
        >
          Threadlift
        </h1>

        <p
          style={{
            marginTop: 18,
            maxWidth: 760,
            fontSize: 18,
            lineHeight: 1.9,
            color: "#c7d2e6",
          }}
        >
          Threadlift is presented here as a modern aesthetic approach focused on
          lifting support, contour refinement, and a more youthful facial
          profile with a minimally invasive narrative.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 24,
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: 28,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h2 style={{ marginTop: 0, color: "#eef4ff" }}>
            Core Presentation Points
          </h2>
          <ul
            style={{
              paddingLeft: 20,
              color: "#c7d2e6",
              lineHeight: 2,
              fontSize: 16,
            }}
          >
            <li>Facial lifting support with elegant contour definition</li>
            <li>Structured patient communication and visual education</li>
            <li>Modern positioning for minimally invasive aesthetic care</li>
            <li>Premium branding for advanced medical-aesthetic services</li>
          </ul>

          <p
            style={{
              color: "#b7c3d8",
              lineHeight: 1.9,
              marginTop: 18,
            }}
          >
            You can later replace this copy with your exact clinical, marketing,
            or educational content from the previous site and optimize headings
            for SEO.
          </p>
        </div>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: 28,
            background:
              "linear-gradient(180deg, rgba(122,162,255,0.12), rgba(99,230,216,0.06))",
          }}
        >
          <h3 style={{ marginTop: 0, color: "#eef4ff" }}>Quick Navigation</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginTop: 16,
            }}
          >
            <Link
              href="/"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                padding: "12px 14px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
              }}
            >
              Back to Home
            </Link>
            <Link
              href="/rejuvenation"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                padding: "12px 14px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
              }}
            >
              Go to Rejuvenation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
