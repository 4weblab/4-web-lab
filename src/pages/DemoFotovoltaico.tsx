import { useEffect, useRef, useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sun,
  Battery,
  Zap,
  Activity,
  TrendingDown,
  Plug,
  Users,
  Wrench,
  Building2,
  Home as HomeIcon,
  Warehouse,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  LineChart,
  Leaf,
  Gauge,
  Cpu,
  ChevronDown,
} from "lucide-react";

import heroImg from "@/assets/solaris-hero.jpg";
import villaImg from "@/assets/solaris-villa.jpg";
import industrialImg from "@/assets/solaris-industrial.jpg";
import storageImg from "@/assets/solaris-storage.jpg";
import evImg from "@/assets/solaris-ev.jpg";
import installImg from "@/assets/solaris-install.jpg";

/* =====================================================================
   SOLARIS Energy — Tech Demo by 4 Web Lab
   Pagina demo interna a 4weblab.it (noindex,nofollow).
   Design system inline: dark navy + electric green, premium tech.
   ===================================================================== */

const C = {
  bg: "#070B14",          // nero tecnico / blu notte profondo
  bg2: "#0C1322",         // navy scuro
  bg3: "#121A2E",         // navy medio
  surface: "#0F1626",
  accent: "#22E27A",      // electric green
  accentSoft: "#7BFFB0",  // lime neon soft
  cyan: "#38BDF8",
  text: "#EAF2FF",
  textDim: "#8FA1BD",
  border: "rgba(234,242,255,0.08)",
  borderStrong: "rgba(234,242,255,0.16)",
};

