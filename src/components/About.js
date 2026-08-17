import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about.jpg';

// About section — left image is provided via CSS background; cards animate down on scroll
export default function About() {
  const cards = [
    { title: 'Mission', text: 'Deliver impactful biotech solutions.' },
    { title: 'Vision', text: 'Sustainable science, healthier lives.' },
    { title: 'Values', text: 'Integrity, innovation, collaboration.' }
  ];

  return (
    <section id="about" className="lb-section lb-about" style={{ backgroundImage: `url(${aboutImg})` }}>
      <div className="lb-about-inner container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="lb-about-right">
              <h2>About Maya Biotech</h2>
              <p>We combine research and ethics to build scalable biotech products.</p>

              <motion.div
                className="lb-about-cards d-flex justify-content-center"
                initial={{ y: -200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                {cards.map((c, idx) => (
                  <motion.div
                    key={c.title}
                    className="lb-card mx-2"
                    initial={{ x: 0 }}
                    animate={{ x: idx === 0 ? -16 : idx === 2 ? 16 : 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ y: -6 }}
                  >
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="lb-about-counters mt-4 d-flex justify-content-start">
                <Counter end={15} label="Years Exp" />
                <Counter end={500} label="Projects Completed" />
                <Counter end={50} label="Global Clients" />
              </div>
            </div>
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
    <div className="lb-counter mr-3" ref={ref}>
      <div className="lb-counter-value">{value}{end >= 100 ? '+' : ''}</div>
      <div className="lb-counter-label">{label}</div>
    </div>
  );
}

// AnimatedCard removed; cards animate together via parent motion div
