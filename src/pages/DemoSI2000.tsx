import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Menu, X, ArrowLeft, ArrowRight, BarChart3, ShieldCheck, Users, Target,
  TrendingUp, Building2, Scale, Search, Headphones, MessageSquare,
  ChevronRight, Phone, Mail, MapPin, CheckCircle2, Briefcase,
  ClipboardList, LineChart, Eye, HandshakeIcon, Lightbulb
} from 'lucide-react';
import heroImg from '@/assets/si2000-hero.jpg';

/* ── palette tokens ── */
const c = {
  navy: '#0F1C2E',
  navyLight: '#162438',
  teal: '#3D7A7A',
  tealLight: '#4A918F',
  warmWhite: '#FAF9F7',
  offWhite: '#F3F1EE',
  grey100: '#E8E6E3',
  grey300: '#B0ADA8',
  grey500: '#6B6862',
  grey700: '#3D3B37',
  accent: '#3D7A7A',
};

/* ── nav ── */
const navItems = [
  { label: 'Azienda', href: '#chi-siamo' },
  { label: 'Consulenza', href: '#consulenza' },
  { label: 'Metodo', href: '#metodo' },
  { label: 'Vantaggi', href: '#vantaggi' },
  { label: 'Contatti', href: '#contatti' },
];

/* ── animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [.25,.46,.45,.94] as [number,number,number,number] } }),
};

const DemoSI2000 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.substring(1));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Servizi Impresa 2000 – Demo | 4 Web Lab</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: c.grey700, background: c.warmWhite }}>

        {/* ═══════════ HEADER ═══════════ */}
        <header
          className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(250,249,247,.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(18px)' : 'none',
            borderBottom: scrolled ? `1px solid ${c.grey100}` : '1px solid transparent',
            boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,.06)' : 'none',
          }}
        >
          <nav className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
            <span className="text-xl font-semibold tracking-tight" style={{ color: scrolled ? c.navy : '#fff' }}>
              Servizi Impresa 2000
            </span>

            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map(n => (
                <li key={n.href}>
                  <button
                    onClick={() => scrollTo(n.href)}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                    style={{ color: scrolled ? c.grey700 : 'rgba(255,255,255,.85)' }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.background = scrolled ? c.grey100 : 'rgba(255,255,255,.1)'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; }}
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/" className="text-sm font-medium flex items-center gap-1.5 transition-colors" style={{ color: scrolled ? c.grey500 : 'rgba(255,255,255,.7)' }}>
                <ArrowLeft className="w-4 h-4" /> Home 4 Web Lab
              </Link>
              <button
                onClick={() => scrollTo('#contatti')}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{ background: c.teal, color: '#fff', boxShadow: '0 2px 12px rgba(61,122,122,.3)' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = c.tealLight; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = c.teal; }}
              >
                Contatta lo studio
              </button>
            </div>

            <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X className="w-6 h-6" style={{ color: scrolled ? c.navy : '#fff' }} /> : <Menu className="w-6 h-6" style={{ color: scrolled ? c.navy : '#fff' }} />}
            </button>
          </nav>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="lg:hidden border-t px-6 pb-6 pt-4"
              style={{ background: 'rgba(250,249,247,.97)', backdropFilter: 'blur(18px)', borderColor: c.grey100 }}
            >
              {navItems.map(n => (
                <button key={n.href} onClick={() => scrollTo(n.href)} className="block w-full text-left py-3 text-base font-medium" style={{ color: c.grey700 }}>
                  {n.label}
                </button>
              ))}
              <Link to="/" className="block py-3 text-sm" style={{ color: c.grey500 }}>← Home 4 Web Lab</Link>
              <button onClick={() => scrollTo('#contatti')} className="mt-2 w-full py-3 rounded-lg text-sm font-semibold text-white" style={{ background: c.teal }}>
                Contatta lo studio
              </button>
            </motion.div>
          )}
        </header>

        {/* ═══════════ HERO ═══════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${c.navy} 0%, ${c.navyLight} 60%, #1a3040 100%)` }}>
          {/* subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.4) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

          <div className="max-w-7xl mx-auto px-6 py-32 lg:py-0 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div initial="hidden" animate="visible" className="space-y-8">
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold tracking-widest uppercase" style={{ color: c.tealLight }}>
                Consulenza aziendale, contabile e fiscale
              </motion.p>
              <motion.h1 variants={fadeUp} custom={0.1} className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight" style={{ color: '#fff' }}>
                Un supporto concreto per guidare le decisioni della tua impresa
              </motion.h1>
              <motion.p variants={fadeUp} custom={0.2} className="text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,.65)' }}>
                Servizi Impresa 2000 affianca aziende e imprenditori con un approccio che integra consulenza aziendale, contabile, fiscale e societaria, trasformando dati e complessità in strumenti utili per decidere meglio.
              </motion.p>
              <motion.div variants={fadeUp} custom={0.3} className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('#contatti')} className="px-7 py-3.5 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-[1.03]" style={{ background: c.teal, boxShadow: '0 4px 20px rgba(61,122,122,.35)' }}>
                  Richiedi un confronto
                </button>
                <button onClick={() => scrollTo('#consulenza')} className="px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.2)' }}>
                  Scopri i servizi <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .3, ease: [.25,.46,.45,.94] }} className="hidden lg:block">
              <img src={heroImg} alt="Dashboard consulenza aziendale" className="rounded-2xl shadow-2xl w-full" width={672} height={448} />
            </motion.div>
          </div>

          {/* bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-24" style={{ background: `linear-gradient(to top, ${c.warmWhite}, transparent)` }} />
        </section>

        {/* ── trust strip ── */}
        <section className="relative -mt-16 z-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
              style={{ background: c.grey100, boxShadow: '0 8px 40px rgba(0,0,0,.06)' }}
            >
              {[
                { icon: <Target className="w-5 h-5" />, text: 'Consulenza su misura' },
                { icon: <Users className="w-5 h-5" />, text: "Supporto all'imprenditore" },
                { icon: <Eye className="w-5 h-5" />, text: 'Visione integrata' },
                { icon: <Lightbulb className="w-5 h-5" />, text: 'Orientamento decisionale' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i * 0.08} className="flex items-center gap-3 px-6 py-5" style={{ background: '#fff' }}>
                  <div className="p-2 rounded-lg" style={{ background: `${c.teal}12`, color: c.teal }}>{item.icon}</div>
                  <span className="text-sm font-semibold" style={{ color: c.navy }}>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════ CHI SIAMO ═══════════ */}
        <section id="chi-siamo" className="py-28 lg:py-36" style={{ background: c.warmWhite }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3 space-y-6">
                <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest uppercase" style={{ color: c.teal }}>Chi siamo</motion.p>
                <motion.h2 variants={fadeUp} custom={0.05} className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: c.navy }}>
                  Una consulenza che parte dai numeri e arriva alle decisioni
                </motion.h2>
                <motion.p variants={fadeUp} custom={0.1} className="text-lg leading-relaxed" style={{ color: c.grey500 }}>
                  Servizi Impresa 2000 opera nel supporto alle imprese con una visione integrata che unisce lettura dei dati, pianificazione, controllo di gestione e consulenza fiscale e societaria. L'obiettivo non è fornire solo adempimenti, ma strumenti utili per interpretare l'andamento aziendale, valutare scenari e accompagnare l'imprenditore nelle scelte.
                </motion.p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 space-y-5">
                {[
                  { title: 'Approccio integrato', desc: 'Consulenza aziendale, contabile, fiscale e societaria coordinate in modo coerente.' },
                  { title: 'Supporto decisionale', desc: "Analisi e strumenti pensati per aiutare l'impresa a leggere i risultati e pianificare il futuro." },
                ].map((card, i) => (
                  <motion.div
                    key={i} variants={fadeUp} custom={i * 0.1 + 0.1}
                    className="p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ background: '#fff', borderColor: c.grey100 }}
                  >
                    <h3 className="text-lg font-bold mb-2" style={{ color: c.navy }}>{card.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: c.grey500 }}>{card.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ AREE DI CONSULENZA ═══════════ */}
        <section id="consulenza" className="py-28 lg:py-36" style={{ background: c.offWhite }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest uppercase" style={{ color: c.teal }}>Consulenza</motion.p>
              <motion.h2 variants={fadeUp} custom={0.05} className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: c.navy }}>
                Aree di intervento
              </motion.h2>
              <motion.p variants={fadeUp} custom={0.1} className="text-base" style={{ color: c.grey500 }}>
                Servizi pensati per accompagnare l'impresa nelle attività ordinarie e nelle scelte più rilevanti.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Briefcase />, title: 'Consulenza aziendale', desc: "Supporto nell'analisi dell'andamento dell'impresa, nella lettura dei risultati e nella definizione di azioni più consapevoli." },
                { icon: <BarChart3 />, title: 'Controllo di gestione', desc: 'Analisi della contabilità generale e analitica, budget, scostamenti e indicatori utili a monitorare le performance.' },
                { icon: <TrendingUp />, title: 'Pianificazione e sviluppo', desc: 'Valutazione delle operazioni future e degli scenari aziendali per affrontare il mercato con maggiore visione.' },
                { icon: <Scale />, title: 'Consulenza fiscale e tributaria', desc: 'Affiancamento nella gestione fiscale con un approccio chiaro, ordinato e coerente con gli obiettivi aziendali.' },
                { icon: <Building2 />, title: 'Consulenza societaria', desc: 'Supporto nelle dinamiche societarie e organizzative, con attenzione alla struttura e alla sostenibilità delle scelte.' },
                { icon: <Search />, title: 'Analisi di mercato e posizionamento', desc: 'Strumenti per comprendere il contesto competitivo e valutare opportunità, criticità e direzioni strategiche.' },
              ].map((s, i) => (
                <motion.div
                  key={i} variants={fadeUp} custom={i * 0.07}
                  className="group p-7 rounded-xl border transition-all duration-400 hover:shadow-xl hover:-translate-y-1 cursor-default"
                  style={{ background: '#fff', borderColor: c.grey100 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:scale-110"
                    style={{ background: `${c.teal}10`, color: c.teal }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: c.navy }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: c.grey500 }}>{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════ METODO ═══════════ */}
        <section id="metodo" className="py-28 lg:py-36" style={{ background: c.navy }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest uppercase" style={{ color: c.tealLight }}>Processo</motion.p>
              <motion.h2 variants={fadeUp} custom={0.05} className="text-3xl sm:text-4xl font-bold leading-tight text-white">
                Come lavoriamo
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { n: '01', title: 'Ascolto e raccolta dati', desc: "Comprendere la realtà dell'impresa, le esigenze specifiche e gli obiettivi dichiarati." },
                { n: '02', title: 'Analisi della situazione', desc: 'Lettura dei dati contabili, finanziari e gestionali per ottenere una fotografia chiara.' },
                { n: '03', title: 'Strumenti operativi', desc: 'Elaborazione di report, indicatori e prospetti utili a supportare valutazioni concrete.' },
                { n: '04', title: 'Confronto continuo', desc: "Dialogo costante con l'imprenditore per adattare l'intervento alle dinamiche reali." },
              ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} custom={i * 0.1} className="relative">
                  <span className="text-5xl font-black" style={{ color: `${c.teal}30` }}>{step.n}</span>
                  <h3 className="text-lg font-bold mt-3 mb-2 text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,.55)' }}>{step.desc}</p>
                  {i < 3 && <div className="hidden lg:block absolute top-8 -right-4 w-8" style={{ borderTop: `1px dashed ${c.teal}40` }} />}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════ PERCHÉ ═══════════ */}
        <section id="vantaggi" className="py-28 lg:py-36" style={{ background: c.warmWhite }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest uppercase" style={{ color: c.teal }}>Vantaggi</motion.p>
              <motion.h2 variants={fadeUp} custom={0.05} className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: c.navy }}>
                Perché un'impresa cerca un partner, non solo un fornitore
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Eye className="w-6 h-6" />, title: 'Visione trasversale', desc: "Lettura coordinata degli aspetti aziendali, contabili e fiscali dell'impresa." },
                { icon: <MessageSquare className="w-6 h-6" />, title: 'Linguaggio chiaro', desc: 'Comunicazione diretta, senza tecnicismi inutili, orientata alla comprensione.' },
                { icon: <HandshakeIcon className="w-6 h-6" />, title: 'Supporto personalizzato', desc: "Un rapporto costruito sull'ascolto e sull'adattamento alle reali esigenze." },
                { icon: <Target className="w-6 h-6" />, title: 'Focus sui risultati', desc: 'Consulenza che mira alla sostenibilità e alla coerenza delle decisioni nel tempo.' },
              ].map((v, i) => (
                <motion.div
                  key={i} variants={fadeUp} custom={i * 0.08}
                  className="text-center p-8 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: '#fff', borderColor: c.grey100 }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: `${c.teal}10`, color: c.teal }}>
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: c.navy }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: c.grey500 }}>{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.3}
              className="text-center mt-14 text-base italic max-w-2xl mx-auto" style={{ color: c.grey500 }}
            >
              "Quando i numeri vengono letti correttamente, diventano strumenti di orientamento. È da lì che nasce una consulenza davvero utile."
            </motion.p>
          </div>
        </section>

        {/* ═══════════ CONTATTI ═══════════ */}
        <section id="contatti" className="py-28 lg:py-36" style={{ background: c.offWhite }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest uppercase" style={{ color: c.teal }}>Contatti</motion.p>
              <motion.h2 variants={fadeUp} custom={0.05} className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: c.navy }}>
                Richiedi un confronto
              </motion.h2>
              <motion.p variants={fadeUp} custom={0.1} className="text-base" style={{ color: c.grey500 }}>
                Un primo contatto può essere utile per comprendere esigenze, obiettivi e ambiti di intervento.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-5 gap-10">
              {/* form */}
              <motion.div variants={fadeUp} className="lg:col-span-3">
                <form onSubmit={e => e.preventDefault()} className="p-8 rounded-2xl border space-y-5" style={{ background: '#fff', borderColor: c.grey100 }}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {['Nome e cognome', 'Azienda', 'Email', 'Telefono'].map(label => (
                      <div key={label}>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: c.grey700 }}>{label}</label>
                        <input
                          type="text" placeholder={label}
                          className="w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-200 focus:ring-2"
                          style={{ borderColor: c.grey100, background: c.warmWhite, color: c.grey700 }}
                          onFocus={e => { e.target.style.borderColor = c.teal; e.target.style.boxShadow = `0 0 0 3px ${c.teal}18`; }}
                          onBlur={e => { e.target.style.borderColor = c.grey100; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: c.grey700 }}>Messaggio</label>
                    <textarea
                      rows={4} placeholder="Descrivi brevemente la tua esigenza"
                      className="w-full px-4 py-3 rounded-lg text-sm border outline-none resize-none transition-all duration-200"
                      style={{ borderColor: c.grey100, background: c.warmWhite, color: c.grey700 }}
                      onFocus={e => { e.target.style.borderColor = c.teal; e.target.style.boxShadow = `0 0 0 3px ${c.teal}18`; }}
                      onBlur={e => { e.target.style.borderColor = c.grey100; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 rounded accent-[#3D7A7A]" />
                    <span className="text-xs leading-relaxed" style={{ color: c.grey500 }}>
                      Acconsento al trattamento dei dati personali ai sensi della normativa vigente sulla privacy.
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                    style={{ background: c.teal, boxShadow: '0 4px 16px rgba(61,122,122,.25)' }}
                  >
                    Invia richiesta
                  </button>
                </form>
              </motion.div>

              {/* info box */}
              <motion.div variants={fadeUp} custom={0.15} className="lg:col-span-2 space-y-6">
                <div className="p-8 rounded-2xl border" style={{ background: '#fff', borderColor: c.grey100 }}>
                  <h3 className="text-lg font-bold mb-6" style={{ color: c.navy }}>Recapiti</h3>
                  <div className="space-y-5">
                    {[
                      { icon: <Building2 className="w-5 h-5" />, text: 'Servizi Impresa 2000 SRL' },
                      { icon: <MapPin className="w-5 h-5" />, text: 'Piazza Europa Unita 18/B\n31033 Castelfranco Veneto (TV)' },
                      { icon: <Phone className="w-5 h-5" />, text: '+39 0423 723960' },
                      { icon: <Mail className="w-5 h-5" />, text: 'info@servizimpresa2000.com' },
                    ].map((c2, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="p-2 rounded-lg shrink-0" style={{ background: `${c.teal}10`, color: c.teal }}>{c2.icon}</div>
                        <span className="text-sm whitespace-pre-line" style={{ color: c.grey500 }}>{c2.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs leading-relaxed px-2" style={{ color: c.grey300 }}>
                  Demo illustrativa: testi, immagini e struttura possono essere personalizzati in base alle reali priorità commerciali dell'azienda.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="py-16" style={{ background: c.navy }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
              <div>
                <span className="text-xl font-semibold text-white">Servizi Impresa 2000</span>
                <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,.4)' }}>Castelfranco Veneto (TV)</p>
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm" style={{ color: 'rgba(255,255,255,.5)' }}>
                <span>Consulenza aziendale</span>
                <span>Fiscale e tributaria</span>
                <span>Controllo di gestione</span>
                <span>Consulenza societaria</span>
              </div>
            </div>
            <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,.3)' }}>
                Demo concettuale realizzata per presentazione web
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,.3)' }}>
                +39 0423 723960 · info@servizimpresa2000.com
              </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default DemoSI2000;
