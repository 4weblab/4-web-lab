import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Zap, Shield, Globe, Award, Heart, Microscope, Factory,
  ChevronRight, Phone, Mail, MapPin, FlaskConical, Cpu,
  Users, Stethoscope, Dog, Building2, Lightbulb, CheckCircle2,
  ArrowRight, Star, Activity, Menu, X
} from 'lucide-react';
import heroImg from '@/assets/platiumed-hero.jpg';
import labImg from '@/assets/platiumed-lab.jpg';
import productImg from '@/assets/platiumed-product.jpg';

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

/* ─── Counter ─── */
const Counter = ({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.max(1, Math.floor(end / 60));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-heading">
        {count}{suffix}
      </div>
      <div className="text-cyan-300 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

/* ─── Main Component ─── */
const DemoPlatiumed = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Azienda', href: '#azienda' },
    { label: 'Prodotti', href: '#prodotti' },
    { label: 'R&D', href: '#ricerca' },
    { label: 'Qualità', href: '#qualita' },
    { label: 'Contatti', href: '#contatti' },
  ];

  const categories = [
    {
      icon: Heart,
      title: 'Uso Domestico',
      desc: "Dispositivi per magnetoterapia e benessere progettati per un utilizzo semplice e sicuro nell'ambiente domestico.",
    },
    {
      icon: Stethoscope,
      title: 'Uso Professionale',
      desc: 'Apparecchiature professionali per studi medici, fisioterapici e centri riabilitativi.',
    },
    {
      icon: Dog,
      title: 'Uso Veterinario',
      desc: 'Soluzioni dedicate alla magnetoterapia veterinaria per il trattamento di animali domestici e da competizione.',
    },
    {
      icon: Building2,
      title: 'Soluzioni OEM',
      desc: 'Progettazione e produzione di dispositivi su specifica per partner commerciali e distributori internazionali.',
    },
  ];

  const certifications = [
    { icon: Shield, title: 'Standard di Qualità', desc: 'Produzione conforme ai più elevati standard qualitativi del settore.' },
    { icon: Award, title: 'Dispositivi Certificati', desc: 'Ogni dispositivo è sottoposto a verifiche rigorose prima della commercializzazione.' },
    { icon: CheckCircle2, title: 'Sicurezza e Affidabilità', desc: "Focus sulla sicurezza dell'utilizzatore e sulla durabilità dei prodotti." },
    { icon: Factory, title: 'Made in Italy', desc: 'Intera filiera produttiva italiana, dalla ricerca alla realizzazione finale.' },
  ];

  const rdSteps = [
    { icon: Lightbulb, title: 'Idea e Concept', desc: 'Analisi delle esigenze cliniche e definizione degli obiettivi terapeutici.' },
    { icon: FlaskConical, title: 'Ricerca Scientifica', desc: 'Studi e validazione dei protocolli in collaborazione con medici e ricercatori.' },
    { icon: Cpu, title: 'Progettazione', desc: 'Engineering elettronico e meccanico con prototipazione avanzata.' },
    { icon: Factory, title: 'Produzione', desc: 'Realizzazione interna con controllo qualità su ogni fase del processo.' },
  ];

  return (
    <div className="min-h-screen bg-[#040714] text-white font-sans [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans [&_h4]:font-sans">
      <Helmet>
        <title>Platiumed – Dispositivi Elettromedicali | Demo 4weblab</title>
        <meta name="description" content="Demo landing page per Platiumed, azienda italiana leader nella magnetoterapia e dispositivi elettromedicali." />
      </Helmet>

      {/* ─── HEADER ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#040714]/90 backdrop-blur-xl shadow-lg shadow-cyan-500/5 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="#hero" className="text-2xl font-bold tracking-tight">
            <span className="text-white">Platiu</span>
            <span className="text-cyan-400">med</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contatti"
            className="hidden md:inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#040714] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Contattaci
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-cyan-400 transition border-b border-white/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Laboratorio Platiumed" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#040714]/95 via-[#040714]/80 to-[#0c1a3a]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-medium tracking-wider uppercase mb-8">
              <Activity size={14} /> Medical Technology
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6 tracking-tight">
              Innovazione Elettromedicale
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                al Servizio del Benessere
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Da oltre 30 anni sviluppiamo e produciamo dispositivi per magnetoterapia ed elettromedicali professionali e domestici.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#azienda"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#040714] font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-0.5"
              >
                Scopri l'Azienda <ChevronRight size={18} />
              </a>
              <a
                href="#prodotti"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-cyan-400/50 text-white px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/5"
              >
                Esplora i Prodotti
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            {[
              { icon: Star, text: '30+ Anni di Esperienza' },
              { icon: Factory, text: 'Produzione Italiana' },
              { icon: Globe, text: 'Presenza Internazionale' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
                <b.icon size={16} className="text-cyan-400" />
                <span className="text-sm text-gray-300">{b.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CHI SIAMO ─── */}
      <section id="azienda" className="relative py-28 md:py-36 bg-[#060b18]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Chi Siamo</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Un punto di riferimento nell'
                <span className="text-cyan-400">elettromedicale</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-6">
                Platiumed nasce in Veneto oltre 30 anni fa e oggi rappresenta un punto di riferimento nella progettazione e produzione di dispositivi elettromedicali per uso domestico, professionale e veterinario.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg mb-10">
                L'azienda integra ricerca, sviluppo e produzione interna per garantire standard qualitativi elevati e innovazione continua.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '30+', lab: 'Anni di attività' },
                  { val: '100%', lab: 'Made in Italy' },
                  { val: 'R&D', lab: 'Interna dedicata' },
                  { val: '3', lab: 'Linee di prodotto' },
                ].map((s) => (
                  <div key={s.lab} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{s.val}</div>
                    <div className="text-sm text-gray-400">{s.lab}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scaleIn} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl" />
                <img
                  src={labImg}
                  alt="Stabilimento Platiumed"
                  className="relative rounded-2xl w-full object-cover shadow-2xl shadow-cyan-500/10"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATISTICHE ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061428] via-[#0a1e3d] to-[#061428]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
          >
            <Counter end={30} suffix="+" label="Anni di esperienza" />
            <Counter end={15} suffix="+" label="Mercati internazionali" />
            <Counter end={40} suffix="+" label="Dispositivi sviluppati" />
            <Counter end={100} suffix="%" label="R&D interna" />
          </motion.div>
        </div>
      </section>

      {/* ─── CATEGORIE PRODOTTO ─── */}
      <section id="prodotti" className="relative py-28 md:py-36 bg-[#040714]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Soluzioni</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Categorie di <span className="text-cyan-400">Prodotto</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dispositivi elettromedicali progettati per rispondere a esigenze diverse, dal benessere domestico alla riabilitazione professionale.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <cat.icon size={26} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{cat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
                <div className="mt-6 flex items-center gap-1 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Scopri di più <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RICERCA E SVILUPPO ─── */}
      <section id="ricerca" className="relative py-28 md:py-36 bg-[#060b18]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.07),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={scaleIn} transition={{ duration: 0.7 }} className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tl from-cyan-500/15 to-blue-600/15 rounded-3xl blur-2xl" />
                <img
                  src={productImg}
                  alt="Dispositivo Platiumed"
                  className="relative rounded-2xl w-full object-cover shadow-2xl shadow-blue-500/10"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.7 }} className="order-1 lg:order-2">
              <div className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Innovazione</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Ricerca, Progettazione,{' '}
                <span className="text-cyan-400">Innovazione</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-10">
                Un team multidisciplinare composto da medici, ingegneri, fisioterapisti e ricercatori lavora per sviluppare dispositivi all'avanguardia, validati scientificamente e orientati al miglioramento della qualità della vita.
              </p>
              <div className="space-y-6">
                {rdSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex-shrink-0 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <step.icon size={22} className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICAZIONI ─── */}
      <section id="qualita" className="relative py-28 md:py-36 bg-[#040714]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Garanzia</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Qualità e <span className="text-cyan-400">Certificazioni</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ogni dispositivo Platiumed è il risultato di un processo produttivo rigoroso, orientato alla massima sicurezza e affidabilità.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <c.icon size={30} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold mb-3">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SHOWCASE PRODOTTI ─── */}
      <section className="relative py-28 md:py-36 bg-[#060b18] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Showcase</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              I Nostri <span className="text-cyan-400">Dispositivi</span>
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.8 }} className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Magnetoterapia Domiciliare', cat: 'Uso Domestico' },
              { title: 'Sistema Professionale Avanzato', cat: 'Uso Professionale' },
              { title: 'Dispositivo Veterinario', cat: 'Uso Veterinario' },
            ].map((prod, i) => (
              <motion.div
                key={prod.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={productImg}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">{prod.cat}</div>
                  <h3 className="text-lg font-bold">{prod.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA FINALE ─── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e3d] via-[#061428] to-[#040714]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-medium tracking-wider uppercase mb-8">
              <Zap size={14} /> Il Futuro della Salute
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Tecnologia Medicale
              <br />
              <span className="text-cyan-400">Progettata per il Futuro</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Scopri come Platiumed può supportare la tua attività professionale o il tuo benessere quotidiano.
            </p>
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#040714] font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-0.5"
            >
              Richiedi Informazioni <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTATTI ─── */}
      <section id="contatti" className="relative py-28 md:py-36 bg-[#040714]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contatti</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Parliamo del tuo <span className="text-cyan-400">progetto</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Che tu sia un professionista della salute, un distributore o un privato, siamo pronti ad ascoltare le tue esigenze.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <MapPin size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Sede</div>
                    <div className="text-gray-400 text-sm">Veneto, Italia</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400 text-sm">info@platiumed.it</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefono</div>
                    <div className="text-gray-400 text-sm">+39 049 000 0000</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-bold mb-6">Richiedi Informazioni</h3>
                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Nome</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition" placeholder="Il tuo nome" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Cognome</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition" placeholder="Il tuo cognome" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition" placeholder="email@esempio.com" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Telefono</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition" placeholder="+39 ..." />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Messaggio</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition resize-none" placeholder="Descrivi le tue esigenze..." />
                  </div>
                  <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#040714] font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25">
                    Invia Richiesta
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#030610] border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Platiu</span>
                <span className="text-cyan-400">med</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Innovazione e tecnologia al servizio del benessere. Dispositivi elettromedicali progettati e prodotti in Italia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Link Rapidi</h4>
              <div className="space-y-3">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} className="block text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Contatti</h4>
              <div className="space-y-3 text-gray-500 text-sm">
                <p>Veneto, Italia</p>
                <p>info@platiumed.it</p>
                <p>+39 049 000 0000</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">© 2025 Platiumed Srl – Tutti i diritti riservati</p>
            <p className="text-gray-600 text-xs">
              Demo realizzata da{' '}
              <a href="https://4weblab.it" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">
                4weblab.it
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoPlatiumed;
