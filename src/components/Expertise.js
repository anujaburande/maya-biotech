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
          <h2>Our Expertise</h2>
          <p>Deep domain knowledge across multiple biotech disciplines, from lab research to regulatory strategy. We combine scientific rigor with practical implementation to support product development and clinical validation.</p>
        </div>

        <div className="lb-expertise-right">
          {items.map((it, idx) => (
            <motion.div
              className="expertise-badge"
              key={it.id}
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: [0, -30, 0] }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 4 + idx * 0.4, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop', delay: idx * 0.15 }}
            >
              {it.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
