import React from 'react';
import { motion } from 'framer-motion';

const LawTimelineSection = ({ data }) => {
  return (
    <section id="law" className="presentation-section py-24 px-6" style={{ background: 'transparent' }}>
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

        <div className="timeline">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="timeline-item__dot" />
              <div className="timeline-item__year" style={{ color: '#0f172a', fontWeight: 800 }}>
                {item.year}
              </div>
              <div className="timeline-item__title" style={{ color: '#111827', fontWeight: 700 }}>
                {item.title}
              </div>
              <div className="timeline-item__desc" style={{ color: 'rgba(15,23,42,0.75)' }}>
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawTimelineSection;
