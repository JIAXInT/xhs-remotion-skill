import React from "react";
import { SlideLayout } from "../SlideLayout";

export const HookSlide: React.FC<{ data: any }> = ({ data }) => {
  const t = data.theme || {};
  const surfaceDark = t.surfaceDark || t.dark || "#111";
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >
        <div style={{ marginBottom: 22 }}>
          <h2
            style={{
              fontSize: 58,
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.25
            }}
          >
            {data.title}
            <span
              style={{
                background: surfaceDark,
                color: "#fff",
                padding: "6px 14px",
                borderRadius: 16,
                marginLeft: 10,
                display: "inline-block",
                transform: "rotate(-2deg)"
              }}
            >
              {data.highlightTitle}
            </span>
          </h2>
          <div
            style={{
              height: 1,
              background: t.border || "#E5E7EB",
              opacity: 0.6,
              marginTop: 14
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16
          }}
        >
          <div
            style={{
              background: t.surface || "#FFFFFF",
              borderRadius: 28,
              padding: 32,
              border: `1px solid ${t.border || "#EEF0F3"}`,
              boxShadow: t.shadow || "0 10px 30px rgba(0,0,0,0.08)"
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 800, color: t.muted || "#9CA3AF" }}>
              {data.cards?.[0]?.label}
            </div>
            <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.3 }}>
              {data.cards?.[0]?.text}
            </div>
          </div>

          <div
            style={{
              background: surfaceDark,
              color: "#fff",
              borderRadius: 28,
              padding: 32,
              boxShadow: t.shadowStrong || "0 16px 40px rgba(0,0,0,0.22)"
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: data.theme?.primary || "#00C48C"
              }}
            >
              {data.cards?.[1]?.label}
            </div>
            <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.3 }}>
              {data.cards?.[1]?.text}
            </div>
          </div>
        </div>

        {data.cta ? (
          <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: t.surface || "#FFFFFF",
                border: `1px solid ${t.border || "#E5E7EB"}`,
                borderRadius: 999,
                padding: "12px 32px",
                fontSize: 24,
                color: t.muted || "#6B7280",
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: t.shadow || "0 8px 24px rgba(0,0,0,0.06)"
              }}
            >
              <span>💬</span>
              {data.cta}
            </div>
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
