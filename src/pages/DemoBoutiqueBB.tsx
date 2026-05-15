/**
 * DemoBoutiqueBB.tsx
 * -----------------------------------------------------------------------------
 * Tech demo / concept project realizzato da 4 Web Lab.
 *
 * NOTA IMPORTANTE:
 * - Pagina interna a 4weblab.it (path: /realizzazioni/boutique-bb-luxury-rooms).
 * - "Velluto Rooms" è un brand fittizio usato solo come scenario visivo.
 * - Non vengono creati dati aziendali falsi né schemi LodgingBusiness/LocalBusiness
 *   intestati al brand fittizio: i JSON-LD sono CreativeWork/Organization riferiti
 *   a 4 Web Lab (EEAT-first, in linea con le altre demo del portfolio).
 * - Il form contatti invia tramite Web3Forms direttamente a 4 Web Lab
 *   (subject "[Demo Velluto Rooms] ...") — è una richiesta concept, non una
 *   prenotazione reale.
 * - Robots: indicizzabile (index, follow); inclusa in sitemap.xml.
 * -----------------------------------------------------------------------------
 */

import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Wifi,
  Coffee,
  KeyRound,
  Sparkles,
  Star,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  X,
  Tv,
  Wind,
  Car,
  ShowerHead,
  ConciergeBell,
  Heart,
} from "lucide-react";

import heroImg from "@/assets/bb-hero.jpg";
import roomDeluxe from "@/assets/bb-room-deluxe.jpg";
import roomJunior from "@/assets/bb-room-junior.jpg";
import roomRomantic from "@/assets/bb-room-romantic.jpg";
import breakfastImg from "@/assets/bb-breakfast.jpg";
import territoryImg from "@/assets/bb-territory.jpg";
import terraceImg from "@/assets/bb-terrace.jpg";
import bathImg from "@/assets/bb-bath.jpg";
import detailImg from "@/assets/bb-detail.jpg";

/* ============================================================================
 * Palette (boutique luxury, beige/ivory/dark walnut + champagne accents)
 * ========================================================================= */
const C = {
  bg: "#F7F2EB",          // ivory warm
  bgAlt: "#EFE7DB",       // sand
  bgDark: "#161210",      // deep coffee black
  ink: "#1A1410",         // text primary
  inkSoft: "#5C5147",     // muted brown
  line: "#E2D8C8",
  gold: "#C8A96A",        // champagne
  goldSoft: "#E6CFA6",
  brownSoft: "#7A5A3F",
};

const SERIF = `'Cormorant Garamond', 'Playfair Display', Georgia, serif`;
const SANS = `'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`;

/* ============================================================================
 * Header
 * ========================================================================= */
