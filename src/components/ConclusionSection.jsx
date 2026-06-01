import React from 'react';
import { motion } from 'framer-motion';

const ConclusionSection = ({ data }) => {
  return (
    <section className="conclusion-section">
      {/* Background */}
      <div className="conclusion-section__bg primary-gradient-deep">
        <div className="ambient-orb" style={{ width: 700, height: 700, top: '5%', right: '-10%', background: '#b91c1c', animationDelay: '0s' }} />
        <div className="ambient-orb" style={{ width: 500, height: 500, bottom: '10%', left: '5%', background: '#8b0e14', animationDelay: '4s' }} />

        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(107,91,149,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107,91,149,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div style={{
        position: 'absolute', top: 40, left: 40, width: 100, height: 100,
        borderTop: '2px solid rgba(107,91,149,0.25)', borderLeft: '2px solid rgba(107,91,149,0.25)',
        borderTopLeftRadius: 16,
      }} />
      <div style={{
        position: 'absolute', bottom: 40, right: 40, width: 80, height: 80,
        borderBottom: '2px solid rgba(107,91,149,0.2)', borderRight: '2px solid rgba(107,91,149,0.2)',
        borderBottomRightRadius: 16,
      }} />

      <div className="conclusion-section__content">
        <motion.div
          className="conclusion-section__quote-mark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          "
        </motion.div>

        <motion.div
          className="presentation-section__label"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ marginBottom: 24 }}
        >
          {data.label}
        </motion.div>

        <h2 className="conclusion-section__title">
          <motion.span
            className="conclusion-section__title-line conclusion-section__title-line--line1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {data.titleLine1}
          </motion.span>
          <motion.span
            className="conclusion-section__title-line conclusion-section__title-line--line2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            {data.titleLine2}
          </motion.span>
          <motion.span
            className="conclusion-section__title-line conclusion-section__title-line--line3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {data.titleLine3}
          </motion.span>
        </h2>

        <motion.div
          className="conclusion-section__divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="conclusion-section__divider-line" />
          <div className="conclusion-section__divider-dot" />
          <div className="conclusion-section__divider-line" />
        </motion.div>

        <motion.p
          className="conclusion-section__message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {data.message}
        </motion.p>

        {/* Highlighted final message */}
        {data.highlight && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              marginTop: 32,
              padding: '20px 32px',
              borderRadius: 16,
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(107,91,149,0.25)',
              display: 'inline-block',
              maxWidth: 600,
            }}
          >
            <div style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(139,123,181,0.7)',
              marginBottom: 8,
            }}>
              Thông điệp
            </div>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.6,
              fontFamily: "'Lora', serif",
              fontStyle: 'italic',
            }}>
              "{data.highlight}"
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ConclusionSection;
