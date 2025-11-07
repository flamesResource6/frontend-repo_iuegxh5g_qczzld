import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F]/40 via-[#0A0F1F]/40 to-[#0A0F1F] pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#E0E6EE] drop-shadow-[0_0_12px_rgba(0,174,239,0.35)]"
          >
            Empowering Businesses with Innovative Digital Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="mt-4 max-w-2xl text-[#E0E6EE]/80"
          >
            Custom websites, advanced management systems, and tailored software solutions designed to help your business grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#00AEEF] text-white px-6 py-3 font-medium shadow-[0_0_24px_rgba(0,174,239,0.6)] hover:shadow-[0_0_36px_rgba(0,174,239,0.8)] transition-shadow"
            >
              Request a Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-[#00AEEF]/40 text-[#E0E6EE] px-6 py-3 font-medium hover:bg-[#001F3F]/40 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
