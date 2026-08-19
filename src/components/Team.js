import React from 'react';
import { motion } from 'framer-motion';
import member1 from '../assets/images/doctor-1.JPG';

// Our Team section
// - Displays team member cards with subtle animations
export default function Team() {
  const members = [
    { name: 'Dr. Alex Jeff', role: 'Head of R&D', img: member1 },
    { name: 'Rahul Mehta', role: 'Lead Engineer', img: member1 },
    { name: 'Veena Kulkarni', role: 'Product Director', img: member1 }
  ];

  return (
    <section id="team" className="lb-section lb-team">
      <div className="container lb-container">
        <div className="row">
          <div className="col-12">
            <motion.div className="lb-team-head" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2>Our Team</h2>
              <p>People who turn ideas into impact.</p>
            </motion.div>
          </div>
        </div>

        <div className="row">
          {members.map((m) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={m.name}>
              <motion.div className="team-card" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.03 }}>
                <img src={m.img} alt={m.name} className="img-fluid" />
                <div className="team-info">
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
