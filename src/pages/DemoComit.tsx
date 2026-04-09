import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Globe, Truck, ShieldCheck, Building2, ArrowRight, Phone, Mail, MapPin, TrendingUp, Users, Warehouse, ClipboardCheck, HandshakeIcon, Package, HeartPulse, Map } from 'lucide-react';
import comitHero from '@/assets/comit-hero.jpg';
import comitStalle from '@/assets/comit-stalle.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const ComitHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Azienda', 'Servizi', 'Rete', 'Infrastruttura', 'Contatti'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Comit Europa <span className="text-[#C7B299] font-normal text-sm ml-1">Srl</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-white/70 hover:text-[#C7B299] transition-colors duration-300">
              {l}
            </a>
          ))}
        </nav>
        <a href="#contatti" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C7B299] text-[#0D1B2A] text-sm font-semibold hover:bg-[#b8a48a] transition-all duration-300">
          Richiedi Informazioni
        </a>
      </div>
    </header>
  );
};

const DemoComit = () => {
  const servizi = [
    { icon: Globe, title: 'Import Export Bestiame Europeo', desc: 'Operazioni commerciali strutturate con allevamenti e operatori in tutta Europa, dalla contrattazione alla consegna.' },
    { icon: Package, title: 'Commercio Vitelli Nazionali', desc: 'Fornitura di vitelli da ristallo sul mercato italiano con selezione attenta e continuità di approvvigionamento.' },
    { icon: TrendingUp, title: 'Bovini da Allevamento e Macello', desc: 'Capi selezionati per destinazione specifica, con attenzione alle caratteristiche richieste dal cliente.' },
    { icon: Truck, title: 'Gestione Logistica Internazionale', desc: 'Coordinamento dei trasporti su scala europea nel rispetto delle normative sanitarie e di benessere animale.' },
    { icon: Warehouse, title: 'Stalle e Centri di Raccolta', desc: 'Strutture proprie per la sosta, il controllo e la gestione operativa dei capi durante le fasi di commercializzazione.' },
    { icon: HandshakeIcon, title: 'Supporto Operativo e Commerciale', desc: 'Assistenza dedicata nella gestione delle forniture, dalla fase di trattativa fino alla consegna finale.' },
  ];

  const paesi = ['Francia', 'Spagna', 'Germania', 'Irlanda', 'Olanda', 'Belgio', 'Lussemburgo', 'Rep. Ceca', 'Slovacchia', 'Polonia'];

  const stats = [
    { icon: TrendingUp, label: '25+ anni', desc: 'di esperienza nel settore' },
    { icon: Globe, label: 'Network europeo', desc: 'Rapporti consolidati in 10+ paesi' },
    { icon: Warehouse, label: 'Stalle operative', desc: 'In Italia ed Europa' },
    { icon: ShieldCheck, label: 'Filiera controllata', desc: 'Tracciabilità e certificazioni' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F6]" style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}>
      <ComitHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={comitHero} alt="Trasporto bestiame europeo" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-0">
          <motion.div className="max-w-2xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[#C7B299] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              Commercio internazionale bestiame
            </motion.p>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Import Export Bestiame in Europa dal 1997
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Soluzioni complete per il commercio internazionale di vitelli, bovini e bestiame da allevamento con una rete operativa in tutta Europa.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4">
              <a href="#contatti" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#C7B299] text-[#0D1B2A] font-semibold hover:bg-[#b8a48a] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C7B299]/20">
                Richiedi Informazioni <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#azienda" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300">
                Scopri l'Azienda
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F8F6] to-transparent" />
      </section>

      {/* TRUST / NUMERI */}
      <section className="relative z-10 -mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-[#E5E5E0] hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#4E6E58]/10 flex items-center justify-center mb-4 group-hover:bg-[#4E6E58]/20 transition-colors">
                  <s.icon className="w-6 h-6 text-[#4E6E58]" />
                </div>
                <p className="text-2xl font-bold text-[#0D1B2A] mb-1">{s.label}</p>
                <p className="text-sm text-[#6B7280]">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section id="azienda" className="py-28 lg:py-36" style={{ scrollMarginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-[#4E6E58] text-sm font-semibold tracking-[0.15em] uppercase mb-4">Chi siamo</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 leading-tight">
                Un partner solido nel commercio europeo di bestiame
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-6 text-lg">
                Comit Europa opera da oltre vent'anni nel mercato europeo del commercio di bestiame da ristallo, allevamento e macello, offrendo un servizio completo e altamente specializzato a clienti e fornitori in tutta Europa.
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                La nostra struttura consente di gestire l'intero ciclo operativo: dalla selezione e l'acquisto dei capi, alla logistica internazionale, fino alla consegna presso la destinazione finale. Un unico interlocutore per ogni fase della fornitura.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative">
                <img src={comitStalle} alt="Strutture moderne Comit Europa" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" width={1920} height={1080} />
                <div className="absolute -bottom-6 -left-6 bg-[#0D1B2A] text-white rounded-2xl p-6 shadow-xl max-w-xs hidden md:block">
                  <p className="text-[#C7B299] text-3xl font-bold mb-1">25+</p>
                  <p className="text-white/80 text-sm">Anni di attività nel commercio europeo di bestiame</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className="py-28 lg:py-36 bg-[#0D1B2A]" style={{ scrollMarginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-[#C7B299] text-sm font-semibold tracking-[0.15em] uppercase mb-4">Attività principali</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Servizi e competenze</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Un'offerta completa per il commercio, la logistica e la gestione operativa del bestiame a livello europeo.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((s, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#4E6E58]/20 flex items-center justify-center mb-5 group-hover:bg-[#4E6E58]/30 transition-colors">
                  <s.icon className="w-6 h-6 text-[#C7B299]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RETE OPERATIVA */}
      <section id="rete" className="py-28 lg:py-36" style={{ scrollMarginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-[#4E6E58] text-sm font-semibold tracking-[0.15em] uppercase mb-4">Rete internazionale</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 leading-tight">
                Presenza commerciale in tutta Europa
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-8 text-lg">
                Rapporti commerciali consolidati con Francia, Spagna, Germania, Irlanda, Olanda, Belgio, Lussemburgo, Repubblica Ceca, Slovacchia e altri mercati europei.
              </p>
              <div className="flex flex-wrap gap-3">
                {paesi.map(p => (
                  <span key={p} className="px-4 py-2 rounded-full bg-[#4E6E58]/10 text-[#4E6E58] text-sm font-medium border border-[#4E6E58]/20">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-[#0D1B2A] rounded-2xl p-10 text-center shadow-2xl">
                <Map className="w-16 h-16 text-[#C7B299] mx-auto mb-6" />
                <p className="text-5xl font-bold text-white mb-2">10+</p>
                <p className="text-white/60 text-lg">Paesi europei serviti</p>
                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-[#C7B299] font-bold text-lg">Import</p>
                    <p className="text-white/50 text-sm">Bestiame da ristallo e allevamento</p>
                  </div>
                  <div>
                    <p className="text-[#C7B299] font-bold text-lg">Export</p>
                    <p className="text-white/50 text-sm">Bovini e vitelli verso mercati europei</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INFRASTRUTTURA */}
      <section id="infrastruttura" className="relative py-28 lg:py-36 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
        <div className="absolute inset-0">
          <img src={comitStalle} alt="Infrastruttura Comit Europa" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-[#0D1B2A]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-[#C7B299] text-sm font-semibold tracking-[0.15em] uppercase mb-4">
              Infrastruttura
            </motion.p>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Strutture operative e centri di raccolta
            </motion.h2>
            <motion.p variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Le nostre strutture di raccolta e stabulazione garantiscono continuità operativa, controllo sanitario e gestione efficiente della filiera.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Warehouse, label: 'Stalle attrezzate', desc: 'Strutture moderne per sosta e controllo' },
                { icon: HeartPulse, label: 'Controllo sanitario', desc: 'Monitoraggio costante del benessere animale' },
                { icon: ClipboardCheck, label: 'Tracciabilità', desc: 'Documentazione e certificazioni complete' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <item.icon className="w-8 h-8 text-[#C7B299] mx-auto mb-4" />
                  <p className="text-white font-bold mb-2">{item.label}</p>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-28 lg:py-36 bg-[#4E6E58]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Un Partner Affidabile per il Commercio Europeo di Bestiame
            </motion.h2>
            <motion.p variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Affidati a un'azienda con oltre 25 anni di esperienza e una rete operativa consolidata in tutta Europa.
            </motion.p>
            <motion.a variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} href="#contatti"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C7B299] text-[#0D1B2A] font-bold text-lg hover:bg-[#b8a48a] transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-black/20">
              Contatta Comit Europa <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="py-28 lg:py-36 bg-[#F8F8F6]" style={{ scrollMarginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-[#4E6E58] text-sm font-semibold tracking-[0.15em] uppercase mb-4">Contatti</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">Parliamo del tuo progetto</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">Per richieste commerciali, informazioni sui servizi o necessità operative, il team Comit Europa è a disposizione.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-6">Comit Europa Srl</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: 'Piazza Europa Unita 41, 31033 Castelfranco Veneto (TV)' },
                    { icon: Phone, text: '0423 497111' },
                    { icon: Mail, text: 'amministrazione@comiteuropa.com' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#4E6E58]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#4E6E58]" />
                      </div>
                      <p className="text-[#4B5563] pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E5E5E0]">
                <div className="space-y-5">
                  {['Nome', 'Azienda', 'Email', 'Telefono'].map(field => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">{field}</label>
                      <input type="text" placeholder={field} className="w-full px-4 py-3 rounded-lg border border-[#E5E5E0] bg-[#F8F8F6] text-sm focus:outline-none focus:ring-2 focus:ring-[#4E6E58]/30 focus:border-[#4E6E58] transition-all" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">Richiesta</label>
                    <textarea rows={4} placeholder="Descrivi la tua richiesta..." className="w-full px-4 py-3 rounded-lg border border-[#E5E5E0] bg-[#F8F8F6] text-sm focus:outline-none focus:ring-2 focus:ring-[#4E6E58]/30 focus:border-[#4E6E58] transition-all resize-none" />
                  </div>
                  <button className="w-full py-3.5 rounded-lg bg-[#4E6E58] text-white font-semibold hover:bg-[#3d5a47] transition-all duration-300">
                    Invia richiesta
                  </button>
                </div>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-4 text-center">
                Demo illustrativa: testi, immagini e struttura possono essere personalizzati in base alle reali priorità commerciali dell'azienda.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D1B2A] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <p className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Comit Europa <span className="text-[#C7B299] font-normal text-sm">Srl</span>
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                Commercio internazionale di bestiame da allevamento e macello in tutta Europa.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Servizi</p>
              <ul className="space-y-2 text-sm text-white/40">
                <li>Import Export Bestiame</li>
                <li>Commercio Vitelli</li>
                <li>Logistica Internazionale</li>
                <li>Centri di Raccolta</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Contatti</p>
              <ul className="space-y-2 text-sm text-white/40">
                <li>Piazza Europa Unita 41</li>
                <li>31033 Castelfranco Veneto (TV)</li>
                <li>Tel. 0423 497111</li>
                <li>amministrazione@comiteuropa.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-white/30">Demo concettuale realizzata per presentazione web</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoComit;
