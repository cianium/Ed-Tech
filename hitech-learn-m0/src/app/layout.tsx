import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { parseServerConfig } from "@/lib/config/server";

// Validate non-secret server deployment configuration before rendering.
parseServerConfig(process.env);

export const metadata: Metadata = {
  title: "HiTech Learn | Foundation",
  description: "HiTech Learn foundation — a future English and German learning platform.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body className="min-h-screen bg-[var(--surface-50)] text-[var(--ink-900)] antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
