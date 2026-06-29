import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steigen | Threadlift & Rejuvenation",
  description:
    "Steigen.ir - Advanced threadlift and rejuvenation solutions with a modern aesthetic medical experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          background: "#0b1020",
          color: "#f5f7fb",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backdropFilter: "blur(14px)",
            background: "rgba(11,16,32,0.75)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 0.5,
              }}
            >
              Steigen
            </Link>

            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/"
                style={{
                  color: "#d9e2f2",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                Home
              </Link>
              <Link
                href="/threadlift"
                style={{
                  color: "#d9e2f2",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                Threadlift
              </Link>
              <Link
                href="/rejuvenation"
                style={{
                  color: "#d9e2f2",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                Rejuvenation
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: 60,
            background: "#0a0f1d",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "24px 20px 40px",
              color: "#a9b4c8",
              fontSize: 14,
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div>© {new Date().getFullYear()} Steigen.ir</div>
            <div>Threadlift • Rejuvenation • Aesthetic Innovation</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
