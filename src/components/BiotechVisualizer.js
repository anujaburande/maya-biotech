import React from 'react';
import { motion } from 'framer-motion';

// Chromosome-inspired biotech visual: animated double-helix with moving nodes
export default function BiotechVisualizer() {
  const helixPoints = Array.from({ length: 11 }, (_, i) => {
    const x = 35 + i * 48;
    const y1 = 78 + Math.sin(i * 0.8) * 26;
    const y2 = 122 + Math.sin(i * 0.8 + Math.PI) * 26;
    return { x, y1, y2 };
  });

  return (
    <section id="visual" className="lb-section lb-visual">
      <div className="container lb-container">
        <motion.div className="visual-wrap row" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="col-sm-12 col-md-7 col-lg-7">
            <svg viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet" className="helix">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="var(--primary)" />
                  <stop offset="0.5" stopColor="#5bc0ff" />
                  <stop offset="1" stopColor="var(--secondary)" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0" stopColor="#1a2f6d" />
                  <stop offset="1" stopColor="#6a8de8" />
                </linearGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="rgba(38, 84, 180, 0.35)" />
                </filter>
              </defs>

              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <motion.path
                  d={helixPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y1}`).join(' ')}
                  fill="none"
                  stroke="url(#g1)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  filter="url(#softGlow)"
                  animate={{ pathLength: [0.35, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.path
                  d={helixPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y1}`).join(' ')}
                  fill="none"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  animate={{ pathLength: [0.2, 1, 0.7] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                />

                <motion.path
                  d={helixPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y2}`).join(' ')}
                  fill="none"
                  stroke="url(#g2)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  filter="url(#softGlow)"
                  animate={{ pathLength: [0.8, 1, 0.45] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                />

                {helixPoints.map((point, i) => (
                  <g key={i}>
                    <motion.line
                      x1={point.x}
                      y1={point.y1}
                      x2={point.x}
                      y2={point.y2}
                      stroke="rgba(18, 55, 118, 0.22)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      animate={{ opacity: [0.15, 0.85, 0.22] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                    />

                    <motion.circle
                      cx={point.x}
                      cy={point.y1}
                      r={11}
                      fill="url(#g1)"
                      stroke="rgba(255,255,255,0.9)"
                      strokeWidth="2"
                      animate={{ cy: [point.y1, point.y1 - 12, point.y1 + 8, point.y1], scale: [1, 1.1, 0.96, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                    />

                    <motion.circle
                      cx={point.x}
                      cy={point.y2}
                      r={10}
                      fill="rgba(255,255,255,0.9)"
                      stroke="rgba(19,52,101,0.7)"
                      strokeWidth="2.6"
                      animate={{ cy: [point.y2, point.y2 + 14, point.y2 - 8, point.y2], scale: [1, 1.12, 0.94, 1] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                    />
                  </g>
                ))}
              </motion.g>
            </svg>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 visual-copy">
            <h2>Interactive Lab Visual</h2>
            <p>Explore how our platform models molecular interactions in real-time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
