"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: "1.25rem",
        left: "1rem",
        right: "1rem",
        zIndex: 998,
        display: "flex",
        gap: "0.5rem",
      }}
    >
      <Link
        href="tel:+903840000000"
        style={{
          flex: 1,
          background: "var(--charcoal)",
          color: "#fff",
          padding: "0.875rem 1rem",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        }}
      >
        Ara
      </Link>
      <Link
        href="#contact"
        style={{
          flex: 2,
          background: "var(--burgundy)",
          color: "#fff",
          padding: "0.875rem 1rem",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.375rem",
          boxShadow: "0 8px 32px rgba(139,26,47,0.35)",
        }}
      >
        Randevu Talep Et <ArrowUpRight size={13} />
      </Link>
    </div>
  );
}
