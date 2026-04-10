import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Cog, Wrench, HardHat, Factory, Zap, Mountain,
  GlassWater, ChevronRight, Shield, Clock, Target,
  Users, Settings, CheckCircle2, ArrowRight, Phone,
  Mail, MapPin, Flame, Layers, Eye, Handshake
} from 'lucide-react';

import heroBg from '@/assets/ies-hero.jpg';
import workshopImg from '@/assets/ies-workshop.jpg';

/* ── palette tokens (inline, self-contained demo) ── */
const C = {
  anthracite: '#1B1F23',
  petrol: '#0F3B4C',
  petrolLight: '#174D63',
  steel: '#64748B',
  steelLight: '#94A3B8',
  copper: '#C87533',
  copperMuted: '#B8854A',
  white: '#F8FAFC',
  offWhite: '#F1F5F9',
  cardBg: '#FFFFFF',
  darkCard: '#162028',
  border: '#E2E8F0',
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const DemoIES = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>I.E.S. Srl – Industrial Equipment & Services | Demo</title>
        <meta name="description" content="Demo landing page per I.E.S. Srl – Impianti e servizi industriali per processi complessi." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ═══════ HEADER ═══════ */}
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? C.anthracite : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${C.petrol}` : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black"
              style={{ background: C.copper, color: C.white }}
            >
              IES
            </div>
            <span className="text-lg font-bold tracking-tight" style={{ color: C.white }}>
              I.E.S. <span className="font-normal" style={{ color: C.steelLight }}>Srl</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium" style={{ color: `${C.white}cc` }}>
            {[
              ['Azienda', 'chi-siamo'],
              ['Settori', 'settori'],
              ['Servizi', 'servizi'],
              ['Metodo', 'metodo'],
              ['Contatti', 'contatti'],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo('contatti')}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ background: C.copper, color: C.white }}
          >
            Richiedi un contatto
          </button>
        </div>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: C.anthracite }}>
        <img
          src={heroBg}
          alt="Impianto industriale moderno"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.anthracite}ee 0%, ${C.anthracite}99 50%, ${C.anthracite}55 100%)` }} />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(${C.steelLight} 1px, transparent 1px), linear-gradient(90deg, ${C.steelLight} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              {/* Badges */}
              <motion.div
                className="flex flex-wrap gap-3 mb-8"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
              >
                {['Dal 2013', 'Industria pesante', 'Ingegneria + Manutenzione + Montaggi'].map(b => (
                  <span
                    key={b}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: `${C.copper}22`, color: C.copperMuted, border: `1px solid ${C.copper}33` }}
                  >
                    {b}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6"
                style={{ color: C.white, letterSpacing: '-0.03em' }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Impianti e servizi industriali per processi complessi
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
                style={{ color: C.steelLight }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Progettazione, costruzione, manutenzione e montaggi per l'industria pesante.
                Un partner tecnico affidabile per acciaierie, alluminio, vetro, cave e miniere.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <button
                  onClick={() => scrollTo('contatti')}
                  className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ background: C.copper, color: C.white }}
                >
                  Richiedi un contatto <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollTo('servizi')}
                  className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ color: C.white, border: `1px solid ${C.steelLight}44` }}
                >
                  Scopri i servizi
                </button>
              </motion.div>
            </div>

            {/* Floating card */}
            <motion.div
              className="lg:col-span-2 hidden lg:block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <div
                className="rounded-2xl p-8 backdrop-blur-md border"
                style={{ background: `${C.darkCard}cc`, borderColor: `${C.steelLight}18` }}
              >
                <h3 className="text-lg font-bold mb-6" style={{ color: C.white }}>
                  Competenze chiave
                </h3>
                {[
                  { icon: Cog, label: 'Ingegneria impiantistica' },
                  { icon: Wrench, label: 'Manutenzione industriale' },
                  { icon: HardHat, label: 'Montaggi meccanici ed elettrici' },
                  { icon: Settings, label: 'Project management tecnico' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4 py-3 border-t" style={{ borderColor: `${C.steelLight}12` }}>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${C.copper}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: C.copperMuted }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: C.steelLight }}>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CHI SIAMO ═══════ */}
      <section id="chi-siamo" className="py-28 lg:py-36" style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: C.copper }}>
                Chi siamo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight" style={{ color: C.anthracite, letterSpacing: '-0.02em' }}>
                Esperienza tecnica al servizio dell'industria
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: C.steel }}>
                I.E.S. Srl – Industrial Equipment & Services nasce nel 2013 e si fonda sull'esperienza di uno staff tecnico
                che per anni ha progettato, costruito e installato impianti per il trasporto di materiali solidi, liquidi e gassosi.
              </p>
              <p className="text-base leading-relaxed" style={{ color: C.steel }}>
                L'azienda opera con un approccio pratico e specialistico, affiancando il cliente in contesti produttivi complessi
                dove affidabilità, precisione e continuità operativa sono decisive.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {[
                { value: '2013', label: 'Anno di fondazione' },
                { value: 'Heavy', label: 'Industria pesante' },
                { value: 'Tecnico', label: 'Supporto specialistico' },
                { value: 'Operativo', label: 'Approccio concreto' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: C.offWhite, borderColor: C.border }}
                >
                  <p className="text-2xl font-extrabold mb-1" style={{ color: C.petrol }}>{item.value}</p>
                  <p className="text-sm" style={{ color: C.steel }}>{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ SETTORI ═══════ */}
      <section id="settori" className="py-28 lg:py-36" style={{ background: C.anthracite }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: C.copperMuted }}>
              Settori serviti
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: C.white, letterSpacing: '-0.02em' }}>
              Dove operiamo
            </h2>
            <p className="max-w-2xl mx-auto text-base" style={{ color: C.steelLight }}>
              IES sviluppa soluzioni e interventi tecnici per realtà produttive dove gli impianti devono garantire
              prestazioni, continuità e sicurezza in ambienti industriali esigenti.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Flame, title: 'Acciaierie e siderurgia', desc: 'Impianti di trasporto materiali, piping, strutture e manutenzione in contesti siderurgici ad alta temperatura.' },
              { icon: Layers, title: 'Industria dell\'alluminio', desc: 'Soluzioni impiantistiche per linee di lavorazione, fusione e trasporto nel settore alluminio.' },
              { icon: GlassWater, title: 'Vetrerie', desc: 'Supporto tecnico e manutenzione per impianti di produzione e movimentazione del vetro.' },
              { icon: Mountain, title: 'Cave e miniere', desc: 'Nastri trasportatori, impianti di frantumazione e servizi per l\'industria estrattiva.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="group rounded-xl p-7 border transition-all duration-400 hover:-translate-y-2"
                style={{ background: C.darkCard, borderColor: `${C.steelLight}12` }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: `${C.copper}15` }}
                >
                  <Icon className="w-6 h-6 transition-colors" style={{ color: C.copperMuted }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: C.white }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.steelLight }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVIZI ═══════ */}
      <section id="servizi" className="py-28 lg:py-36" style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: C.copper }}>
              Servizi principali
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: C.anthracite, letterSpacing: '-0.02em' }}>
              Ingegneria, manutenzione e montaggi
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cog,
                title: 'Ingegneria',
                text: 'Studi di layout, modifiche su impianti esistenti, dimensionamenti, specifiche tecniche, analisi strutturali, stime costi e valutazioni di ritorno investimento per supportare decisioni tecniche e operative con maggiore chiarezza.',
              },
              {
                icon: Wrench,
                title: 'Manutenzione',
                text: 'Manutenzione programmata, interventi su chiamata ed emergenze, supporto tecnico specializzato e gestione completa del servizio con obiettivi condivisi e misurabili.',
              },
              {
                icon: HardHat,
                title: 'Montaggi industriali',
                text: 'Montaggi meccanici, elettrici ed elettronici di impianti complessi, anche su disegni del cliente, con pianificazione accurata delle attività e attenzione ai tempi di consegna.',
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl overflow-hidden border transition-all duration-400 hover:-translate-y-2 hover:shadow-xl"
                style={{ borderColor: C.border }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Top accent bar */}
                <div className="h-1" style={{ background: `linear-gradient(90deg, ${C.petrol}, ${C.copper})` }} />
                <div className="p-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${C.petrol}0d` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: C.petrol }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: C.anthracite }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.steel }}>{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ IMMAGINE IMMERSIVA ═══════ */}
      <section className="relative h-72 lg:h-96 overflow-hidden">
        <img
          src={workshopImg}
          alt="Officina industriale IES"
          loading="lazy"
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${C.anthracite}dd, ${C.anthracite}66)` }} />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl font-bold max-w-3xl"
            style={{ color: C.white }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "Competenza, precisione e continuità operativa: il nostro approccio in ogni contesto industriale."
          </motion.p>
        </div>
      </section>

      {/* ═══════ METODO ═══════ */}
      <section id="metodo" className="py-28 lg:py-36" style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: C.copper }}>
              Il nostro metodo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: C.anthracite, letterSpacing: '-0.02em' }}>
              Un partner tecnico, non un semplice fornitore
            </h2>
            <p className="max-w-2xl mx-auto text-base" style={{ color: C.steel }}>
              IES supporta il cliente nella gestione di progetti industriali complessi seguendo le diverse fasi operative:
              studio di fattibilità, layout, specifiche tecniche, organizzazione del cantiere, coordinamento dei subcontractor,
              realizzazione e avviamento.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px" style={{ background: C.border }} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Analisi iniziale', desc: 'Raccolta dati, sopralluogo, comprensione delle esigenze tecniche e operative del cliente.' },
                { step: '02', title: 'Progettazione e layout', desc: 'Studi di fattibilità, dimensionamenti, specifiche tecniche e definizione del progetto.' },
                { step: '03', title: 'Pianificazione tecnica', desc: 'Organizzazione delle fasi, cronoprogramma, coordinamento risorse e subcontractor.' },
                { step: '04', title: 'Installazione e montaggio', desc: 'Esecuzione dei lavori meccanici, elettrici ed elettronici con controllo qualità costante.' },
                { step: '05', title: 'Avviamento e supporto', desc: 'Collaudo, avviamento impianto e supporto tecnico post-intervento.' },
              ].map(({ step, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="text-center lg:text-left"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex justify-center lg:justify-start mb-5">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-extrabold relative z-10"
                      style={{ background: C.petrol, color: C.white }}
                    >
                      {step}
                    </div>
                  </div>
                  <h4 className="text-base font-bold mb-2" style={{ color: C.anthracite }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.steel }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PUNTI DI FORZA ═══════ */}
      <section className="py-28 lg:py-36" style={{ background: C.anthracite }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: C.copperMuted }}>
              Punti di forza
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: C.white, letterSpacing: '-0.02em' }}>
              Perché scegliere IES
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: 'Competenze specialistiche', desc: 'Staff tecnico con esperienza diretta su impianti di trasporto materiali e processi industriali complessi.' },
              { icon: Factory, title: 'Contesti industriali complessi', desc: 'Operatività in acciaierie, fonderie, vetrerie e impianti estrattivi con standard elevati di sicurezza.' },
              { icon: Handshake, title: 'Supporto operativo concreto', desc: 'Presenza in cantiere, gestione diretta delle attività, coordinamento delle risorse sul campo.' },
              { icon: Target, title: 'Focus su affidabilità', desc: 'Continuità del servizio, rispetto dei tempi e attenzione alla qualità in ogni fase dell\'intervento.' },
              { icon: Settings, title: 'Interventi su misura', desc: 'Soluzioni progettate sulle reali esigenze dell\'impianto e del contesto produttivo del cliente.' },
              { icon: Eye, title: 'Visione di lungo termine', desc: 'Relazioni costruite sulla fiducia, con attenzione al risultato e alla sostenibilità delle scelte.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="flex gap-5 rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1"
                style={{ background: C.darkCard, borderColor: `${C.steelLight}12` }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: `${C.copper}15` }}>
                  <Icon className="w-5 h-5" style={{ color: C.copperMuted }} />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1" style={{ color: C.white }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.steelLight }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-base italic max-w-2xl mx-auto" style={{ color: C.steelLight }}>
              "Esperienza tecnica maturata sul campo, capacità di operare in ambienti ad alta complessità
              e integrazione tra progettazione, manutenzione e montaggio."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CONTATTI ═══════ */}
      <section id="contatti" className="py-28 lg:py-36" style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: C.copper }}>
              Contatti
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: C.anthracite, letterSpacing: '-0.02em' }}>
              Parliamo del tuo impianto
            </h2>
            <p className="max-w-xl mx-auto text-base" style={{ color: C.steel }}>
              Per richieste tecniche, valutazioni o necessità legate al tuo intervento industriale,
              il team IES è a disposizione.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-3 rounded-2xl border p-8 lg:p-10"
              style={{ background: C.offWhite, borderColor: C.border }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {['Nome e cognome', 'Azienda', 'Email', 'Telefono'].map(label => (
                  <div key={label}>
                    <label className="text-sm font-medium mb-1.5 block" style={{ color: C.anthracite }}>{label}</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
                      style={{ borderColor: C.border, background: C.cardBg, color: C.anthracite }}
                      placeholder={label}
                    />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium mb-1.5 block" style={{ color: C.anthracite }}>Messaggio</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border px-4 py-3 text-sm outline-none resize-none transition-colors focus:ring-2"
                  style={{ borderColor: C.border, background: C.cardBg, color: C.anthracite }}
                  placeholder="Descrivi brevemente le tue esigenze..."
                />
              </div>
              <button
                className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ background: C.copper, color: C.white }}
              >
                Invia richiesta <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Info */}
            <motion.div
              className="lg:col-span-2 flex flex-col gap-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="rounded-2xl border p-7" style={{ background: C.offWhite, borderColor: C.border }}>
                <h4 className="text-lg font-bold mb-5" style={{ color: C.anthracite }}>I.E.S. Srl</h4>
                <div className="space-y-4 text-sm" style={{ color: C.steel }}>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.copper }} />
                    <div>
                      <p className="font-medium" style={{ color: C.anthracite }}>Sede legale</p>
                      <p>C.so Silvio Trentin, 24</p>
                      <p>San Donà di Piave (VE)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.copper }} />
                    <div>
                      <p className="font-medium" style={{ color: C.anthracite }}>Sede operativa</p>
                      <p>Via Alessandro Volta, 15</p>
                      <p>Noventa di Piave (VE)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 shrink-0" style={{ color: C.copper }} />
                    <span>info@iessrl-italy.com</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border p-7" style={{ background: C.offWhite, borderColor: C.border }}>
                <h4 className="text-base font-bold mb-4" style={{ color: C.anthracite }}>Riferimenti diretti</h4>
                <div className="space-y-3 text-sm" style={{ color: C.steel }}>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 shrink-0" style={{ color: C.copper }} />
                    <div>
                      <p className="font-medium" style={{ color: C.anthracite }}>Ing. Roberto Leo</p>
                      <p>Amministratore Unico</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 shrink-0" style={{ color: C.copper }} />
                    <div>
                      <p className="font-medium" style={{ color: C.anthracite }}>Max Vedovato</p>
                      <p>Responsabile Operativo</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs italic text-center" style={{ color: C.steelLight }}>
                Demo illustrativa: testi, immagini e struttura possono essere personalizzati.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="py-12" style={{ background: C.anthracite, borderTop: `1px solid ${C.steelLight}15` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: C.copper, color: C.white }}>
                IES
              </div>
              <span className="text-sm font-bold" style={{ color: C.white }}>
                I.E.S. Srl – Industrial Equipment & Services
              </span>
            </div>
            <div className="text-center md:text-right text-xs" style={{ color: C.steelLight }}>
              <p>San Donà di Piave (VE) · Noventa di Piave (VE)</p>
              <p className="mt-1 opacity-60">Demo concettuale realizzata per presentazione web</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DemoIES;
