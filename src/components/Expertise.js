import React from 'react';
import { motion } from 'framer-motion';

// Expertise section
// - Left shows an animated logo/mark
// - Right lists expertise items
// - Container has subtle shadow from top and bottom
export default function Expertise() {
  const items = ['Molecular Biology', 'Bioinformatics', 'Clinical Research', 'Regulatory Strategy'];

  return (
    <section id="expertise" className="lb-section lb-expertise">
      <div className="lb-expertise-inner">
        <motion.div className="lb-expertise-left" initial={{ rotate: 0 }} whileInView={{ rotate: 360 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
          <svg width="120" height="120" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="#6c63ff" opacity="0.9" />
            <text x="50" y="55" fontSize="16" fill="#fff" textAnchor="middle">MB</text>
          </svg>
        </motion.div>

        <div className="lb-expertise-right">
          <h2>Our Expertise</h2>
          <p>Deep domain knowledge across multiple biotech disciplines.</p>
          <ul>
            {items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
