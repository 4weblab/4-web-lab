/**
 * DemoFlowerAtelier.tsx
 * -----------------------------------------------------------------------------
 * Tech demo / concept project realizzato da 4 Web Lab.
 *
 * NOTA IMPORTANTE:
 * - Pagina interna a 4weblab.it (path: /realizzazioni/demo-flower-atelier).
 * - "Verdefiore Atelier" è un brand fittizio usato solo come scenario visivo.
 * - Nessun dato aziendale fake (no indirizzi, no telefoni, no LocalBusiness
 *   JSON-LD della fioreria, no FAQ schema fake, no recensioni strutturate).
 * - I JSON-LD sono CreativeWork/Organization riferiti a 4 Web Lab (EEAT-first).
 * - Il form contatti invia tramite Web3Forms direttamente a 4 Web Lab.
 * - Robots: indicizzabile (index, follow); inclusa in sitemap.xml.
 * - SEO target: web design negozi / siti web attività locali (NON fioreria).
 * -----------------------------------------------------------------------------
 */

import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  X,
  Truck,
  Flower2,
  CalendarHeart,
  Leaf,
  CheckCircle2,
  Instagram,
} from "lucide-react";

import heroImg from "@/assets/flower-hero.webp";
import comp1 from "@/assets/flower-composition-1.webp";
import comp2 from "@/assets/flower-composition-2.webp";
import comp3 from "@/assets/flower-composition-3.webp";
import weddingImg from "@/assets/flower-wedding.webp";
import eventImg from "@/assets/flower-event.webp";
import detailImg from "@/assets/flower-atelier-detail.webp";
import shopImg from "@/assets/flower-shop-interior.webp";

/* ============================================================================
 * Palette — botanical luxury (cream / botanical green / soft black / gold)
 * ========================================================================= */
const C = {
  bg: "#F5F0E6",        // cream
  bgAlt: "#EAE2D2",     // warm beige
  bgDark: "#14140F",    // soft black
  ink: "#1B1B14",       // text primary
  inkSoft: "#5A5648",   // muted warm gray
  line: "#DDD3BE",
  green: "#2F4A33",     // botanical green
  greenSoft: "#5A7B5E",
  gold: "#B79363",      // desaturated gold
  goldSoft: "#D8BC8C",
};

const SERIF = `'Cormorant Garamond', 'Playfair Display', Georgia, serif`;
const SANS = `'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`;

/* ============================================================================
 * Header
 * ========================================================================= */
