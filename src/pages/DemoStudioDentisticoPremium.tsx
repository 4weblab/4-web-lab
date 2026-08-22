import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  Smile,
  ShieldCheck,
  ScanLine,
  Award,
  Users,
  Star,
  Calendar,
  Menu,
  X,
  AlertTriangle,
  Plus,
  Minus,
  Gauge,
  Lock,
  Search,
  Smartphone,
  Heart,
} from "lucide-react";

import heroImg from "@/assets/dental-hero.webp";
import smileImg from "@/assets/dental-smile.webp";
import roomImg from "@/assets/dental-room.webp";
import scan3dImg from "@/assets/dental-3d-scan.webp";
import beforeImg from "@/assets/dental-before.webp";
import afterImg from "@/assets/dental-after.webp";
import doc1 from "@/assets/dental-doctor-1.webp";
import doc2 from "@/assets/dental-doctor-2.webp";
import doc3 from "@/assets/dental-doctor-3.webp";

/* =====================================================================
   "Studio Dentistico Aurea" — Premium Dental Tech Demo by 4 Web Lab
   Standalone page, NOT crawlable. Custom light medical design system.
   Brand fittizio, dati dimostrativi.
   ===================================================================== */

const C = {
  bg: "#FFFFFF",
  bgSoft: "#F5F8FC",
  bgTint: "#EAF2FB",
  ink: "#0B2545",
  inkSoft: "#1E3358",
  textDim: "#5C6E86",
  border: "rgba(11,37,69,0.08)",
  borderStrong: "rgba(11,37,69,0.16)",
  primary: "#1E4FD8",
  primarySoft: "#3A7BFF",
  cyan: "#19B8C2",
  cyanSoft: "#7BD9DF",
  beige: "#C8A97E",
  beigeSoft: "#F4ECDD",
};