const navItems = [
  { label: "Soluzioni", href: "#servizi" },
  { label: "Processo", href: "#processo" },
  { label: "Risultati", href: "#case-studies" },
  { label: "Incentivi", href: "#incentivi" },
  { label: "Contatti", href: "#contatti" },
];

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------------- Header ---------------- */
const SolarisHeader = () => {
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
        background: scrolled ? "rgba(7,11,20,0.78)" : "rgba(7,11,20,0.18)",
        backdropFilter: "blur(20px) saturate(150%)",
        WebkitBackdropFilter: "blur(20px) saturate(150%)",
        borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 group"
          aria-label="Solaris Energy - Home demo"
        >
          <span
            className="w-9 h-9 rounded-md flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
              boxShadow: `0 8px 28px -8px ${C.accent}99`,
            }}
            aria-hidden
          >
            <Sun className="w-5 h-5" style={{ color: C.bg }} strokeWidth={2.5} />
          </span>
          <span className="font-semibold text-[1.05rem] tracking-[0.18em]" style={{ color: C.text }}>
            SOLARIS
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={(e) => { e.preventDefault(); scrollToId(it.href.slice(1)); }}
              className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/5"
              style={{ color: C.textDim }}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+393514656042"
            className="text-sm font-medium px-4 py-2 rounded-md transition-colors"
            style={{ color: C.text }}
          >
            +39 351 465 6042
          </a>
          <button
            onClick={() => scrollToId("contatti")}
            className="text-sm font-semibold px-5 py-2.5 rounded-md transition-all hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
              color: C.bg,
              boxShadow: `0 8px 24px -10px ${C.accent}aa`,
            }}
          >
            Richiedi consulenza
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md"
          style={{ color: C.text }}
          aria-label="Apri menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden absolute top-full inset-x-0 px-5 py-6 space-y-1"
          style={{ background: "rgba(7,11,20,0.96)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.border}` }}
        >
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={(e) => { e.preventDefault(); scrollToId(it.href.slice(1)); setOpen(false); }}
              className="block px-4 py-3 rounded-md text-base"
              style={{ color: C.text }}
            >
              {it.label}
            </a>
          ))}
          <div className="pt-3 mt-3 border-t" style={{ borderColor: C.border }}>
            <button
              onClick={() => { scrollToId("contatti"); setOpen(false); }}
              className="w-full text-center px-5 py-3 rounded-md font-semibold"
              style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`, color: C.bg }}
            >
              Richiedi consulenza
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

/* ---------------- Animated counter ---------------- */
const Counter = ({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(eased * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString("it-IT", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

/* ---------------- Hero ---------------- */
const Hero = () => (
  <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16 md:pt-28">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Impianto fotovoltaico industriale ad alte prestazioni installato su tetto aziendale"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(7,11,20,0.55) 0%, rgba(7,11,20,0.85) 60%, ${C.bg} 100%)`,
        }}
      />
      {/* tech grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      {/* glow */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.accent}33 0%, transparent 70%)` }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.cyan}22 0%, transparent 70%)` }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center w-full">
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          style={{ background: `${C.accent}1a`, color: C.accent, border: `1px solid ${C.accent}33` }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Energia · Fotovoltaico · Accumulo
        </motion.div>

        <h1
          className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold leading-[1.05] tracking-tight mb-6"
          style={{ color: C.text }}
        >
          Trasforma il sole in un{" "}
          <span style={{
            background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            vantaggio economico reale
          </span>
          .
        </h1>
        <h2 className="sr-only">Sito web per azienda fotovoltaica — concept realizzato da 4 Web Lab, agenzia web di Padova</h2>

        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10" style={{ color: C.textDim }}>
          Riduci i costi energetici della tua casa o azienda con impianti fotovoltaici ad alte
          prestazioni progettati su misura, sistemi di accumulo e monitoraggio smart H24.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollToId("contatti")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-base transition-all hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
              color: C.bg,
              boxShadow: `0 14px 36px -12px ${C.accent}88`,
            }}
          >
            Richiedi consulenza
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToId("case-studies")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-base transition-all hover:bg-white/5"
            style={{ color: C.text, border: `1px solid ${C.borderStrong}` }}
          >
            Simula il risparmio
          </button>
        </div>
      </div>

      {/* Floating dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="lg:col-span-5"
      >
        <div
          className="rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden"
          style={{
            background: "rgba(15,22,38,0.7)",
            border: `1px solid ${C.borderStrong}`,
            boxShadow: `0 30px 80px -30px ${C.accent}40`,
          }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.accent, boxShadow: `0 0 12px ${C.accent}` }} />
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: C.textDim }}>
                Live · Monitoraggio impianto
              </span>
            </div>
            <Activity className="w-4 h-4" style={{ color: C.accent }} />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5">
            <FloatingStat icon={Zap} label="Produzione" value="42.8 kWh" sub="oggi" />
            <FloatingStat icon={Leaf} label="CO₂ evitata" value="18.6 kg" sub="oggi" />
            <FloatingStat icon={Battery} label="Accumulo" value="86%" sub="carica" />
            <FloatingStat icon={Gauge} label="Autonomia" value="78%" sub="rete" />
          </div>

          {/* mini bar chart */}
          <div>
            <div className="flex items-end justify-between gap-1.5 h-20 mb-2">
              {[35, 52, 48, 70, 88, 95, 78, 60, 45].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(180deg, ${C.accent}, ${C.cyan}66)`,
                    boxShadow: `0 0 8px ${C.accent}33`,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px]" style={{ color: C.textDim }}>
              <span>06:00</span><span>12:00</span><span>18:00</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* scroll indicator */}
    <button
      onClick={() => scrollToId("kpi")}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center"
      style={{ color: C.textDim }}
      aria-label="Scorri"
    >
      <ChevronDown className="w-5 h-5 animate-bounce" />
    </button>
  </section>
);

const FloatingStat = ({ icon: Icon, label, value, sub }: { icon: any; label: string; value: string; sub: string }) => (
  <div
    className="rounded-xl p-3.5"
    style={{ background: "rgba(7,11,20,0.5)", border: `1px solid ${C.border}` }}
  >
    <div className="flex items-center gap-1.5 mb-1.5">
      <Icon className="w-3.5 h-3.5" style={{ color: C.accent }} />
      <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: C.textDim }}>
        {label}
      </span>
    </div>
    <div className="text-lg font-bold" style={{ color: C.text }}>{value}</div>
    <div className="text-[10px]" style={{ color: C.textDim }}>{sub}</div>
  </div>
);

/* ---------------- KPI ---------------- */
const KpiSection = () => (
  <section id="kpi" className="py-20 md:py-28 relative" style={{ background: C.bg2 }}>
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(${C.accent} 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />
    <div className="relative max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {[
          { value: 480, suffix: "+", label: "Impianti installati" },
          { value: 12.4, suffix: " MW", label: "Potenza prodotta", decimals: 1 },
          { value: 68, suffix: "%", label: "Riduzione media bolletta" },
          { value: 24, suffix: "/7", label: "Monitoraggio smart" },
        ].map((k) => (
          <div key={k.label} className="text-center md:text-left">
            <div
              className="text-4xl md:text-6xl font-bold mb-2 tracking-tight"
              style={{
                background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <Counter to={k.value} suffix={k.suffix} decimals={k.decimals ?? 0} />
            </div>
            <div className="text-sm md:text-base font-medium" style={{ color: C.textDim }}>
              {k.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Problema → Soluzione ---------------- */
const problems = [
  "Bollette energetiche instabili e in continuo aumento",
  "Dipendenza totale dalla rete elettrica nazionale",
  "Costi operativi che erodono i margini aziendali",
  "Consumi reali difficili da monitorare e ottimizzare",
];

const solutions = [
  { icon: Sun, title: "Fotovoltaico intelligente", desc: "Pannelli ad alta efficienza con inverter di ultima generazione." },
  { icon: Battery, title: "Sistemi di accumulo", desc: "Batterie al litio per usare l'energia anche di notte." },
  { icon: Activity, title: "Monitoraggio smart", desc: "Dashboard in tempo reale, app dedicata, alert automatici." },
  { icon: TrendingDown, title: "Ottimizzazione consumi", desc: "Analisi dei carichi e gestione intelligente dell'energia." },
  { icon: ShieldCheck, title: "Indipendenza energetica", desc: "Riduci la dipendenza dalla rete fino al 90%." },
];

const ProblemSolution = () => (
  <section className="py-20 md:py-28" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: C.accent }}>
            Il contesto energetico
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: C.text }}>
            Il costo dell'energia non è più una voce trascurabile.
          </h2>
          <p className="text-base md:text-lg mb-8" style={{ color: C.textDim }}>
            Negli ultimi anni il prezzo dell'elettricità ha mostrato volatilità senza precedenti.
            Per famiglie e imprese, l'autoproduzione è passata da scelta etica a leva strategica
            di competitività.
          </p>

          <ul className="space-y-3">
            {problems.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: C.bg2, border: `1px solid ${C.border}` }}
              >
                <div
                  className="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(239,68,68,0.12)" }}
                >
                  <X className="w-3.5 h-3.5" style={{ color: "#ef4444" }} strokeWidth={3} />
                </div>
                <span className="text-sm md:text-base" style={{ color: C.text }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl p-5 transition-all hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, ${C.bg2}, ${C.bg3})`,
                border: `1px solid ${C.border}`,
              }}
            >
              <div
                className="w-11 h-11 rounded-lg mb-4 flex items-center justify-center"
                style={{
                  background: `${C.accent}1a`,
                  border: `1px solid ${C.accent}33`,
                  boxShadow: `0 0 16px ${C.accent}22`,
                }}
              >
                <s.icon className="w-5 h-5" style={{ color: C.accent }} />
              </div>
              <h3 className="text-base font-semibold mb-1.5" style={{ color: C.text }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Servizi ---------------- */
const services = [
  { icon: HomeIcon, title: "Fotovoltaico Residenziale", desc: "Impianti su misura per case, ville e condomini con design integrato e massima efficienza." },
  { icon: Building2, title: "Fotovoltaico Aziendale", desc: "Soluzioni per PMI e grandi aziende: capannoni, uffici, attività commerciali." },
  { icon: Battery, title: "Sistemi di Accumulo", desc: "Batterie al litio LFP per autoconsumo serale e backup in caso di blackout." },
  { icon: Plug, title: "Colonnine EV", desc: "Stazioni di ricarica per veicoli elettrici, integrate con il fotovoltaico aziendale." },
  { icon: Users, title: "Comunità Energetiche", desc: "Costituzione e gestione di CER per condividere energia rinnovabile sul territorio." },
  { icon: Wrench, title: "Monitoraggio e Manutenzione", desc: "Controllo H24, manutenzione programmata e pulizia pannelli per massima resa." },
];

const ServicesSection = () => (
  <section id="servizi" className="py-20 md:py-28 relative" style={{ background: C.bg2 }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: C.accent }}>
          Le nostre soluzioni
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: C.text }}>
          Impianti fotovoltaici per aziende, professionisti e privati.
        </h2>
        <p className="text-base md:text-lg" style={{ color: C.textDim }}>
          Dal sopralluogo all'attivazione, gestiamo ogni aspetto tecnico, burocratico e fiscale.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.25) }}
            className="group relative rounded-2xl p-6 md:p-7 transition-all hover:-translate-y-1.5 overflow-hidden"
            style={{
              background: `linear-gradient(160deg, ${C.bg3} 0%, ${C.bg2} 100%)`,
              border: `1px solid ${C.border}`,
            }}
          >
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle, ${C.accent}33, transparent 70%)` }}
            />
            <div
              className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center relative"
              style={{
                background: `linear-gradient(135deg, ${C.accent}26, ${C.cyan}1a)`,
                border: `1px solid ${C.accent}33`,
                boxShadow: `0 0 20px ${C.accent}22`,
              }}
            >
              <s.icon className="w-5 h-5" style={{ color: C.accent }} />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: C.text }}>{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Processo ---------------- */
const processSteps = [
  { n: "01", title: "Analisi consumi", desc: "Studiamo le tue bollette degli ultimi 12 mesi per dimensionare l'impianto perfetto." },
  { n: "02", title: "Sopralluogo tecnico", desc: "Verifica strutturale del tetto, esposizione, ombreggiamenti e quadro elettrico." },
  { n: "03", title: "Progettazione", desc: "Layout pannelli, scelta inverter e accumulo, simulazione produzione e ROI." },
  { n: "04", title: "Installazione", desc: "Squadre certificate, materiali Tier 1 e cantiere chiavi in mano in 2-5 giorni." },
  { n: "05", title: "Attivazione e monitoraggio", desc: "Pratiche GSE, allaccio rete e dashboard di monitoraggio attiva H24." },
];

const ProcessSection = () => (
  <section id="processo" className="py-20 md:py-28" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: C.accent }}>
          Come lavoriamo
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: C.text }}>
          Un processo chiaro, dall'analisi alla produzione di energia.
        </h2>
      </div>

      <div className="relative">
        {/* line */}
        <div
          className="hidden lg:block absolute top-12 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${C.accent}55, transparent)` }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <div
                className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center relative"
                style={{
                  background: `linear-gradient(135deg, ${C.bg2}, ${C.bg3})`,
                  border: `1px solid ${C.accent}55`,
                  boxShadow: `0 0 30px ${C.accent}22`,
                }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.n}
                </span>
              </div>
              <h3 className="text-base font-semibold mb-2 text-center" style={{ color: C.text }}>{s.title}</h3>
              <p className="text-sm leading-relaxed text-center" style={{ color: C.textDim }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Prima vs Dopo ---------------- */
const compareRows = [
  { label: "Costo annuo energia", before: "€ 8.400", after: "€ 2.520", delta: "-70%" },
  { label: "Autonomia dalla rete", before: "0%", after: "82%", delta: "+82%" },
  { label: "Efficienza energetica", before: "Bassa", after: "Alta", delta: "↑" },
  { label: "Emissioni CO₂ / anno", before: "4.2 t", after: "0.6 t", delta: "-86%" },
  { label: "Monitoraggio consumi", before: "Mensile", after: "Tempo reale", delta: "Live" },
];

const CompareSection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: C.bg2 }}>
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(${C.accent} 1px, transparent 1px), linear-gradient(90deg, ${C.accent} 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />
    <div className="relative max-w-6xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: C.accent }}>
          Prima vs Dopo · Caso reale di riferimento
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: C.text }}>
          L'impatto concreto, in numeri.
        </h2>
        <p className="text-base md:text-lg" style={{ color: C.textDim }}>
          Esempio basato su una villa di 180 m² con consumo annuo di 6.500 kWh.
        </p>
      </div>

      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${C.bg3}, ${C.bg2})`,
          border: `1px solid ${C.borderStrong}`,
          boxShadow: `0 30px 80px -30px ${C.accent}33`,
        }}
      >
        <div className="grid grid-cols-12 px-6 py-4 text-xs font-semibold uppercase tracking-wider" style={{ background: "rgba(0,0,0,0.25)", color: C.textDim }}>
          <div className="col-span-5">Indicatore</div>
          <div className="col-span-3 text-center">Prima</div>
          <div className="col-span-3 text-center">Dopo Solaris</div>
          <div className="col-span-1 text-right">Δ</div>
        </div>
        {compareRows.map((r, i) => (
          <div
            key={r.label}
            className="grid grid-cols-12 px-6 py-5 items-center"
            style={{ borderTop: i ? `1px solid ${C.border}` : "none" }}
          >
            <div className="col-span-5 text-sm md:text-base font-medium" style={{ color: C.text }}>{r.label}</div>
            <div className="col-span-3 text-center text-sm md:text-base line-through" style={{ color: "#ef4444" }}>{r.before}</div>
            <div className="col-span-3 text-center text-sm md:text-base font-semibold" style={{ color: C.accent }}>{r.after}</div>
            <div className="col-span-1 text-right text-xs font-bold" style={{ color: C.accentSoft }}>{r.delta}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Incentivi ---------------- */
const incentives = [
  { icon: TrendingDown, title: "Detrazione 50%", desc: "Recupero del 50% della spesa per impianti residenziali in 10 anni di IRPEF." },
  { icon: Building2, title: "Incentivi imprese", desc: "Credito d'imposta Transizione 5.0 e ammortamenti accelerati per investimenti energetici." },
  { icon: Users, title: "Comunità Energetiche", desc: "Tariffa incentivante GSE per l'energia condivisa fino a 20 anni." },
  { icon: Battery, title: "Sistemi di accumulo", desc: "Detrazioni dedicate per batterie installate contestualmente all'impianto." },
];

const IncentivesSection = () => (
  <section id="incentivi" className="py-20 md:py-28" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: C.accent }}>
          Incentivi e detrazioni
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: C.text }}>
          Il quadro fiscale è oggi particolarmente favorevole.
        </h2>
        <p className="text-base md:text-lg" style={{ color: C.textDim }}>
          Gestiamo l'intera parte burocratica: pratiche GSE, ENEA, comunicazioni al distributore.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {incentives.map((it) => (
          <div
            key={it.title}
            className="rounded-xl p-6"
            style={{
              background: `linear-gradient(160deg, ${C.bg2}, ${C.bg3})`,
              border: `1px solid ${C.border}`,
            }}
          >
            <div
              className="w-11 h-11 rounded-lg mb-4 flex items-center justify-center"
              style={{ background: `${C.accent}1a`, border: `1px solid ${C.accent}33` }}
            >
              <it.icon className="w-5 h-5" style={{ color: C.accent }} />
            </div>
            <h3 className="text-base font-semibold mb-2" style={{ color: C.text }}>{it.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Case Studies ---------------- */
const caseStudies = [
  {
    img: industrialImg,
    tag: "Azienda metalmeccanica",
    title: "Capannone produttivo · 320 kWp",
    kwp: "320 kWp",
    saving: "-72%",
    desc: "Impianto su tetto di un capannone industriale con accumulo da 200 kWh e sistema di gestione carichi.",
    bullets: ["Payback in 4,2 anni", "Riduzione 380 t CO₂/anno", "Monitoraggio per linea produttiva"],
  },
  {
    img: villaImg,
    tag: "Villa moderna",
    title: "Residenza privata · 9,8 kWp",
    kwp: "9,8 kWp",
    saving: "-82%",
    desc: "Impianto integrato architettonicamente con accumulo 15 kWh e colonnina di ricarica EV domestica.",
    bullets: ["Autonomia 85% annuale", "Pannelli full-black integrati", "App di controllo dedicata"],
  },
  {
    img: installImg,
    tag: "Magazzino logistico",
    title: "Centro logistico · 540 kWp",
    kwp: "540 kWp",
    saving: "-68%",
    desc: "Impianto su copertura industriale di 6.000 m² con interfacciamento al gestionale di magazzino.",
    bullets: ["Ammortamento Industria 5.0", "Comunità Energetica annessa", "ROI positivo dal mese 1"],
  },
];

const CaseStudiesSection = () => (
  <section id="case-studies" className="py-20 md:py-28" style={{ background: C.bg2 }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: C.accent }}>
          Case studies
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: C.text }}>
          Progetti che producono valore, ogni giorno.
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {caseStudies.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden group"
            style={{
              background: C.bg3,
              border: `1px solid ${C.border}`,
            }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={c.img}
                alt={`${c.tag} — ${c.title}: impianto fotovoltaico ${c.kwp} con risparmio ${c.saving}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={1280}
                height={896}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span
                className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(7,11,20,0.8)", color: C.accent, border: `1px solid ${C.accent}55`, backdropFilter: "blur(8px)" }}
              >
                {c.tag}
              </span>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: C.textDim }}>Potenza</div>
                  <div className="text-lg font-bold" style={{ color: C.text }}>{c.kwp}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: C.textDim }}>Risparmio</div>
                  <div className="text-lg font-bold" style={{ color: C.accent }}>{c.saving}</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3" style={{ color: C.text }}>{c.title}</h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: C.textDim }}>{c.desc}</p>
              <ul className="space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm" style={{ color: C.text }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.accent }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- FAQ (visivo, niente FAQPage JSON-LD) ---------------- */