const NAV = [
  { id: "home", label: "Home" },
  { id: "camere", label: "Camere" },
  { id: "esperienza", label: "Esperienza" },
  { id: "gallery", label: "Gallery" },
  { id: "recensioni", label: "Recensioni" },
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
        background: scrolled ? "rgba(247,242,235,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[78px] flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
          aria-label="Velluto Rooms — torna alla home"
        >
          <span
            className="text-[22px] md:text-[26px] tracking-[0.18em] uppercase"
            style={{
              fontFamily: SERIF,
              color: scrolled ? C.ink : "#fff",
              fontWeight: 500,
              letterSpacing: "0.22em",
            }}
          >
            Velluto<span style={{ color: C.gold }}>·</span>Rooms
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-[13px] tracking-[0.12em] uppercase transition-colors hover:opacity-100"
              style={{
                fontFamily: SANS,
                color: scrolled ? C.ink : "rgba(255,255,255,0.85)",
                opacity: 0.85,
              }}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo("contatti")}
            className="px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase transition-all hover:scale-[1.02]"
            style={{
              fontFamily: SANS,
              background: C.ink,
              color: C.bg,
              borderRadius: 2,
              fontWeight: 500,
            }}
          >
            Prenota il tuo soggiorno
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Apri menu"
        >
          <span
            className="block w-6 h-px transition-transform"
            style={{
              background: scrolled || open ? C.ink : "#fff",
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-px transition-opacity"
            style={{ background: scrolled || open ? C.ink : "#fff", opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px transition-transform"
            style={{
              background: scrolled || open ? C.ink : "#fff",
              transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{ background: C.bg, borderColor: C.line }}
        >
          <div className="px-5 py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left py-3 text-[15px] tracking-[0.1em] uppercase border-b"
                style={{ fontFamily: SANS, color: C.ink, borderColor: C.line }}
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contatti")}
              className="mt-4 px-5 py-3 text-[12px] tracking-[0.18em] uppercase"
              style={{ background: C.ink, color: C.bg, fontFamily: SANS }}
            >
              Prenota il tuo soggiorno
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

/* ============================================================================
 * Hero
 * ========================================================================= */
const Hero = () => {
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Suite premium di un boutique B&B italiano con luce calda al tramonto, design contemporaneo in beige e legno scuro"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.25) 35%, rgba(20,16,12,0.75) 100%)",
        }}
      />
      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32 text-white">
        <div className="max-w-3xl animate-[fadeUp_1s_ease-out]">
          <span
            className="inline-block text-[11px] tracking-[0.32em] uppercase mb-6"
            style={{ fontFamily: SANS, color: C.goldSoft }}
          >
            Boutique B&amp;B · Luxury Rooms
          </span>
          <h1
            className="text-[44px] sm:text-[60px] md:text-[80px] leading-[0.98] mb-6"
            style={{ fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Boutique Rooms &amp; Luxury Stay
            <br />
            <em style={{ fontStyle: "italic", color: C.goldSoft }}>nel cuore italiano</em>
          </h1>
          <p
            className="text-[15px] md:text-[17px] max-w-xl leading-[1.7] mb-9"
            style={{ fontFamily: SANS, color: "rgba(255,255,255,0.85)" }}
          >
            Un soggiorno fatto di design contemporaneo, comfort assoluto e dettagli
            curati. Suite intime, atmosfera silenziosa, esperienze locali su misura
            — a pochi passi dal centro storico.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#camere"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:scale-[1.02]"
              style={{ background: C.bg, color: C.ink, fontFamily: SANS, borderRadius: 2 }}
            >
              Scopri le camere <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#esperienza"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:bg-white/10"
              style={{
                fontFamily: SANS,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.45)",
                borderRadius: 2,
              }}
            >
              Vivi l'esperienza
            </a>
          </div>

          {/* badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] tracking-[0.08em] uppercase opacity-85" style={{ fontFamily: SANS }}>
            {[
              { icon: Wifi, t: "Wi-Fi veloce" },
              { icon: KeyRound, t: "Smart Check-in" },
              { icon: Coffee, t: "Colazione inclusa" },
              { icon: MapPin, t: "Centro città" },
            ].map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                <b.icon className="w-3.5 h-3.5" style={{ color: C.goldSoft }} />
                {b.t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white" style={{ fontFamily: SANS }}>Scroll</span>
        <ChevronDown className="w-4 h-4 text-white animate-bounce" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

/* ============================================================================
 * Intro editoriale + statistiche
 * ========================================================================= */
const Intro = () => {
  return (
    <section id="esperienza" className="py-24 md:py-36" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span
            className="text-[11px] tracking-[0.3em] uppercase block mb-6"
            style={{ fontFamily: SANS, color: C.gold }}
          >
            L'esperienza
          </span>
          <h2
            className="text-[36px] md:text-[56px] leading-[1.05] mb-7"
            style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
          >
            Un soggiorno che resta,<br />
            <em style={{ color: C.brownSoft }}>oltre la notte trascorsa.</em>
          </h2>
          <p className="text-[16px] leading-[1.85] mb-5" style={{ fontFamily: SANS, color: C.inkSoft }}>
            Velluto Rooms nasce dall'idea di unire l'intimità di un B&amp;B
            all'eleganza di un boutique hotel contemporaneo. Camere progettate per
            il silenzio, materiali caldi al tatto, una luce che cambia con la
            giornata.
          </p>
          <p className="text-[16px] leading-[1.85]" style={{ fontFamily: SANS, color: C.inkSoft }}>
            Ogni dettaglio — dalla colazione servita su misura ai consigli sul
            territorio — è pensato per farti sentire a casa, ma con un livello di
            cura che trasforma il soggiorno in esperienza.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t" style={{ borderColor: C.line }}>
            {[
              { n: "8", l: "Camere premium" },
              { n: "4.9", l: "Guest rating" },
              { n: "12", l: "Anni di accoglienza" },
              { n: "2.4k", l: "Ospiti ogni anno" },
            ].map((s, i) => (
              <div key={i}>
                <div
                  className="text-[34px] md:text-[44px] leading-none mb-2"
                  style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400 }}
                >
                  {s.n}
                </div>
                <div className="text-[11px] tracking-[0.16em] uppercase" style={{ fontFamily: SANS, color: C.inkSoft }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: 2 }}>
            <img
              src={breakfastImg}
              alt="Colazione premium servita su tovaglia di lino con cornetti caldi, frutta fresca ed espresso italiano"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="hidden md:block absolute -bottom-8 -left-8 w-40 h-40 border"
            style={{ borderColor: C.gold }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
 * Camere
 * ========================================================================= */
const ROOMS = [
  {
    name: "Deluxe Room",
    img: roomDeluxe,
    sqm: "26 m²",
    desc: "Camera elegante con letto king-size, biancheria in lino e luce naturale generosa.",
    price: "da 180 € / notte",
    services: ["Wi-Fi", "Smart TV", "Aria condizionata"],
    alt: "Deluxe Room: camera boutique con testiera in legno scuro, lenzuola color avorio e illuminazione calda",
  },
  {
    name: "Junior Suite",
    img: roomJunior,
    sqm: "38 m²",
    desc: "Suite con zona living separata, finestra ad arco e vista sul centro storico.",
    price: "da 240 € / notte",
    services: ["Lounge", "Marble bath", "Vista città"],
    alt: "Junior Suite con zona living, divano beige, tavolino in marmo e grande finestra ad arco al tramonto",
  },
  {
    name: "Romantic Suite",
    img: roomRomantic,
    sqm: "44 m²",
    desc: "Suite romantica con vasca freestanding, candele e atmosfera intima.",
    price: "da 320 € / notte",
    services: ["Vasca freestanding", "Welcome bottle", "Petali su richiesta"],
    alt: "Romantic Suite con vasca freestanding, petali di rosa, candele e atmosfera intima dorata",
  },
];

const Rooms = () => {
  return (
    <section id="camere" className="py-24 md:py-36" style={{ background: C.bgAlt }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.gold }}>
            Le camere
          </span>
          <h2
            className="text-[36px] md:text-[56px] leading-[1.05] mb-5"
            style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
          >
            Tre interpretazioni del comfort.
          </h2>
          <p className="text-[16px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
            Ogni camera è pensata per un tipo di soggiorno diverso: weekend
            romantico, viaggio business, fuga lenta. Stesso livello di cura, atmosfere su misura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {ROOMS.map((r, i) => (
            <article
              key={i}
              className="group flex flex-col bg-white transition-all duration-500 hover:-translate-y-1"
              style={{ borderRadius: 2, boxShadow: "0 1px 0 rgba(0,0,0,0.04)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.alt}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, rgba(20,16,12,0.45) 100%)",
                  }}
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase"
                  style={{ background: "rgba(255,255,255,0.92)", color: C.ink, fontFamily: SANS, borderRadius: 2 }}
                >
                  {r.sqm}
                </span>
              </div>
              <div className="p-7 md:p-9 flex flex-col flex-1">
                <h3
                  className="text-[26px] md:text-[28px] leading-tight mb-3"
                  style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400 }}
                >
                  {r.name}
                </h3>
                <p className="text-[14px] leading-[1.7] mb-5" style={{ fontFamily: SANS, color: C.inkSoft }}>
                  {r.desc}
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5 mb-6 text-[12px]" style={{ fontFamily: SANS, color: C.brownSoft }}>
                  {r.services.map((s) => (
                    <li key={s} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full" style={{ background: C.gold }} />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5 border-t flex items-center justify-between" style={{ borderColor: C.line }}>
                  <span className="text-[14px]" style={{ fontFamily: SERIF, color: C.ink, fontStyle: "italic" }}>
                    {r.price}
                  </span>
                  <a
                    href="#contatti"
                    className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase transition-colors"
                    style={{ fontFamily: SANS, color: C.ink }}
                  >
                    Scopri <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
 * Gallery con lightbox
 * ========================================================================= */
const GALLERY = [
  { src: heroImg, alt: "Suite principale all'ora dorata", span: "row-span-2" },
  { src: bathImg, alt: "Bagno in marmo con dettagli in ottone", span: "" },
  { src: breakfastImg, alt: "Colazione su tovaglia di lino", span: "" },
  { src: terraceImg, alt: "Terrazza panoramica al tramonto", span: "row-span-2" },
  { src: territoryImg, alt: "Centro storico italiano al crepuscolo", span: "" },
  { src: detailImg, alt: "Dettaglio: chiave e fiore su legno scuro", span: "" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-36" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-6">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.gold }}>
              Gallery
            </span>
            <h2
              className="text-[36px] md:text-[56px] leading-[1.05]"
              style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
            >
              Atmosfere e dettagli.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
            Una raccolta visiva di camere, spazi comuni, colazione e angoli del
            territorio che renderanno il soggiorno memorabile.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4">
          {GALLERY.map((g, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden ${g.span}`}
              style={{ borderRadius: 2 }}
              aria-label={`Apri immagine: ${g.alt}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(20,16,12,0.25)" }}
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-[fadeUp_0.3s_ease-out]"
          style={{ background: "rgba(20,16,12,0.94)" }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-white/80 hover:text-white"
            aria-label="Chiudi"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={GALLERY[lightbox].src}
            alt={GALLERY[lightbox].alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

/* ============================================================================
 * Esperienze / Territorio
 * ========================================================================= */
const Territory = () => {
  const blocks = [
    {
      t: "Centro storico",
      d: "A pochi passi da botteghe artigiane, piazze silenziose e architetture che raccontano secoli di storia.",
    },
    {
      t: "Esperienze locali",
      d: "Degustazioni, tour privati e attività curate da partner locali selezionati con attenzione.",
    },
    {
      t: "Weekend romantici",
      d: "Pacchetti pensati per fughe a due: vasca, candele, colazione in camera e itinerari dedicati.",
    },
    {
      t: "Business stay",
      d: "Wi-Fi performante, scrivania ergonomica, check-in flessibile e silenzio garantito.",
    },
  ];

  return (
    <section className="py-24 md:py-36" style={{ background: C.bgDark }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-5">
          <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.gold }}>
            Territorio
          </span>
          <h2
            className="text-[36px] md:text-[54px] leading-[1.05] mb-7 text-white"
            style={{ fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Vivere il luogo,<br />
            <em style={{ color: C.goldSoft }}>non solo dormirci.</em>
          </h2>
          <p className="text-[16px] leading-[1.85] mb-8" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.72)" }}>
            Il vero lusso, oggi, è il tempo. Velluto Rooms ti dà una base curata
            per esplorare con calma il centro storico, scoprire ristoranti
            autentici, vivere esperienze locali pensate su misura.
          </p>
          <div className="aspect-[4/3] overflow-hidden" style={{ borderRadius: 2 }}>
            <img
              src={territoryImg}
              alt="Strada acciottolata del centro storico italiano illuminata dalla luce calda del tramonto"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
          {blocks.map((b, i) => (
            <div
              key={i}
              className="p-7 md:p-9 transition-all hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 2,
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="w-10 h-px mb-5" style={{ background: C.gold }} />
              <h3
                className="text-[24px] md:text-[28px] leading-tight mb-3 text-white"
                style={{ fontFamily: SERIF, fontWeight: 400 }}
              >
                {b.t}
              </h3>
              <p className="text-[14px] leading-[1.75]" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.65)" }}>
                {b.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
 * Servizi
 * ========================================================================= */
const SERVICES = [
  { i: KeyRound, t: "Smart Check-in" },
  { i: Wifi, t: "Wi-Fi veloce" },
  { i: Coffee, t: "Colazione premium" },
  { i: ShowerHead, t: "Pulizia giornaliera" },
  { i: Tv, t: "Smart TV / Netflix" },
  { i: ConciergeBell, t: "Concierge & transfer" },
  { i: Wind, t: "Aria condizionata" },
  { i: Car, t: "Parcheggio convenzionato" },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.gold }}>
            Servizi inclusi
          </span>
          <h2
            className="text-[36px] md:text-[52px] leading-[1.05]"
            style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
          >
            Cura nei dettagli, sempre inclusa.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: C.line }}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="group p-8 md:p-10 flex flex-col items-center text-center transition-colors duration-500"
              style={{ background: C.bg }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.bgAlt)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.bg)}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: "transparent", border: `1px solid ${C.gold}` }}
              >
                <s.i className="w-5 h-5" style={{ color: C.brownSoft }} />
              </div>
              <div className="text-[13px] tracking-[0.1em] uppercase" style={{ fontFamily: SANS, color: C.ink }}>
                {s.t}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
 * Recensioni (placeholder onesti — non ancorati a brand reale)
 * ========================================================================= */
const REVIEWS = [
  {
    n: "Giulia M.",
    from: "Milano, IT",
    r: 5,
    t: "Atmosfera incredibile, attenzione ai dettagli rara. La suite era esattamente come la immaginavo: silenziosa, calda, perfetta.",
  },
  {
    n: "Mathieu L.",
    from: "Parigi, FR",
    r: 5,
    t: "Boutique experience nel vero senso della parola. Colazione meravigliosa e consigli sul territorio super preziosi.",
  },
  {
    n: "Sofia R.",
    from: "Verona, IT",
    r: 5,
    t: "Ci siamo sentiti coccolati dal primo all'ultimo minuto. Torneremo sicuramente per un anniversario.",
  },
];

const Reviews = () => {
  return (
    <section id="recensioni" className="py-24 md:py-36" style={{ background: C.bgAlt }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.gold }}>
              Voci degli ospiti
            </span>
            <h2
              className="text-[36px] md:text-[56px] leading-[1.05]"
              style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
            >
              Esperienze, non solo soggiorni.
            </h2>
          </div>
          <div
            className="flex items-center gap-3 px-5 py-3"
            style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 2 }}
          >
            <div className="flex" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4" style={{ color: C.gold, fill: C.gold }} />
              ))}
            </div>
            <span className="text-[13px] tracking-[0.1em] uppercase" style={{ fontFamily: SANS, color: C.ink }}>
              4.9 / 5 Guest Rating
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="p-8 md:p-10 flex flex-col"
              style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 2 }}
            >
              <div className="flex mb-5" aria-hidden>
                {Array.from({ length: r.r }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5" style={{ color: C.gold, fill: C.gold }} />
                ))}
              </div>
              <p
                className="text-[17px] leading-[1.65] mb-7 flex-1"
                style={{ fontFamily: SERIF, color: C.ink, fontStyle: "italic", fontWeight: 400 }}
              >
                "{r.t}"
              </p>
              <div className="pt-5 border-t" style={{ borderColor: C.line }}>
                <div className="text-[14px]" style={{ fontFamily: SANS, color: C.ink, fontWeight: 500 }}>
                  {r.n}
                </div>
                <div className="text-[12px] tracking-[0.08em] uppercase mt-1" style={{ fontFamily: SANS, color: C.inkSoft }}>
                  {r.from}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
 * Contatti / Form (lead → 4 Web Lab via Web3Forms)
 * ========================================================================= */
const Contact = () => {
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
    fd.append("subject", "[Demo Velluto Rooms] Richiesta disponibilità (concept boutique B&B)");
    fd.append("from_name", "4 Web Lab — Demo Velluto Rooms");
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
    color: C.bg,
    border: "none",
    borderBottom: `1px solid rgba(247,242,235,0.25)`,
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
    color: "rgba(247,242,235,0.55)",
    marginBottom: 6,
    display: "block",
  };

  return (
    <section id="contatti" className="py-24 md:py-36 relative overflow-hidden" style={{ background: C.bgDark }}>
      {/* gold spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(ellipse at top, ${C.gold}22 0%, transparent 60%)`,
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.gold }}>
            Contatti
          </span>
          <h2
            className="text-[40px] md:text-[64px] leading-[1.02] mb-8 text-white"
            style={{ fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Richiedi <em style={{ color: C.goldSoft }}>disponibilità</em>.
          </h2>
          <p className="text-[16px] leading-[1.85] mb-10 max-w-md" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.72)" }}>
            Raccontaci le tue date e cosa cerchi dal soggiorno. Ti rispondiamo
            con una proposta personalizzata e disponibilità reale.
          </p>

          <div className="space-y-5 mb-10">
            <a
              href="tel:+393514656042"
              className="flex items-center gap-4 group transition-opacity hover:opacity-80"
            >
              <div
                className="w-11 h-11 flex items-center justify-center"
                style={{ border: `1px solid ${C.gold}`, borderRadius: 2 }}
              >
                <Phone className="w-4 h-4" style={{ color: C.goldSoft }} />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.5)" }}>
                  Telefono
                </div>
                <div className="text-[17px] text-white" style={{ fontFamily: SERIF }}>
                  +39 351 465 6042
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/393514656042"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group transition-opacity hover:opacity-80"
            >
              <div
                className="w-11 h-11 flex items-center justify-center"
                style={{ border: `1px solid ${C.gold}`, borderRadius: 2 }}
              >
                <MessageCircle className="w-4 h-4" style={{ color: C.goldSoft }} />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.5)" }}>
                  WhatsApp
                </div>
                <div className="text-[17px] text-white" style={{ fontFamily: SERIF }}>
                  Scrivici su WhatsApp
                </div>
              </div>
            </a>

            <a
              href="mailto:info@4weblab.it"
              className="flex items-center gap-4 group transition-opacity hover:opacity-80"
            >
              <div
                className="w-11 h-11 flex items-center justify-center"
                style={{ border: `1px solid ${C.gold}`, borderRadius: 2 }}
              >
                <Mail className="w-4 h-4" style={{ color: C.goldSoft }} />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.5)" }}>
                  Email
                </div>
                <div className="text-[17px] text-white" style={{ fontFamily: SERIF }}>
                  info@4weblab.it
                </div>
              </div>
            </a>
          </div>

          <div
            className="p-5 text-[12px] leading-[1.7]"
            style={{
              border: `1px dashed rgba(200,169,106,0.4)`,
              color: "rgba(255,255,255,0.55)",
              fontFamily: SANS,
              borderRadius: 2,
            }}
          >
            <strong style={{ color: C.goldSoft, fontWeight: 500 }}>Nota concept:</strong>{" "}
            "Velluto Rooms" è una demo concept realizzata da{" "}
            <Link to="/" className="underline" style={{ color: C.goldSoft }}>4 Web Lab</Link>.
            Le richieste inviate da questa pagina vengono ricevute direttamente da
            4 Web Lab a scopo dimostrativo. Vedi le altre <Link to="/realizzazioni" className="underline" style={{ color: C.goldSoft }}>realizzazioni</Link>.
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={onSubmit} className="lg:pt-10">
          {done ? (
            <div
              className="p-10 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 }}
            >
              <Heart className="w-8 h-8 mx-auto mb-5" style={{ color: C.gold }} />
              <h3 className="text-[26px] mb-3 text-white" style={{ fontFamily: SERIF, fontWeight: 400 }}>
                Grazie, abbiamo ricevuto la tua richiesta.
              </h3>
              <p className="text-[14px] leading-[1.7]" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.65)" }}>
                Ti ricontatteremo a breve con una proposta su misura.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle} htmlFor="bb-name">Nome completo *</label>
                  <input id="bb-name" name="name" type="text" required style={inputBase} />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="bb-email">Email *</label>
                  <input id="bb-email" name="email" type="email" required style={inputBase} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle} htmlFor="bb-phone">Telefono</label>
                  <input id="bb-phone" name="phone" type="tel" style={inputBase} />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="bb-guests">Ospiti</label>
                  <input id="bb-guests" name="guests" type="number" min={1} max={6} defaultValue={2} style={inputBase} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle} htmlFor="bb-checkin">Check-in</label>
                  <input id="bb-checkin" name="check_in" type="date" style={inputBase} />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="bb-checkout">Check-out</label>
                  <input id="bb-checkout" name="check_out" type="date" style={inputBase} />
                </div>
              </div>

              <div>
                <label style={labelStyle} htmlFor="bb-msg">Messaggio</label>
                <textarea
                  id="bb-msg"
                  name="message"
                  rows={3}
                  style={{ ...inputBase, resize: "vertical" }}
                  placeholder="Tipo di soggiorno, occasione, preferenze…"
                />
              </div>

              <label className="flex gap-3 items-start cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 accent-current"
                  style={{ accentColor: C.gold }}
                />
                <span className="text-[12px] leading-[1.7]" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.6)" }}>
                  Acconsento al trattamento dei dati per essere ricontattato (Art. 6.1.b GDPR).
                  Titolare: 4 Web Lab di Fullin Carlo — P.IVA 05765760284.{" "}
                  <Link to="/privacy" className="underline" style={{ color: C.goldSoft }}>Privacy Policy</Link>.
                </span>
              </label>

              {/* honeypot */}
              <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={submitting || !consent}
                className="w-full py-5 text-[12px] tracking-[0.22em] uppercase transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: C.gold,
                  color: C.bgDark,
                  fontFamily: SANS,
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              >
                {submitting ? "Invio in corso…" : "Invia richiesta"}
              </button>

              {error && (
                <p className="text-[13px] text-red-300" style={{ fontFamily: SANS }}>{error}</p>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

/* ============================================================================
 * Footer
 * ========================================================================= */
const DemoFooter = () => {
  return (
    <footer style={{ background: "#0E0B09", color: "rgba(255,255,255,0.6)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div
            className="text-[22px] tracking-[0.22em] uppercase mb-5 text-white"
            style={{ fontFamily: SERIF, fontWeight: 500 }}
          >
            Velluto<span style={{ color: C.gold }}>·</span>Rooms
          </div>
          <p className="text-[14px] leading-[1.8] max-w-sm" style={{ fontFamily: SANS }}>
            Boutique B&amp;B contemporaneo: camere premium, esperienze locali e
            un'idea di accoglienza che non smette mai di evolvere.
          </p>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-white mb-4" style={{ fontFamily: SANS }}>
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
          <div className="text-[11px] tracking-[0.2em] uppercase text-white mb-4" style={{ fontFamily: SANS }}>
            Contatti
          </div>
          <ul className="space-y-2 text-[14px]" style={{ fontFamily: SANS }}>
            <li><a href="tel:+393514656042" className="hover:text-white">+39 351 465 6042</a></li>
            <li><a href="mailto:info@4weblab.it" className="hover:text-white">info@4weblab.it</a></li>
            <li><a href="https://wa.me/393514656042" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div
        className="border-t py-7 text-[12px] text-center"
        style={{ borderColor: "rgba(255,255,255,0.08)", fontFamily: SANS }}
      >
        © {new Date().getFullYear()} Velluto Rooms — Tech demo realizzata da{" "}
        <Link to="/" className="underline hover:text-white" style={{ color: C.goldSoft }}>4 Web Lab</Link>.
        Brand fittizio a scopo dimostrativo.
      </div>
    </footer>
  );
};

/* ============================================================================
 * Sticky CTA mobile
 * ========================================================================= */
const StickyMobileCTA = () => (
  <div
    className="lg:hidden fixed bottom-4 left-4 right-4 z-40"
    style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.25))" }}
  >
    <a
      href="#contatti"
      className="flex items-center justify-center gap-2 py-3.5 text-[12px] tracking-[0.22em] uppercase"
      style={{ background: C.ink, color: C.bg, fontFamily: SANS, borderRadius: 2 }}
    >
      Richiedi disponibilità <ArrowRight className="w-3.5 h-3.5" />
    </a>
  </div>
);

/* ============================================================================
 * Page
 * ========================================================================= */
const DemoBoutiqueBB = () => {
  const canonical = "https://4weblab.it/realizzazioni/boutique-bb-luxury-rooms";

  // JSON-LD: tutto riferito a 4 Web Lab (CreativeWork = la demo).
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://4weblab.it/#organization",
    name: "4 Web Lab",
    legalName: "4 Web Lab di Fullin Carlo",
    url: "https://4weblab.it/",
    vatID: "05765760284",
    founder: { "@type": "Person", name: "Carlo Fullin" },
    areaServed: ["IT", "Veneto"],
    knowsAbout: [
      "Web design boutique hotel",
      "Siti web per B&B e luxury rooms",
      "UX strutture ricettive",
      "SEO per hospitality",
      "Lead generation turismo",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+393514656042",
      contactType: "sales",
      areaServed: "IT",
      availableLanguage: ["Italian", "English"],
    },
    sameAs: [
      "https://share.google/oGOMV0sHAaV8JlqnZ",
      "https://www.linkedin.com/in/carlo-fullin-6aa6b73b7/",
    ],
  };

  const creativeLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${canonical}#creativework`,
    name: "Concept di sito web premium per boutique B&B / Luxury Rooms — by 4 Web Lab",
    headline: "Tech demo: design editoriale per boutique B&B contemporaneo",
    description:
      "Concept project realizzato da 4 Web Lab per dimostrare un approccio premium alla progettazione di siti web per boutique hotel, B&B di fascia alta e luxury rooms italiane.",
    url: canonical,
    inLanguage: "it-IT",
    keywords: [
      "web design boutique hotel",
      "siti web B&B premium",
      "design editoriale hospitality",
      "luxury rooms",
      "UX boutique",
    ],
    author: { "@id": "https://4weblab.it/#organization" },
    creator: { "@id": "https://4weblab.it/#organization" },
    producer: { "@id": "https://4weblab.it/#organization" },
    publisher: { "@id": "https://4weblab.it/#organization" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
      { "@type": "ListItem", position: 2, name: "Realizzazioni", item: "https://4weblab.it/realizzazioni" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Concept boutique B&B · 4 Web Lab",
        item: canonical,
      },
    ],
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Concept Sito Web Premium per Boutique B&B | 4 Web Lab",
    isPartOf: { "@id": "https://4weblab.it/#website" },
    about: { "@id": `${canonical}#creativework` },
    mainEntity: { "@id": `${canonical}#creativework` },
    author: { "@id": "https://4weblab.it/#organization" },
    creator: { "@id": "https://4weblab.it/#organization" },
    publisher: { "@id": "https://4weblab.it/#organization" },
    inLanguage: "it-IT",
  };

  return (
    <>
      <Helmet>
        <title>Concept Sito Web Premium per Boutique B&B | 4 Web Lab</title>
        <meta
          name="description"
          content="Tech demo realizzata da 4 Web Lab: concept di sito web premium per un boutique B&B / luxury rooms italiano. Design editoriale, UX cinematografica e struttura SEO orientata alle strutture ricettive di fascia alta."
        />
        <meta name="author" content="4 Web Lab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="Concept Sito Web Premium per Boutique B&B | 4 Web Lab" />
        <meta
          property="og:description"
          content="Concept project realizzato da 4 Web Lab: web design premium per boutique B&B e luxury rooms italiane."
        />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="og:image" content="https://4weblab.it/og/boutique-bb-luxury-rooms.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Concept Sito Web Premium per Boutique B&B | 4 Web Lab" />
        <meta
          name="twitter:description"
          content="Tech demo di 4 Web Lab: web design premium per boutique B&B / luxury rooms italiane."
        />
        <meta name="twitter:image" content="https://4weblab.it/og/boutique-bb-luxury-rooms.webp" />

        {/* Preload hero */}
        <link rel="preload" as="image" href={heroImg} fetchPriority="high" />

        {/* Premium fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD (4 Web Lab EEAT) */}
        <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
        <script type="application/ld+json">{JSON.stringify(creativeLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageLd)}</script>
      </Helmet>

      <div style={{ background: C.bg, color: C.ink, fontFamily: SANS }}>
        <DemoHeader />
        <main>
          <Hero />
          <Intro />
          <Rooms />
          <Gallery />
          <Territory />
          <Services />
          <Reviews />
          <Contact />
        </main>
        <DemoFooter />
        <StickyMobileCTA />
      </div>
    </>
  );
};

export default DemoBoutiqueBB;
