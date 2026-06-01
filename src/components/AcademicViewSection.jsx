import React from "react";
import { motion } from "framer-motion";

const ICON_MAP = {
  flag: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block" }}
    >
      {/* đẩy cột cờ sang phải */}
      <path d="M7 3V21" />

      {/* lá cờ */}
      <path d="M7 4h9l-1.5 3L16 10H7" />

      {/* đường đáy */}
      <path d="M7 10h9" />
    </svg>
  ),

  globe: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2c3 3 3 17 0 20" />
      <path d="M12 2c-3 3-3 17 0 20" />
    </svg>
  ),

  zap: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M13 2L3 14h8l-1 8 11-14h-8l0-6z" />
    </svg>
  ),
};

const AcademicViewSection = ({ data }) => {
  return (
    <section
      id="academic"
      className="presentation-section py-24 px-6"
      style={{ background: "transparent" }}
    >
      <div className="presentation-section__inner">
        <motion.div
          className="presentation-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="presentation-section__label">{data.label}</div>
          <h2
            className="presentation-section__title"
            style={{ color: "#0f172a" }}
          >
            {data.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="academic-view__grid">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              className="academic-card card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="academic-card__icon-wrap">
                <div className="academic-card__icon flex items-center justify-center">
                  {ICON_MAP[card.icon] || ICON_MAP.heart}
                </div>
              </div>
              <div className="academic-card__title">{card.title}</div>
              <div className="academic-card__desc">{card.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Quote — larger, glowing */}
        <motion.div
          className="academic-view__quote-box glow-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          style={{
            background: "rgba(255,255,255,0.98)",
            position: "relative",
            overflow: "hidden",
            padding: "56px 48px",
            borderRadius: 28,
            border: "1px solid rgba(15,23,42,0.06)",
            boxShadow: "0 8px 32px rgba(2,6,23,0.06)",
          }}
        >
          {/* Animated glow border */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 28,
              background:
                "linear-gradient(135deg, rgba(107,91,149,0.3), transparent, rgba(107,91,149,0.2))",
              opacity: 0,
              animation: "pulseGlow 3s ease-in-out infinite",
            }}
          />

          {/* Background pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
              linear-gradient(rgba(107,91,149,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107,91,149,0.06) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Large decorative quote mark */}
          <div
            style={{
              position: "absolute",
              top: -10,
              right: 32,
              fontSize: "10rem",
              fontFamily: "'Lora', serif",
              color: "rgba(107,91,149,0.06)",
              lineHeight: 1,
              pointerEvents: "none",
            }}
          >
            "
          </div>

          {/* Accent line top */}
          <div
            style={{
              width: 60,
              height: 3,
              borderRadius: 2,
              background: "linear-gradient(90deg, #b91c1c, #ff8a8a)",
              marginBottom: 28,
            }}
          />

          <p className="academic-view__quote-mark">"</p>

          <p
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontStyle: "italic",
              fontFamily: "'Lora', serif",
              color: "rgba(15,23,42,0.9)",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            "{data.quote}"
          </p>

          <p
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(15,23,42,0.6)",
              marginBottom: 20,
            }}
          >
            — {data.quoteAuthor}
          </p>

          {/* Note below quote */}
          <div
            style={{
              paddingTop: 20,
              borderTop: "1px solid rgba(107,91,149,0.15)",
              marginTop: 4,
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(15,23,42,0.7)",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              {data.quoteNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicViewSection;
