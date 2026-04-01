"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Projeler", href: "#portfolio" },
  { label: "Showroom", href: "#showroom" },
  { label: "İletişim", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--charcoal)",
        color: "#fff",
        padding: "5rem 1.5rem 2.5rem",
      }}
    >
      <div className="container-deqoin">
        {/* Top Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "4rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <img 
                src="/deqoin_logo.png" 
                alt="deqoin design studio" 
                style={{ height: "36px", width: "auto" }} 
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.8rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "280px",
              }}
            >
              Nevşehir / Kapadokya merkezli, tasarım ve anahtar teslim uygulamada 
              kusursuzluğu hedefleyen çözüm ortağınız. Mekanlarınızın değerini 
              vizyoner dokunuşlarla artırıyoruz.
            </p>
            {/* Socials */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1.75rem",
              }}
            >
              {[
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
                  href: "#",
                  label: "Instagram",
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
                  href: "#",
                  label: "LinkedIn",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--burgundy)";
                    el.style.color = "#fff";
                    el.style.background = "var(--burgundy)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.15)";
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "1.5rem",
              }}
            >
              Sayfalar
            </p>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
              }}
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.05em",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(255,255,255,0.6)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "1.5rem",
              }}
            >
              İletişim
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                { label: "Konum", value: "Nevşehir / Kapadokya, Türkiye" },
                { label: "E-Posta", value: "info@deqoin.com" },
                { label: "Telefon", value: "+90 (384) 000 00 00" },
              ].map((c) => (
                <div key={c.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                marginTop: "1.75rem",
                color: "var(--burgundy-light)",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "gap 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.gap = "0.75rem")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.gap = "0.375rem")
              }
            >
              Randevu Talep Et <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            textAlign: "center",
          }}
          className="md:flex-row md:justify-between"
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} deqoin design studio. Tüm hakları
            saklıdır.
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.05em",
            }}
          >
            Nevşehir · Kapadokya · Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
