"use client";

const steps = [
  {
    num: "01",
    title: "Konsept",
    desc: "İhtiyaçlarınızı dinliyor, mekanı analiz ediyor ve projenize özel bir konsept geliştiriyoruz. Mood board, referanslar ve ilk eskizler bu aşamada şekillenir.",
  },
  {
    num: "02",
    title: "Tasarım",
    desc: "3D görselleştirme, teknik çizimler ve malzeme paleti ile tasarımı hayata geçiriyoruz. Her detay, uygulamadan önce onaylanır.",
  },
  {
    num: "03",
    title: "Malzeme Seçimi",
    desc: "Showroom koleksiyonumuz ve tedarikçi ağımız aracılığıyla projenize en uygun malzeme, yüzey ve ürünleri birlikte belirliyoruz.",
  },
  {
    num: "04",
    title: "Uygulama",
    desc: "Şantiye yönetiminden kalite kontrolüne, anahtar teslim sürecin tamamını üstleniyoruz. Teslimatta projeniz, konseptinizle tam örtüşür.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="container-deqoin">
        <div style={{ marginBottom: "4rem" }}>
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
            Sürecimiz
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
            Konseptten Teslimata{" "}
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>
              4 Adım
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0",
          }}
          className="md:grid-cols-4"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                padding: "2.5rem 2rem",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                position: "relative",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderLeftColor =
                  "var(--burgundy)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderLeftColor =
                  "rgba(255,255,255,0.08)")
              }
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "4.5rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.06)",
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                  userSelect: "none",
                }}
              >
                {step.num}
              </div>

              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  top: "2.5rem",
                  left: "-5px",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "var(--burgundy)",
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.82rem",
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
