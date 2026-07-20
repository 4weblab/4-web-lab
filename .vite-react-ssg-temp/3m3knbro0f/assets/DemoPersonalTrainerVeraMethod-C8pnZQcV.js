import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { H as Helmet } from "../main.mjs";
import { ArrowLeft, Sparkles, Dumbbell, ArrowRight, Award, ChevronDown, CheckCircle2, Quote, Instagram, Phone, MessageCircle, Mail, Heart, Brain, Minus, Plus } from "lucide-react";
import { h as heroImg } from "./vera-method-hero-DK5OfB24.js";
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
import "react-fast-compare";
import "invariant";
import "shallowequal";
const coachingImg = "/assets/vera-method-coaching-5EPY8TbO.webp";
const groupImg = "/assets/vera-method-group-Bhv2R7Vr.webp";
const portraitImg = "/assets/vera-method-portrait-r_H8XjGN.webp";
const detailImg = "/assets/vera-method-detail-WeiEgMDI.webp";
const C = {
  bg: "#141416",
  // anthracite deep
  bgAlt: "#1c1c20",
  // surface alt
  bgSoft: "#23232a",
  // card
  line: "rgba(255,255,255,0.08)",
  ink: "#f5f1ec",
  // primary text
  inkSoft: "rgba(245,241,236,0.66)",
  inkMute: "rgba(245,241,236,0.45)",
  coral: "#ff6b5b",
  coralSoft: "#ff8a7d",
  gold: "#d9b27a"
};
const SERIF = `'Fraunces', 'Cormorant Garamond', Georgia, serif`;
const SANS = `'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`;
const NAV = [
  { id: "home", label: "Home" },
  { id: "metodo", label: "Metodo" },
  { id: "programmi", label: "Programmi" },
  { id: "risultati", label: "Risultati" },
  { id: "chi-sono", label: "Chi sono" },
  { id: "faq", label: "FAQ" },
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
        background: scrolled ? "rgba(20,20,22,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[80px] flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo("home"),
              className: "flex items-center gap-2",
              "aria-label": "Vera Method — torna alla home",
              children: /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "text-[20px] md:text-[24px] tracking-[0.16em] uppercase",
                  style: { fontFamily: SERIF, color: C.ink, fontWeight: 500, letterSpacing: "0.18em" },
                  children: [
                    "Vera",
                    /* @__PURE__ */ jsx("span", { style: { color: C.coral }, children: "·" }),
                    "Method"
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-8", children: NAV.map((n) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo(n.id),
              className: "text-[12px] tracking-[0.18em] uppercase transition-colors hover:opacity-100",
              style: { fontFamily: SANS, color: C.inkSoft },
              children: n.label
            },
            n.id
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo("contatti"),
              className: "px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase transition-all hover:scale-[1.03]",
              style: {
                fontFamily: SANS,
                background: C.coral,
                color: C.bg,
                borderRadius: 999,
                fontWeight: 600
              },
              children: "Prenota consulenza"
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5",
              "aria-label": "Apri menu",
              children: [
                /* @__PURE__ */ jsx("span", { className: "block w-6 h-px transition-transform", style: { background: C.ink, transform: open ? "translateY(6px) rotate(45deg)" : "none" } }),
                /* @__PURE__ */ jsx("span", { className: "block w-6 h-px transition-opacity", style: { background: C.ink, opacity: open ? 0 : 1 } }),
                /* @__PURE__ */ jsx("span", { className: "block w-6 h-px transition-transform", style: { background: C.ink, transform: open ? "translateY(-6px) rotate(-45deg)" : "none" } })
              ]
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t", style: { background: C.bg, borderColor: C.line }, children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-6 flex flex-col gap-1", children: [
          NAV.map((n) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo(n.id),
              className: "text-left py-3 text-[14px] tracking-[0.12em] uppercase border-b",
              style: { fontFamily: SANS, color: C.ink, borderColor: C.line },
              children: n.label
            },
            n.id
          )),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo("contatti"),
              className: "mt-4 px-5 py-3 text-[11px] tracking-[0.22em] uppercase",
              style: { background: C.coral, color: C.bg, fontFamily: SANS, borderRadius: 999, fontWeight: 600 },
              children: "Prenota consulenza"
            }
          )
        ] }) })
      ]
    }
  );
};
const BackBar = () => /* @__PURE__ */ jsx("div", { className: "pt-[68px] md:pt-[80px]", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between border-b", style: { borderColor: C.line }, children: [
  /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/realizzazioni",
      className: "inline-flex items-center gap-2 text-[11px] md:text-[12px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70",
      style: { fontFamily: SANS, color: C.inkSoft },
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
        "Torna alle Realizzazioni"
      ]
    }
  ),
  /* @__PURE__ */ jsxs(
    "span",
    {
      className: "hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase",
      style: { fontFamily: SANS, color: C.inkMute },
      children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5", style: { color: C.coral } }),
        "Demo concept · 4 Web Lab"
      ]
    }
  )
] }) });
const Hero = () => /* @__PURE__ */ jsxs("section", { id: "home", className: "relative overflow-hidden", style: { background: C.bg }, children: [
  /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        "span",
        {
          className: "inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase mb-7",
          style: { fontFamily: SANS, color: C.coral },
          children: [
            /* @__PURE__ */ jsx(Dumbbell, { className: "w-3.5 h-3.5" }),
            " Personal Training · Padova"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "h1",
        {
          className: "text-[44px] sm:text-[56px] md:text-[72px] leading-[0.98] mb-7",
          style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.02em" },
          children: [
            "Il movimento come",
            " ",
            /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", color: C.coral }, children: "atto di cura" }),
            ".",
            /* @__PURE__ */ jsx("br", {}),
            "Verso una nuova versione di te."
          ]
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Vera Method · Giulia Conti — Personal Trainer donna a Padova. Demo concept realizzata da 4 Web Lab." }),
      /* @__PURE__ */ jsxs(
        "p",
        {
          className: "text-[16px] md:text-[18px] leading-[1.7] mb-9 max-w-xl",
          style: { fontFamily: SANS, color: C.inkSoft },
          children: [
            "Coaching 1:1 e small group dedicati alle donne che vogliono allenarsi in modo intelligente, sostenibile e finalmente loro. Un metodo che unisce ",
            /* @__PURE__ */ jsx("strong", { style: { color: C.ink }, children: "forza, nutrizione e mindset" }),
            "."
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mb-10", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#contatti",
            className: "inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.22em] uppercase transition-all hover:scale-[1.03]",
            style: {
              background: C.coral,
              color: C.bg,
              fontFamily: SANS,
              borderRadius: 999,
              fontWeight: 600,
              boxShadow: "0 10px 40px -10px rgba(255,107,91,0.55)"
            },
            children: [
              "Prenota una consulenza ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#metodo",
            className: "inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.22em] uppercase transition-all hover:bg-white/5",
            style: { fontFamily: SANS, color: C.ink, border: `1px solid ${C.line}`, borderRadius: 999 },
            children: "Scopri il metodo"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-x-7 gap-y-3 pt-7 border-t", style: { borderColor: C.line }, children: [
        { n: "8+", l: "anni di esperienza" },
        { n: "200+", l: "donne seguite" },
        { n: "1:1", l: "approccio su misura" }
      ].map((s) => /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[28px]", style: { fontFamily: SERIF, color: C.coral, fontWeight: 500 }, children: s.n }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkMute }, children: s.l })
      ] }, s.l)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: heroImg,
            alt: "Giulia Conti, personal trainer donna, in piedi nello studio Vera Method a Padova — concept sito web realizzato da 4 Web Lab",
            width: 1600,
            height: 1024,
            fetchPriority: "high",
            decoding: "async",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: { background: "linear-gradient(180deg, transparent 55%, rgba(20,20,22,0.55) 100%)" }
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "hidden md:block absolute -bottom-6 -left-6 w-44 h-44 rounded-2xl",
          style: { border: `1px solid ${C.coral}`, opacity: 0.65 }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "hidden md:flex absolute -top-5 -right-5 w-24 h-24 items-center justify-center text-center rounded-full",
          style: { background: C.bgSoft, border: `1px solid ${C.line}` },
          children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 mx-auto mb-1", style: { color: C.coral } }),
            /* @__PURE__ */ jsxs("div", { className: "text-[9px] tracking-[0.2em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: [
              "Certified",
              /* @__PURE__ */ jsx("br", {}),
              "Trainer"
            ] })
          ] })
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.3em] uppercase", style: { fontFamily: SANS, color: C.ink }, children: "Scroll" }),
    /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 animate-bounce", style: { color: C.ink } })
  ] })
] });
const TrustStrip = () => /* @__PURE__ */ jsx("section", { className: "py-8 border-y", style: { background: C.bgAlt, borderColor: C.line }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[11px] tracking-[0.22em] uppercase", style: { fontFamily: SANS, color: C.inkMute }, children: [
  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5", style: { color: C.coral } }),
    " Cert. CONI / FIF"
  ] }),
  /* @__PURE__ */ jsx("span", { className: "hidden md:inline opacity-30", children: "·" }),
  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5", style: { color: C.coral } }),
    " Studio privato a Padova"
  ] }),
  /* @__PURE__ */ jsx("span", { className: "hidden md:inline opacity-30", children: "·" }),
  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5", style: { color: C.coral } }),
    " Pre & Post partum"
  ] }),
  /* @__PURE__ */ jsx("span", { className: "hidden md:inline opacity-30", children: "·" }),
  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5", style: { color: C.coral } }),
    " Online coaching"
  ] })
] }) });
const PILLARS = [
  {
    icon: Dumbbell,
    title: "Movimento",
    desc: "Allenamento strutturato attorno alla tua biomeccanica, ai tuoi obiettivi e al tuo tempo. Forza intelligente, niente improvvisazione."
  },
  {
    icon: Heart,
    title: "Nutrizione",
    desc: "Educazione alimentare semplice e sostenibile, in collaborazione con una biologa nutrizionista. Niente diete punitive."
  },
  {
    icon: Brain,
    title: "Mindset",
    desc: "Costruiamo abitudini che reggono nel tempo: consapevolezza del corpo, gestione dello stress, costanza realistica."
  }
];
const Metodo = () => /* @__PURE__ */ jsx("section", { id: "metodo", className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-14 md:mb-20", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "Il metodo" }),
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-5",
        style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Tre pilastri,",
          " ",
          /* @__PURE__ */ jsx("em", { style: { color: C.coral }, children: "una sola direzione" }),
          "."
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Vera Method nasce dall'idea che il vero cambiamento non è un programma di 12 settimane: è un nuovo modo di abitare il proprio corpo. Lavoriamo su tre dimensioni, sempre insieme." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: PILLARS.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ jsxs(
    "article",
    {
      className: "p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1",
      style: {
        background: C.bgSoft,
        border: `1px solid ${C.line}`,
        boxShadow: "0 1px 0 rgba(255,255,255,0.02)"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-12 h-12 flex items-center justify-center mb-7 rounded-xl",
            style: { background: "rgba(255,107,91,0.12)", border: `1px solid rgba(255,107,91,0.3)` },
            children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5", style: { color: C.coral } })
          }
        ),
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: "text-[26px] md:text-[30px] mb-4",
            style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 },
            children: title
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-[15px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: desc })
      ]
    },
    i
  )) })
] }) });
const PROGRAMS = [
  {
    name: "1:1 Coaching",
    img: coachingImg,
    price: "da 80€ / sessione",
    desc: "Allenamento personalizzato in studio privato a Padova. Massima attenzione su tecnica, postura e progressioni.",
    bullets: ["Valutazione iniziale completa", "Programma su misura", "Check mensili"],
    alt: "Sessione di personal training 1 a 1 tra trainer donna e cliente — concept Vera Method"
  },
  {
    name: "Small Group",
    img: groupImg,
    price: "da 35€ / sessione",
    desc: "Sessioni in piccolo gruppo (max 4 donne). Stessa cura della tecnica, atmosfera complice e motivante.",
    bullets: ["Gruppi soli femminili", "2 sessioni a settimana", "Programmazione condivisa"],
    alt: "Small group training di tre donne in posizione di affondo nello studio Vera Method"
  },
  {
    name: "Online Coaching",
    img: detailImg,
    price: "da 120€ / mese",
    desc: "Per chi vive fuori Padova: scheda mensile, video tecnica e check settimanali via app.",
    bullets: ["Scheda aggiornata ogni mese", "Feedback video sui movimenti", "Supporto WhatsApp"],
    alt: "Kettlebell e materassini in uno studio fitness premium — programma online coaching Vera Method"
  }
];
const Programmi = () => /* @__PURE__ */ jsx("section", { id: "programmi", className: "py-24 md:py-32", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-14 md:mb-20", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "I programmi" }),
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-5",
        style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Tre formule, ",
          /* @__PURE__ */ jsx("em", { style: { color: C.coral }, children: "una stessa cura" }),
          "."
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Scegli il formato che ti somiglia di più. La proposta nasce sempre da una consulenza iniziale gratuita di 30 minuti." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: PROGRAMS.map((p, i) => /* @__PURE__ */ jsxs(
    "article",
    {
      className: "group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5",
      style: { background: C.bgSoft, border: `1px solid ${C.line}` },
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: p.img,
            alt: p.alt,
            loading: "lazy",
            width: 1280,
            height: 960,
            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between mb-4 gap-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-[24px]", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 }, children: p.name }),
            /* @__PURE__ */ jsx("span", { className: "text-[12px] tracking-[0.14em] uppercase", style: { fontFamily: SANS, color: C.coral }, children: p.price })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.7] mb-6", style: { fontFamily: SANS, color: C.inkSoft }, children: p.desc }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-7", children: p.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-[13px]", style: { fontFamily: SANS, color: C.ink }, children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.coral } }),
            b
          ] }, b)) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#contatti",
              className: "mt-auto inline-flex items-center gap-1.5 text-[12px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70",
              style: { fontFamily: SANS, color: C.coral, fontWeight: 600 },
              children: [
                "Richiedi info ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] })
      ]
    },
    i
  )) })
] }) });
const TESTI = [
  {
    t: "Esempio dimostrativo: 'Con Giulia ho ritrovato un rapporto sereno con il movimento. Mi alleno con piacere, non per colpa.'",
    n: "Cliente demo · M.",
    tag: "1:1 Coaching"
  },
  {
    t: "Testo placeholder per mostrare il tono di voce: 'Il piccolo gruppo è diventato il mio momento di cura settimanale.'",
    n: "Cliente demo · L.",
    tag: "Small Group"
  },
  {
    t: "Contenuto fittizio dichiarato: nel sito reale qui troverebbero spazio recensioni verificate e Google Reviews.",
    n: "Cliente demo · S.",
    tag: "Online Coaching"
  }
];
const Risultati = () => /* @__PURE__ */ jsx("section", { id: "risultati", className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "Risultati (demo)" }),
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "text-[34px] md:text-[48px] leading-[1.05]",
        style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Donne che si sono ",
          /* @__PURE__ */ jsx("em", { style: { color: C.coral }, children: "riprese il loro spazio" }),
          "."
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Contenuti dichiaratamente fittizi: nel sito reale ospiterebbero recensioni verificate o Google Reviews." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: TESTI.map((r, i) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "p-8 md:p-10 rounded-2xl flex flex-col",
      style: { background: C.bgSoft, border: `1px solid ${C.line}` },
      children: [
        /* @__PURE__ */ jsx(Quote, { className: "w-6 h-6 mb-5", style: { color: C.coral } }),
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
        /* @__PURE__ */ jsxs("div", { className: "pt-5 border-t flex items-center justify-between gap-3", style: { borderColor: C.line }, children: [
          /* @__PURE__ */ jsx("span", { className: "text-[12px] tracking-[0.1em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: r.n }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full", style: { fontFamily: SANS, color: C.coral, border: `1px solid rgba(255,107,91,0.35)` }, children: r.tag })
        ] })
      ]
    },
    i
  )) })
] }) });
const ChiSono = () => /* @__PURE__ */ jsx("section", { id: "chi-sono", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 md:gap-16 items-center", children: [
  /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: portraitImg,
        alt: "Ritratto editoriale di Giulia Conti, personal trainer donna fondatrice del metodo Vera Method",
        loading: "lazy",
        width: 1024,
        height: 1280,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "hidden md:block absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl",
        style: { border: `1px solid ${C.coral}`, opacity: 0.55 }
      }
    )
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "Chi sono" }),
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "text-[36px] md:text-[52px] leading-[1.05] mb-7",
        style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Giulia Conti,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: { color: C.coral }, children: "personal trainer per donne" }),
          "."
        ]
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "text-[16px] leading-[1.85] mb-5", style: { fontFamily: SANS, color: C.inkSoft }, children: [
      "Laureata in Scienze Motorie all'Università di Padova, certificata",
      " ",
      /* @__PURE__ */ jsx("strong", { style: { color: C.ink }, children: "CONI" }),
      " e",
      " ",
      /* @__PURE__ */ jsx("strong", { style: { color: C.ink }, children: "FIF — Federazione Italiana Fitness" }),
      ", mi occupo da oltre 8 anni di allenamento al femminile, con specializzazione in pre e post partum, ricomposizione corporea e mobilità."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.85] mb-9", style: { fontFamily: SANS, color: C.inkSoft }, children: "Vera Method è il modo in cui credo che l'allenamento debba essere fatto: rigoroso ma rispettoso, ambizioso ma sostenibile, e soprattutto pensato per chi siamo davvero — non per come vorremmo apparire." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6 pt-8 border-t", style: { borderColor: C.line }, children: [
      { n: "8+", l: "Anni di pratica" },
      { n: "200+", l: "Donne seguite" },
      { n: "CONI", l: "Tecnico certificato" },
      { n: "FIF", l: "Specializzazione femminile" }
    ].map((s, i) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-[28px] md:text-[36px] leading-none mb-2", style: { fontFamily: SERIF, color: C.coral, fontWeight: 500 }, children: s.n }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkMute }, children: s.l })
    ] }, i)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-9 flex items-center gap-4 text-[12px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex items-center gap-2 hover:opacity-70 transition-opacity", onClick: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsx(Instagram, { className: "w-4 h-4", style: { color: C.coral } }),
      " @veramethod"
    ] }) })
  ] })
] }) });
const FAQS = [
  {
    q: "Devo già essere allenata per iniziare?",
    a: "Assolutamente no. La maggior parte delle donne che seguo parte da zero o riprende dopo anni di pausa. Il programma viene costruito a partire dal tuo punto di partenza reale."
  },
  {
    q: "Lavori solo con donne?",
    a: "Sì, il metodo è progettato sulla fisiologia, gli obiettivi e i tempi delle donne. È una scelta di specializzazione, non un'esclusione."
  },
  {
    q: "Posso allenarmi anche se sono in gravidanza o ho appena partorito?",
    a: "Sì. Ho una formazione specifica in pre e post partum e collaboro con ginecologhe e ostetriche per percorsi sicuri in ogni trimestre e nel periodo di ripresa."
  },
  {
    q: "Dove si svolgono le sessioni 1:1?",
    a: "In uno studio privato a Padova, dedicato e attrezzato. Il setting è pensato per garantire intimità, concentrazione e qualità dell'allenamento."
  },
  {
    q: "Come funziona la consulenza iniziale gratuita?",
    a: "30 minuti in videocall o in studio, in cui ci conosciamo, parliamo dei tuoi obiettivi e capiamo se il metodo è giusto per te. Senza impegno."
  }
];
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border-b", style: { borderColor: C.line }, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        className: "w-full flex items-center justify-between gap-6 py-6 text-left transition-colors hover:opacity-80",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-[17px] md:text-[20px]", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 }, children: q }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full transition-colors",
              style: { background: open ? C.coral : "transparent", border: `1px solid ${open ? C.coral : C.line}`, color: open ? C.bg : C.coral },
              children: open ? /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" })
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsx("div", { className: "pb-7 pr-12 text-[15px] leading-[1.75]", style: { fontFamily: SANS, color: C.inkSoft }, children: a })
  ] });
};
const Faq = () => /* @__PURE__ */ jsx("section", { id: "faq", className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "mb-14 md:mb-20 text-center max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "Domande frequenti" }),
    /* @__PURE__ */ jsxs("h2", { className: "text-[34px] md:text-[48px] leading-[1.05]", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" }, children: [
      "Le risposte alle ",
      /* @__PURE__ */ jsx("em", { style: { color: C.coral }, children: "domande più comuni" }),
      "."
    ] })
  ] }),
  /* @__PURE__ */ jsx("div", { children: FAQS.map((f, i) => /* @__PURE__ */ jsx(FaqItem, { q: f.q, a: f.a }, i)) })
] }) });
const Contatti = () => {
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
  const inputBase = {
    fontFamily: SANS,
    background: "transparent",
    color: C.ink,
    border: "none",
    borderBottom: `1px solid rgba(245,241,236,0.22)`,
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
    color: C.inkMute,
    marginBottom: 6,
    display: "block"
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contatti",
      className: "relative overflow-hidden py-24 md:py-32",
      style: { background: `linear-gradient(160deg, #1a1418 0%, ${C.bg} 60%, #221619 100%)` },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none opacity-[0.18]",
            style: {
              backgroundImage: "radial-gradient(circle at 15% 20%, rgba(255,107,91,0.35) 0px, transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,107,91,0.18) 0px, transparent 45%)"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
            /* @__PURE__ */ jsxs(
              "span",
              {
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] tracking-[0.28em] uppercase mb-7",
                style: { fontFamily: SANS, color: C.coralSoft, border: `1px solid rgba(255,107,91,0.45)` },
                children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                  " Demo concept · contatto diretto con 4 Web Lab"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "h2",
              {
                className: "text-[36px] sm:text-[48px] md:text-[60px] leading-[1.04] mb-7",
                style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
                children: [
                  "Vuoi un sito così",
                  " ",
                  /* @__PURE__ */ jsx("em", { style: { color: C.coral }, children: "anche per la tua attività?" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "text-[16px] md:text-[17px] leading-[1.8] max-w-2xl mx-auto", style: { fontFamily: SANS, color: C.inkSoft }, children: [
              /* @__PURE__ */ jsx("strong", { style: { color: C.ink }, children: "4 Web Lab" }),
              " realizza siti web per professionisti, personal trainer, studi privati e di settore a Padova e in tutta Italia. Soluzioni una tantum",
              " ",
              /* @__PURE__ */ jsx("strong", { style: { color: C.ink }, children: "a partire da 549€" }),
              ", curate in ogni dettaglio."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-14 lg:gap-20 items-start", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-[22px] md:text-[26px] mb-7", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 }, children: "Parla direttamente con 4 Web Lab." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-5 mb-8", children: [
                /* @__PURE__ */ jsxs("a", { href: "tel:+393514656042", className: "flex items-center gap-4 group transition-opacity hover:opacity-80", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-11 flex items-center justify-center rounded-xl", style: { border: `1px solid ${C.line}` }, children: /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4", style: { color: C.coral } }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: C.inkMute }, children: "Telefono" }),
                    /* @__PURE__ */ jsx("div", { className: "text-[17px]", style: { fontFamily: SERIF, color: C.ink }, children: "+39 351 465 6042" })
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
                      /* @__PURE__ */ jsx("div", { className: "w-11 h-11 flex items-center justify-center rounded-xl", style: { border: `1px solid ${C.line}` }, children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4", style: { color: "#25D366" } }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: C.inkMute }, children: [
                          "WhatsApp ",
                          /* @__PURE__ */ jsx("span", { className: "opacity-60", children: "(da mobile)" })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "text-[17px]", style: { fontFamily: SERIF, color: C.ink }, children: "Scrivici subito su WhatsApp" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("a", { href: "mailto:info@4weblab.it", className: "flex items-center gap-4 group transition-opacity hover:opacity-80", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-11 h-11 flex items-center justify-center rounded-xl", style: { border: `1px solid ${C.line}` }, children: /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4", style: { color: C.coral } }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: C.inkMute }, children: "Email" }),
                    /* @__PURE__ */ jsx("div", { className: "text-[17px]", style: { fontFamily: SERIF, color: C.ink }, children: "info@4weblab.it" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "p-5 rounded-xl text-[12px] leading-[1.7]",
                  style: { border: `1px dashed rgba(255,107,91,0.45)`, color: C.inkSoft, fontFamily: SANS },
                  children: [
                    /* @__PURE__ */ jsx("strong", { style: { color: C.coral, fontWeight: 600 }, children: "Importante:" }),
                    " ",
                    '"Vera Method · Giulia Conti" è una demo concept. Il contatto inviato da questa pagina arriva direttamente a',
                    " ",
                    /* @__PURE__ */ jsx(Link, { to: "/", className: "underline", style: { color: C.coralSoft }, children: "4 Web Lab" }),
                    " ",
                    "— non a una personal trainer reale. Vedi le altre",
                    " ",
                    /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "underline", style: { color: C.coralSoft }, children: "realizzazioni" }),
                    "."
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("form", { onSubmit, children: done ? /* @__PURE__ */ jsxs("div", { className: "p-10 text-center rounded-2xl", style: { background: "rgba(255,255,255,0.04)", border: `1px solid ${C.line}` }, children: [
              /* @__PURE__ */ jsx(Heart, { className: "w-8 h-8 mx-auto mb-5", style: { color: C.coral } }),
              /* @__PURE__ */ jsx("h3", { className: "text-[26px] mb-3", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 }, children: "Richiesta ricevuta, grazie." }),
              /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Ti ricontatteremo a breve con una proposta su misura per la tua attività." })
            ] }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "vm-name", children: "Nome completo *" }),
                  /* @__PURE__ */ jsx("input", { id: "vm-name", name: "name", type: "text", required: true, style: inputBase })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "vm-email", children: "Email *" }),
                  /* @__PURE__ */ jsx("input", { id: "vm-email", name: "email", type: "email", required: true, style: inputBase })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "vm-phone", children: "Telefono" }),
                  /* @__PURE__ */ jsx("input", { id: "vm-phone", name: "phone", type: "tel", style: inputBase })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "vm-activity", children: "Tipo di attività" }),
                  /* @__PURE__ */ jsx("input", { id: "vm-activity", name: "activity", type: "text", placeholder: "Personal trainer, studio, professionista…", style: inputBase })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "vm-msg", children: "Messaggio" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "vm-msg",
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
                    style: { accentColor: C.coral }
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-[12px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: [
                  "Acconsento al trattamento dei dati per essere ricontattato (Art. 6.1.b GDPR). Titolare: 4 Web Lab di Fullin Carlo — P.IVA 05765760284.",
                  " ",
                  /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "underline", style: { color: C.coralSoft }, children: "Privacy Policy" }),
                  "."
                ] })
              ] }),
              /* @__PURE__ */ jsx("input", { type: "text", name: "botcheck", className: "hidden", tabIndex: -1, autoComplete: "off" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: submitting || !consent,
                  className: "w-full py-5 text-[12px] tracking-[0.22em] uppercase transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed rounded-full",
                  style: {
                    background: C.coral,
                    color: C.bg,
                    fontFamily: SANS,
                    fontWeight: 600,
                    boxShadow: "0 10px 40px -10px rgba(255,107,91,0.55)"
                  },
                  children: submitting ? "Invio in corso…" : "Richiedi una valutazione gratuita"
                }
              ),
              error && /* @__PURE__ */ jsx("p", { className: "text-[13px]", style: { fontFamily: SANS, color: "#fda4af" }, children: error })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-16 md:mt-20 text-center", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/realizzazioni",
              className: "inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline",
              style: { fontFamily: SANS, color: C.coralSoft },
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
                "Torna alle Realizzazioni"
              ]
            }
          ) })
        ] })
      ]
    }
  );
};
const DemoFooter = () => /* @__PURE__ */ jsxs("footer", { style: { background: "#0e0e10", color: C.inkSoft }, children: [
  /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-4 gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-[22px] tracking-[0.18em] uppercase mb-5", style: { fontFamily: SERIF, color: C.ink, fontWeight: 500 }, children: [
        "Vera",
        /* @__PURE__ */ jsx("span", { style: { color: C.coral }, children: "·" }),
        "Method"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-[14px] leading-[1.8] max-w-sm", style: { fontFamily: SANS }, children: [
        "Demo concept di sito web premium per personal trainer e professionisti del benessere. Realizzato da",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/", className: "underline hover:text-white", style: { color: C.coralSoft }, children: "4 Web Lab" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase mb-4", style: { fontFamily: SANS, color: C.ink }, children: "Naviga" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${n.id}`, className: "hover:text-white transition-colors", children: n.label }) }, n.id)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase mb-4", style: { fontFamily: SANS, color: C.ink }, children: "Contatti 4 Web Lab" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+393514656042", className: "hover:text-white", children: "+39 351 465 6042" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@4weblab.it", className: "hover:text-white", children: "info@4weblab.it" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/393514656042", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white", children: "WhatsApp" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-professionisti", className: "hover:text-white", children: "Siti web per professionisti" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "hover:text-white", children: "Altre realizzazioni" }) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "border-t py-7 text-[12px] text-center", style: { borderColor: "rgba(255,255,255,0.06)", fontFamily: SANS }, children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Vera Method — Tech demo realizzata da",
    " ",
    /* @__PURE__ */ jsx(Link, { to: "/", className: "underline hover:text-white", style: { color: C.coralSoft }, children: "4 Web Lab" }),
    ". Brand fittizio a scopo dimostrativo."
  ] })
] });
const StickyMobileCTA = () => /* @__PURE__ */ jsx("div", { className: "lg:hidden fixed bottom-4 left-4 right-4 z-40", style: { filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.45))" }, children: /* @__PURE__ */ jsxs(
  "a",
  {
    href: "#contatti",
    className: "flex items-center justify-center gap-2 py-3.5 text-[12px] tracking-[0.22em] uppercase rounded-full",
    style: { background: C.coral, color: C.bg, fontFamily: SANS, fontWeight: 600 },
    children: [
      "Prenota consulenza ",
      /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
    ]
  }
) });
const DemoPersonalTrainerVeraMethod = () => {
  const canonical = "https://4weblab.it/realizzazioni/demo-personal-trainer-vera-method";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sito Web per Personal Trainer Donna · Demo Padova | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Demo concept di sito web premium per personal trainer donna, realizzata da 4 Web Lab, agenzia web di Padova. Siti per professionisti a partire da 549€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Sito Web per Personal Trainer Donna · Demo Padova | 4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Concept premium antracite + coral per personal trainer donna. Demo realizzata da 4 Web Lab, agenzia web di Padova." }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Sito Web per Personal Trainer Donna · Demo | 4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Concept premium per personal trainer donna realizzato da 4 Web Lab." }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${canonical}#webpage`,
            url: canonical,
            name: "Sito Web per Personal Trainer Donna · Demo Vera Method",
            description: "Demo concept di sito web premium per personal trainer donna, realizzata da 4 Web Lab. Brand fittizio 'Giulia Conti — Vera Method' creato a scopo dimostrativo.",
            inLanguage: "it-IT",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            publisher: { "@id": "https://4weblab.it/#business" },
            primaryImageOfPage: "https://4weblab.it/assets/vera-method-hero.webp"
          },
          {
            "@type": "Person",
            "@id": `${canonical}#giulia-conti`,
            name: "Giulia Conti",
            jobTitle: "Personal Trainer",
            description: "Brand fittizio realizzato come concept dimostrativo da 4 Web Lab. Personal trainer specializzata nell'allenamento femminile, con focus su forza, mobilità e percorsi pre e post partum.",
            areaServed: { "@type": "City", name: "Padova" },
            knowsAbout: [
              "Allenamento funzionale femminile",
              "Pre e post partum",
              "Ricomposizione corporea",
              "Mobilità articolare",
              "Forza per donne"
            ]
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
                    description: "Percorso personale uno-a-uno in studio privato a Padova."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Vera Small Group",
                    description: "Allenamento in piccolo gruppo di sole donne, max 4 persone."
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Vera Online",
                    description: "Programma di allenamento online con coaching e check settimanali."
                  }
                }
              ]
            }
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
                  text: "Assolutamente no. La maggior parte delle donne che seguo parte da zero o riprende dopo anni di pausa. Il programma viene costruito a partire dal tuo punto di partenza reale."
                }
              },
              {
                "@type": "Question",
                name: "Lavori solo con donne?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì, il metodo è progettato sulla fisiologia, gli obiettivi e i tempi delle donne. È una scelta di specializzazione, non un'esclusione."
                }
              },
              {
                "@type": "Question",
                name: "Posso allenarmi anche se sono in gravidanza o ho appena partorito?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì. Ho una formazione specifica in pre e post partum e collaboro con ginecologhe e ostetriche per percorsi sicuri in ogni trimestre e nel periodo di ripresa."
                }
              },
              {
                "@type": "Question",
                name: "Dove si svolgono le sessioni 1:1?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In uno studio privato a Padova, dedicato e attrezzato. Il setting è pensato per garantire intimità, concentrazione e qualità dell'allenamento."
                }
              },
              {
                "@type": "Question",
                name: "Come funziona la consulenza iniziale gratuita?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "30 minuti in videocall o in studio, in cui ci conosciamo, parliamo dei tuoi obiettivi e capiamo se il metodo è giusto per te. Senza impegno."
                }
              }
            ]
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${canonical}#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
              { "@type": "ListItem", position: 2, name: "Realizzazioni", item: "https://4weblab.it/realizzazioni" },
              { "@type": "ListItem", position: 3, name: "Personal Trainer Vera Method (concept)", item: canonical }
            ]
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { background: C.bg, color: C.ink, minHeight: "100vh" }, children: [
      /* @__PURE__ */ jsx(DemoHeader, {}),
      /* @__PURE__ */ jsx(BackBar, {}),
      /* @__PURE__ */ jsxs("main", { children: [
        /* @__PURE__ */ jsx(Hero, {}),
        /* @__PURE__ */ jsx(TrustStrip, {}),
        /* @__PURE__ */ jsx(Metodo, {}),
        /* @__PURE__ */ jsx(Programmi, {}),
        /* @__PURE__ */ jsx(Risultati, {}),
        /* @__PURE__ */ jsx(ChiSono, {}),
        /* @__PURE__ */ jsx(Faq, {}),
        /* @__PURE__ */ jsx(Contatti, {})
      ] }),
      /* @__PURE__ */ jsx(DemoFooter, {}),
      /* @__PURE__ */ jsx(StickyMobileCTA, {})
    ] })
  ] });
};
export {
  DemoPersonalTrainerVeraMethod as default
};
