import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rejuvenation | Steigen",
  description:
    "Explore rejuvenation concepts, skin renewal positioning, and modern aesthetic experiences at Steigen.",
};

export default function RejuvenationPage() {
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
            background: "rgba(99,230,216,0.14)",
            color: "#b8fff4",
            fontSize: 13,
            marginBottom: 14,
          }}
        >
          Steigen / Rejuvenation
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(34px, 5vw, 58px)",
            lineHeight: 1.05,
            color: "#f7fbff",
          }}
        >
          Rejuvenation
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
          Rejuvenation at Steigen is positioned as a refined, modern experience
          focused on skin quality, facial freshness, and aesthetic harmony
          through high-end visual communication.
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
            Rejuvenation Highlights
          </h2>
          <ul
            style={{
              paddingLeft: 20,
              color: "#c7d2e6",
              lineHeight: 2,
              fontSize: 16,
            }}
          >
            <li>Skin freshness and renewed radiance positioning</li>
            <li>Elegant service storytelling for premium branding</li>
            <li>Clear educational structure for trust-building</li>
            <li>Flexible page architecture for SEO-rich expansion</li>
          </ul>

          <p
            style={{
              color: "#b7c3d8",
              lineHeight: 1.9,
              marginTop: 18,
            }}
          >
            This page can later be extended with rejuvenation protocols,
            benefits, FAQs, before/after sections, and conversion-oriented
            blocks.
          </p>
        </div>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: 28,
            background:
              "linear-gradient(180deg, rgba(99,230,216,0.12), rgba(122,162,255,0.06))",
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
              href="/threadlift"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                padding: "12px 14px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
              }}
            >
              Go to Threadlift
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
