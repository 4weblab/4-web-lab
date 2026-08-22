import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Cog,
  Shield,
  Clock,
  Cpu,
  Wrench,
  Boxes,
  Layers,
  Bot,
  Ruler,
  Menu,
  X,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

import heroImg from "@/assets/aurum-hero.webp";
import laserImg from "@/assets/aurum-laser.webp";
import cncImg from "@/assets/aurum-cnc.webp";
import weldingImg from "@/assets/aurum-welding.webp";
import factoryImg from "@/assets/aurum-factory.webp";
import componentsImg from "@/assets/aurum-components.webp";
import carpentryImg from "@/assets/aurum-carpentry.webp";
import inoxImg from "@/assets/aurum-inox.webp";

/* =====================================================================
   AURUM Meccanica — Tech Demo by 4 Web Lab
   Standalone page, NOT crawlable. Custom design system inline.
   ===================================================================== */

const C = {
  bg: "#1A1A1B",
  bg2: "#232325",
  bg3: "#2C2C2F",
  accent: "#E67E22",
  accentSoft: "#F39C5B",
  text: "#F5F7FA",
  textDim: "#AEB4BC",
  border: "rgba(245,247,250,0.08)",
  borderStrong: "rgba(245,247,250,0.16)",
};

const navItems = [
  { label: "Azienda", href: "#azienda" },
  { label: "Tecnologie", href: "#tecnologie" },
  { label: "Servizi", href: "#processo" },
  { label: "Produzione", href: "#realizzazioni" },
  { label: "Contatti", href: "#contatti" },
];

