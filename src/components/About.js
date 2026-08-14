import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about.svg';

// About section
// - Left: animated illustration (image)
// - Right: heading, paragraph and small cards
export default function About() {
  const cards = [
    { title: 'Mission', text: 'Deliver impactful biotech solutions.' },
    { title: 'Vision', text: 'Sustainable science, healthier lives.' },
    { title: 'Values', text: 'Integrity, innovation, collaboration.' }
  ];

  return (
    <section id="about" className="lb-section lb-about">
      <div className="lb-about-inner">
        <motion.div className="lb-about-left" initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <img src={aboutImg} alt="about" />
        </motion.div>

        <div className="lb-about-right">
          <h2>About Maya Biotech</h2>
          <p>We combine research and ethics to build scalable biotech products.</p>

          <div className="lb-about-cards">
            {cards.map((c) => (
              <motion.div key={c.title} className="lb-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
