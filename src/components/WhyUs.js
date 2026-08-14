import React from 'react';
import { motion } from 'framer-motion';

// WhyUs section
// - Shows milestones and uniqueness points with entrance animations
export default function WhyUs() {
  const milestones = [
    { year: '2015', text: 'Founded with research-first mindset' },
    { year: '2018', text: 'Launched first commercial assay' },
    { year: '2021', text: 'Scaled labs and global partnerships' }
  ];

  const unique = [
    'Cross-disciplinary teams',
    'Regulatory-first product design',
    'Sustainable manufacturing focus'
  ];

  return (
    <section id="whyus" className="lb-section lb-whyus">
      <div className="lb-container">
        <motion.div className="lb-whyus-head" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2>Why Choose Maya Biotech</h2>
          <p>Milestones that shaped our journey and what makes us unique.</p>
        </motion.div>

        <div className="lb-whyus-body">
          <div className="lb-milestones">
            {milestones.map((m) => (
              <motion.div key={m.year} className="lb-milestone" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="year">{m.year}</div>
                <div className="txt">{m.text}</div>
              </motion.div>
            ))}
          </div>

          <div className="lb-unique">
            {unique.map((u) => (
              <motion.div key={u} className="lb-unique-item" whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                {u}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
