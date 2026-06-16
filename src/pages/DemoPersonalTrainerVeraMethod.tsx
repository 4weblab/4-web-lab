/**
 * DemoPersonalTrainerVeraMethod.tsx
 * -----------------------------------------------------------------------------
 * Tech demo / concept project realizzato da 4 Web Lab.
 *
 * NOTA IMPORTANTE:
 * - Pagina interna a 4weblab.it (path: /realizzazioni/demo-personal-trainer-vera-method).
 * - "Vera Method · Giulia Conti" è un brand fittizio usato solo come scenario.
 * - Nessun dato aziendale reale fake: niente indirizzi, niente telefoni del PT,
 *   niente recensioni strutturate, niente LocalBusiness JSON-LD fake.
 * - Il form contatti invia direttamente a 4 Web Lab (Web3Forms).
 * - Robots: indicizzabile (index, follow); inclusa in sitemap.xml.
 * -----------------------------------------------------------------------------
 */

import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  Dumbbell,
  Heart,
  Brain,
  Award,
  CheckCircle2,
  Quote,
  Instagram,
  Plus,
  Minus,
} from "lucide-react";

import heroImg from "@/assets/vera-method-hero.webp";
import coachingImg from "@/assets/vera-method-coaching.webp";
import groupImg from "@/assets/vera-method-group.webp";
import portraitImg from "@/assets/vera-method-portrait.webp";
import detailImg from "@/assets/vera-method-detail.webp";

/* ============================================================================
 * Palette — Antracite + Coral (empowering premium)
 * ========================================================================= */
const C = {
  bg: "#141416",          // anthracite deep
  bgAlt: "#1c1c20",       // surface alt
  bgSoft: "#23232a",      // card
  line: "rgba(255,255,255,0.08)",
  ink: "#f5f1ec",         // primary text
  inkSoft: "rgba(245,241,236,0.66)",
  inkMute: "rgba(245,241,236,0.45)",
  coral: "#ff6b5b",
  coralSoft: "#ff8a7d",
  gold: "#d9b27a",
};

const SERIF = `'Fraunces', 'Cormorant Garamond', Georgia, serif`;
const SANS = `'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`;

/* ============================================================================
 * Header
 * ========================================================================= */
const NAV = [
  { id: "home", label: "Home" },
  { id: "metodo", label: "Metodo" },
  { id: "programmi", label: "Programmi" },
  { id: "risultati", label: "Risultati" },
  { id: "chi-sono", label: "Chi sono" },
  { id: "faq", label: "FAQ" },
  { id: "contatti", label: "Contatti" },
];

const DemoHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(20,20,22,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[80px] flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2"
          aria-label="Vera Method — torna alla home"
        >
          <span
            className="text-[20px] md:text-[24px] tracking-[0.16em] uppercase"
            style={{ fontFamily: SERIF, color: C.ink, fontWeight: 500, letterSpacing: "0.18em" }}
          >
            Vera<span style={{ color: C.coral }}>·</span>Method
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-[12px] tracking-[0.18em] uppercase transition-colors hover:opacity-100"
              style={{ fontFamily: SANS, color: C.inkSoft }}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo("contatti")}
            className="px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase transition-all hover:scale-[1.03]"
            style={{
              fontFamily: SANS,
              background: C.coral,
              color: C.bg,
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            Prenota consulenza
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Apri menu"
        >
          <span className="block w-6 h-px transition-transform" style={{ background: C.ink, transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
          <span className="block w-6 h-px transition-opacity" style={{ background: C.ink, opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-px transition-transform" style={{ background: C.ink, transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t" style={{ background: C.bg, borderColor: C.line }}>
          <div className="px-5 py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left py-3 text-[14px] tracking-[0.12em] uppercase border-b"
                style={{ fontFamily: SANS, color: C.ink, borderColor: C.line }}
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contatti")}
              className="mt-4 px-5 py-3 text-[11px] tracking-[0.22em] uppercase"
              style={{ background: C.coral, color: C.bg, fontFamily: SANS, borderRadius: 999, fontWeight: 600 }}
            >
              Prenota consulenza
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

/* ============================================================================
 * Back-to-Realizzazioni bar (sotto l'header concept)
 * ========================================================================= */
const BackBar = () => (
  <div className="pt-[68px] md:pt-[80px]" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between border-b" style={{ borderColor: C.line }}>
      <Link
        to="/realizzazioni"
        className="inline-flex items-center gap-2 text-[11px] md:text-[12px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
        style={{ fontFamily: SANS, color: C.inkSoft }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Torna alle Realizzazioni
      </Link>
      <span
        className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase"
        style={{ fontFamily: SANS, color: C.inkMute }}
      >
        <Sparkles className="w-3.5 h-3.5" style={{ color: C.coral }} />
        Demo concept · 4 Web Lab
      </span>
    </div>
  </div>
);

/* ============================================================================
 * Hero
 * ========================================================================= */
const Hero = () => (
  <section id="home" className="relative overflow-hidden" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-6 relative z-10">
        <span
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase mb-7"
          style={{ fontFamily: SANS, color: C.coral }}
        >
          <Dumbbell className="w-3.5 h-3.5" /> Personal Training · Padova
        </span>
        <h1
          className="text-[44px] sm:text-[56px] md:text-[72px] leading-[0.98] mb-7"
          style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.02em" }}
        >
          Il movimento come{" "}
          <em style={{ fontStyle: "italic", color: C.coral }}>atto di cura</em>.
          <br />
          Verso una nuova versione di te.
        </h1>
        <h2 className="sr-only">
          Vera Method · Giulia Conti — Personal Trainer donna a Padova. Demo concept realizzata da 4 Web Lab.
        </h2>
        <p
          className="text-[16px] md:text-[18px] leading-[1.7] mb-9 max-w-xl"
          style={{ fontFamily: SANS, color: C.inkSoft }}
        >
          Coaching 1:1 e small group dedicati alle donne che vogliono allenarsi
          in modo intelligente, sostenibile e finalmente loro. Un metodo che
          unisce <strong style={{ color: C.ink }}>forza, nutrizione e mindset</strong>.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.22em] uppercase transition-all hover:scale-[1.03]"
            style={{
              background: C.coral, color: C.bg, fontFamily: SANS,
              borderRadius: 999, fontWeight: 600,
              boxShadow: "0 10px 40px -10px rgba(255,107,91,0.55)",
            }}
          >
            Prenota una consulenza <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#metodo"
            className="inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.22em] uppercase transition-all hover:bg-white/5"
            style={{ fontFamily: SANS, color: C.ink, border: `1px solid ${C.line}`, borderRadius: 999 }}
          >
            Scopri il metodo
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-7 border-t" style={{ borderColor: C.line }}>
          {[
            { n: "8+", l: "anni di esperienza" },
            { n: "200+", l: "donne seguite" },
            { n: "1:1", l: "approccio su misura" },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline gap-2">
              <span className="text-[28px]" style={{ fontFamily: SERIF, color: C.coral, fontWeight: 500 }}>{s.n}</span>
              <span className="text-[11px] tracking-[0.16em] uppercase" style={{ fontFamily: SANS, color: C.inkMute }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-6 relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <img
            src={heroImg}
            alt="Giulia Conti, personal trainer donna, in piedi nello studio Vera Method a Padova — concept sito web realizzato da 4 Web Lab"
            width={1600}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(180deg, transparent 55%, rgba(20,20,22,0.55) 100%)" }}
          />
        </div>
        <div
          aria-hidden
          className="hidden md:block absolute -bottom-6 -left-6 w-44 h-44 rounded-2xl"
          style={{ border: `1px solid ${C.coral}`, opacity: 0.65 }}
        />
        <div
          aria-hidden
          className="hidden md:flex absolute -top-5 -right-5 w-24 h-24 items-center justify-center text-center rounded-full"
          style={{ background: C.bgSoft, border: `1px solid ${C.line}` }}
        >
          <div>
            <Award className="w-5 h-5 mx-auto mb-1" style={{ color: C.coral }} />
            <div className="text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: SANS, color: C.inkSoft }}>
              Certified<br />Trainer
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
      <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: SANS, color: C.ink }}>Scroll</span>
      <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: C.ink }} />
    </div>
  </section>
);

/* ============================================================================
 * Trust strip
 * ========================================================================= */
const TrustStrip = () => (
  <section className="py-8 border-y" style={{ background: C.bgAlt, borderColor: C.line }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[11px] tracking-[0.22em] uppercase" style={{ fontFamily: SANS, color: C.inkMute }}>
      <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" style={{ color: C.coral }} /> Cert. CONI / FIF</span>
      <span className="hidden md:inline opacity-30">·</span>
      <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" style={{ color: C.coral }} /> Studio privato a Padova</span>
      <span className="hidden md:inline opacity-30">·</span>
      <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" style={{ color: C.coral }} /> Pre &amp; Post partum</span>
      <span className="hidden md:inline opacity-30">·</span>
      <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" style={{ color: C.coral }} /> Online coaching</span>
    </div>
  </section>
);

/* ============================================================================
 * Metodo — 3 pilastri
 * ========================================================================= */
const PILLARS = [
  {
    icon: Dumbbell,
    title: "Movimento",
    desc: "Allenamento strutturato attorno alla tua biomeccanica, ai tuoi obiettivi e al tuo tempo. Forza intelligente, niente improvvisazione.",
  },
  {
    icon: Heart,
    title: "Nutrizione",
    desc: "Educazione alimentare semplice e sostenibile, in collaborazione con una biologa nutrizionista. Niente diete punitive.",
  },
  {
    icon: Brain,
    title: "Mindset",
    desc: "Costruiamo abitudini che reggono nel tempo: consapevolezza del corpo, gestione dello stress, costanza realistica.",
  },
];

const Metodo = () => (
  <section id="metodo" className="py-24 md:py-32" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-14 md:mb-20">
        <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.coral }}>
          Il metodo
        </span>
        <h2
          className="text-[36px] md:text-[54px] leading-[1.05] mb-5"
          style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Tre pilastri,{" "}
          <em style={{ color: C.coral }}>una sola direzione</em>.
        </h2>
        <p className="text-[16px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
          Vera Method nasce dall'idea che il vero cambiamento non è un programma di
          12 settimane: è un nuovo modo di abitare il proprio corpo. Lavoriamo su
          tre dimensioni, sempre insieme.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {PILLARS.map(({ icon: Icon, title, desc }, i) => (
          <article
            key={i}
            className="p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1"
            style={{
              background: C.bgSoft,
              border: `1px solid ${C.line}`,
              boxShadow: "0 1px 0 rgba(255,255,255,0.02)",
            }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center mb-7 rounded-xl"
              style={{ background: "rgba(255,107,91,0.12)", border: `1px solid rgba(255,107,91,0.3)` }}
            >
              <Icon className="w-5 h-5" style={{ color: C.coral }} />
            </div>
            <h3
              className="text-[26px] md:text-[30px] mb-4"
              style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400 }}
            >
              {title}
            </h3>
            <p className="text-[15px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
              {desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Programmi
 * ========================================================================= */
const PROGRAMS = [
  {
    name: "1:1 Coaching",
    img: coachingImg,
    price: "da 80€ / sessione",
    desc: "Allenamento personalizzato in studio privato a Padova. Massima attenzione su tecnica, postura e progressioni.",
    bullets: ["Valutazione iniziale completa", "Programma su misura", "Check mensili"],
    alt: "Sessione di personal training 1 a 1 tra trainer donna e cliente — concept Vera Method",
  },
  {
    name: "Small Group",
    img: groupImg,
    price: "da 35€ / sessione",
    desc: "Sessioni in piccolo gruppo (max 4 donne). Stessa cura della tecnica, atmosfera complice e motivante.",
    bullets: ["Gruppi soli femminili", "2 sessioni a settimana", "Programmazione condivisa"],
    alt: "Small group training di tre donne in posizione di affondo nello studio Vera Method",
  },
  {
    name: "Online Coaching",
    img: detailImg,
    price: "da 120€ / mese",
    desc: "Per chi vive fuori Padova: scheda mensile, video tecnica e check settimanali via app.",
    bullets: ["Scheda aggiornata ogni mese", "Feedback video sui movimenti", "Supporto WhatsApp"],
    alt: "Kettlebell e materassini in uno studio fitness premium — programma online coaching Vera Method",
  },
];

const Programmi = () => (
  <section id="programmi" className="py-24 md:py-32" style={{ background: C.bgAlt }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-14 md:mb-20">
        <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.coral }}>
          I programmi
        </span>
        <h2
          className="text-[36px] md:text-[54px] leading-[1.05] mb-5"
          style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Tre formule, <em style={{ color: C.coral }}>una stessa cura</em>.
        </h2>
        <p className="text-[16px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
          Scegli il formato che ti somiglia di più. La proposta nasce sempre da una
          consulenza iniziale gratuita di 30 minuti.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {PROGRAMS.map((p, i) => (
          <article
            key={i}
            className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
            style={{ background: C.bgSoft, border: `1px solid ${C.line}` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-baseline justify-between mb-4 gap-3">
                <h3 className="text-[24px]" style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400 }}>
                  {p.name}
                </h3>
                <span className="text-[12px] tracking-[0.14em] uppercase" style={{ fontFamily: SANS, color: C.coral }}>
                  {p.price}
                </span>
              </div>
              <p className="text-[14px] leading-[1.7] mb-6" style={{ fontFamily: SANS, color: C.inkSoft }}>
                {p.desc}
              </p>
              <ul className="space-y-2 mb-7">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px]" style={{ fontFamily: SANS, color: C.ink }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.coral }} />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contatti"
                className="mt-auto inline-flex items-center gap-1.5 text-[12px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
                style={{ fontFamily: SANS, color: C.coral, fontWeight: 600 }}
              >
                Richiedi info <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Risultati / Testimonianze (demo dichiarate)
 * ========================================================================= */
const TESTI = [
  {
    t: "Esempio dimostrativo: 'Con Giulia ho ritrovato un rapporto sereno con il movimento. Mi alleno con piacere, non per colpa.'",
    n: "Cliente demo · M.",
    tag: "1:1 Coaching",
  },
  {
    t: "Testo placeholder per mostrare il tono di voce: 'Il piccolo gruppo è diventato il mio momento di cura settimanale.'",
    n: "Cliente demo · L.",
    tag: "Small Group",
  },
  {
    t: "Contenuto fittizio dichiarato: nel sito reale qui troverebbero spazio recensioni verificate e Google Reviews.",
    n: "Cliente demo · S.",
    tag: "Online Coaching",
  },
];

const Risultati = () => (
  <section id="risultati" className="py-24 md:py-32" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.coral }}>
          Risultati (demo)
        </span>
        <h2
          className="text-[34px] md:text-[48px] leading-[1.05]"
          style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Donne che si sono <em style={{ color: C.coral }}>riprese il loro spazio</em>.
        </h2>
        <p className="mt-5 text-[14px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
          Contenuti dichiaratamente fittizi: nel sito reale ospiterebbero recensioni
          verificate o Google Reviews.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {TESTI.map((r, i) => (
          <div
            key={i}
            className="p-8 md:p-10 rounded-2xl flex flex-col"
            style={{ background: C.bgSoft, border: `1px solid ${C.line}` }}
          >
            <Quote className="w-6 h-6 mb-5" style={{ color: C.coral }} />
            <p
              className="text-[17px] leading-[1.65] mb-7 flex-1"
              style={{ fontFamily: SERIF, color: C.ink, fontStyle: "italic", fontWeight: 400 }}
            >
              "{r.t}"
            </p>
            <div className="pt-5 border-t flex items-center justify-between gap-3" style={{ borderColor: C.line }}>
              <span className="text-[12px] tracking-[0.1em] uppercase" style={{ fontFamily: SANS, color: C.inkSoft }}>
                {r.n}
              </span>
              <span className="text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full" style={{ fontFamily: SANS, color: C.coral, border: `1px solid rgba(255,107,91,0.35)` }}>
                {r.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Chi sono — Bio EEAT
 * ========================================================================= */
const ChiSono = () => (
  <section id="chi-sono" className="py-24 md:py-36" style={{ background: C.bgAlt }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
      <div className="md:col-span-5 relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <img
            src={portraitImg}
            alt="Ritratto editoriale di Giulia Conti, personal trainer donna fondatrice del metodo Vera Method"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          aria-hidden
          className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl"
          style={{ border: `1px solid ${C.coral}`, opacity: 0.55 }}
        />
      </div>

      <div className="md:col-span-7">
        <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.coral }}>
          Chi sono
        </span>
        <h2
          className="text-[36px] md:text-[52px] leading-[1.05] mb-7"
          style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Giulia Conti,<br />
          <em style={{ color: C.coral }}>personal trainer per donne</em>.
        </h2>
        <p className="text-[16px] leading-[1.85] mb-5" style={{ fontFamily: SANS, color: C.inkSoft }}>
          Laureata in Scienze Motorie all'Università di Padova, certificata{" "}
          <strong style={{ color: C.ink }}>CONI</strong> e{" "}
          <strong style={{ color: C.ink }}>FIF — Federazione Italiana Fitness</strong>,
          mi occupo da oltre 8 anni di allenamento al femminile, con specializzazione
          in pre e post partum, ricomposizione corporea e mobilità.
        </p>
        <p className="text-[16px] leading-[1.85] mb-9" style={{ fontFamily: SANS, color: C.inkSoft }}>
          Vera Method è il modo in cui credo che l'allenamento debba essere fatto:
          rigoroso ma rispettoso, ambizioso ma sostenibile, e soprattutto pensato
          per chi siamo davvero — non per come vorremmo apparire.
        </p>

        <div className="grid grid-cols-2 gap-6 pt-8 border-t" style={{ borderColor: C.line }}>
          {[
            { n: "8+", l: "Anni di pratica" },
            { n: "200+", l: "Donne seguite" },
            { n: "CONI", l: "Tecnico certificato" },
            { n: "FIF", l: "Specializzazione femminile" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-[28px] md:text-[36px] leading-none mb-2" style={{ fontFamily: SERIF, color: C.coral, fontWeight: 500 }}>
                {s.n}
              </div>
              <div className="text-[11px] tracking-[0.16em] uppercase" style={{ fontFamily: SANS, color: C.inkMute }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex items-center gap-4 text-[12px] tracking-[0.16em] uppercase" style={{ fontFamily: SANS, color: C.inkSoft }}>
          <a href="#" className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity" onClick={(e) => e.preventDefault()}>
            <Instagram className="w-4 h-4" style={{ color: C.coral }} /> @veramethod
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================================
 * FAQ
 * ========================================================================= */
const FAQS = [
  {
    q: "Devo già essere allenata per iniziare?",
    a: "Assolutamente no. La maggior parte delle donne che seguo parte da zero o riprende dopo anni di pausa. Il programma viene costruito a partire dal tuo punto di partenza reale.",
  },
  {
    q: "Lavori solo con donne?",
    a: "Sì, il metodo è progettato sulla fisiologia, gli obiettivi e i tempi delle donne. È una scelta di specializzazione, non un'esclusione.",
  },
  {
    q: "Posso allenarmi anche se sono in gravidanza o ho appena partorito?",
    a: "Sì. Ho una formazione specifica in pre e post partum e collaboro con ginecologhe e ostetriche per percorsi sicuri in ogni trimestre e nel periodo di ripresa.",
  },
  {
    q: "Dove si svolgono le sessioni 1:1?",
    a: "In uno studio privato a Padova, dedicato e attrezzato. Il setting è pensato per garantire intimità, concentrazione e qualità dell'allenamento.",
  },
  {
    q: "Come funziona la consulenza iniziale gratuita?",
    a: "30 minuti in videocall o in studio, in cui ci conosciamo, parliamo dei tuoi obiettivi e capiamo se il metodo è giusto per te. Senza impegno.",
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: C.line }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left transition-colors hover:opacity-80"
        aria-expanded={open}
      >
        <span className="text-[17px] md:text-[20px]" style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400 }}>
          {q}
        </span>
        <span
          className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full transition-colors"
          style={{ background: open ? C.coral : "transparent", border: `1px solid ${open ? C.coral : C.line}`, color: open ? C.bg : C.coral }}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      {open && (
        <div className="pb-7 pr-12 text-[15px] leading-[1.75]" style={{ fontFamily: SANS, color: C.inkSoft }}>
          {a}
        </div>
      )}
    </div>
  );
};

const Faq = () => (
  <section id="faq" className="py-24 md:py-32" style={{ background: C.bg }}>
    <div className="max-w-4xl mx-auto px-5 md:px-8">
      <div className="mb-14 md:mb-20 text-center max-w-2xl mx-auto">
        <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.coral }}>
          Domande frequenti
        </span>
        <h2 className="text-[34px] md:text-[48px] leading-[1.05]" style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" }}>
          Le risposte alle <em style={{ color: C.coral }}>domande più comuni</em>.
        </h2>
      </div>
      <div>
        {FAQS.map((f, i) => (
          <FaqItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Contatti — form Web3Forms diretto a 4 Web Lab
 * ========================================================================= */
const Contatti = () => {
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
    fd.append("subject", "[Demo Vera Method] Richiesta sito web personal trainer (concept 4 Web Lab)");
    fd.append("from_name", "4 Web Lab — Demo Vera Method");
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

  const inputBase: React.CSSProperties = {
    fontFamily: SANS,
    background: "transparent",
    color: C.ink,
    border: "none",
    borderBottom: `1px solid rgba(245,241,236,0.22)`,
    padding: "14px 2px",
    width: "100%",
    fontSize: 15,
    outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: SANS,
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: C.inkMute,
    marginBottom: 6,
    display: "block",
  };

  return (
    <section
      id="contatti"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: `linear-gradient(160deg, #1a1418 0%, ${C.bg} 60%, #221619 100%)` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,107,91,0.35) 0px, transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,107,91,0.18) 0px, transparent 45%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] tracking-[0.28em] uppercase mb-7"
            style={{ fontFamily: SANS, color: C.coralSoft, border: `1px solid rgba(255,107,91,0.45)` }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Demo concept · contatto diretto con 4 Web Lab
          </span>
          <h2
            className="text-[36px] sm:text-[48px] md:text-[60px] leading-[1.04] mb-7"
            style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Vuoi un sito così{" "}
            <em style={{ color: C.coral }}>anche per la tua attività?</em>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.8] max-w-2xl mx-auto" style={{ fontFamily: SANS, color: C.inkSoft }}>
            <strong style={{ color: C.ink }}>4 Web Lab</strong> realizza siti web per
            professionisti, personal trainer, studi privati e attività femminili
            a Padova e in tutta Italia. Soluzioni una tantum{" "}
            <strong style={{ color: C.ink }}>a partire da 549€</strong>, curate
            in ogni dettaglio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <h3 className="text-[22px] md:text-[26px] mb-7" style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400 }}>
              Parla direttamente con 4 Web Lab.
            </h3>

            <div className="space-y-5 mb-8">
              <a href="tel:+393514656042" className="flex items-center gap-4 group transition-opacity hover:opacity-80">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl" style={{ border: `1px solid ${C.line}` }}>
                  <Phone className="w-4 h-4" style={{ color: C.coral }} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: C.inkMute }}>
                    Telefono
                  </div>
                  <div className="text-[17px]" style={{ fontFamily: SERIF, color: C.ink }}>+39 351 465 6042</div>
                </div>
              </a>

              <a
                href="https://wa.me/393514656042"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-opacity hover:opacity-80"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl" style={{ border: `1px solid ${C.line}` }}>
                  <MessageCircle className="w-4 h-4" style={{ color: "#25D366" }} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: C.inkMute }}>
                    WhatsApp <span className="opacity-60">(da mobile)</span>
                  </div>
                  <div className="text-[17px]" style={{ fontFamily: SERIF, color: C.ink }}>Scrivici subito su WhatsApp</div>
                </div>
              </a>

              <a href="mailto:info@4weblab.it" className="flex items-center gap-4 group transition-opacity hover:opacity-80">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl" style={{ border: `1px solid ${C.line}` }}>
                  <Mail className="w-4 h-4" style={{ color: C.coral }} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: C.inkMute }}>
                    Email
                  </div>
                  <div className="text-[17px]" style={{ fontFamily: SERIF, color: C.ink }}>info@4weblab.it</div>
                </div>
              </a>
            </div>

            <div
              className="p-5 rounded-xl text-[12px] leading-[1.7]"
              style={{ border: `1px dashed rgba(255,107,91,0.45)`, color: C.inkSoft, fontFamily: SANS }}
            >
              <strong style={{ color: C.coral, fontWeight: 600 }}>Importante:</strong>{" "}
              "Vera Method · Giulia Conti" è una demo concept. Il contatto inviato da
              questa pagina arriva direttamente a{" "}
              <Link to="/" className="underline" style={{ color: C.coralSoft }}>4 Web Lab</Link>{" "}
              — non a una personal trainer reale. Vedi le altre{" "}
              <Link to="/realizzazioni" className="underline" style={{ color: C.coralSoft }}>realizzazioni</Link>.
            </div>
          </div>

          <form onSubmit={onSubmit}>
            {done ? (
              <div className="p-10 text-center rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${C.line}` }}>
                <Heart className="w-8 h-8 mx-auto mb-5" style={{ color: C.coral }} />
                <h3 className="text-[26px] mb-3" style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400 }}>
                  Richiesta ricevuta, grazie.
                </h3>
                <p className="text-[14px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
                  Ti ricontatteremo a breve con una proposta su misura per la tua attività.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle} htmlFor="vm-name">Nome completo *</label>
                    <input id="vm-name" name="name" type="text" required style={inputBase} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="vm-email">Email *</label>
                    <input id="vm-email" name="email" type="email" required style={inputBase} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle} htmlFor="vm-phone">Telefono</label>
                    <input id="vm-phone" name="phone" type="tel" style={inputBase} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="vm-activity">Tipo di attività</label>
                    <input id="vm-activity" name="activity" type="text" placeholder="Personal trainer, studio, professionista…" style={inputBase} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="vm-msg">Messaggio</label>
                  <textarea
                    id="vm-msg"
                    name="message"
                    rows={4}
                    style={{ ...inputBase, resize: "vertical" }}
                    placeholder="Raccontaci la tua attività e cosa vorresti ottenere dal sito…"
                  />
                </div>

                <label className="flex gap-3 items-start cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1"
                    style={{ accentColor: C.coral }}
                  />
                  <span className="text-[12px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
                    Acconsento al trattamento dei dati per essere ricontattato (Art. 6.1.b GDPR).
                    Titolare: 4 Web Lab di Fullin Carlo — P.IVA 05765760284.{" "}
                    <Link to="/privacy" className="underline" style={{ color: C.coralSoft }}>Privacy Policy</Link>.
                  </span>
                </label>

                {/* honeypot */}
                <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <button
                  type="submit"
                  disabled={submitting || !consent}
                  className="w-full py-5 text-[12px] tracking-[0.22em] uppercase transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed rounded-full"
                  style={{
                    background: C.coral,
                    color: C.bg,
                    fontFamily: SANS,
                    fontWeight: 600,
                    boxShadow: "0 10px 40px -10px rgba(255,107,91,0.55)",
                  }}
                >
                  {submitting ? "Invio in corso…" : "Richiedi una valutazione gratuita"}
                </button>

                {error && (
                  <p className="text-[13px]" style={{ fontFamily: SANS, color: "#fda4af" }}>{error}</p>
                )}
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <Link
            to="/realizzazioni"
            className="inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline"
            style={{ fontFamily: SANS, color: C.coralSoft }}
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alle Realizzazioni
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
 * Footer
 * ========================================================================= */
const DemoFooter = () => (
  <footer style={{ background: "#0e0e10", color: C.inkSoft }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="text-[22px] tracking-[0.18em] uppercase mb-5" style={{ fontFamily: SERIF, color: C.ink, fontWeight: 500 }}>
          Vera<span style={{ color: C.coral }}>·</span>Method
        </div>
        <p className="text-[14px] leading-[1.8] max-w-sm" style={{ fontFamily: SANS }}>
          Demo concept di sito web premium per personal trainer e professionisti
          del benessere. Realizzato da{" "}
          <Link to="/" className="underline hover:text-white" style={{ color: C.coralSoft }}>4 Web Lab</Link>.
        </p>
      </div>

      <div>
        <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: SANS, color: C.ink }}>
          Naviga
        </div>
        <ul className="space-y-2 text-[14px]" style={{ fontFamily: SANS }}>
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="hover:text-white transition-colors">{n.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: SANS, color: C.ink }}>
          Contatti 4 Web Lab
        </div>
        <ul className="space-y-2 text-[14px]" style={{ fontFamily: SANS }}>
          <li><a href="tel:+393514656042" className="hover:text-white">+39 351 465 6042</a></li>
          <li><a href="mailto:info@4weblab.it" className="hover:text-white">info@4weblab.it</a></li>
          <li><a href="https://wa.me/393514656042" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
          <li><Link to="/realizzazione-siti-web-per-professionisti" className="hover:text-white">Siti web per professionisti</Link></li>
          <li><Link to="/realizzazioni" className="hover:text-white">Altre realizzazioni</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t py-7 text-[12px] text-center" style={{ borderColor: "rgba(255,255,255,0.06)", fontFamily: SANS }}>
      © {new Date().getFullYear()} Vera Method — Tech demo realizzata da{" "}
      <Link to="/" className="underline hover:text-white" style={{ color: C.coralSoft }}>4 Web Lab</Link>.
      Brand fittizio a scopo dimostrativo.
    </div>
  </footer>
);

/* ============================================================================
 * Sticky mobile CTA
 * ========================================================================= */
const StickyMobileCTA = () => (
  <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40" style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.45))" }}>
    <a
      href="#contatti"
      className="flex items-center justify-center gap-2 py-3.5 text-[12px] tracking-[0.22em] uppercase rounded-full"
      style={{ background: C.coral, color: C.bg, fontFamily: SANS, fontWeight: 600 }}
    >
      Prenota consulenza <ArrowRight className="w-3.5 h-3.5" />
    </a>
  </div>
);

/* ============================================================================
 * Page
 * ========================================================================= */
const DemoPersonalTrainerVeraMethod = () => {
  const canonical = "https://4weblab.it/realizzazioni/demo-personal-trainer-vera-method";

  return (
    <>
      <Helmet>
        <title>Sito Web per Personal Trainer Donna · Demo Padova | 4 Web Lab</title>
        <meta
          name="description"
          content="Demo concept di sito web premium per personal trainer donna, realizzata da 4 Web Lab, agenzia web di Padova. Siti per professionisti a partire da 549€."
        />
        <meta name="author" content="4 Web Lab" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="Sito Web per Personal Trainer Donna · Demo Padova | 4 Web Lab" />
        <meta property="og:description" content="Concept premium antracite + coral per personal trainer donna. Demo realizzata da 4 Web Lab, agenzia web di Padova." />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sito Web per Personal Trainer Donna · Demo | 4 Web Lab" />
        <meta name="twitter:description" content="Concept premium per personal trainer donna realizzato da 4 Web Lab." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${canonical}#webpage`,
                url: canonical,
                name: "Sito Web per Personal Trainer Donna · Demo Vera Method",
                description:
                  "Demo concept di sito web premium per personal trainer donna, realizzata da 4 Web Lab. Brand fittizio 'Giulia Conti — Vera Method' creato a scopo dimostrativo.",
                inLanguage: "it-IT",
                isPartOf: { "@id": "https://4weblab.it/#website" },
                publisher: { "@id": "https://4weblab.it/#business" },
                primaryImageOfPage: "https://4weblab.it/assets/vera-method-hero.webp",
              },
              {
                "@type": "Person",
                "@id": `${canonical}#giulia-conti`,
                name: "Giulia Conti",
                jobTitle: "Personal Trainer",
                description:
                  "Brand fittizio realizzato come concept dimostrativo da 4 Web Lab. Personal trainer specializzata nell'allenamento femminile, con focus su forza, mobilità e percorsi pre e post partum.",
                areaServed: { "@type": "City", name: "Padova" },
                knowsAbout: [
                  "Allenamento funzionale femminile",
                  "Pre e post partum",
                  "Ricomposizione corporea",
                  "Mobilità articolare",
                  "Forza per donne",
                ],
              },
              {
                "@type": "Service",
                "@id": `${canonical}#service`,
                serviceType: "Personal Training per donne",
                provider: { "@id": `${canonical}#giulia-conti` },
                areaServed: { "@type": "City", name: "Padova" },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Programmi Vera Method",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Vera 1:1",
                        description: "Percorso personale uno-a-uno in studio privato a Padova.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Vera Small Group",
                        description: "Allenamento in piccolo gruppo di sole donne, max 4 persone.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Vera Online",
                        description: "Programma di allenamento online con coaching e check settimanali.",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "FAQPage",
                "@id": `${canonical}#faq`,
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Devo già essere allenata per iniziare?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Assolutamente no. La maggior parte delle donne che seguo parte da zero o riprende dopo anni di pausa. Il programma viene costruito a partire dal tuo punto di partenza reale.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Lavori solo con donne?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sì, il metodo è progettato sulla fisiologia, gli obiettivi e i tempi delle donne. È una scelta di specializzazione, non un'esclusione.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Posso allenarmi anche se sono in gravidanza o ho appena partorito?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sì. Ho una formazione specifica in pre e post partum e collaboro con ginecologhe e ostetriche per percorsi sicuri in ogni trimestre e nel periodo di ripresa.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Dove si svolgono le sessioni 1:1?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "In uno studio privato a Padova, dedicato e attrezzato. Il setting è pensato per garantire intimità, concentrazione e qualità dell'allenamento.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Come funziona la consulenza iniziale gratuita?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "30 minuti in videocall o in studio, in cui ci conosciamo, parliamo dei tuoi obiettivi e capiamo se il metodo è giusto per te. Senza impegno.",
                    },
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${canonical}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
                  { "@type": "ListItem", position: 2, name: "Realizzazioni", item: "https://4weblab.it/realizzazioni" },
                  { "@type": "ListItem", position: 3, name: "Personal Trainer Vera Method (concept)", item: canonical },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <div style={{ background: C.bg, color: C.ink, minHeight: "100vh" }}>
        <DemoHeader />
        <BackBar />
        <main>
          <Hero />
          <TrustStrip />
          <Metodo />
          <Programmi />
          <Risultati />
          <ChiSono />
          <Faq />
          <Contatti />
        </main>
        <DemoFooter />
        <StickyMobileCTA />
      </div>
    </>
  );
};

export default DemoPersonalTrainerVeraMethod;