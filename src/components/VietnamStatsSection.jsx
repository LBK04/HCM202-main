import React from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const STAT_ICON_MAP = {
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  percent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    </svg>
  ),
  trendingUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

const VietnamStatsSection = ({ data }) => {
  return (
    <section id="vietnam" className="presentation-section py-24 px-6">
      <div className="presentation-section__inner">

        {/* HEADER */}
        <motion.div
          className="presentation-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="presentation-section__label"
            style={{
              color: '#b91c1c',
              borderColor: 'rgba(193,18,31,0.4)',
              background: 'rgba(193,18,31,0.08)'
            }}
          >
            {data.label}
          </div>

          <h2 className="presentation-section__title" style={{ color: '#000' }}>
            {data.title}
          </h2>
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {data.highlightStats.map((stat, i) => (
            <motion.div
              key={i}
              className="card-hover"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '24px',
                borderRadius: 20,
                background: 'rgba(255,255,255,0.98)',
                border: '1px solid rgba(15,23,42,0.06)',
                textAlign: 'center',
                cursor: 'default',
              }}
            >

              {/* ICON */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  margin: '0 auto 12px',
                  background:
                    'linear-gradient(135deg, rgba(185,28,28,0.12), rgba(255,255,255,0.6))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#b91c1c',
                }}
              >
                <div style={{ width: 22, height: 22 }}>
                  {STAT_ICON_MAP[stat.icon] || STAT_ICON_MAP.target}
                </div>
              </div>

              {/* NUMBER */}
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#0f172a',
                  marginBottom: 6,
                }}
              >
                {stat.number}
              </div>

              {/* LABEL */}
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#8b0e14',
                  marginBottom: 6,
                }}
              >
                {stat.label}
              </div>

              {/* SUB */}
              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  lineHeight: 1.5,
                  marginBottom: 12,
                }}
              >
                {stat.sub}
              </div>

              {/* IMAGE (NEW) */}
              {stat.image && (
                <div
                  style={{
                    width: '100%',
                    height: 140,   // 👈 ảnh to hơn
                    borderRadius: 16,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={stat.image}
                    alt={stat.label}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VietnamStatsSection;