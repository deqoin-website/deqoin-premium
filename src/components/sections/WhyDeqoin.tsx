"use client";

import { CheckCircle, MapPin, Layers, Star, Clock, Wrench } from "lucide-react";

const features = [
  {
    icon: <Layers size={22} strokeWidth={1.5} />,
    title: "Bütünleşik Hizmet",
    desc: "Tasarım, uygulama ve malzeme — tek stüdyo, tek süreç, sıfır koordinasyon sorunu.",
  },
  {
    icon: <Wrench size={22} strokeWidth={1.5} />,
    title: "Anahtar Teslim Yaklaşım",
    desc: "Konseptten teslimata kadar tüm süreci sizin adınıza yönetiyoruz.",
  },
  {
    icon: <Star size={22} strokeWidth={1.5} />,
    title: "Premium Malzeme Seçimi",
    desc: "Seçkin tedarikçiler ve özel showroom koleksiyonumuzla en doğru malzemeyi sunuyoruz.",
  },
  {
    icon: <CheckCircle size={22} strokeWidth={1.5} />,
    title: "Tutarlı Tasarım Dili",
    desc: "Konseptten şantiyeye, her noktada aynı estetik hassasiyet ve kalite standardı.",
  },
  {
    icon: <MapPin size={22} strokeWidth={1.5} />,
    title: "Kapadokya Uzmanlığı",
    desc: "Bölgenin mimari dokusunu ve yaşam kültürünü içselleştirmiş yerel deneyim.",
  },
  {
    icon: <Clock size={22} strokeWidth={1.5} />,
    title: "Zamanında Teslim",
    desc: "Şeffaf proje yönetimi ve sıkı zaman planlaması ile söz verilen tarihe uyum.",
  },
];

export default function WhyDeqoin() {
  return (
    <section
      id="why"
      className="section-padding"
      style={{ background: "var(--warm-white)" }}
    >
      <div className="container-deqoin">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left */}
          <div style={{ position: "sticky", top: "8rem" }}>
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
              Neden deqoin?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--charcoal)",
                marginBottom: "1.75rem",
              }}
            >
              Farkımız,{" "}
              <span style={{ fontStyle: "italic" }}>detaylardadır</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.9,
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
              }}
            >
              Her proje, bizim için bir imza niteliği taşır. Tasarım anlayışımız,
              uygulama kalitemiz ve müşteri deneyimimiz — tüm bunlar, deqoin&apos;i
              bir tercih değil, bir standart haline getiriyor.
            </p>
            <div
              style={{
                background: "var(--burgundy)",
                color: "#fff",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "2.75rem",
                  fontWeight: 300,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                %98
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                }}
              >
                Müşteri Memnuniyeti
              </div>
            </div>
          </div>

          {/* Right – Feature Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0",
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  padding: "2rem 0",
                  borderBottom: "1px solid var(--border-light)",
                  transition: "padding-left 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.paddingLeft = "0.75rem")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.paddingLeft = "0")
                }
              >
                <div
                  style={{
                    color: "var(--burgundy)",
                    flexShrink: 0,
                    marginTop: "0.25rem",
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      color: "var(--charcoal)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.82rem",
                      lineHeight: 1.8,
                      color: "var(--text-muted)",
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
