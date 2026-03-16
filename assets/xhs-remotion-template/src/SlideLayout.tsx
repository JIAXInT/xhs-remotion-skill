import React from "react";
import { AbsoluteFill } from "remotion";

const defaultTheme = {
  mode: "light",
  primary: "#00C48C",
  bg: "#F8F9FA",
  text: "#1A1A1A",
  accent: "#7C3AED",
  dark: "#111111",
  surface: "#FFFFFF",
  surfaceAlt: "#F6F7FE",
  border: "#E5E7EB",
  muted: "#6B7280",
  grid: "#E5E7EB",
  tagBg: "#FFFFFF",
  tagBorder: "#EEF0F3",
  summaryHighlightBg: "#E0E7FF",
  summaryBg: "linear-gradient(90deg, #EEF2FF 0%, #FFFFFF 60%)",
  shadow: "0 8px 24px rgba(0,0,0,0.06)",
  shadowStrong: "0 16px 40px rgba(0,0,0,0.22)"
};

const GridBackground: React.FC<{ color?: string; opacity?: number }> = ({
  color = "#E5E7EB",
  opacity = 0.6
}) => (
  <AbsoluteFill
    style={{
      backgroundColor: "transparent",
      backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px),\n        linear-gradient(to bottom, ${color} 1px, transparent 1px)` ,
      backgroundSize: "40px 40px",
      opacity
    }}
  />
);

export const SlideLayout: React.FC<{
  tag?: string;
  page?: string;
  theme?: Partial<typeof defaultTheme>;
  hideHeader?: boolean;
  children: React.ReactNode;
}> = ({ tag, page, theme, hideHeader = false, children }) => {
  const t = { ...defaultTheme, ...theme };
  const isDark = t.mode === "dark";
  const gridOpacity = isDark ? 0.25 : 0.45;
  return (
    <AbsoluteFill
      style={{
        backgroundColor: isDark ? t.bg : "#F5F6F8",
        color: t.text,
        fontFamily:
          "Inter, PingFang SC, Microsoft YaHei, Helvetica Neue, Arial, sans-serif",
        padding: 40,
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          background: t.surface,
          borderRadius: 32,
          padding: 64,
          boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
          boxSizing: "border-box",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 32,
            overflow: "hidden",
            opacity: 1
          }}
        >
          <GridBackground color={t.grid} opacity={gridOpacity} />
        </div>

        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          {!hideHeader ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `1px solid ${t.border}`,
                paddingBottom: 12,
                marginBottom: 26
              }}
            >
              {tag ? (
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    letterSpacing: 3,
                    color: t.muted,
                    textTransform: "uppercase"
                  }}
                >
                  {tag}
                </div>
              ) : (
                <div />
              )}
              {page ? (
                <div style={{ fontSize: 26, fontWeight: 900 }}>{page}</div>
              ) : null}
            </div>
          ) : null}

          <div style={{ flex: 1, position: "relative" }}>{children}</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
