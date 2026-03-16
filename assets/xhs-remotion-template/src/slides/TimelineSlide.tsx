import React from "react";
import { SlideLayout } from "../SlideLayout";

const StepWrapper: React.FC<{
  num: string;
  title: string;
  desc?: string;
  isLast?: boolean;
  theme?: any;
  children?: React.ReactNode;
}> = ({ num, title, desc, isLast, theme, children }) => {
  const t = theme || {};
  return (
    <div style={{ position: "relative", display: "flex", gap: 20, marginBottom: isLast ? 0 : 26 }}>
      {!isLast ? (
        <div
          style={{
            position: "absolute",
            left: 28,
            top: 46,
            bottom: -22,
            width: 2,
            borderLeft: `2px dashed ${t.border || "#E5E7EB"}`,
            opacity: 0.8
          }}
        />
      ) : null}

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
          <div
            style={{
              background: t.surfaceDark || t.dark || "#111",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: 2,
              minWidth: 68,
              textAlign: "center"
            }}
          >
            {num}
          </div>
          <div style={{ fontSize: 34, fontWeight: 900, color: t.text || "#0F172A" }}>
            {title}
          </div>
        </div>

        {desc ? (
          <div
            style={{
              fontSize: 24,
              color: t.muted || "#6B7280",
              marginBottom: 12,
              marginLeft: 56,
              lineHeight: 1.5
            }}
          >
            {desc}
          </div>
        ) : null}

        <div style={{ marginLeft: 60, display: "flex", flexDirection: "column", gap: 10 }}>
          {children}
        </div>
      </div>
    </div>
  );
};

const ListCard: React.FC<{ highlight: string; text: string; theme?: any }> = ({
  highlight,
  text,
  theme
}) => {
  const t = theme || {};
  const isCommand = highlight?.startsWith("/");
  return (
    <div
      style={{
        background: t.surfaceAlt || (t.mode === "dark" ? "#111827" : "#FAFAFA"),
        border: `1px solid ${t.border || "#EEF0F3"}`,
        borderRadius: 16,
        padding: "14px 18px",
        boxShadow: t.shadow || "0 2px 6px rgba(0,0,0,0.04)"
      }}
    >
      <div style={{ fontSize: 24, lineHeight: 1.6, color: t.muted || "#6B7280" }}>
        <span
          style={{
            color: isCommand ? t.accent || "#5C67CF" : t.text || "#0F172A",
            fontWeight: 800,
            marginRight: 8
          }}
        >
          {highlight}
          {isCommand ? ":" : " :"}
        </span>
        {text}
      </div>
    </div>
  );
};

const AgentTag: React.FC<{ icon: string; label: string; theme?: any }> = ({
  icon,
  label,
  theme
}) => {
  const t = theme || {};
  return (
    <div
      style={{
        background: t.summaryHighlightBg || "#EEF1FC",
        border: `1px solid ${t.border || "#DDE2F7"}`,
        color: t.accent || "#5C67CF",
        padding: "10px 14px",
        borderRadius: 14,
        display: "flex",
        alignItems: "center",
        gap: 8,
        boxShadow: t.shadow || "0 2px 6px rgba(0,0,0,0.04)"
      }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: 0.5 }}>{label}</span>
    </div>
  );
};

export const TimelineSlide: React.FC<{ data: any }> = ({ data }) => {
  const t = data.theme || {};
  const steps = data.timeline || [];
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {data.title ? (
          <div style={{ marginBottom: 22 }}>
            <h2 style={{ fontSize: 56, fontWeight: 900, margin: 0 }}>{data.title}</h2>
            <div
              style={{
                height: 1,
                background: t.border || "#E5E7EB",
                opacity: 0.6,
                marginTop: 14
              }}
            />
          </div>
        ) : null}

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          {steps.map((step: any, index: number) => {
            const isLast = index === steps.length - 1;
            return (
              <StepWrapper
                key={step.num}
                num={step.num}
                title={step.title}
                desc={step.desc}
                isLast={isLast}
                theme={t}
              >
                {step.type === "list" ? (
                  step.items?.map((item: any, i: number) => (
                    <ListCard key={i} highlight={item.highlight} text={item.text} theme={t} />
                  ))
                ) : null}

                {step.type === "tags" ? (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 4 }}>
                    {step.items?.map((item: any, i: number) => (
                      <AgentTag key={i} icon={item.icon} label={item.label} theme={t} />
                    ))}
                  </div>
                ) : null}
              </StepWrapper>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
};
