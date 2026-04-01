"use client";

const materials = [
  {
    name: "Aydınlatma",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80",
  },
  {
    name: "Duvar Panelleri",
    image: "https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?w=600&q=80",
  },
  {
    name: "Seramik & Taş",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&q=80",
  },
  {
    name: "Dekoratif Yüzeyler",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

export default function Showroom() {
  return (
    <section
      id="showroom"
      className="section-padding"
      style={{ background: "var(--beige)" }}
    >
      <div className="container-deqoin">
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "4rem",
            alignItems: "end",
          }}
          className="lg:grid-cols-2"
        >
          <div>
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
              Showroom
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--charcoal)",
              }}
            >
              deqoin{" "}
              <span style={{ fontStyle: "italic" }}>Premium</span>
              <br />
              Malzeme Koleksiyonu
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.9,
              color: "var(--text-muted)",
            }}
          >
            Showroom&apos;umuzda seçkin malzeme markalarının curated koleksiyonlarını
            keşfedebilirsiniz. Aydınlatmadan duvar yüzeylerine, seramikten dekoratif
            aksesuarlara kadar her ürün, premium tasarım anlayışımızla özenle seçilmiştir.
          </p>
        </div>

        {/* Material Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
          }}
          className="md:grid-cols-4"
        >
          {materials.map((m, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                overflow: "hidden",
                height: "380px",
                cursor: "pointer",
              }}
              className="group"
            >
              <img
                src={m.image}
                alt={m.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  display: "block",
                }}
                className="group-hover:scale-110"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(139,26,47,0.15) 50%, transparent 100%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "2rem",
                  transition: "all 0.4s ease",
                }}
              >
                <div
                  style={{
                    transform: "translateY(5px)",
                    transition: "all 0.4s ease",
                  }}
                  className="group-hover:translate-y-0"
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "#fff",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {m.name}
                  </h3>
                  <div
                    style={{
                      width: "20px",
                      height: "1px",
                      background: "var(--burgundy-light)",
                      transition: "width 0.4s ease",
                    }}
                    className="group-hover:w-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            background: "var(--charcoal)",
            marginTop: "2px",
            padding: "3rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.75rem",
                fontWeight: 300,
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              Showroom&apos;umuzu{" "}
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>
                ziyaret edin
              </span>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.4)",
                marginTop: "0.5rem",
                letterSpacing: "0.05em",
              }}
            >
              Nevşehir / Kapadokya · Randevu ile ziyaret
            </p>
          </div>
          <a href="#contact" className="btn-burgundy">
            Randevu Al
          </a>
        </div>
      </div>
    </section>
  );
}
