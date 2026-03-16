import React from "react";
import { SlideLayout } from "../SlideLayout";

export const CompareSlide: React.FC<{ data: any }> = ({ data }) => {
  const left = data.left || {};
  const right = data.right || {};
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <h2 style={{ fontSize: 64, fontWeight: 900, margin: "0 0 32px" }}>
          {data.title}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 32,
              padding: 28,
              border: "1px solid #EEF0F3",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: "#6B7280" }}>
              {left.title || "BEFORE"}
            </div>
            <ul style={{ margin: "14px 0 0 0", paddingLeft: 22, fontSize: 28 }}>
              {(left.items || []).map((it: string, i: number) => (
                <li key={i} style={{ marginBottom: 10 }}>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              background: "#111",
              color: "#fff",
              borderRadius: 32,
              padding: 28,
              boxShadow: "0 12px 30px rgba(0,0,0,0.18)"
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: data.theme?.primary || "#00C48C" }}>
              {right.title || "AFTER"}
            </div>
            <ul style={{ margin: "14px 0 0 0", paddingLeft: 22, fontSize: 28 }}>
              {(right.items || []).map((it: string, i: number) => (
                <li key={i} style={{ marginBottom: 10 }}>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {data.summary ? (
          <div style={{ marginTop: "auto", fontSize: 28, color: "#6B7280" }}>
            {data.summary}
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
