import React from "react";

export const SummaryBox: React.FC<{
  label: string;
  highlight: string;
  desc?: string;
  theme?: any;
}> = ({ label, highlight, desc, theme }) => {
  const t = theme || {};
  return (
    <div style={{ position: "relative", marginTop: 32 }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 12,
          background: t.accent || "#5C67CF",
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
          zIndex: 2
        }}
      />
      <div
        style={{
          background: t.surfaceAlt || "#F6F7FE",
          borderRadius: 16,
          padding: "40px 40px 40px 56px",
          border: `1px solid ${t.border || "#EBEFF8"}`,
          position: "relative",
          zIndex: 1
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 900,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 10,
            marginBottom: 18
          }}
        >
          <span style={{ color: t.text || "#0F172A" }}>{label}</span>
          <span
            style={{
              background: t.summaryHighlightBg || "#E2E6F9",
              color: t.accent || "#5C67CF",
              padding: "6px 12px",
              borderRadius: 10
            }}
          >
            {highlight}
          </span>
        </div>
        {desc ? (
          <div
            style={{
              fontSize: 26,
              color: t.muted || "#64748B",
              lineHeight: 1.7,
              whiteSpace: "pre-wrap",
              fontWeight: 500
            }}
          >
            {desc}
          </div>
        ) : null}
      </div>
    </div>
  );
};
