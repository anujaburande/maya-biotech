import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Contact section
// - Left: content / contact info
// - Right: basic contact form (no backend) with client-side validation
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder — integrate your API here
    console.log('Contact form submitted', form);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="lb-section lb-contact">
      <div className="container lb-container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="lb-contact-inner">
              <motion.div className="lb-contact-left" initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                <h2>Contact Us</h2>
                <p>Reach out to discuss projects, partnerships or careers.</p>
                <p><strong>Email:</strong> hello@mayabiotech.example</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </motion.div>

              
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <motion.div className="lb-contact-right" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
              <form onSubmit={handleSubmit} className="lb-contact-form">
                <div className="lb-contact-field">
                  <label htmlFor="contact-name" className="lb-contact-label">Name</label>
                  <input id="contact-name" className="lb-contact-input" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>

                <div className="lb-contact-field">
                  <label htmlFor="contact-email" className="lb-contact-label">Email</label>
                  <input id="contact-email" className="lb-contact-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>

                <div className="lb-contact-field">
                  <label htmlFor="contact-message" className="lb-contact-label">Message</label>
                  <textarea id="contact-message" className="lb-contact-input lb-contact-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project" required />
                </div>

                <button type="submit" className="btn lb-contact-submit">Send</button>
                {sent && <div className="lb-form-sent">Thanks — message queued (demo).</div>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
