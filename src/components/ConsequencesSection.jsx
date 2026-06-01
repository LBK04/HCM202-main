import React from 'react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  ),

 heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),

  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 3c-2 0-3.5 1.5-3.5 3.5C5 8 5.5 9 6 10c-1 1-1.5 2.5-1 4 1 2 3 2.5 4.5 2.5" />
      <path d="M15 3c2 0 3.5 1.5 3.5 3.5C19 8 18.5 9 18 10c1 1 1.5 2.5 1 4-1 2-3 2.5-4.5 2.5" />
      <path d="M8 14v3a3 3 0 0 0 6 0v-3" />
    </svg>
  ),

  shield: (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path
      d="M12 2L20 6V12C20 16.5 16.7 20.2 12 22C7.3 20.2 4 16.5 4 12V6L12 2Z"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M12 6V22"
      strokeLinecap="round"
    />
    <path
      d="M8 10H16"
      strokeLinecap="round"
    />
  </svg>
),
};

const ConsequencesSection = ({ data }) => {
  return (
    <section
      id="consequences"
      className="presentation-section py-24 px-6"
      style={{ background: 'transparent' }}
    >
      <div className="presentation-section__inner max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm uppercase tracking-wider text-slate-500 mb-2">
            {data.label}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {data.title}
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-100 mb-4 text-slate-700">
                {ICON_MAP[item.icon] || ICON_MAP.frown}
              </div>

              {/* TITLE */}
              <div className="font-semibold text-slate-900 text-base">
                {item.title}
              </div>

              {/* DESC */}
              {item.desc && (
                <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;