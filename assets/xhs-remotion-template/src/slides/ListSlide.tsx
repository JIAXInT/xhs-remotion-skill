import React from "react";
import { SlideLayout } from "../SlideLayout";

export const ListSlide: React.FC<{ data: any }> = ({ data }) => {
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
            flexDirection: "column",
            justifyContent: "center",
            gap: 16
          }}
        >
          {data.items?.map((item: any, i: number) => (
            <div
              key={i}
              style={{
                background: t.surface || "#FFFFFF",
                borderRadius: 26,
                padding: "24px 28px",
                border: `1px solid ${t.border || "#EEF0F3"}`,
                boxShadow: t.shadow || "0 8px 24px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "flex-start",
                gap: 18
              }}
            >
              <div style={{ fontSize: 30 }}>{item.icon}</div>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  lineHeight: 1.45,
                  whiteSpace: "pre-wrap"
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {data.summary ? (
          <div
            style={{
              marginTop: 18,
              background: t.summaryBg || "linear-gradient(90deg, #EEF2FF 0%, #FFFFFF 60%)",
              borderLeft: `8px solid ${data.theme?.accent || "#7C3AED"}`,
              borderRadius: 18,
              padding: "20px 24px",
              fontSize: 28
            }}
          >
            <strong>{data.summary?.title}</strong>{" "}
            <span
              style={{
                background: t.summaryHighlightBg || "#E0E7FF",
                color: data.theme?.accent || "#7C3AED",
                padding: "4px 10px",
                borderRadius: 8,
                marginLeft: 6
              }}
            >
              {data.summary?.text}
            </span>
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
