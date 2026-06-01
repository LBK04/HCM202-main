import React from "react";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

const HeroSection = ({ data }) => {
  const scrollToContent = () => {
    const el = document.getElementById("global-stats");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      {/* Background layers */}
      <div className="hero-section__bg primary-gradient-deep">
        <div
          className="ambient-orb"
          style={{
            width: 600,
            height: 600,
            top: "10%",
            left: "10%",
            background: "#b91c1c",
            animationDelay: "0s",
          }}
        />
        <div
          className="ambient-orb"
          style={{
            width: 400,
            height: 400,
            bottom: "15%",
            right: "15%",
            background: "#8b0e14",
            animationDelay: "3s",
          }}
        />
        <div
          className="ambient-orb"
          style={{
            width: 300,
            height: 300,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "#ff6b6b",
            animationDelay: "6s",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            linear-gradient(rgba(107,91,149,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107,91,149,0.06) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 80,
          right: 40,
          width: 120,
          height: 120,
          borderTop: "2px solid rgba(107,91,149,0.25)",
          borderRight: "2px solid rgba(107,91,149,0.25)",
          borderTopRightRadius: 16,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          width: 80,
          height: 80,
          borderBottom: "2px solid rgba(107,91,149,0.2)",
          borderLeft: "2px solid rgba(107,91,149,0.2)",
          borderBottomLeftRadius: 16,
        }}
      />

      <div className="hero-section__content">
        {/* Left: text */}
        <motion.div
          className="hero-section__text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
         

          <h1 className="hero-section__title">
            <motion.span
              className="hero-section__title-word hero-section__title-word--line1"
              style={{
                display: "block",
                marginBottom: "1px",
                lineHeight: 1.3,
              }}
            >
              {data.title}
            </motion.span>

            <motion.span
              className="hero-section__title-word hero-section__title-word--line2"
              style={{
                display: "block",
                marginBottom: "1px",
                lineHeight: 1.3,
              }}
            >
              {data.titleLine2}
            </motion.span>

            <motion.span
              className="hero-section__title-word hero-section__title-word--line3"
              style={{
                display: "block",
                marginBottom: "1px",
                lineHeight: 1.3,
              }}
            >
              {data.titleLine3}
            </motion.span>
          </h1>

          <motion.div
            className="hero-section__divider"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <div className="hero-section__divider-line" />
            <div className="hero-section__divider-dot" />
            <div
              className="hero-section__divider-line"
              style={{ transform: "scaleX(-1)" }}
            />
          </motion.div>

          <motion.p
            className="hero-section__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            {data.subtitle}
          </motion.p>

          <motion.p
            className="hero-section__description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.8 }}
          >
            {data.description}
          </motion.p>

          <motion.button
            className="hero-section__scroll-btn"
            onClick={scrollToContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <span>Xem nội dung</span>
            <svg
              className="hero-section__scroll-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Right: illustration with glassmorphism */}
        <motion.div
          className="hero-section__image-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(107,91,149,0.2)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 16px 48px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              width: "100%",
              maxWidth: 800,
              position: "relative",
            }}
          >
            <ImagePlaceholder
              src={data.image}
              alt="Hero illustration"
              style={{ borderRadius: 0 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