const scrollToContact = () => {
  document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------------- Header ---------------- */
const AurumHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(26,26,27,0.72)" : "rgba(26,26,27,0.25)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 group"
          aria-label="AURUM Meccanica - Home"
        >
          <span
            className="w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm tracking-tight"
            style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
              color: C.bg,
              boxShadow: `0 6px 20px -6px ${C.accent}80`,
            }}
          >
            AU
          </span>
          <span className="font-semibold text-[1.05rem] tracking-[0.18em]" style={{ color: C.text }}>
            AURUM
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={(e) => { e.preventDefault(); scrollToId(it.href.slice(1)); }}
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
              style={{ color: C.textDim }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textDim)}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
              color: C.bg,
              boxShadow: `0 8px 24px -8px ${C.accent}90`,
            }}
          >
            Richiedi Preventivo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setOpen(true)}
          aria-label="Apri menu"
          style={{ color: C.text }}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ background: `linear-gradient(180deg, ${C.bg} 0%, ${C.bg2} 100%)` }}
        >
          <div className="px-5 h-16 flex items-center justify-between border-b" style={{ borderColor: C.border }}>
            <span className="font-semibold tracking-[0.18em]" style={{ color: C.text }}>AURUM</span>
            <button onClick={() => setOpen(false)} aria-label="Chiudi menu" style={{ color: C.text }} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-1" aria-label="Menu mobile">
            {navItems.map((it, i) => (
              <a
                key={it.href}
                href={it.href}
                onClick={(e) => { e.preventDefault(); setOpen(false); setTimeout(() => scrollToId(it.href.slice(1)), 60); }}
                className="text-3xl md:text-4xl font-semibold py-3 transition-colors"
                style={{ color: C.text, animation: `aurumFadeUp 0.4s ${i * 0.05}s both` }}
              >
                {it.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); setTimeout(scrollToContact, 60); }}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md text-base font-semibold"
              style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`, color: C.bg }}
            >
              Richiedi Preventivo <ArrowRight className="w-5 h-5" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

/* ---------------- Hero ---------------- */
const Hero = () => (
  <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden" style={{ background: C.bg }}>
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Taglio laser di precisione su lamiera in officina AURUM Meccanica"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{
        background: `linear-gradient(180deg, rgba(26,26,27,0.55) 0%, rgba(26,26,27,0.75) 60%, ${C.bg} 100%)`,
      }} />
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse at 20% 50%, ${C.accent}22 0%, transparent 55%)`,
      }} />
    </div>

    {/* Decorative grid lines */}
    <div aria-hidden className="absolute inset-0 opacity-[0.07]" style={{
      backgroundImage: `linear-gradient(${C.text} 1px, transparent 1px), linear-gradient(90deg, ${C.text} 1px, transparent 1px)`,
      backgroundSize: "80px 80px",
      maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
    }} />

    <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 md:pt-40 md:pb-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] mb-7"
          style={{ color: C.accent, background: `${C.accent}1A`, border: `1px solid ${C.accent}40` }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent, boxShadow: `0 0 12px ${C.accent}` }} />
          Carpenteria & CNC dal 1999
        </span>

        <h1 className="font-bold leading-[1.05] tracking-tight text-[2.5rem] md:text-[4rem] lg:text-[4.75rem] mb-6"
          style={{ color: C.text, letterSpacing: "-0.02em" }}>
          Precisione Laser e <br className="hidden md:block" />
          Carpenteria <span style={{
            background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>d'Avanguardia</span>
        </h1>
        <h2 className="sr-only">Sito web per azienda metalmeccanica — concept realizzato da 4 Web Lab, agenzia web di Padova</h2>

        <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" style={{ color: C.textDim }}>
          Dal prototipo alla produzione in serie, trasformiamo il metallo in soluzioni ingegneristiche
          ad alte prestazioni per industria, automazione e meccanica di precisione.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          <button onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm md:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
              color: C.bg,
              boxShadow: `0 14px 40px -10px ${C.accent}90`,
            }}>
            Richiedi Preventivo <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => scrollToId("tecnologie")}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm md:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: C.text,
              background: "rgba(245,247,250,0.04)",
              border: `1px solid ${C.borderStrong}`,
              backdropFilter: "blur(8px)",
            }}>
            Scopri le Tecnologie
          </button>
        </div>

        {/* Tech specs ticker */}
        <div className="grid grid-cols-3 gap-5 md:gap-8 max-w-2xl pt-8 border-t" style={{ borderColor: C.border }}>
          {[
            { v: "±0.02 mm", l: "Tolleranza tipica" },
            { v: "ISO 9001", l: "Sistema Qualità" },
            { v: "24/7", l: "Produzione continua" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-mono text-xl md:text-2xl font-bold mb-1" style={{ color: C.text }}>{s.v}</div>
              <div className="text-[11px] uppercase tracking-wider" style={{ color: C.textDim }}>{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Decorative right-side line marks */}
    <div aria-hidden className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-10">
      <div className="flex flex-col gap-3 items-end">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="block h-px" style={{
            width: i % 3 === 0 ? 28 : 14,
            background: i === 5 ? C.accent : C.borderStrong,
          }} />
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Section heading ---------------- */
const SectionHead = ({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) => (
  <div className="max-w-3xl mb-14 md:mb-20">
    <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.25em] mb-4 pl-4 relative"
      style={{ color: C.accent }}>
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-px" style={{ background: C.accent }} />
      {kicker}
    </span>
    <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5" style={{ color: C.text, letterSpacing: "-0.015em" }}>
      {title}
    </h2>
    {sub && <p className="text-base md:text-lg leading-relaxed" style={{ color: C.textDim }}>{sub}</p>}
  </div>
);

/* ---------------- Values ---------------- */
const Values = () => {
  const items = [
    { icon: Ruler, title: "Tolleranze Controllate", desc: "Lavorazioni con tolleranze fino a ±0,02 mm verificate al collaudo dimensionale con strumenti di metrologia certificata." },
    { icon: Shield, title: "Certificazione Qualità", desc: "Sistema qualità conforme a ISO 9001:2015, controllo materiali in ingresso e tracciabilità completa di lotto." },
    { icon: Clock, title: "Consegna Just-in-Time", desc: "Pianificazione produttiva integrata con il vostro flusso, lead time ridotti e affidabilità sui tempi di consegna." },
  ];
  return (
    <section className="py-24 md:py-32 relative" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 md:p-10 rounded-xl transition-all duration-500"
              style={{
                background: `linear-gradient(165deg, ${C.bg2} 0%, ${C.bg} 100%)`,
                border: `1px solid ${C.border}`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${C.accent}66`; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = ""; }}
            >
              <div className="w-12 h-12 rounded-md mb-6 flex items-center justify-center transition-colors duration-500"
                style={{ background: `${C.accent}1A`, border: `1px solid ${C.accent}40` }}>
                <it.icon className="w-5 h-5" style={{ color: C.accent }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: C.text }}>{it.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>{it.desc}</p>
              <div aria-hidden className="absolute top-4 right-4 font-mono text-xs opacity-30" style={{ color: C.accent }}>0{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- About ---------------- */
const About = () => (
  <section id="azienda" className="py-24 md:py-36 relative overflow-hidden" style={{ background: C.bg2 }}>
    <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `linear-gradient(${C.text} 1px, transparent 1px), linear-gradient(90deg, ${C.text} 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
    }} />
    <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
      <div>
        <SectionHead
          kicker="L'azienda"
          title={<>Venticinque anni di <span style={{ color: C.accent }}>metallo</span>, ingegneria e affidabilità.</>}
          sub="AURUM Meccanica nasce a Erbusco, nel cuore della Franciacorta industriale, come officina specializzata nella lavorazione di lamiere e profilati per il settore meccanico e industriale. Oggi siamo un partner produttivo strutturato, con un reparto engineering interno e una capacità produttiva pensata per accompagnare aziende manifatturiere, progettisti e system integrator."
        />
        <ul className="space-y-4 mb-10">
          {[
            "Supporto tecnico in fase di progettazione CAD/CAM",
            "Lavorazioni di precisione su acciaio, inox e alluminio",
            "Partnership consolidate con realtà industriali italiane ed estere",
            "Reparto controllo qualità con strumentazione metrologica dedicata",
          ].map((p) => (
            <li key={p} className="flex gap-3 text-[15px]" style={{ color: C.text }}>
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: C.accent }} />
              {p}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t" style={{ borderColor: C.border }}>
          {[
            { v: "25+", l: "Anni di esperienza" },
            { v: "1.200", l: "mq produttivi" },
            { v: "500+", l: "Commesse / anno" },
            { v: "CAD/CAM", l: "Engineering interno" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-mono text-2xl md:text-3xl font-bold" style={{ color: C.text }}>{s.v}</div>
              <div className="text-[11px] uppercase tracking-wider mt-1" style={{ color: C.textDim }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5]" style={{ border: `1px solid ${C.border}` }}>
          <img src={factoryImg} alt="Reparto produttivo AURUM Meccanica con macchine CNC e laser fibra"
            width={1600} height={2000} loading="lazy" decoding="async"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(180deg, transparent 50%, ${C.bg2} 100%)`,
          }} />
        </div>
        <div className="absolute -bottom-6 -left-6 md:-left-10 px-6 py-5 rounded-xl"
          style={{
            background: C.bg,
            border: `1px solid ${C.borderStrong}`,
            boxShadow: `0 30px 60px -20px rgba(0,0,0,0.6)`,
          }}>
          <div className="text-xs uppercase tracking-wider mb-1" style={{ color: C.textDim }}>Sede operativa</div>
          <div className="text-sm font-semibold" style={{ color: C.text }}>Erbusco (BS) — Italy</div>
        </div>
        <div className="absolute -top-5 -right-5 md:-right-8 w-20 h-20 rounded-full opacity-60"
          style={{ background: `radial-gradient(circle, ${C.accent}66 0%, transparent 70%)`, filter: "blur(8px)" }} />
      </div>
    </div>
  </section>
);

/* ---------------- Technologies ---------------- */
const Technologies = () => {
  const techs = [
    { img: laserImg, icon: Sparkles, title: "Taglio Laser Fibra", desc: "Sorgenti fino a 6 kW per tagli netti su acciaio fino a 25 mm e inox fino a 20 mm." },
    { img: factoryImg, icon: Cog, title: "Piegatura CNC", desc: "Presse piegatrici a controllo numerico per geometrie complesse con ripetibilità garantita." },
    { img: weldingImg, icon: Bot, title: "Saldatura Robotizzata", desc: "Celle robotizzate MIG/TIG per produzioni in serie con qualità di giunzione costante." },
    { img: componentsImg, icon: Cpu, title: "Progettazione CAD/CAM", desc: "Reparto tecnico per ingegnerizzazione, ottimizzazione produttiva e prototipazione rapida." },
    { img: cncImg, icon: Wrench, title: "Fresatura di Precisione", desc: "Centri di lavoro a 3 e 5 assi per componenti meccanici con tolleranze strette." },
    { img: inoxImg, icon: Boxes, title: "Assemblaggio Industriale", desc: "Montaggio e collaudo di gruppi e sottoassiemi pronti all'installazione finale." },
  ];
  return (
    <section id="tecnologie" className="py-24 md:py-36 relative" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          kicker="Tecnologie"
          title={<>Macchine, processi e <span style={{ color: C.accent }}>controllo numerico</span></>}
          sub="Un parco macchine continuamente aggiornato che copre l'intero ciclo produttivo: dal foglio di lamiera al componente finito, sotto un unico tetto."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {techs.map((t, i) => (
            <motion.article key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer"
              style={{ border: `1px solid ${C.border}` }}
              onClick={() => scrollToContact()}
            >
              <img src={t.img} alt={`${t.title} — AURUM Meccanica`} width={1280} height={1600}
                loading="lazy" decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0" style={{
                background: `linear-gradient(180deg, rgba(26,26,27,0.2) 0%, rgba(26,26,27,0.55) 50%, rgba(26,26,27,0.95) 100%)`,
              }} />
              <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-md mb-4 flex items-center justify-center transition-all duration-500 group-hover:translate-y-[-4px]"
                  style={{ background: `${C.accent}E6`, color: C.bg }}>
                  <t.icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: C.text }}>{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>{t.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ color: C.accent }}>
                  Richiedi specifiche tecniche <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div aria-hidden className="absolute top-4 right-4 font-mono text-[11px] px-2 py-1 rounded"
                style={{ color: C.text, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}>
                T.0{i + 1}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Process timeline ---------------- */
const Process = () => {
  const steps = [
    { n: "01", t: "Analisi tecnica", d: "Studio del disegno, scelta materiale e fattibilità produttiva." },
    { n: "02", t: "Progettazione CAD", d: "Modellazione 3D, ottimizzazione geometrie e generazione percorsi CAM." },
    { n: "03", t: "Produzione CNC", d: "Taglio, piegatura, saldatura e fresatura su parco macchine controllato." },
    { n: "04", t: "Controllo qualità", d: "Verifica dimensionale, controllo visivo e tracciabilità di lotto." },
    { n: "05", t: "Consegna finale", d: "Imballo, documentazione e spedizione secondo i tempi concordati." },
  ];
  return (
    <section id="processo" className="py-24 md:py-36 relative overflow-hidden" style={{ background: C.bg2 }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          kicker="Processo produttivo"
          title={<>Dal disegno tecnico al <span style={{ color: C.accent }}>componente finito</span></>}
          sub="Un flusso ingegnerizzato in cinque fasi, gestito internamente per garantire continuità, qualità e tempi certi."
        />
        <div className="relative">
          <div aria-hidden className="hidden lg:block absolute left-0 right-0 top-[44px] h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${C.borderStrong} 15%, ${C.borderStrong} 85%, transparent)` }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {steps.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative">
                <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center font-mono text-xl font-bold mb-5 mx-auto lg:mx-0"
                  style={{
                    background: C.bg,
                    border: `1px solid ${C.borderStrong}`,
                    color: C.accent,
                    boxShadow: `0 0 0 6px ${C.bg2}, 0 8px 20px -8px rgba(0,0,0,0.5)`,
                  }}>
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center lg:text-left" style={{ color: C.text }}>{s.t}</h3>
                <p className="text-sm leading-relaxed text-center lg:text-left" style={{ color: C.textDim }}>{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Realizations ---------------- */
const Realizations = () => {
  const items = [
    { img: carpentryImg, cat: "Carpenteria industriale", title: "Strutture portanti per impianti automatizzati" },
    { img: componentsImg, cat: "Componenti meccanici", title: "Particolari fresati ad alta precisione" },
    { img: weldingImg, cat: "Strutture metalliche", title: "Telai saldati per macchinari industriali" },
    { img: inoxImg, cat: "Lavorazioni inox", title: "Quadri e impianti in acciaio inossidabile" },
  ];
  return (
    <section id="realizzazioni" className="py-24 md:py-36" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          kicker="Produzione"
          title={<>Realizzazioni recenti per <span style={{ color: C.accent }}>l'industria italiana</span></>}
          sub="Una selezione di lavorazioni rappresentative del nostro know-how su carpenteria, componenti meccanici e lavorazioni speciali."
        />
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {items.map((it, i) => (
            <motion.article key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-xl overflow-hidden aspect-[16/11]"
              style={{ border: `1px solid ${C.border}` }}>
              <img src={it.img} alt={`${it.title} — AURUM Meccanica`} width={1280} height={880}
                loading="lazy" decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{
                background: `linear-gradient(180deg, transparent 30%, rgba(26,26,27,0.9) 100%)`,
              }} />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: C.accent }}>{it.cat}</span>
                <h3 className="text-xl md:text-2xl font-semibold leading-snug" style={{ color: C.text }}>{it.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- CTA banner ---------------- */
const CtaBanner = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="" aria-hidden width={1920} height={1280} loading="lazy" decoding="async"
        className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, rgba(26,26,27,0.92) 0%, rgba(35,35,37,0.85) 100%)`,
      }} />
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse at 70% 50%, ${C.accent}26 0%, transparent 60%)`,
      }} />
    </div>
    <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
      <Layers className="w-10 h-10 mx-auto mb-6" style={{ color: C.accent }} />
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5 tracking-tight" style={{ color: C.text }}>
        Hai un progetto industriale da sviluppare?
      </h2>
      <p className="text-base md:text-lg max-w-2xl mx-auto mb-9" style={{ color: C.textDim }}>
        Realizziamo lavorazioni metalliche ad alta precisione per aziende, progettisti e
        industria manifatturiera. Inviateci il vostro disegno: vi ricontattiamo con un'analisi tecnica.
      </p>
      <button onClick={scrollToContact}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
        style={{
          background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
          color: C.bg,
          boxShadow: `0 14px 40px -10px ${C.accent}90`,
        }}>
        Contatta il nostro ufficio tecnico <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </section>
);

/* ---------------- Demo Form (Web3Forms-backed) ---------------- */
type Status = { state: "idle" | "sending" | "success" | "error"; message: string };
type FieldErrors = Record<string, string>;

const DemoContactForm = () => {
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const ACCESS_KEY = "2afa7184-7e7d-4881-9472-d10ca4e3c6c3";
  const mountedAt = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const RL_KEY = "w3f_last_submit_ts";
  const RATE_LIMIT_MS = 60_000;

  useEffect(() => { mountedAt.current = Date.now(); }, []);

  const clear = (f: string) => setErrors((p) => { if (!p[f]) return p; const n = { ...p }; delete n[f]; return n; });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.state === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);

    const errs: FieldErrors = {};
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    if (!name) errs.name = "Inserisci il tuo nome";
    if (!email) errs.email = "Inserisci una email valida";
    if (!phone) errs.phone = "Inserisci un recapito telefonico";
    if (Object.keys(errs).length) {
      setErrors(errs);
      const k = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[data-field="${k}"]`)?.focus();
      return;
    }
    if (Date.now() - mountedAt.current < 3000) { setStatus({ state: "error", message: "Errore invio." }); return; }
    try {
      const last = Number(localStorage.getItem(RL_KEY) || "0");
      if (Date.now() - last < RATE_LIMIT_MS) {
        setStatus({ state: "error", message: "Hai già inviato da poco. Riprova tra 1 minuto." });
        return;
      }
    } catch { /* ignore */ }
    if (fd.get("website") || fd.get("fax")) { setStatus({ state: "error", message: "Errore invio." }); return; }

    fd.append("access_key", ACCESS_KEY);
    fd.append("subject", "[DEMO AURUM Metalmeccanica] Nuova richiesta dal form demo 4 Web Lab");
    fd.append("from_name", "Demo AURUM Meccanica - 4 Web Lab");
    fd.append("origine_demo", "/realizzazioni/demo-metalmeccanica");

    setStatus({ state: "sending", message: "Invio in corso..." });
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      let data: { success?: boolean } | null = null;
      try { data = await r.json(); } catch { /* ignore */ }
      if (!r.ok || !data?.success) { setStatus({ state: "error", message: "Invio non riuscito. Riprova tra poco." }); return; }
      try { localStorage.setItem(RL_KEY, String(Date.now())); } catch { /* ignore */ }
      setStatus({ state: "success", message: "Richiesta inviata a 4 Web Lab. Ti ricontattiamo entro 24 ore." });
      setErrors({});
      form.reset();
      mountedAt.current = Date.now();
    } catch {
      setStatus({ state: "error", message: "Problema di rete. Controlla la connessione e riprova." });
    }
  };

  const inputBase = "w-full rounded-md px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2";
  const inputCls = (f?: string) => {
    const err = f && errors[f];
    return `${inputBase}`;
  };
  const inputStyle = (f?: string): React.CSSProperties => ({
    background: "rgba(245,247,250,0.04)",
    border: `1px solid ${f && errors[f] ? "#ef4444" : C.borderStrong}`,
    color: C.text,
  });
  const labelCls = "text-xs font-semibold uppercase tracking-wider mb-1.5 block";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} style={{ color: C.textDim }}>Nome *</label>
          <input data-field="name" name="name" type="text" required autoComplete="name"
            className={inputCls("name")} style={inputStyle("name")} onChange={() => clear("name")} />
          {errors.name && <span className="text-xs mt-1 block" style={{ color: "#f87171" }}>{errors.name}</span>}
        </div>
        <div>
          <label className={labelCls} style={{ color: C.textDim }}>Azienda</label>
          <input name="company" type="text" autoComplete="organization"
            className={inputCls()} style={inputStyle()} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} style={{ color: C.textDim }}>Email *</label>
          <input data-field="email" name="email" type="email" required autoComplete="email"
            className={inputCls("email")} style={inputStyle("email")} onChange={() => clear("email")} />
          {errors.email && <span className="text-xs mt-1 block" style={{ color: "#f87171" }}>{errors.email}</span>}
        </div>
        <div>
          <label className={labelCls} style={{ color: C.textDim }}>Telefono *</label>
          <input data-field="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+39 ..."
            className={inputCls("phone")} style={inputStyle("phone")} onChange={() => clear("phone")} />
          {errors.phone && <span className="text-xs mt-1 block" style={{ color: "#f87171" }}>{errors.phone}</span>}
        </div>
      </div>
      <div>
        <label className={labelCls} style={{ color: C.textDim }}>Messaggio</label>
        <textarea name="message" rows={5}
          placeholder="Descrivi brevemente il progetto, materiali, quantità, tempistiche..."
          className={`${inputCls()} resize-none`} style={inputStyle()} />
      </div>

      {/* Honeypots */}
      <div className="sr-only" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
        <label>Fax<input name="fax" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button type="submit" disabled={status.state === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md text-sm md:text-base font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:hover:translate-y-0"
        style={{
          background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
          color: C.bg,
          boxShadow: `0 14px 36px -12px ${C.accent}90`,
        }}>
        {status.state === "sending" ? "Invio in corso..." : "Richiedi Informazioni"}
        {status.state !== "sending" && <ArrowRight className="w-4 h-4" />}
      </button>

      {status.message && (
        <p role="status" aria-live="polite" className="text-sm font-medium text-center mt-2"
          style={{ color: status.state === "success" ? "#4ade80" : status.state === "error" ? "#f87171" : C.textDim }}>
          {status.message}
        </p>
      )}

      <p className="text-[11px] leading-relaxed mt-3" style={{ color: C.textDim }}>
        I dati inseriti verranno trattati da <strong>4 Web Lab di Fullin Carlo</strong> (P.IVA 05765760284) per
        rispondere alla richiesta di contatto, base giuridica art. 6.1.b GDPR. Maggiori informazioni nella{" "}
        <Link to="/privacy" target="_blank" className="underline" style={{ color: C.text }}>Privacy Policy</Link>.
      </p>
    </form>
  );
};

/* ---------------- Contacts split section ---------------- */
const Contacts = () => (
  <section id="contatti" className="py-24 md:py-36 relative" style={{ background: C.bg2 }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      {/* Demo disclaimer banner */}
      <div className="mb-12 md:mb-16 p-5 md:p-6 rounded-xl flex gap-4 items-start"
        style={{
          background: "rgba(230,126,34,0.08)",
          border: `1px solid ${C.accent}55`,
        }}>
        <div className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center"
          style={{ background: `${C.accent}26`, color: C.accent }}>
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: C.accent }}>
            Avviso importante — Tech Demo
          </div>
          <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.text }}>
            Questa è una <strong>demo tecnica realizzata da 4 Web Lab</strong>. Le richieste inviate
            tramite questo form verranno recapitate <strong>direttamente a 4 Web Lab</strong> e <strong>NON
            all'azienda</strong> (AURUM Meccanica) mostrata nella demo, che è un brand fittizio.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">
        {/* LEFT — Form */}
        <div>
          <SectionHead
            kicker="Richiesta tecnica"
            title={<>Parlaci del tuo <span style={{ color: C.accent }}>progetto</span></>}
            sub="Compila il modulo: ti ricontattiamo entro 24 ore con un primo riscontro tecnico, senza impegno."
          />
          <div className="p-6 md:p-8 rounded-2xl"
            style={{
              background: C.bg,
              border: `1px solid ${C.border}`,
              boxShadow: `0 30px 60px -25px rgba(0,0,0,0.5)`,
            }}>
            <DemoContactForm />
          </div>
        </div>

        {/* RIGHT — Contacts */}
        <div className="lg:pt-2">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.25em] mb-4 pl-4 relative"
            style={{ color: C.accent }}>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-px" style={{ background: C.accent }} />
            4 Web Lab
          </span>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 tracking-tight" style={{ color: C.text }}>
            Vuoi una demo simile per la tua azienda?
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: C.textDim }}>
            Questa pagina è un esempio concreto di come potrebbe essere il sito della tua impresa.
            Contattaci direttamente per una valutazione gratuita del tuo progetto digitale.
          </p>

          <div className="space-y-3 mb-8">
            <a href="tel:+393514656042"
              className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: C.bg, border: `1px solid ${C.border}` }}>
              <div className="w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: `${C.accent}1A`, color: C.accent }}>
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider" style={{ color: C.textDim }}>Chiama ora</div>
                <div className="font-semibold" style={{ color: C.text }}>+39 351 465 6042</div>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: C.accent }} />
            </a>

            <a href="mailto:info@4weblab.it"
              className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: C.bg, border: `1px solid ${C.border}` }}>
              <div className="w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: `${C.accent}1A`, color: C.accent }}>
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider" style={{ color: C.textDim }}>Email diretta</div>
                <div className="font-semibold truncate" style={{ color: C.text }}>info@4weblab.it</div>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: C.accent }} />
            </a>

            <a href="https://wa.me/393514656042" target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "#25D36614", border: "1px solid #25D36655" }}>
              <div className="w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: "#25D366", color: "#fff" }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.463 3.488z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider" style={{ color: C.textDim }}>WhatsApp (più rapido)</div>
                <div className="font-semibold" style={{ color: C.text }}>Scrivici su WhatsApp</div>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: "#25D366" }} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-6 border-t" style={{ borderColor: C.border }}>
            {[
              { v: "24h", l: "Tempo di risposta" },
              { v: "Demo", l: "Personalizzabili" },
              { v: "0€", l: "Nessun impegno" },
            ].map((b) => (
              <div key={b.l} className="text-center">
                <div className="font-mono font-bold text-lg" style={{ color: C.text }}>{b.v}</div>
                <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: C.textDim }}>{b.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 text-center">
        <Link
          to="/realizzazioni"
          className="inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline"
          style={{ color: C.accent }}
        >
          Torna alla lista delle demo
        </Link>
      </div>
    </div>
  </section>
);

/* ---------------- Footer ---------------- */
const AurumFooter = () => (
  <footer className="pt-16 pb-8 border-t" style={{ background: C.bg, borderColor: C.border }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm tracking-tight"
              style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`, color: C.bg }}>AU</span>
            <span className="font-semibold tracking-[0.18em]" style={{ color: C.text }}>AURUM MECCANICA</span>
          </div>
          <p className="text-sm leading-relaxed mb-5 max-w-md italic" style={{ color: C.textDim }}>
            "L'architettura del metallo, la precisione del futuro."
          </p>
          <div className="space-y-2 text-sm" style={{ color: C.textDim }}>
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.accent }} />Via delle Industrie 42, 25030 Erbusco (BS) — Italy</div>
            <div className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.accent }} />+39 030 1234567</div>
            <div className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.accent }} />info@aurum-meccanica.it</div>
            <div className="text-xs mt-3 opacity-70">P.IVA 09876543210</div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: C.text }}>Navigazione</h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((it) => (
              <li key={it.href}>
                <a href={it.href}
                  onClick={(e) => { e.preventDefault(); scrollToId(it.href.slice(1)); }}
                  style={{ color: C.textDim }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.textDim)}>
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: C.text }}>Seguici</h4>
          <div className="flex gap-2">
            {["LinkedIn", "Instagram", "YouTube"].map((s) => (
              <a key={s} href="#" aria-label={s} onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-md flex items-center justify-center text-xs font-bold transition-colors"
                style={{ background: C.bg2, color: C.textDim, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => { e.currentTarget.style.color = C.accent; e.currentTarget.style.borderColor = `${C.accent}66`; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = C.textDim; e.currentTarget.style.borderColor = C.border; }}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Demo disclaimer */}
      <div className="p-5 rounded-xl mb-8 text-sm leading-relaxed"
        style={{ background: C.bg2, border: `1px solid ${C.border}`, color: C.textDim }}>
        <strong style={{ color: C.text }}>Nota:</strong> AURUM Meccanica è un brand fittizio creato
        esclusivamente per finalità dimostrative. Questa pagina è una <strong style={{ color: C.text }}>tech demo</strong>
        {" "}sviluppata da{" "}
        <Link to="/" className="underline" style={{ color: C.accent }}>4 Web Lab</Link> per illustrare
        un possibile concept di sito web premium per il settore metalmeccanico.
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t text-xs"
        style={{ borderColor: C.border, color: C.textDim }}>
        <div>© 2026 AURUM Meccanica S.r.l. (demo) — Tutti i diritti riservati.</div>
        <div>
          Tech demo by{" "}
          <Link to="/" className="font-semibold" style={{ color: C.text }}>4 Web Lab</Link>
        </div>
      </div>
    </div>
  </footer>
);

/* ---------------- Page ---------------- */
const DemoMetalmeccanica = () => {
  return (
    <>
      <Helmet>
        <title>Sito Web per Azienda Metalmeccanica · Demo | 4 Web Lab</title>
        <meta name="description" content="Demo di sito web per aziende metalmeccaniche e carpenteria, realizzata da 4 Web Lab, agenzia web di Padova. Pacchetto una tantum da 1890€." />
        <meta name="author" content="4 Web Lab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/realizzazioni/demo-metalmeccanica" />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="4 Web Lab" />
        <meta property="article:section" content="Realizzazioni" />
        <meta property="og:url" content="https://4weblab.it/realizzazioni/demo-metalmeccanica" />
        <meta property="og:title" content="Sito Web per Azienda Metalmeccanica · Demo | 4 Web Lab" />
        <meta property="og:description" content="Demo di sito web per aziende metalmeccaniche e carpenteria industriale · 4 Web Lab, agenzia web di Padova. Da 1890€." />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="og:image" content="https://4weblab.it/og/demo-metalmeccanica.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sito Web per Azienda Metalmeccanica · Demo | 4 Web Lab" />
        <meta name="twitter:description" content="Demo di sito web per aziende metalmeccaniche · 4 Web Lab, agenzia web di Padova. Da 1890€." />
        <meta name="twitter:image" content="https://4weblab.it/og/demo-metalmeccanica.webp" />
        <meta name="theme-color" content="#1A1A1B" />

        {/* CreativeWork — il concept, attribuito interamente a 4 Web Lab */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://4weblab.it/realizzazioni/demo-metalmeccanica#concept",
            name: "Concept di sito web premium per azienda metalmeccanica — by 4 Web Lab",
            headline: "Tech demo: web design premium per aziende metalmeccaniche realizzata da 4 Web Lab",
            url: "https://4weblab.it/realizzazioni/demo-metalmeccanica",
            inLanguage: "it-IT",
            author: { "@id": "https://4weblab.it/#business" },
            creator: { "@id": "https://4weblab.it/#business" },
            producer: { "@id": "https://4weblab.it/#business" },
            publisher: { "@id": "https://4weblab.it/#business" },
            copyrightHolder: { "@id": "https://4weblab.it/#business" },
            about: "Web design, UX e SEO B2B per aziende metalmeccaniche realizzati da 4 Web Lab.",
            keywords: [
              "agenzia web design metalmeccanica",
              "realizzazione siti web carpenteria",
              "4 Web Lab industriale",
              "web design B2B manufacturing",
              "SEO aziende meccaniche",
            ],
            isAccessibleForFree: true,
            isFamilyFriendly: true,
          })}
        </script>

        {/* Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "4 Web Lab — Home", item: "https://4weblab.it/" },
              { "@type": "ListItem", position: 2, name: "Realizzazioni 4 Web Lab", item: "https://4weblab.it/realizzazioni" },
              { "@type": "ListItem", position: 3, name: "Concept metalmeccanico premium · 4 Web Lab", item: "https://4weblab.it/realizzazioni/demo-metalmeccanica" },
            ],
          })}
        </script>

        {/* WebPage — autore/publisher = 4 Web Lab */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://4weblab.it/realizzazioni/demo-metalmeccanica#webpage",
            name: "4 Web Lab · Concept Web Design Premium per Aziende Metalmeccaniche",
            url: "https://4weblab.it/realizzazioni/demo-metalmeccanica",
            inLanguage: "it-IT",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            about: { "@id": "https://4weblab.it/realizzazioni/demo-metalmeccanica#concept" },
            mainEntity: { "@id": "https://4weblab.it/realizzazioni/demo-metalmeccanica#concept" },
            author: { "@id": "https://4weblab.it/#business" },
            creator: { "@id": "https://4weblab.it/#business" },
            publisher: { "@id": "https://4weblab.it/#business" },
            description: "Tech demo concettuale realizzata da 4 Web Lab — agenzia italiana specializzata in web design premium per aziende metalmeccaniche, carpenteria e manifatturiero B2B.",
          })}
        </script>

        <style>{`
          @keyframes aurumFadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </Helmet>

      <div style={{ background: C.bg, color: C.text, fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, sans-serif" }}>
        <AurumHeader />
        <main>
          <Hero />
          <Values />
          <About />
          <Technologies />
          <Process />
          <Realizations />
          <CtaBanner />
          <Contacts />
        </main>
        <AurumFooter />
      </div>
    </>
  );
};

export default DemoMetalmeccanica;
