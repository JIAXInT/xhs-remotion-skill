const lightTheme = {
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
  shadowStrong: "0 16px 40px rgba(0,0,0,0.22)",
  surfaceDark: "#111111"
};

const darkTheme = {
  mode: "dark",
  primary: "#22D3EE",
  bg: "#0B0F14",
  text: "#E5E7EB",
  accent: "#A78BFA",
  dark: "#0B0F14",
  surface: "#111827",
  surfaceAlt: "#111827",
  border: "#1F2937",
  muted: "#94A3B8",
  grid: "#1F2937",
  tagBg: "#111827",
  tagBorder: "#1F2937",
  summaryHighlightBg: "#1E293B",
  summaryBg: "linear-gradient(90deg, #111827 0%, #0B0F14 60%)",
  shadow: "0 8px 24px rgba(0,0,0,0.35)",
  shadowStrong: "0 18px 44px rgba(0,0,0,0.5)",
  surfaceDark: "#0B0F14"
};

const baseSlides = [
  {
    type: "COVER",
    tag: "SHOWCASE",
    title: ["组件适配展示", "按内容选组件"],
    subtitle: "同一套视觉\n不同内容结构\n用不同组件承载",
    metrics: [
      { label: "COMPONENTS", value: "10类" },
      { label: "PRINCIPLE", value: "内容驱动", highlight: true },
      { label: "OUTPUT", value: "一套图" }
    ],
    cta: "向左滑查看架构 →"
  },
  {
    type: "LIST",
    tag: "LIST",
    page: "02",
    title: "List 组件：要点清单",
    items: [
      { icon: "✅", text: "适合：要点/清单/步骤概要" },
      { icon: "✅", text: "信息特征：平级、短句" },
      { icon: "✅", text: "视觉重点：对齐一致" }
    ],
    summary: { title: "使用场景：", text: "结论页 / 提示页" }
  },
  {
    type: "POINTS",
    tag: "POINTS",
    page: "03",
    title: "Points 组件：重点+总结",
    items: [
      { icon: "💡", text: "适合：观点拆解、要点解释" },
      { icon: "🧭", text: "信息特征：要点 + 结论" },
      { icon: "📌", text: "视觉重点：强调结论" }
    ],
    summary: {
      label: "总结：",
      highlight: "一句话结论",
      desc: "把核心结论放到底部高亮，便于快速记忆。"
    }
  },
  {
    type: "STEPS",
    tag: "STEPS",
    page: "04",
    title: "Steps 组件：流程步骤",
    steps: [
      "收集数据（曝光/收藏/转粉）",
      "提炼结论（标题/封面/话题）",
      "转为动作（下周优化清单）"
    ],
    summary: "适合：流程方法、SOP、操作步骤"
  },
  {
    type: "TIMELINE",
    tag: "TIMELINE",
    page: "05",
    title: "Timeline 组件：步骤引导",
    timeline: [
      {
        num: "01",
        title: "Slash Commands (快捷指令)",
        desc: "将高频操作封装为快捷命令，省去每次重复写 Prompt：",
        type: "list",
        items: [
          { highlight: "/create-ticket", text: "自动提取当前对话上下文，转为标准 Linear 升级工单" },
          { highlight: "/search-issue", text: "在 Slack/Notion 中快速检索是否有相同的已知问题" }
        ]
      },
      {
        num: "02",
        title: "Rules & Skills (沉淀规则)",
        desc: "把资深工程师的「暗知识」变成 AI 的强制执行边界：",
        type: "list",
        items: [
          {
            highlight: "工单规范 Skill",
            text: "强制检查输出中是否包含「复现步骤」、「预期行为」和「当前行为」"
          },
          {
            highlight: "回复安全 Rule",
            text: "严禁向客户暴露底层服务名称、内部员工姓名及未经脱敏的日志代码"
          }
        ]
      },
      {
        num: "03",
        title: "Sub-Agents (多代理并行)",
        desc: "将排查任务拆分给多个子代理同时跑，结果合并后人工审核。",
        type: "tags",
        items: [
          { icon: "🔎", label: "LogInvestigator" },
          { icon: "🕒", label: "KnownIssueMiner" },
          { icon: "🎫", label: "TicketWriter" },
          { icon: "💬", label: "ReplyDrafter" }
        ]
      }
    ]
  },
  {
    type: "COMPARE",
    tag: "COMPARE",
    page: "06",
    title: "Compare 组件：对比结构",
    left: {
      title: "BEFORE",
      items: ["凭感觉复盘", "改动不可追溯", "结果不稳定"]
    },
    right: {
      title: "AFTER",
      items: ["有模板可复用", "改动可记录", "增长更可控"]
    },
    summary: "适合：前后对比、优劣对照"
  },
  {
    type: "QUOTE",
    tag: "QUOTE",
    page: "07",
    label: "INSIGHT",
    quote: "复盘不是写总结，而是写出下一步。",
    author: "运营复盘原则",
    highlight: "重点：让“结论”变成“动作”"
  },
  {
    type: "HOOK",
    tag: "HOOK",
    page: "08",
    title: "Hook 组件：冲击观点",
    highlightTitle: "一句话命中",
    cards: [
      { type: "light", label: "WHY", text: "没有结构，复盘永远停留在感受。" },
      { type: "dark", label: "HOW", text: "有模板，复盘就能转成动作清单。" }
    ],
    cta: "想要模板？评论【复盘】领取"
  },
  {
    type: "SIMPLE",
    tag: "SIMPLE",
    page: "09",
    title: "Simple 组件：纯文本解释",
    subtitle: "适合：概念释义、补充说明",
    body: "用于补充背景/定义/边界条件。版式简洁，阅读负担低。"
  },
  {
    type: "TERMINAL",
    tag: "TERMINAL",
    page: "10",
    title: "Terminal 组件：命令演示",
    subtitle: "把流程写成可复制的命令脚本，让协作更顺、交付更稳。",
    lines: [
      { type: "comment", text: "# 1. 拉取模板" },
      { type: "command", prompt: ">", text: "/openclaw template pull xhs-review" },
      { type: "comment", text: "# 2. 导出套图" },
      { type: "command", prompt: ">", text: "/openclaw render --theme light" }
    ],
    note: {
      prefix: "建议：把最常用的 3 条命令写进模板，",
      highlight: "减少重复操作",
      suffix: "，新人也能 1 分钟上手。"
    }
  }
];

export const postDataLight = {
  theme: lightTheme,
  slides: baseSlides
};

export const postDataDark = {
  theme: darkTheme,
  slides: baseSlides
};

export const postData =
  process.env.REMOTION_THEME === "dark" ? postDataDark : postDataLight;
