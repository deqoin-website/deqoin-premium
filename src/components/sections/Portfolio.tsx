"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = ["Tümü", "Konut", "Ticari", "Konaklama"];

const projects = [
  {
    title: "Ürgüp Residence",
    category: "Konut",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800&q=80",
    size: "large",
  },
  {
    title: "Kapadokya Cave Suite",
    category: "Konaklama",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    size: "small",
  },
  {
    title: "Nevşehir Ofis",
    category: "Ticari",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    size: "small",
  },
  {
    title: "Modern Villa",
    category: "Konut",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    size: "small",
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Konaklama",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    size: "large",
  },
  {
    title: "Showroom Tasarımı",
    category: "Ticari",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    size: "small",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered =
    activeCategory === "Tümü"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="section-padding"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="container-deqoin">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                width: "40px",
                height: "1px",
                background: "var(--burgundy)",
                marginBottom: "1.5rem",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--burgundy-light)",
                marginBottom: "1rem",
              }}
            >
              Projeler
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#fff",
              }}
            >
              Seçkin{" "}
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>
                Projelerimiz
              </span>
            </h2>
          </div>

          {/* Category Filters */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background:
                    activeCategory === cat ? "var(--burgundy)" : "transparent",
                  color:
                    activeCategory === cat ? "#fff" : "rgba(255,255,255,0.45)",
                  border: "1px solid",
                  borderColor:
                    activeCategory === cat
                      ? "var(--burgundy)"
                      : "rgba(255,255,255,0.15)",
                  padding: "0.5rem 1.25rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2px",
          }}
        >
          {filtered.map((project, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: project.size === "large" ? "2/1.2" : "1/1",
                cursor: "pointer",
                gridColumn: project.size === "large" ? "span 1" : "span 1",
              }}
              className={`group ${project.size === "large" ? "md:col-span-2" : ""}`}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  display: "block",
                }}
                className="group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(139,26,47,0.2) 50%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "2rem",
                  opacity: 0,
                  transition: "all 0.4s ease",
                  zIndex: 10,
                }}
                className="group-hover:opacity-100"
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--burgundy-light)",
                    marginBottom: "0.35rem",
                    transform: "translateY(10px)",
                    transition: "all 0.4s ease 0.1s",
                  }}
                  className="group-hover:translate-y-0"
                >
                  {project.category}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transform: "translateY(10px)",
                    transition: "all 0.4s ease 0.2s",
                  }}
                  className="group-hover:translate-y-0"
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "#fff",
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="#contact" className="btn-outline">
            Proje Görüşmesi Başlat <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
