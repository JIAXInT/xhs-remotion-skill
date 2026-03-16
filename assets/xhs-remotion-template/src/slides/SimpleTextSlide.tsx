import React from "react";
import { SlideLayout } from "../SlideLayout";

export const SimpleTextSlide: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <h2 style={{ fontSize: 68, fontWeight: 900, margin: "0 0 28px" }}>
          {data.title}
        </h2>
        {data.subtitle ? (
          <div style={{ fontSize: 36, color: "#6B7280", whiteSpace: "pre-wrap" }}>
            {data.subtitle}
          </div>
        ) : null}
        {data.body ? (
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.5,
              whiteSpace: "pre-wrap"
            }}
          >
            {data.body}
          </div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
