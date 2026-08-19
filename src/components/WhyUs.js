import React from 'react';
import { motion } from 'framer-motion';

// WhyUs section
// - Shows milestones and uniqueness points with entrance animations
export default function WhyUs() {
  const milestones = [
    { year: '2015', text: 'Founded with research-first mindset', progress: 35 },
    { year: '2018', text: 'Launched first commercial assay', progress: 68 },
    { year: '2021', text: 'Scaled labs and global partnerships', progress: 100 }
  ];

  const unique = [
    'Cross-disciplinary teams',
    'Regulatory-first product design',
    'Sustainable manufacturing focus'
  ];

  return (
    <section id="whyus" className="lb-section lb-whyus">
      <div className="container lb-container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <motion.div className="lb-whyus-head" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2>Why Choose Maya Biotech</h2>
              <p>Milestones that shaped our journey and what makes us unique.</p>
            </motion.div>
          </div>
        </div>

        <div className="row lb-whyus-body">
          <div className="col-sm-12 col-md-6 col-lg-6 lb-milestones">
            {milestones.map((m) => (
              <motion.div key={m.year} className="lb-milestone" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="year-progress">
                  <div className="year">{m.year}</div>
                  <div className="year-bar" aria-label={`${m.year} progress`}>
                    <span style={{ width: `${m.progress}%` }} />
                  </div>
                </div>
                <div className="txt">{m.text}</div>
              </motion.div>
            ))}
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 lb-unique">
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
