import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CODEXOWAIS — Cyberpunk Developer Portfolio",
  description:
    "Building the future one project at a time. AI, Backend Development, Cloud Engineering — a futuristic developer portfolio by CODEXOWAIS.",
  keywords: [
    "developer",
    "portfolio",
    "AI",
    "backend",
    "cloud",
    "cyberpunk",
    "CODEXOWAIS",
  ],
  authors: [{ name: "CODEXOWAIS" }],
  openGraph: {
    title: "CODEXOWAIS — Cyberpunk Developer Portfolio",
    description: "Building the future one project at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#05050A] text-[#E8E0F0]">
        {/* CRT scanline overlay */}
        <div className="crt-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
