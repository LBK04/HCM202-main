import React from 'react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  frown: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  help: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
    </svg>
  ),
};

const SilenceReasonsSection = ({ data }) => {
  return (
    <section id="silence" className="presentation-section py-24 px-6">
      <div className="presentation-section__inner">

        {/* HEADER */}
        <motion.div
          className="presentation-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="presentation-section__label">{data.label}</div>

          <h2 className="presentation-section__title">
            {data.title}
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="silence-layout">

          {/* LEFT GRID */}
          <div className="silence-grid">
            {data.reasons.map((reason, i) => (
              <motion.div
                key={i}
                className="silence-card card-hover"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="silence-emoji">
                  {reason.emoji}
                </div>

                <div className="silence-icon">
                  {ICON_MAP[reason.icon] || ICON_MAP.help}
                </div>

                <div className="silence-title">
                  {reason.title}
                </div>

                <div className="silence-desc">
                  {reason.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="silence-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <IllustrationFrame src={data.image} alt="Vì sao im lặng" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const IllustrationFrame = ({ src, alt }) => {
  const [hasError, setHasError] = React.useState(false);

  if (!src || hasError) {
    return (
      <div className="illustration-frame large-image">
        <div className="illustration-frame__inner">
          <p>Thêm ảnh minh họa</p>
        </div>
      </div>
    );
  }

  return (
    <div className="illustration-frame large-image">
      <img src={src} alt={alt} onError={() => setHasError(true)} />
    </div>
  );
};

export default SilenceReasonsSection;