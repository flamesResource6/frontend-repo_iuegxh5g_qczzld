import { motion } from 'framer-motion';

const services = [
  'Custom Website Design & Development',
  'System Design & Implementation',
  'Software & Programming Solutions',
  'Digital Automation Tools',
  'Consulting & Implementation Services',
];

export default function SectionServices() {
  return (
    <section id="services" className="relative py-24 bg-[#0A0F1F] text-[#E0E6EE]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
        <p className="mt-2 text-[#E0E6EE]/80 max-w-2xl">We craft solutions that scale with your business, combining modern design with robust engineering.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#003C7E]/10 to-[#00AEEF]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#00AEEF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <h3 className="relative z-10 font-semibold text-lg">{item}</h3>
              <p className="relative z-10 mt-2 text-sm text-[#E0E6EE]/75">Interactive 3D holographic cards that tilt and glow on hover.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