const faqs = [
  { q: "Quanto costa un impianto fotovoltaico?", a: "Il costo dipende dalla potenza e dalla presenza di accumulo. Per una casa media (3-6 kWp) si parte da circa 6.000-12.000 € chiavi in mano, prima delle detrazioni. Per impianti aziendali si valuta caso per caso." },
  { q: "Quanto si risparmia davvero in bolletta?", a: "Con un dimensionamento corretto e un sistema di accumulo, il risparmio in bolletta varia tipicamente tra il 60% e l'85%, fino a raggiungere quasi totale autonomia in alcuni mesi dell'anno." },
  { q: "Serve manutenzione?", a: "Gli impianti richiedono manutenzione minima: una verifica tecnica annuale e la pulizia periodica dei pannelli. Forniamo contratti di manutenzione programmata e monitoraggio remoto H24." },
  { q: "Conviene davvero alle aziende?", a: "Sì. Tra autoconsumo, detrazioni Transizione 5.0, ammortamenti accelerati e Comunità Energetiche, il payback per un impianto industriale si attesta oggi tra i 3 e i 5 anni." },
  { q: "Quanto dura un impianto fotovoltaico?", a: "I moduli Tier 1 garantiscono almeno l'80% della produzione iniziale dopo 25 anni. La vita utile reale è di 30+ anni. Gli inverter vengono solitamente sostituiti una volta dopo 10-15 anni." },
  { q: "Posso aggiungere un sistema di accumulo dopo?", a: "Sì, qualsiasi impianto può essere integrato con un accumulo successivamente. Lo progettiamo già predisposto in fase di installazione per renderlo economicamente conveniente." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28" style={{ background: C.bg }}>
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: C.accent }}>
            Domande frequenti
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: C.text }}>
            Le risposte che cerchi, prima di iniziare.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-xl overflow-hidden transition-all"
                style={{
                  background: C.bg2,
                  border: `1px solid ${isOpen ? C.accent + "55" : C.border}`,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold" style={{ color: C.text }}>{f.q}</span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform"
                    style={{ color: C.accent, transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm md:text-base leading-relaxed" style={{ color: C.textDim }}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Contatti / CTA finale ---------------- */
const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitting(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    fd.append("access_key", "2afa7184-7e7d-4881-9472-d10ca4e3c6c3");
    fd.append("subject", "[Demo Solaris Energy] Richiesta consulenza fotovoltaico");
    fd.append("from_name", "4 Web Lab — Demo Solaris");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const json = await res.json();
      if (json.success) setDone(true);
      else setError("Invio non riuscito. Riprova o scrivi a info@4weblab.it.");
    } catch {
      setError("Errore di rete. Riprova tra un istante.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contatti" className="py-24 md:py-32 relative overflow-hidden" style={{ background: C.bg2 }}>
      {/* cinematic glow */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, ${C.accent}22 0%, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${C.accent} 1px, transparent 1px), linear-gradient(90deg, ${C.accent} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: C.accent }}>
            Inizia ora
          </span>
          <h2 className="text-3xl md:text-6xl font-bold leading-[1.1] mb-6" style={{ color: C.text }}>
            L'energia che consumi può diventare un{" "}
            <span style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              investimento
            </span>.
          </h2>
          <p className="text-base md:text-lg" style={{ color: C.textDim }}>
            Richiedi una consulenza gratuita: analizzeremo i tuoi consumi e ti proporremo il
            dimensionamento ottimale.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-6 md:p-10"
              style={{
                background: `linear-gradient(160deg, ${C.bg3}, ${C.bg2})`,
                border: `1px solid ${C.borderStrong}`,
                boxShadow: `0 30px 80px -30px ${C.accent}40`,
              }}
            >
              {done ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{ background: `${C.accent}22`, border: `1px solid ${C.accent}55` }}
                  >
                    <CheckCircle2 className="w-8 h-8" style={{ color: C.accent }} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: C.text }}>Richiesta ricevuta</h3>
                  <p style={{ color: C.textDim }}>
                    Ti ricontatteremo entro 24 ore lavorative all'indirizzo indicato.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field name="nome" label="Nome e cognome" required />
                    <Field name="azienda" label="Azienda (opzionale)" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field name="email" type="email" label="Email" required />
                    <Field name="telefono" type="tel" label="Telefono" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: C.textDim }}>
                      Tipo di intervento
                    </label>
                    <select
                      name="tipologia"
                      className="w-full px-4 py-3 rounded-md text-sm focus:outline-none transition-colors"
                      style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }}
                      defaultValue=""
                    >
                      <option value="" disabled>Seleziona…</option>
                      <option>Fotovoltaico residenziale</option>
                      <option>Fotovoltaico aziendale / industriale</option>
                      <option>Sistema di accumulo</option>
                      <option>Colonnine ricarica EV</option>
                      <option>Comunità Energetica</option>
                      <option>Sito web / consulenza digitale (4 Web Lab)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: C.textDim }}>
                      Messaggio
                    </label>
                    <textarea
                      name="messaggio"
                      rows={4}
                      placeholder="Raccontaci il tuo progetto, i tuoi consumi indicativi, eventuali esigenze."
                      className="w-full px-4 py-3 rounded-md text-sm focus:outline-none transition-colors resize-none"
                      style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }}
                    />
                  </div>

                  <label className="flex items-start gap-3 text-xs" style={{ color: C.textDim }}>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5"
                      required
                    />
                    <span>
                      Acconsento al trattamento dei dati personali per essere ricontattato in merito a questa
                      richiesta (Art. 6.1.b GDPR). I dati saranno gestiti da{" "}
                      <Link to="/" className="underline font-semibold" style={{ color: C.accent }}>4 Web Lab</Link>{" "}
                      come titolare del trattamento. Vedi{" "}
                      <Link to="/privacy" className="underline" style={{ color: C.text }}>privacy policy</Link>.
                    </span>
                  </label>

                  {error && (
                    <div className="p-3 rounded-md text-sm" style={{ background: "rgba(239,68,68,0.1)", border: `1px solid rgba(239,68,68,0.3)`, color: "#fca5a5" }}>
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting || !consent}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-base transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0"
                    style={{
                      background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
                      color: C.bg,
                      boxShadow: `0 14px 36px -12px ${C.accent}88`,
                    }}
                  >
                    {submitting ? "Invio in corso…" : "Richiedi consulenza gratuita"}
                    {!submitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contatti laterali */}
          <div className="lg:col-span-2 space-y-4">
            <ContactCard icon={Phone} label="Telefono" value="+39 351 465 6042" href="tel:+393514656042" />
            <ContactCard icon={Mail} label="Email" value="info@4weblab.it" href="mailto:info@4weblab.it" />
            <ContactCard icon={MapPin} label="Sede" value="Via Belluno 44, Legnaro (PD)" />

            <div
              className="rounded-xl p-5 text-sm leading-relaxed"
              style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.textDim }}
            >
              <strong style={{ color: C.text }}>Tech demo · </strong>
              questa pagina è un concept dimostrativo realizzato da{" "}
              <Link to="/" className="underline" style={{ color: C.accent }}>4 Web Lab</Link>.
              Le richieste inviate dal form arrivano direttamente a 4 Web Lab e riguardano un
              progetto di realizzazione sito web premium per il settore energetico.
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-20 text-center">
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
};

