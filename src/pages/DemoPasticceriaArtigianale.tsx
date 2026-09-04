/**
 * DemoPasticceriaArtigianale.tsx
 * -----------------------------------------------------------------------------
 * Tech demo / concept project realizzato da 4 Web Lab.
 *
 * NOTE:
 * - Path: /realizzazioni/demo-pasticceria-artigianale
 * - "Farina Viva" è un brand FITTIZIO usato solo come scenario visivo.
 * - Nessuna P.IVA fittizia, nessun LocalBusiness/Organization del brand finto.
 * - Indirizzo e telefono scenici sono marcati "(placeholder)" e non cliccabili.
 * - Tutti i contatti reali (tel/WhatsApp/email/form) puntano a 4 Web Lab.
 * - JSON-LD: CreativeWork + WebPage + un solo BreadcrumbList.
 * -----------------------------------------------------------------------------
 */

import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Truck,
  CalendarHeart,
  Wheat,
  Leaf,
  Clock,
  Gift,
  CheckCircle2,
  Quote,
  ChefHat,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/farina-viva/hero.webp";
import imgPasticceria from "@/assets/farina-viva/pasticceria.webp";
import imgPanificazione from "@/assets/farina-viva/panificazione.webp";
import imgGastronomia from "@/assets/farina-viva/gastronomia.webp";
import imgTorte from "@/assets/farina-viva/torte.webp";
import imgLab from "@/assets/farina-viva/g1.webp";
import imgShop from "@/assets/farina-viva/g2.webp";
import imgCroissant from "@/assets/farina-viva/g3.webp";

/* ============================================================================
 * Palette — warm artisan (pane / terracotta / crema)
 * ========================================================================= */
const C = {
  bg: "#FBF5EC",
  bgAlt: "#F2E6D6",
  bgDark: "#181008",
  ink: "#26180E",
  inkSoft: "#6A5342",
  line: "#E3D2BC",
  terra: "#A6472B",
  terraSoft: "#C9714F",
  crust: "#8A5A2B",
  cream: "#F6E3C5",
};

const SERIF = `'Playfair Display', Georgia, serif`;
const SANS = `'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`;

const NAV = [
  { id: "home", label: "Home" },
  { id: "laboratorio", label: "Laboratorio" },
  { id: "specialita", label: "Specialità" },
  { id: "servizi", label: "Servizi" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
  { id: "contatti", label: "Contatti" },
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ============================================================================
 * Header
 * ========================================================================= */
const DemoHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(251,245,236,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[78px] flex items-center justify-between">
        <button onClick={() => go("home")} aria-label="Farina Viva — torna alla home">
          <span
            className="text-[21px] md:text-[25px] tracking-[0.16em] uppercase"
            style={{ fontFamily: SERIF, color: scrolled ? C.crust : "#fff", fontWeight: 600 }}
          >
            Farina<span style={{ color: C.terraSoft }}>·</span>Viva
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="text-[13px] tracking-[0.12em] uppercase transition-opacity hover:opacity-70"
              style={{ fontFamily: SANS, color: scrolled ? C.ink : "rgba(255,255,255,0.9)" }}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => go("contatti")}
            className="px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase transition-transform hover:scale-[1.02]"
            style={{
              fontFamily: SANS,
              background: scrolled ? C.terra : "rgba(255,255,255,0.94)",
              color: scrolled ? C.cream : C.terra,
              borderRadius: 4,
              fontWeight: 600,
            }}
          >
            Richiedi il tuo sito
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Apri menu"
          aria-expanded={open}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px"
              style={{ background: scrolled || open ? C.ink : "#fff" }}
            />
          ))}
        </button>
      </div>

      {open && (
        <div className="lg:hidden" style={{ background: C.bg, borderTop: `1px solid ${C.line}` }}>
          <ul className="px-5 py-4 space-y-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className="text-[14px] tracking-[0.08em] uppercase"
                  style={{ fontFamily: SANS, color: C.ink }}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

/* ============================================================================
 * Hero
 * ========================================================================= */
const Hero = () => (
  <section id="home" className="relative min-h-[92vh] flex items-end overflow-hidden">
    <img
      src={heroImg}
      alt="Laboratorio di pasticceria e panificazione artigianale con pani appena sfornati — concept di sito web realizzato da 4 Web Lab"
      width={1920}
      height={1280}
      fetchPriority="high"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, rgba(24,16,8,0.92) 0%, rgba(24,16,8,0.55) 45%, rgba(24,16,8,0.25) 100%)",
      }}
    />
    <div className="relative max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32 w-full">
      <span
        className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] tracking-[0.26em] uppercase mb-7"
        style={{ fontFamily: SANS, color: C.cream, border: `1px solid ${C.terraSoft}`, borderRadius: 999 }}
      >
        <Sparkles className="w-3.5 h-3.5" /> Demo concept · brand fittizio
      </span>

      <h1
        className="text-[38px] sm:text-[54px] md:text-[76px] leading-[1.03] text-white max-w-4xl mb-6"
        style={{ fontFamily: SERIF, fontWeight: 500, letterSpacing: "-0.02em" }}
      >
        Farina Viva
        <br />
        <em style={{ color: C.cream }}>pasticceria &amp; gastronomia artigianale</em>
      </h1>

      <p
        className="text-[16px] md:text-[19px] leading-[1.8] max-w-2xl mb-10"
        style={{ fontFamily: SANS, color: "rgba(255,255,255,0.85)" }}
      >
        Lievitati lenti, creme fresche del giorno e gastronomia pronta preparata nel
        laboratorio a vista. Tutto ciò che serve, cotto la mattina stessa.
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => scrollToId("specialita")}
          className="inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.18em] uppercase transition-transform hover:scale-[1.02]"
          style={{ fontFamily: SANS, background: C.cream, color: C.bgDark, borderRadius: 4, fontWeight: 600 }}
        >
          Scopri le specialità <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollToId("contatti")}
          className="inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.18em] uppercase transition-colors"
          style={{
            fontFamily: SANS,
            border: "1px solid rgba(255,255,255,0.6)",
            color: "#fff",
            borderRadius: 4,
            fontWeight: 600,
          }}
        >
          Richiedi il tuo sito
        </button>
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Filosofia
 * ========================================================================= */
