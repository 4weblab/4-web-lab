import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Menu, X, Phone, Mail, MapPin,
  Shield, Calendar, Users, Settings,
  ChevronRight, Award, CheckCircle2,
  Factory, Wrench, Zap, Cog, Sparkles, PenTool,
  UtensilsCrossed, Package, HeartPulse, Leaf, Building2, Shirt,
  ClipboardCheck, Ruler, Layers, Flame, Paintbrush, Truck
} from 'lucide-react';
import heroImg from '@/assets/sovem-hero.jpg';
import workshopImg from '@/assets/sovem-workshop.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const navItems = [
  { label: 'Home', href: 'hero' },
  { label: 'Azienda', href: 'azienda' },
  { label: 'Lavorazioni', href: 'lavorazioni' },
  { label: 'Settori', href: 'settori' },
  { label: 'Qualità', href: 'qualita' },
  { label: 'Contatti', href: 'contatti' },
];

const trustItems = [
  { icon: Shield, text: 'ISO 9001:2015 Certificata' },
  { icon: Calendar, text: 'Dal 2003' },
  { icon: Users, text: 'Produzione su specifica cliente' },
  { icon: Settings, text: 'Supporto tecnico CAD' },
];

const capabilities = [
  { icon: Layers, title: 'Piegatura Lamiera', desc: 'Piegatura di precisione su lamiere in acciaio inox di diversi spessori, con controllo numerico e tolleranze strette per componenti destinati ad applicazioni industriali esigenti.' },
  { icon: Cog, title: 'Piegatura Tubo', desc: 'Curvatura e sagomatura di tubi in acciaio inossidabile per impianti, strutture e componenti speciali con geometrie complesse e finiture accurate.' },
  { icon: Flame, title: 'Saldatura TIG / MIG', desc: 'Saldatura manuale TIG e MIG eseguita da operatori qualificati, con procedure certificate per giunzioni strutturali, estetiche e a tenuta.' },
  { icon: Zap, title: 'Saldatura Automatizzata', desc: 'Processi automatizzati per produzioni seriali e componenti ripetitivi, con parametri controllati per garantire costanza qualitativa e produttività.' },
  { icon: Paintbrush, title: 'Trattamenti Superficiali', desc: 'Decapaggio, passivazione, satinatura, lucidatura e finitura superficiale secondo le specifiche del cliente e le normative di settore.' },
  { icon: PenTool, title: 'Progettazione CAD Tecnica', desc: 'Supporto progettuale con sviluppo disegni tecnici, modellazione 3D e ottimizzazione dei componenti per la producibilità e la riduzione dei costi.' },
];

