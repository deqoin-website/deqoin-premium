export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: "var(--warm-white)" }}
    >
      <div className="container-deqoin">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="lg:grid-cols-2"
        >
          {/* Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "-1.5rem",
                left: "-1.5rem",
                width: "60%",
                height: "60%",
                border: "1px solid var(--burgundy)",
                opacity: 0.3,
                zIndex: 0,
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"
              alt="deqoin design studio iç mekan"
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                right: "-1.5rem",
                background: "var(--burgundy)",
                color: "#fff",
                padding: "1.5rem 2rem",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                10+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  opacity: 0.8,
                  marginTop: "0.25rem",
                }}
              >
                Yıllık Deneyim
              </div>
            </div>
          </div>

          {/* Text */}
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
              Hakkımızda
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "var(--charcoal)",
                marginBottom: "2rem",
              }}
            >
              Tasarım, Uygulama
              <br />
              <span style={{ fontStyle: "italic" }}>ve Malzeme</span>
              <br />
              Tek Çatı Altında
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {[
                "deqoin design studio; iç mimarlık, tasarım, anahtar teslim uygulama ve malzeme seçimi süreçlerini tek çatı altında birleştiren, Nevşehir / Kapadokya merkezli premium bir tasarım stüdyosudur.",
                "Konsept geliştirmeden uygulamaya, malzeme seçiminden şantiye yönetimine kadar tüm süreçleri bütüncül bir anlayışla yürütüyoruz. Her projede tutarlı bir estetik dil, teknik mükemmellik ve müşteri odaklı bir yaklaşım benimsiyoruz.",
                "Luxury yaşam alanları, butik oteller, ticari ofisler ve konut projelerinde bıraktığımız iz; zamanın ötesinde, kalıcı ve kimlikli mekânlardır.",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "var(--text-muted)",
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2.5rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--border-light)",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "150+", label: "Tamamlanan Proje" },
                { num: "3", label: "Hizmet Alanı" },
                { num: "100%", label: "Anahtar Teslim" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "2.25rem",
                      fontWeight: 300,
                      color: "var(--charcoal)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
