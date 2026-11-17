// Single place to edit links and content shared across the site.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const GITHUB_URL = "https://github.com/Virtudant-AI/MULTI-AI";
// TODO: replace with the Play Store / release link once the app is published.
export const APP_URL = GITHUB_URL;
export const ORG_NAME = "Virtudant AI";
export const LOGO_SRC = `${BASE_PATH}/virtudant-ai-logo.png`;

export const NAV = [
  { label: "Features", href: "#features" },
  { label: "Engines", href: "#engines" },
  { label: "Models", href: "#models" },
  { label: "About", href: "#about" },
];

export const FEATURES = [
  {
    id: "engines",
    title: "Three engines, one app",
    body: "Use Gemini Nano through the OS, NPU-tuned LiteRT-LM, or any GGUF model, all from one app.",
    icon: "layers",
  },
  {
    id: "offline",
    title: "Runs on your device",
    body: "Models download once and run locally on your phone, so chats don't depend on a connection.",
    icon: "download",
  },
  {
    id: "models",
    title: "Know the fit first",
    body: "Each model is rated Optimal, Possible or Not recommended for your phone before you download it.",
    icon: "clock",
  },
] as const;

export const FIGURES = [
  { value: "3", label: "Inference tiers" },
  { value: "4", label: "Model-fit ratings" },
  { value: "1", label: "Flutter & Python codebase" },
  { value: "Local", label: "Inference first & only" },
];