const Field = ({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) => (
  <div>
    <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: C.textDim }}>
      {label}{required && <span style={{ color: C.accent }}> *</span>}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full px-4 py-3 rounded-md text-sm focus:outline-none transition-colors"
      style={{ background: C.bg, border: `1px solid ${C.border}`, color: C.text }}
    />
  </div>
);

const ContactCard = ({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) => {
  const inner = (
    <div
      className="rounded-xl p-5 flex items-center gap-4 transition-all hover:-translate-y-0.5"
      style={{
        background: `linear-gradient(160deg, ${C.bg3}, ${C.bg2})`,
        border: `1px solid ${C.border}`,
      }}
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${C.accent}1a`, border: `1px solid ${C.accent}33` }}
      >
        <Icon className="w-5 h-5" style={{ color: C.accent }} />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider font-semibold mb-1" style={{ color: C.textDim }}>{label}</div>
        <div className="text-sm font-semibold truncate" style={{ color: C.text }}>{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
};

/* ---------------- Tech demo strip ---------------- */
const TechDemoStrip = () => (
  <section className="py-12" style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
    <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-4" style={{ background: `${C.cyan}1a`, color: C.cyan, border: `1px solid ${C.cyan}33` }}>
        <Cpu className="w-3 h-3" /> Tech demo · 4 Web Lab
      </div>
      <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.textDim }}>
        Solaris Energy è un brand fittizio creato da{" "}
        <Link to="/" className="underline font-semibold" style={{ color: C.text }}>4 Web Lab</Link>{" "}
        per illustrare un possibile concept di sito web premium per il settore fotovoltaico.
        Scopri le altre{" "}
        <Link to="/realizzazioni" className="underline" style={{ color: C.accent }}>realizzazioni di 4 Web Lab</Link>{" "}
        o la pagina dei{" "}
        <Link to="/siti-web-aziendali" className="underline" style={{ color: C.accent }}>siti web aziendali</Link>.
      </p>
    </div>
  </section>
);

/* ---------------- Footer ---------------- */
const SolarisFooter = () => (
  <footer style={{ background: C.bg2, borderTop: `1px solid ${C.border}` }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ color: C.textDim }}>
        <div>© 2026 Solaris Energy (demo) — Brand fittizio.</div>
        <div>
          Tech demo by{" "}
          <Link to="/" className="font-semibold" style={{ color: C.text }}>4 Web Lab</Link>{" "}·{" "}
          <Link to="/privacy" className="underline" style={{ color: C.textDim }}>Privacy</Link>{" "}·{" "}
          <Link to="/cookie" className="underline" style={{ color: C.textDim }}>Cookie</Link>
        </div>
      </div>
    </div>
  </footer>
);

/* ---------------- Sticky mobile CTA ---------------- */
const StickyMobileCta = () => (
  <div
    className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-4 py-3"
    style={{
      background: "rgba(7,11,20,0.92)",
      backdropFilter: "blur(16px)",
      borderTop: `1px solid ${C.border}`,
    }}
  >
    <button
      onClick={() => scrollToId("contatti")}
      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold text-sm"
      style={{
        background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
        color: C.bg,
        boxShadow: `0 10px 30px -10px ${C.accent}88`,
      }}
    >
      Richiedi consulenza gratuita
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
);

/* ---------------- Page ---------------- */
const DemoFotovoltaico = () => {
  return (
    <>
      <Helmet>
        <title>Sito Web per Azienda Fotovoltaica · Demo | 4 Web Lab</title>
        <meta
          name="description"
          content="Demo di sito web per aziende fotovoltaiche, realizzata da 4 Web Lab, agenzia web di Padova specializzata in siti aziendali. Da 899€ una tantum."
        />
        <meta name="author" content="4 Web Lab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/realizzazioni/demo-fotovoltaico" />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="4 Web Lab" />
        <meta property="article:section" content="Realizzazioni" />
        <meta property="og:url" content="https://4weblab.it/realizzazioni/demo-fotovoltaico" />
        <meta property="og:title" content="Sito Web per Azienda Fotovoltaica · Demo | 4 Web Lab" />
        <meta
          property="og:description"
          content="Demo di sito web per aziende del settore fotovoltaico, realizzata da 4 Web Lab, agenzia web di Padova. Da 899€."
        />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="og:image" content="https://4weblab.it/og/demo-fotovoltaico.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sito Web per Azienda Fotovoltaica · Demo | 4 Web Lab" />
        <meta name="twitter:description" content="Demo di sito web per aziende fotovoltaiche · 4 Web Lab, agenzia web di Padova. Da 899€." />
        <meta name="twitter:image" content="https://4weblab.it/og/demo-fotovoltaico.webp" />
        <meta name="theme-color" content="#070B14" />
        <link rel="preload" as="image" href={heroImg} fetchPriority="high" />

        {/* Organization 4 Web Lab — EEAT */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://4weblab.it/#organization",
            name: "4 Web Lab",
            legalName: "4 Web Lab di Fullin Carlo",
            url: "https://4weblab.it/",
            logo: "https://4weblab.it/logo.webp",
            vatID: "05765760284",
            foundingDate: "2026",
            founder: {
              "@type": "Person",
              name: "Carlo Fullin",
              jobTitle: "Founder & Web Designer",
              sameAs: "https://www.linkedin.com/in/carlo-fullin-6aa6b73b7/",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Via Belluno 44",
              addressLocality: "Legnaro",
              addressRegion: "PD",
              postalCode: "35020",
              addressCountry: "IT",
            },
            areaServed: ["IT", "Veneto"],
            knowsAbout: [
              "Web design per aziende fotovoltaiche",
              "Realizzazione siti web settore energia rinnovabile",
              "UX per dashboard energetiche",
              "SEO B2B impianti fotovoltaici",
              "Lead generation per installatori fotovoltaico",
              "Web design Padova e Veneto",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+393514656042",
              email: "info@4weblab.it",
              contactType: "sales",
              areaServed: "IT",
              availableLanguage: ["Italian"],
            },
            sameAs: [
              "https://share.google/oGOMV0sHAaV8JlqnZ",
              "https://www.linkedin.com/in/carlo-fullin-6aa6b73b7/",
            ],
          })}
        </script>

        {/* CreativeWork — il concept */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://4weblab.it/realizzazioni/demo-fotovoltaico#concept",
            name: "Concept di sito web premium per azienda fotovoltaica — by 4 Web Lab",
            headline: "Tech demo: web design premium per aziende del settore fotovoltaico realizzata da 4 Web Lab",
            url: "https://4weblab.it/realizzazioni/demo-fotovoltaico",
            inLanguage: "it",
            author: { "@id": "https://4weblab.it/#organization" },
            creator: { "@id": "https://4weblab.it/#organization" },
            producer: { "@id": "https://4weblab.it/#organization" },
            publisher: { "@id": "https://4weblab.it/#organization" },
            copyrightHolder: { "@id": "https://4weblab.it/#organization" },
            about: "Web design, UX e SEO per aziende del settore fotovoltaico ed energie rinnovabili realizzati da 4 Web Lab.",
            keywords: [
              "agenzia web design fotovoltaico",
              "realizzazione siti web energia rinnovabile",
              "4 Web Lab settore energia",
              "web design impianti fotovoltaici",
              "SEO aziende fotovoltaiche",
              "siti web Padova fotovoltaico",
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
              { "@type": "ListItem", position: 3, name: "Concept fotovoltaico premium · 4 Web Lab", item: "https://4weblab.it/realizzazioni/demo-fotovoltaico" },
            ],
          })}
        </script>

        {/* WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://4weblab.it/realizzazioni/demo-fotovoltaico#webpage",
            name: "4 Web Lab · Concept Web Design Premium per Aziende Fotovoltaiche",
            url: "https://4weblab.it/realizzazioni/demo-fotovoltaico",
            inLanguage: "it",
            isPartOf: { "@type": "WebSite", name: "4 Web Lab", url: "https://4weblab.it/" },
            about: { "@id": "https://4weblab.it/#organization" },
            mainEntity: { "@id": "https://4weblab.it/realizzazioni/demo-fotovoltaico#concept" },
            author: { "@id": "https://4weblab.it/#organization" },
            creator: { "@id": "https://4weblab.it/#organization" },
            publisher: { "@id": "https://4weblab.it/#organization" },
            description:
              "Tech demo concettuale realizzata da 4 Web Lab — agenzia italiana specializzata in web design premium per aziende del settore fotovoltaico ed energia rinnovabile.",
          })}
        </script>
      </Helmet>

      <div
        style={{
          background: C.bg,
          color: C.text,
          fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <SolarisHeader />
        <main>
          <Hero />
          <KpiSection />
          <ProblemSolution />
          <ServicesSection />
          <ProcessSection />
          <CompareSection />
          <IncentivesSection />
          <CaseStudiesSection />
          <FaqSection />
          <ContactSection />
          <TechDemoStrip />
        </main>
        <SolarisFooter />
        <StickyMobileCta />
      </div>
    </>
  );
};

export default DemoFotovoltaico;
