import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
// Self-hosted: next/font/google's Doto download failed intermittently and broke Vercel builds (OFL font).
const doto = localFont({ src: "../assets/fonts/doto-700-latin.woff2", weight: "700", variable: "--font-doto" });

export const metadata: Metadata = {
  title: "Izzat Hilmi | Engineer & Builder",
  description: "Applied AI and industrial automation builder. AI that runs on real machines.",
  openGraph: {
    title: "Izzat Hilmi | Engineer & Builder",
    description: "AI that runs on real machines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${jetbrains.variable} ${doto.variable} bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
