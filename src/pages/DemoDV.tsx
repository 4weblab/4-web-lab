import { motion } from 'framer-motion';
import { ArrowRight, Zap, Eye, ScanLine, Package, Microscope, Factory, FlaskConical, Leaf, Palette, Settings, ChevronDown } from 'lucide-react';

import logoDv from '@/assets/logo_dv.webp';
import heroBg from '@/assets/dv-hero.webp';
import laserImg from '@/assets/dv-laser.webp';
import spectroImg from '@/assets/dv-spectroscopy.webp';
import scanImg from '@/assets/dv-3dscan.webp';

/* ─── animation helpers ─── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const section = "scroll-mt-20";

/* ─── data ─── */
const technologies = [
  {
    title: 'Laser Systems',
    img: laserImg,
    bullets: ['Industrial engraving', 'Micromachining', 'Flexo / Anilox / Rotogravure'],
  },
  {
    title: 'Spectroscopy',
    img: spectroImg,
    bullets: ['Spectral imaging', 'Spectroscopy systems', 'Color management'],
  },
  {
    title: '3D Scanning',
    img: scanImg,
    bullets: ['High precision scanning', 'Surface inspection', 'Structured light analysis'],
  },
];

const applications = [
  { icon: Package, label: 'Packaging & Printing' },
  { icon: Microscope, label: 'Surface Analysis' },
  { icon: Factory, label: 'Industrial Inspection' },
  { icon: FlaskConical, label: 'Scientific Research' },
  { icon: Leaf, label: 'Agriculture / Imaging' },
  { icon: Palette, label: 'Color Measurement' },
];

