import React from 'react';
import { motion } from 'framer-motion';
import member1 from '../assets/images/team-member-1.svg';
import member2 from '../assets/images/team-member-2.svg';
import member3 from '../assets/images/team-member-3.svg';

// Our Team section
// - Displays team member cards with subtle animations
export default function Team() {
  const members = [
    { name: 'Dr. Asha Rao', role: 'Head of R&D', img: member1 },
    { name: 'Rahul Mehta', role: 'Lead Engineer', img: member2 },
    { name: 'Sana Kulkarni', role: 'Product Director', img: member3 }
  ];

  return (
    <section id="team" className="lb-section lb-team">
      <div className="lb-container">
        <motion.div className="lb-team-head" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2>Our Team</h2>
          <p>People who turn ideas into impact.</p>
        </motion.div>

        <div className="team-grid">
          {members.map((m) => (
            <motion.div key={m.name} className="team-card" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.03 }}>
              <img src={m.img} alt={m.name} />
              <div className="team-info">
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
