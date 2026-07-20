import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { W } from "../main.mjs";
import { Leaf, ArrowRight, ChevronDown, X, Instagram, Sparkles, CheckCircle2, Phone, MessageCircle, Mail, Heart, Truck, Flower2, CalendarHeart } from "lucide-react";
import "vite-react-ssg";
import "@tanstack/react-query";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "next-themes";
import "sonner";
import "motion-dom";
import "motion-utils";
import "prop-types";
import "react-fast-compare";
import "invariant";
import "shallowequal";
const heroImg = "/assets/flower-hero-Dv0F8T8w.webp";
const comp1 = "/assets/flower-composition-1-c7wm3Cbt.webp";
const comp2 = "/assets/flower-composition-2-wjXQvE3L.webp";
const comp3 = "/assets/flower-composition-3-CEpqZzez.webp";
const weddingImg = "/assets/flower-wedding-CVHG1OlW.webp";
const eventImg = "/assets/flower-event-DD7m-awQ.webp";
const detailImg = "/assets/flower-atelier-detail-BxdEzhYQ.webp";
const shopImg = "/assets/flower-shop-interior-hAsW-O8C.webp";
const C = {
  bg: "#F5F0E6",
  // cream
  bgAlt: "#EAE2D2",
  // warm beige
  bgDark: "#14140F",
  // soft black
  ink: "#1B1B14",
  // text primary
  inkSoft: "#5A5648",
  // muted warm gray
  line: "#DDD3BE",
  green: "#2F4A33",
  // botanical green
  greenSoft: "#5A7B5E",
  gold: "#B79363",
  // desaturated gold
  goldSoft: "#D8BC8C"
};
const SERIF = `'Cormorant Garamond', 'Playfair Display', Georgia, serif`;
const SANS = `'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`;
const NAV = [
  { id: "home", label: "Home" },
  { id: "atelier", label: "Atelier" },
  { id: "composizioni", label: "Composizioni" },
  { id: "eventi", label: "Eventi" },
  { id: "gallery", label: "Gallery" },
  { id: "contatti", label: "Contatti" }
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
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      style: {
        background: scrolled ? "rgba(245,240,230,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[78px] flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo("home"),
              className: "flex items-center gap-2",
              "aria-label": "Verdefiore Atelier — torna alla home",
              children: /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "text-[22px] md:text-[26px] tracking-[0.16em] uppercase",
                  style: {
                    fontFamily: SERIF,
                    color: scrolled ? C.green : "#fff",
                    fontWeight: 500,
                    letterSpacing: "0.18em"
                  },
                  children: [
                    "Verdefiore",
                    /* @__PURE__ */ jsx("span", { style: { color: C.gold }, children: "·" }),
                    "Atelier"
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-9", children: NAV.map((n) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo(n.id),
              className: "text-[13px] tracking-[0.12em] uppercase transition-colors",
              style: {
                fontFamily: SANS,
                color: scrolled ? C.ink : "rgba(255,255,255,0.88)",
                opacity: 0.9
              },
              children: n.label
            },
            n.id
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo("contatti"),
              className: "px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase transition-all hover:scale-[1.02]",
              style: {
                fontFamily: SANS,
                background: scrolled ? C.green : "rgba(255,255,255,0.92)",
                color: scrolled ? C.bg : C.green,
                borderRadius: 2,
                fontWeight: 500
              },
              children: "Richiedi informazioni"
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5",
              "aria-label": "Apri menu",
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "block w-6 h-px transition-transform",
                    style: {
                      background: scrolled || open ? C.ink : "#fff",
                      transform: open ? "translateY(6px) rotate(45deg)" : "none"
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "block w-6 h-px transition-opacity",
                    style: { background: scrolled || open ? C.ink : "#fff", opacity: open ? 0 : 1 }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "block w-6 h-px transition-transform",
                    style: {
                      background: scrolled || open ? C.ink : "#fff",
                      transform: open ? "translateY(-6px) rotate(-45deg)" : "none"
                    }
                  }
                )
              ]
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t", style: { background: C.bg, borderColor: C.line }, children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-6 flex flex-col gap-1", children: [
          NAV.map((n) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo(n.id),
              className: "text-left py-3 text-[15px] tracking-[0.1em] uppercase border-b",
              style: { fontFamily: SANS, color: C.ink, borderColor: C.line },
              children: n.label
            },
            n.id
          )),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo("contatti"),
              className: "mt-4 px-5 py-3 text-[12px] tracking-[0.18em] uppercase",
              style: { background: C.green, color: C.bg, fontFamily: SANS },
              children: "Richiedi informazioni"
            }
          )
        ] }) })
      ]
    }
  );
};
const Hero = () => /* @__PURE__ */ jsxs("section", { id: "home", className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden", children: [
  /* @__PURE__ */ jsx(
    "img",
    {
      src: heroImg,
      alt: "Atelier di fiori botanici premium con composizioni floreali fresche, eucalipto e botaniche essiccate — concept sito web per negozi 4 Web Lab",
      width: 1920,
      height: 1080,
      fetchPriority: "high",
      decoding: "async",
      className: "absolute inset-0 w-full h-full object-cover"
    }
  ),
  /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute inset-0",
      style: {
        background: "linear-gradient(180deg, rgba(20,20,15,0.45) 0%, rgba(20,20,15,0.15) 35%, rgba(20,20,15,0.75) 100%)"
      }
    }
  ),
  /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none",
      style: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }
    }
  ),
  /* @__PURE__ */ jsx("div", { className: "relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl animate-[fadeUp_1s_ease-out]", children: [
    /* @__PURE__ */ jsxs(
      "span",
      {
        className: "inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase mb-6",
        style: { fontFamily: SANS, color: C.goldSoft },
        children: [
          /* @__PURE__ */ jsx(Leaf, { className: "w-3.5 h-3.5" }),
          " Demo concept · 4 Web Lab"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "h1",
      {
        className: "text-[44px] sm:text-[60px] md:text-[80px] leading-[0.98] mb-6",
        style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Flower Atelier &",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", color: C.goldSoft }, children: "Botanical Design" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Sito web per negozio (fioreria) — concept realizzato da 4 Web Lab, agenzia web di Padova" }),
    /* @__PURE__ */ jsxs(
      "p",
      {
        className: "text-[15px] md:text-[17px] max-w-xl leading-[1.7] mb-9",
        style: { fontFamily: SANS, color: "rgba(255,255,255,0.88)" },
        children: [
          "Una demo concept realizzata da",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/", className: "underline", style: { color: C.goldSoft }, children: "4 Web Lab" }),
          " ",
          "(agenzia web di Padova) per mostrare il potenziale di un",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-negozi", className: "underline", style: { color: C.goldSoft }, children: "sito web per negozi" }),
          " ",
          "moderno: design immersivo, struttura SEO e cura mobile-first."
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mb-10", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#contatti",
          className: "inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:scale-[1.02]",
          style: { background: C.bg, color: C.green, fontFamily: SANS, borderRadius: 2, fontWeight: 600 },
          children: [
            "Richiedi il tuo sito ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#atelier",
          className: "inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:bg-white/10",
          style: {
            fontFamily: SANS,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.45)",
            borderRadius: 2
          },
          children: "Scopri la demo"
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.3em] uppercase text-white", style: { fontFamily: SANS }, children: "Scroll" }),
    /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 text-white animate-bounce" })
  ] }),
  /* @__PURE__ */ jsx("style", { children: `
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    ` })
] });
const Atelier = () => /* @__PURE__ */ jsx("section", { id: "atelier", className: "py-24 md:py-36", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 md:gap-16 items-center", children: [
  /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 md:order-2 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: detailImg,
        alt: "Mani di una florist compongono un bouquet artigianale con forbici e petali sul tavolo di lavoro",
        loading: "lazy",
        width: 1280,
        height: 1600,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "hidden md:block absolute -bottom-8 -left-8 w-40 h-40 border",
        style: { borderColor: C.gold },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "hidden md:flex absolute -top-6 -right-6 w-28 h-28 items-center justify-center text-center",
        style: { background: C.bg, border: `1px solid ${C.line}`, borderRadius: "50%" },
        children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Leaf, { className: "w-5 h-5 mx-auto mb-1", style: { color: C.green } }),
          /* @__PURE__ */ jsxs("div", { className: "text-[10px] tracking-[0.2em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: [
            "Botanical",
            /* @__PURE__ */ jsx("br", {}),
            "Atelier"
          ] })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 md:order-1", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "text-[11px] tracking-[0.3em] uppercase block mb-6",
        style: { fontFamily: SANS, color: C.green },
        children: "La filosofia"
      }
    ),
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-7",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: [
          "Fiori che raccontano,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: { color: C.green }, children: "spazi che respirano." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.85] mb-5", style: { fontFamily: SANS, color: C.inkSoft }, children: "Verdefiore è un atelier botanico immaginato come scenario per questa demo: un negozio di paese che diventa boutique, dove ogni composizione nasce dal dialogo tra forme naturali, stagioni e luce." }),
    /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.85]", style: { fontFamily: SANS, color: C.inkSoft }, children: "L'obiettivo della pagina è dimostrare come un'attività locale possa comunicare cura, identità e qualità attraverso un sito moderno, veloce e curato in ogni dettaglio." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6 mt-12 pt-10 border-t", style: { borderColor: C.line }, children: [
      { n: "100%", l: "Mobile-first" },
      { n: "<1s", l: "Tempo di caricamento" },
      { n: "SEO", l: "Strutturata e pulita" },
      { n: "GDPR", l: "Cookie e consensi" }
    ].map((s, i) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "text-[30px] md:text-[40px] leading-none mb-2",
          style: { fontFamily: SERIF, color: C.green, fontWeight: 400 },
          children: s.n
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: s.l })
    ] }, i)) })
  ] })
] }) });
const COMPS = [
  {
    name: "Bouquet Primavera",
    img: comp1,
    desc: "Peonie, rose e eucalipto avvolti in carta cream: leggerezza e dolcezza romantica.",
    alt: "Bouquet di peonie rosa, rose e eucalipto avvolto in carta cream"
  },
  {
    name: "Composizione Minimal",
    img: comp2,
    desc: "Anemoni bianchi, pampas e rami sottili in vaso ceramico: geometria e respiro.",
    alt: "Composizione moderna con anemoni bianchi e pampas in vaso ceramico"
  },
  {
    name: "Bouquet Garden",
    img: comp3,
    desc: "Dahlia bordeaux, rose da giardino e fogliame fluente per un effetto materico e profondo.",
    alt: "Bouquet garden-style con dahlia bordeaux, rose e foglie"
  }
];
const Composizioni = () => /* @__PURE__ */ jsx("section", { id: "composizioni", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-16 md:mb-20", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: "Le composizioni" }),
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-5",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: "Tre interpretazioni della natura."
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Ogni proposta racconta un mood diverso: nel sito reale di un negozio questa griglia diventa il cuore della comunicazione visiva." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: COMPS.map((r, i) => /* @__PURE__ */ jsxs(
    "article",
    {
      className: "group flex flex-col bg-white transition-all duration-500 hover:-translate-y-1",
      style: { borderRadius: 2, boxShadow: "0 1px 0 rgba(0,0,0,0.04)" },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: r.img,
              alt: r.alt,
              loading: "lazy",
              width: 1280,
              height: 1600,
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              style: {
                background: "linear-gradient(180deg, transparent 50%, rgba(20,20,15,0.45) 100%)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-7 md:p-9 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-[24px] md:text-[28px] leading-tight mb-3",
              style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 },
              children: r.name
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: r.desc })
        ] })
      ]
    },
    i
  )) })
] }) });
const Eventi = () => /* @__PURE__ */ jsx("section", { id: "eventi", className: "py-24 md:py-36", style: { background: C.bgDark }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-stretch", children: [
  /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "aspect-[16/11] overflow-hidden", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: weddingImg,
        alt: "Arco floreale per matrimonio con rose bianche, peonie e verde fluente al tramonto",
        loading: "lazy",
        width: 1600,
        height: 1200,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute -bottom-6 -right-6 w-44 h-60 overflow-hidden", style: { borderRadius: 2, border: `4px solid ${C.bgDark}` }, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: eventImg,
        alt: "Centrotavola elegante con fiori di stagione, candele e cristalleria",
        loading: "lazy",
        width: 800,
        height: 1e3,
        className: "w-full h-full object-cover"
      }
    ) })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 flex flex-col justify-center", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.goldSoft }, children: "Eventi · Matrimoni · Allestimenti" }),
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-7 text-white",
        style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Flower styling",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: { color: C.goldSoft }, children: "per i momenti che restano." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.85] mb-8", style: { fontFamily: SANS, color: "rgba(255,255,255,0.72)" }, children: "Matrimoni intimi, eventi privati, allestimenti per spazi commerciali: ogni progetto nasce su misura, dalla scelta dei materiali alla composizione finale. Questa sezione mostra come un sito può raccontare un servizio premium senza diventare un catalogo." }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#contatti",
        className: "self-start inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:scale-[1.02]",
        style: { background: C.gold, color: C.bgDark, fontFamily: SANS, borderRadius: 2, fontWeight: 600 },
        children: [
          "Richiedi una consulenza ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ]
      }
    )
  ] })
] }) });
const SERVICES = [
  { i: Truck, t: "Consegna locale", d: "Bouquet e composizioni consegnate con cura nel raggio cittadino, in giornata." },
  { i: Flower2, t: "Bouquet personalizzati", d: "Composizioni su misura per occasioni speciali, dialogando con il cliente." },
  { i: Leaf, t: "Composizioni stagionali", d: "Solo materiale botanico fresco e selezionato, secondo la stagione." },
  { i: CalendarHeart, t: "Consulenza eventi", d: "Sopralluogo, mood board e allestimento completo per matrimoni ed eventi privati." }
];
const Servizi = () => /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: "I servizi" }),
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: "text-[36px] md:text-[52px] leading-[1.05]",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: "Cura artigianale, in ogni dettaglio."
      }
    )
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px", style: { background: C.line }, children: SERVICES.map((s, i) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "p-9 md:p-10 flex flex-col items-center text-center transition-colors duration-500",
      style: { background: C.bg },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-12 h-12 rounded-full flex items-center justify-center mb-5",
            style: { background: "transparent", border: `1px solid ${C.green}` },
            children: /* @__PURE__ */ jsx(s.i, { className: "w-5 h-5", style: { color: C.green } })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-[13px] tracking-[0.12em] uppercase mb-3", style: { fontFamily: SANS, color: C.ink, fontWeight: 500 }, children: s.t }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: s.d })
      ]
    },
    i
  )) })
] }) });
const GALLERY = [
  { src: heroImg, alt: "Atelier botanico con composizioni di rose e eucalipto", span: "row-span-2" },
  { src: comp1, alt: "Bouquet di peonie e rose in carta cream", span: "" },
  { src: shopImg, alt: "Interno del negozio di fiori con tavoli espositivi", span: "" },
  { src: weddingImg, alt: "Arco floreale per matrimonio", span: "row-span-2" },
  { src: comp2, alt: "Composizione minimale con anemoni e pampas", span: "" },
  { src: detailImg, alt: "Dettaglio delle mani della florist al lavoro", span: "" }
];
const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  return /* @__PURE__ */ jsxs("section", { id: "gallery", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: "Gallery" }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "text-[36px] md:text-[56px] leading-[1.05]",
              style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
              children: "Dettagli e atmosfere."
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-[15px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Un layout editoriale per mostrare composizioni, ambienti del negozio e momenti dal vivo: nel sito di un'attività locale è il modo migliore per costruire fiducia visiva." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4", children: GALLERY.map((g, i) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setLightbox(i),
          className: `group relative overflow-hidden ${g.span}`,
          style: { borderRadius: 2 },
          "aria-label": `Apri immagine: ${g.alt}`,
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: g.src,
                alt: g.alt,
                loading: "lazy",
                className: "w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                style: { background: "rgba(20,20,15,0.25)" }
              }
            )
          ]
        },
        i
      )) })
    ] }),
    lightbox !== null && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-[fadeUp_0.3s_ease-out]",
        style: { background: "rgba(20,20,15,0.94)" },
        onClick: () => setLightbox(null),
        role: "dialog",
        "aria-modal": "true",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setLightbox(null),
              className: "absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-white/80 hover:text-white",
              "aria-label": "Chiudi",
              children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" })
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: GALLERY[lightbox].src,
              alt: GALLERY[lightbox].alt,
              className: "max-w-full max-h-full object-contain",
              onClick: (e) => e.stopPropagation()
            }
          )
        ]
      }
    )
  ] });
};
const FEED = [comp1, comp2, comp3, detailImg, eventImg, shopImg];
const Feed = () => /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
    /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: [
      /* @__PURE__ */ jsx(Instagram, { className: "w-3.5 h-3.5" }),
      " Social feed (demo)"
    ] }),
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: "text-[34px] md:text-[48px] leading-[1.05]",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: "Un assaggio visivo dell'atelier."
      }
    )
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3", children: FEED.map((src, i) => /* @__PURE__ */ jsx("div", { className: "aspect-square overflow-hidden group", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt: `Scatto demo dal feed visuale dell'atelier floreale (${i + 1}/6)`,
      loading: "lazy",
      className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
    }
  ) }, i)) })
] }) });
const TESTI = [
  { t: "Esempio dimostrativo di come una testimonianza cliente può essere presentata in modo elegante e leggibile.", n: "Cliente demo · A." },
  { t: "Testo placeholder usato per mostrare la spaziatura tipografica e l'impatto visivo di una citazione.", n: "Cliente demo · B." },
  { t: "Contenuto fittizio dichiarato: questa sezione, nel sito reale, ospiterà recensioni verificate del negozio.", n: "Cliente demo · C." }
];
const Testimonials = () => /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: "Testimonianze (demo)" }),
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: "text-[34px] md:text-[48px] leading-[1.05]",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: "Come parlare dei propri clienti."
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Contenuti dichiaratamente fittizi: nel sito reale di un negozio queste card ospiterebbero recensioni verificate o Google Reviews." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: TESTI.map((r, i) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "p-8 md:p-10 flex flex-col",
      style: { background: C.bg, border: `1px solid ${C.line}`, borderRadius: 2 },
      children: [
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: "text-[17px] leading-[1.65] mb-7 flex-1",
            style: { fontFamily: SERIF, color: C.ink, fontStyle: "italic", fontWeight: 400 },
            children: [
              '"',
              r.t,
              '"'
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pt-5 border-t", style: { borderColor: C.line }, children: /* @__PURE__ */ jsx("div", { className: "text-[13px] tracking-[0.08em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: r.n }) })
      ]
    },
    i
  )) })
] }) });
const CTAFinale = () => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);
  const [consent, setConsent] = useState(false);
  const onSubmit = async (e) => {
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
  const inputBase = {
    fontFamily: SANS,
    background: "transparent",
    color: "#fff",
    border: "none",
    borderBottom: `1px solid rgba(255,255,255,0.28)`,
    padding: "14px 2px",
    width: "100%",
    fontSize: 15,
    outline: "none"
  };
  const labelStyle = {
    fontFamily: SANS,
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.55)",
    marginBottom: 6,
    display: "block"
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contatti",
      className: "relative overflow-hidden py-24 md:py-36",
      style: {
        background: `linear-gradient(135deg, ${C.green} 0%, #1F3322 60%, ${C.bgDark} 100%)`
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-[0.07] pointer-events-none",
            style: {
              backgroundImage: "radial-gradient(circle at 20% 20%, rgba(216,188,140,0.45) 0px, transparent 35%), radial-gradient(circle at 80% 70%, rgba(216,188,140,0.35) 0px, transparent 40%)"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
            /* @__PURE__ */ jsxs(
              "span",
              {
                className: "inline-flex items-center gap-2 px-4 py-1.5 text-[11px] tracking-[0.28em] uppercase mb-7",
                style: {
                  fontFamily: SANS,
                  color: C.goldSoft,
                  border: `1px solid ${C.goldSoft}`,
                  borderRadius: 999
                },
                children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                  " Demo concept · contatto diretto con 4 Web Lab"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "h2",
              {
                className: "text-[36px] sm:text-[48px] md:text-[64px] leading-[1.02] text-white mb-8",
                style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
                children: [
                  "Vuoi un sito professionale",
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("em", { style: { color: C.goldSoft }, children: "anche per il tuo negozio?" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "text-[16px] md:text-[17px] leading-[1.8] max-w-2xl mx-auto", style: { fontFamily: SANS, color: "rgba(255,255,255,0.78)" }, children: [
              /* @__PURE__ */ jsx("strong", { style: { color: "#fff", fontWeight: 600 }, children: "4 Web Lab" }),
              " realizza siti web per negozi, attività locali e professionisti a Padova, in Veneto e in tutta Italia. Soluzioni moderne ",
              /* @__PURE__ */ jsx("strong", { style: { color: "#fff" }, children: "a partire da 199€" }),
              ", progettate per essere veloci, curate e ottimizzate anche da mobile."
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-x-7 gap-y-3 justify-center mt-9", style: { fontFamily: SANS }, children: ["Design moderno", "Mobile-first", "SEO base inclusa", "Supporto diretto"].map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[13px]", style: { color: "rgba(255,255,255,0.85)" }, children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4", style: { color: C.goldSoft } }),
              b
            ] }, b)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-14 lg:gap-20 items-start", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-[24px] md:text-[28px] mb-7 text-white",
                  style: { fontFamily: SERIF, fontWeight: 400 },
                  children: "Parla direttamente con 4 Web Lab."
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "space-y-5 mb-8", children: [
                /* @__PURE__ */ jsxs("a", { href: "tel:+393514656042", className: "flex items-center gap-4 group transition-opacity hover:opacity-80", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-11 h-11 flex items-center justify-center",
                      style: { border: `1px solid ${C.goldSoft}`, borderRadius: 2 },
                      children: /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4", style: { color: C.goldSoft } })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.55)" }, children: "Telefono" }),
                    /* @__PURE__ */ jsx("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "+39 351 465 6042" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://wa.me/393514656042",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-4 group transition-opacity hover:opacity-80",
                    children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "w-11 h-11 flex items-center justify-center",
                          style: { border: `1px solid ${C.goldSoft}`, borderRadius: 2 },
                          children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4", style: { color: "#25D366" } })
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.55)" }, children: "WhatsApp" }),
                        /* @__PURE__ */ jsx("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "Scrivici subito su WhatsApp" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("a", { href: "mailto:info@4weblab.it", className: "flex items-center gap-4 group transition-opacity hover:opacity-80", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-11 h-11 flex items-center justify-center",
                      style: { border: `1px solid ${C.goldSoft}`, borderRadius: 2 },
                      children: /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4", style: { color: C.goldSoft } })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.55)" }, children: "Email" }),
                    /* @__PURE__ */ jsx("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "info@4weblab.it" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "p-5 text-[12px] leading-[1.7]",
                  style: {
                    border: `1px dashed rgba(216,188,140,0.5)`,
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: SANS,
                    borderRadius: 2
                  },
                  children: [
                    /* @__PURE__ */ jsx("strong", { style: { color: C.goldSoft, fontWeight: 600 }, children: "Importante:" }),
                    " ",
                    '"Verdefiore Atelier" è una demo concept. Il contatto inviato da questa pagina arriva direttamente a',
                    " ",
                    /* @__PURE__ */ jsx(Link, { to: "/", className: "underline", style: { color: C.goldSoft }, children: "4 Web Lab" }),
                    " ",
                    "— non a una fioreria reale. Vedi le altre",
                    " ",
                    /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "underline", style: { color: C.goldSoft }, children: "realizzazioni" }),
                    "."
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("form", { onSubmit, children: done ? /* @__PURE__ */ jsxs(
              "div",
              {
                className: "p-10 text-center",
                style: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 2 },
                children: [
                  /* @__PURE__ */ jsx(Heart, { className: "w-8 h-8 mx-auto mb-5", style: { color: C.goldSoft } }),
                  /* @__PURE__ */ jsx("h3", { className: "text-[26px] mb-3 text-white", style: { fontFamily: SERIF, fontWeight: 400 }, children: "Richiesta ricevuta, grazie." }),
                  /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: "rgba(255,255,255,0.65)" }, children: "Ti ricontatteremo a breve con una proposta su misura per il tuo negozio." })
                ]
              }
            ) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "fa-name", children: "Nome completo *" }),
                  /* @__PURE__ */ jsx("input", { id: "fa-name", name: "name", type: "text", required: true, style: inputBase })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "fa-email", children: "Email *" }),
                  /* @__PURE__ */ jsx("input", { id: "fa-email", name: "email", type: "email", required: true, style: inputBase })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "fa-phone", children: "Telefono" }),
                  /* @__PURE__ */ jsx("input", { id: "fa-phone", name: "phone", type: "tel", style: inputBase })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "fa-activity", children: "Tipo di attività" }),
                  /* @__PURE__ */ jsx("input", { id: "fa-activity", name: "activity", type: "text", placeholder: "Negozio, studio, atelier…", style: inputBase })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "fa-msg", children: "Messaggio" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "fa-msg",
                    name: "message",
                    rows: 4,
                    style: { ...inputBase, resize: "vertical" },
                    placeholder: "Raccontaci la tua attività e cosa vorresti ottenere dal sito…"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "flex gap-3 items-start cursor-pointer pt-2", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: consent,
                    onChange: (e) => setConsent(e.target.checked),
                    className: "mt-1",
                    style: { accentColor: C.goldSoft }
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-[12px] leading-[1.7]", style: { fontFamily: SANS, color: "rgba(255,255,255,0.6)" }, children: [
                  "Acconsento al trattamento dei dati per essere ricontattato (Art. 6.1.b GDPR). Titolare: 4 Web Lab di Fullin Carlo — P.IVA 05765760284.",
                  " ",
                  /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "underline", style: { color: C.goldSoft }, children: "Privacy Policy" }),
                  "."
                ] })
              ] }),
              /* @__PURE__ */ jsx("input", { type: "text", name: "botcheck", className: "hidden", tabIndex: -1, autoComplete: "off" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: submitting || !consent,
                  className: "w-full py-5 text-[12px] tracking-[0.22em] uppercase transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed",
                  style: {
                    background: C.goldSoft,
                    color: C.bgDark,
                    fontFamily: SANS,
                    fontWeight: 600,
                    borderRadius: 2
                  },
                  children: submitting ? "Invio in corso…" : "Richiedi una valutazione gratuita"
                }
              ),
              error && /* @__PURE__ */ jsx("p", { className: "text-[13px] text-red-300", style: { fontFamily: SANS }, children: error })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-16 md:mt-20 text-center", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/realizzazioni",
              className: "inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline",
              style: { fontFamily: SANS, color: C.goldSoft },
              children: "Torna alla lista delle demo"
            }
          ) })
        ] })
      ]
    }
  );
};
const DemoFooter = () => /* @__PURE__ */ jsxs("footer", { style: { background: "#0D0D0A", color: "rgba(255,255,255,0.6)" }, children: [
  /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-4 gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "text-[22px] tracking-[0.18em] uppercase mb-5 text-white",
          style: { fontFamily: SERIF, fontWeight: 500 },
          children: [
            "Verdefiore",
            /* @__PURE__ */ jsx("span", { style: { color: C.goldSoft }, children: "·" }),
            "Atelier"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "text-[14px] leading-[1.8] max-w-sm", style: { fontFamily: SANS }, children: [
        "Demo concept di sito web premium per negozi e attività locali. Realizzato da ",
        /* @__PURE__ */ jsx(Link, { to: "/", className: "underline hover:text-white", style: { color: C.goldSoft }, children: "4 Web Lab" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-white mb-4", style: { fontFamily: SANS }, children: "Naviga" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${n.id}`, className: "hover:text-white transition-colors", children: n.label }) }, n.id)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-white mb-4", style: { fontFamily: SANS }, children: "Contatti 4 Web Lab" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+393514656042", className: "hover:text-white", children: "+39 351 465 6042" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@4weblab.it", className: "hover:text-white", children: "info@4weblab.it" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/393514656042", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white", children: "WhatsApp" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-negozi", className: "hover:text-white", children: "Siti web per negozi" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "hover:text-white", children: "Altre realizzazioni" }) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxs(
    "div",
    {
      className: "border-t py-7 text-[12px] text-center",
      style: { borderColor: "rgba(255,255,255,0.08)", fontFamily: SANS },
      children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Verdefiore Atelier — Tech demo realizzata da",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/", className: "underline hover:text-white", style: { color: C.goldSoft }, children: "4 Web Lab" }),
        ". Brand fittizio a scopo dimostrativo."
      ]
    }
  )
] });
const StickyMobileCTA = () => /* @__PURE__ */ jsx(
  "div",
  {
    className: "lg:hidden fixed bottom-4 left-4 right-4 z-40",
    style: { filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.25))" },
    children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#contatti",
        className: "flex items-center justify-center gap-2 py-3.5 text-[12px] tracking-[0.22em] uppercase",
        style: { background: C.green, color: C.bg, fontFamily: SANS, borderRadius: 2 },
        children: [
          "Richiedi il tuo sito ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ]
      }
    )
  }
);
const DemoFlowerAtelier = () => {
  const canonical = "https://4weblab.it/realizzazioni/demo-flower-atelier";
  const creativeLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${canonical}#creativework`,
    name: "Concept di sito web premium per negozio / fioreria — by 4 Web Lab",
    headline: "Demo concept: web design per negozi e attività locali",
    description: "Concept project realizzato da 4 Web Lab per mostrare il potenziale di un sito moderno per negozi, fiorerie e attività locali: design botanico premium, struttura SEO ordinata e ottimizzazione mobile-first.",
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
      "siti web per negozi moderni"
    ],
    author: { "@id": "https://4weblab.it/#business" },
    creator: { "@id": "https://4weblab.it/#business" },
    producer: { "@id": "https://4weblab.it/#business" },
    publisher: { "@id": "https://4weblab.it/#business" }
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
        item: canonical
      }
    ]
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
    inLanguage: "it-IT"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(W, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sito Web per Negozio (Fioreria) · Demo Padova | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Demo realizzata da 4 Web Lab, agenzia web di Padova specializzata in siti web per negozi e attività locali. Pacchetto una tantum da 199€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "article:author", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "article:section", content: "Realizzazioni" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Sito Web per Negozio (Fioreria) · Demo Padova | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Demo di sito web per negozi realizzata da 4 Web Lab, agenzia web di Padova. Pacchetto una tantum da 199€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og/flower-atelier-demo.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Sito Web per Negozio (Fioreria) · Demo Padova | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Demo di sito web per negozi realizzata da 4 Web Lab, agenzia web di Padova. Da 199€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og/flower-atelier-demo.webp" }),
      /* @__PURE__ */ jsx("link", { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap",
          rel: "stylesheet"
        }
      ),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(creativeLd) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(webPageLd) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { background: C.bg, color: C.ink, fontFamily: SANS }, children: [
      /* @__PURE__ */ jsx(DemoHeader, {}),
      /* @__PURE__ */ jsxs("main", { children: [
        /* @__PURE__ */ jsx(Hero, {}),
        /* @__PURE__ */ jsx(Atelier, {}),
        /* @__PURE__ */ jsx(Composizioni, {}),
        /* @__PURE__ */ jsx(Eventi, {}),
        /* @__PURE__ */ jsx(Servizi, {}),
        /* @__PURE__ */ jsx(Gallery, {}),
        /* @__PURE__ */ jsx(Feed, {}),
        /* @__PURE__ */ jsx(Testimonials, {}),
        /* @__PURE__ */ jsx(CTAFinale, {})
      ] }),
      /* @__PURE__ */ jsx(DemoFooter, {}),
      /* @__PURE__ */ jsx(StickyMobileCTA, {})
    ] })
  ] });
};
export {
  DemoFlowerAtelier as default
};
