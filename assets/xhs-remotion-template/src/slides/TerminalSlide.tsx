import React from "react";
import { SlideLayout } from "../SlideLayout";
import { TerminalBlock } from "../components/TerminalBlock";

export const TerminalSlide: React.FC<{ data: any }> = ({ data }) => {
  const t = data.theme || {};
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >
        <div style={{ marginBottom: 18 }}>
          <h2 style={{ fontSize: 58, fontWeight: 900, margin: 0 }}>{data.title}</h2>
          <div
            style={{
              height: 1,
              background: t.border || "#E5E7EB",
              opacity: 0.6,
              marginTop: 12
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18
          }}
        >
          {data.subtitle ? (
            <div style={{ fontSize: 28, color: t.muted || "#6B7280", whiteSpace: "pre-wrap" }}>
              {data.subtitle}
            </div>
          ) : null}
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: 860 }}>
              <TerminalBlock lines={data.lines || []} />
            </div>
          </div>
        </div>

        {data.note ? (
          <div
            style={{
              marginTop: 18,
              background: "#EFF6FF",
              borderLeft: "4px solid #3B82F6",
              padding: "16px 20px",
              borderRadius: 14,
              fontSize: 24,
              color: t.text || "#0F172A",
              lineHeight: 1.6
            }}
          >
            {typeof data.note === "string" ? (
              data.note
            ) : (
              <>
                {data.note?.prefix}
                <span style={{ color: "#3B82F6", fontWeight: 800 }}>{data.note?.highlight}</span>
                {data.note?.suffix}
              </>
            )}
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
