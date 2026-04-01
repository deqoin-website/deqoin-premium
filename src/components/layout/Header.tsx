"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Projeler", href: "#portfolio" },
  { label: "Showroom", href: "#showroom" },
  { label: "İletişim", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(26,26,26,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? "68px" : "88px",
            transition: "height 0.4s ease",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img 
              src="/deqoin_logo.png" 
              alt="deqoin design studio" 
              style={{ 
                height: scrolled ? "28px" : "36px", 
                width: "auto",
                transition: "height 0.4s ease"
              }} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              alignItems: "center",
              gap: "2.5rem",
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(255,255,255,0.75)")
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              style={{
                background: "var(--burgundy)",
                color: "#fff",
                padding: "0.625rem 1.5rem",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--burgundy-dark)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--burgundy)")
              }
            >
              Randevu Talep Et
              <ArrowUpRight size={12} />
            </Link>
          </nav>

          {/* Mobile Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: "0.25rem",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Menüyü aç/kapat"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "rgba(26,26,26,0.98)",
          backdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1.5rem",
            left: "1.5rem",
          }}
        >
          <img 
            src="/deqoin_logo.png" 
            alt="deqoin" 
            style={{ height: "32px", width: "auto" }} 
          />
        </div>


        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              style={{
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "2.5rem",
                fontWeight: 300,
                letterSpacing: "0.05em",
                transition: "color 0.3s ease",
                transitionDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(255,255,255,0.8)")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={handleNavClick}
            style={{
              background: "var(--burgundy)",
              color: "#fff",
              padding: "0.875rem 2.5rem",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Randevu Talep Et
            <ArrowUpRight size={14} />
          </Link>
        </nav>

        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Nevşehir · Kapadokya
        </div>
      </div>
    </>
  );
}
