"use client";

const STATS = [
  { value: "500+", label: "Products" },
  { value: "20+",  label: "Projects" },
  { value: "50+",  label: "Satisfied Customers" },
  { value: "1st",  label: "Top 1 in Paris" },
];

export function StatsRow() {
  return (
    <section style={{ backgroundColor: "#FDFAF6", padding: "80px 40px" }}>
      <div
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="stats-grid"
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              borderRight: i < STATS.length - 1 ? "1px solid #E8DDD0" : "none",
              padding: "0 20px",
            }}
            className="stat-item"
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 700,
                color: "#1A1A18",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#9C9490",
                fontWeight: 400,
                letterSpacing: "0.3px",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 0;
          }
          .stat-item {
            border-right: none !important;
          }
          .stat-item:nth-child(odd) {
            border-right: 1px solid #E8DDD0 !important;
          }
        }
      `}</style>
    </section>
  );
}
