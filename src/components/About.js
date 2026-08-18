import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/about.jpg';

// About section — left image is provided via CSS background; cards animate down on scroll
export default function About() {
  const cards = [
    { title: 'Mission', text: 'Deliver impactful biotech solutions.' },
    { title: 'Vision', text: 'Sustainable science, healthier lives.' },
    { title: 'Values', text: 'Integrity, innovation, collaboration.' }
  ];

  const [xTargets, setXTargets] = useState([-60, 0, 60]);
  const [yStart, setYStart] = useState(-200);

  useEffect(() => {
    const apply = () => {
      const w = window.innerWidth;
      if (w <= 480) {
        // small phones
        setXTargets([-30, 0, 30]);
        setYStart(-100);
      } else if (w <= 820) {
        // larger phones / small tablets
        setXTargets([-60, 0, 60]);
        setYStart(-120);
      } else if (w <= 1200) {
        // laptops / medium screens - reduced spread
        setXTargets([-90, 0, 90]);
        setYStart(-160);
      } else {
        // large desktops
        setXTargets([-120, 0, 120]);
        setYStart(-200);
      }
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  return (
    <section id="about" className="lb-section lb-about">
      <div className="lb-about-inner container">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="lb-about-right">
              <h2>About Maya Biotech</h2>
              <p>We combine research and ethics to build scalable biotech products.</p>

              <div className="lb-about-cards row justify-content-center">
                {cards.map((c, idx) => (
                  <div key={c.title} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3">
                    <motion.div
                      className="lb-card"
                      initial={{ y: yStart, x: 0, opacity: 0 }}
                      whileInView={{ y: 0, x: xTargets[idx], opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.06 * idx }}
                      whileHover={{ y: -6 }}
                    >
                      <h4>{c.title}</h4>
                      <p>{c.text}</p>
                    </motion.div>
                  </div>
                ))}
              </div>

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
