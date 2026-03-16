import React from "react";
import { SlideLayout } from "../SlideLayout";
import { PointCard } from "../components/PointCard";
import { SummaryBox } from "../components/SummaryBox";

export const PointsSlide: React.FC<{ data: any }> = ({ data }) => {
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
            <PointCard key={i} icon={item.icon} text={item.text} theme={data.theme} />
          ))}
        </div>

        {data.summary ? (
          <div style={{ marginTop: 18 }}>
            <SummaryBox
              label={data.summary.label || data.summary.title || "总结"}
              highlight={data.summary.highlight || data.summary.text}
              desc={data.summary.desc}
              theme={data.theme}
            />
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
