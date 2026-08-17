import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import i1 from '../assets/images/hero-section/innovating-biotech-1.svg';
import i2 from '../assets/images/hero-section/innovating-biotech-2.svg';
import i3 from '../assets/images/hero-section/innovating-biotech-3.svg';
import bg from '../assets/images/hero-section/innovating-bg.svg';

// Hero section with simple slider (3 slides)
// - Left: heading and paragraph
// - Right: image
// - Slides auto-advance and animate using `framer-motion`
export default function Hero({ onNavigate }) {
  const slides = [
    {
      title: 'Innovating Biotech',
      text: 'We build sustainable biotech solutions for a better tomorrow.',
      img: hero1
    },
    {
      title: 'Research & Development',
        text: 'Advanced R&D with expert teams and modern facilities.',
        img: hero2
    },
    {
      title: 'Quality & Trust',
        text: 'Committed to the highest standards and regulatory compliance.',
        img: hero3
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section id="hero" className="lb-section lb-hero container">
      <div className="lb-hero-inner row">
        <div className="lb-hero-left col-sm-12 col-md-6 col-lg-6 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="lb-hero-copy"
            >
              <h2>{slides[index].title}</h2>
              <p>{slides[index].text}</p>
              <div className="mt-3">
                <button className="lb-btn lb-btn-secondary" onClick={() => onNavigate && onNavigate('about')}>More details</button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="lb-hero-controls">
            {slides.map((s, i) => (
              <button key={s.title} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
            ))}
          </div>
        </div>

        <div className="lb-hero-right col-sm-12 col-md-6 col-lg-6">
          <div className="hero-bg" style={{ backgroundImage: `url(${bg})` }}>
            <AnimatePresence mode="wait">
              <motion.div key={index} className="hero-small-images" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {[i1, i2, i3].map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`hero-small-${i}`}
                    className="img-fluid hero-small"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.15, duration: 0.5 }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
