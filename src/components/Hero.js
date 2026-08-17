import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import i1 from '../assets/images/hero-section/innovating-biotech-1.jpg';
import i2 from '../assets/images/hero-section/innovating-biotech-2.jpg';
import i3 from '../assets/images/hero-section/innovating-biotech-3.jpg';
import bg from '../assets/images/hero-section/innovating-bg.jpg';
import hero1 from '../assets/images/hero-section/innovating-biotech-1.jpg';
import hero3 from '../assets/images/banner-quality-trust.jpg';
import hero2 from '../assets/images/banner-research.jpg';

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
          <AnimatePresence mode="wait">
            {index === 0 && (
              <motion.div key="small" className="hero-small-images" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
            )}

            {index === 1 && (
              <motion.img key="one" src={hero2} alt="hero-2" className="img-fluid hero-large" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.5 }} />
            )}

            {index === 2 && (
              <motion.div key="bg" className="hero-bg" style={{ backgroundImage: `url(${bg})` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <motion.img src={hero3} alt="hero-3" className="img-fluid hero-large" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
