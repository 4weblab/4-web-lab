import { motion } from 'framer-motion';
import {
  ArrowRight, ChevronDown, Cpu, Wifi, Zap, Settings, Shield, Factory,
  Cog, Lightbulb, Monitor, Gauge, Smartphone, Wrench,
  Clock, CheckCircle2, FlaskConical, PackageCheck, Headphones,
  Award, Users, ThumbsUp
} from 'lucide-react';

import heroBg from '@/assets/rbt-hero.webp';
import labImg from '@/assets/rbt-lab.webp';

/* ─── animation helpers ─── */
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const section = 'scroll-mt-20';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/* ─── data ─── */
const trustBadges = [
  { icon: Clock, label: '40+ anni di esperienza' },
  { icon: Factory, label: 'Produzione interna' },
  { icon: Settings, label: 'Soluzioni Custom' },
];

const processSteps = [
  { num: '01', title: 'Analisi esigenza tecnica', desc: 'Studio approfondito delle specifiche e dei requisiti del progetto.' },
  { num: '02', title: 'Progettazione elettronica', desc: 'Sviluppo schemi, layout PCB e scelta componenti.' },
  { num: '03', title: 'Prototipazione', desc: 'Realizzazione rapida del prototipo funzionale.' },
  { num: '04', title: 'Test e collaudo', desc: 'Verifiche funzionali, termiche ed EMC su ogni unità.' },
  { num: '05', title: 'Produzione e assistenza', desc: 'Produzione in serie e supporto post-vendita dedicato.' },
];

const services = [
  { icon: Cpu, title: 'Progettazione Elettronica Custom', desc: 'Sviluppo hardware su misura: schede elettroniche, power supply, sistemi di controllo.' },
  { icon: Wifi, title: 'Soluzioni IoT Wi-Fi / Bluetooth', desc: 'Dispositivi connessi per monitoraggio, automazione e telemetria industriale.' },
  { icon: Zap, title: 'Prototipazione Rapida', desc: 'Dal concept al prototipo funzionale in tempi ridotti con validazione ingegneristica.' },
  { icon: Settings, title: 'Assemblaggio SMT e Tradizionale', desc: 'Linee di montaggio SMD e through-hole con controllo ottico automatico.' },
  { icon: Shield, title: 'Certificazione e Supporto Tecnico', desc: 'Assistenza nella certificazione CE, RoHS, e supporto tecnico continuo.' },
  { icon: Factory, title: 'Produzione Conto Terzi', desc: 'Servizio EMS completo: dalla fornitura componenti alla consegna del prodotto finito.' },
];

const metrics = [
  { value: '40+', label: 'Anni di esperienza' },
  { value: '100%', label: 'Controllo interno del processo' },
  { value: '∞', label: 'Testing su ogni lotto produttivo' },
  { value: '24/7', label: 'Supporto tecnico dedicato' },
];

const whyUs = [
  { icon: Users, title: 'Unico interlocutore tecnico-produttivo', desc: 'Un solo partner per progettazione, prototipazione e produzione. Nessun intermediario, massima efficienza.' },
  { icon: Wrench, title: 'Soluzioni realmente custom', desc: 'Ogni progetto nasce dalle vostre esigenze specifiche. Nessun adattamento forzato di prodotti standard.' },
  { icon: Award, title: 'Qualità e affidabilità industriale', desc: 'Processi certificati, collaudi rigorosi e materiali selezionati per garantire performance nel tempo.' },
];

const sectors = [
  { icon: Cog, label: 'Automazione Industriale' },
  { icon: Lightbulb, label: 'Illuminazione Tecnica' },
  { icon: Monitor, label: 'Sistemi Embedded' },
  { icon: Gauge, label: 'Controllo Processi' },
  { icon: Smartphone, label: 'Dispositivi Smart / IoT' },
  { icon: FlaskConical, label: 'Applicazioni Speciali su Richiesta' },
];