const navItems = [
  { label: "Studio", href: "#studio" },
  { label: "Trattamenti", href: "#trattamenti" },
  { label: "Tecnologia", href: "#dsd" },
  { label: "Risultati", href: "#risultati" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

const scrollToContact = () => {
  document.getElementById("prenota")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------------- Header ---------------- */
const AureaHeader = () => {
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
        background: scrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.55)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
        boxShadow: scrolled ? "0 8px 30px -20px rgba(11,37,69,0.18)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5"
          aria-label="Studio Dentistico Aurea — Home"
        >
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center font-semibold text-sm"
            style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})`,
              color: "#fff",
              boxShadow: `0 8px 20px -8px ${C.primary}80`,
            }}
          >
            Au
          </span>
          <span className="font-semibold text-[1.05rem] tracking-[0.04em]" style={{ color: C.ink }}>
            Aurea<span style={{ color: C.cyan }}>.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={(e) => { e.preventDefault(); scrollToId(it.href.slice(1)); }}
              className="px-3.5 py-2 rounded-md text-[13.5px] font-medium transition-colors"
              style={{ color: C.inkSoft }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.inkSoft)}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="tel:+393514656042"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[13.5px] font-medium"
            style={{ color: C.inkSoft }}
          >
            <Phone className="w-4 h-4" /> 02 1234 5678
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`,
              color: "#fff",
              boxShadow: `0 10px 24px -10px ${C.primary}aa`,
            }}
          >
            Prenota visita
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setOpen(true)}
          aria-label="Apri menu"
          style={{ color: C.ink }}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col" style={{ background: C.bg }}>
          <div className="px-5 h-16 flex items-center justify-between border-b" style={{ borderColor: C.border }}>
            <span className="font-semibold tracking-[0.04em]" style={{ color: C.ink }}>Aurea.</span>
            <button onClick={() => setOpen(false)} aria-label="Chiudi menu" style={{ color: C.ink }} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-1" aria-label="Menu mobile">
            {navItems.map((it, i) => (
              <a
                key={it.href}
                href={it.href}
                onClick={(e) => { e.preventDefault(); setOpen(false); setTimeout(() => scrollToId(it.href.slice(1)), 60); }}
                className="text-3xl md:text-4xl font-semibold py-3"
                style={{ color: C.ink, animation: `aureaFadeUp 0.4s ${i * 0.05}s both` }}
              >
                {it.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); setTimeout(scrollToContact, 60); }}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold"
              style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`, color: "#fff" }}
            >
              Prenota una visita <ArrowRight className="w-5 h-5" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

/* ---------------- Hero ---------------- */
const Hero = () => (
  <section
    id="top"
    className="relative min-h-[100svh] flex items-center overflow-hidden"
    style={{ background: `linear-gradient(180deg, ${C.bg} 0%, ${C.bgSoft} 100%)` }}
  >
    {/* Soft glow */}
    <div aria-hidden className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full"
      style={{ background: `radial-gradient(circle, ${C.cyanSoft}55 0%, transparent 70%)`, filter: "blur(20px)" }} />
    <div aria-hidden className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full"
      style={{ background: `radial-gradient(circle, ${C.primary}22 0%, transparent 70%)`, filter: "blur(20px)" }} />
    <div aria-hidden className="absolute inset-0 opacity-[0.4]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, ${C.ink}11 1px, transparent 0)`,
      backgroundSize: "32px 32px",
      maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
    }} />

    <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 md:pt-40 md:pb-24 w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] mb-7"
          style={{
            color: C.primary,
            background: "rgba(30,79,216,0.08)",
            border: `1px solid ${C.primary}33`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.cyan, boxShadow: `0 0 12px ${C.cyan}` }} />
          Studio Dentistico Premium · Milano
        </span>

        <h1
          className="font-semibold leading-[1.04] tracking-tight text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] mb-6"
          style={{ color: C.ink, letterSpacing: "-0.025em", fontFamily: "ui-serif, 'Times New Roman', serif" }}
        >
          Un nuovo standard
          <br />
          per il tuo{" "}
          <span style={{
            background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            sorriso
          </span>.
        </h1>
        <h2 className="sr-only">Sito web per studio dentistico — concept realizzato da 4 Web Lab, agenzia web di Padova specializzata in siti per professionisti</h2>

        <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" style={{ color: C.textDim }}>
          Odontoiatria di precisione e estetica dentale con tecnologia digitale 3D.
          Un percorso personalizzato, in un ambiente progettato attorno alla tua serenità.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm md:text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`,
              color: "#fff",
              boxShadow: `0 18px 40px -14px ${C.primary}cc`,
            }}
          >
            <Calendar className="w-4 h-4" />
            Prenota la tua prima visita
          </button>
          <button
            onClick={() => scrollToId("dsd")}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm md:text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: C.ink,
              background: "rgba(255,255,255,0.7)",
              border: `1px solid ${C.borderStrong}`,
              backdropFilter: "blur(8px)",
            }}
          >
            Scopri il Digital Smile Design
          </button>
        </div>

        {/* Mini trust badges */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex items-center gap-2.5">
            <div className="flex">
              {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F5B301" }} />)}
            </div>
            <span className="text-sm font-medium" style={{ color: C.ink }}>4.9/5 · 320+ recensioni</span>
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: C.textDim }}>
            <ShieldCheck className="w-4 h-4" style={{ color: C.cyan }} />
            Direttore sanitario iscritto Albo
          </div>
        </div>
      </motion.div>

      {/* Right: image with floating cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative"
      >
        <div
          className="relative rounded-[28px] overflow-hidden aspect-[4/5] md:aspect-[5/6]"
          style={{
            border: `1px solid ${C.border}`,
            boxShadow: "0 60px 120px -40px rgba(11,37,69,0.35), 0 20px 40px -20px rgba(11,37,69,0.2)",
          }}
        >
          <img
            src={heroImg}
            alt="Reception dello studio dentistico Aurea, ambiente luminoso e moderno"
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(180deg, transparent 50%, ${C.ink}26 100%)`,
          }} />
        </div>

        {/* Floating card: pazienti */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute -left-3 md:-left-10 top-10 md:top-16 p-4 md:p-5 rounded-2xl flex items-center gap-3"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: `1px solid ${C.border}`,
            backdropFilter: "blur(14px)",
            boxShadow: "0 24px 48px -20px rgba(11,37,69,0.25)",
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})` }}>
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[18px] font-semibold leading-none" style={{ color: C.ink }}>+2.500</div>
            <div className="text-[11px] mt-1" style={{ color: C.textDim }}>pazienti seguiti</div>
          </div>
        </motion.div>

        {/* Floating card: 3D */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="absolute -right-3 md:-right-8 top-1/2 -translate-y-1/2 p-4 md:p-5 rounded-2xl flex items-center gap-3"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: `1px solid ${C.border}`,
            backdropFilter: "blur(14px)",
            boxShadow: "0 24px 48px -20px rgba(11,37,69,0.25)",
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: C.bgTint, border: `1px solid ${C.cyanSoft}` }}>
            <ScanLine className="w-5 h-5" style={{ color: C.primary }} />
          </div>
          <div>
            <div className="text-[14px] font-semibold leading-none" style={{ color: C.ink }}>Tecnologia 3D</div>
            <div className="text-[11px] mt-1" style={{ color: C.textDim }}>Scansione intraorale</div>
          </div>
        </motion.div>

        {/* Floating card: prima visita */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 -bottom-6 md:-bottom-8 px-5 py-3.5 rounded-full flex items-center gap-2.5 whitespace-nowrap"
          style={{
            background: "#fff",
            border: `1px solid ${C.border}`,
            boxShadow: "0 24px 48px -20px rgba(11,37,69,0.3)",
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.cyan }} />
          <span className="text-[13px] font-semibold" style={{ color: C.ink }}>Prima visita dedicata · 60 min</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ---------------- Demo notice (subito sotto hero) ---------------- */
const DemoNotice = () => (
  <section className="py-10 md:py-14" style={{ background: C.bg }}>
    <div className="max-w-5xl mx-auto px-5 md:px-8">
      <div
        className="flex flex-col md:flex-row md:items-center gap-4 p-5 md:p-6 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${C.bgTint} 0%, ${C.beigeSoft}80 100%)`,
          border: `1px solid ${C.border}`,
        }}
      >
        <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: "#fff", border: `1px solid ${C.border}` }}>
          <Sparkles className="w-5 h-5" style={{ color: C.primary }} />
        </div>
        <div className="flex-1">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-1" style={{ color: C.primary }}>
            Concept project · Tech demo
          </div>
          <p className="text-[14.5px] leading-relaxed" style={{ color: C.inkSoft }}>
            Questa pagina è una <strong>demo concettuale realizzata da 4 Web Lab</strong> per mostrare un possibile
            approccio premium al web design per studi dentistici. Lo studio "Aurea" è un brand fittizio.
          </p>
        </div>
        <Link
          to="/realizzazioni"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors"
          style={{ background: "#fff", color: C.ink, border: `1px solid ${C.borderStrong}` }}
        >
          Portfolio 4 Web Lab <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  </section>
);