const Filosofia = () => (
  <section id="laboratorio" className="py-20 md:py-28" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <span
          className="text-[11px] tracking-[0.26em] uppercase"
          style={{ fontFamily: SANS, color: C.terra }}
        >
          Il laboratorio
        </span>
        <h2
          className="text-[32px] md:text-[46px] leading-[1.1] mt-4 mb-7"
          style={{ fontFamily: SERIF, color: C.ink, fontWeight: 500 }}
        >
          Lavorazione lenta, materie prime scelte una per una
        </h2>
        <div className="space-y-5 text-[16px] leading-[1.85]" style={{ fontFamily: SANS, color: C.inkSoft }}>
          <p>
            Impastiamo ogni mattina con lievito madre rinfrescato a mano e farine
            macinate a pietra da mulini a filiera corta. Le lievitazioni durano tra le
            18 e le 24 ore: è il tempo, più di ogni tecnica, a dare profumo e digeribilità.
          </p>
          <p>
            Il laboratorio è a vista sulla sala: chi entra vede impasti, sfogliatura e
            forni al lavoro. Nessun semilavorato, nessun prodotto surgelato rigenerato:
            creme, ripieni e basi vengono preparati internamente ogni giorno.
          </p>
          <p>
            Ciò che resta a fine giornata non torna in vendita. Preferiamo produrre in
            quantità misurate e finire gli scaffali, piuttosto che allungare la vita a un
            prodotto nato per essere mangiato fresco.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4 mt-9" style={{ fontFamily: SANS }}>
          {[
            "Lievito madre rinfrescato a mano",
            "Farine macinate a pietra",
            "Creme e ripieni preparati in giornata",
            "Laboratorio a vista sulla sala",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[14px]" style={{ color: C.ink }}>
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.terra }} />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <img
          src={imgLab}
          alt="Panettiere che lavora l'impasto sul banco infarinato nel laboratorio artigianale"
          loading="lazy"
          width={1280}
          height={960}
          className="w-full h-auto object-cover"
          style={{ borderRadius: 6 }}
        />
        <div
          className="hidden md:flex flex-col items-center justify-center absolute -bottom-8 -left-8 w-40 h-40 text-center px-4"
          style={{ background: C.terra, color: C.cream, borderRadius: 6, fontFamily: SANS }}
        >
          <ChefHat className="w-7 h-7 mb-2" />
          <span className="text-[13px] leading-snug">
            24 ore di lievitazione media
          </span>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Categorie prodotto
 * ========================================================================= */
const CATEGORIE = [
  {
    img: imgPasticceria,
    alt: "Pasticceria fresca mignon su vassoio di marmo",
    title: "Pasticceria fresca",
    desc: "Mignon, bignè, crostatine e sfoglie farcite con creme preparate al mattino.",
  },
  {
    img: imgPanificazione,
    alt: "Pani a lievitazione naturale su rastrelliera di legno",
    title: "Panificazione quotidiana",
    desc: "Pani a lievitazione naturale, focacce e grissini sfornati in più turni al giorno.",
  },
  {
    img: imgGastronomia,
    alt: "Banco gastronomia con torte salate e piatti pronti",
    title: "Gastronomia pronta",
    desc: "Torte salate, sfoglie rustiche e piatti del giorno da portare in tavola subito.",
  },
  {
    img: imgTorte,
    alt: "Torta artigianale decorata con panna e frutti di bosco",
    title: "Torte su ordinazione",
    desc: "Torte per compleanni, ricorrenze e cerimonie, decorate su misura in laboratorio.",
  },
];

const Specialita = () => (
  <section id="specialita" className="py-20 md:py-28" style={{ background: C.bgAlt }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-14">
        <span className="text-[11px] tracking-[0.26em] uppercase" style={{ fontFamily: SANS, color: C.terra }}>
          Le specialità
        </span>
        <h2
          className="text-[32px] md:text-[46px] leading-[1.1] mt-4"
          style={{ fontFamily: SERIF, color: C.ink, fontWeight: 500 }}
        >
          Quattro banchi, una sola cucina
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIE.map((c) => (
          <article
            key={c.title}
            className="group overflow-hidden transition-transform hover:-translate-y-1"
            style={{ background: C.bg, borderRadius: 6, border: `1px solid ${C.line}` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[21px] mb-2.5" style={{ fontFamily: SERIF, color: C.ink, fontWeight: 500 }}>
                {c.title}
              </h3>
              <p className="text-[14px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
                {c.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Servizi
 * ========================================================================= */
const SERVIZI = [
  { icon: Truck, t: "Consegna locale", d: "Consegne in giornata su ordini effettuati entro la sera precedente." },
  { icon: CalendarHeart, t: "Ordini per eventi", d: "Buffet dolci e salati per battesimi, comunioni, matrimoni e uffici." },
  { icon: Wheat, t: "Linea senza glutine", d: "Produzione dedicata in spazio separato, su prenotazione settimanale." },
  { icon: Leaf, t: "Proposte vegane", d: "Lievitati e dolci senza derivati animali, disponibili ogni giorno." },
  { icon: Clock, t: "Prenotazione ritiro", d: "Scegli l'orario di ritiro ed evita la fila nelle ore di punta." },
  { icon: Gift, t: "Confezioni regalo", d: "Cesti e box personalizzati per ricorrenze e regali aziendali." },
];

const Servizi = () => (
  <section id="servizi" className="py-20 md:py-28" style={{ background: C.bg }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-14">
        <span className="text-[11px] tracking-[0.26em] uppercase" style={{ fontFamily: SANS, color: C.terra }}>
          Servizi
        </span>
        <h2
          className="text-[32px] md:text-[46px] leading-[1.1] mt-4"
          style={{ fontFamily: SERIF, color: C.ink, fontWeight: 500 }}
        >
          Come possiamo aiutarti
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVIZI.map((s) => (
          <div
            key={s.t}
            className="p-7 transition-colors"
            style={{ border: `1px solid ${C.line}`, borderRadius: 6, background: "#fff" }}
          >
            <div
              className="w-11 h-11 flex items-center justify-center mb-5"
              style={{ background: C.bgAlt, borderRadius: 4 }}
            >
              <s.icon className="w-5 h-5" style={{ color: C.terra }} />
            </div>
            <h3 className="text-[18px] mb-2" style={{ fontFamily: SERIF, color: C.ink, fontWeight: 600 }}>
              {s.t}
            </h3>
            <p className="text-[14px] leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Gallery
 * ========================================================================= */
const GALLERY = [
  { img: imgShop, alt: "Interno del negozio con banco in legno e pareti terracotta", span: "lg:col-span-2" },
  { img: imgCroissant, alt: "Cestino di croissant e brioche appena sfornati", span: "" },
  { img: imgPanificazione, alt: "Pani artigianali in raffreddamento", span: "" },
  { img: imgPasticceria, alt: "Pasticceria mignon su vassoio", span: "" },
  { img: imgTorte, alt: "Torta con panna e frutti di bosco", span: "" },
  { img: imgGastronomia, alt: "Vetrina gastronomia con torte salate", span: "lg:col-span-2" },
];

const Gallery = () => (
  <section id="gallery" className="py-20 md:py-28" style={{ background: C.bgDark }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-14">
        <span className="text-[11px] tracking-[0.26em] uppercase" style={{ fontFamily: SANS, color: C.terraSoft }}>
          Gallery
        </span>
        <h2
          className="text-[32px] md:text-[46px] leading-[1.1] mt-4 text-white"
          style={{ fontFamily: SERIF, fontWeight: 500 }}
        >
          Il profumo, in immagini
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GALLERY.map((g, i) => (
          <div key={i} className={`overflow-hidden ${g.span}`} style={{ borderRadius: 6 }}>
            <img
              src={g.img}
              alt={g.alt}
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * Testimonianze (contenuto fittizio, etichettato riga per riga)
 * ========================================================================= */
const REVIEWS = [
  {
    t: "Il pane con lievito madre è diventato un'abitudine di famiglia: profumo vero e crosta croccante anche il giorno dopo.",
    n: "Cliente demo 1",
  },
  {
    t: "Ho ordinato la torta salata per una cena di lavoro: pronta all'ora giusta e finita in dieci minuti.",
    n: "Cliente demo 2",
  },
  {
    t: "La linea senza glutine è una liberazione. Finalmente una pasticceria dove posso scegliere anche io.",
    n: "Cliente demo 3",
  },
];

const Testimonianze = () => (
  <section className="py-20 md:py-28" style={{ background: C.bgAlt }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-12">
        <span className="text-[11px] tracking-[0.26em] uppercase" style={{ fontFamily: SANS, color: C.terra }}>
          Dicono di noi
        </span>
        <h2
          className="text-[32px] md:text-[46px] leading-[1.1] mt-4"
          style={{ fontFamily: SERIF, color: C.ink, fontWeight: 500 }}
        >
          Voci dal banco
        </h2>
        <p className="text-[14px] mt-4 leading-[1.7]" style={{ fontFamily: SANS, color: C.inkSoft }}>
          Le recensioni qui sotto sono <strong>contenuto fittizio</strong> creato per la demo:
          non provengono da clienti reali e non sono pubblicate come recensioni strutturate.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map((r) => (
          <figure
            key={r.n}
            className="p-8 flex flex-col h-full"
            style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 6 }}
          >
            <span
              className="self-start text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 mb-5"
              style={{
                fontFamily: SANS,
                color: C.terra,
                border: `1px dashed ${C.terraSoft}`,
                borderRadius: 999,
              }}
            >
              Contenuto fittizio · demo
            </span>
            <Quote className="w-5 h-5 mb-4" style={{ color: C.terraSoft }} />
            <blockquote
              className="text-[17px] leading-[1.7] flex-1"
              style={{ fontFamily: SERIF, color: C.ink, fontStyle: "italic" }}
            >
              “{r.t}”
            </blockquote>
            <figcaption
              className="pt-5 mt-5 text-[12px] tracking-[0.08em] uppercase"
              style={{ borderTop: `1px solid ${C.line}`, fontFamily: SANS, color: C.inkSoft }}
            >
              {r.n} — recensione fittizia
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================================
 * FAQ
 * ========================================================================= */
const FAQS = [
  {
    q: "Fate torte su ordinazione con quanto preavviso?",
    a: "In questo scenario demo il preavviso indicato è di 48 ore per le torte classiche e di 5 giorni per le decorazioni personalizzate o i grandi numeri.",
  },
  {
    q: "Avete prodotti senza glutine o vegani?",
    a: "Sì: la demo racconta una linea senza glutine prodotta in spazio separato su prenotazione settimanale e proposte vegane disponibili ogni giorno al banco.",
  },
  {
    q: "È possibile prenotare il ritiro?",
    a: "Nello scenario demo il ritiro si prenota indicando giorno e fascia oraria, così da evitare la fila nelle ore di punta della mattina.",
  },
  {
    q: "Consegnate a domicilio?",
    a: "La demo prevede consegne locali in giornata per gli ordini confermati entro la sera precedente, con fasce orarie concordate.",
  },
  {
    q: "Questa pasticceria esiste davvero?",
    a: "No. “Farina Viva” è un brand fittizio creato da 4 Web Lab come concept dimostrativo. Contenuti, recensioni, indirizzi e orari sono inventati a scopo illustrativo: le richieste inviate da questa pagina arrivano a 4 Web Lab.",
  },
];

const Faq = () => (
  <section id="faq" className="py-20 md:py-28" style={{ background: C.bg }}>
    <div className="max-w-3xl mx-auto px-5 md:px-8">
      <span className="text-[11px] tracking-[0.26em] uppercase" style={{ fontFamily: SANS, color: C.terra }}>
        FAQ
      </span>
      <h2
        className="text-[32px] md:text-[46px] leading-[1.1] mt-4 mb-10"
        style={{ fontFamily: SERIF, color: C.ink, fontWeight: 500 }}
      >
        Domande frequenti
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} style={{ borderColor: C.line }}>
            <AccordionTrigger className="text-left" style={{ fontFamily: SANS, color: C.ink }}>
              {f.q}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[15px] leading-[1.8]" style={{ fontFamily: SANS, color: C.inkSoft }}>
                {f.a}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

/* ============================================================================
 * CTA finale + form → 4 Web Lab
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
    fd.append("subject", "[Demo Farina Viva] Richiesta sito web (concept 4 Web Lab)");
    fd.append("from_name", "4 Web Lab — Demo Farina Viva");
    const email = fd.get("email");
    if (typeof email === "string") fd.append("replyto", email);
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
    borderBottom: "1px solid rgba(255,255,255,0.28)",
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
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: `linear-gradient(135deg, ${C.crust} 0%, #6B3A1C 55%, ${C.bgDark} 100%)` }}
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] tracking-[0.26em] uppercase mb-7"
            style={{ fontFamily: SANS, color: C.cream, border: `1px solid ${C.cream}`, borderRadius: 999 }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Demo concept · contatto diretto con 4 Web Lab
          </span>
          <h2
            className="text-[34px] sm:text-[46px] md:text-[60px] leading-[1.05] text-white mb-7"
            style={{ fontFamily: SERIF, fontWeight: 500 }}
          >
            Vuoi un sito così anche
            <br />
            <em style={{ color: C.cream }}>per la tua attività?</em>
          </h2>
          <p
            className="text-[16px] md:text-[17px] leading-[1.8] max-w-2xl mx-auto"
            style={{ fontFamily: SANS, color: "rgba(255,255,255,0.8)" }}
          >
            <strong style={{ color: "#fff" }}>4 Web Lab</strong> realizza siti web per
            pasticcerie, panifici, gastronomie e negozi di quartiere a Padova, in Veneto e
            in tutta Italia. Pacchetto negozi{" "}
            <strong style={{ color: "#fff" }}>da 490€ una tantum</strong>.
          </p>
          <div className="mt-8">
            <Link
              to="/siti-web-per-negozi"
              className="inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase underline"
              style={{ fontFamily: SANS, color: C.cream }}
            >
              Vedi il servizio siti web per negozi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <h3 className="text-[24px] md:text-[28px] mb-7 text-white" style={{ fontFamily: SERIF, fontWeight: 500 }}>
              Parla direttamente con 4 Web Lab.
            </h3>

            <div className="space-y-5 mb-8">
              <a href="tel:+393514656042" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <span className="w-11 h-11 flex items-center justify-center" style={{ border: `1px solid ${C.cream}`, borderRadius: 4 }}>
                  <Phone className="w-4 h-4" style={{ color: C.cream }} />
                </span>
                <span>
                  <span className="block text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.55)" }}>
                    Telefono
                  </span>
                  <span className="block text-[17px] text-white" style={{ fontFamily: SERIF }}>
                    +39 351 465 6042
                  </span>
                </span>
              </a>

              <a
                href="https://wa.me/393514656042"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <span className="w-11 h-11 flex items-center justify-center" style={{ border: `1px solid ${C.cream}`, borderRadius: 4 }}>
                  <MessageCircle className="w-4 h-4" style={{ color: "#25D366" }} />
                </span>
                <span>
                  <span className="block text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.55)" }}>
                    WhatsApp
                  </span>
                  <span className="block text-[17px] text-white" style={{ fontFamily: SERIF }}>
                    Scrivici su WhatsApp
                  </span>
                </span>
              </a>

              <a href="mailto:info@4weblab.it" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <span className="w-11 h-11 flex items-center justify-center" style={{ border: `1px solid ${C.cream}`, borderRadius: 4 }}>
                  <Mail className="w-4 h-4" style={{ color: C.cream }} />
                </span>
                <span>
                  <span className="block text-[10px] tracking-[0.22em] uppercase mb-1" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.55)" }}>
                    Email
                  </span>
                  <span className="block text-[17px] text-white" style={{ fontFamily: SERIF }}>
                    info@4weblab.it
                  </span>
                </span>
              </a>
            </div>

            <div
              className="p-5 text-[12px] leading-[1.7]"
              style={{
                border: `1px dashed rgba(246,227,197,0.55)`,
                color: "rgba(255,255,255,0.7)",
                fontFamily: SANS,
                borderRadius: 4,
              }}
            >
              <strong style={{ color: C.cream }}>Tech demo / demo concept:</strong>{" "}
              “Farina Viva” non è un'attività reale. Il modulo qui accanto invia la richiesta
              direttamente a{" "}
              <Link to="/" className="underline" style={{ color: C.cream }}>4 Web Lab</Link>{" "}
              — non a una pasticceria. Vedi le altre{" "}
              <Link to="/realizzazioni" className="underline" style={{ color: C.cream }}>realizzazioni</Link>.
            </div>
          </div>

          <form onSubmit={onSubmit}>
            {done ? (
              <div
                className="p-10 text-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4 }}
              >
                <CheckCircle2 className="w-8 h-8 mx-auto mb-5" style={{ color: C.cream }} />
                <h3 className="text-[26px] mb-3 text-white" style={{ fontFamily: SERIF, fontWeight: 500 }}>
                  Richiesta ricevuta, grazie.
                </h3>
                <p className="text-[14px] leading-[1.7]" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.7)" }}>
                  Ti ricontattiamo a breve con una proposta su misura per la tua attività.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle} htmlFor="pa-name">Nome completo *</label>
                    <input id="pa-name" name="name" type="text" required style={inputBase} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="pa-email">Email *</label>
                    <input id="pa-email" name="email" type="email" required style={inputBase} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle} htmlFor="pa-phone">Telefono</label>
                    <input id="pa-phone" name="phone" type="tel" style={inputBase} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="pa-activity">Tipo di attività</label>
                    <input
                      id="pa-activity"
                      name="activity"
                      type="text"
                      placeholder="Pasticceria, panificio, gastronomia…"
                      style={inputBase}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="pa-msg">Messaggio</label>
                  <textarea
                    id="pa-msg"
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
                    style={{ accentColor: C.cream }}
                  />
                  <span className="text-[12px] leading-[1.7]" style={{ fontFamily: SANS, color: "rgba(255,255,255,0.65)" }}>
                    Acconsento al trattamento dei dati per essere ricontattato (Art. 6.1.b GDPR).
                    Titolare: 4 Web Lab di Fullin Carlo — P.IVA 05765760284.{" "}
                    <Link to="/privacy" className="underline" style={{ color: C.cream }}>Privacy Policy</Link>.
                  </span>
                </label>

                <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <button
                  type="submit"
                  disabled={submitting || !consent}
                  className="w-full py-5 text-[12px] tracking-[0.22em] uppercase transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: C.cream, color: C.bgDark, fontFamily: SANS, fontWeight: 600, borderRadius: 4 }}
                >
                  {submitting ? "Invio in corso…" : "Richiedi una valutazione gratuita"}
                </button>

                {error && <p className="text-[13px] text-red-300" style={{ fontFamily: SANS }}>{error}</p>}
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/realizzazioni"
            className="inline-flex items-center gap-2 text-base font-semibold hover:underline"
            style={{ fontFamily: SANS, color: C.cream }}
          >
            Torna alla lista delle demo
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
 * Footer scenico
 * ========================================================================= */
const DemoFooter = () => (
  <footer style={{ background: "#120B05", color: "rgba(255,255,255,0.62)" }}>
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="text-[21px] tracking-[0.18em] uppercase mb-5 text-white" style={{ fontFamily: SERIF, fontWeight: 600 }}>
          Farina<span style={{ color: C.terraSoft }}>·</span>Viva
        </div>
        <p className="text-[14px] leading-[1.8] max-w-sm" style={{ fontFamily: SANS }}>
          Demo concept di sito web per pasticcerie, panifici e gastronomie artigianali.
          Realizzato da{" "}
          <Link to="/" className="underline hover:text-white" style={{ color: C.cream }}>4 Web Lab</Link>.
        </p>
        <p className="text-[13px] leading-[1.8] mt-5" style={{ fontFamily: SANS }}>
          Via del Forno 12, Padova (placeholder) — Tel. 049 000 0000 (placeholder)
          <br />
          Orari: mar–dom 7:00–13:30 / 16:00–19:30 (placeholder)
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
          <li>
            <a href="https://wa.me/393514656042" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              WhatsApp
            </a>
          </li>
          <li><Link to="/siti-web-per-negozi" className="hover:text-white">Siti web per negozi</Link></li>
          <li><Link to="/realizzazioni" className="hover:text-white">Altre realizzazioni</Link></li>
        </ul>
      </div>
    </div>
    <div
      className="border-t py-7 text-[12px] text-center px-5"
      style={{ borderColor: "rgba(255,255,255,0.08)", fontFamily: SANS }}
    >
      © {new Date().getFullYear()} Farina Viva — Tech demo realizzata da{" "}
      <Link to="/" className="underline hover:text-white" style={{ color: C.cream }}>4 Web Lab</Link>.
      Brand fittizio a scopo dimostrativo: indirizzo, telefono e orari sono placeholder.
    </div>
  </footer>
);

/* ============================================================================
 * Sticky CTA mobile
 * ========================================================================= */
const StickyMobileCTA = () => (
  <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40" style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.25))" }}>
    <a
      href="#contatti"
      className="flex items-center justify-center gap-2 py-4 text-[12px] tracking-[0.18em] uppercase"
      style={{ background: C.terra, color: C.cream, fontFamily: SANS, fontWeight: 600, borderRadius: 4 }}
    >
      Richiedi il tuo sito <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

/* ============================================================================
 * Page
 * ========================================================================= */
const DemoPasticceriaArtigianale = () => {
  const canonical = "https://4weblab.it/realizzazioni/demo-pasticceria-artigianale";
  const ogImage = "https://4weblab.it/og/demo-pasticceria-artigianale.webp";
  const title = "Sito Web per Pasticcerie e Panifici: Demo Concept";
  const description =
    "Concept demo di sito web per pasticcerie, panifici e gastronomie artigianali: struttura Local SEO, catalogo prodotti e richieste ordini. Realizzato da 4 Web Lab.";

  const creativeLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${canonical}#creativework`,
    name: "Concept di sito web per pasticceria e gastronomia artigianale — by 4 Web Lab",
    headline: "Demo concept: web design per pasticcerie, panifici e gastronomie",
    description:
      "Concept demo (brand fittizio “Farina Viva”) realizzato da 4 Web Lab per mostrare il potenziale di un sito moderno per pasticcerie, panifici e gastronomie artigianali: palette calda, categorie prodotto, servizi, FAQ indicizzabili e CTA di contatto. Contenuti, recensioni e dati di contatto del brand sono fittizi e a scopo dimostrativo.",
    url: canonical,
    image: ogImage,
    inLanguage: "it-IT",
    keywords: [
      "demo sito web pasticceria",
      "sito web panificio",
      "web design gastronomia artigianale",
      "concept sito negozio alimentare",
      "realizzazione siti web negozi",
      "local seo pasticceria",
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
      { "@type": "ListItem", position: 3, name: "Demo concept Farina Viva — pasticceria artigianale" },
    ],
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="4 Web Lab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="article" />
        <meta property="article:author" content="4 Web Lab" />
        <meta property="article:section" content="Realizzazioni" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <link rel="preload" as="image" href={heroImg} fetchPriority="high" />

        <script type="application/ld+json">{JSON.stringify(creativeLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageLd)}</script>
      </Helmet>

      <div style={{ background: C.bg, color: C.ink, fontFamily: SANS }}>
        <DemoHeader />
        <main>
          <Hero />
          <Filosofia />
          <Specialita />
          <Servizi />
          <Gallery />
          <Testimonianze />
          <Faq />
          <CTAFinale />
        </main>
        <DemoFooter />
        <StickyMobileCTA />
      </div>
    </>
  );
};

export default DemoPasticceriaArtigianale;
