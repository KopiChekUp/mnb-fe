"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const COLLECTION = [
  { name: "Mondrian",  image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80", tall: true },
  { name: "Artex",     image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=800&q=80", tall: false },
  { name: "Nirnia",    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", tall: false },
  { name: "Brera",     image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80", tall: false },
  { name: "Alec Pro",  image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80", tall: true },
  { name: "Nirnia II", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80", tall: false },
];

export function CollectionMosaic() {
  return (
    <section id="collection" style={{ padding: "80px 40px", maxWidth: "1280px", margin: "0 auto" }}>
      
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "32px",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            color: "#1A1A18",
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
            margin: 0,
            maxWidth: "340px",
          }}
        >
          Explore Our Proudly Collection
        </h2>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
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
              border: "1px solid #1A1A18",
              padding: "8px 18px",
              borderRadius: "9999px",
              textDecoration: "none",
            }}
          >
            View More <ArrowRight size={13} />
          </a>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "#9C9490",
              maxWidth: "220px",
              textAlign: "right",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Curated spaces by the world&apos;s finest architects and interior designers.
          </p>
        </div>
      </div>

      
      <div className="mosaic-grid">
        {COLLECTION.map((item, i) => (
          <CollectionCard key={i} {...item} />
        ))}
      </div>

      <style>{`
        .mosaic-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 220px;
          gap: 12px;
        }
        .mosaic-grid > *:nth-child(1) { grid-row: span 2; }
        .mosaic-grid > *:nth-child(5) { grid-row: span 2; }
        @media (max-width: 1024px) {
          .mosaic-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mosaic-grid > *:nth-child(1) { grid-row: span 1; }
          .mosaic-grid > *:nth-child(5) { grid-row: span 1; }
        }
        @media (max-width: 640px) {
          .mosaic-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 240px;
          }
        }
      `}</style>
    </section>
  );
}

function CollectionCard({ name, image, tall }) {
  return (
    <div
      className="collection-card"
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Image
        src={image}
        alt={name}
        fill
        style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
        className="card-image"
      />
      
      <div className="card-overlay" style={{
        position: "absolute",
        inset: 0,
        background: "rgba(26,26,24,0.35)",
        opacity: 0,
        transition: "opacity 0.3s ease",
      }} />
      
      <div
        style={{
          position: "absolute",
          bottom: "14px",
          left: "14px",
          right: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "15px",
            fontWeight: 600,
            color: "#FDFAF6",
            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          {name}
        </span>
        <button
          aria-label={`View ${name}`}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "9999px",
            backgroundColor: "#1A1A18",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FDFAF6",
            flexShrink: 0,
          }}
        >
          <ArrowUpRight size={14} />
        </button>
      </div>

      <style>{`
        .collection-card:hover .card-image { transform: scale(1.05); }
        .collection-card:hover .card-overlay { opacity: 1; }
      `}</style>
    </div>
  );
}
