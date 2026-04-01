"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        background: "var(--charcoal)",
        overflow: "hidden",
      }}
    >
      {/* Background Image Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=80') center/cover no-repeat",
          opacity: 0.2,
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.3) 100%)",
        }}
      />

      {/* Decorative line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: "var(--burgundy)",
        }}
      />

      <div
        className="container-deqoin"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "8rem 1.5rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Hero Text */}
        <div style={{ maxWidth: "640px" }}>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--burgundy-light)",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "30px",
                height: "1px",
                background: "var(--burgundy)",
              }}
            />
            Nevşehir · Kapadokya
          </p>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            deqoin
            <br />
            <span
              style={{
                fontStyle: "italic",
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.65em",
              }}
            >
              design studio
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "1.25rem",
            }}
          >
            Mimari · Tasarım · Uygulama
          </p>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.6,
              marginBottom: "3rem",
              maxWidth: "480px",
            }}
          >
            Timeless spaces, crafted with precision.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="#portfolio" className="btn-burgundy">
              Projeleri Keşfet <ArrowRight size={14} />
            </Link>
            <Link href="#contact" className="btn-outline">
              Randevu Talep Et <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>

        {/* Appointment Form */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            padding: "2.5rem",
            maxWidth: "480px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--burgundy-light)",
              marginBottom: "0.5rem",
            }}
          >
            Hızlı Başvuru
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#fff",
              marginBottom: "2rem",
              lineHeight: 1.2,
            }}
          >
            Randevu Talep Et
          </h2>

          {submitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "2rem 0",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1.25rem",
                fontStyle: "italic",
              }}
            >
              Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {[
                { id: "name", label: "Ad Soyad", type: "text", placeholder: "Adınız" },
                { id: "phone", label: "Telefon", type: "tel", placeholder: "+90 5__ ___ __ __" },
                { id: "email", label: "E-Posta", type: "email", placeholder: "ornek@email.com" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
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
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                      padding: "0.75rem 1rem",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.82rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "rgba(139,26,47,0.7)")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "rgba(255,255,255,0.1)")
                    }
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="department"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Departman
                </label>
                <select
                  id="department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      department: e.target.value,
                    }))
                  }
                  required
                  style={{
                    width: "100%",
                    background: "rgba(26,26,26,0.9)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: formData.department
                      ? "#fff"
                      : "rgba(255,255,255,0.35)",
                    padding: "0.75rem 1rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.82rem",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled>
                    Departman seçin
                  </option>
                  <option value="interior">İç Mimarlık & Tasarım</option>
                  <option value="construction">
                    Anahtar Teslim Uygulama
                  </option>
                  <option value="showroom">Malzeme & Showroom</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="description"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Proje Hakkında Kısa Bilgi
                </label>
                <textarea
                  id="description"
                  placeholder="Projenizi kısaca anlatın..."
                  rows={3}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    padding: "0.75rem 1rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.82rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) =>
                    ((e.target as HTMLTextAreaElement).style.borderColor =
                      "rgba(139,26,47,0.7)")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLTextAreaElement).style.borderColor =
                      "rgba(255,255,255,0.1)")
                  }
                />
              </div>

              <button
                type="submit"
                className="btn-burgundy"
                style={{ marginTop: "0.5rem", justifyContent: "center" }}
              >
                Talep Gönder <ArrowUpRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Keşfet
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
            animation: "scrollPulse 2s ease infinite",
          }}
        />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.4; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.1); }
          }
        `}</style>
      </div>
    </section>
  );
}
