import { j as jsxDEV, b as Fragment } from "../main.mjs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Wifi, KeyRound, Coffee, MapPin, ChevronDown, X, Star, Phone, MessageCircle, Mail, Heart, ShowerHead, Tv, ConciergeBell, Wind, Car } from "lucide-react";
import { r as roomDeluxe } from "./bb-room-deluxe-Zi8WUYCV.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxDEV(
    "header",
    {
      className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      style: {
        background: scrolled ? "rgba(247,242,235,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent"
      },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[78px] flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo("home"),
              className: "flex items-center gap-2 group",
              "aria-label": "Velluto Rooms — torna alla home",
              children: /* @__PURE__ */ jsxDEV(
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
                    /* @__PURE__ */ jsxDEV("span", { style: { color: C.gold }, children: "·" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                      lineNumber: 124,
                      columnNumber: 20
                    }, void 0),
                    "Rooms"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                  lineNumber: 115,
                  columnNumber: 11
                },
                void 0
              )
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 110,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("nav", { className: "hidden lg:flex items-center gap-9", children: NAV.map((n) => /* @__PURE__ */ jsxDEV(
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
            n.id,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 130,
              columnNumber: 13
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 128,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV(
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
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 146,
              columnNumber: 11
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5",
              "aria-label": "Apri menu",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    className: "block w-6 h-px transition-transform",
                    style: {
                      background: scrolled || open ? C.ink : "#fff",
                      transform: open ? "translateY(6px) rotate(45deg)" : "none"
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    className: "block w-6 h-px transition-opacity",
                    style: { background: scrolled || open ? C.ink : "#fff", opacity: open ? 0 : 1 }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    className: "block w-6 h-px transition-transform",
                    style: {
                      background: scrolled || open ? C.ink : "#fff",
                      transform: open ? "translateY(-6px) rotate(-45deg)" : "none"
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 161,
              columnNumber: 9
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, void 0),
        open && /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "lg:hidden border-t",
            style: { background: C.bg, borderColor: C.line },
            children: /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-6 flex flex-col gap-1", children: [
              NAV.map((n) => /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => scrollTo(n.id),
                  className: "text-left py-3 text-[15px] tracking-[0.1em] uppercase border-b",
                  style: { fontFamily: SANS, color: C.ink, borderColor: C.line },
                  children: n.label
                },
                n.id,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                  lineNumber: 195,
                  columnNumber: 15
                },
                void 0
              )),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => scrollTo("contatti"),
                  className: "mt-4 px-5 py-3 text-[12px] tracking-[0.18em] uppercase",
                  style: { background: C.ink, color: C.bg, fontFamily: SANS },
                  children: "Prenota il tuo soggiorno"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                  lineNumber: 204,
                  columnNumber: 13
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 193,
              columnNumber: 11
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 189,
            columnNumber: 9
          },
          void 0
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 101,
      columnNumber: 5
    },
    void 0
  );
};
const Hero = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "home", className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: heroImg,
        alt: "Suite premium di un boutique B&B italiano con luce calda al tramonto, design contemporaneo in beige e legno scuro",
        width: 1920,
        height: 1080,
        fetchPriority: "high",
        decoding: "async",
        className: "absolute inset-0 w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 224,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "linear-gradient(180deg, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.25) 35%, rgba(20,16,12,0.75) 100%)"
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 234,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none",
        style: {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 242,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32 text-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl animate-[fadeUp_1s_ease-out]", children: [
      /* @__PURE__ */ jsxDEV(
        "span",
        {
          className: "inline-block text-[11px] tracking-[0.32em] uppercase mb-6",
          style: { fontFamily: SANS, color: C.goldSoft },
          children: "Boutique B&B · Luxury Rooms"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 252,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "h1",
        {
          className: "text-[44px] sm:text-[60px] md:text-[80px] leading-[0.98] mb-6",
          style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
          children: [
            "Boutique Rooms & Luxury Stay",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 263,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("em", { style: { fontStyle: "italic", color: C.goldSoft }, children: "nel cuore italiano" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 264,
              columnNumber: 13
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 258,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("h2", { className: "sr-only", children: "Sito web per boutique B&B e strutture ricettive — concept realizzato da 4 Web Lab, agenzia web di Padova" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 266,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "p",
        {
          className: "text-[15px] md:text-[17px] max-w-xl leading-[1.7] mb-9",
          style: { fontFamily: SANS, color: "rgba(255,255,255,0.85)" },
          children: "Un soggiorno fatto di design contemporaneo, comfort assoluto e dettagli curati. Suite intime, atmosfera silenziosa, esperienze locali su misura — a pochi passi dal centro storico."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 267,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3 mb-10", children: [
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "#camere",
            className: "inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:scale-[1.02]",
            style: { background: C.bg, color: C.ink, fontFamily: SANS, borderRadius: 2 },
            children: [
              "Scopri le camere ",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 282,
                columnNumber: 32
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 277,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
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
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 284,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 276,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-x-6 gap-y-2 text-[12px] tracking-[0.08em] uppercase opacity-85", style: { fontFamily: SANS }, children: [
        { icon: Wifi, t: "Wi-Fi veloce" },
        { icon: KeyRound, t: "Smart Check-in" },
        { icon: Coffee, t: "Colazione inclusa" },
        { icon: MapPin, t: "Centro città" }
      ].map((b, i) => /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(b.icon, { className: "w-3.5 h-3.5", style: { color: C.goldSoft } }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 307,
          columnNumber: 17
        }, void 0),
        b.t
      ] }, i, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 306,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 299,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 251,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 250,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] tracking-[0.3em] uppercase text-white", style: { fontFamily: SANS }, children: "Scroll" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 317,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-4 h-4 text-white animate-bounce" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 318,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 316,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("style", { children: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 321,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 223,
    columnNumber: 5
  }, void 0);
};
const Intro = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "esperienza", className: "py-24 md:py-36", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV(
        "span",
        {
          className: "text-[11px] tracking-[0.3em] uppercase block mb-6",
          style: { fontFamily: SANS, color: C.gold },
          children: "L'esperienza"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 339,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "h2",
        {
          className: "text-[36px] md:text-[56px] leading-[1.05] mb-7",
          style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
          children: [
            "Un soggiorno che resta,",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 349,
              columnNumber: 36
            }, void 0),
            /* @__PURE__ */ jsxDEV("em", { style: { color: C.brownSoft }, children: "oltre la notte trascorsa." }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 350,
              columnNumber: 13
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 345,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.85] mb-5", style: { fontFamily: SANS, color: C.inkSoft }, children: "Velluto Rooms nasce dall'idea di unire l'intimità di un B&B all'eleganza di un boutique hotel contemporaneo. Camere progettate per il silenzio, materiali caldi al tatto, una luce che cambia con la giornata." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 352,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.85]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Ogni dettaglio — dalla colazione servita su misura ai consigli sul territorio — è pensato per farti sentire a casa, ma con un livello di cura che trasforma il soggiorno in esperienza." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 358,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t", style: { borderColor: C.line }, children: [
        { n: "8", l: "Camere premium" },
        { n: "4.9", l: "Guest rating" },
        { n: "12", l: "Anni di accoglienza" },
        { n: "2.4k", l: "Ospiti ogni anno" }
      ].map((s, i) => /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "text-[34px] md:text-[44px] leading-none mb-2",
            style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 },
            children: s.n
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 372,
            columnNumber: 17
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: s.l }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 378,
          columnNumber: 17
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 371,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 364,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 338,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/5] overflow-hidden", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: breakfastImg,
          alt: "Colazione premium servita su tovaglia di lino con cornetti caldi, frutta fresca ed espresso italiano",
          loading: "lazy",
          width: 1024,
          height: 1280,
          className: "w-full h-full object-cover"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 388,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 387,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "hidden md:block absolute -bottom-8 -left-8 w-40 h-40 border",
          style: { borderColor: C.gold },
          "aria-hidden": "true"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 397,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 386,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 337,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 336,
    columnNumber: 5
  }, void 0);
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
  return /* @__PURE__ */ jsxDEV("section", { id: "camere", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mb-16 md:mb-20", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Le camere" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 446,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "h2",
        {
          className: "text-[36px] md:text-[56px] leading-[1.05] mb-5",
          style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
          children: "Tre interpretazioni del comfort."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 449,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Ogni camera è pensata per un tipo di soggiorno diverso: weekend romantico, viaggio business, fuga lenta. Stesso livello di cura, atmosfere su misura." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 455,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 445,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: ROOMS.map((r, i) => /* @__PURE__ */ jsxDEV(
      "article",
      {
        className: "group flex flex-col bg-white transition-all duration-500 hover:-translate-y-1",
        style: { borderRadius: 2, boxShadow: "0 1px 0 rgba(0,0,0,0.04)" },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: r.img,
                alt: r.alt,
                loading: "lazy",
                width: 1280,
                height: 896,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 469,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                style: {
                  background: "linear-gradient(180deg, transparent 50%, rgba(20,16,12,0.45) 100%)"
                }
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 477,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: "absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase",
                style: { background: "rgba(255,255,255,0.92)", color: C.ink, fontFamily: SANS, borderRadius: 2 },
                children: r.sqm
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 483,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 468,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-7 md:p-9 flex flex-col flex-1", children: [
            /* @__PURE__ */ jsxDEV(
              "h3",
              {
                className: "text-[26px] md:text-[28px] leading-tight mb-3",
                style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 },
                children: r.name
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 491,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.7] mb-5", style: { fontFamily: SANS, color: C.inkSoft }, children: r.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 497,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "flex flex-wrap gap-x-4 gap-y-1.5 mb-6 text-[12px]", style: { fontFamily: SANS, color: C.brownSoft }, children: r.services.map((s) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "w-1 h-1 rounded-full", style: { background: C.gold } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 503,
                columnNumber: 23
              }, void 0),
              s
            ] }, s, true, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 502,
              columnNumber: 21
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 500,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-auto pt-5 border-t flex items-center justify-between", style: { borderColor: C.line }, children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[14px]", style: { fontFamily: SERIF, color: C.ink, fontStyle: "italic" }, children: r.price }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 509,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#contatti",
                  className: "inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase transition-colors",
                  style: { fontFamily: SANS, color: C.ink },
                  children: [
                    "Scopri ",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3 h-3" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                      lineNumber: 517,
                      columnNumber: 28
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                  lineNumber: 512,
                  columnNumber: 19
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 508,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 490,
            columnNumber: 15
          }, void 0)
        ]
      },
      i,
      true,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 463,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 461,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 444,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 443,
    columnNumber: 5
  }, void 0);
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
  return /* @__PURE__ */ jsxDEV("section", { id: "gallery", className: "py-24 md:py-36", style: { background: C.bg }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-6", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Gallery" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 549,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "h2",
            {
              className: "text-[36px] md:text-[56px] leading-[1.05]",
              style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
              children: "Atmosfere e dettagli."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 552,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 548,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "max-w-md text-[15px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Una raccolta visiva di camere, spazi comuni, colazione e angoli del territorio che renderanno il soggiorno memorabile." }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 559,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 547,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4", children: GALLERY.map((g, i) => /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setLightbox(i),
          className: `group relative overflow-hidden ${g.span}`,
          style: { borderRadius: 2 },
          "aria-label": `Apri immagine: ${g.alt}`,
          children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: g.src,
                alt: g.alt,
                loading: "lazy",
                className: "w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 574,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                style: { background: "rgba(20,16,12,0.25)" }
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 580,
                columnNumber: 15
              },
              void 0
            )
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 567,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 565,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 546,
      columnNumber: 7
    }, void 0),
    lightbox !== null && /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-[fadeUp_0.3s_ease-out]",
        style: { background: "rgba(20,16,12,0.94)" },
        onClick: () => setLightbox(null),
        role: "dialog",
        "aria-modal": "true",
        children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setLightbox(null),
              className: "absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-white/80 hover:text-white",
              "aria-label": "Chiudi",
              children: /* @__PURE__ */ jsxDEV(X, { className: "w-6 h-6" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 602,
                columnNumber: 13
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 597,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: GALLERY[lightbox].src,
              alt: GALLERY[lightbox].alt,
              className: "max-w-full max-h-full object-contain",
              onClick: (e) => e.stopPropagation()
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 604,
              columnNumber: 11
            },
            void 0
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 590,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 545,
    columnNumber: 5
  }, void 0);
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
  return /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-36", style: { background: C.bgDark }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Territorio" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 643,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "h2",
        {
          className: "text-[36px] md:text-[54px] leading-[1.05] mb-7 text-white",
          style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
          children: [
            "Vivere il luogo,",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 650,
              columnNumber: 29
            }, void 0),
            /* @__PURE__ */ jsxDEV("em", { style: { color: C.goldSoft }, children: "non solo dormirci." }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 651,
              columnNumber: 13
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 646,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.85] mb-8", style: { fontFamily: SANS, color: "rgba(255,255,255,0.72)" }, children: "Il vero lusso, oggi, è il tempo. Velluto Rooms ti dà una base curata per esplorare con calma il centro storico, scoprire ristoranti autentici, vivere esperienze locali pensate su misura." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 653,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "aspect-[4/3] overflow-hidden", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: territoryImg,
          alt: "Strada acciottolata del centro storico italiano illuminata dalla luce calda del tramonto",
          loading: "lazy",
          width: 1280,
          height: 896,
          className: "w-full h-full object-cover"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 659,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 658,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 642,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5", children: blocks.map((b, i) => /* @__PURE__ */ jsxDEV(
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
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-px mb-5", style: { background: C.gold } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 682,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "h3",
            {
              className: "text-[24px] md:text-[28px] leading-tight mb-3 text-white",
              style: { fontFamily: SERIF, fontWeight: 400 },
              children: b.t
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 683,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.75]", style: { fontFamily: SANS, color: "rgba(255,255,255,0.65)" }, children: b.d }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 689,
            columnNumber: 15
          }, void 0)
        ]
      },
      i,
      true,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 672,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 670,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 641,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 640,
    columnNumber: 5
  }, void 0);
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
  return /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Servizi inclusi" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 719,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "h2",
        {
          className: "text-[36px] md:text-[52px] leading-[1.05]",
          style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
          children: "Cura nei dettagli, sempre inclusa."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 722,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 718,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px", style: { background: C.line }, children: SERVICES.map((s, i) => /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "group p-8 md:p-10 flex flex-col items-center text-center transition-colors duration-500",
        style: { background: C.bg },
        onMouseEnter: (e) => e.currentTarget.style.background = C.bgAlt,
        onMouseLeave: (e) => e.currentTarget.style.background = C.bg,
        children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
              style: { background: "transparent", border: `1px solid ${C.gold}` },
              children: /* @__PURE__ */ jsxDEV(s.i, { className: "w-5 h-5", style: { color: C.brownSoft } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 743,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 739,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[13px] tracking-[0.1em] uppercase", style: { fontFamily: SANS, color: C.ink }, children: s.t }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 745,
            columnNumber: 15
          }, void 0)
        ]
      },
      i,
      true,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 732,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 730,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 717,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 716,
    columnNumber: 5
  }, void 0);
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
  return /* @__PURE__ */ jsxDEV("section", { id: "recensioni", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-14", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Voci degli ospiti" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 786,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "h2",
          {
            className: "text-[36px] md:text-[56px] leading-[1.05]",
            style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
            children: "Esperienze, non solo soggiorni."
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 789,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 785,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "flex items-center gap-3 px-5 py-3",
          style: { background: C.bg, border: `1px solid ${C.line}`, borderRadius: 2 },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex", "aria-hidden": true, children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4", style: { color: C.gold, fill: C.gold } }, i, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 802,
              columnNumber: 17
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 800,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[13px] tracking-[0.1em] uppercase", style: { fontFamily: SANS, color: C.ink }, children: "4.9 / 5 Guest Rating" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 805,
              columnNumber: 13
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 796,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 784,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: REVIEWS.map((r, i) => /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "p-8 md:p-10 flex flex-col",
        style: { background: C.bg, border: `1px solid ${C.line}`, borderRadius: 2 },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex mb-5", "aria-hidden": true, children: Array.from({ length: r.r }).map((_, j) => /* @__PURE__ */ jsxDEV(Star, { className: "w-3.5 h-3.5", style: { color: C.gold, fill: C.gold } }, j, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 820,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 818,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "p",
            {
              className: "text-[17px] leading-[1.65] mb-7 flex-1",
              style: { fontFamily: SERIF, color: C.ink, fontStyle: "italic", fontWeight: 400 },
              children: [
                '"',
                r.t,
                '"'
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 823,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "pt-5 border-t", style: { borderColor: C.line }, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-[14px]", style: { fontFamily: SANS, color: C.ink, fontWeight: 500 }, children: r.n }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 830,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "text-[12px] tracking-[0.08em] uppercase mt-1", style: { fontFamily: SANS, color: C.inkSoft }, children: r.from }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 833,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 829,
            columnNumber: 15
          }, void 0)
        ]
      },
      i,
      true,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 813,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 811,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 783,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 782,
    columnNumber: 5
  }, void 0);
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
  return /* @__PURE__ */ jsxDEV("section", { id: "contatti", className: "py-24 md:py-36 relative overflow-hidden", style: { background: C.bgDark }, children: [
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute inset-0 pointer-events-none opacity-40",
        style: {
          background: `radial-gradient(ellipse at top, ${C.gold}22 0%, transparent 60%)`
        }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 899,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.gold }, children: "Contatti" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 907,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "h2",
          {
            className: "text-[40px] md:text-[64px] leading-[1.02] mb-8 text-white",
            style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
            children: [
              "Richiedi ",
              /* @__PURE__ */ jsxDEV("em", { style: { color: C.goldSoft }, children: "disponibilità" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 914,
                columnNumber: 22
              }, void 0),
              "."
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 910,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.85] mb-10 max-w-md", style: { fontFamily: SANS, color: "rgba(255,255,255,0.72)" }, children: "Raccontaci le tue date e cosa cerchi dal soggiorno. Ti rispondiamo con una proposta personalizzata e disponibilità reale." }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 916,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-5 mb-10", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "tel:+393514656042",
              className: "flex items-center gap-4 group transition-opacity hover:opacity-80",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "w-11 h-11 flex items-center justify-center",
                    style: { border: `1px solid ${C.gold}`, borderRadius: 2 },
                    children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4", style: { color: C.goldSoft } }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                      lineNumber: 930,
                      columnNumber: 17
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 926,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.5)" }, children: "Telefono" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 933,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "+39 351 465 6042" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 936,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                  lineNumber: 932,
                  columnNumber: 15
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 922,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "https://wa.me/393514656042",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-4 group transition-opacity hover:opacity-80",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "w-11 h-11 flex items-center justify-center",
                    style: { border: `1px solid ${C.gold}`, borderRadius: 2 },
                    children: /* @__PURE__ */ jsxDEV(MessageCircle, { className: "w-4 h-4", style: { color: C.goldSoft } }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                      lineNumber: 952,
                      columnNumber: 17
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 948,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.5)" }, children: "WhatsApp" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 955,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "Scrivici su WhatsApp" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 958,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                  lineNumber: 954,
                  columnNumber: 15
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 942,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "mailto:info@4weblab.it",
              className: "flex items-center gap-4 group transition-opacity hover:opacity-80",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "w-11 h-11 flex items-center justify-center",
                    style: { border: `1px solid ${C.gold}`, borderRadius: 2 },
                    children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4", style: { color: C.goldSoft } }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                      lineNumber: 972,
                      columnNumber: 17
                    }, void 0)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 968,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.5)" }, children: "Email" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 975,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "info@4weblab.it" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                    lineNumber: 978,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                  lineNumber: 974,
                  columnNumber: 15
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 964,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 921,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
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
              /* @__PURE__ */ jsxDEV("strong", { style: { color: C.goldSoft, fontWeight: 500 }, children: "Nota concept:" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 994,
                columnNumber: 13
              }, void 0),
              " ",
              '"Velluto Rooms" è una demo concept realizzata da',
              " ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline", style: { color: C.goldSoft }, children: "4 Web Lab" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 996,
                columnNumber: 13
              }, void 0),
              ". Le richieste inviate da questa pagina vengono ricevute direttamente da 4 Web Lab a scopo dimostrativo. Vedi le altre ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "underline", style: { color: C.goldSoft }, children: "realizzazioni" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 998,
                columnNumber: 59
              }, void 0),
              "."
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 985,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 906,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("form", { onSubmit, className: "lg:pt-10", children: done ? /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "p-10 text-center",
          style: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2 },
          children: [
            /* @__PURE__ */ jsxDEV(Heart, { className: "w-8 h-8 mx-auto mb-5", style: { color: C.gold } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1009,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-[26px] mb-3 text-white", style: { fontFamily: SERIF, fontWeight: 400 }, children: "Grazie, abbiamo ricevuto la tua richiesta." }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1010,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: "rgba(255,255,255,0.65)" }, children: "Ti ricontatteremo a breve con una proposta su misura." }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1013,
              columnNumber: 15
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1005,
          columnNumber: 13
        },
        void 0
      ) : /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "bb-name", children: "Nome completo *" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1021,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("input", { id: "bb-name", name: "name", type: "text", required: true, style: inputBase }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1022,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1020,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "bb-email", children: "Email *" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1025,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("input", { id: "bb-email", name: "email", type: "email", required: true, style: inputBase }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1026,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1024,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1019,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "bb-phone", children: "Telefono" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1032,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("input", { id: "bb-phone", name: "phone", type: "tel", style: inputBase }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1033,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1031,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "bb-guests", children: "Ospiti" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1036,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("input", { id: "bb-guests", name: "guests", type: "number", min: 1, max: 6, defaultValue: 2, style: inputBase }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1037,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1035,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1030,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "bb-checkin", children: "Check-in" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1043,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("input", { id: "bb-checkin", name: "check_in", type: "date", style: inputBase }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1044,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1042,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "bb-checkout", children: "Check-out" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1047,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("input", { id: "bb-checkout", name: "check_out", type: "date", style: inputBase }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1048,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1046,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1041,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "bb-msg", children: "Messaggio" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1053,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "textarea",
            {
              id: "bb-msg",
              name: "message",
              rows: 3,
              style: { ...inputBase, resize: "vertical" },
              placeholder: "Tipo di soggiorno, occasione, preferenze…"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1054,
              columnNumber: 17
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1052,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("label", { className: "flex gap-3 items-start cursor-pointer pt-2", children: [
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "checkbox",
              checked: consent,
              onChange: (e) => setConsent(e.target.checked),
              className: "mt-1 accent-current",
              style: { accentColor: C.gold }
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1064,
              columnNumber: 17
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[12px] leading-[1.7]", style: { fontFamily: SANS, color: "rgba(255,255,255,0.6)" }, children: [
            "Acconsento al trattamento dei dati per essere ricontattato (Art. 6.1.b GDPR). Titolare: 4 Web Lab di Fullin Carlo — P.IVA 05765760284.",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "underline", style: { color: C.goldSoft }, children: "Privacy Policy" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
              lineNumber: 1074,
              columnNumber: 19
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1071,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1063,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("input", { type: "text", name: "botcheck", className: "hidden", tabIndex: -1, autoComplete: "off" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1079,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(
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
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1081,
            columnNumber: 15
          },
          void 0
        ),
        error && /* @__PURE__ */ jsxDEV("p", { className: "text-[13px] text-red-300", style: { fontFamily: SANS }, children: error }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1097,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1018,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1003,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 905,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8 mt-16 md:mt-20 text-center", children: /* @__PURE__ */ jsxDEV(
      Link,
      {
        to: "/realizzazioni",
        className: "inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline",
        style: { fontFamily: SANS, color: C.gold },
        children: "Torna alla lista delle demo"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1104,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 1103,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 897,
    columnNumber: 5
  }, void 0);
};
const DemoFooter = () => {
  return /* @__PURE__ */ jsxDEV("footer", { style: { background: "#0E0B09", color: "rgba(255,255,255,0.6)" }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "text-[22px] tracking-[0.22em] uppercase mb-5 text-white",
            style: { fontFamily: SERIF, fontWeight: 500 },
            children: [
              "Velluto",
              /* @__PURE__ */ jsxDEV("span", { style: { color: C.gold }, children: "·" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
                lineNumber: 1128,
                columnNumber: 20
              }, void 0),
              "Rooms"
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1124,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.8] max-w-sm", style: { fontFamily: SANS }, children: "Boutique B&B contemporaneo: camere premium, esperienze locali e un'idea di accoglienza che non smette mai di evolvere." }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1130,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1123,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] tracking-[0.2em] uppercase text-white mb-4", style: { fontFamily: SANS }, children: "Naviga" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1137,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: NAV.map((n) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: `#${n.id}`, className: "hover:text-white transition-colors", children: n.label }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1143,
          columnNumber: 17
        }, void 0) }, n.id, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1142,
          columnNumber: 15
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1140,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1136,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] tracking-[0.2em] uppercase text-white mb-4", style: { fontFamily: SANS }, children: "Contatti" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1150,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+393514656042", className: "hover:text-white", children: "+39 351 465 6042" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1154,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1154,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "mailto:info@4weblab.it", className: "hover:text-white", children: "info@4weblab.it" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1155,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1155,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "https://wa.me/393514656042", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white", children: "WhatsApp" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1156,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1156,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1153,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1149,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 1122,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "border-t py-7 text-[12px] text-center",
        style: { borderColor: "rgba(255,255,255,0.08)", fontFamily: SANS },
        children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Velluto Rooms — Tech demo realizzata da",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline hover:text-white", style: { color: C.goldSoft }, children: "4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1165,
            columnNumber: 9
          }, void 0),
          ". Brand fittizio a scopo dimostrativo."
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1160,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 1121,
    columnNumber: 5
  }, void 0);
};
const StickyMobileCTA = () => /* @__PURE__ */ jsxDEV(
  "div",
  {
    className: "lg:hidden fixed bottom-4 left-4 right-4 z-40",
    style: { filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.25))" },
    children: /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: "#contatti",
        className: "flex items-center justify-center gap-2 py-3.5 text-[12px] tracking-[0.22em] uppercase",
        style: { background: C.ink, color: C.bg, fontFamily: SANS, borderRadius: 2 },
        children: [
          "Richiedi disponibilità ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
            lineNumber: 1185,
            columnNumber: 30
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1180,
        columnNumber: 5
      },
      void 0
    )
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 1176,
    columnNumber: 3
  },
  void 0
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
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Sito Web per Boutique B&B · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1253,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Demo di sito web per boutique B&B e luxury rooms, realizzata da 4 Web Lab, agenzia web di Padova specializzata in attività ricettive. Da 899€."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1254,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1258,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1259,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: canonical }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1260,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1263,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1264,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: "Realizzazioni" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1265,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: canonical }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1266,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Sito Web per Boutique B&B · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1267,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "Demo di sito web per boutique B&B e luxury rooms · 4 Web Lab, agenzia web di Padova. Pacchetto aziendale da 899€."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1268,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1272,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1273,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og/boutique-bb-luxury-rooms.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1274,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1277,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Sito Web per Boutique B&B · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1278,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:description",
          content: "Demo di sito web per boutique B&B e luxury rooms · 4 Web Lab, agenzia web di Padova."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1279,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og/boutique-bb-luxury-rooms.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1283,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1286,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1289,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1290,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap",
          rel: "stylesheet"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1291,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(creativeLd) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1297,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1298,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(webPageLd) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1299,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 1252,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { style: { background: C.bg, color: C.ink, fontFamily: SANS }, children: [
      /* @__PURE__ */ jsxDEV(DemoHeader, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1303,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("main", { children: [
        /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1305,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Intro, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1306,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Rooms, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1307,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Gallery, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1308,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Territory, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1309,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Services, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1310,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Reviews, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1311,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
          lineNumber: 1312,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1304,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(DemoFooter, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1314,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(StickyMobileCTA, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
        lineNumber: 1315,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
      lineNumber: 1302,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoBoutiqueBB.tsx",
    lineNumber: 1251,
    columnNumber: 5
  }, void 0);
};
export {
  DemoBoutiqueBB as default
};
