import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["500", "600", "700"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400"] });

const title = "Daniyal | AI Engineer & Digital Product Builder";
const description =
  "Explore Daniyal's work across machine learning, large language models, workflow automation, and digital product development at DreamService.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://daniyalbadrloo.dreamservice.net"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", siteName: "DreamService", url: "/", locale: "en_US" },
  twitter: { card: "summary", title, description },
};
export const viewport: Viewport = { themeColor: "#08070D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
