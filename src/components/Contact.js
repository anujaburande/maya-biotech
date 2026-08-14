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
      <div className="lb-contact-inner">
        <motion.div className="lb-contact-left" initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <h2>Contact Us</h2>
          <p>Reach out to discuss projects, partnerships or careers.</p>
          <p><strong>Email:</strong> hello@mayabiotech.example</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        </motion.div>

        <motion.div className="lb-contact-right" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <form onSubmit={handleSubmit} className="lb-contact-form">
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Message
              <textarea name="message" value={form.message} onChange={handleChange} required />
            </label>
            <button type="submit">Send</button>
            {sent && <div className="lb-form-sent">Thanks — message queued (demo).</div>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
