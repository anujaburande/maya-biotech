import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA({ onContact }) {
  return (
    <section className="lb-section lb-cta-final">
      <div className="lb-container">
        <motion.div className="lb-cta-inner" initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3>Ready to collaborate?</h3>
          <p>Partner with Maya Biotech to accelerate scientific impact and product delivery.</p>
          <div className="lb-cta-actions">
            <button className="lb-btn lb-btn-primary" onClick={() => onContact && onContact()}>Get in touch</button>
            <button className="lb-btn lb-btn-ghost">Explore our work</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
