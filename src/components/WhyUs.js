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
    { title: 'Cross-disciplinary teams', text: 'Scientist, regulators, and product thinkers aligned from day one.' },
    { title: 'Regulatory-first product design', text: 'Strategy built for faster market readiness and compliance confidence.' },
    { title: 'Sustainable manufacturing focus', text: 'Practical innovation that scales without compromising quality.' }
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
            {milestones.map((m, index) => (
              <motion.div
                key={m.year}
                className="lb-milestone"
                initial={{ y: 30, opacity: 0, scale: 0.96 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ x: 8, scale: 1.01 }}
              >
                <div className="year-progress">
                  <div className="year">{m.year}</div>
                  <div className="year-bar" aria-label={`${m.year} progress`}>
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.15 }}
                    />
                  </div>
                </div>
                <div className="txt">{m.text}</div>
              </motion.div>
            ))}
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 lb-unique">
            {unique.map((u, index) => (
              <motion.div
                key={u.title}
                className="lb-unique-item"
                initial={{ y: 24, opacity: 0, scale: 0.97 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <span className="lb-unique-badge">0{index + 1}</span>
                <div className="lb-unique-copy">
                  <h4>{u.title}</h4>
                  <p>{u.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
