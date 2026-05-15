"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FOOTER_LINKS = {
  About: ["Our Story", "Store Locator", "Sustainability", "Careers", "Contact"],
  "Customer Service": ["Prices and Payments", "Shipping", "Return Policy", "Terms of Service", "Privacy Policy"],
  "Social Media": ["Instagram", "Facebook", "LinkedIn"],
};

export function LandingFooter() {
  return (
    <footer style={{ backgroundColor: "#1A1A18", borderRadius: "32px 32px 0 0", overflow: "hidden" }}>
      
      <div style={{ padding: "80px 60px 60px", maxWidth: "1280px", margin: "0 auto" }}>
        <div className="footer-cta-grid">
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 700,
                color: "#FDFAF6",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Engage with Us
              <br />
              in Conversation.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "rgba(253,250,246,0.5)",
                lineHeight: 1.75,
                maxWidth: "360px",
                margin: 0,
              }}
            >
              Connect with the best architects and interior designers. Your dream space is one conversation away.
            </p>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                color: "#1A1A18",
                backgroundColor: "#FDFAF6",
                padding: "10px 22px",
                borderRadius: "9999px",
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              Start Now <ArrowRight size={13} />
            </a>
          </div>

          
          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              minHeight: "280px",
            }}
            className="footer-image"
          >
            <Image
              src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
              alt="Engage interior"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      
      <div style={{ borderTop: "1px solid rgba(253,250,246,0.1)", margin: "0 60px" }} />

      
      <div style={{ padding: "48px 60px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <div className="footer-links-grid">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "rgba(253,250,246,0.4)",
                  margin: 0,
                }}
              >
                {category}
              </h4>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    color: "rgba(253,250,246,0.65)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    lineHeight: 1,
                  }}
                  onMouseEnter={(e) => ((e.target).style.color = "#FDFAF6")}
                  onMouseLeave={(e) => ((e.target).style.color = "rgba(253,250,246,0.65)")}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                color: "#FDFAF6",
                letterSpacing: "-1px",
                lineHeight: 1,
              }}
            >
              MatchAndBuild
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          align-items: start;
        }
        .footer-image { min-height: 280px; }
        @media (max-width: 1024px) {
          .footer-links-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .footer-cta-grid { grid-template-columns: 1fr; gap: 40px; }
          .footer-image { min-height: 200px; }
          .footer-links-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
        }
        @media (max-width: 480px) {
          .footer-links-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