/* ---------------- Section heading ---------------- */
const SectionHead = ({
  kicker, title, sub, light = false, center = false,
}: { kicker: string; title: React.ReactNode; sub?: string; light?: boolean; center?: boolean }) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-14 md:mb-20`}>
    <span
      className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] mb-4"
      style={{ color: C.cyan }}
    >
      {kicker}
    </span>
    <h2
      className="text-3xl md:text-[2.85rem] leading-[1.1] tracking-tight mb-5 font-semibold"
      style={{
        color: light ? "#fff" : C.ink,
        letterSpacing: "-0.02em",
        fontFamily: "ui-serif, 'Times New Roman', serif",
      }}
    >
      {title}
    </h2>
    {sub && (
      <p className="text-base md:text-lg leading-relaxed" style={{ color: light ? "rgba(255,255,255,0.78)" : C.textDim }}>
        {sub}
      </p>
    )}
  </div>
);

/* ---------------- Trust grid ---------------- */
const Trust = () => {
  const items = [
    { v: "20+", l: "Anni di esperienza clinica" },
    { v: "+2.500", l: "Pazienti seguiti dal team" },
    { v: "4.9/5", l: "Recensioni medie online" },
    { v: "ISO 9001", l: "Standard di sterilizzazione" },
  ];
  return (
    <section className="py-16 md:py-20" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: C.border }}
        >
          {items.map((it) => (
            <div key={it.l} className="px-6 py-7 md:py-9 text-center" style={{ background: C.bgSoft }}>
              <div
                className="text-2xl md:text-4xl font-semibold mb-2"
                style={{ color: C.ink, fontFamily: "ui-serif, serif", letterSpacing: "-0.02em" }}
              >
                {it.v}
              </div>
              <div className="text-[12px] uppercase tracking-wider" style={{ color: C.textDim }}>
                {it.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Studio (about) ---------------- */
const Studio = () => (
  <section id="studio" className="py-24 md:py-32 relative overflow-hidden" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="relative rounded-[24px] overflow-hidden aspect-[4/5]"
          style={{ border: `1px solid ${C.border}`, boxShadow: "0 40px 80px -40px rgba(11,37,69,0.3)" }}>
          <img
            src={roomImg}
            alt="Sala operativa con tecnologia digitale dello Studio Aurea"
            width={1600}
            height={1200}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute -bottom-6 -right-4 md:-right-10 p-5 rounded-2xl max-w-[260px]"
          style={{
            background: "#fff",
            border: `1px solid ${C.border}`,
            boxShadow: "0 24px 48px -20px rgba(11,37,69,0.3)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4" style={{ color: C.beige }} />
            <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: C.inkSoft }}>
              Filosofia
            </span>
          </div>
          <p className="text-[13.5px] leading-relaxed" style={{ color: C.ink }}>
            "Ogni sorriso è una storia. Il nostro compito è prendercene cura come fosse la nostra."
          </p>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <SectionHead
          kicker="Lo studio"
          title={<>Un approccio <em style={{ color: C.primary, fontStyle: "italic" }}>su misura</em>, fondato su ascolto e tecnologia.</>}
          sub="Aurea è uno studio dentistico nato per offrire un'esperienza diversa: tempo dedicato a ogni paziente, percorsi clinici personalizzati e una struttura pensata per accogliere con calma. Diagnostica digitale 3D, sterilizzazione tracciata e un team multidisciplinare per coprire ogni esigenza, dall'estetica all'implantologia."
        />
        <ul className="space-y-3.5">
          {[
            "Prima visita estesa di 60 minuti, senza fretta",
            "Diagnostica con scanner intraorale 3D di ultima generazione",
            "Piano di cura preventivo, scritto e trasparente",
            "Sedazione cosciente per il massimo comfort durante i trattamenti",
          ].map((p) => (
            <li key={p} className="flex gap-3 text-[15px]" style={{ color: C.ink }}>
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: C.cyan }} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

/* ---------------- Trattamenti ---------------- */
const Trattamenti = () => {
  const items = [
    { icon: Smile, title: "Implantologia", desc: "Implanti a carico immediato con guida chirurgica digitale e protesi su misura." },
    { icon: ScanLine, title: "Invisalign", desc: "Allineatori trasparenti progettati con simulazione 3D e revisioni periodiche del piano." },
    { icon: Sparkles, title: "Estetica dentale", desc: "Rimodellazione del sorriso con un approccio minimamente invasivo e altamente estetico." },
    { icon: Heart, title: "Faccette", desc: "Faccette in ceramica ultra-sottile, calibrate sul tuo viso con fotografia clinica e DSD." },
    { icon: ShieldCheck, title: "Igiene professionale", desc: "Sedute di igiene avanzata con protocolli di prevenzione personalizzati per la tua bocca." },
    { icon: Award, title: "Sbiancamento", desc: "Sbiancamento professionale in studio o domiciliare, con monitoraggio dei risultati nel tempo." },
  ];
  return (
    <section id="trattamenti" className="py-24 md:py-32 relative" style={{ background: C.bgSoft }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          kicker="Trattamenti"
          title={<>Ogni servizio è un <em style={{ color: C.primary, fontStyle: "italic" }}>percorso</em>, non una semplice prestazione.</>}
          sub="Combiniamo competenza clinica, tecnologia digitale e attenzione estetica per piani di cura completi e prevedibili."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
              className="group relative p-7 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "#fff",
                border: `1px solid ${C.border}`,
                boxShadow: "0 1px 0 rgba(11,37,69,0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 30px 60px -25px rgba(30,79,216,0.25)";
                e.currentTarget.style.borderColor = `${C.primary}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 0 rgba(11,37,69,0.02)";
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${C.bgTint} 0%, #fff 100%)`,
                  border: `1px solid ${C.borderStrong}`,
                }}
              >
                <it.icon className="w-5 h-5" style={{ color: C.primary }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: C.ink }}>{it.title}</h3>
              <p className="text-[14.5px] leading-relaxed mb-5" style={{ color: C.textDim }}>{it.desc}</p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors"
                style={{ color: C.primary }}
              >
                Richiedi informazioni
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Digital Smile Design ---------------- */
const DSD = () => {
  const phases = [
    { n: "01", t: "Scansione 3D", d: "Acquisizione intraorale digitale, senza paste o calchi tradizionali." },
    { n: "02", t: "Simulazione", d: "Anteprima del sorriso finale prima di iniziare qualsiasi trattamento." },
    { n: "03", t: "Pianificazione", d: "Piano clinico condiviso, con tempi, fasi e investimento trasparenti." },
    { n: "04", t: "Trattamento", d: "Esecuzione guidata digitalmente, con controlli periodici programmati." },
  ];
  return (
    <section id="dsd" className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: `linear-gradient(180deg, ${C.ink} 0%, #07182F 100%)` }}>
      <div aria-hidden className="absolute inset-0 opacity-[0.18]" style={{
        backgroundImage: `linear-gradient(${C.cyan}33 1px, transparent 1px), linear-gradient(90deg, ${C.cyan}33 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
      }} />
      <div aria-hidden className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full"
        style={{ background: `radial-gradient(circle, ${C.cyan}40 0%, transparent 70%)`, filter: "blur(40px)" }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <SectionHead
            kicker="Digital Smile Design"
            title={<>Vedere il tuo sorriso, <em style={{ color: C.cyan, fontStyle: "italic" }}>prima</em> di iniziare.</>}
            sub="Con la tecnologia DSD acquisiamo bocca, viso e movimento, e simuliamo il risultato finale prima di toccare un solo dente. Una scelta consapevole, basata su dati."
            light
          />
          <div className="space-y-4">
            {phases.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="font-mono text-sm font-bold flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${C.cyan}22`, color: C.cyanSoft, border: `1px solid ${C.cyan}55` }}
                >
                  {p.n}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-1" style={{ color: "#fff" }}>{p.t}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mockup screen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-[24px] overflow-hidden"
            style={{
              border: "1px solid rgba(123,217,223,0.3)",
              boxShadow: `0 60px 120px -40px ${C.cyan}55, 0 0 0 1px rgba(123,217,223,0.1)`,
            }}>
            <img
              src={scan3dImg}
              alt="Mockup di interfaccia per scansione 3D dentale"
              width={1920}
              height={1080}
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(180deg, transparent 60%, ${C.ink}80 100%)`,
            }} />
          </div>
          {/* Floating chip */}
          <div
            className="absolute -top-4 -left-4 px-4 py-2.5 rounded-full flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(14px)",
              border: `1px solid ${C.cyan}55`,
              boxShadow: `0 12px 30px -12px ${C.cyan}80`,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.cyan }} />
            <span className="text-[12px] font-semibold tracking-wide" style={{ color: "#fff" }}>SCAN ATTIVA</span>
          </div>
          <div
            className="absolute -bottom-5 right-4 px-4 py-3 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(14px)",
              border: `1px solid ${C.border}`,
              boxShadow: "0 24px 48px -20px rgba(11,37,69,0.5)",
            }}
          >
            <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: C.textDim }}>
              Anteprima trattamento
            </div>
            <div className="text-[13px] font-semibold" style={{ color: C.ink }}>
              Allineamento + faccette · 14 mesi
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- Before / After Slider ---------------- */
const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section id="risultati" className="py-24 md:py-32" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          kicker="Risultati reali"
          title={<>Trasformazioni visibili, <em style={{ color: C.primary, fontStyle: "italic" }}>millimetro dopo millimetro</em>.</>}
          sub="Trascina la barra al centro per confrontare il prima e il dopo dei nostri trattamenti estetici e funzionali."
          center
        />

        <div className="max-w-4xl mx-auto">
          <div
            ref={wrapRef}
            className="relative aspect-[16/10] rounded-3xl overflow-hidden select-none cursor-ew-resize"
            style={{
              border: `1px solid ${C.border}`,
              boxShadow: "0 40px 90px -40px rgba(11,37,69,0.4)",
              background: C.bgSoft,
            }}
            onMouseMove={(e) => dragging.current && handleMove(e.clientX)}
            onMouseDown={(e) => { dragging.current = true; handleMove(e.clientX); }}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => { dragging.current = true; handleMove(e.touches[0].clientX); }}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={() => (dragging.current = false)}
          >
            {/* After (full) */}
            <img
              src={afterImg}
              alt="Risultato dopo trattamento estetico — sorriso luminoso"
              loading="lazy"
              decoding="async"
              width={1200} height={750}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeImg}
                alt="Situazione iniziale prima del trattamento"
                loading="lazy"
                decoding="async"
                width={1200} height={750}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider"
              style={{ background: "rgba(11,37,69,0.85)", color: "#fff", backdropFilter: "blur(8px)" }}>
              Prima
            </span>
            <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider"
              style={{ background: "rgba(255,255,255,0.95)", color: C.ink, backdropFilter: "blur(8px)" }}>
              Dopo
            </span>

            {/* Divider line */}
            <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${pos}%`, width: 2, background: "#fff", boxShadow: "0 0 20px rgba(0,0,0,0.4)" }} />
            {/* Handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
              style={{
                left: `${pos}%`,
                background: "#fff",
                border: `2px solid ${C.primary}`,
                boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              }}
            >
              <ArrowLeft className="w-3.5 h-3.5" style={{ color: C.primary }} />
              <ArrowRight className="w-3.5 h-3.5 -ml-1" style={{ color: C.primary }} />
            </div>
          </div>

          <p className="text-center text-sm mt-6" style={{ color: C.textDim }}>
            Caso clinico dimostrativo · Le immagini di paragone sono a scopo illustrativo.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Reviews ---------------- */
const Reviews = () => {
  const items = [
    { n: "Giulia M.", role: "Paziente · Invisalign", t: "Mi sono sentita ascoltata dal primo minuto. Hanno spiegato ogni passaggio con calma e i risultati sono andati oltre le aspettative.", img: doc1 },
    { n: "Marco T.", role: "Paziente · Implantologia", t: "Avevo paura del dentista da una vita. Lo studio è bellissimo, il team rassicurante e l'intervento si è svolto senza alcun fastidio.", img: doc2 },
    { n: "Federica B.", role: "Paziente · Faccette", t: "Mi hanno fatto vedere il sorriso finale prima ancora di iniziare. Una cosa che cambia tutto. Tornata a sorridere senza filtri.", img: doc3 },
  ];
  return (
    <section className="py-24 md:py-32" style={{ background: C.bgSoft }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          kicker="Recensioni"
          title={<>La parola ai nostri <em style={{ color: C.primary, fontStyle: "italic" }}>pazienti</em>.</>}
          sub="La nostra reputazione si costruisce sorriso dopo sorriso. Una selezione di esperienze condivise dai nostri pazienti."
          center
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 md:p-8 rounded-2xl flex flex-col"
              style={{ background: "#fff", border: `1px solid ${C.border}`, boxShadow: "0 20px 40px -30px rgba(11,37,69,0.2)" }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map(s => <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#F5B301" }} />)}
              </div>
              <p className="text-[15px] leading-relaxed mb-6 flex-1" style={{ color: C.ink }}>
                "{r.t}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: C.border }}>
                <img
                  src={r.img}
                  alt={`Foto di ${r.n}`}
                  loading="lazy"
                  width={48} height={48}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ border: `1px solid ${C.border}` }}
                />
                <div>
                  <div className="text-[14px] font-semibold" style={{ color: C.ink }}>{r.n}</div>
                  <div className="text-[12px]" style={{ color: C.textDim }}>{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs mt-8" style={{ color: C.textDim }}>
          Recensioni illustrative create per la demo. Nessun dato reale è stato utilizzato.
        </p>
      </div>
    </section>
  );
};

/* ---------------- Team ---------------- */
const Team = () => {
  const team = [
    { n: "Dr.ssa Elena Marchetti", role: "Direttrice sanitaria · Estetica dentale", img: doc1 },
    { n: "Dr. Andrea Conti", role: "Implantologia e chirurgia orale", img: doc2 },
    { n: "Dr. Luca Rinaldi", role: "Ortodonzia · Invisalign", img: doc3 },
  ];
  return (
    <section id="team" className="py-24 md:py-32" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          kicker="Il team"
          title={<>Specialisti, prima ancora che <em style={{ color: C.primary, fontStyle: "italic" }}>professionisti</em>.</>}
          sub="Un team multidisciplinare, formato in Italia e all'estero, che condivide un unico obiettivo: la cura del paziente nel tempo."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((m, i) => (
            <motion.figure
              key={m.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden"
              style={{ background: C.bgSoft, border: `1px solid ${C.border}` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={`Ritratto di ${m.n}`}
                  loading="lazy"
                  width={900} height={1200}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(180deg, transparent 55%, ${C.ink}cc 100%)`,
                }} />
              </div>
              <figcaption className="p-6">
                <h3 className="text-lg font-semibold mb-1" style={{ color: C.ink }}>{m.n}</h3>
                <div className="text-[13px]" style={{ color: C.textDim }}>{m.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- EEAT editorial section ---------------- */
const EEAT = () => {
  const items = [
    { icon: Smartphone, t: "UX mobile-first", d: "L'80% delle ricerche di uno studio dentistico avviene da mobile. Un sito leggero e ordinato è il primo segno di professionalità." },
    { icon: ShieldCheck, t: "Fiducia online", d: "Foto reali, team identificabile, contenuti chiari su trattamenti e percorsi: la trasparenza è la nuova prevenzione." },
    { icon: Gauge, t: "Velocità e prestazioni", d: "Un sito che si carica in meno di 2 secondi riduce drasticamente l'abbandono e migliora la percezione percepita di qualità." },
    { icon: Lock, t: "Accessibilità e GDPR", d: "Contrasti adeguati, navigazione da tastiera e gestione consensi: requisiti tecnici e legali oggi imprescindibili." },
    { icon: Search, t: "SEO locale", d: "Essere trovati per \"dentista + città\" non è fortuna: è struttura, contenuti coerenti e autorevolezza nel tempo." },
    { icon: Calendar, t: "Prenotazione rapida", d: "Click-to-call, WhatsApp e form prenotazione in pochi tap: meno frizione, più appuntamenti reali." },
  ];
  return (
    <section className="py-24 md:py-32" style={{ background: C.bgSoft }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          kicker="Strategia digitale"
          title={<>Perché un sito moderno è oggi <em style={{ color: C.primary, fontStyle: "italic" }}>parte della cura</em>.</>}
          sub="Per uno studio dentistico, il sito è spesso il primo contatto con un futuro paziente. Velocità, chiarezza e estetica raccontano il livello di attenzione che metterete anche in poltrona."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="p-7 rounded-2xl"
              style={{ background: "#fff", border: `1px solid ${C.border}` }}
            >
              <div className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center"
                style={{ background: C.bgTint, border: `1px solid ${C.borderStrong}` }}>
                <it.icon className="w-5 h-5" style={{ color: C.primary }} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: C.ink }}>{it.t}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: C.textDim }}>{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- FAQ ---------------- */
const FAQ = () => {
  const items = [
    {
      q: "Quanto è importante il sito web per uno studio dentistico nel 2026?",
      a: "Per la maggior parte dei pazienti, il sito è il primo contatto con lo studio. Velocità, chiarezza dei trattamenti, foto reali e prenotazione rapida da mobile sono oggi tra i principali fattori di scelta, insieme al passaparola.",
    },
    {
      q: "Quali sezioni non possono mancare nel sito di un dentista?",
      a: "Una hero rassicurante, presentazione dello studio e del team, descrizione dei trattamenti, casi clinici (anche dimostrativi), recensioni, percorso di prima visita, FAQ e una pagina contatti con indirizzo, mappa e prenotazione.",
    },
    {
      q: "Come si comunica un trattamento estetico in modo elegante?",
      a: "Con fotografia clinica curata, copy umano e mai aggressivo, simulazioni 3D quando possibile e una chiara distinzione tra benefici estetici e funzionali. Mai promesse, sempre processo.",
    },
    {
      q: "Cosa significa SEO locale per uno studio dentistico?",
      a: "Significa essere trovati su Google per le ricerche del tipo \"dentista Milano\", \"implantologo zona Navigli\" e simili. Si lavora su contenuti localizzati, scheda Google, recensioni reali, dati strutturati e citazioni coerenti su tutto il web.",
    },
    {
      q: "Posso usare un template generico per il mio studio dentistico?",
      a: "Si può, ma raramente è una buona idea. Un template generico trasmette generica professionalità. Un sito su misura comunica il livello reale dello studio fin dal primo secondo, e questo si traduce in più appuntamenti qualificati.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32" style={{ background: C.bg }}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <SectionHead
          kicker="Domande frequenti"
          title={<>Le risposte ai dubbi più <em style={{ color: C.primary, fontStyle: "italic" }}>comuni</em>.</>}
          center
        />
        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? C.bgSoft : "#fff",
                  border: `1px solid ${isOpen ? C.borderStrong : C.border}`,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-[15px] md:text-base font-semibold" style={{ color: C.ink }}>
                    {it.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform"
                    style={{
                      background: isOpen ? C.primary : C.bgTint,
                      color: isOpen ? "#fff" : C.primary,
                    }}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[14.5px] leading-relaxed" style={{ color: C.textDim }}>
                    {it.a}
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

/* ---------------- Booking form ---------------- */
type Status = { state: "idle" | "sending" | "success" | "error"; message: string };
type FieldErrors = Record<string, string>;

const BookingForm = () => {
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
    fd.append("subject", "[DEMO Studio Dentistico Aurea] Nuova richiesta dal form demo 4 Web Lab");
    fd.append("from_name", "Demo Studio Aurea - 4 Web Lab");
    fd.append("origine_demo", "/realizzazioni/demo-studio-dentistico-premium");

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

  const inputBase = "w-full rounded-xl px-4 py-3.5 text-[14.5px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";
  const inputStyle = (f?: string): React.CSSProperties => ({
    background: "#fff",
    border: `1px solid ${f && errors[f] ? "#ef4444" : C.borderStrong}`,
    color: C.ink,
  });
  const labelCls = "text-[12px] font-semibold uppercase tracking-wider mb-1.5 block";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} style={{ color: C.inkSoft }}>Nome e cognome *</label>
          <input data-field="name" name="name" type="text" required autoComplete="name"
            className={inputBase} style={inputStyle("name")} onChange={() => clear("name")} />
          {errors.name && <span className="text-xs mt-1 block text-red-500">{errors.name}</span>}
        </div>
        <div>
          <label className={labelCls} style={{ color: C.inkSoft }}>Telefono *</label>
          <input data-field="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+39 ..."
            className={inputBase} style={inputStyle("phone")} onChange={() => clear("phone")} />
          {errors.phone && <span className="text-xs mt-1 block text-red-500">{errors.phone}</span>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} style={{ color: C.inkSoft }}>Email *</label>
          <input data-field="email" name="email" type="email" required autoComplete="email"
            className={inputBase} style={inputStyle("email")} onChange={() => clear("email")} />
          {errors.email && <span className="text-xs mt-1 block text-red-500">{errors.email}</span>}
        </div>
        <div>
          <label className={labelCls} style={{ color: C.inkSoft }}>Trattamento di interesse</label>
          <select name="trattamento" className={inputBase} style={inputStyle()} defaultValue="">
            <option value="">Seleziona…</option>
            <option>Prima visita</option>
            <option>Igiene professionale</option>
            <option>Implantologia</option>
            <option>Invisalign</option>
            <option>Estetica dentale / Faccette</option>
            <option>Sbiancamento</option>
            <option>Altro</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls} style={{ color: C.inkSoft }}>Messaggio</label>
        <textarea name="message" rows={4}
          placeholder="Raccontaci brevemente la tua esigenza o i giorni preferiti per la visita..."
          className={`${inputBase} resize-none`} style={inputStyle()} />
      </div>

      <div className="sr-only" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
        <label>Fax<input name="fax" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button type="submit" disabled={status.state === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:hover:translate-y-0"
        style={{
          background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`,
          color: "#fff",
          boxShadow: `0 18px 40px -14px ${C.primary}cc`,
        }}>
        {status.state === "sending" ? "Invio in corso..." : "Prenota la prima visita"}
        {status.state !== "sending" && <ArrowRight className="w-4 h-4" />}
      </button>

      {status.message && (
        <p role="status" aria-live="polite" className="text-sm font-medium text-center mt-2"
          style={{ color: status.state === "success" ? "#16a34a" : status.state === "error" ? "#dc2626" : C.textDim }}>
          {status.message}
        </p>
      )}

      <p className="text-[11.5px] leading-relaxed mt-2" style={{ color: C.textDim }}>
        I dati inseriti verranno trattati da <strong>4 Web Lab di Fullin Carlo</strong> (P.IVA 05765760284) per
        rispondere alla richiesta di contatto, base giuridica art. 6.1.b GDPR. Maggiori info nella{" "}
        <Link to="/privacy" target="_blank" className="underline" style={{ color: C.primary }}>Privacy Policy</Link>.
      </p>
    </form>
  );
};

/* ---------------- Booking section ---------------- */
const Booking = () => (
  <section id="prenota" className="py-24 md:py-32" style={{ background: C.bgSoft }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      {/* Demo notice */}
      <div className="mb-10 md:mb-14 p-5 md:p-6 rounded-2xl flex gap-4 items-start"
        style={{
          background: "rgba(30,79,216,0.06)",
          border: `1px solid ${C.primary}33`,
        }}>
        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "#fff", color: C.primary, border: `1px solid ${C.borderStrong}` }}>
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: C.primary }}>
            Avviso importante — Tech Demo
          </div>
          <p className="text-[14.5px] leading-relaxed" style={{ color: C.ink }}>
            Questa è una <strong>demo concettuale realizzata da 4 Web Lab</strong>. Le richieste inviate
            tramite questo modulo verranno recapitate <strong>direttamente a 4 Web Lab</strong> e <strong>non</strong> ad
            uno studio dentistico reale. "Studio Aurea" è un brand fittizio creato a scopo dimostrativo.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16">
        {/* LEFT — Info */}
        <div className="lg:pt-2">
          <SectionHead
            kicker="Prenota"
            title={<>La prima visita è il <em style={{ color: C.primary, fontStyle: "italic" }}>primo passo</em>.</>}
            sub="Compila il modulo: ti ricontattiamo entro 24 ore per concordare insieme un appuntamento, senza alcun impegno."
          />

          <div className="space-y-3 mb-8">
            <a href="tel:+393514656042"
              className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "#fff", border: `1px solid ${C.border}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: C.bgTint, color: C.primary }}>
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider" style={{ color: C.textDim }}>Chiama lo studio</div>
                <div className="font-semibold" style={{ color: C.ink }}>+39 351 465 6042</div>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: C.primary }} />
            </a>

            <a href="https://wa.me/393514656042?text=Ciao%2C%20ho%20visto%20la%20demo%20studio%20dentistico%20premium%20su%204weblab.it"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.4)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#25D366", color: "#fff" }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.490-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.463 3.488z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider" style={{ color: C.textDim }}>WhatsApp (più rapido)</div>
                <div className="font-semibold" style={{ color: C.ink }}>Scrivici su WhatsApp</div>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: "#25D366" }} />
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "#fff", border: `1px solid ${C.border}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: C.bgTint, color: C.primary }}>
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider" style={{ color: C.textDim }}>Orari (placeholder)</div>
                <div className="font-semibold text-[14px]" style={{ color: C.ink }}>Lun-Ven 9:00 — 19:30 · Sab 9:00 — 13:00</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "#fff", border: `1px solid ${C.border}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: C.bgTint, color: C.primary }}>
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-wider" style={{ color: C.textDim }}>Sede (placeholder)</div>
                <div className="font-semibold text-[14px]" style={{ color: C.ink }}>Via Demo del Sorriso 12 — Milano</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-6 border-t" style={{ borderColor: C.border }}>
            {[
              { v: "24h", l: "Risposta" },
              { v: "60'", l: "Prima visita" },
              { v: "0€", l: "Senza impegno" },
            ].map((b) => (
              <div key={b.l} className="text-center">
                <div className="font-semibold text-xl" style={{ color: C.ink, fontFamily: "ui-serif, serif" }}>{b.v}</div>
                <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: C.textDim }}>{b.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="p-6 md:p-10 rounded-3xl"
          style={{
            background: "#fff",
            border: `1px solid ${C.border}`,
            boxShadow: "0 50px 100px -50px rgba(11,37,69,0.35)",
          }}>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-semibold" style={{ color: C.ink, fontFamily: "ui-serif, serif" }}>
              Modulo prenotazione
            </h3>
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ background: C.bgTint, color: C.primary }}>
              Demo
            </span>
          </div>
          <BookingForm />
        </div>
      </div>
      <div className="mt-16 md:mt-20 text-center">
        <Link
          to="/realizzazioni"
          className="inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline"
          style={{ color: C.primary }}
        >
          Torna alla lista delle demo
        </Link>
      </div>
    </div>
  </section>
);

/* ---------------- Footer ---------------- */
const AureaFooter = () => (
  <footer className="pt-16 pb-8" style={{ background: C.ink, color: "rgba(255,255,255,0.7)" }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-9 h-9 rounded-lg flex items-center justify-center font-semibold text-sm"
              style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})`, color: "#fff" }}>Au</span>
            <span className="font-semibold tracking-[0.04em] text-white">Aurea<span style={{ color: C.cyan }}>.</span></span>
          </div>
          <p className="text-[14px] leading-relaxed mb-5 max-w-md italic" style={{ color: "rgba(255,255,255,0.6)" }}>
            "Un nuovo standard per il tuo sorriso."
          </p>
          <div className="space-y-2 text-[13.5px]">
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.cyan }} />Via Demo del Sorriso 12 — 20121 Milano (placeholder)</div>
            <div className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.cyan }} />02 1234 5678 (placeholder)</div>
            <div className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.cyan }} />info@studio-aurea.demo</div>
            <div className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.cyan }} />Lun-Ven 9:00 — 19:30 · Sab 9:00 — 13:00</div>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 text-white">Studio</h4>
          <ul className="space-y-2 text-[13.5px]">
            {navItems.map((it) => (
              <li key={it.href}>
                <a href={it.href}
                  onClick={(e) => { e.preventDefault(); scrollToId(it.href.slice(1)); }}
                  className="hover:text-white transition-colors">
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 text-white">Seguici</h4>
          <div className="flex gap-2 mb-5">
            {["Instagram", "Facebook", "LinkedIn"].map((s) => (
              <a key={s} href="#" aria-label={s} onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.12)" }}>
                {s[0]}
              </a>
            ))}
          </div>
          <button onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold"
            style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})`, color: "#fff" }}>
            Prenota visita <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="p-5 rounded-2xl mb-8 text-[13px] leading-relaxed"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <strong className="text-white">Nota:</strong> Studio Dentistico "Aurea" è un brand fittizio creato esclusivamente
        per finalità dimostrative. Questa pagina è una <strong className="text-white">tech demo</strong> sviluppata
        da <Link to="/" className="underline" style={{ color: C.cyan }}>4 Web Lab</Link> per illustrare un possibile
        concept di sito web premium per il settore odontoiatrico. Nessun dato medico, recensione o contatto è reale.
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t text-[12px]"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div>© 2026 Studio Dentistico Aurea (demo) — Tutti i diritti riservati.</div>
        <div>
          Tech demo by{" "}
          <Link to="/" className="font-semibold text-white">4 Web Lab</Link> ·{" "}
          <Link to="/privacy" className="hover:text-white">Privacy</Link> ·{" "}
          <Link to="/cookie" className="hover:text-white">Cookie</Link>
        </div>
      </div>
    </div>
  </footer>
);

/* ---------------- Sticky mobile CTA ---------------- */
const MobileSticky = () => (
  <div className="lg:hidden fixed bottom-4 inset-x-4 z-40 flex gap-2">
    <a
      href="tel:+393514656042"
      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-[14px] font-semibold"
      style={{
        background: "rgba(255,255,255,0.95)",
        color: C.ink,
        border: `1px solid ${C.border}`,
        backdropFilter: "blur(12px)",
        boxShadow: "0 14px 30px -10px rgba(11,37,69,0.3)",
      }}
    >
      <Phone className="w-4 h-4" /> Chiama
    </a>
    <button
      onClick={scrollToContact}
      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-[14px] font-semibold"
      style={{
        background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`,
        color: "#fff",
        boxShadow: `0 14px 30px -10px ${C.primary}aa`,
      }}
    >
      <Calendar className="w-4 h-4" /> Prenota
    </button>
  </div>
);

