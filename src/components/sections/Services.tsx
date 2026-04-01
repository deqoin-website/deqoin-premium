"use client";

import { PenTool, Hammer, Package } from "lucide-react";

const services = [
  {
    icon: <PenTool size={28} strokeWidth={1} />,
    title: "İç Mimarlık & Tasarım",
    description:
      "Konsept geliştirmeden teknik çizimlere, malzeme paletinden ışık tasarımına kadar her detayı titizlikle planlıyor; yaşayan, nefes alan mekanlar yaratıyoruz.",
    tags: ["Konsept", "3D Görselleştirme", "Uygulama Projesi"],
  },
  {
    icon: <Hammer size={28} strokeWidth={1} />,
    title: "Anahtar Teslim Uygulama",
    description:
      "Tasarımdan şantiyeye, tek çatı altında yönetilen bir süreç. Her adımda kalite kontrolü, şeffaf iletişim ve zamanında teslim garantisi sunuyoruz.",
    tags: ["Şantiye Yönetimi", "Kalite Kontrol", "Zamanında Teslim"],
  },
  {
    icon: <Package size={28} strokeWidth={1} />,
    title: "Malzeme Tedariki & Showroom",
    description:
      "Seçkin marka ve ürünlerden oluşan showroom koleksiyonumuz ile projenize en uygun malzeme, yüzey ve aksesuarları uzman danışmanlıkla sunuyoruz.",
    tags: ["Premium Malzeme", "Showroom", "Danışmanlık"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: "var(--beige)" }}
    >
      <div className="container-deqoin">
        <div style={{ marginBottom: "4rem" }}>
          <span className="line-separator" />
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--burgundy)",
              marginBottom: "1rem",
            }}
          >
            Hizmetlerimiz
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--charcoal)",
              maxWidth: "560px",
            }}
          >
            Tasarımdan Uygulamaya{" "}
            <span style={{ fontStyle: "italic" }}>Bütünleşik</span> Hizmet
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2px",
          }}
          className="md:grid-cols-3"
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "3rem 2.5rem",
                borderBottom: "3px solid transparent",
                transition: "all 0.35s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderBottomColor = "var(--burgundy)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderBottomColor = "transparent";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Number */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "2rem",
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "4rem",
                  fontWeight: 300,
                  color: "rgba(0,0,0,0.04)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div
                style={{
                  color: "var(--burgundy)",
                  marginBottom: "1.5rem",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.82rem",
                  lineHeight: 1.85,
                  color: "var(--text-muted)",
                  marginBottom: "2rem",
                }}
              >
                {service.description}
              </p>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--burgundy)",
                      border: "1px solid rgba(139,26,47,0.25)",
                      padding: "0.3rem 0.75rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
