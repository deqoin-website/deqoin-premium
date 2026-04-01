"use client";

const testimonials = [
  {
    quote:
      "deqoin, projemizin her aşamasında son derece profesyonel ve titiz bir yaklaşım sergiledi. Tasarımdan uygulamaya kadar söylediklerini eksiksiz yerine getirdiler. Mekanımız tam hayal ettiğimiz gibi oldu.",
    name: "Selin K.",
    title: "Konut Projesi, Ürgüp",
    initial: "S",
  },
  {
    quote:
      "Butik otelimizin tasarımı için deqoin'i tercih ettik. Kapadokya ruhunu modern bir yorumla mekanımıza taşıdılar. Misafirlerimizden aldığımız geri bildirimler olağanüstü.",
    name: "Murat A.",
    title: "Butik Otel, Göreme",
    initial: "M",
  },
  {
    quote:
      "Showroom'larındaki malzeme kalitesi ve danışmanlık hizmeti gerçekten etkileyici. Ofis projemiz için doğru malzemeyi bulmamızda büyük kolaylık sağladılar.",
    name: "Ayşe T.",
    title: "Ticari Proje, Nevşehir",
    initial: "A",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: "var(--warm-white)" }}
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
            Müşteri Görüşleri
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
            Müşterilerimiz{" "}
            <span style={{ fontStyle: "italic" }}>Ne Diyor?</span>
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
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: i === 1 ? "var(--burgundy)" : "var(--beige)",
                padding: "3rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "340px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)")
              }
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "5rem",
                  lineHeight: 0.8,
                  color:
                    i === 1
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(139,26,47,0.15)",
                  marginBottom: "1.5rem",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: i === 1 ? "#fff" : "var(--charcoal)",
                  flex: 1,
                  marginBottom: "2rem",
                }}
              >
                {t.quote}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background:
                      i === 1 ? "rgba(255,255,255,0.2)" : "var(--burgundy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: i === 1 ? "#fff" : "var(--charcoal)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.68rem",
                      color:
                        i === 1 ? "rgba(255,255,255,0.6)" : "var(--text-muted)",
                      marginTop: "0.1rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
