import React from 'react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

const YouthResponsibilitySection = ({ data }) => {
  return (
    <section id="youth" className="presentation-section py-24 px-6" style={{ background: 'transparent' }}>
      <div className="presentation-section__inner">
        <motion.div
          className="presentation-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="presentation-section__label">{data.label}</div>
          <h2 className="presentation-section__title" style={{ color: '#0f172a' }}>{data.title}</h2>
        </motion.div>

        <div className="youth-grid">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              className="youth-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="youth-card__number">{card.number}</div>
              <div className="youth-card__icon-wrap">
                <div className="youth-card__icon">
                  {ICON_MAP[card.icon] || ICON_MAP.eye}
                </div>
              </div>
              <div className="youth-card__title">{card.title}</div>
              <div className="youth-card__desc">{card.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouthResponsibilitySection;
