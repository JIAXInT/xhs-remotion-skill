import React from "react";
import { SlideLayout } from "../SlideLayout";

export const CompareSlide: React.FC<{ data: any }> = ({ data }) => {
  const t = data.theme || {};
  const left = data.left || {};
  const right = data.right || {};
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
          <h2 style={{ fontSize: 58, fontWeight: 900, margin: 0 }}>{data.title}</h2>
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
            alignItems: "center"
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, width: "100%" }}>
            <div
              style={{
                background: t.surface || "#FFFFFF",
                borderRadius: 28,
                padding: 24,
                border: `1px solid ${t.border || "#EEF0F3"}`,
                boxShadow: t.shadow || "0 8px 20px rgba(0,0,0,0.06)"
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, color: t.muted || "#6B7280" }}>
                {left.title || "BEFORE"}
              </div>
              <ul style={{ margin: "12px 0 0 0", paddingLeft: 20, fontSize: 26 }}>
                {(left.items || []).map((it: string, i: number) => (
                  <li key={i} style={{ marginBottom: 8 }}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: t.surfaceDark || t.dark || "#111",
                color: "#fff",
                borderRadius: 28,
                padding: 24,
                boxShadow: t.shadowStrong || "0 12px 30px rgba(0,0,0,0.18)"
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, color: data.theme?.primary || "#00C48C" }}>
                {right.title || "AFTER"}
              </div>
              <ul style={{ margin: "12px 0 0 0", paddingLeft: 20, fontSize: 26 }}>
                {(right.items || []).map((it: string, i: number) => (
                  <li key={i} style={{ marginBottom: 8 }}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {data.summary ? (
          <div style={{ marginTop: 18, fontSize: 26, color: t.muted || "#6B7280" }}>
            {data.summary}
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
