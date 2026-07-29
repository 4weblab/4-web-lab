import { j as jsxDEV, b as Fragment } from "../main.mjs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Sparkles, Dumbbell, ArrowRight, Award, ChevronDown, CheckCircle2, Quote, Instagram, Phone, MessageCircle, Mail, Heart, Brain, Minus, Plus } from "lucide-react";
import { h as heroImg } from "./vera-method-hero-DK5OfB24.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxDEV(
    "header",
    {
      className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      style: {
        background: scrolled ? "rgba(20,20,22,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent"
      },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[80px] flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo("home"),
              className: "flex items-center gap-2",
              "aria-label": "Vera Method — torna alla home",
              children: /* @__PURE__ */ jsxDEV(
                "span",
                {
                  className: "text-[20px] md:text-[24px] tracking-[0.16em] uppercase",
                  style: { fontFamily: SERIF, color: C.ink, fontWeight: 500, letterSpacing: "0.18em" },
                  children: [
                    "Vera",
                    /* @__PURE__ */ jsxDEV("span", { style: { color: C.coral }, children: "·" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                      lineNumber: 112,
                      columnNumber: 17
                    }, void 0),
                    "Method"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 108,
                  columnNumber: 11
                },
                void 0
              )
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 103,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("nav", { className: "hidden lg:flex items-center gap-8", children: NAV.map((n) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo(n.id),
              className: "text-[12px] tracking-[0.18em] uppercase transition-colors hover:opacity-100",
              style: { fontFamily: SANS, color: C.inkSoft },
              children: n.label
            },
            n.id,
            false,
            {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 118,
              columnNumber: 13
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 116,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV(
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
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 130,
              columnNumber: 11
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 129,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5",
              "aria-label": "Apri menu",
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "block w-6 h-px transition-transform", style: { background: C.ink, transform: open ? "translateY(6px) rotate(45deg)" : "none" } }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 150,
                  columnNumber: 11
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "block w-6 h-px transition-opacity", style: { background: C.ink, opacity: open ? 0 : 1 } }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 151,
                  columnNumber: 11
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "block w-6 h-px transition-transform", style: { background: C.ink, transform: open ? "translateY(-6px) rotate(-45deg)" : "none" } }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 152,
                  columnNumber: 11
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 145,
              columnNumber: 9
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 102,
          columnNumber: 7
        }, void 0),
        open && /* @__PURE__ */ jsxDEV("div", { className: "lg:hidden border-t", style: { background: C.bg, borderColor: C.line }, children: /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-6 flex flex-col gap-1", children: [
          NAV.map((n) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo(n.id),
              className: "text-left py-3 text-[14px] tracking-[0.12em] uppercase border-b",
              style: { fontFamily: SANS, color: C.ink, borderColor: C.line },
              children: n.label
            },
            n.id,
            false,
            {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 160,
              columnNumber: 15
            },
            void 0
          )),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo("contatti"),
              className: "mt-4 px-5 py-3 text-[11px] tracking-[0.22em] uppercase",
              style: { background: C.coral, color: C.bg, fontFamily: SANS, borderRadius: 999, fontWeight: 600 },
              children: "Prenota consulenza"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 169,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 158,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 157,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 94,
      columnNumber: 5
    },
    void 0
  );
};
const BackBar = () => /* @__PURE__ */ jsxDEV("div", { className: "pt-[68px] md:pt-[80px]", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between border-b", style: { borderColor: C.line }, children: [
  /* @__PURE__ */ jsxDEV(
    Link,
    {
      to: "/realizzazioni",
      className: "inline-flex items-center gap-2 text-[11px] md:text-[12px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70",
      style: { fontFamily: SANS, color: C.inkSoft },
      children: [
        /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-3.5 h-3.5" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 194,
          columnNumber: 9
        }, void 0),
        "Torna alle Realizzazioni"
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 189,
      columnNumber: 7
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV(
    "span",
    {
      className: "hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase",
      style: { fontFamily: SANS, color: C.inkMute },
      children: [
        /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5", style: { color: C.coral } }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 201,
          columnNumber: 9
        }, void 0),
        "Demo concept · 4 Web Lab"
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 197,
      columnNumber: 7
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 188,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 187,
  columnNumber: 3
}, void 0);
const Hero = () => /* @__PURE__ */ jsxDEV("section", { id: "home", className: "relative overflow-hidden", style: { background: C.bg }, children: [
  /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-6 relative z-10", children: [
      /* @__PURE__ */ jsxDEV(
        "span",
        {
          className: "inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase mb-7",
          style: { fontFamily: SANS, color: C.coral },
          children: [
            /* @__PURE__ */ jsxDEV(Dumbbell, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 219,
              columnNumber: 11
            }, void 0),
            " Personal Training · Padova"
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 215,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "h1",
        {
          className: "text-[44px] sm:text-[56px] md:text-[72px] leading-[0.98] mb-7",
          style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.02em" },
          children: [
            "Il movimento come",
            " ",
            /* @__PURE__ */ jsxDEV("em", { style: { fontStyle: "italic", color: C.coral }, children: "atto di cura" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 226,
              columnNumber: 11
            }, void 0),
            ".",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 227,
              columnNumber: 11
            }, void 0),
            "Verso una nuova versione di te."
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 221,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("h2", { className: "sr-only", children: "Vera Method · Giulia Conti — Personal Trainer donna a Padova. Demo concept realizzata da 4 Web Lab." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "p",
        {
          className: "text-[16px] md:text-[18px] leading-[1.7] mb-9 max-w-xl",
          style: { fontFamily: SANS, color: C.inkSoft },
          children: [
            "Coaching 1:1 e small group dedicati alle donne che vogliono allenarsi in modo intelligente, sostenibile e finalmente loro. Un metodo che unisce ",
            /* @__PURE__ */ jsxDEV("strong", { style: { color: C.ink }, children: "forza, nutrizione e mindset" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 239,
              columnNumber: 18
            }, void 0),
            "."
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 233,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3 mb-10", children: [
        /* @__PURE__ */ jsxDEV(
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
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 252,
                columnNumber: 36
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 243,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "#metodo",
            className: "inline-flex items-center gap-2 px-7 py-4 text-[12px] tracking-[0.22em] uppercase transition-all hover:bg-white/5",
            style: { fontFamily: SANS, color: C.ink, border: `1px solid ${C.line}`, borderRadius: 999 },
            children: "Scopri il metodo"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 254,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-x-7 gap-y-3 pt-7 border-t", style: { borderColor: C.line }, children: [
        { n: "8+", l: "anni di esperienza" },
        { n: "200+", l: "donne seguite" },
        { n: "1:1", l: "approccio su misura" }
      ].map((s) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-[28px]", style: { fontFamily: SERIF, color: C.coral, fontWeight: 500 }, children: s.n }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 270,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkMute }, children: s.l }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 271,
          columnNumber: 15
        }, void 0)
      ] }, s.l, true, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 269,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 263,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-6 relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: heroImg,
            alt: "Giulia Conti, personal trainer donna, in piedi nello studio Vera Method a Padova — concept sito web realizzato da 4 Web Lab",
            width: 1600,
            height: 1024,
            fetchPriority: "high",
            decoding: "async",
            className: "w-full h-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 279,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: { background: "linear-gradient(180deg, transparent 55%, rgba(20,20,22,0.55) 100%)" }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 288,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 278,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          "aria-hidden": true,
          className: "hidden md:block absolute -bottom-6 -left-6 w-44 h-44 rounded-2xl",
          style: { border: `1px solid ${C.coral}`, opacity: 0.65 }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 294,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          "aria-hidden": true,
          className: "hidden md:flex absolute -top-5 -right-5 w-24 h-24 items-center justify-center text-center rounded-full",
          style: { background: C.bgSoft, border: `1px solid ${C.line}` },
          children: /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(Award, { className: "w-5 h-5 mx-auto mb-1", style: { color: C.coral } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 305,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] tracking-[0.2em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: [
              "Certified",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 307,
                columnNumber: 24
              }, void 0),
              "Trainer"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 306,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 304,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 299,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 277,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 213,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] tracking-[0.3em] uppercase", style: { fontFamily: SANS, color: C.ink }, children: "Scroll" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 315,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-4 h-4 animate-bounce", style: { color: C.ink } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 316,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 314,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 212,
  columnNumber: 3
}, void 0);
const TrustStrip = () => /* @__PURE__ */ jsxDEV("section", { className: "py-8 border-y", style: { background: C.bgAlt, borderColor: C.line }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[11px] tracking-[0.22em] uppercase", style: { fontFamily: SANS, color: C.inkMute }, children: [
  /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5", style: { color: C.coral } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 327,
      columnNumber: 49
    }, void 0),
    " Cert. CONI / FIF"
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 327,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { className: "hidden md:inline opacity-30", children: "·" }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 328,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5", style: { color: C.coral } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 329,
      columnNumber: 49
    }, void 0),
    " Studio privato a Padova"
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 329,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { className: "hidden md:inline opacity-30", children: "·" }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 330,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5", style: { color: C.coral } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 331,
      columnNumber: 49
    }, void 0),
    " Pre & Post partum"
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 331,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { className: "hidden md:inline opacity-30", children: "·" }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 332,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5", style: { color: C.coral } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 333,
      columnNumber: 49
    }, void 0),
    " Online coaching"
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 333,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 326,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 325,
  columnNumber: 3
}, void 0);
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
const Metodo = () => /* @__PURE__ */ jsxDEV("section", { id: "metodo", className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mb-14 md:mb-20", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "Il metodo" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 363,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-5",
        style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Tre pilastri,",
          " ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.coral }, children: "una sola direzione" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 371,
            columnNumber: 11
          }, void 0),
          "."
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 366,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Vera Method nasce dall'idea che il vero cambiamento non è un programma di 12 settimane: è un nuovo modo di abitare il proprio corpo. Lavoriamo su tre dimensioni, sempre insieme." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 373,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 362,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: PILLARS.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ jsxDEV(
    "article",
    {
      className: "p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1",
      style: {
        background: C.bgSoft,
        border: `1px solid ${C.line}`,
        boxShadow: "0 1px 0 rgba(255,255,255,0.02)"
      },
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "w-12 h-12 flex items-center justify-center mb-7 rounded-xl",
            style: { background: "rgba(255,107,91,0.12)", border: `1px solid rgba(255,107,91,0.3)` },
            children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-5 h-5", style: { color: C.coral } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 395,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 391,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "h3",
          {
            className: "text-[26px] md:text-[30px] mb-4",
            style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 },
            children: title
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 397,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("p", { className: "text-[15px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: desc }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 403,
          columnNumber: 13
        }, void 0)
      ]
    },
    i,
    true,
    {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 382,
      columnNumber: 11
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 380,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 361,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 360,
  columnNumber: 3
}, void 0);
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
const Programmi = () => /* @__PURE__ */ jsxDEV("section", { id: "programmi", className: "py-24 md:py-32", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mb-14 md:mb-20", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "I programmi" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 447,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-5",
        style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Tre formule, ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.coral }, children: "una stessa cura" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 454,
            columnNumber: 24
          }, void 0),
          "."
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 450,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Scegli il formato che ti somiglia di più. La proposta nasce sempre da una consulenza iniziale gratuita di 30 minuti." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 456,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 446,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: PROGRAMS.map((p, i) => /* @__PURE__ */ jsxDEV(
    "article",
    {
      className: "group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5",
      style: { background: C.bgSoft, border: `1px solid ${C.line}` },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: p.img,
            alt: p.alt,
            loading: "lazy",
            width: 1280,
            height: 960,
            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 470,
            columnNumber: 15
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 469,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-8 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline justify-between mb-4 gap-3", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-[24px]", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 }, children: p.name }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 481,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[12px] tracking-[0.14em] uppercase", style: { fontFamily: SANS, color: C.coral }, children: p.price }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 484,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 480,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.7] mb-6", style: { fontFamily: SANS, color: C.inkSoft }, children: p.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 488,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 mb-7", children: p.bullets.map((b) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-[13px]", style: { fontFamily: SANS, color: C.ink }, children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.coral } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 494,
              columnNumber: 21
            }, void 0),
            b
          ] }, b, true, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 493,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 491,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "#contatti",
              className: "mt-auto inline-flex items-center gap-1.5 text-[12px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70",
              style: { fontFamily: SANS, color: C.coral, fontWeight: 600 },
              children: [
                "Richiedi info ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 504,
                  columnNumber: 31
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 499,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 479,
          columnNumber: 13
        }, void 0)
      ]
    },
    i,
    true,
    {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 464,
      columnNumber: 11
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 462,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 445,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 444,
  columnNumber: 3
}, void 0);
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
const Risultati = () => /* @__PURE__ */ jsxDEV("section", { id: "risultati", className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "Risultati (demo)" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 539,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[34px] md:text-[48px] leading-[1.05]",
        style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Donne che si sono ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.coral }, children: "riprese il loro spazio" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 546,
            columnNumber: 29
          }, void 0),
          "."
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 542,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "mt-5 text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Contenuti dichiaratamente fittizi: nel sito reale ospiterebbero recensioni verificate o Google Reviews." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 548,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 538,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: TESTI.map((r, i) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "p-8 md:p-10 rounded-2xl flex flex-col",
      style: { background: C.bgSoft, border: `1px solid ${C.line}` },
      children: [
        /* @__PURE__ */ jsxDEV(Quote, { className: "w-6 h-6 mb-5", style: { color: C.coral } }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 560,
          columnNumber: 13
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
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 561,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-5 border-t flex items-center justify-between gap-3", style: { borderColor: C.line }, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[12px] tracking-[0.1em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: r.n }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 568,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full", style: { fontFamily: SANS, color: C.coral, border: `1px solid rgba(255,107,91,0.35)` }, children: r.tag }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 571,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 567,
          columnNumber: 13
        }, void 0)
      ]
    },
    i,
    true,
    {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 555,
      columnNumber: 11
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 553,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 537,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 536,
  columnNumber: 3
}, void 0);
const ChiSono = () => /* @__PURE__ */ jsxDEV("section", { id: "chi-sono", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 md:gap-16 items-center", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-5 relative", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: portraitImg,
        alt: "Ritratto editoriale di Giulia Conti, personal trainer donna fondatrice del metodo Vera Method",
        loading: "lazy",
        width: 1024,
        height: 1280,
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 590,
        columnNumber: 11
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 589,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        "aria-hidden": true,
        className: "hidden md:block absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl",
        style: { border: `1px solid ${C.coral}`, opacity: 0.55 }
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 599,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 588,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-7", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "Chi sono" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 607,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[36px] md:text-[52px] leading-[1.05] mb-7",
        style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Giulia Conti,",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 614,
            columnNumber: 24
          }, void 0),
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.coral }, children: "personal trainer per donne" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 615,
            columnNumber: 11
          }, void 0),
          "."
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 610,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.85] mb-5", style: { fontFamily: SANS, color: C.inkSoft }, children: [
      "Laureata in Scienze Motorie all'Università di Padova, certificata",
      " ",
      /* @__PURE__ */ jsxDEV("strong", { style: { color: C.ink }, children: "CONI" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 619,
        columnNumber: 11
      }, void 0),
      " e",
      " ",
      /* @__PURE__ */ jsxDEV("strong", { style: { color: C.ink }, children: "FIF — Federazione Italiana Fitness" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 620,
        columnNumber: 11
      }, void 0),
      ", mi occupo da oltre 8 anni di allenamento al femminile, con specializzazione in pre e post partum, ricomposizione corporea e mobilità."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 617,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.85] mb-9", style: { fontFamily: SANS, color: C.inkSoft }, children: "Vera Method è il modo in cui credo che l'allenamento debba essere fatto: rigoroso ma rispettoso, ambizioso ma sostenibile, e soprattutto pensato per chi siamo davvero — non per come vorremmo apparire." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 624,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-6 pt-8 border-t", style: { borderColor: C.line }, children: [
      { n: "8+", l: "Anni di pratica" },
      { n: "200+", l: "Donne seguite" },
      { n: "CONI", l: "Tecnico certificato" },
      { n: "FIF", l: "Specializzazione femminile" }
    ].map((s, i) => /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-[28px] md:text-[36px] leading-none mb-2", style: { fontFamily: SERIF, color: C.coral, fontWeight: 500 }, children: s.n }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 638,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkMute }, children: s.l }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 641,
        columnNumber: 15
      }, void 0)
    ] }, i, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 637,
      columnNumber: 13
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 630,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-9 flex items-center gap-4 text-[12px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "inline-flex items-center gap-2 hover:opacity-70 transition-opacity", onClick: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxDEV(Instagram, { className: "w-4 h-4", style: { color: C.coral } }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 650,
        columnNumber: 13
      }, void 0),
      " @veramethod"
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 649,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 648,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 606,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 587,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 586,
  columnNumber: 3
}, void 0);
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
  return /* @__PURE__ */ jsxDEV("div", { className: "border-b", style: { borderColor: C.line }, children: [
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        className: "w-full flex items-center justify-between gap-6 py-6 text-left transition-colors hover:opacity-80",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[17px] md:text-[20px]", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 }, children: q }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 693,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: "w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full transition-colors",
              style: { background: open ? C.coral : "transparent", border: `1px solid ${open ? C.coral : C.line}`, color: open ? C.bg : C.coral },
              children: open ? /* @__PURE__ */ jsxDEV(Minus, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 700,
                columnNumber: 19
              }, void 0) : /* @__PURE__ */ jsxDEV(Plus, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 700,
                columnNumber: 51
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 696,
              columnNumber: 9
            },
            void 0
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 688,
        columnNumber: 7
      },
      void 0
    ),
    open && /* @__PURE__ */ jsxDEV("div", { className: "pb-7 pr-12 text-[15px] leading-[1.75]", style: { fontFamily: SANS, color: C.inkSoft }, children: a }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 704,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 687,
    columnNumber: 5
  }, void 0);
};
const Faq = () => /* @__PURE__ */ jsxDEV("section", { id: "faq", className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "mb-14 md:mb-20 text-center max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.coral }, children: "Domande frequenti" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 716,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("h2", { className: "text-[34px] md:text-[48px] leading-[1.05]", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" }, children: [
      "Le risposte alle ",
      /* @__PURE__ */ jsxDEV("em", { style: { color: C.coral }, children: "domande più comuni" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 720,
        columnNumber: 28
      }, void 0),
      "."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 719,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 715,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { children: FAQS.map((f, i) => /* @__PURE__ */ jsxDEV(FaqItem, { q: f.q, a: f.a }, i, false, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 725,
    columnNumber: 11
  }, void 0)) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 723,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 714,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 713,
  columnNumber: 3
}, void 0);
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
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      id: "contatti",
      className: "relative overflow-hidden py-24 md:py-32",
      style: { background: `linear-gradient(160deg, #1a1418 0%, ${C.bg} 60%, #221619 100%)` },
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none opacity-[0.18]",
            style: {
              backgroundImage: "radial-gradient(circle at 15% 20%, rgba(255,107,91,0.35) 0px, transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,107,91,0.18) 0px, transparent 45%)"
            }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 789,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] tracking-[0.28em] uppercase mb-7",
                style: { fontFamily: SANS, color: C.coralSoft, border: `1px solid rgba(255,107,91,0.45)` },
                children: [
                  /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 803,
                    columnNumber: 13
                  }, void 0),
                  " Demo concept · contatto diretto con 4 Web Lab"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 799,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "h2",
              {
                className: "text-[36px] sm:text-[48px] md:text-[60px] leading-[1.04] mb-7",
                style: { fontFamily: SERIF, color: C.ink, fontWeight: 400, letterSpacing: "-0.01em" },
                children: [
                  "Vuoi un sito così",
                  " ",
                  /* @__PURE__ */ jsxDEV("em", { style: { color: C.coral }, children: "anche per la tua attività?" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 810,
                    columnNumber: 13
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 805,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] md:text-[17px] leading-[1.8] max-w-2xl mx-auto", style: { fontFamily: SANS, color: C.inkSoft }, children: [
              /* @__PURE__ */ jsxDEV("strong", { style: { color: C.ink }, children: "4 Web Lab" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 813,
                columnNumber: 13
              }, void 0),
              " realizza siti web per professionisti, personal trainer, studi privati e di settore a Padova e in tutta Italia. Soluzioni una tantum",
              " ",
              /* @__PURE__ */ jsxDEV("strong", { style: { color: C.ink }, children: "a partire da 549€" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 816,
                columnNumber: 13
              }, void 0),
              ", curate in ogni dettaglio."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 812,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 798,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-14 lg:gap-20 items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-[22px] md:text-[26px] mb-7", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 }, children: "Parla direttamente con 4 Web Lab." }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 823,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-5 mb-8", children: [
                /* @__PURE__ */ jsxDEV("a", { href: "tel:+393514656042", className: "flex items-center gap-4 group transition-opacity hover:opacity-80", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-11 h-11 flex items-center justify-center rounded-xl", style: { border: `1px solid ${C.line}` }, children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4", style: { color: C.coral } }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 830,
                    columnNumber: 19
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 829,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: C.inkMute }, children: "Telefono" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                      lineNumber: 833,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[17px]", style: { fontFamily: SERIF, color: C.ink }, children: "+39 351 465 6042" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                      lineNumber: 836,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 832,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 828,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: "https://wa.me/393514656042",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-4 group transition-opacity hover:opacity-80",
                    children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "w-11 h-11 flex items-center justify-center rounded-xl", style: { border: `1px solid ${C.line}` }, children: /* @__PURE__ */ jsxDEV(MessageCircle, { className: "w-4 h-4", style: { color: "#25D366" } }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                        lineNumber: 847,
                        columnNumber: 19
                      }, void 0) }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                        lineNumber: 846,
                        columnNumber: 17
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: C.inkMute }, children: [
                          "WhatsApp ",
                          /* @__PURE__ */ jsxDEV("span", { className: "opacity-60", children: "(da mobile)" }, void 0, false, {
                            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                            lineNumber: 851,
                            columnNumber: 30
                          }, void 0)
                        ] }, void 0, true, {
                          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                          lineNumber: 850,
                          columnNumber: 19
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("div", { className: "text-[17px]", style: { fontFamily: SERIF, color: C.ink }, children: "Scrivici subito su WhatsApp" }, void 0, false, {
                          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                          lineNumber: 853,
                          columnNumber: 19
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                        lineNumber: 849,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 840,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("a", { href: "mailto:info@4weblab.it", className: "flex items-center gap-4 group transition-opacity hover:opacity-80", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-11 h-11 flex items-center justify-center rounded-xl", style: { border: `1px solid ${C.line}` }, children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4", style: { color: C.coral } }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 859,
                    columnNumber: 19
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 858,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: C.inkMute }, children: "Email" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                      lineNumber: 862,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[17px]", style: { fontFamily: SERIF, color: C.ink }, children: "info@4weblab.it" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                      lineNumber: 865,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 861,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 857,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 827,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "p-5 rounded-xl text-[12px] leading-[1.7]",
                  style: { border: `1px dashed rgba(255,107,91,0.45)`, color: C.inkSoft, fontFamily: SANS },
                  children: [
                    /* @__PURE__ */ jsxDEV("strong", { style: { color: C.coral, fontWeight: 600 }, children: "Importante:" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                      lineNumber: 874,
                      columnNumber: 15
                    }, void 0),
                    " ",
                    '"Vera Method · Giulia Conti" è una demo concept. Il contatto inviato da questa pagina arriva direttamente a',
                    " ",
                    /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline", style: { color: C.coralSoft }, children: "4 Web Lab" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                      lineNumber: 877,
                      columnNumber: 15
                    }, void 0),
                    " ",
                    "— non a una personal trainer reale. Vedi le altre",
                    " ",
                    /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "underline", style: { color: C.coralSoft }, children: "realizzazioni" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                      lineNumber: 879,
                      columnNumber: 15
                    }, void 0),
                    "."
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 870,
                  columnNumber: 13
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 822,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("form", { onSubmit, children: done ? /* @__PURE__ */ jsxDEV("div", { className: "p-10 text-center rounded-2xl", style: { background: "rgba(255,255,255,0.04)", border: `1px solid ${C.line}` }, children: [
              /* @__PURE__ */ jsxDEV(Heart, { className: "w-8 h-8 mx-auto mb-5", style: { color: C.coral } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 886,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-[26px] mb-3", style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 }, children: "Richiesta ricevuta, grazie." }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 887,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Ti ricontatteremo a breve con una proposta su misura per la tua attività." }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 890,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 885,
              columnNumber: 15
            }, void 0) : /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "vm-name", children: "Nome completo *" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 898,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("input", { id: "vm-name", name: "name", type: "text", required: true, style: inputBase }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 899,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 897,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "vm-email", children: "Email *" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 902,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("input", { id: "vm-email", name: "email", type: "email", required: true, style: inputBase }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 903,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 901,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 896,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "vm-phone", children: "Telefono" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 908,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("input", { id: "vm-phone", name: "phone", type: "tel", style: inputBase }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 909,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 907,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "vm-activity", children: "Tipo di attività" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 912,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("input", { id: "vm-activity", name: "activity", type: "text", placeholder: "Personal trainer, studio, professionista…", style: inputBase }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 913,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 911,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 906,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "vm-msg", children: "Messaggio" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 917,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "textarea",
                  {
                    id: "vm-msg",
                    name: "message",
                    rows: 4,
                    style: { ...inputBase, resize: "vertical" },
                    placeholder: "Raccontaci la tua attività e cosa vorresti ottenere dal sito…"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 918,
                    columnNumber: 19
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 916,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("label", { className: "flex gap-3 items-start cursor-pointer pt-2", children: [
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "checkbox",
                    checked: consent,
                    onChange: (e) => setConsent(e.target.checked),
                    className: "mt-1",
                    style: { accentColor: C.coral }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 928,
                    columnNumber: 19
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("span", { className: "text-[12px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: [
                  "Acconsento al trattamento dei dati per essere ricontattato (Art. 6.1.b GDPR). Titolare: 4 Web Lab di Fullin Carlo — P.IVA 05765760284.",
                  " ",
                  /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "underline", style: { color: C.coralSoft }, children: "Privacy Policy" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                    lineNumber: 938,
                    columnNumber: 21
                  }, void 0),
                  "."
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 935,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 927,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("input", { type: "text", name: "botcheck", className: "hidden", tabIndex: -1, autoComplete: "off" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 943,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(
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
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 945,
                  columnNumber: 17
                },
                void 0
              ),
              error && /* @__PURE__ */ jsxDEV("p", { className: "text-[13px]", style: { fontFamily: SANS, color: "#fda4af" }, children: error }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                lineNumber: 961,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 895,
              columnNumber: 15
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 883,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 821,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-16 md:mt-20 text-center", children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/realizzazioni",
              className: "inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline",
              style: { fontFamily: SANS, color: C.coralSoft },
              children: [
                /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
                  lineNumber: 974,
                  columnNumber: 13
                }, void 0),
                "Torna alle Realizzazioni"
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
              lineNumber: 969,
              columnNumber: 11
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
            lineNumber: 968,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 797,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 784,
      columnNumber: 5
    },
    void 0
  );
};
const DemoFooter = () => /* @__PURE__ */ jsxDEV("footer", { style: { background: "#0e0e10", color: C.inkSoft }, children: [
  /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-4 gap-10", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-[22px] tracking-[0.18em] uppercase mb-5", style: { fontFamily: SERIF, color: C.ink, fontWeight: 500 }, children: [
        "Vera",
        /* @__PURE__ */ jsxDEV("span", { style: { color: C.coral }, children: "·" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 991,
          columnNumber: 15
        }, void 0),
        "Method"
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 990,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.8] max-w-sm", style: { fontFamily: SANS }, children: [
        "Demo concept di sito web premium per personal trainer e professionisti del benessere. Realizzato da",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline hover:text-white", style: { color: C.coralSoft }, children: "4 Web Lab" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 996,
          columnNumber: 11
        }, void 0),
        "."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 993,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 989,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] tracking-[0.2em] uppercase mb-4", style: { fontFamily: SANS, color: C.ink }, children: "Naviga" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1001,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: NAV.map((n) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: `#${n.id}`, className: "hover:text-white transition-colors", children: n.label }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1007,
        columnNumber: 15
      }, void 0) }, n.id, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1006,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1004,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 1e3,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] tracking-[0.2em] uppercase mb-4", style: { fontFamily: SANS, color: C.ink }, children: "Contatti 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1014,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: [
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+393514656042", className: "hover:text-white", children: "+39 351 465 6042" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1018,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1018,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "mailto:info@4weblab.it", className: "hover:text-white", children: "info@4weblab.it" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1019,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1019,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "https://wa.me/393514656042", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white", children: "WhatsApp" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1020,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1020,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-per-professionisti", className: "hover:text-white", children: "Siti web per professionisti" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1021,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1021,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "hover:text-white", children: "Altre realizzazioni" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1022,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1022,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1017,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 1013,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 988,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "border-t py-7 text-[12px] text-center", style: { borderColor: "rgba(255,255,255,0.06)", fontFamily: SANS }, children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Vera Method — Tech demo realizzata da",
    " ",
    /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline hover:text-white", style: { color: C.coralSoft }, children: "4 Web Lab" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 1028,
      columnNumber: 7
    }, void 0),
    ". Brand fittizio a scopo dimostrativo."
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 1026,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 987,
  columnNumber: 3
}, void 0);
const StickyMobileCTA = () => /* @__PURE__ */ jsxDEV("div", { className: "lg:hidden fixed bottom-4 left-4 right-4 z-40", style: { filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.45))" }, children: /* @__PURE__ */ jsxDEV(
  "a",
  {
    href: "#contatti",
    className: "flex items-center justify-center gap-2 py-3.5 text-[12px] tracking-[0.22em] uppercase rounded-full",
    style: { background: C.coral, color: C.bg, fontFamily: SANS, fontWeight: 600 },
    children: [
      "Prenota consulenza ",
      /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1044,
        columnNumber: 26
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 1039,
    columnNumber: 5
  },
  void 0
) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
  lineNumber: 1038,
  columnNumber: 3
}, void 0);
const DemoPersonalTrainerVeraMethod = () => {
  const canonical = "https://4weblab.it/realizzazioni/demo-personal-trainer-vera-method";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Sito Web per Personal Trainer Donna · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1058,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Demo concept di sito web premium per personal trainer donna, realizzata da 4 Web Lab, agenzia web di Padova. Siti per professionisti a partire da 549€."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1059,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1063,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1064,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: canonical }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1065,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1067,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: canonical }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1068,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Sito Web per Personal Trainer Donna · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1069,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Concept premium antracite + coral per personal trainer donna. Demo realizzata da 4 Web Lab, agenzia web di Padova." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1070,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1071,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1072,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1073,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Sito Web per Personal Trainer Donna · Demo | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1074,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: "Concept premium per personal trainer donna realizzato da 4 Web Lab." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1075,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
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
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1077,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 1057,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { style: { background: C.bg, color: C.ink, minHeight: "100vh" }, children: [
      /* @__PURE__ */ jsxDEV(DemoHeader, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1207,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(BackBar, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1208,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("main", { children: [
        /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1210,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(TrustStrip, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1211,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Metodo, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1212,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Programmi, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1213,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Risultati, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1214,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(ChiSono, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1215,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Faq, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1216,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Contatti, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
          lineNumber: 1217,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1209,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(DemoFooter, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1219,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(StickyMobileCTA, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
        lineNumber: 1220,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
      lineNumber: 1206,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoPersonalTrainerVeraMethod.tsx",
    lineNumber: 1056,
    columnNumber: 5
  }, void 0);
};
export {
  DemoPersonalTrainerVeraMethod as default
};
