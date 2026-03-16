import React from "react";
import { SlideLayout } from "../SlideLayout";

export const StepsSlide: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <h2 style={{ fontSize: 64, fontWeight: 900, margin: "0 0 36px" }}>
          {data.title}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {data.steps?.map((step: string, i: number) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                borderRadius: 28,
                padding: "24px 28px",
                border: "1px solid #EEF0F3",
                display: "flex",
                alignItems: "center",
                gap: 20,
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 999,
                  background: data.theme?.primary || "#00C48C",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 24
                }}
              >
                {i + 1}
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.4 }}>
                {step}
              </div>
            </div>
          ))}
        </div>

        {data.summary ? (
          <div
            style={{
              marginTop: "auto",
              fontSize: 28,
              color: "#6B7280",
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "20px 24px",
              border: "1px dashed #E5E7EB"
            }}
          >
            {data.summary}
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
