import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SectionContact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Message sent! We will get back to you soon.'), 900);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0A0F1F] text-[#E0E6EE]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 left-1/3 w-72 h-72 rounded-full bg-[#003C7E]/20 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 w-72 h-72 rounded-full bg-[#00AEEF]/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Contact Us</h2>
          <p className="mt-3 text-[#E0E6EE]/80 max-w-xl">
            Have a project in mind? Let’s bring it to life. Reach out to Nova Digital Solution for professional and innovative digital solutions.
          </p>
          <div className="mt-6 space-y-2 text-[#E0E6EE]/80">
            <p>Email: info@novadigitalsolution.com</p>
            <p>Phone: +251 XX XXX XXXX</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input required type="text" className="w-full rounded-md bg-[#001F3F]/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00AEEF]" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input required type="email" className="w-full rounded-md bg-[#001F3F]/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00AEEF]" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea required rows={5} className="w-full rounded-md bg-[#001F3F]/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00AEEF]" />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-[#00AEEF] text-white px-6 py-3 font-medium shadow-[0_0_24px_rgba(0,174,239,0.6)] hover:shadow-[0_0_36px_rgba(0,174,239,0.8)] transition-shadow">
            Send Message
          </button>
          {status && <p className="mt-3 text-sm text-[#E0E6EE]/80">{status}</p>}
        </motion.form>
      </div>

      <footer className="mt-20 text-center text-xs text-[#E0E6EE]/60">
        © 2025 Nova Digital Solution. All rights reserved.
      </footer>
    </section>
  );
}
