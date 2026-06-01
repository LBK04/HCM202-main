import React from "react";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

const ICON_MAP = {
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

  handshake: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 14l-3-3a2 2 0 00-3 3l4 4a3 3 0 004 0l2-2" />
      <path d="M16 14l3-3a2 2 0 113 3l-4 4a3 3 0 01-4 0l-2-2" />
      <path d="M12 12l2-2a2 2 0 013 3l-3 3" />
    </svg>
  ),

  peace: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20" />
      <path d="M4 8l16 8" />
      <path d="M20 8L4 16" />
    </svg>
  ),

  users: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="7" r="3" />
      <path d="M2 21c0-4 4-7 7-7s7 3 7 7" />
      <path d="M10 21c0-4 4-7 7-7s5 2 5 7" />
    </svg>
  ),

  flag: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6 3v18" />
      <path d="M6 4h10l-2 3 2 3H6" />
    </svg>
  ),
};

const GlobalStatsSection = ({ data }) => {
  return (
    <section
      id="global-stats"
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
            style={{ color: "#000000" }}
          >
            {data.title}
          </h2>
        </motion.div>

        <div
          className="stat-hero"
          style={{ display: "flex", flexDirection: "column", gap: "32px" }}
        >
          {/* Big label (Sức mạnh) nhỏ lại */}
          <motion.div
            className="stat-hero__big-number"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center" }}
          >
            <div
              className="stat-hero__number"
              style={{
                fontSize: "2rem",
                lineHeight: 1.1,
                marginBottom: "6px",
              }}
            >
              {data.bigNumber}
            </div>

            <div
              className="stat-hero__label"
              style={{
                fontSize: "1rem",
                opacity: 0.8,
              }}
            >
              {data.bigLabel}
            </div>
          </motion.div>

          {/* 3 cards in 1 row */}
          <div
            className="stat-hero__side-cards"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {data.cards.map((card, i) => (
              <motion.div
                key={i}
                className="stat-side-card card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="stat-side-card__icon">
                  {ICON_MAP[card.icon] || ICON_MAP.globe}
                </div>

                <div className="stat-side-card__title">{card.title}</div>
                <div className="stat-side-card__desc">{card.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Image BELOW 3 cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 220,
              background: "transparent",
              border: "none",
              boxShadow: "none",
              padding: 0,
            }}
          >
            <ImagePlaceholder
              src={data.image}
              alt="Thực trạng toàn cầu"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 16,
                background: "transparent",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalStatsSection;
