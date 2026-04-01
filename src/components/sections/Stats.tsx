"use client";

export default function Stats() {
  const stats = [
    {
      number: "150+",
      label: "Tamamlanan Proje",
      sublabel: "Konut & Ticari",
    },
    {
      number: "3",
      label: "Hizmet Alanı",
      sublabel: "Tasarım, Uygulama, Tedarik",
    },
    {
      number: "100%",
      label: "Anahtar Teslim",
      sublabel: "Memnuniyet Garantisi",
    },
  ];

  return (
    <section 
      style={{ 
        background: "var(--warm-white)",
        padding: "4rem 0",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div className="container-deqoin">
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
          style={{ alignItems: "center" }}
        >
          {stats.map((item, index) => (
            <div 
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "1rem 2rem",
                borderRight: index < stats.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
              }}
              className={index < stats.length - 1 ? "md:border-r" : ""}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(3rem, 5vw, 4rem)",
                  fontWeight: 300,
                  color: "var(--burgundy)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {item.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--charcoal)",
                  marginBottom: "0.25rem",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.05em",
                  color: "rgba(0,0,0,0.4)",
                }}
              >
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
