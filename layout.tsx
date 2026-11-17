import type { Metadata, Viewport } from "next";
import "./globals.css";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "MULTI-AI — AI that runs on your phone",
  description:
    "MULTI-AI runs language models directly on your phone, across three inference tiers, so you chat with the model your hardware fits best. Built by Virtudant AI.",
  icons: { icon: `${BASE}/virtudant-ai-logo.png` },
  openGraph: {
    title: "MULTI-AI — AI that runs on your phone",
    description: "On-device language models across three inference tiers. Built by Virtudant AI.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#17181f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
