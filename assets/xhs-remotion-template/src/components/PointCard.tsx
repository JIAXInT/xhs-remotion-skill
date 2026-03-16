import React from "react";

export const PointCard: React.FC<{
  icon: string;
  text: string;
  theme?: any;
}> = ({ icon, text, theme }) => {
  const t = theme || {};
  return (
    <div
      style={{
        background: t.surface || "#FFFFFF",
        borderRadius: 22,
        padding: 28,
        boxShadow: t.shadow || "0 8px 30px rgba(0,0,0,0.03)",
        border: `1px solid ${t.border || "#F1F5F9"}`,
        display: "flex",
        alignItems: "flex-start",
        gap: 20
      }}
    >
      <div style={{ fontSize: 30, marginTop: 4, color: t.muted || "#475569" }}>
        {icon}
      </div>
      <div
        style={{
          fontSize: 30,
          fontWeight: 500,
          color: t.text || "#1F2937",
          lineHeight: 1.6,
          whiteSpace: "pre-wrap"
        }}
      >
        {text}
      </div>
    </div>
  );
};
