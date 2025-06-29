import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verifly - Validate Your Startup Ideas with AI",
  description:
    "Get instant AI-powered analysis of your startup idea with virality metrics, common pitfalls, user personas, and actionable insights to maximize your chances of success.",
  keywords:
    "startup validation, idea analysis, virality score, startup pitfalls, user personas, market analysis, AI insights",
  authors: [{ name: "Verifly Team" }],
  creator: "Verifly",
  publisher: "Verifly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
