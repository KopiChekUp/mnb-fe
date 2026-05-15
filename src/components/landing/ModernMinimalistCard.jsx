"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ModernMinimalistCard() {
  return (
    <section style={{ padding: "40px", maxWidth: "1280px", margin: "0 auto", backgroundColor: "#F5F0E8" }}>
      <div style={{ display: "flex", gap: "24px", flexDirection: "row", flexWrap: "wrap" }}>
        
        <div style={{ flex: "1 1 60%", minWidth: "300px", position: "relative", height: "600px" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
              alt="Modern Minimalist Interior"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          
          <div
            style={{
              position: "absolute",
              bottom: "-2px",
              left: "-2px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            
            <div
              style={{
                position: "relative",
                backgroundColor: "#F5F0E8",
                padding: "32px 48px 16px 0",
                borderTopRightRadius: "32px",
              }}
            >
              
              <svg width="32" height="32" viewBox="0 0 32 32" style={{ position: "absolute", top: "-32px", left: 0, pointerEvents: "none" }}>
                <path d="M 0 0 L 0 32 L 32 32 A 32 32 0 0 1 0 0 Z" fill="#F5F0E8" />
              </svg>

              
              <svg width="32" height="32" viewBox="0 0 32 32" style={{ position: "absolute", bottom: 0, right: "-32px", pointerEvents: "none" }}>
                <path d="M 0 0 L 0 32 L 32 32 A 32 32 0 0 1 0 0 Z" fill="#F5F0E8" />
              </svg>

              <div
                style={{
                  border: "1px solid rgba(26,26,24,0.3)",
                  borderRadius: "9999px",
                  padding: "8px 20px",
                  display: "inline-block",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  color: "#1A1A18",
                }}
              >
                Georgeus Interior
              </div>
            </div>

            
            <div
              style={{
                position: "relative",
                backgroundColor: "#F5F0E8",
                padding: "0 64px 8px 0",
                borderTopRightRadius: "32px",
              }}
            >
              
              <svg width="32" height="32" viewBox="0 0 32 32" style={{ position: "absolute", bottom: 0, right: "-32px", pointerEvents: "none" }}>
                <path d="M 0 0 L 0 32 L 32 32 A 32 32 0 0 1 0 0 Z" fill="#F5F0E8" />
              </svg>

              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "#1A1A18",
                  margin: 0,
                  letterSpacing: "-1px",
                }}
              >
                Modern
              </h2>
            </div>

            
            <div
              style={{
                position: "relative",
                backgroundColor: "#F5F0E8",
                padding: "0 48px 32px 0",
                borderTopRightRadius: "32px",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "#1A1A18",
                  margin: 0,
                  letterSpacing: "-1px",
                }}
              >
                Minimalist
              </h2>
              
              <svg width="32" height="32" viewBox="0 0 32 32" style={{ position: "absolute", bottom: 0, right: "-32px", pointerEvents: "none" }}>
                <path d="M 0 0 L 0 32 L 32 32 A 32 32 0 0 1 0 0 Z" fill="#F5F0E8" />
              </svg>
            </div>
          </div>
        </div>

        
        <div style={{ flex: "1 1 35%", display: "flex", flexDirection: "column", gap: "24px", minWidth: "300px" }}>
          
          <div
            style={{
              backgroundColor: "#EAE7E0",
              borderRadius: "32px",
              padding: "40px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                border: "1px solid rgba(26,26,24,0.15)",
                borderRadius: "9999px",
                padding: "6px 16px",
                fontSize: "12px",
                width: "fit-content",
                marginBottom: "24px",
                fontFamily: "'Inter', sans-serif",
                color: "#1A1A18",
              }}
            >
              Aesthetic
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(26,26,24,0.7)",
                marginBottom: "20px",
                maxWidth: "220px",
                lineHeight: 1.6,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Aesthetic furniture where every piece tells a story of style
            </p>
            <h3
              style={{
                fontSize: "32px",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1A1A18",
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              Into a gallery<br />
              of elegance
            </h3>
          </div>

          
          <div
            style={{
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
              flex: 1,
              minHeight: "260px",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
              alt="Best Furniture"
              fill
              style={{ objectFit: "cover" }}
            />
            
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(26,26,24,0.7) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "9999px",
                  padding: "6px 16px",
                  fontSize: "12px",
                  color: "#FDFAF6",
                  width: "fit-content",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Best Furniture
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
              <p
                style={{
                  color: "#FDFAF6",
                  fontSize: "18px",
                  fontFamily: "'Playfair Display', serif",
                  maxWidth: "180px",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                Indulge in the artistry of everyday living
              </p>
            </div>
            
            <div
              style={{
                position: "absolute",
                bottom: "32px",
                right: "32px",
                width: "48px",
                height: "48px",
                backgroundColor: "#1A1A18",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FDFAF6",
                cursor: "pointer",
              }}
            >
              <ArrowRight size={20} style={{ transform: "rotate(-45deg)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
