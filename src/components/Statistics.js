import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Statistics() {
  const stats = [
    { value: 1200, label: 'Tests Run' },
    { value: 320, label: 'Validated Assays' },
    { value: 98, label: 'Patents Filed' }
  ];

  return (
    <section id="impact" className="lb-section lb-impact">
      <div className="lb-container">
        <motion.div className="lb-impact-head" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2>Statistics & Impact</h2>
          <p>Measured outcomes from our research and product work.</p>
        </motion.div>

        <div className="lb-impact-grid">
          {stats.map((s) => (
            <StatCard key={s.label} end={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ end = 0, label = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1000 + Math.min(1200, end);
          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            setValue(Math.floor(t * end));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <motion.div className="lb-stat-card" ref={ref} whileHover={{ scale: 1.02 }}>
      <div className="lb-stat-value">{value}{end >= 100 ? '+' : ''}</div>
      <div className="lb-stat-label">{label}</div>
    </motion.div>
  );
}
