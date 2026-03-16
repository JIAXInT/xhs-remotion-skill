import React from "react";
import { SlideLayout } from "../SlideLayout";

export const StepsSlide: React.FC<{ data: any }> = ({ data }) => {
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
            gap: 14
          }}
        >
          {data.steps?.map((step: string, i: number) => (
            <div
              key={i}
              style={{
                background: t.surface || "#FFFFFF",
                borderRadius: 24,
                padding: "20px 24px",
                border: `1px solid ${t.border || "#EEF0F3"}`,
                display: "flex",
                alignItems: "center",
                gap: 16,
                boxShadow: t.shadow || "0 8px 20px rgba(0,0,0,0.06)"
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 999,
                  background: data.theme?.primary || "#00C48C",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 22
                }}
              >
                {i + 1}
              </div>
              <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.45 }}>
                {step}
              </div>
            </div>
          ))}
        </div>

        {data.summary ? (
          <div
            style={{
              marginTop: 18,
              fontSize: 26,
              color: t.muted || "#6B7280",
              background: t.surface || "#FFFFFF",
              borderRadius: 18,
              padding: "18px 22px",
              border: `1px dashed ${t.border || "#E5E7EB"}`
            }}
          >
            {data.summary}
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