const NAV = [
  { id: "home", label: "Home" },
  { id: "atelier", label: "Atelier" },
  { id: "composizioni", label: "Composizioni" },
  { id: "eventi", label: "Eventi" },
  { id: "gallery", label: "Gallery" },
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
        background: scrolled ? "rgba(245,240,230,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[78px] flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2"
          aria-label="Verdefiore Atelier — torna alla home"
        >
          <span
            className="text-[22px] md:text-[26px] tracking-[0.16em] uppercase"
            style={{
              fontFamily: SERIF,
              color: scrolled ? C.green : "#fff",
              fontWeight: 500,
              letterSpacing: "0.18em",
            }}
          >
            Verdefiore<span style={{ color: C.gold }}>·</span>Atelier
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-[13px] tracking-[0.12em] uppercase transition-colors"
              style={{
                fontFamily: SANS,
                color: scrolled ? C.ink : "rgba(255,255,255,0.88)",
                opacity: 0.9,
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
              background: scrolled ? C.green : "rgba(255,255,255,0.92)",
              color: scrolled ? C.bg : C.green,
              borderRadius: 2,
              fontWeight: 500,
            }}
          >
            Richiedi informazioni
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

      {open && (
        <div className="lg:hidden border-t" style={{ background: C.bg, borderColor: C.line }}>
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
              style={{ background: C.green, color: C.bg, fontFamily: SANS }}
            >
              Richiedi informazioni
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
const Hero = () => (
  <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
    <img
      src={heroImg}
      alt="Atelier di fiori botanici premium con composizioni floreali fresche, eucalipto e botaniche essiccate — concept sito web per negozi 4 Web Lab"
      width={1920}
      height={1080}
      fetchPriority="high"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(20,20,15,0.45) 0%, rgba(20,20,15,0.15) 35%, rgba(20,20,15,0.75) 100%)",
      }}
    />
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
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase mb-6"
          style={{ fontFamily: SANS, color: C.goldSoft }}
        >
          <Leaf className="w-3.5 h-3.5" /> Demo concept · 4 Web Lab
        </span>
        <h1
          className="text-[44px] sm:text-[60px] md:text-[80px] leading-[0.98] mb-6"
          style={{ fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Flower Atelier &amp;
          <br />
          <em style={{ fontStyle: "italic", color: C.goldSoft }}>Botanical Design</em>
        </h1>
        <h2 className="sr-only">Sito web per negozio (fioreria) — concept realizzato da 4 Web Lab, agenzia web di Padova</h2>
        <p
          className="text-[15px] md:text-[17px] max-w-xl leading-[1.7] mb-9"
          style={{ fontFamily: SANS, color: "rgba(255,255,255,0.88)" }}
        >
          Una demo concept realizzata da{" "}
          <Link to="/" className="underline" style={{ color: C.goldSoft }}>4 Web Lab</Link>{" "}
          (agenzia web di Padova) per mostrare il potenziale di un{" "}
          <Link to="/siti-web-per-negozi" className="underline" style={{ color: C.goldSoft }}>sito web per negozi</Link>{" "}
          moderno: design immersivo, struttura SEO e cura mobile-first.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:scale-[1.02]"
            style={{ background: C.bg, color: C.green, fontFamily: SANS, borderRadius: 2, fontWeight: 600 }}
          >
            Richiedi il tuo sito <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#atelier"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:bg-white/10"
            style={{
              fontFamily: SANS,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.45)",
              borderRadius: 2,
            }}
          >
            Scopri la demo
          </a>
        </div>
      </div>
    </div>

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

/* ============================================================================
 * Atelier / Story
 * ========================================================================= */
const Atelier = () => (
  <section id="atelier" className="py-24 md:py-36" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
      <div className="md:col-span-7 md:order-2 relative">
        <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: 2 }}>
          <img
            src={detailImg}
            alt="Mani di una florist compongono un bouquet artigianale con forbici e petali sul tavolo di lavoro"
            loading="lazy"
            width={1280}
            height={1600}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="hidden md:block absolute -bottom-8 -left-8 w-40 h-40 border"
          style={{ borderColor: C.gold }}
          aria-hidden="true"
        />
        <div
          className="hidden md:flex absolute -top-6 -right-6 w-28 h-28 items-center justify-center text-center"
          style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: "50%" }}
        >
          <div>
            <Leaf className="w-5 h-5 mx-auto mb-1" style={{ color: C.green }} />
            <div className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: SANS, color: C.inkSoft }}>
              Botanical<br />Atelier
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-5 md:order-1">
        <span
          className="text-[11px] tracking-[0.3em] uppercase block mb-6"
          style={{ fontFamily: SANS, color: C.green }}
        >
          La filosofia
        </span>
        <h2
          className="text-[36px] md:text-[54px] leading-[1.05] mb-7"
          style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
        >
          Fiori che raccontano,<br />
          <em style={{ color: C.green }}>spazi che respirano.</em>
        </h2>
        <p className="text-[16px] leading-[1.85] mb-5" style={{ fontFamily: SANS, color: C.inkSoft }}>
          Verdefiore è un atelier botanico immaginato come scenario per questa demo:
          un negozio di paese che diventa boutique, dove ogni composizione nasce dal
          dialogo tra forme naturali, stagioni e luce.
        </p>
        <p className="text-[16px] leading-[1.85]" style={{ fontFamily: SANS, color: C.inkSoft }}>
          L'obiettivo della pagina è dimostrare come un'attività locale possa
          comunicare cura, identità e qualità attraverso un sito moderno, veloce e
          curato in ogni dettaglio.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-12 pt-10 border-t" style={{ borderColor: C.line }}>
          {[
            { n: "100%", l: "Mobile-first" },
            { n: "<1s", l: "Tempo di caricamento" },
            { n: "SEO", l: "Strutturata e pulita" },
            { n: "GDPR", l: "Cookie e consensi" },
          ].map((s, i) => (
            <div key={i}>
              <div
                className="text-[30px] md:text-[40px] leading-none mb-2"
                style={{ fontFamily: SERIF, color: C.green, fontWeight: 400 }}
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
    </div>
  </section>
);

/* ============================================================================
 * Composizioni
 * ========================================================================= */
const COMPS = [
  {
    name: "Bouquet Primavera",
    img: comp1,
    desc: "Peonie, rose e eucalipto avvolti in carta cream: leggerezza e dolcezza romantica.",
    alt: "Bouquet di peonie rosa, rose e eucalipto avvolto in carta cream",
  },
  {
    name: "Composizione Minimal",
    img: comp2,
    desc: "Anemoni bianchi, pampas e rami sottili in vaso ceramico: geometria e respiro.",
    alt: "Composizione moderna con anemoni bianchi e pampas in vaso ceramico",
  },
  {
    name: "Bouquet Garden",
    img: comp3,
    desc: "Dahlia bordeaux, rose da giardino e fogliame fluente per un effetto materico e profondo.",
    alt: "Bouquet garden-style con dahlia bordeaux, rose e foglie",
  },
];

const Composizioni = () => (
  <section id="composizioni" className="py-24 md:py-36" style={{ background: C.bgAlt }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-16 md:mb-20">
        <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.green }}>
          Le composizioni
        </span>
        <h2
          className="text-[36px] md:text-[54px] leading-[1.05] mb-5"
          style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
        >
          Tre interpretazioni della natura.
        </h2>
        <p className="text-[16px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
          Ogni proposta racconta un mood diverso: nel sito reale di un negozio
          questa griglia diventa il cuore della comunicazione visiva.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {COMPS.map((r, i) => (
          <article
            key={i}
            className="group flex flex-col bg-white transition-all duration-500 hover:-translate-y-1"
            style={{ borderRadius: 2, boxShadow: "0 1px 0 rgba(0,0,0,0.04)" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={r.img}
                alt={r.alt}
                loading="lazy"
                width={1280}
                height={1600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(20,20,15,0.45) 100%)",
                }}
              />
            </div>
            <div className="p-7 md:p-9 flex flex-col flex-1">
              <h3
                className="text-[24px] md:text-[28px] leading-tight mb-3"
                style={{ fontFamily: SERIF, color: C.ink, fontWeight: 400 }}
              >
                {r.name}
              </h3>
              <p className="text-[14px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
                {r.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Eventi & Matrimoni
 * ========================================================================= */
const Eventi = () => (
  <section id="eventi" className="py-24 md:py-36" style={{ background: C.bgDark }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-stretch">
      <div className="md:col-span-7 relative">
        <div className="aspect-[16/11] overflow-hidden" style={{ borderRadius: 2 }}>
          <img
            src={weddingImg}
            alt="Arco floreale per matrimonio con rose bianche, peonie e verde fluente al tramonto"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:block absolute -bottom-6 -right-6 w-44 h-60 overflow-hidden" style={{ borderRadius: 2, border: `4px solid ${C.bgDark}` }}>
          <img
            src={eventImg}
            alt="Centrotavola elegante con fiori di stagione, candele e cristalleria"
            loading="lazy"
            width={800}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="md:col-span-5 flex flex-col justify-center">
        <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.goldSoft }}>
          Eventi · Matrimoni · Allestimenti
        </span>
        <h2
          className="text-[36px] md:text-[54px] leading-[1.05] mb-7 text-white"
          style={{ fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Flower styling<br />
          <em style={{ color: C.goldSoft }}>per i momenti che restano.</em>
        </h2>
        <p className="text-[16px] leading-[1.85] mb-8" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.72)" }}>
          Matrimoni intimi, eventi privati, allestimenti per spazi commerciali:
          ogni progetto nasce su misura, dalla scelta dei materiali alla
          composizione finale. Questa sezione mostra come un sito può raccontare
          un servizio premium senza diventare un catalogo.
        </p>
        <a
          href="#contatti"
          className="self-start inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:scale-[1.02]"
          style={{ background: C.gold, color: C.bgDark, fontFamily: SANS, borderRadius: 2, fontWeight: 600 }}
        >
          Richiedi una consulenza <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Servizi
 * ========================================================================= */
const SERVICES = [
  { i: Truck, t: "Consegna locale", d: "Bouquet e composizioni consegnate con cura nel raggio cittadino, in giornata." },
  { i: Flower2, t: "Bouquet personalizzati", d: "Composizioni su misura per occasioni speciali, dialogando con il cliente." },
  { i: Leaf, t: "Composizioni stagionali", d: "Solo materiale botanico fresco e selezionato, secondo la stagione." },
  { i: CalendarHeart, t: "Consulenza eventi", d: "Sopralluogo, mood board e allestimento completo per matrimoni ed eventi privati." },
];

const Servizi = () => (
  <section className="py-24 md:py-32" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.green }}>
          I servizi
        </span>
        <h2
          className="text-[36px] md:text-[52px] leading-[1.05]"
          style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
        >
          Cura artigianale, in ogni dettaglio.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: C.line }}>
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="p-9 md:p-10 flex flex-col items-center text-center transition-colors duration-500"
            style={{ background: C.bg }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{ background: "transparent", border: `1px solid ${C.green}` }}
            >
              <s.i className="w-5 h-5" style={{ color: C.green }} />
            </div>
            <div className="text-[13px] tracking-[0.12em] uppercase mb-3" style={{ fontFamily: SANS, color: C.ink, fontWeight: 500 }}>
              {s.t}
            </div>
            <p className="text-[13px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Gallery editoriale
 * ========================================================================= */
const GALLERY = [
  { src: heroImg, alt: "Atelier botanico con composizioni di rose e eucalipto", span: "row-span-2" },
  { src: comp1, alt: "Bouquet di peonie e rose in carta cream", span: "" },
  { src: shopImg, alt: "Interno del negozio di fiori con tavoli espositivi", span: "" },
  { src: weddingImg, alt: "Arco floreale per matrimonio", span: "row-span-2" },
  { src: comp2, alt: "Composizione minimale con anemoni e pampas", span: "" },
  { src: detailImg, alt: "Dettaglio delle mani della florist al lavoro", span: "" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-36" style={{ background: C.bgAlt }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-6">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.green }}>
              Gallery
            </span>
            <h2
              className="text-[36px] md:text-[56px] leading-[1.05]"
              style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
            >
              Dettagli e atmosfere.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
            Un layout editoriale per mostrare composizioni, ambienti del negozio e
            momenti dal vivo: nel sito di un'attività locale è il modo migliore
            per costruire fiducia visiva.
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
                style={{ background: "rgba(20,20,15,0.25)" }}
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-[fadeUp_0.3s_ease-out]"
          style={{ background: "rgba(20,20,15,0.94)" }}
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
 * Instagram-style feed (simulato — no embed reali)
 * ========================================================================= */
const FEED = [comp1, comp2, comp3, detailImg, eventImg, shopImg];

const Feed = () => (
  <section className="py-24 md:py-32" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.green }}>
          <Instagram className="w-3.5 h-3.5" /> Social feed (demo)
        </span>
        <h2
          className="text-[34px] md:text-[48px] leading-[1.05]"
          style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
        >
          Un assaggio visivo dell'atelier.
        </h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {FEED.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden group" style={{ borderRadius: 2 }}>
            <img
              src={src}
              alt={`Scatto demo dal feed visuale dell'atelier floreale (${i + 1}/6)`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Testimonianze — DEMO generiche dichiarate (NO recensioni fake realistiche)
 * ========================================================================= */
const TESTI = [
  { t: "Esempio dimostrativo di come una testimonianza cliente può essere presentata in modo elegante e leggibile.", n: "Cliente demo · A." },
  { t: "Testo placeholder usato per mostrare la spaziatura tipografica e l'impatto visivo di una citazione.", n: "Cliente demo · B." },
  { t: "Contenuto fittizio dichiarato: questa sezione, nel sito reale, ospiterà recensioni verificate del negozio.", n: "Cliente demo · C." },
];

const Testimonials = () => (
  <section className="py-24 md:py-32" style={{ background: C.bgAlt }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] tracking-[0.3em] uppercase block mb-5" style={{ fontFamily: SANS, color: C.green }}>
          Testimonianze (demo)
        </span>
        <h2
          className="text-[34px] md:text-[48px] leading-[1.05]"
          style={{ fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" }}
        >
          Come parlare dei propri clienti.
        </h2>
        <p className="mt-5 text-[14px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
          Contenuti dichiaratamente fittizi: nel sito reale di un negozio queste card
          ospiterebbero recensioni verificate o Google Reviews.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {TESTI.map((r, i) => (
          <div
            key={i}
            className="p-8 md:p-10 flex flex-col"
            style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 2 }}
          >
            <p
              className="text-[17px] leading-[1.65] mb-7 flex-1"
              style={{ fontFamily: SERIF, color: C.ink, fontStyle: "italic", fontWeight: 400 }}
            >
              "{r.t}"
            </p>
            <div className="pt-5 border-t" style={{ borderColor: C.line }}>
              <div className="text-[13px] tracking-[0.08em] uppercase" style={{ fontFamily: SANS, color: C.inkSoft }}>
                {r.n}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * CTA finale → 4 Web Lab (visivamente fortissima, completamente diversa)
 * ========================================================================= */
const CTAFinale = () => {
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
    fd.append("subject", "[Demo Flower Atelier] Richiesta sito web negozio (concept 4 Web Lab)");
    fd.append("from_name", "4 Web Lab — Demo Flower Atelier");
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
    color: "#fff",
    border: "none",
    borderBottom: `1px solid rgba(255,255,255,0.28)`,
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
    color: "rgba(255,255,255,0.55)",
    marginBottom: 6,
    display: "block",
  };

  return (
    <section
      id="contatti"
      className="relative overflow-hidden py-24 md:py-36"
      style={{
        background: `linear-gradient(135deg, ${C.green} 0%, #1F3322 60%, ${C.bgDark} 100%)`,
      }}
    >
      {/* botanical decorations */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(216,188,140,0.45) 0px, transparent 35%), radial-gradient(circle at 80% 70%, rgba(216,188,140,0.35) 0px, transparent 40%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Banner identità 4 Web Lab */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] tracking-[0.28em] uppercase mb-7"
            style={{
              fontFamily: SANS,
              color: C.goldSoft,
              border: `1px solid ${C.goldSoft}`,
              borderRadius: 999,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Demo concept · contatto diretto con 4 Web Lab
          </span>
          <h2
            className="text-[36px] sm:text-[48px] md:text-[64px] leading-[1.02] text-white mb-8"
            style={{ fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Vuoi un sito professionale<br />
            <em style={{ color: C.goldSoft }}>anche per il tuo negozio?</em>
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.8] max-w-2xl mx-auto" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.78)" }}>
            <strong style={{ color: "#fff", fontWeight: 600 }}>4 Web Lab</strong> realizza siti web per
            negozi, attività locali e professionisti a Padova, in Veneto e in tutta Italia.
            Soluzioni moderne <strong style={{ color: "#fff" }}>a partire da 199€</strong>,
            progettate per essere veloci, curate e ottimizzate anche da mobile.
          </p>

          <ul className="flex flex-wrap gap-x-7 gap-y-3 justify-center mt-9" style={{ fontFamily: SANS }}>
            {["Design moderno", "Mobile-first", "SEO base inclusa", "Supporto diretto"].map((b) => (
              <li key={b} className="flex items-center gap-2 text-[13px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                <CheckCircle2 className="w-4 h-4" style={{ color: C.goldSoft }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Contatti diretti */}
          <div>
            <h3
              className="text-[24px] md:text-[28px] mb-7 text-white"
              style={{ fontFamily: SERIF, fontWeight: 400 }}
            >
              Parla direttamente con 4 Web Lab.
            </h3>

            <div className="space-y-5 mb-8">
              <a href="tel:+393514656042" className="flex items-center gap-4 group transition-opacity hover:opacity-80">
                <div
                  className="w-11 h-11 flex items-center justify-center"
                  style={{ border: `1px solid ${C.goldSoft}`, borderRadius: 2 }}
                >
                  <Phone className="w-4 h-4" style={{ color: C.goldSoft }} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.55)" }}>
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
                  style={{ border: `1px solid ${C.goldSoft}`, borderRadius: 2 }}
                >
                  <MessageCircle className="w-4 h-4" style={{ color: "#25D366" }} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.55)" }}>
                    WhatsApp
                  </div>
                  <div className="text-[17px] text-white" style={{ fontFamily: SERIF }}>
                    Scrivici subito su WhatsApp
                  </div>
                </div>
              </a>

              <a href="mailto:info@4weblab.it" className="flex items-center gap-4 group transition-opacity hover:opacity-80">
                <div
                  className="w-11 h-11 flex items-center justify-center"
                  style={{ border: `1px solid ${C.goldSoft}`, borderRadius: 2 }}
                >
                  <Mail className="w-4 h-4" style={{ color: C.goldSoft }} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.55)" }}>
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
                border: `1px dashed rgba(216,188,140,0.5)`,
                color: "rgba(255,255,255,0.65)",
                fontFamily: SANS,
                borderRadius: 2,
              }}
            >
              <strong style={{ color: C.goldSoft, fontWeight: 600 }}>Importante:</strong>{" "}
              "Verdefiore Atelier" è una demo concept. Il contatto inviato da questa pagina
              arriva direttamente a{" "}
              <Link to="/" className="underline" style={{ color: C.goldSoft }}>4 Web Lab</Link>{" "}
              — non a una fioreria reale. Vedi le altre{" "}
              <Link to="/realizzazioni" className="underline" style={{ color: C.goldSoft }}>realizzazioni</Link>.
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={onSubmit}>
            {done ? (
              <div
                className="p-10 text-center"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 2 }}
              >
                <Heart className="w-8 h-8 mx-auto mb-5" style={{ color: C.goldSoft }} />
                <h3 className="text-[26px] mb-3 text-white" style={{ fontFamily: SERIF, fontWeight: 400 }}>
                  Richiesta ricevuta, grazie.
                </h3>
                <p className="text-[14px] leading-[1.7]" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.65)" }}>
                  Ti ricontatteremo a breve con una proposta su misura per il tuo negozio.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle} htmlFor="fa-name">Nome completo *</label>
                    <input id="fa-name" name="name" type="text" required style={inputBase} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="fa-email">Email *</label>
                    <input id="fa-email" name="email" type="email" required style={inputBase} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle} htmlFor="fa-phone">Telefono</label>
                    <input id="fa-phone" name="phone" type="tel" style={inputBase} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="fa-activity">Tipo di attività</label>
                    <input id="fa-activity" name="activity" type="text" placeholder="Negozio, studio, atelier…" style={inputBase} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="fa-msg">Messaggio</label>
                  <textarea
                    id="fa-msg"
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
                    style={{ accentColor: C.goldSoft }}
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
                    background: C.goldSoft,
                    color: C.bgDark,
                    fontFamily: SANS,
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  {submitting ? "Invio in corso…" : "Richiedi una valutazione gratuita"}
                </button>

                {error && (
                  <p className="text-[13px] text-red-300" style={{ fontFamily: SANS }}>{error}</p>
                )}
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <Link
            to="/realizzazioni"
            className="inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline"
            style={{ fontFamily: SANS, color: C.goldSoft }}
          >
            Torna alla lista delle demo
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
  <footer style={{ background: "#0D0D0A", color: "rgba(255,255,255,0.6)" }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div
          className="text-[22px] tracking-[0.18em] uppercase mb-5 text-white"
          style={{ fontFamily: SERIF, fontWeight: 500 }}
        >
          Verdefiore<span style={{ color: C.goldSoft }}>·</span>Atelier
        </div>
        <p className="text-[14px] leading-[1.8] max-w-sm" style={{ fontFamily: SANS }}>
          Demo concept di sito web premium per negozi e attività locali.
          Realizzato da <Link to="/" className="underline hover:text-white" style={{ color: C.goldSoft }}>4 Web Lab</Link>.
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
          Contatti 4 Web Lab
        </div>
        <ul className="space-y-2 text-[14px]" style={{ fontFamily: SANS }}>
          <li><a href="tel:+393514656042" className="hover:text-white">+39 351 465 6042</a></li>
          <li><a href="mailto:info@4weblab.it" className="hover:text-white">info@4weblab.it</a></li>
          <li><a href="https://wa.me/393514656042" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
          <li><Link to="/siti-web-per-negozi" className="hover:text-white">Siti web per negozi</Link></li>
          <li><Link to="/realizzazioni" className="hover:text-white">Altre realizzazioni</Link></li>
        </ul>
      </div>
    </div>
    <div
      className="border-t py-7 text-[12px] text-center"
      style={{ borderColor: "rgba(255,255,255,0.08)", fontFamily: SANS }}
    >
      © {new Date().getFullYear()} Verdefiore Atelier — Tech demo realizzata da{" "}
      <Link to="/" className="underline hover:text-white" style={{ color: C.goldSoft }}>4 Web Lab</Link>.
      Brand fittizio a scopo dimostrativo.
    </div>
  </footer>
);

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
      style={{ background: C.green, color: C.bg, fontFamily: SANS, borderRadius: 2 }}
    >
      Richiedi il tuo sito <ArrowRight className="w-3.5 h-3.5" />
    </a>
  </div>
);

/* ============================================================================
 * Page
 * ========================================================================= */
const DemoFlowerAtelier = () => {
  const canonical = "https://4weblab.it/realizzazioni/demo-flower-atelier";

  // 4 Web Lab Organization è emessa globalmente in App.tsx (#business).
  const creativeLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${canonical}#creativework`,
    name: "Concept di sito web premium per negozio / fioreria — by 4 Web Lab",
    headline: "Demo concept: web design per negozi e attività locali",
    description:
      "Concept project realizzato da 4 Web Lab per mostrare il potenziale di un sito moderno per negozi, fiorerie e attività locali: design botanico premium, struttura SEO ordinata e ottimizzazione mobile-first.",
    url: canonical,
    inLanguage: "it-IT",
    keywords: [
      "demo sito web negozio",
      "web design negozi",
      "siti web per attività locali",
      "concept sito negozio",
      "realizzazione siti web negozi",
      "UX design retail",
      "showcase web design",
      "siti web per negozi moderni",
    ],
    author: { "@id": "https://4weblab.it/#business" },
    creator: { "@id": "https://4weblab.it/#business" },
    producer: { "@id": "https://4weblab.it/#business" },
    publisher: { "@id": "https://4weblab.it/#business" },
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
        name: "Demo concept Flower Atelier · 4 Web Lab",
        item: canonical,
      },
    ],
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Sito Web per Fioreria – Demo Concept Premium | 4 Web Lab",
    isPartOf: { "@id": "https://4weblab.it/#website" },
    about: { "@id": `${canonical}#creativework` },
    mainEntity: { "@id": `${canonical}#creativework` },
    author: { "@id": "https://4weblab.it/#business" },
    creator: { "@id": "https://4weblab.it/#business" },
    publisher: { "@id": "https://4weblab.it/#business" },
    inLanguage: "it-IT",
  };

  return (
    <>
      <Helmet>
        <title>Sito Web per Negozio (Fioreria) · Demo Padova | 4 Web Lab</title>
        <meta
          name="description"
          content="Demo realizzata da 4 Web Lab, agenzia web di Padova specializzata in siti web per negozi e attività locali. Pacchetto una tantum da 199€."
        />
        <meta name="author" content="4 Web Lab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="article:author" content="4 Web Lab" />
        <meta property="article:section" content="Realizzazioni" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="Sito Web per Negozio (Fioreria) · Demo Padova | 4 Web Lab" />
        <meta
          property="og:description"
          content="Demo di sito web per negozi realizzata da 4 Web Lab, agenzia web di Padova. Pacchetto una tantum da 199€."
        />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="og:image" content="https://4weblab.it/og/flower-atelier-demo.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sito Web per Negozio (Fioreria) · Demo Padova | 4 Web Lab" />
        <meta
          name="twitter:description"
          content="Demo di sito web per negozi realizzata da 4 Web Lab, agenzia web di Padova. Da 199€."
        />
        <meta name="twitter:image" content="https://4weblab.it/og/flower-atelier-demo.webp" />

        {/* Preload hero */}
        <link rel="preload" as="image" href={heroImg} fetchPriority="high" />

        {/* Premium fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD specifico della pagina (entità 4 Web Lab globale in App.tsx) */}
        <script type="application/ld+json">{JSON.stringify(creativeLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageLd)}</script>
      </Helmet>

      <div style={{ background: C.bg, color: C.ink, fontFamily: SANS }}>
        <DemoHeader />
        <main>
          <Hero />
          <Atelier />
          <Composizioni />
          <Eventi />
          <Servizi />
          <Gallery />
          <Feed />
          <Testimonials />
          <CTAFinale />
        </main>
        <DemoFooter />
        <StickyMobileCTA />
      </div>
    </>
  );
};

export default DemoFlowerAtelier;