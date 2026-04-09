import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Wrench, Shield, Settings, Package, Truck, ClipboardCheck, Zap, Radio, Building2, Construction, Award, Factory, HeartHandshake, CheckCircle2 } from 'lucide-react';
import heroImg from '@/assets/zardini-hero.jpg';
import labImg from '@/assets/zardini-lab.jpg';

const navItems = [
  { label: 'Azienda', href: '#azienda' },
  { label: 'Prodotti', href: '#prodotti' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Processo', href: '#processo' },
  { label: 'Settori', href: '#settori' },
  { label: 'Contatti', href: '#contatti' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const DemoZardini = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
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
    <div className="font-sans antialiased" style={{ fontFamily: "'Inter', sans-serif", color: '#1F2933' }}>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-lg' : ''}`}
        style={{
          height: 72,
          background: isScrolled ? 'rgba(249,250,251,0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(18px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(229,231,235,0.5)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
          <span className="text-xl font-bold tracking-tight" style={{ color: isScrolled ? '#163A5F' : '#fff' }}>
            Zardini srl
          </span>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <li key={item.href}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{ color: isScrolled ? '#1F2933' : 'rgba(255,255,255,0.9)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = isScrolled ? 'rgba(22,58,95,0.06)' : 'rgba(255,255,255,0.1)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo('#contatti')}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{ background: '#163A5F', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1e4d7a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#163A5F')}
          >
            Richiedi informazioni
          </button>

          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen
              ? <X className="w-6 h-6" style={{ color: isScrolled ? '#1F2933' : '#fff' }} />
              : <Menu className="w-6 h-6" style={{ color: isScrolled ? '#1F2933' : '#fff' }} />
            }
          </button>
        </nav>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full inset-x-0 border-b shadow-lg"
            style={{ background: 'rgba(249,250,251,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map(item => (
                <li key={item.href}>
                  <button onClick={() => scrollTo(item.href)} className="w-full text-left px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-100 transition-colors" style={{ color: '#1F2933' }}>
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => scrollTo('#contatti')} className="w-full mt-2 px-4 py-3 rounded-lg text-base font-semibold text-white" style={{ background: '#163A5F' }}>
                  Richiedi informazioni
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0d1b2a' }}>
        <div className="absolute inset-0">
          <img src={heroImg} alt="Componenti in acciaio zincato" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(22,58,95,0.78) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <motion.span variants={fadeUp} custom={0} className="inline-block text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: '#AEB8C2' }}>
              Forgiatura a caldo, zincatura e lavorazioni complete
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6" style={{ color: '#F9FAFB' }}>
              Accessori strutturali in acciaio, pronti per il cantiere
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: '#AEB8C2' }}>
              Zardini srl affianca aziende, progettisti e uffici tecnici con una produzione specializzata che integra forgiatura a caldo, zincatura, finitura, imballaggio e gestione della commessa in un unico flusso operativo.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('#contatti')}
                className="px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: '#163A5F', color: '#fff', boxShadow: '0 4px 20px rgba(22,58,95,0.4)' }}
              >
                Contatta l'azienda
              </button>
              <button
                onClick={() => scrollTo('#prodotti')}
                className="px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{ border: '1px solid rgba(174,184,194,0.4)', color: '#AEB8C2' }}
              >
                Scopri le lavorazioni
              </button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block">
            <div className="relative">
              <img src={heroImg} alt="Dettaglio componenti" className="rounded-2xl shadow-2xl w-full object-cover" style={{ maxHeight: 480 }} />
              <div className="absolute -bottom-6 -left-6 p-5 rounded-xl shadow-xl" style={{ background: 'rgba(249,250,251,0.95)', backdropFilter: 'blur(12px)' }}>
                <ul className="space-y-3">
                  {['Produzione specializzata', 'Zincatura integrata', 'Supporto tecnico'].map((t, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: '#1F2933' }}>
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#163A5F' }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CHI SIAMO ── */}
      <section id="azienda" className="py-28 lg:py-36" style={{ background: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <motion.div className="lg:col-span-3" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
              <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#6B7280' }}>Chi siamo</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#163A5F' }}>
                Un partner produttivo completo
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                Zardini srl si presenta come una realtà capace di seguire l'intero percorso della fornitura: produzione, zincatura a caldo, confezionamento, packing list e gestione della commessa. L'esperienza maturata nel tempo nella forgiatura a caldo consente all'azienda di rispondere con competenza a richieste tecniche destinate a infrastrutture, linee energetiche, telecomunicazioni e strutture metalliche in genere.
              </p>
            </motion.div>

            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                { title: 'Esperienza tecnica', desc: 'Know-how maturato nella lavorazione di accessori per strutture e impianti.' },
                { title: 'Filiera più ordinata', desc: 'Un unico interlocutore per più fasi della fornitura.' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp} custom={i}
                  className="p-6 rounded-xl border transition-shadow hover:shadow-lg"
                  style={{ background: '#fff', borderColor: '#E5E7EB' }}
                >
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#163A5F' }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COSA REALIZZIAMO ── */}
      <section id="prodotti" className="py-28 lg:py-36" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#6B7280' }}>Prodotti</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#163A5F' }}>
              Prodotti per ancoraggio e carpenteria strutturale
            </h2>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Una produzione orientata alla funzionalità, alla resistenza e alla preparazione al montaggio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Tirafondi', desc: 'Elementi di ancoraggio per fondazioni in calcestruzzo, realizzati in acciaio forgiato con filettatura calibrata e zincatura a caldo.', icon: Wrench },
              { name: 'Tiranti', desc: 'Barre filettate e tiranti strutturali progettati per resistere a carichi di trazione in applicazioni infrastrutturali e civili.', icon: Settings },
              { name: 'Gabbie di fondazione', desc: 'Sistemi preassemblati per fondazioni, composti da tirafondi, piastre e distanziatori, pronti per la posa in opera.', icon: Construction },
              { name: 'Perni forgiati', desc: 'Perni ottenuti per forgiatura a caldo, lavorati con tolleranze controllate per applicazioni strutturali e meccaniche.', icon: Shield },
              { name: 'Collari per pali', desc: 'Elementi di fissaggio e collegamento per pali in acciaio, zincati a caldo e dimensionati su specifiche del progetto.', icon: Package },
              { name: 'Particolari filettati e accessori', desc: 'Componenti strutturali filettati, bulloneria speciale e accessori complementari per carpenteria metallica.', icon: ClipboardCheck },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="group p-7 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300" style={{ background: '#163A5F' }}>
                  <item.icon className="w-5 h-5" style={{ color: '#AEB8C2' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1F2933' }}>{item.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIZI ── */}
      <section id="servizi" className="py-28 lg:py-36" style={{ background: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#6B7280' }}>Servizi</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#163A5F' }}>
              Oltre al prodotto, supporto concreto
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Consulenza tecnica', desc: 'Supporto a progettisti e cantieri nella valutazione delle soluzioni più adatte e nella definizione delle specifiche.', icon: HeartHandshake },
              { title: 'Premontaggio accessori', desc: 'Preparazione dei componenti con accessori necessari per facilitare le fasi operative in cantiere.', icon: Settings },
              { title: 'Finitura e confezionamento', desc: 'Forniture ordinate, imballate e organizzate per una gestione più efficiente della commessa.', icon: Package },
              { title: 'Gestione commessa', desc: 'Coordinamento delle fasi di lavorazione e consegna con attenzione alla chiarezza documentale.', icon: ClipboardCheck },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="p-8 rounded-xl border transition-all duration-300 hover:shadow-lg"
                style={{ background: '#fff', borderColor: '#E5E7EB' }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: 'rgba(22,58,95,0.08)' }}>
                  <item.icon className="w-5 h-5" style={{ color: '#163A5F' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2933' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO ── */}
      <section id="processo" className="py-28 lg:py-36 relative overflow-hidden" style={{ background: '#0d1b2a' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23AEB8C2\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#6B7280' }}>Processo</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#E5E7EB' }}>
              Dal disegno alla fornitura pronta
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-5 gap-4">
            {[
              { step: '01', label: 'Analisi richiesta' },
              { step: '02', label: 'Produzione' },
              { step: '03', label: 'Zincatura a caldo' },
              { step: '04', label: 'Preparazione e imballo' },
              { step: '05', label: 'Consegna della commessa' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="text-center p-6 rounded-xl border transition-all duration-300 hover:border-[#163A5F]"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(174,184,194,0.15)' }}
              >
                <span className="text-3xl font-bold block mb-3" style={{ color: '#163A5F' }}>{item.step}</span>
                <span className="text-sm font-medium" style={{ color: '#AEB8C2' }}>{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10 text-sm" style={{ color: '#6B7280' }}>
            L'integrazione delle fasi aiuta a semplificare la gestione e a ridurre dispersioni operative.
          </motion.p>
        </div>
      </section>

      {/* ── SETTORI ── */}
      <section id="settori" className="py-28 lg:py-36" style={{ background: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#6B7280' }}>Settori</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#163A5F' }}>
              Applicazioni e contesti di utilizzo
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Trasporto energia', desc: 'Accessori per tralicci, sostegni e infrastrutture delle reti elettriche ad alta e media tensione.', icon: Zap },
              { title: 'Telecomunicazioni', desc: 'Componenti per pali, torri e strutture di supporto per antenne e apparati di rete.', icon: Radio },
              { title: 'Carpenteria metallica', desc: 'Elementi di ancoraggio e collegamento per strutture in acciaio destinate all'edilizia civile e industriale.', icon: Building2 },
              { title: 'Strutture tecniche e infrastrutturali', desc: 'Soluzioni su specifica per opere infrastrutturali, impianti e installazioni tecniche particolari.', icon: Construction },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="p-7 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ background: '#fff', borderColor: '#E5E7EB' }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: '#163A5F' }}>
                  <item.icon className="w-5 h-5" style={{ color: '#AEB8C2' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1F2933' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUNTI DI FORZA ── */}
      <section className="py-28 lg:py-36" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#6B7280' }}>Punti di forza</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#163A5F' }}>
              Perché scegliere Zardini
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Esperienza pluridecennale', icon: Award },
              { title: 'Produzione e zincatura nello stesso flusso', icon: Factory },
              { title: 'Supporto tecnico dedicato', icon: HeartHandshake },
              { title: 'Forniture pensate per il montaggio', icon: Truck },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="text-center p-8 rounded-xl border transition-all duration-300 hover:shadow-lg"
                style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(22,58,95,0.08)' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#163A5F' }} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: '#1F2933' }}>{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: '#163A5F' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${labImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#F9FAFB' }}>
              Hai bisogno di una soluzione su misura?
            </h2>
            <p className="text-lg mb-10" style={{ color: '#AEB8C2' }}>
              Parliamo della tua fornitura: il team Zardini è a disposizione per richieste tecniche, informazioni sui prodotti o necessità legate alla commessa.
            </p>
            <button
              onClick={() => scrollTo('#contatti')}
              className="px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
              style={{ background: '#fff', color: '#163A5F' }}
            >
              Contatta Zardini srl
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── CONTATTI ── */}
      <section id="contatti" className="py-28 lg:py-36" style={{ background: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#6B7280' }}>Contatti</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#163A5F' }}>
              Parliamo della tua fornitura
            </h2>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Per richieste tecniche, informazioni sui prodotti o necessità legate alla commessa, il team Zardini è a disposizione.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#1F2933' }}>Zardini srl</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#163A5F' }} />
                  <span className="text-sm" style={{ color: '#4B5563' }}>Via Sile, 35 — Castelfranco Veneto (TV)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#163A5F' }} />
                  <span className="text-sm" style={{ color: '#4B5563' }}>(+39) 0423 722890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#163A5F' }} />
                  <span className="text-sm" style={{ color: '#4B5563' }}>zardini@bisolzinco.it</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <form onSubmit={e => e.preventDefault()} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nome" className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2 transition-shadow" style={{ borderColor: '#E5E7EB', background: '#fff' }} />
                  <input type="text" placeholder="Azienda" className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2 transition-shadow" style={{ borderColor: '#E5E7EB', background: '#fff' }} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2 transition-shadow" style={{ borderColor: '#E5E7EB', background: '#fff' }} />
                  <input type="tel" placeholder="Telefono" className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2 transition-shadow" style={{ borderColor: '#E5E7EB', background: '#fff' }} />
                </div>
                <textarea placeholder="Richiesta" rows={4} className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2 transition-shadow resize-none" style={{ borderColor: '#E5E7EB', background: '#fff' }} />
                <button type="submit" className="px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.02]" style={{ background: '#163A5F', color: '#fff' }}>
                  Invia richiesta
                </button>
              </form>
            </motion.div>
          </div>

          <p className="text-center mt-12 text-xs" style={{ color: '#9CA3AF' }}>
            Demo illustrativa: testi, immagini e struttura possono essere personalizzati in base alle reali priorità commerciali dell'azienda.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 border-t" style={{ background: '#0d1b2a', borderColor: 'rgba(174,184,194,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div>
              <span className="text-lg font-bold" style={{ color: '#F9FAFB' }}>Zardini srl</span>
              <p className="text-sm mt-2" style={{ color: '#6B7280' }}>Accessori strutturali in acciaio, dalla forgiatura alla consegna.</p>
            </div>
            <div>
              <span className="text-sm font-semibold block mb-3" style={{ color: '#AEB8C2' }}>Prodotti</span>
              <ul className="space-y-1.5 text-sm" style={{ color: '#6B7280' }}>
                <li>Tirafondi e tiranti</li>
                <li>Gabbie di fondazione</li>
                <li>Perni e collari</li>
              </ul>
            </div>
            <div>
              <span className="text-sm font-semibold block mb-3" style={{ color: '#AEB8C2' }}>Servizi</span>
              <ul className="space-y-1.5 text-sm" style={{ color: '#6B7280' }}>
                <li>Consulenza tecnica</li>
                <li>Zincatura a caldo</li>
                <li>Gestione commessa</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-xs" style={{ borderColor: 'rgba(174,184,194,0.1)', color: '#6B7280' }}>
            Demo concettuale realizzata per presentazione web
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoZardini;
