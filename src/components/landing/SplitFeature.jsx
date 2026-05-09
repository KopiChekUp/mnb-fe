"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function SplitFeature() {
  return (
    <section style={{ padding: "80px 40px", maxWidth: "1280px", margin: "0 auto" }}>
      <div className="split-grid">
        {/* Left — image */}
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            minHeight: "480px",
          }}
          className="split-image"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Modern style timeless charm"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right — text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px 0 20px 48px",
            gap: "20px",
          }}
          className="split-text"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              letterSpacing: "1.5px",
              color: "#9C9490",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Elegance · Timeless
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              color: "#1A1A18",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            Modern Style
            <br />
            Timeless Charm
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "#6B6560",
              lineHeight: 1.75,
              maxWidth: "380px",
              margin: 0,
            }}
          >
            Every space tells a story — a narrative of refined taste, deliberate choices, and
            the enduring beauty of thoughtful design. We bring your vision to life with
            architects who understand both tradition and modernity.
          </p>

          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "#1A1A18",
              border: "1px solid #1A1A18",
              padding: "10px 22px",
              borderRadius: "9999px",
              textDecoration: "none",
              width: "fit-content",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget).style.backgroundColor = "#F0EAE0")}
            onMouseLeave={(e) => ((e.currentTarget).style.backgroundColor = "transparent")}
          >
            About Us <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .split-grid {
          display: grid;
          grid-template-columns: 55% 45%;
          align-items: center;
        }
        .split-image { min-height: 480px; }
        @media (max-width: 768px) {
          .split-grid { grid-template-columns: 1fr; }
          .split-text { padding: 32px 0 0 0 !important; }
          .split-image { min-height: 300px; }
        }
      `}</style>
    </section>
  );
}
