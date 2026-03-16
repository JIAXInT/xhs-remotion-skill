import React from "react";
import { SlideLayout } from "../SlideLayout";

export const SimpleTextSlide: React.FC<{ data: any }> = ({ data }) => {
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
          <h2 style={{ fontSize: 60, fontWeight: 900, margin: 0 }}>{data.title}</h2>
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
            gap: 18
          }}
        >
          {data.subtitle ? (
            <div style={{ fontSize: 32, color: t.muted || "#6B7280", whiteSpace: "pre-wrap" }}>
              {data.subtitle}
            </div>
          ) : null}
          {data.body ? (
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.55,
                whiteSpace: "pre-wrap"
              }}
            >
              {data.body}
            </div>
          ) : null}
        </div>
      </div>
    </SlideLayout>
  );
};
