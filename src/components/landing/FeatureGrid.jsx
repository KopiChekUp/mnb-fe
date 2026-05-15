"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function FeatureGrid() {
  return (
    <section style={{ padding: "0 40px 80px", maxWidth: "1280px", margin: "0 auto" }}>
      <div className="feature-grid">
        
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            minHeight: "520px",
          }}
          className="feature-left"
        >
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
            alt="Modern minimalist interior"
            fill
            style={{ objectFit: "cover" }}
          />
          
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(26,26,24,0.5) 0%, transparent 55%)",
            }}
          />
          
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              backgroundColor: "rgba(26,26,24,0.7)",
              backdropFilter: "blur(8px)",
              color: "#FDFAF6",
              fontSize: "11px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.5px",
              padding: "5px 14px",
              borderRadius: "9999px",
            }}
          >
            Gorgeous Interior
          </div>
          
          <div style={{ position: "absolute", bottom: "28px", left: "28px", zIndex: 2 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 700,
                color: "#FDFAF6",
                lineHeight: 1.0,
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Modern
              <br />
              Minimalist
            </h2>
          </div>
        </div>

        
        <div className="feature-right">
          
          <div
            style={{
              backgroundColor: "#F0EAE0",
              borderRadius: "24px",
              padding: "28px",
              flex: 1,
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.5px",
                color: "#8B7355",
                border: "1px solid #C4956A",
                padding: "4px 14px",
                borderRadius: "9999px",
                marginBottom: "14px",
              }}
            >
              Aesthetic
            </span>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#6B6560",
                lineHeight: 1.65,
                marginBottom: "12px",
              }}
            >
              Aesthetic furniture where every piece tells a story of style and craftsmanship.
            </p>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                fontWeight: 600,
                color: "#1A1A18",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Into a gallery of elegance
            </h3>
          </div>

          
          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              minHeight: "220px",
              flex: 1,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
              alt="Best furniture"
              fill
              style={{ objectFit: "cover" }}
            />
            
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(26,26,24,0.55) 0%, transparent 50%)",
              }}
            />
            
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                backgroundColor: "rgba(245,240,232,0.92)",
                borderRadius: "12px",
                padding: "8px 14px",
              }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#6B6560", margin: 0 }}>
                Best Furniture
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, color: "#1A1A18", margin: 0 }}>
                Indulge in the artistry
              </p>
            </div>
            
            <button
              aria-label="View more"
              style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                backgroundColor: "#1A1A18",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FDFAF6",
                transition: "background-color 0.2s",
              }}
            >
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .feature-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 16px;
          align-items: stretch;
        }
        .feature-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .feature-left {
          min-height: 520px;
        }
        @media (max-width: 768px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }
          .feature-left {
            min-height: 360px;
          }
        }
      `}</style>
    </section>
  );
}
