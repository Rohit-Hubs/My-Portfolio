import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/icon.svg" },
  title: "Rohith Kumar | AI & Machine Learning Engineer",
  description:
    "Rohith Kumar Chelluboina — AI & ML engineer in Hyderabad. Explore AI agents, RAG systems, full-stack projects, experience, and certifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
