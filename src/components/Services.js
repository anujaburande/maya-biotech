import React, { useState } from 'react';

import s1 from '../assets/images/banner-research.jpg';
import s2 from '../assets/images/banner-quality-trust.jpg';
import s3 from '../assets/images/hero-section/innovating-biotech-1.jpg';
import s4 from '../assets/images/clinical-trial.JPG';

export default function Services() {
  const cards = [
    { id: 's1', img: s1, title: 'Research' , text: 'Advanced research capabilities and lab services.'},
    { id: 's2', img: s2, title: 'Quality & Trust', text: 'Regulatory compliance and quality assurance.'},
    { id: 's3', img: s3, title: 'Innovations', text: 'Product development and prototyping services.'},
    { id: 's4', img: s4, title: 'Clinical Trials', text: 'Clinical trial design and management.'}
  ];

  const [flipped, setFlipped] = useState({});

  const toggle = (id) => {
    setFlipped((s) => ({ ...s, [id]: !s[id] }));
  };

  return (
    <section id="services" className="lb-section lb-services">
      <div className="lb-section-header">
        <h2>Our Services</h2>
      </div>
      <div className="container">
        <div className="row">
          {cards.slice(0,4).map((c) => (
            <div key={c.id} className="col-12 col-sm-6 col-lg-3 mb-4 d-flex justify-content-center">
              <div className={`service-card ${flipped[c.id] ? 'is-flipped' : ''}`} onClick={() => toggle(c.id)} onMouseEnter={() => {} }>
                <div className="service-card-inner">
                  <div className="service-card-front" style={{ backgroundImage: `url(${c.img})` }}>
                    <div className="service-card-label">{c.title}</div>
                  </div>
                  <div className="service-card-back">
                    <div className="service-card-back-inner">
                      <h4>{c.title}</h4>
                      <p>{c.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

