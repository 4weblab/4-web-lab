import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { H as Helmet } from "../main.mjs";
import { ArrowRight, Wifi, KeyRound, Coffee, MapPin, ChevronDown, X, Star, Phone, MessageCircle, Mail, Heart, ShowerHead, Tv, ConciergeBell, Wind, Car } from "lucide-react";
import { r as roomDeluxe } from "./bb-room-deluxe-Zi8WUYCV.js";
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
const heroImg = "/assets/bb-hero-Psp5jW81.webp";
const roomJunior = "/assets/bb-room-junior-hhv0b7tL.webp";
const roomRomantic = "/assets/bb-room-romantic-B-0ie3dE.webp";
const breakfastImg = "/assets/bb-breakfast-CcbCKwZs.webp";
const territoryImg = "/assets/bb-territory-DCmknuJ6.webp";
const terraceImg = "/assets/bb-terrace-CT8Y_pZu.webp";
const bathImg = "/assets/bb-bath-DOc_vZWh.webp";
const detailImg = "/assets/bb-detail-G00hmgG5.webp";
const C = {
  bg: "#F7F2EB",
  // ivory warm
  bgAlt: "#EFE7DB",
  // sand
  bgDark: "#161210",
  // deep coffee black
  ink: "#1A1410",
  // text primary
  inkSoft: "#5C5147",
  // muted brown
  line: "#E2D8C8",
  gold: "#C8A96A",
  // champagne
  goldSoft: "#E6CFA6",
  brownSoft: "#7A5A3F"
};
const SERIF = `'Cormorant Garamond', 'Playfair Display', Georgia, serif`;
const SANS = `'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`;
const NAV = [
  { id: "home", label: "Home" },
  { id: "camere", label: "Camere" },
  { id: "esperienza", label: "Esperienza" },
  { id: "gallery", label: "Gallery" },
  { id: "recensioni", label: "Recensioni" },
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
        background: scrolled ? "rgba(247,242,235,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[78px] flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo("home"),
              className: "flex items-center gap-2 group",
              "aria-label": "Velluto Rooms — torna alla home",
              children: /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "text-[22px] md:text-[26px] tracking-[0.18em] uppercase",
                  style: {
                    fontFamily: SERIF,
                    color: scrolled ? C.ink : "#fff",
                    fontWeight: 500,
                    letterSpacing: "0.22em"
                  },
                  children: [
                    "Velluto",
                    /* @__PURE__ */ jsx("span", { style: { color: C.gold }, children: "·" }),
                    "Rooms"
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-9", children: NAV.map((n) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollTo(n.id),
              className: "text-[13px] tracking-[0.12em] uppercase transition-colors hover:opacity-100",
              style: {
                fontFamily: SANS,
                color: scrolled ? C.ink : "rgba(255,255,255,0.85)",
                opacity: 0.85
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
                background: C.ink,
                color: C.bg,
                borderRadius: 2,
                fontWeight: 500
              },
              children: "Prenota il tuo soggiorno"
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
        open && /* @__PURE__ */ jsx(
          "div",
          {
            className: "lg:hidden border-t",
            style: { background: C.bg, borderColor: C.line },
            children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-6 flex flex-col gap-1", children: [
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
                  style: { background: C.ink, color: C.bg, fontFamily: SANS },
                  children: "Prenota il tuo soggiorno"
                }
              )
            ] })
          }
        )
      ]
    }
  );
};
const Hero = () => {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: heroImg,
        alt: "Suite premium di un boutique B&B italiano con luce calda al tramonto, design contemporaneo in beige e legno scuro",
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
          background: "linear-gradient(180deg, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.25) 35%, rgba(20,16,12,0.75) 100%)"
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
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "inline-block text-[11px] tracking-[0.32em] uppercase mb-6",
          style: { fontFamily: SANS, color: C.goldSoft },
          children: "Boutique B&B · Luxury Rooms"
        }
      ),
      /* @__PURE__ */ jsxs(
        "h1",
        {
          className: "text-[44px] sm:text-[60px] md:text-[80px] leading-[0.98] mb-6",
          style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
          children: [
            "Boutique Rooms & Luxury Stay",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", color: C.goldSoft }, children: "nel cuore italiano" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Sito web per boutique B&B e strutture ricettive — concept realizzato da 4 Web Lab, agenzia web di Padova" }),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-[15px] md:text-[17px] max-w-xl leading-[1.7] mb-9",
          style: { fontFamily: SANS, color: "rgba(255,255,255,0.85)" },
          children: "Un soggiorno fatto di design contemporaneo, comfort assoluto e dettagli curati. Suite intime, atmosfera silenziosa, esperienze locali su misura — a pochi passi dal centro storico."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mb-10", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#camere",
            className: "inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:scale-[1.02]",
            style: { background: C.bg, color: C.ink, fontFamily: SANS, borderRadius: 2 },
            children: [
              "Scopri le camere ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#esperienza",
            className: "inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:bg-white/10",
            style: {
              fontFamily: SANS,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.45)",
              borderRadius: 2
            },
            children: "Vivi l'esperienza"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-6 gap-y-2 text-[12px] tracking-[0.08em] uppercase opacity-85", style: { fontFamily: SANS }, children: [
        { icon: Wifi, t: "Wi-Fi veloce" },
        { icon: KeyRound, t: "Smart Check-in" },
        { icon: Coffee, t: "Colazione inclusa" },
        { icon: MapPin, t: "Centro città" }
      ].map((b, i) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(b.icon, { className: "w-3.5 h-3.5", style: { color: C.goldSoft } }),
        b.t
      ] }, i)) })
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
};
const Intro = () => {
  return /* @__PURE__ */ jsx("section", { id: "esperienza", className: "py-24 md:py-36", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-[11px] tracking-[0.3em] uppercase block mb-6",
          style: { fontFamily: SANS, color: C.gold },
          children: "L'esperienza"
        }
      ),
      /* @__PURE__ */ jsxs(
        "h2",
        {
          className: "text-[36px] md:text-[56px] leading-[1.05] mb-7",
          style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
          children: [
            "Un soggiorno che resta,",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { style: { color: C.brownSoft }, children: "oltre la notte trascorsa." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.85] mb-5", style: { fontFamily: SANS, color: C.inkSoft }, children: "Velluto Rooms nasce dall'idea di unire l'intimità di un B&B all'eleganza di un boutique hotel contemporaneo. Camere progettate per il silenzio, materiali caldi al tatto, una luce che cambia con la giornata." }),
      /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.85]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Ogni dettaglio — dalla colazione servita su misura ai consigli sul territorio — è pensato per farti sentire a casa, ma con un livello di cura che trasforma il soggiorno in esperienza." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t", style: { borderColor: C.line }, children: [
        { n: "8", l: "Camere premium" },
        { n: "4.9", l: "Guest rating" },
        { n: "12", l: "Anni di accoglienza" },
        { n: "2.4k", l: "Ospiti ogni anno" }
      ].map((s, i) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-[34px] md:text-[44px] leading-none mb-2",
            style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 },
            children: s.n
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: s.l })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: breakfastImg,
          alt: "Colazione premium servita su tovaglia di lino con cornetti caldi, frutta fresca ed espresso italiano",
          loading: "lazy",
          width: 1024,
          height: 1280,
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
      )
    ] })
  ] }) });
};
const ROOMS = [
  {
    name: "Deluxe Room",
    img: roomDeluxe,
    sqm: "26 m²",
    desc: "Camera elegante con letto king-size, biancheria in lino e luce naturale generosa.",
    price: "da 180 € / notte",
    services: ["Wi-Fi", "Smart TV", "Aria condizionata"],
    alt: "Deluxe Room: camera boutique con testiera in legno scuro, lenzuola color avorio e illuminazione calda"
  },
  {
    name: "Junior Suite",
    img: roomJunior,
    sqm: "38 m²",
    desc: "Suite con zona living separata, finestra ad arco e vista sul centro storico.",
    price: "da 240 € / notte",
    services: ["Lounge", "Marble bath", "Vista città"],
    alt: "Junior Suite con zona living, divano beige, tavolino in marmo e grande finestra ad arco al tramonto"
  },
  {
    name: "Romantic Suite",
    img: roomRomantic,
    sqm: "44 m²",
    desc: "Suite romantica con vasca freestanding, candele e atmosfera intima.",
    price: "da 320 € / notte",
    services: ["Vasca freestanding", "Welcome bottle", "Petali su richiesta"],
    alt: "Romantic Suite con vasca freestanding, petali di rosa, candele e atmosfera intima dorata"
  }
];
const Rooms = () => {
  return /* @__PURE__ */ jsx("section", { id: "camere", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-16 md:mb-20", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Le camere" }),
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-[36px] md:text-[56px] leading-[1.05] mb-5",
          style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
          children: "Tre interpretazioni del comfort."
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Ogni camera è pensata per un tipo di soggiorno diverso: weekend romantico, viaggio business, fuga lenta. Stesso livello di cura, atmosfere su misura." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: ROOMS.map((r, i) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group flex flex-col bg-white transition-all duration-500 hover:-translate-y-1",
        style: { borderRadius: 2, boxShadow: "0 1px 0 rgba(0,0,0,0.04)" },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: r.img,
                alt: r.alt,
                loading: "lazy",
                width: 1280,
                height: 896,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                style: {
                  background: "linear-gradient(180deg, transparent 50%, rgba(20,16,12,0.45) 100%)"
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase",
                style: { background: "rgba(255,255,255,0.92)", color: C.ink, fontFamily: SANS, borderRadius: 2 },
                children: r.sqm
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-7 md:p-9 flex flex-col flex-1", children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "text-[26px] md:text-[28px] leading-tight mb-3",
                style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 },
                children: r.name
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.7] mb-5", style: { fontFamily: SANS, color: C.inkSoft }, children: r.desc }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-x-4 gap-y-1.5 mb-6 text-[12px]", style: { fontFamily: SANS, color: C.brownSoft }, children: r.services.map((s) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full", style: { background: C.gold } }),
              s
            ] }, s)) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-5 border-t flex items-center justify-between", style: { borderColor: C.line }, children: [
              /* @__PURE__ */ jsx("span", { className: "text-[14px]", style: { fontFamily: SERIF, color: C.ink, fontStyle: "italic" }, children: r.price }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#contatti",
                  className: "inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase transition-colors",
                  style: { fontFamily: SANS, color: C.ink },
                  children: [
                    "Scopri ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
                  ]
                }
              )
            ] })
          ] })
        ]
      },
      i
    )) })
  ] }) });
};
const GALLERY = [
  { src: heroImg, alt: "Suite principale all'ora dorata", span: "row-span-2" },
  { src: bathImg, alt: "Bagno in marmo con dettagli in ottone", span: "" },
  { src: breakfastImg, alt: "Colazione su tovaglia di lino", span: "" },
  { src: terraceImg, alt: "Terrazza panoramica al tramonto", span: "row-span-2" },
  { src: territoryImg, alt: "Centro storico italiano al crepuscolo", span: "" },
  { src: detailImg, alt: "Dettaglio: chiave e fiore su legno scuro", span: "" }
];
const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  return /* @__PURE__ */ jsxs("section", { id: "gallery", className: "py-24 md:py-36", style: { background: C.bg }, children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Gallery" }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "text-[36px] md:text-[56px] leading-[1.05]",
              style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
              children: "Atmosfere e dettagli."
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-[15px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Una raccolta visiva di camere, spazi comuni, colazione e angoli del territorio che renderanno il soggiorno memorabile." })
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
                style: { background: "rgba(20,16,12,0.25)" }
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
        style: { background: "rgba(20,16,12,0.94)" },
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
const Territory = () => {
  const blocks = [
    {
      t: "Centro storico",
      d: "A pochi passi da botteghe artigiane, piazze silenziose e architetture che raccontano secoli di storia."
    },
    {
      t: "Esperienze locali",
      d: "Degustazioni, tour privati e attività curate da partner locali selezionati con attenzione."
    },
    {
      t: "Weekend romantici",
      d: "Pacchetti pensati per fughe a due: vasca, candele, colazione in camera e itinerari dedicati."
    },
    {
      t: "Business stay",
      d: "Wi-Fi performante, scrivania ergonomica, check-in flessibile e silenzio garantito."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-24 md:py-36", style: { background: C.bgDark }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Territorio" }),
      /* @__PURE__ */ jsxs(
        "h2",
        {
          className: "text-[36px] md:text-[54px] leading-[1.05] mb-7 text-white",
          style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
          children: [
            "Vivere il luogo,",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { style: { color: C.goldSoft }, children: "non solo dormirci." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.85] mb-8", style: { fontFamily: SANS, color: "rgba(255,255,255,0.72)" }, children: "Il vero lusso, oggi, è il tempo. Velluto Rooms ti dà una base curata per esplorare con calma il centro storico, scoprire ristoranti autentici, vivere esperienze locali pensate su misura." }),
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: territoryImg,
          alt: "Strada acciottolata del centro storico italiano illuminata dalla luce calda del tramonto",
          loading: "lazy",
          width: 1280,
          height: 896,
          className: "w-full h-full object-cover"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5", children: blocks.map((b, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-7 md:p-9 transition-all hover:-translate-y-1",
        style: {
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 2,
          backdropFilter: "blur(10px)"
        },
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-px mb-5", style: { background: C.gold } }),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-[24px] md:text-[28px] leading-tight mb-3 text-white",
              style: { fontFamily: SERIF, fontWeight: 400 },
              children: b.t
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.75]", style: { fontFamily: SANS, color: "rgba(255,255,255,0.65)" }, children: b.d })
        ]
      },
      i
    )) })
  ] }) });
};
const SERVICES = [
  { i: KeyRound, t: "Smart Check-in" },
  { i: Wifi, t: "Wi-Fi veloce" },
  { i: Coffee, t: "Colazione premium" },
  { i: ShowerHead, t: "Pulizia giornaliera" },
  { i: Tv, t: "Smart TV / Netflix" },
  { i: ConciergeBell, t: "Concierge & transfer" },
  { i: Wind, t: "Aria condizionata" },
  { i: Car, t: "Parcheggio convenzionato" }
];
const Services = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Servizi inclusi" }),
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-[36px] md:text-[52px] leading-[1.05]",
          style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
          children: "Cura nei dettagli, sempre inclusa."
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px", style: { background: C.line }, children: SERVICES.map((s, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group p-8 md:p-10 flex flex-col items-center text-center transition-colors duration-500",
        style: { background: C.bg },
        onMouseEnter: (e) => e.currentTarget.style.background = C.bgAlt,
        onMouseLeave: (e) => e.currentTarget.style.background = C.bg,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
              style: { background: "transparent", border: `1px solid ${C.gold}` },
              children: /* @__PURE__ */ jsx(s.i, { className: "w-5 h-5", style: { color: C.brownSoft } })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "text-[13px] tracking-[0.1em] uppercase", style: { fontFamily: SANS, color: C.ink }, children: s.t })
        ]
      },
      i
    )) })
  ] }) });
};
const REVIEWS = [
  {
    n: "Giulia M.",
    from: "Milano, IT",
    r: 5,
    t: "Atmosfera incredibile, attenzione ai dettagli rara. La suite era esattamente come la immaginavo: silenziosa, calda, perfetta."
  },
  {
    n: "Mathieu L.",
    from: "Parigi, FR",
    r: 5,
    t: "Boutique experience nel vero senso della parola. Colazione meravigliosa e consigli sul territorio super preziosi."
  },
  {
    n: "Sofia R.",
    from: "Verona, IT",
    r: 5,
    t: "Ci siamo sentiti coccolati dal primo all'ultimo minuto. Torneremo sicuramente per un anniversario."
  }
];
const Reviews = () => {
  return /* @__PURE__ */ jsx("section", { id: "recensioni", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Voci degli ospiti" }),
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: "text-[36px] md:text-[56px] leading-[1.05]",
            style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
            children: "Esperienze, non solo soggiorni."
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center gap-3 px-5 py-3",
          style: { background: C.bg, border: `1px solid ${C.line}`, borderRadius: 2 },
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex", "aria-hidden": true, children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4", style: { color: C.gold, fill: C.gold } }, i)) }),
            /* @__PURE__ */ jsx("span", { className: "text-[13px] tracking-[0.1em] uppercase", style: { fontFamily: SANS, color: C.ink }, children: "4.9 / 5 Guest Rating" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: REVIEWS.map((r, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-8 md:p-10 flex flex-col",
        style: { background: C.bg, border: `1px solid ${C.line}`, borderRadius: 2 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex mb-5", "aria-hidden": true, children: Array.from({ length: r.r }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5", style: { color: C.gold, fill: C.gold } }, j)) }),
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
          /* @__PURE__ */ jsxs("div", { className: "pt-5 border-t", style: { borderColor: C.line }, children: [
            /* @__PURE__ */ jsx("div", { className: "text-[14px]", style: { fontFamily: SANS, color: C.ink, fontWeight: 500 }, children: r.n }),
            /* @__PURE__ */ jsx("div", { className: "text-[12px] tracking-[0.08em] uppercase mt-1", style: { fontFamily: SANS, color: C.inkSoft }, children: r.from })
          ] })
        ]
      },
      i
    )) })
  ] }) });
};
const Contact = () => {
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
  const inputBase = {
    fontFamily: SANS,
    background: "transparent",
    color: C.bg,
    border: "none",
    borderBottom: `1px solid rgba(247,242,235,0.25)`,
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
    color: "rgba(247,242,235,0.55)",
    marginBottom: 6,
    display: "block"
  };
  return /* @__PURE__ */ jsxs("section", { id: "contatti", className: "py-24 md:py-36 relative overflow-hidden", style: { background: C.bgDark }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none opacity-40",
        style: {
          background: `radial-gradient(ellipse at top, ${C.gold}22 0%, transparent 60%)`
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Contatti" }),
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: "text-[40px] md:text-[64px] leading-[1.02] mb-8 text-white",
            style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
            children: [
              "Richiedi ",
              /* @__PURE__ */ jsx("em", { style: { color: C.goldSoft }, children: "disponibilità" }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-[16px] leading-[1.85] mb-10 max-w-md", style: { fontFamily: SANS, color: "rgba(255,255,255,0.72)" }, children: "Raccontaci le tue date e cosa cerchi dal soggiorno. Ti rispondiamo con una proposta personalizzata e disponibilità reale." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5 mb-10", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:+393514656042",
              className: "flex items-center gap-4 group transition-opacity hover:opacity-80",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-11 h-11 flex items-center justify-center",
                    style: { border: `1px solid ${C.gold}`, borderRadius: 2 },
                    children: /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4", style: { color: C.goldSoft } })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.5)" }, children: "Telefono" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "+39 351 465 6042" })
                ] })
              ]
            }
          ),
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
                    style: { border: `1px solid ${C.gold}`, borderRadius: 2 },
                    children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4", style: { color: C.goldSoft } })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.5)" }, children: "WhatsApp" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "Scrivici su WhatsApp" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:info@4weblab.it",
              className: "flex items-center gap-4 group transition-opacity hover:opacity-80",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-11 h-11 flex items-center justify-center",
                    style: { border: `1px solid ${C.gold}`, borderRadius: 2 },
                    children: /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4", style: { color: C.goldSoft } })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.5)" }, children: "Email" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "info@4weblab.it" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "p-5 text-[12px] leading-[1.7]",
            style: {
              border: `1px dashed rgba(200,169,106,0.4)`,
              color: "rgba(255,255,255,0.55)",
              fontFamily: SANS,
              borderRadius: 2
            },
            children: [
              /* @__PURE__ */ jsx("strong", { style: { color: C.goldSoft, fontWeight: 500 }, children: "Nota concept:" }),
              " ",
              '"Velluto Rooms" è una demo concept realizzata da',
              " ",
              /* @__PURE__ */ jsx(Link, { to: "/", className: "underline", style: { color: C.goldSoft }, children: "4 Web Lab" }),
              ". Le richieste inviate da questa pagina vengono ricevute direttamente da 4 Web Lab a scopo dimostrativo. Vedi le altre ",
              /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "underline", style: { color: C.goldSoft }, children: "realizzazioni" }),
              "."
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("form", { onSubmit, className: "lg:pt-10", children: done ? /* @__PURE__ */ jsxs(
        "div",
        {
          className: "p-10 text-center",
          style: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 },
          children: [
            /* @__PURE__ */ jsx(Heart, { className: "w-8 h-8 mx-auto mb-5", style: { color: C.gold } }),
            /* @__PURE__ */ jsx("h3", { className: "text-[26px] mb-3 text-white", style: { fontFamily: SERIF, fontWeight: 400 }, children: "Grazie, abbiamo ricevuto la tua richiesta." }),
            /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: "rgba(255,255,255,0.65)" }, children: "Ti ricontatteremo a breve con una proposta su misura." })
          ]
        }
      ) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "bb-name", children: "Nome completo *" }),
            /* @__PURE__ */ jsx("input", { id: "bb-name", name: "name", type: "text", required: true, style: inputBase })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "bb-email", children: "Email *" }),
            /* @__PURE__ */ jsx("input", { id: "bb-email", name: "email", type: "email", required: true, style: inputBase })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "bb-phone", children: "Telefono" }),
            /* @__PURE__ */ jsx("input", { id: "bb-phone", name: "phone", type: "tel", style: inputBase })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "bb-guests", children: "Ospiti" }),
            /* @__PURE__ */ jsx("input", { id: "bb-guests", name: "guests", type: "number", min: 1, max: 6, defaultValue: 2, style: inputBase })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "bb-checkin", children: "Check-in" }),
            /* @__PURE__ */ jsx("input", { id: "bb-checkin", name: "check_in", type: "date", style: inputBase })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "bb-checkout", children: "Check-out" }),
            /* @__PURE__ */ jsx("input", { id: "bb-checkout", name: "check_out", type: "date", style: inputBase })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { style: labelStyle, htmlFor: "bb-msg", children: "Messaggio" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "bb-msg",
              name: "message",
              rows: 3,
              style: { ...inputBase, resize: "vertical" },
              placeholder: "Tipo di soggiorno, occasione, preferenze…"
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
              className: "mt-1 accent-current",
              style: { accentColor: C.gold }
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
              background: C.gold,
              color: C.bgDark,
              fontFamily: SANS,
              fontWeight: 600,
              borderRadius: 2
            },
            children: submitting ? "Invio in corso…" : "Invia richiesta"
          }
        ),
        error && /* @__PURE__ */ jsx("p", { className: "text-[13px] text-red-300", style: { fontFamily: SANS }, children: error })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8 mt-16 md:mt-20 text-center", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/realizzazioni",
        className: "inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline",
        style: { fontFamily: SANS, color: C.gold },
        children: "Torna alla lista delle demo"
      }
    ) })
  ] });
};
const DemoFooter = () => {
  return /* @__PURE__ */ jsxs("footer", { style: { background: "#0E0B09", color: "rgba(255,255,255,0.6)" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "text-[22px] tracking-[0.22em] uppercase mb-5 text-white",
            style: { fontFamily: SERIF, fontWeight: 500 },
            children: [
              "Velluto",
              /* @__PURE__ */ jsx("span", { style: { color: C.gold }, children: "·" }),
              "Rooms"
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.8] max-w-sm", style: { fontFamily: SANS }, children: "Boutique B&B contemporaneo: camere premium, esperienze locali e un'idea di accoglienza che non smette mai di evolvere." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-white mb-4", style: { fontFamily: SANS }, children: "Naviga" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${n.id}`, className: "hover:text-white transition-colors", children: n.label }) }, n.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.2em] uppercase text-white mb-4", style: { fontFamily: SANS }, children: "Contatti" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+393514656042", className: "hover:text-white", children: "+39 351 465 6042" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@4weblab.it", className: "hover:text-white", children: "info@4weblab.it" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/393514656042", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white", children: "WhatsApp" }) })
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
          " Velluto Rooms — Tech demo realizzata da",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/", className: "underline hover:text-white", style: { color: C.goldSoft }, children: "4 Web Lab" }),
          ". Brand fittizio a scopo dimostrativo."
        ]
      }
    )
  ] });
};
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
        style: { background: C.ink, color: C.bg, fontFamily: SANS, borderRadius: 2 },
        children: [
          "Richiedi disponibilità ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ]
      }
    )
  }
);
const DemoBoutiqueBB = () => {
  const canonical = "https://4weblab.it/realizzazioni/boutique-bb-luxury-rooms";
  const creativeLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${canonical}#creativework`,
    name: "Concept di sito web premium per boutique B&B / Luxury Rooms — by 4 Web Lab",
    headline: "Tech demo: design editoriale per boutique B&B contemporaneo",
    description: "Concept project realizzato da 4 Web Lab per dimostrare un approccio premium alla progettazione di siti web per boutique hotel, B&B di fascia alta e luxury rooms italiane.",
    url: canonical,
    inLanguage: "it-IT",
    keywords: [
      "web design boutique hotel",
      "siti web B&B premium",
      "design editoriale hospitality",
      "luxury rooms",
      "UX boutique"
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
        name: "Concept boutique B&B · 4 Web Lab",
        item: canonical
      }
    ]
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
    author: { "@id": "https://4weblab.it/#business" },
    creator: { "@id": "https://4weblab.it/#business" },
    publisher: { "@id": "https://4weblab.it/#business" },
    inLanguage: "it-IT"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sito Web per Boutique B&B · Demo Padova | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Demo di sito web per boutique B&B e luxury rooms, realizzata da 4 Web Lab, agenzia web di Padova specializzata in attività ricettive. Da 899€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "article:author", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "article:section", content: "Realizzazioni" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Sito Web per Boutique B&B · Demo Padova | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Demo di sito web per boutique B&B e luxury rooms · 4 Web Lab, agenzia web di Padova. Pacchetto aziendale da 899€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og/boutique-bb-luxury-rooms.webp" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Sito Web per Boutique B&B · Demo Padova | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Demo di sito web per boutique B&B e luxury rooms · 4 Web Lab, agenzia web di Padova."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og/boutique-bb-luxury-rooms.webp" }),
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
        /* @__PURE__ */ jsx(Intro, {}),
        /* @__PURE__ */ jsx(Rooms, {}),
        /* @__PURE__ */ jsx(Gallery, {}),
        /* @__PURE__ */ jsx(Territory, {}),
        /* @__PURE__ */ jsx(Services, {}),
        /* @__PURE__ */ jsx(Reviews, {}),
        /* @__PURE__ */ jsx(Contact, {})
      ] }),
      /* @__PURE__ */ jsx(DemoFooter, {}),
      /* @__PURE__ */ jsx(StickyMobileCTA, {})
    ] })
  ] });
};
export {
  DemoBoutiqueBB as default
};
