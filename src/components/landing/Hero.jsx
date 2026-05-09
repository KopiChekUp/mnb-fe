"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section style={{ padding: "0 40px 40px", maxWidth: "1280px", margin: "0 auto" }}>
      <div
        style={{
          position: "relative",
          borderRadius: "32px",
          overflow: "hidden",
          height: "88vh",
          minHeight: "560px",
          maxHeight: "860px",
        }}
      >
        {/* Background image */}
        <Image
          src="/background-auth-sec.svg"
          alt="Contemporary interior"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Left gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(26,26,24,0.55) 0%, transparent 65%)",
          }}
        />
        {/* Bottom gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(26,26,24,0.45) 0%, transparent 50%)",
          }}
        />

        {/* Big headline */}
        <h1
          style={{
            position: "absolute",
            bottom: "32%",
            left: "48px",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(56px, 8vw, 96px)",
            fontWeight: 800,
            color: "#FDFAF6",
            lineHeight: 0.9,
            letterSpacing: "-3px",
            zIndex: 2,
            margin: 0,
          }}
        >
          Contemporary.
        </h1>

        {/* Bottom-left glassmorphism info card */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "48px",
            maxWidth: "280px",
            backgroundColor: "rgba(245, 240, 232, 0.13)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "24px",
            padding: "20px 24px",
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: "rgba(253,250,246,0.85)",
              lineHeight: 1.65,
              marginBottom: "16px",
            }}
          >
            Crafting spaces that harmonize modern aesthetics with timeless elegance.
          </p>
          <a
            href="#collection"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              color: "#1A1A18",
              backgroundColor: "#FDFAF6",
              padding: "8px 18px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            View More <ArrowRight size={13} />
          </a>
        </div>

        {/* Bottom-center mini thumbnail card */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "160px",
            height: "110px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(26,26,24,0.3)",
            zIndex: 2,
          }}
        >
          <Image
            src="/pool-image.svg"
            alt="Interior thumbnail"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Bottom-right circular decoration */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "48px",
            width: "88px",
            height: "88px",
            zIndex: 2,
          }}
        >
          <CircularText text="Modern · Minimalist · Contemporary · " />
        </div>
      </div>
    </section>
  );
}

function CircularText({ text }) {
  const chars = text.split("");

  return (
    <div
      style={{ position: "relative", width: "88px", height: "88px" }}
      className="circular-text-wrapper"
    >
      <svg
        viewBox="0 0 88 88"
        width="88"
        height="88"
        style={{ animation: "spin 12s linear infinite" }}
      >
        <defs>
          <path
            id="circle-path"
            d="M 44,44 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          />
        </defs>
        <text
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "8px",
            fill: "rgba(253,250,246,0.85)",
            letterSpacing: "1.5px",
          }}
        >
          <textPath href="#circle-path">{text}</textPath>
        </text>
      </svg>
      {/* Center arrow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "rgba(253,250,246,0.9)",
        }}
      >
        <ArrowRight size={16} />
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
