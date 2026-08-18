import React from 'react';
import { motion } from 'framer-motion';

// Expertise section
// - Left: title + description
// - Right: animated expertise badges (vertical stack) that float up/down slowly
export default function Expertise() {
  const items = [
    { id: 'molecular', label: 'Molecular Biology' },
    { id: 'bioinfo', label: 'Bioinformatics' },
    { id: 'clinical', label: 'Clinical Research' },
    { id: 'regulatory', label: 'Regulatory Strategy' }
  ];

  return (
    <section id="expertise" className="lb-section lb-expertise">
      <div className="lb-expertise-inner">
        <div className="lb-expertise-left">
          <motion.div
            className="expertise-orbit"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              className="expertise-orbit-inner"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            >
              {/* center logo */}
              <div className="expertise-center">
                <div className="expertise-center-mark">M</div>
              </div>

              {/* badges positioned around the center (absolute) */}
              {(() => {
                const angles = [-30, -120, -210, -300];
                const radius = 40; // percent of container
                return items.map((it, idx) => {
                  const a = (angles[idx] * Math.PI) / 180;
                  const left = 50 + radius * Math.cos(a);
                  const top = 50 + radius * Math.sin(a);
                  const duration = 18 + idx * 1.2;
                  return (
                    <motion.div
                      className="expertise-badge orbit-item"
                      key={it.id}
                      style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: idx * 0.12 }}
                      animate={{ rotate: 360 }}
                      // counter-rotate to keep badge text upright as parent rotates
                      {...{ transition: { duration, ease: 'linear', repeat: Infinity } }}
                    >
                      {it.label}
                    </motion.div>
                  );
                });
              })()}
            </motion.div>
          </motion.div>
        </div>

        <div className="lb-expertise-right">
          <h2>Our Expertise</h2>
          <p>Deep domain knowledge across multiple biotech disciplines, from lab research to regulatory strategy. We combine scientific rigor with practical implementation to support product development and clinical validation.</p>
        </div>
      </div>
    </section>
  );
}
