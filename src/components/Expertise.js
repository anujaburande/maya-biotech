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
      <div className="lb-expertise-inner">
        <div className="lb-expertise-left">
          <div className="expertise-orbit" role="img" aria-label="expertise orbit">
            <div className="expertise-orbit-inner">
              {/* center logo (static) */}
              <div className="expertise-center brand-mark">
                <div className="expertise-center-mark">MB</div>
              </div>

              {/* For each item render a connector (from center) and a badge container at the target position.
                  Connectors and badges share the same vertical animation so they stay visually connected. */}
              {(() => {
                const angles = [-30, -120, -210, -300];
                const radius = 40; // percent of container
                return items.map((it, idx) => {
                  const a = (angles[idx] * Math.PI) / 180;
                  const left = 50 + radius * Math.cos(a);
                  const top = 50 + radius * Math.sin(a);
                  const dx = left - 50;
                  const dy = top - 50;
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  // badge vertical oscillation (±30px -> 60px total)
                  const yAnim = [0, -30, 0];
                  return (
                    <React.Fragment key={it.id}>
                      <motion.div
                        className="connector"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        animate={{ y: yAnim }}
                        transition={{ duration: 4 + idx * 0.3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.08 }}
                        style={{ left: '50%', top: '50%', width: `${distance}%`, transformOrigin: 'left center', transform: `translate(-0%, -50%) rotate(${angles[idx]}deg)` }}
                      >
                        <span className="connector-arrow" />
                      </motion.div>

                      <motion.div
                        className="expertise-badge orbit-item"
                        style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
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

        <div className="lb-expertise-right">
          <h2>Our Expertise</h2>
          <p>Deep domain knowledge across multiple biotech disciplines, from lab research to regulatory strategy. We combine scientific rigor with practical implementation to support product development and clinical validation.</p>
        </div>
      </div>
    </section>
  );
}
