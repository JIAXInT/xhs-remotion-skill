import React from "react";
import { SlideLayout } from "../SlideLayout";

export const CoverSlide: React.FC<{ data: any }> = ({ data }) => {
  const t = data.theme || {};
  const surface = t.surface || "#FFFFFF";
  const border = t.border || "#EEF0F3";
  const muted = t.muted || "#6B7280";
  const text = t.text || "#111";
  const accent = t.accent || "#5C67CF";
  const primary = t.primary || "#00C48C";
  const metrics = data.metrics || [];
  const action = metrics[0];
  const highlight = metrics[1];
  const extra = metrics[2];

  return (
    <SlideLayout tag={data.tag} theme={data.theme} hideHeader>
      <div style={{ position: "relative", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            top: "-8%",
            right: "-12%",
            width: 900,
            height: 900,
            borderRadius: 9999,
            background: t.mode === "dark" ? "#0B1C2B" : "#ECFEFF",
            filter: "blur(120px)",
            opacity: t.mode === "dark" ? 0.25 : 0.4,
            zIndex: 0
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%"
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: surface,
                border: `1px solid ${border}`,
                padding: "10px 18px",
                borderRadius: 999,
                boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: 3,
                color: muted,
                textTransform: "uppercase"
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: 999, background: accent }} />
              {data.tag || "PRACTICE & CASE STUDY"}
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: text,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 14px rgba(0,0,0,0.12)"
              }}
            >
              <div style={{ width: 20, height: 20, border: "2px solid rgba(255,255,255,0.5)", transform: "rotate(45deg)" }} />
            </div>
          </div>

          {/* Body */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 48, marginBottom: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16, marginBottom: 48 }}>
              <h1
                style={{
                  fontSize: 100,
                  lineHeight: 1.02,
                  fontWeight: 900,
                  letterSpacing: -1.2,
                  margin: 0
                }}
              >
                {data.title?.[0]}
              </h1>
              <h1
                style={{
                  fontSize: 100,
                  lineHeight: 1.02,
                  fontWeight: 900,
                  letterSpacing: -1.2,
                  margin: 0,
                  background: surface,
                  padding: "10px 24px",
                  borderRadius: 28,
                  border: `1px solid ${border}`,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                  display: "inline-block"
                }}
              >
                {data.title?.[1]}
              </h1>
            </div>

            <div style={{ borderLeft: `6px solid ${accent}`, paddingLeft: 24, paddingTop: 6, paddingBottom: 6 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 40,
                  color: muted,
                  fontWeight: 500,
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap"
                }}
              >
                {data.subtitle}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              borderTop: `1px solid ${border}`,
              paddingTop: 28,
              paddingBottom: 6,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", gap: 56, alignItems: "center" }}>
              {action ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: muted, letterSpacing: 2 }}>
                    {action.label}
                  </div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: text }}>{action.value}</div>
                </div>
              ) : null}
              {highlight ? (
                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <div style={{ width: 6, height: 64, borderRadius: 999, background: primary }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: muted, letterSpacing: 2 }}>
                      {highlight.label}
                    </div>
                    <div style={{ fontSize: 44, fontWeight: 900, color: primary, letterSpacing: -0.5 }}>
                      {highlight.value}
                    </div>
                  </div>
                </div>
              ) : null}
              {extra ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: muted, letterSpacing: 2 }}>{extra.label}</div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: text }}>{extra.value}</div>
                </div>
              ) : null}
            </div>

            {data.cta ? (
              <div
                style={{
                  background: surface,
                  border: `1px solid ${border}`,
                  borderRadius: 999,
                  padding: "12px 22px",
                  fontSize: 20,
                  fontWeight: 700,
                  color: text,
                  boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 6
                }}
              >
                {data.cta}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
