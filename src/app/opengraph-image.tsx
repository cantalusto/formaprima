import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Forma Prima — Material de campanha política e marketing digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CARVAO = "#1C1A17";
const TERRA = "#C94F2C";
const CREME = "#F0ECE6";
const GRAFITE = "#9A9286";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/logo_icon_transparente.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  const tags = [
    "Santinhos",
    "Bandeiras",
    "Adesivos",
    "Camisas",
    "Tráfego pago",
    "Redes sociais",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 70,
          backgroundColor: CARVAO,
          backgroundImage:
            "radial-gradient(900px 500px at 78% 8%, rgba(201,79,44,0.28), rgba(201,79,44,0) 60%), linear-gradient(180deg, #1C1A17 0%, #161412 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header: logo + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} height={62} alt="Forma Prima" />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                color: CREME,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              FORMA
            </span>
            <span
              style={{
                color: CREME,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              PRIMA
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <div style={{ display: "flex", width: 34, height: 4, backgroundColor: TERRA }} />
            <span
              style={{
                color: TERRA,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 4,
              }}
            >
              ELEIÇÕES 2026 · SUA CAMPANHA COMPLETA
            </span>
          </div>

          <div style={{ display: "flex" }}>
            <span style={{ color: CREME, fontSize: 76, fontWeight: 800, letterSpacing: -1 }}>
              Sua campanha,
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ color: CREME, fontSize: 76, fontWeight: 800, letterSpacing: -1, marginRight: 24 }}>
              sua
            </span>
            <span style={{ color: TERRA, fontSize: 76, fontWeight: 800, letterSpacing: -1 }}>
              força.
            </span>
          </div>

          <div style={{ display: "flex", marginTop: 22, maxWidth: 880 }}>
            <span style={{ color: GRAFITE, fontSize: 27, lineHeight: 1.4 }}>
              Material de campanha política + marketing digital e tráfego pago.
              Sua mensagem nas ruas e na internet.
            </span>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
            {tags.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  paddingTop: 9,
                  paddingBottom: 9,
                  paddingLeft: 18,
                  paddingRight: 18,
                  borderRadius: 999,
                  backgroundColor: "rgba(201,79,44,0.12)",
                  border: "1px solid rgba(201,79,44,0.4)",
                }}
              >
                <span style={{ color: "#E9B9A6", fontSize: 21, fontWeight: 600 }}>
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: contacts */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.10)",
            paddingTop: 26,
          }}
        >
          <span style={{ color: CREME, fontSize: 24, fontWeight: 600 }}>
            @formaprimaa · (81) 9.8734-2853
          </span>
          <span style={{ color: GRAFITE, fontSize: 24 }}>Recife · PE</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
