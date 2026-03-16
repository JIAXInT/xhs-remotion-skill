import React from "react";
import { SlideLayout } from "../SlideLayout";

export const QuoteSlide: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: data.theme?.accent || "#7C3AED",
              letterSpacing: 2
            }}
          >
            {data.label || "QUOTE"}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.25
            }}
          >
            “{data.quote}”
          </div>
        </div>

        {data.author ? (
          <div style={{ marginTop: 32, fontSize: 28, color: "#6B7280" }}>
            —— {data.author}
          </div>
        ) : null}

        {data.highlight ? (
          <div
            style={{
              marginTop: "auto",
              background: "#111",
              color: "#fff",
              borderRadius: 28,
              padding: "28px 32px",
              fontSize: 34,
              fontWeight: 800
            }}
          >
            {data.highlight}
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