/* ─── component ─── */
const DemoRBT = () => {
  return (
    <div className="bg-white text-[#0B1220] antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ══════ HEADER ══════ */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-[#E5E7EB]/60 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            RBT <span className="text-[#2563EB]">Elettronica</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#0B1220]/60">
            {[
              { label: 'Chi siamo', id: 'about' },
              { label: 'Processo', id: 'process' },
              { label: 'Servizi', id: 'services' },
              { label: 'Settori', id: 'sectors' },
            ].map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="hover:text-[#2563EB] transition-colors">{l.label}</button>
            ))}
          </nav>
          <button onClick={() => scrollTo('contact')} className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-colors">
            Contattaci <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ══════ 1. HERO ══════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/95 via-[#0B1220]/80 to-[#0B1220]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40">
          <motion.div className="max-w-2xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.03em' }}>
              Progettiamo elettronica su misura per l'industria di domani
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-[#E5E7EB]/80 leading-relaxed mb-10 max-w-xl">
              Da oltre 40 anni sviluppiamo apparecchiature elettroniche custom, sistemi IoT e soluzioni industriali complete dalla progettazione alla produzione.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => scrollTo('contact')}
                className="px-8 py-4 rounded-lg text-base font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/25 hover:-translate-y-0.5">
                Richiedi una consulenza tecnica
              </button>
              <button onClick={() => scrollTo('services')}
                className="px-8 py-4 rounded-lg text-base font-semibold border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                Scopri le nostre soluzioni
              </button>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6">
              {trustBadges.map(b => (
                <div key={b.label} className="flex items-center gap-2.5 text-sm text-[#E5E7EB]/60">
                  <b.icon className="w-4 h-4 text-[#2563EB]" />
                  <span>{b.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.button onClick={() => scrollTo('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#2563EB] transition-colors"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ChevronDown className="w-7 h-7" />
        </motion.button>
      </section>

      {/* ══════ GEOMETRIC DIVIDER ══════ */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

      {/* ══════ 2. CHI SIAMO ══════ */}
      <section id="about" className={`${section} py-28 bg-white`}>
        <motion.div className="max-w-7xl mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="w-12 h-1 bg-[#2563EB] mb-8 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Innovazione elettronica<br />dal 1980
              </h2>
              <p className="text-[#0B1220]/60 text-lg leading-relaxed mb-6">
                RBT Elettronica nasce oltre 40 anni fa all'interno del gruppo Botter con l'obiettivo di progettare e produrre soluzioni elettroniche ad alto contenuto tecnologico per applicazioni industriali e civili.
              </p>
              <p className="text-[#0B1220]/60 text-lg leading-relaxed">
                Oggi accompagniamo i nostri clienti in ogni fase dello sviluppo: dall'idea iniziale alla produzione finale, garantendo qualità, affidabilità e un supporto tecnico dedicato.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0B1220]/10">
                <img src={labImg} alt="Laboratorio RBT Elettronica" loading="lazy" width={800} height={600}
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      {/* ══════ 3. PROCESSO ══════ */}
      <section id="process" className={`${section} py-28 bg-[#F8FAFC]`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mb-8 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Dall'idea al prodotto finito
              </h2>
              <p className="text-[#0B1220]/50 max-w-xl mx-auto">Il nostro processo ingegneristico garantisce qualità e tracciabilità in ogni fase.</p>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((s, i) => (
              <motion.div key={s.num} variants={fadeUp} transition={{ duration: 0.5 }}
                className="relative p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-[#2563EB]/5 transition-all duration-300 group">
                <span className="text-4xl font-extrabold text-[#2563EB]/10 group-hover:text-[#2563EB]/20 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.num}</span>
                <h3 className="text-base font-bold mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-[#0B1220]/50 leading-relaxed">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2563EB]/20 z-10" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      {/* ══════ 4. SERVIZI ══════ */}
      <section id="services" className={`${section} py-28 bg-white`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mb-8 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Servizi e competenze
              </h2>
              <p className="text-[#0B1220]/50 max-w-xl mx-auto">Soluzioni complete per ogni esigenza elettronica industriale.</p>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(s => (
              <motion.div key={s.title} variants={fadeUp} transition={{ duration: 0.5 }}
                className="group p-8 rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#2563EB]/30 hover:shadow-xl hover:shadow-[#2563EB]/5 transition-all duration-400 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#2563EB]/5 flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/10 transition-colors">
                  <s.icon className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-[#0B1220]/50 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ 5. TECNOLOGIE / METRICHE ══════ */}
      <section className={`${section} py-28 bg-[#0B1220] text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#2563EB15_0%,_transparent_60%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

        <motion.div className="relative max-w-7xl mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="w-12 h-1 bg-[#2563EB] mx-auto mb-8 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Competenze e tecnologie integrate
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map(m => (
              <motion.div key={m.label} variants={fadeUp} className="text-center p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#2563EB] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.value}</div>
                <div className="text-sm text-[#E5E7EB]/60">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
      </section>

      {/* ══════ 6. PERCHÉ SCEGLIERE RBT ══════ */}
      <section className={`${section} py-28 bg-[#F8FAFC]`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mb-8 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Perché scegliere RBT
              </h2>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid md:grid-cols-3 gap-8">
            {whyUs.map(w => (
              <motion.div key={w.title} variants={fadeUp} transition={{ duration: 0.6 }}
                className="group p-10 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/30 hover:shadow-xl hover:shadow-[#2563EB]/5 transition-all duration-400 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/5 flex items-center justify-center mb-8 group-hover:bg-[#2563EB]/10 transition-colors">
                  <w.icon className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{w.title}</h3>
                <p className="text-[#0B1220]/50 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

      {/* ══════ 7. SETTORI ══════ */}
      <section id="sectors" className={`${section} py-28 bg-white`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <div className="w-12 h-1 bg-[#2563EB] mx-auto mb-8 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Settori applicativi
              </h2>
              <p className="text-[#0B1220]/50 max-w-xl mx-auto">Le nostre soluzioni servono un'ampia gamma di settori industriali.</p>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map(s => (
              <motion.div key={s.label} variants={fadeUp} transition={{ duration: 0.5 }}
                className="group flex items-center gap-5 p-6 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-[#2563EB]/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#2563EB]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/10 transition-colors">
                  <s.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <span className="text-base font-semibold">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ 8. CTA FINALE ══════ */}
      <section id="contact" className={`${section} py-28 bg-[#0B1220] text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2563EB15_0%,_transparent_60%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
          className="relative max-w-2xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp}>
            <div className="w-12 h-1 bg-[#2563EB] mx-auto mb-8 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Hai bisogno di una soluzione<br />elettronica su misura?
            </h2>
            <p className="text-[#E5E7EB]/60 text-lg leading-relaxed mb-10">
              Affidati a un partner tecnico con oltre 40 anni di esperienza nello sviluppo elettronico industriale.
            </p>
            <button
              className="inline-flex items-center gap-3 px-10 py-5 rounded-lg text-base font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg shadow-[#2563EB]/25 hover:-translate-y-0.5">
              Contatta RBT Elettronica
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ 9. FOOTER ══════ */}
      <footer className="border-t border-[#E5E7EB]/10 bg-[#0B1220] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                RBT <span className="text-[#2563EB]">Elettronica</span>
              </span>
            </div>
            <div className="text-center md:text-right text-sm text-[#E5E7EB]/40 space-y-1">
              <p>Via Treviso 42/D, 31057 Silea (TV)</p>
              <p>Tel: +39 0422 361970 · Email: rbt@rbt.it</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#E5E7EB]/25">© {new Date().getFullYear()} RBT Elettronica — Tutti i diritti riservati</p>
            <p className="text-xs text-[#E5E7EB]/20">Demo by 4weblab.it</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoRBT;
