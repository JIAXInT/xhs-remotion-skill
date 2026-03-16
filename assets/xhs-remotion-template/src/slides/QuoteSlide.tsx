import React from "react";
import { SlideLayout } from "../SlideLayout";

export const QuoteSlide: React.FC<{ data: any }> = ({ data }) => {
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
        <div style={{ marginBottom: 22 }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: data.theme?.accent || "#7C3AED",
              letterSpacing: 2
            }}
          >
            {data.title || data.label || "QUOTE"}
          </div>
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
            justifyContent: "center"
          }}
        >
          <div
            style={{
              fontSize: 58,
              fontWeight: 900,
              lineHeight: 1.25
            }}
          >
            “{data.quote}”
          </div>

          {data.author ? (
            <div style={{ marginTop: 18, fontSize: 26, color: t.muted || "#6B7280" }}>
              —— {data.author}
            </div>
          ) : null}
        </div>

        {data.highlight ? (
          <div
            style={{
              marginTop: 18,
              background: t.surfaceDark || t.dark || "#111",
              color: "#fff",
              borderRadius: 24,
              padding: "22px 26px",
              fontSize: 30,
              fontWeight: 800,
              boxShadow: t.shadowStrong || "0 16px 40px rgba(0,0,0,0.22)"
            }}
          >
            {data.highlight}
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
