import React from 'react';
import { motion } from 'framer-motion';

// Simple interactive biotech visual: animated helix-like SVG nodes
export default function BiotechVisualizer() {
  return (
    <section id="visual" className="lb-section lb-visual">
      <div className="lb-container">
        <motion.div className="visual-wrap" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <svg viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet" className="helix">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--secondary)" />
              </linearGradient>
            </defs>
            {[...Array(10)].map((_, i) => (
              <motion.circle key={i}
                cx={40 + i * 52}
                cy={100 + Math.sin(i / 1.5) * 36}
                r={12}
                fill="url(#g1)"
                initial={{ scale: 0.6, opacity: 0.6 }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              />
            ))}
          </svg>
          <div className="visual-copy">
            <h3>Interactive Lab Visual</h3>
            <p>Explore how our platform models molecular interactions in real-time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