/* ─── component ─── */
const DemoDV = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-[#0B1F2E] text-white font-sans antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ══════ HEADER ══════ */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#0B1F2E]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src={logoDv} alt="DV Technologies" className="h-10" />
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#D9E3EA]/70">
            {['Overview', 'Technologies', 'Applications', 'Solutions'].map(l => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="hover:text-white transition-colors">{l}</button>
            ))}
          </nav>
          <button onClick={() => scrollTo('contact')} className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#0E5C8E] hover:bg-[#2EA7D7] transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ══════ HERO ══════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F2E]/90 via-[#0B1F2E]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2E] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40">
          <motion.div className="max-w-2xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#0E5C8E]/30 text-[#79D8FF] border border-[#0E5C8E]/40">
                Tecnologie d'Avanguardia
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
              style={{ letterSpacing: '-0.03em' }}>
              Advanced Optical &<br />
              <span className="text-[#2EA7D7]">Industrial Technology</span><br />
              Solutions
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-[#D9E3EA]/80 leading-relaxed mb-10 max-w-xl">
              Your trusted technology partner specializing in laser systems, spectroscopy and 3D scanning for industrial and scientific applications.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('contact')}
                className="px-8 py-4 rounded-lg text-base font-semibold bg-[#0E5C8E] hover:bg-[#2EA7D7] transition-all duration-300 shadow-lg shadow-[#0E5C8E]/30 hover:shadow-[#2EA7D7]/30 hover:-translate-y-0.5">
                Request Technical Consultation
              </button>
              <button onClick={() => scrollTo('overview')}
                className="px-8 py-4 rounded-lg text-base font-semibold border border-[#D9E3EA]/20 text-[#D9E3EA] hover:bg-white/5 transition-all duration-300">
                Explore Solutions
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.button onClick={() => scrollTo('overview')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#D9E3EA]/30 hover:text-[#79D8FF] transition-colors"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ChevronDown className="w-7 h-7" />
        </motion.button>
      </section>

      {/* ══════ COMPANY OVERVIEW ══════ */}
      <section id="overview" className={`${section} py-28 relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2E] via-[#0d2536] to-[#0B1F2E]" />
        <motion.div className="relative max-w-7xl mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-0.5 bg-[#2EA7D7] mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Precision Engineering.<br />Intelligent Systems.</h2>
            <p className="text-[#D9E3EA]/70 text-lg leading-relaxed mb-8">
              We are an advanced technology laboratory specialized in the development of integrated hardware and software systems for scientific and industrial applications. With decades of experience, we deliver precision-engineered solutions that meet the most demanding requirements in optical technology, spectral analysis, and dimensional measurement.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-14">
              {[
                { value: '30+', label: 'Years of Experience' },
                { value: '500+', label: 'Systems Delivered' },
                { value: '40+', label: 'Countries Served' },
              ].map(s => (
                <motion.div key={s.label} variants={fadeUp} className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#2EA7D7] mb-1">{s.value}</div>
                  <div className="text-sm text-[#D9E3EA]/50">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ CORE TECHNOLOGIES ══════ */}
      <section id="technologies" className={`${section} py-28 relative`}>
        <div className="absolute inset-0 bg-[#0a1a27]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="w-12 h-0.5 bg-[#2EA7D7] mx-auto mb-8" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Core Technologies</h2>
              <p className="text-[#D9E3EA]/60 max-w-xl mx-auto">Integrated systems engineered for maximum precision and reliability across critical industrial processes.</p>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid md:grid-cols-3 gap-8">
            {technologies.map(t => (
              <motion.div key={t.title} variants={fadeUp} transition={{ duration: 0.6 }}
                className="group rounded-2xl overflow-hidden border border-white/5 bg-[#0d2536]/60 backdrop-blur hover:border-[#2EA7D7]/30 transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <img src={t.img} alt={t.title} loading="lazy" width={800} height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2536] via-transparent to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold mb-4">{t.title}</h3>
                  <ul className="space-y-2.5">
                    {t.bullets.map(b => (
                      <li key={b} className="flex items-center gap-3 text-sm text-[#D9E3EA]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2EA7D7] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ APPLICATIONS ══════ */}
      <section id="applications" className={`${section} py-28 relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a27] via-[#0B1F2E] to-[#0a1a27]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="w-12 h-0.5 bg-[#2EA7D7] mx-auto mb-8" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Application Domains</h2>
              <p className="text-[#D9E3EA]/60 max-w-xl mx-auto">Our technology serves a broad range of sectors where precision and reliability are non-negotiable.</p>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map(a => (
              <motion.div key={a.label} variants={fadeUp} transition={{ duration: 0.5 }}
                className="group flex items-center gap-5 p-6 rounded-xl border border-white/5 bg-[#0d2536]/40 hover:bg-[#0d2536]/70 hover:border-[#2EA7D7]/20 transition-all duration-400">
                <div className="w-14 h-14 rounded-xl bg-[#0E5C8E]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0E5C8E]/40 transition-colors duration-300">
                  <a.icon className="w-6 h-6 text-[#2EA7D7]" />
                </div>
                <span className="text-base font-semibold text-[#D9E3EA]">{a.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ CUSTOM SOLUTIONS ══════ */}
      <section id="solutions" className={`${section} py-28 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[#0a1a27]" />
        {/* subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0E5C8E]/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
            className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#0E5C8E]/20 flex items-center justify-center">
                <Settings className="w-7 h-7 text-[#2EA7D7]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Custom Solutions</h2>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ delay: 0.15 }}>
              <p className="text-lg text-[#D9E3EA]/70 leading-relaxed mb-6">
                Beyond our standard product lines, we design and manufacture fully custom hardware and software systems tailored to your specific industrial requirements. From concept to deployment, our engineering team works alongside yours to deliver solutions that integrate seamlessly into existing workflows.
              </p>
              <p className="text-lg text-[#D9E3EA]/70 leading-relaxed mb-10">
                Whether it's a specialized inspection station, a custom spectral analysis module, or a turnkey scanning system — we engineer it with the same precision and reliability that defines every product we deliver.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-3 gap-6">
              {['Dedicated R&D Team', 'Full System Integration', 'Ongoing Technical Support'].map(f => (
                <div key={f} className="p-5 rounded-xl border border-white/5 bg-[#0d2536]/40 text-center">
                  <div className="w-2 h-2 rounded-full bg-[#2EA7D7] mx-auto mb-3" />
                  <span className="text-sm font-semibold text-[#D9E3EA]">{f}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════ CONTACT CTA ══════ */}
      <section id="contact" className={`${section} py-28 relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a27] to-[#0B1F2E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0E5C8E10_0%,_transparent_70%)]" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
          className="relative max-w-2xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp}>
            <div className="w-12 h-0.5 bg-[#2EA7D7] mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Discuss Your<br />Technical Challenge
            </h2>
            <p className="text-[#D9E3EA]/60 text-lg leading-relaxed mb-10">
              Our engineering team is ready to evaluate your requirements and propose the optimal solution. Get in touch to start a technical conversation.
            </p>
            <button
              className="inline-flex items-center gap-3 px-10 py-5 rounded-lg text-base font-semibold bg-[#0E5C8E] hover:bg-[#2EA7D7] transition-all duration-300 shadow-lg shadow-[#0E5C8E]/30 hover:shadow-[#2EA7D7]/30 hover:-translate-y-0.5">
              Request Technical Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={logoDv} alt="DV Technologies" className="h-8 opacity-60" />
          <p className="text-xs text-[#D9E3EA]/30">© {new Date().getFullYear()} DV Tecnologie d'Avanguardia — All rights reserved</p>
          <p className="text-xs text-[#D9E3EA]/20">Demo by 4weblab.it</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoDV;
