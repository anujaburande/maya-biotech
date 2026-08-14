import React, { useEffect, useRef, useState } from 'react';
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

          <div className="lb-about-counters">
            <Counter end={15} label="Years Exp" />
            <Counter end={500} label="Projects Completed" />
            <Counter end={50} label="Global Clients" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ end = 0, label = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const duration = 1200;
          const start = performance.now();
          const from = 0;
          const to = end;
          const step = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = t;
            setValue(Math.floor(from + (to - from) * eased));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="lb-counter" ref={ref}>
      <div className="lb-counter-value">{value}{end >= 100 ? '+' : ''}</div>
      <div className="lb-counter-label">{label}</div>
    </div>
  );
}
