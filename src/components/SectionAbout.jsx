import { motion } from 'framer-motion';

export default function SectionAbout() {
  return (
    <section id="about" className="relative py-24 bg-[#0A0F1F] text-[#E0E6EE]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[#00AEEF]/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-[#003C7E]/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-[#E0E6EE]/80">
            Nova Digital Solution delivers innovative technology solutions that enhance business performance and user experience. We combine creativity, expertise, and cutting-edge tools to craft digital excellence.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-[#00AEEF] font-semibold">Vision</div>
              <p className="mt-1 text-[#E0E6EE]/80">To become a leading digital solutions provider in Ethiopia and beyond, recognized for innovation, reliability, and exceptional client service.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-[#00AEEF] font-semibold">Mission</div>
              <p className="mt-1 text-[#E0E6EE]/80">To provide high-quality, tailored digital solutions that help clients achieve their goals and optimize operations.</p>
            </div>
          </div>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {['Innovation', 'Quality', 'Client Focus', 'Integrity', 'Collaboration', 'Reliability'].map((v) => (
            <li key={v} className="p-4 rounded-lg bg-gradient-to-br from-[#001F3F]/40 to-[#003C7E]/30 border border-white/10 shadow-[inset_0_0_20px_rgba(0,174,239,0.15)]">
              <span className="text-sm font-medium">{v}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
