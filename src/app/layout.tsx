import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/utils/ScrollReveal";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "deqoin design studio | İç Mimarlık & Tasarım | Nevşehir Kapadokya",
  description:
    "deqoin design studio — Nevşehir / Kapadokya merkezli premium iç mimarlık, tasarım ve anahtar teslim uygulama stüdyosu. Timeless spaces, crafted with precision.",
  keywords:
    "iç mimarlık, tasarım, nevşehir, kapadokya, interior design, deqoin, premium, anahtar teslim",
  openGraph: {
    title: "deqoin design studio",
    description: "Timeless spaces, crafted with precision.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollReveal />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