const sectors = [
  { icon: UtensilsCrossed, title: 'Alimentare', img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80' },
  { icon: Package, title: 'Packaging', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  { icon: HeartPulse, title: 'Medicale / Ospedaliero', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  { icon: Leaf, title: 'Energetico / Ecologico', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80' },
  { icon: Building2, title: 'Architettura / Edilizia', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
  { icon: Shirt, title: 'Tessile', img: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80' },
];

const processSteps = [
  { num: '01', title: 'Analisi tecnica commessa', desc: 'Studio della documentazione, specifiche tecniche e requisiti del cliente per definire il perimetro operativo.' },
  { num: '02', title: 'Supporto progettuale / CAD', desc: 'Sviluppo o revisione dei disegni tecnici, ottimizzazione per la produzione e confronto con il cliente.' },
  { num: '03', title: 'Preparazione semilavorati', desc: 'Taglio, piegatura e preparazione dei componenti base secondo le tolleranze e le geometrie richieste.' },
  { num: '04', title: 'Produzione e saldatura', desc: 'Assemblaggio e saldatura con procedure qualificate, controllo dei parametri e verifica in processo.' },
  { num: '05', title: 'Finiture e trattamenti', desc: 'Trattamenti superficiali, lucidatura, satinatura e preparazione finale secondo le specifiche concordate.' },
  { num: '06', title: 'Collaudo / Consegna', desc: 'Controllo qualità finale, documentazione e consegna nei tempi concordati con il cliente.' },
];

const DemoSovem = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white font-sans antialiased">
      {/* ─── HEADER ─── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#0B0F14]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="text-xl font-bold tracking-tight">
            <span className="text-[#3B82F6]">SOVEM</span>
            <span className="text-[#94A3B8] text-xs font-normal ml-2 hidden sm:inline">SRL</span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((n) => (
              <li key={n.href}>
                <button
                  onClick={() => scrollTo(n.href)}
                  className="px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo('contatti')}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] transition-all duration-300 shadow-lg shadow-[#3B82F6]/20"
            >
              Contatta SOVEM
            </button>
          </div>

          <button className="lg:hidden p-2 text-[#94A3B8]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-[#0B0F14]/95 backdrop-blur-xl border-b border-white/5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navItems.map((n) => (
                <button
                  key={n.href}
                  onClick={() => scrollTo(n.href)}
                  className="text-left px-4 py-3 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-lg transition-colors text-base"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Stabilimento SOVEM" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/85 to-[#0B0F14]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 pt-32 pb-20 w-full">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">Carpenteria Inox Industriale</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Carpenteria inox su misura per l'industria che richiede{' '}
              <span className="text-[#3B82F6]">precisione assoluta</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[#94A3B8] leading-relaxed mb-10 max-w-xl"
            >
              Costruiamo apparecchiature e semilavorati in acciaio inox per applicazioni industriali complesse, con lavorazioni complete, finiture certificate e supporto tecnico dedicato.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('contatti')}
                className="px-7 py-3.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40 hover:-translate-y-0.5"
              >
                Richiedi una consulenza tecnica
              </button>
              <button
                onClick={() => scrollTo('lavorazioni')}
                className="px-7 py-3.5 rounded-lg border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300"
              >
                Scopri le lavorazioni
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="relative z-10 bg-[#111827] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {trustItems.map((t, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-3 py-5 px-4 ${i < 3 ? 'border-r border-white/5' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <t.icon className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <span className="text-sm text-[#94A3B8] font-medium">{t.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHI SIAMO ─── */}
      <section id="azienda" className="py-28 bg-[#0B0F14]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img src={workshopImg} alt="Stabilimento SOVEM" className="w-full h-[400px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1A2230] border border-white/10 rounded-xl p-5 shadow-2xl">
                <div className="text-3xl font-bold text-[#3B82F6]">20+</div>
                <div className="text-sm text-[#94A3B8]">Anni di esperienza</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[#3B82F6]" />
                <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">Chi siamo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Un partner tecnico,<br />non un semplice fornitore
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                SOVEM realizza componenti, semilavorati e apparecchiature speciali in acciaio inox per aziende che necessitano precisione, affidabilità e flessibilità produttiva. Seguiamo ogni commessa dalla progettazione alla finitura finale, collaborando con il cliente per ottimizzare tecnica, costi e tempi di produzione.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Industria pesante', desc: 'Componenti per applicazioni ad alta sollecitazione' },
                  { title: 'Dal 2003', desc: 'Due decenni di esperienza sul campo' },
                  { title: 'Supporto specialistico', desc: 'Affiancamento tecnico in ogni fase' },
                  { title: 'Approccio operativo', desc: 'Focus su risultati concreti e misurabili' },
                ].map((item, i) => (
                  <div key={i} className="bg-[#1A2230] border border-white/5 rounded-xl p-4 hover:border-[#3B82F6]/30 transition-colors duration-300">
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-[#94A3B8]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LAVORAZIONI ─── */}
      <section id="lavorazioni" className="py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">Capacità produttive</span>
              <span className="h-px w-10 bg-[#3B82F6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lavorazioni specializzate</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
              Un ciclo produttivo completo per trasformare la materia prima in prodotti finiti di alta qualità.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {capabilities.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="group bg-[#1A2230] border border-white/5 rounded-2xl p-7 hover:border-[#3B82F6]/30 hover:bg-[#1A2230]/80 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-5 group-hover:bg-[#3B82F6]/20 transition-colors">
                  <c.icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <h3 className="text-lg font-bold mb-3">{c.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SETTORI ─── */}
      <section id="settori" className="py-28 bg-[#0B0F14]">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">Settori serviti</span>
              <span className="h-px w-10 bg-[#3B82F6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industrie che serviamo</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
              Soluzioni in acciaio inox per settori dove qualità, igiene e resistenza sono requisiti imprescindibili.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((s, i) => (
              <motion.div
                key={i}
                className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/50 to-transparent group-hover:from-[#0B0F14]/95 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center backdrop-blur-sm">
                      <s.icon className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESSO ─── */}
      <section className="py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">Processo operativo</span>
              <span className="h-px w-10 bg-[#3B82F6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Dalla commessa alla consegna</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
              Un processo strutturato per garantire qualità, tempi e tracciabilità in ogni fase produttiva.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={i}
                className="relative bg-[#1A2230] border border-white/5 rounded-2xl p-7 hover:border-[#3B82F6]/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="text-5xl font-black text-[#3B82F6]/10 absolute top-4 right-5 group-hover:text-[#3B82F6]/20 transition-colors">{s.num}</span>
                <h3 className="text-lg font-bold mb-3 pr-12">{s.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUALITÀ ─── */}
      <section id="qualita" className="py-28 bg-[#0B0F14] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">Qualità e certificazioni</span>
              <span className="h-px w-10 bg-[#3B82F6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Standard qualitativi certificati</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
              Ogni processo produttivo è organizzato per garantire standard qualitativi elevati, tracciabilità e controllo continuo della commessa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'ISO 9001:2015', desc: 'Sistema di gestione della qualità certificato per tutti i processi aziendali, dalla ricezione dell\'ordine alla consegna del prodotto finito.' },
              { title: 'CPR EN 1090', desc: 'Certificazione per l\'esecuzione di strutture in acciaio e alluminio, conforme al Regolamento Prodotti da Costruzione europeo.' },
            ].map((c, i) => (
              <motion.div
                key={i}
                className="bg-[#1A2230] border border-white/10 rounded-2xl p-8 flex gap-5 hover:border-[#3B82F6]/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINALE ─── */}
      <section className="py-24 bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(135deg, transparent 25%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,.1) 75%)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">
              Hai un progetto complesso in acciaio inox?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Parlaci delle tue esigenze produttive. Analizzeremo la commessa e valuteremo la soluzione più efficiente per la tua realizzazione.
            </p>
            <button
              onClick={() => scrollTo('contatti')}
              className="px-8 py-4 rounded-lg bg-white text-[#1D4ED8] font-bold text-sm hover:bg-white/90 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              Contatta SOVEM
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTATTI ─── */}
      <section id="contatti" className="py-28 bg-[#0B0F14]">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase">Contatti</span>
              <span className="h-px w-10 bg-[#3B82F6]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Parliamo del tuo progetto</h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            <motion.form
              className="lg:col-span-3 bg-[#1A2230] border border-white/5 rounded-2xl p-8 space-y-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {['Nome e cognome', 'Azienda', 'Email', 'Telefono'].map((label) => (
                  <div key={label}>
                    <label className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2 block">{label}</label>
                    <input
                      type="text"
                      className="w-full bg-[#0B0F14] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/30 transition-colors"
                      placeholder={label}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2 block">Messaggio</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#0B0F14] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#4B5563] focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/30 transition-colors resize-none"
                  placeholder="Descrivi le tue esigenze..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#3B82F6]/20"
              >
                Invia richiesta
              </button>
            </motion.form>

            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1A2230] border border-white/5 rounded-2xl p-8">
                <h3 className="text-lg font-bold mb-6">SOVEM SRL</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: 'Via delle Prese 18, 36014 Santorso (VI)' },
                    { icon: Phone, text: '0445 640700' },
                    { icon: Mail, text: 'info@sovem.com' },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <c.icon className="w-5 h-5 text-[#3B82F6] mt-0.5 shrink-0" />
                      <span className="text-[#94A3B8] text-sm">{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1A2230] border border-white/5 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-[#3B82F6]" />
                  <h4 className="font-bold text-sm">Certificazioni</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                    ISO 9001:2015
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                    CPR EN 1090
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 bg-[#080B10] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-lg font-bold"><span className="text-[#3B82F6]">SOVEM</span> SRL</span>
              <span className="hidden md:block h-5 w-px bg-white/10" />
              <span className="text-xs text-[#4B5563]">Via delle Prese 18, 36014 Santorso (VI)</span>
            </div>
            <p className="text-xs text-[#4B5563] text-center md:text-right max-w-md">
              Demo realizzata a scopo di presentazione grafica. Testi, immagini e struttura potranno essere adattati in fase progettuale.
            </p>
          </div>
        </div>
      </footer>

      {/* ─── BACK TO HOME ─── */}
      <Link
        to="/"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A2230] border border-white/10 text-sm text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/40 transition-all duration-300 shadow-lg backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Torna alla Home
      </Link>
    </div>
  );
};

export default DemoSovem;
