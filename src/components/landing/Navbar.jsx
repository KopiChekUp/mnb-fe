"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/config/constants";

const NAV_LINKS = ["Products", "Lifestyle", "News", "Projects"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "72px",
        display: "flex",
        alignItems: "center",
        backgroundColor: scrolled ? "rgba(245, 240, 232, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "background-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href={ROUTES.HOME} style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "20px",
              letterSpacing: "-0.5px",
              color: "#1A1A18",
            }}
          >
            MatchAndBuild
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                letterSpacing: "0.3px",
                color: "#6B6560",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target).style.color = "#1A1A18")}
              onMouseLeave={(e) => ((e.target).style.color = "#6B6560")}
            >
              {link}
            </a>
          ))}
          <Link
            href={ROUTES.LOGIN}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "0.3px",
              color: "#FDFAF6",
              backgroundColor: "#1A1A18",
              padding: "8px 20px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "#1A1A18" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#1A1A18" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#1A1A18" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "72px",
            left: 0,
            right: 0,
            backgroundColor: "#F5F0E8",
            padding: "24px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "0 8px 32px rgba(139,115,85,0.12)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              style={{ fontSize: "16px", color: "#1A1A18", textDecoration: "none" }}
            >
              {link}
            </a>
          ))}
          <Link href={ROUTES.LOGIN} style={{ fontSize: "16px", color: "#C4956A" }}>
            Sign In
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
