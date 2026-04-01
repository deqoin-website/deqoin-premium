"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--beige)" }}
    >
      <div className="container-deqoin">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left: Info */}
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
              İletişim
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
              Projenizi{" "}
              <span style={{ fontStyle: "italic" }}>Başlatalım</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.9,
                color: "var(--text-muted)",
                marginBottom: "3rem",
                maxWidth: "440px",
              }}
            >
              Hayalinizdeki mekanı birlikte tasarlayalım. Bize ulaşın, projenizi
              dinleyelim, size özel bir yol haritası çıkaralım.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              {[
                {
                  icon: <MapPin size={18} strokeWidth={1.5} />,
                  label: "Konum",
                  value: "Nevşehir / Kapadokya, Türkiye",
                },
                {
                  icon: <Phone size={18} strokeWidth={1.5} />,
                  label: "Telefon",
                  value: "+90 (384) 000 00 00",
                },
                {
                  icon: <Mail size={18} strokeWidth={1.5} />,
                  label: "E-Posta",
                  value: "info@deqoin.com",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  style={{ display: "flex", gap: "1.25rem", alignItems: "start" }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#fff",
                      border: "1px solid var(--border-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--burgundy)",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.9rem",
                        color: "var(--charcoal)",
                      }}
                    >
                      {c.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "#fff",
              padding: "3rem",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: "400px",
                  textAlign: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    border: "1px solid var(--burgundy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--burgundy)",
                    fontSize: "1.75rem",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.75rem",
                    fontWeight: 300,
                    color: "var(--charcoal)",
                  }}
                >
                  Mesajınız Alındı
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.75rem",
                    fontWeight: 400,
                    color: "var(--charcoal)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Bize Yazın
                </h3>

                {[
                  { id: "name", label: "Ad Soyad", type: "text", placeholder: "Adınız" },
                  { id: "phone", label: "Telefon", type: "tel", placeholder: "+90 5__ ___ __ __" },
                  { id: "email", label: "E-Posta", type: "email", placeholder: "ornek@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={`contact-${field.id}`}
                      style={{
                        display: "block",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={`contact-${field.id}`}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [field.id]: e.target.value,
                        }))
                      }
                      required
                      style={{
                        width: "100%",
                        background: "var(--beige)",
                        border: "1px solid var(--border-light)",
                        color: "var(--charcoal)",
                        padding: "0.75rem 1rem",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.85rem",
                        outline: "none",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) =>
                        ((e.target as HTMLInputElement).style.borderColor = "var(--burgundy)")
                      }
                      onBlur={(e) =>
                        ((e.target as HTMLInputElement).style.borderColor = "var(--border-light)")
                      }
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="contact-details"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Proje Detayları
                  </label>
                  <textarea
                    id="contact-details"
                    placeholder="Projenizi kısaca anlatın..."
                    rows={5}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, details: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      background: "var(--beige)",
                      border: "1px solid var(--border-light)",
                      color: "var(--charcoal)",
                      padding: "0.75rem 1rem",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.85rem",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) =>
                      ((e.target as HTMLTextAreaElement).style.borderColor = "var(--burgundy)")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLTextAreaElement).style.borderColor = "var(--border-light)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn-burgundy"
                  style={{ justifyContent: "center", marginTop: "0.5rem" }}
                >
                  Projenizi Başlatalım <ArrowUpRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
