import React from 'react';
import { motion } from 'framer-motion';

// Services section
// - Renders animated service cards
export default function Services() {
  const services = [
    { title: 'Biotech Consulting', desc: 'Strategy and compliance.' },
    { title: 'Laboratory Services', desc: 'R&D and testing.' },
    { title: 'Custom Solutions', desc: 'Tailored product development.' }
  ];

  return (
    <section id="services" className="lb-section lb-services">
      <div className="lb-section-header">
        <h2>Our Services</h2>
        <p>Practical, research-backed services for your needs.</p>
      </div>

      <div className="lb-services-grid">
        {services.map((s) => (
              <motion.div className="lb-service-card" key={s.title} whileHover={{ scale: 1.03 }} whileInView={{ y: [40, 0], opacity: [0, 1] }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
            <div className="icon">🔬</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
