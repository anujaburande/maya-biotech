import React from 'react';
import { motion } from 'framer-motion';

// Expertise section
// - Left: title + description
// - Right: animated expertise badges (vertical stack) that float up/down slowly
export default function Expertise() {
  const items = [
    { id: 'molecular', label: 'Molecular Biology' },
    { id: 'bioinfo', label: 'Bioinformatics' },
    { id: 'clinical', label: 'Clinical Research' },
    { id: 'regulatory', label: 'Regulatory Strategy' }
  ];

  return (
    <section id="expertise" className="lb-section lb-expertise">
      <div className="container">
        <div className="lb-expertise-inner row">
          <div className="lb-expertise-left col-sm-12 col-md-6 col-lg-6">
            <div className="expertise-orbit" role="img" aria-label="expertise orbit">
              <div className="expertise-orbit-inner">
                {/* center logo (static) */}
                <div className="expertise-center brand-mark">
                  <p className="expertise-center-mark">MB</p>
                </div>

                {/* For each item render a connector (from center) and a badge container at the target position.
                    Connectors and badges share the same vertical animation so they stay visually connected. */}
                {(() => {
                  const targets = [
                    { left: 0, top: 10},
                    { left: 60, top: 10 },
                    { left: 0, top: 82 },
                    { left: 60, top: 82 }
                  ];

                  return items.map((it, idx) => {
                    const { left, top } = targets[idx];
                    const yAnim = [0, -10, 0];
                    return (
                      <React.Fragment key={it.id}>
                        <motion.div
                          className="expertise-badge orbit-item"
                          style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-30%, -30%)' }}
                          animate={{ y: yAnim }}
                          transition={{ duration: 4 + idx * 0.3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.08 }}
                        >
                          <div className="expertise-badge-inner">{it.label}</div>
                        </motion.div>
                      </React.Fragment>
                    );
                  });
                })()}
              </div>
            </div>

          </div>

          <div className="lb-expertise-right col-sm-12 col-md-6 col-lg-6">
          <h2>Our Expertise</h2>
          <p>Deep domain knowledge across multiple biotech disciplines, from lab research to regulatory strategy. We combine scientific rigor with practical implementation to support product development and clinical validation.</p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