/* ---------------- Page ---------------- */
const DemoStudioDentisticoPremium = () => {
  const canonical = "https://4weblab.it/realizzazioni/demo-studio-dentistico-premium";

  return (
    <>
      <Helmet>
        <title>Sito Web per Studio Dentistico · Demo Padova | 4 Web Lab</title>
        <meta
          name="description"
          content="Demo di sito web per studi dentistici, realizzata da 4 Web Lab, agenzia web di Padova specializzata in siti per professionisti. Da 990€."
        />
        <meta name="author" content="4 Web Lab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="4 Web Lab" />
        <meta property="article:section" content="Realizzazioni" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="og:title" content="Sito Web per Studio Dentistico · Demo Padova | 4 Web Lab" />
        <meta property="og:description" content="Demo di sito web per studi dentistici e professionisti sanitari · 4 Web Lab, agenzia web di Padova. Da 990€." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://4weblab.it/og/demo-studio-dentistico-premium.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sito Web per Studio Dentistico · Demo Padova | 4 Web Lab" />
        <meta name="twitter:description" content="Demo di sito web per studi dentistici · 4 Web Lab, agenzia web di Padova. Da 990€." />
        <meta name="twitter:image" content="https://4weblab.it/og/demo-studio-dentistico-premium.webp" />

        {/* CreativeWork — il concept, attribuito interamente a 4 Web Lab */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": canonical + "#concept",
            name: "Concept di sito web premium per studio dentistico — by 4 Web Lab",
            headline: "Tech demo: web design premium per studi dentistici realizzata da 4 Web Lab",
            url: canonical,
            inLanguage: "it-IT",
            author: { "@id": "https://4weblab.it/#business" },
            creator: { "@id": "https://4weblab.it/#business" },
            producer: { "@id": "https://4weblab.it/#business" },
            publisher: { "@id": "https://4weblab.it/#business" },
            copyrightHolder: { "@id": "https://4weblab.it/#business" },
            about: "Web design, UX e SEO locale per studi dentistici realizzati da 4 Web Lab.",
            keywords: [
              "agenzia web design studi dentistici",
              "realizzazione siti web dentisti Italia",
              "4 Web Lab healthcare",
              "web design medicale premium",
              "SEO locale studi dentistici",
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
              { "@type": "ListItem", position: 3, name: "Concept dentistico premium · 4 Web Lab", item: canonical },
            ],
          })}
        </script>

        {/* WebPage — autore/publisher = 4 Web Lab */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": canonical + "#webpage",
            name: "4 Web Lab · Concept Web Design Premium per Studi Dentistici",
            url: canonical,
            inLanguage: "it-IT",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            about: { "@id": canonical + "#concept" },
            mainEntity: { "@id": canonical + "#concept" },
            author: { "@id": "https://4weblab.it/#business" },
            creator: { "@id": "https://4weblab.it/#business" },
            publisher: { "@id": "https://4weblab.it/#business" },
            description: "Tech demo concettuale realizzata da 4 Web Lab — agenzia italiana specializzata in web design premium per studi dentistici, healthcare e professionisti.",
          })}
        </script>

        <style>{`
          @keyframes aureaFadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        `}</style>
      </Helmet>

      <div style={{ background: C.bg, color: C.ink, fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}>
        <AureaHeader />
        <main>
          <Hero />
          <DemoNotice />
          <Trust />
          <Studio />
          <Trattamenti />
          <DSD />
          <BeforeAfter />
          <Reviews />
          <Team />
          <EEAT />
          <FAQ />
          <Booking />
        </main>
        <AureaFooter />
        <MobileSticky />
      </div>
    </>
  );
};

export default DemoStudioDentisticoPremium;