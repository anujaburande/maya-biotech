import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero1 from '../assets/images/hero-1.svg';
import hero2 from '../assets/images/hero-2.svg';
import hero3 from '../assets/images/hero-3.svg';

// Hero section with simple slider (3 slides)
// - Left: heading and paragraph
// - Right: image
// - Slides auto-advance and animate using `framer-motion`
export default function Hero() {
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
    <section id="hero" className="lb-section lb-hero">
      <div className="lb-hero-inner">
        <div className="lb-hero-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="lb-hero-copy"
            >
              <h1>{slides[index].title}</h1>
              <p>{slides[index].text}</p>
            </motion.div>
          </AnimatePresence>

          <div className="lb-hero-controls">
            {slides.map((s, i) => (
              <button key={s.title} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
            ))}
          </div>
        </div>

        <div className="lb-hero-right">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].img}
              src={slides[index].img}
              alt="hero"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
