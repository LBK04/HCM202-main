import React from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const POLICY_ICON_MAP = {
  barChart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 11-5.8-1.6" />
    </svg>
  ),
  heartOff: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
};

const PolicyGapSection = ({ data }) => {
  return (
    <section id="policy" className="presentation-section py-24 px-6" style={{ background: 'transparent' }}>
      <div className="presentation-section__inner">
        <motion.div
          className="presentation-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="presentation-section__label">{data.label}</div>
          <h2 className="presentation-section__title" style={{ color: '#000000' }}>{data.title}</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          {/* 3 Gap Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {data.items.map((item, i) => (
              <motion.div
                key={i}
                className="card-hover"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  padding: '24px 28px',
                  borderRadius: 20,
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(107,91,149,0.2)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'linear-gradient(135deg, rgba(193,18,31,0.25), rgba(139,14,20,0.15))',
                  border: '1px solid rgba(193,18,31,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  color: '#b91c1c',
                }}>
                  <div style={{ width: 24, height: 24 }}>
                    {POLICY_ICON_MAP[item.icon] || POLICY_ICON_MAP.barChart}
                  </div>
                </div>

                <div>
                  <div style={{
                    fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: 6,
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontSize: '0.9rem', color: 'rgba(15,23,42,0.75)', lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <ImagePlaceholder
              src={data.image}
              alt="Khoảng trống chính sách"
              style={{ width: '100%', maxWidth: 420 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PolicyGapSection;
