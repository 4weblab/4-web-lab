import { j as jsxDEV, b as Fragment, m as motion } from "../main.mjs";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, CheckCircle2, Layers, AlertTriangle, Phone, Mail, MapPin, Ruler, Shield, Clock, Sparkles, Cog, Bot, Cpu, Wrench, Boxes } from "lucide-react";
import { c as cncImg } from "./aurum-cnc-D_XL1Q1y.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
const heroImg = "/assets/aurum-hero-DkFdH1Ck.webp";
const laserImg = "/assets/aurum-laser-C5WQQrBW.webp";
const weldingImg = "/assets/aurum-welding-0gXkIPxC.webp";
const factoryImg = "/assets/aurum-factory-CVNiw3j4.webp";
const componentsImg = "/assets/aurum-components-B4oYlZ8N.webp";
const carpentryImg = "/assets/aurum-carpentry-Bu5z2gvK.webp";
const inoxImg = "/assets/aurum-inox-CVrhQm6P.webp";
const C = {
  bg: "#1A1A1B",
  bg2: "#232325",
  bg3: "#2C2C2F",
  accent: "#E67E22",
  accentSoft: "#F39C5B",
  text: "#F5F7FA",
  textDim: "#AEB4BC",
  border: "rgba(245,247,250,0.08)",
  borderStrong: "rgba(245,247,250,0.16)"
};
const navItems = [
  { label: "Azienda", href: "#azienda" },
  { label: "Tecnologie", href: "#tecnologie" },
  { label: "Servizi", href: "#processo" },
  { label: "Produzione", href: "#realizzazioni" },
  { label: "Contatti", href: "#contatti" }
];
const scrollToContact = () => {
  var _a;
  (_a = document.getElementById("contatti")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
};
const scrollToId = (id) => {
  var _a;
  (_a = document.getElementById(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
};
const AurumHeader = () => {
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxDEV(
    "header",
    {
      className: "fixed top-0 inset-x-0 z-50 transition-all duration-500",
      style: {
        background: scrolled ? "rgba(26,26,27,0.72)" : "rgba(26,26,27,0.25)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`
      },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "#top",
              onClick: (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className: "flex items-center gap-2.5 group",
              "aria-label": "AURUM Meccanica - Home",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    className: "w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm tracking-tight",
                    style: {
                      background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
                      color: C.bg,
                      boxShadow: `0 6px 20px -6px ${C.accent}80`
                    },
                    children: "AU"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[1.05rem] tracking-[0.18em]", style: { color: C.text }, children: "AURUM" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 112,
                  columnNumber: 11
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 96,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("nav", { className: "hidden lg:flex items-center gap-1", "aria-label": "Navigazione principale", children: navItems.map((it) => /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: it.href,
              onClick: (e) => {
                e.preventDefault();
                scrollToId(it.href.slice(1));
              },
              className: "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              style: { color: C.textDim },
              onMouseEnter: (e) => e.currentTarget.style.color = C.text,
              onMouseLeave: (e) => e.currentTarget.style.color = C.textDim,
              children: it.label
            },
            it.href,
            false,
            {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 119,
              columnNumber: 13
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 117,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:flex items-center gap-3", children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: scrollToContact,
              className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
              style: {
                background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
                color: C.bg,
                boxShadow: `0 8px 24px -8px ${C.accent}90`
              },
              children: [
                "Richiedi Preventivo",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 144,
                  columnNumber: 13
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 134,
              columnNumber: 11
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 133,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "lg:hidden p-2 rounded-md",
              onClick: () => setOpen(true),
              "aria-label": "Apri menu",
              style: { color: C.text },
              children: /* @__PURE__ */ jsxDEV(Menu, { className: "w-6 h-6" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 154,
                columnNumber: 11
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 148,
              columnNumber: 9
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 95,
          columnNumber: 7
        }, void 0),
        open && /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "fixed inset-0 z-[60] flex flex-col",
            style: { background: `linear-gradient(180deg, ${C.bg} 0%, ${C.bg2} 100%)` },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "px-5 h-16 flex items-center justify-between border-b", style: { borderColor: C.border }, children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold tracking-[0.18em]", style: { color: C.text }, children: "AURUM" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 165,
                  columnNumber: 13
                }, void 0),
                /* @__PURE__ */ jsxDEV("button", { onClick: () => setOpen(false), "aria-label": "Chiudi menu", style: { color: C.text }, className: "p-2", children: /* @__PURE__ */ jsxDEV(X, { className: "w-6 h-6" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 167,
                  columnNumber: 15
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 166,
                  columnNumber: 13
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 164,
                columnNumber: 11
              }, void 0),
              /* @__PURE__ */ jsxDEV("nav", { className: "flex-1 flex flex-col justify-center px-8 gap-1", "aria-label": "Menu mobile", children: [
                navItems.map((it, i) => /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: it.href,
                    onClick: (e) => {
                      e.preventDefault();
                      setOpen(false);
                      setTimeout(() => scrollToId(it.href.slice(1)), 60);
                    },
                    className: "text-3xl md:text-4xl font-semibold py-3 transition-colors",
                    style: { color: C.text, animation: `aurumFadeUp 0.4s ${i * 0.05}s both` },
                    children: it.label
                  },
                  it.href,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                    lineNumber: 172,
                    columnNumber: 15
                  },
                  void 0
                )),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => {
                      setOpen(false);
                      setTimeout(scrollToContact, 60);
                    },
                    className: "mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md text-base font-semibold",
                    style: { background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`, color: C.bg },
                    children: [
                      "Richiedi Preventivo ",
                      /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                        lineNumber: 187,
                        columnNumber: 35
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                    lineNumber: 182,
                    columnNumber: 13
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 170,
                columnNumber: 11
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 160,
            columnNumber: 9
          },
          void 0
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 86,
      columnNumber: 5
    },
    void 0
  );
};
const Hero = () => /* @__PURE__ */ jsxDEV("section", { id: "top", className: "relative min-h-[100svh] flex items-center overflow-hidden", style: { background: C.bg }, children: [
  /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
    /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: heroImg,
        alt: "Taglio laser di precisione su lamiera in officina AURUM Meccanica",
        width: 1920,
        height: 1280,
        fetchPriority: "high",
        decoding: "async",
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 201,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
      background: `linear-gradient(180deg, rgba(26,26,27,0.55) 0%, rgba(26,26,27,0.75) 60%, ${C.bg} 100%)`
    } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
      background: `radial-gradient(ellipse at 20% 50%, ${C.accent}22 0%, transparent 55%)`
    } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 200,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { "aria-hidden": true, className: "absolute inset-0 opacity-[0.07]", style: {
    backgroundImage: `linear-gradient(${C.text} 1px, transparent 1px), linear-gradient(90deg, ${C.text} 1px, transparent 1px)`,
    backgroundSize: "80px 80px",
    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)"
  } }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 219,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 md:pt-40 md:pb-24 w-full", children: /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, ease: "easeOut" },
      className: "max-w-3xl",
      children: [
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] mb-7",
            style: { color: C.accent, background: `${C.accent}1A`, border: `1px solid ${C.accent}40` },
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full", style: { background: C.accent, boxShadow: `0 0 12px ${C.accent}` } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 234,
                columnNumber: 11
              }, void 0),
              "Carpenteria & CNC dal 1999"
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 232,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "h1",
          {
            className: "font-bold leading-[1.05] tracking-tight text-[2.5rem] md:text-[4rem] lg:text-[4.75rem] mb-6",
            style: { color: C.text, letterSpacing: "-0.02em" },
            children: [
              "Precisione Laser e ",
              /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 240,
                columnNumber: 30
              }, void 0),
              "Carpenteria ",
              /* @__PURE__ */ jsxDEV("span", { style: {
                background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }, children: "d'Avanguardia" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 241,
                columnNumber: 23
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 238,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("h2", { className: "sr-only", children: "Sito web per azienda metalmeccanica — concept realizzato da 4 Web Lab, agenzia web di Padova" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 248,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl max-w-2xl mb-10 leading-relaxed", style: { color: C.textDim }, children: "Dal prototipo alla produzione in serie, trasformiamo il metallo in soluzioni ingegneristiche ad alte prestazioni per industria, automazione e meccanica di precisione." }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 250,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3 mb-14", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: scrollToContact,
              className: "inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm md:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5",
              style: {
                background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
                color: C.bg,
                boxShadow: `0 14px 40px -10px ${C.accent}90`
              },
              children: [
                "Richiedi Preventivo ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 263,
                  columnNumber: 33
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 256,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollToId("tecnologie"),
              className: "inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm md:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5",
              style: {
                color: C.text,
                background: "rgba(245,247,250,0.04)",
                border: `1px solid ${C.borderStrong}`,
                backdropFilter: "blur(8px)"
              },
              children: "Scopri le Tecnologie"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 265,
              columnNumber: 11
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 255,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-5 md:gap-8 max-w-2xl pt-8 border-t", style: { borderColor: C.border }, children: [
          { v: "±0.02 mm", l: "Tolleranza tipica" },
          { v: "ISO 9001", l: "Sistema Qualità" },
          { v: "24/7", l: "Produzione continua" }
        ].map((s) => /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "font-mono text-xl md:text-2xl font-bold mb-1", style: { color: C.text }, children: s.v }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 285,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] uppercase tracking-wider", style: { color: C.textDim }, children: s.l }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 286,
            columnNumber: 15
          }, void 0)
        ] }, s.l, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 284,
          columnNumber: 13
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 278,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 226,
      columnNumber: 7
    },
    void 0
  ) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 225,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { "aria-hidden": true, className: "hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-3 items-end", children: Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ jsxDEV("span", { className: "block h-px", style: {
    width: i % 3 === 0 ? 28 : 14,
    background: i === 5 ? C.accent : C.borderStrong
  } }, i, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 297,
    columnNumber: 11
  }, void 0)) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 295,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 294,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
  lineNumber: 198,
  columnNumber: 3
}, void 0);
const SectionHead = ({ kicker, title, sub }) => /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mb-14 md:mb-20", children: [
  /* @__PURE__ */ jsxDEV(
    "span",
    {
      className: "inline-block text-[11px] font-semibold uppercase tracking-[0.25em] mb-4 pl-4 relative",
      style: { color: C.accent },
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-px", style: { background: C.accent } }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 312,
          columnNumber: 7
        }, void 0),
        kicker
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 310,
      columnNumber: 5
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5", style: { color: C.text, letterSpacing: "-0.015em" }, children: title }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 315,
    columnNumber: 5
  }, void 0),
  sub && /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg leading-relaxed", style: { color: C.textDim }, children: sub }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 318,
    columnNumber: 13
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
  lineNumber: 309,
  columnNumber: 3
}, void 0);
const Values = () => {
  const items = [
    { icon: Ruler, title: "Tolleranze Controllate", desc: "Lavorazioni con tolleranze fino a ±0,02 mm verificate al collaudo dimensionale con strumenti di metrologia certificata." },
    { icon: Shield, title: "Certificazione Qualità", desc: "Sistema qualità conforme a ISO 9001:2015, controllo materiali in ingresso e tracciabilità completa di lotto." },
    { icon: Clock, title: "Consegna Just-in-Time", desc: "Pianificazione produttiva integrata con il vostro flusso, lead time ridotti e affidabilità sui tempi di consegna." }
  ];
  return /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32 relative", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-5", children: items.map((it, i) => /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.5, delay: i * 0.08 },
      className: "group relative p-8 md:p-10 rounded-xl transition-all duration-500",
      style: {
        background: `linear-gradient(165deg, ${C.bg2} 0%, ${C.bg} 100%)`,
        border: `1px solid ${C.border}`
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.borderColor = `${C.accent}66`;
        e.currentTarget.style.transform = "translateY(-4px)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.borderColor = C.border;
        e.currentTarget.style.transform = "";
      },
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "w-12 h-12 rounded-md mb-6 flex items-center justify-center transition-colors duration-500",
            style: { background: `${C.accent}1A`, border: `1px solid ${C.accent}40` },
            children: /* @__PURE__ */ jsxDEV(it.icon, { className: "w-5 h-5", style: { color: C.accent } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 349,
              columnNumber: 17
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 347,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold mb-3", style: { color: C.text }, children: it.title }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 351,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed", style: { color: C.textDim }, children: it.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 352,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { "aria-hidden": true, className: "absolute top-4 right-4 font-mono text-xs opacity-30", style: { color: C.accent }, children: [
          "0",
          i + 1
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 353,
          columnNumber: 15
        }, void 0)
      ]
    },
    it.title,
    true,
    {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 334,
      columnNumber: 13
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 332,
    columnNumber: 9
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 331,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 330,
    columnNumber: 5
  }, void 0);
};
const About = () => /* @__PURE__ */ jsxDEV("section", { id: "azienda", className: "py-24 md:py-36 relative overflow-hidden", style: { background: C.bg2 }, children: [
  /* @__PURE__ */ jsxDEV("div", { "aria-hidden": true, className: "absolute inset-0 opacity-[0.04]", style: {
    backgroundImage: `linear-gradient(${C.text} 1px, transparent 1px), linear-gradient(90deg, ${C.text} 1px, transparent 1px)`,
    backgroundSize: "60px 60px"
  } }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 365,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV(
        SectionHead,
        {
          kicker: "L'azienda",
          title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
            "Venticinque anni di ",
            /* @__PURE__ */ jsxDEV("span", { style: { color: C.accent }, children: "metallo" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 373,
              columnNumber: 40
            }, void 0),
            ", ingegneria e affidabilità."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 373,
            columnNumber: 18
          }, void 0),
          sub: "AURUM Meccanica nasce a Erbusco, nel cuore della Franciacorta industriale, come officina specializzata nella lavorazione di lamiere e profilati per il settore meccanico e industriale. Oggi siamo un partner produttivo strutturato, con un reparto engineering interno e una capacità produttiva pensata per accompagnare aziende manifatturiere, progettisti e system integrator."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 371,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 mb-10", children: [
        "Supporto tecnico in fase di progettazione CAD/CAM",
        "Lavorazioni di precisione su acciaio, inox e alluminio",
        "Partnership consolidate con realtà industriali italiane ed estere",
        "Reparto controllo qualità con strumentazione metrologica dedicata"
      ].map((p) => /* @__PURE__ */ jsxDEV("li", { className: "flex gap-3 text-[15px]", style: { color: C.text }, children: [
        /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 flex-shrink-0 mt-0.5", style: { color: C.accent } }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 384,
          columnNumber: 15
        }, void 0),
        p
      ] }, p, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 383,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 376,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t", style: { borderColor: C.border }, children: [
        { v: "25+", l: "Anni di esperienza" },
        { v: "1.200", l: "mq produttivi" },
        { v: "500+", l: "Commesse / anno" },
        { v: "CAD/CAM", l: "Engineering interno" }
      ].map((s) => /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "font-mono text-2xl md:text-3xl font-bold", style: { color: C.text }, children: s.v }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 397,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] uppercase tracking-wider mt-1", style: { color: C.textDim }, children: s.l }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 398,
          columnNumber: 15
        }, void 0)
      ] }, s.l, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 396,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 389,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 370,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-2xl overflow-hidden aspect-[4/5]", style: { border: `1px solid ${C.border}` }, children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: factoryImg,
            alt: "Reparto produttivo AURUM Meccanica con macchine CNC e laser fibra",
            width: 1600,
            height: 2e3,
            loading: "lazy",
            decoding: "async",
            className: "w-full h-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 406,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
          background: `linear-gradient(180deg, transparent 50%, ${C.bg2} 100%)`
        } }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 409,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 405,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "absolute -bottom-6 -left-6 md:-left-10 px-6 py-5 rounded-xl",
          style: {
            background: C.bg,
            border: `1px solid ${C.borderStrong}`,
            boxShadow: `0 30px 60px -20px rgba(0,0,0,0.6)`
          },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-xs uppercase tracking-wider mb-1", style: { color: C.textDim }, children: "Sede operativa" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 419,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-semibold", style: { color: C.text }, children: "Erbusco (BS) — Italy" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 420,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 413,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "absolute -top-5 -right-5 md:-right-8 w-20 h-20 rounded-full opacity-60",
          style: { background: `radial-gradient(circle, ${C.accent}66 0%, transparent 70%)`, filter: "blur(8px)" }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 422,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 404,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 369,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
  lineNumber: 364,
  columnNumber: 3
}, void 0);
const Technologies = () => {
  const techs = [
    { img: laserImg, icon: Sparkles, title: "Taglio Laser Fibra", desc: "Sorgenti fino a 6 kW per tagli netti su acciaio fino a 25 mm e inox fino a 20 mm." },
    { img: factoryImg, icon: Cog, title: "Piegatura CNC", desc: "Presse piegatrici a controllo numerico per geometrie complesse con ripetibilità garantita." },
    { img: weldingImg, icon: Bot, title: "Saldatura Robotizzata", desc: "Celle robotizzate MIG/TIG per produzioni in serie con qualità di giunzione costante." },
    { img: componentsImg, icon: Cpu, title: "Progettazione CAD/CAM", desc: "Reparto tecnico per ingegnerizzazione, ottimizzazione produttiva e prototipazione rapida." },
    { img: cncImg, icon: Wrench, title: "Fresatura di Precisione", desc: "Centri di lavoro a 3 e 5 assi per componenti meccanici con tolleranze strette." },
    { img: inoxImg, icon: Boxes, title: "Assemblaggio Industriale", desc: "Montaggio e collaudo di gruppi e sottoassiemi pronti all'installazione finale." }
  ];
  return /* @__PURE__ */ jsxDEV("section", { id: "tecnologie", className: "py-24 md:py-36 relative", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Tecnologie",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Macchine, processi e ",
          /* @__PURE__ */ jsxDEV("span", { style: { color: C.accent }, children: "controllo numerico" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 444,
            columnNumber: 41
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 444,
          columnNumber: 18
        }, void 0),
        sub: "Un parco macchine continuamente aggiornato che copre l'intero ciclo produttivo: dal foglio di lamiera al componente finito, sotto un unico tetto."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 442,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6", children: techs.map((t, i) => /* @__PURE__ */ jsxDEV(
      motion.article,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.45, delay: Math.min(i * 0.05, 0.3) },
        className: "group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer",
        style: { border: `1px solid ${C.border}` },
        onClick: () => scrollToContact(),
        children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: t.img,
              alt: `${t.title} — AURUM Meccanica`,
              width: 1280,
              height: 1600,
              loading: "lazy",
              decoding: "async",
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 458,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
            background: `linear-gradient(180deg, rgba(26,26,27,0.2) 0%, rgba(26,26,27,0.55) 50%, rgba(26,26,27,0.95) 100%)`
          } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 461,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 p-6 md:p-7 flex flex-col justify-end", children: [
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "w-10 h-10 rounded-md mb-4 flex items-center justify-center transition-all duration-500 group-hover:translate-y-[-4px]",
                style: { background: `${C.accent}E6`, color: C.bg },
                children: /* @__PURE__ */ jsxDEV(t.icon, { className: "w-4.5 h-4.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 467,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 465,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold mb-2", style: { color: C.text }, children: t.title }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 469,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed", style: { color: C.textDim }, children: t.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 470,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-400",
                style: { color: C.accent },
                children: [
                  "Richiedi specifiche tecniche ",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                    lineNumber: 473,
                    columnNumber: 48
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 471,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 464,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              "aria-hidden": true,
              className: "absolute top-4 right-4 font-mono text-[11px] px-2 py-1 rounded",
              style: { color: C.text, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" },
              children: [
                "T.0",
                i + 1
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 476,
              columnNumber: 15
            },
            void 0
          )
        ]
      },
      t.title,
      true,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 449,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 447,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 441,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 440,
    columnNumber: 5
  }, void 0);
};
const Process = () => {
  const steps = [
    { n: "01", t: "Analisi tecnica", d: "Studio del disegno, scelta materiale e fattibilità produttiva." },
    { n: "02", t: "Progettazione CAD", d: "Modellazione 3D, ottimizzazione geometrie e generazione percorsi CAM." },
    { n: "03", t: "Produzione CNC", d: "Taglio, piegatura, saldatura e fresatura su parco macchine controllato." },
    { n: "04", t: "Controllo qualità", d: "Verifica dimensionale, controllo visivo e tracciabilità di lotto." },
    { n: "05", t: "Consegna finale", d: "Imballo, documentazione e spedizione secondo i tempi concordati." }
  ];
  return /* @__PURE__ */ jsxDEV("section", { id: "processo", className: "py-24 md:py-36 relative overflow-hidden", style: { background: C.bg2 }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Processo produttivo",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Dal disegno tecnico al ",
          /* @__PURE__ */ jsxDEV("span", { style: { color: C.accent }, children: "componente finito" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 502,
            columnNumber: 43
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 502,
          columnNumber: 18
        }, void 0),
        sub: "Un flusso ingegnerizzato in cinque fasi, gestito internamente per garantire continuità, qualità e tempi certi."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 500,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          "aria-hidden": true,
          className: "hidden lg:block absolute left-0 right-0 top-[44px] h-px",
          style: { background: `linear-gradient(90deg, transparent, ${C.borderStrong} 15%, ${C.borderStrong} 85%, transparent)` }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 506,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative", children: steps.map((s, i) => /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.4, delay: i * 0.08 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "w-[88px] h-[88px] rounded-full flex items-center justify-center font-mono text-xl font-bold mb-5 mx-auto lg:mx-0",
                style: {
                  background: C.bg,
                  border: `1px solid ${C.borderStrong}`,
                  color: C.accent,
                  boxShadow: `0 0 0 6px ${C.bg2}, 0 8px 20px -8px rgba(0,0,0,0.5)`
                },
                children: s.n
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 516,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-2 text-center lg:text-left", style: { color: C.text }, children: s.t }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 525,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed text-center lg:text-left", style: { color: C.textDim }, children: s.d }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 526,
              columnNumber: 17
            }, void 0)
          ]
        },
        s.n,
        true,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 510,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 508,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 505,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 499,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 498,
    columnNumber: 5
  }, void 0);
};
const Realizations = () => {
  const items = [
    { img: carpentryImg, cat: "Carpenteria industriale", title: "Strutture portanti per impianti automatizzati" },
    { img: componentsImg, cat: "Componenti meccanici", title: "Particolari fresati ad alta precisione" },
    { img: weldingImg, cat: "Strutture metalliche", title: "Telai saldati per macchinari industriali" },
    { img: inoxImg, cat: "Lavorazioni inox", title: "Quadri e impianti in acciaio inossidabile" }
  ];
  return /* @__PURE__ */ jsxDEV("section", { id: "realizzazioni", className: "py-24 md:py-36", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Produzione",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Realizzazioni recenti per ",
          /* @__PURE__ */ jsxDEV("span", { style: { color: C.accent }, children: "l'industria italiana" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 549,
            columnNumber: 46
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 549,
          columnNumber: 18
        }, void 0),
        sub: "Una selezione di lavorazioni rappresentative del nostro know-how su carpenteria, componenti meccanici e lavorazioni speciali."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 547,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-5 md:gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxDEV(
      motion.article,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.06 },
        className: "group relative rounded-xl overflow-hidden aspect-[16/11]",
        style: { border: `1px solid ${C.border}` },
        children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: it.img,
              alt: `${it.title} — AURUM Meccanica`,
              width: 1280,
              height: 880,
              loading: "lazy",
              decoding: "async",
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 561,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
            background: `linear-gradient(180deg, transparent 30%, rgba(26,26,27,0.9) 100%)`
          } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 564,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 p-6 md:p-8 flex flex-col justify-end", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] mb-2", style: { color: C.accent }, children: it.cat }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 568,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-semibold leading-snug", style: { color: C.text }, children: it.title }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 569,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 567,
            columnNumber: 15
          }, void 0)
        ]
      },
      it.title,
      true,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 554,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 552,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 546,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 545,
    columnNumber: 5
  }, void 0);
};
const CtaBanner = () => /* @__PURE__ */ jsxDEV("section", { className: "py-20 md:py-28 relative overflow-hidden", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
    /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: heroImg,
        alt: "",
        "aria-hidden": true,
        width: 1920,
        height: 1280,
        loading: "lazy",
        decoding: "async",
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 583,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
      background: `linear-gradient(135deg, rgba(26,26,27,0.92) 0%, rgba(35,35,37,0.85) 100%)`
    } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 585,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
      background: `radial-gradient(ellipse at 70% 50%, ${C.accent}26 0%, transparent 60%)`
    } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 588,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 582,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-4xl mx-auto px-5 md:px-8 text-center", children: [
    /* @__PURE__ */ jsxDEV(Layers, { className: "w-10 h-10 mx-auto mb-6", style: { color: C.accent } }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 593,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-bold leading-tight mb-5 tracking-tight", style: { color: C.text }, children: "Hai un progetto industriale da sviluppare?" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 594,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg max-w-2xl mx-auto mb-9", style: { color: C.textDim }, children: "Realizziamo lavorazioni metalliche ad alta precisione per aziende, progettisti e industria manifatturiera. Inviateci il vostro disegno: vi ricontattiamo con un'analisi tecnica." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 597,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: scrollToContact,
        className: "inline-flex items-center gap-2 px-8 py-4 rounded-md text-base font-semibold transition-all duration-300 hover:-translate-y-0.5",
        style: {
          background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
          color: C.bg,
          boxShadow: `0 14px 40px -10px ${C.accent}90`
        },
        children: [
          "Contatta il nostro ufficio tecnico ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 608,
            columnNumber: 44
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 601,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 592,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
  lineNumber: 581,
  columnNumber: 3
}, void 0);
const DemoContactForm = () => {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [errors, setErrors] = useState({});
  const ACCESS_KEY = "2afa7184-7e7d-4881-9472-d10ca4e3c6c3";
  const mountedAt = useRef(Date.now());
  const formRef = useRef(null);
  const RL_KEY = "w3f_last_submit_ts";
  const RATE_LIMIT_MS = 6e4;
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);
  const clear = (f) => setErrors((p) => {
    if (!p[f]) return p;
    const n = { ...p };
    delete n[f];
    return n;
  });
  const onSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    if (status.state === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const errs = {};
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    if (!name) errs.name = "Inserisci il tuo nome";
    if (!email) errs.email = "Inserisci una email valida";
    if (!phone) errs.phone = "Inserisci un recapito telefonico";
    if (Object.keys(errs).length) {
      setErrors(errs);
      const k = Object.keys(errs)[0];
      (_b = (_a = formRef.current) == null ? void 0 : _a.querySelector(`[data-field="${k}"]`)) == null ? void 0 : _b.focus();
      return;
    }
    if (Date.now() - mountedAt.current < 3e3) {
      setStatus({ state: "error", message: "Errore invio." });
      return;
    }
    try {
      const last = Number(localStorage.getItem(RL_KEY) || "0");
      if (Date.now() - last < RATE_LIMIT_MS) {
        setStatus({ state: "error", message: "Hai già inviato da poco. Riprova tra 1 minuto." });
        return;
      }
    } catch {
    }
    if (fd.get("website") || fd.get("fax")) {
      setStatus({ state: "error", message: "Errore invio." });
      return;
    }
    fd.append("access_key", ACCESS_KEY);
    fd.append("subject", "[DEMO AURUM Metalmeccanica] Nuova richiesta dal form demo 4 Web Lab");
    fd.append("from_name", "Demo AURUM Meccanica - 4 Web Lab");
    fd.append("origine_demo", "/realizzazioni/demo-metalmeccanica");
    setStatus({ state: "sending", message: "Invio in corso..." });
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      let data = null;
      try {
        data = await r.json();
      } catch {
      }
      if (!r.ok || !(data == null ? void 0 : data.success)) {
        setStatus({ state: "error", message: "Invio non riuscito. Riprova tra poco." });
        return;
      }
      try {
        localStorage.setItem(RL_KEY, String(Date.now()));
      } catch {
      }
      setStatus({ state: "success", message: "Richiesta inviata a 4 Web Lab. Ti ricontattiamo entro 24 ore." });
      setErrors({});
      form.reset();
      mountedAt.current = Date.now();
    } catch {
      setStatus({ state: "error", message: "Problema di rete. Controlla la connessione e riprova." });
    }
  };
  const inputBase = "w-full rounded-md px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2";
  const inputCls = (f) => {
    f && errors[f];
    return `${inputBase}`;
  };
  const inputStyle = (f) => ({
    background: "rgba(245,247,250,0.04)",
    border: `1px solid ${f && errors[f] ? "#ef4444" : C.borderStrong}`,
    color: C.text
  });
  const labelCls = "text-xs font-semibold uppercase tracking-wider mb-1.5 block";
  return /* @__PURE__ */ jsxDEV("form", { ref: formRef, onSubmit, noValidate: true, className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.textDim }, children: "Nome *" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 697,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            "data-field": "name",
            name: "name",
            type: "text",
            required: true,
            autoComplete: "name",
            className: inputCls("name"),
            style: inputStyle("name"),
            onChange: () => clear("name")
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 698,
            columnNumber: 11
          },
          void 0
        ),
        errors.name && /* @__PURE__ */ jsxDEV("span", { className: "text-xs mt-1 block", style: { color: "#f87171" }, children: errors.name }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 700,
          columnNumber: 27
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 696,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.textDim }, children: "Azienda" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 703,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            name: "company",
            type: "text",
            autoComplete: "organization",
            className: inputCls(),
            style: inputStyle()
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 704,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 702,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 695,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.textDim }, children: "Email *" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 710,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            "data-field": "email",
            name: "email",
            type: "email",
            required: true,
            autoComplete: "email",
            className: inputCls("email"),
            style: inputStyle("email"),
            onChange: () => clear("email")
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 711,
            columnNumber: 11
          },
          void 0
        ),
        errors.email && /* @__PURE__ */ jsxDEV("span", { className: "text-xs mt-1 block", style: { color: "#f87171" }, children: errors.email }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 713,
          columnNumber: 28
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 709,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.textDim }, children: "Telefono *" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 716,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            "data-field": "phone",
            name: "phone",
            type: "tel",
            required: true,
            autoComplete: "tel",
            placeholder: "+39 ...",
            className: inputCls("phone"),
            style: inputStyle("phone"),
            onChange: () => clear("phone")
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 717,
            columnNumber: 11
          },
          void 0
        ),
        errors.phone && /* @__PURE__ */ jsxDEV("span", { className: "text-xs mt-1 block", style: { color: "#f87171" }, children: errors.phone }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 719,
          columnNumber: 28
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 715,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 708,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.textDim }, children: "Messaggio" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 723,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          name: "message",
          rows: 5,
          placeholder: "Descrivi brevemente il progetto, materiali, quantità, tempistiche...",
          className: `${inputCls()} resize-none`,
          style: inputStyle()
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 724,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 722,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "sr-only", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxDEV("label", { children: [
        "Website",
        /* @__PURE__ */ jsxDEV("input", { name: "website", type: "text", tabIndex: -1, autoComplete: "off" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 731,
          columnNumber: 23
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 731,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("label", { children: [
        "Fax",
        /* @__PURE__ */ jsxDEV("input", { name: "fax", type: "text", tabIndex: -1, autoComplete: "off" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 732,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 732,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 730,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "submit",
        disabled: status.state === "sending",
        className: "w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md text-sm md:text-base font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:hover:translate-y-0",
        style: {
          background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
          color: C.bg,
          boxShadow: `0 14px 36px -12px ${C.accent}90`
        },
        children: [
          status.state === "sending" ? "Invio in corso..." : "Richiedi Informazioni",
          status.state !== "sending" && /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 743,
            columnNumber: 40
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 735,
        columnNumber: 7
      },
      void 0
    ),
    status.message && /* @__PURE__ */ jsxDEV(
      "p",
      {
        role: "status",
        "aria-live": "polite",
        className: "text-sm font-medium text-center mt-2",
        style: { color: status.state === "success" ? "#4ade80" : status.state === "error" ? "#f87171" : C.textDim },
        children: status.message
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 747,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] leading-relaxed mt-3", style: { color: C.textDim }, children: [
      "I dati inseriti verranno trattati da ",
      /* @__PURE__ */ jsxDEV("strong", { children: "4 Web Lab di Fullin Carlo" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 754,
        columnNumber: 46
      }, void 0),
      " (P.IVA 05765760284) per rispondere alla richiesta di contatto, base giuridica art. 6.1.b GDPR. Maggiori informazioni nella",
      " ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", target: "_blank", className: "underline", style: { color: C.text }, children: "Privacy Policy" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 756,
        columnNumber: 9
      }, void 0),
      "."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 753,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 694,
    columnNumber: 5
  }, void 0);
};
const Contacts = () => /* @__PURE__ */ jsxDEV("section", { id: "contatti", className: "py-24 md:py-36 relative", style: { background: C.bg2 }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "mb-12 md:mb-16 p-5 md:p-6 rounded-xl flex gap-4 items-start",
      style: {
        background: "rgba(230,126,34,0.08)",
        border: `1px solid ${C.accent}55`
      },
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center",
            style: { background: `${C.accent}26`, color: C.accent },
            children: /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 774,
              columnNumber: 11
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 772,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-bold uppercase tracking-[0.2em] mb-1", style: { color: C.accent }, children: "Avviso importante — Tech Demo" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 777,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm md:text-[15px] leading-relaxed", style: { color: C.text }, children: [
            "Questa è una ",
            /* @__PURE__ */ jsxDEV("strong", { children: "demo tecnica realizzata da 4 Web Lab" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 781,
              columnNumber: 26
            }, void 0),
            ". Le richieste inviate tramite questo form verranno recapitate ",
            /* @__PURE__ */ jsxDEV("strong", { children: "direttamente a 4 Web Lab" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 782,
              columnNumber: 53
            }, void 0),
            " e ",
            /* @__PURE__ */ jsxDEV("strong", { children: "NON all'azienda" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 782,
              columnNumber: 97
            }, void 0),
            " (AURUM Meccanica) mostrata nella demo, che è un brand fittizio."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 780,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 776,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 767,
      columnNumber: 7
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV(
        SectionHead,
        {
          kicker: "Richiesta tecnica",
          title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
            "Parlaci del tuo ",
            /* @__PURE__ */ jsxDEV("span", { style: { color: C.accent }, children: "progetto" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 793,
              columnNumber: 38
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 793,
            columnNumber: 20
          }, void 0),
          sub: "Compila il modulo: ti ricontattiamo entro 24 ore con un primo riscontro tecnico, senza impegno."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 791,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "p-6 md:p-8 rounded-2xl",
          style: {
            background: C.bg,
            border: `1px solid ${C.border}`,
            boxShadow: `0 30px 60px -25px rgba(0,0,0,0.5)`
          },
          children: /* @__PURE__ */ jsxDEV(DemoContactForm, {}, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 802,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 796,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 790,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "lg:pt-2", children: [
      /* @__PURE__ */ jsxDEV(
        "span",
        {
          className: "inline-block text-[11px] font-semibold uppercase tracking-[0.25em] mb-4 pl-4 relative",
          style: { color: C.accent },
          children: [
            /* @__PURE__ */ jsxDEV("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-px", style: { background: C.accent } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
              lineNumber: 810,
              columnNumber: 13
            }, void 0),
            "4 Web Lab"
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 808,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-3xl font-bold leading-tight mb-4 tracking-tight", style: { color: C.text }, children: "Vuoi una demo simile per la tua azienda?" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 813,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[15px] leading-relaxed mb-8", style: { color: C.textDim }, children: "Questa pagina è un esempio concreto di come potrebbe essere il sito della tua impresa. Contattaci direttamente per una valutazione gratuita del tuo progetto digitale." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 816,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 mb-8", children: [
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "tel:+393514656042",
            className: "group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5",
            style: { background: C.bg, border: `1px solid ${C.border}` },
            children: [
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0",
                  style: { background: `${C.accent}1A`, color: C.accent },
                  children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                    lineNumber: 827,
                    columnNumber: 17
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 825,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] uppercase tracking-wider", style: { color: C.textDim }, children: "Chiama ora" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 830,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", style: { color: C.text }, children: "+39 351 465 6042" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 831,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 829,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1", style: { color: C.accent } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 833,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 822,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "mailto:info@4weblab.it",
            className: "group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5",
            style: { background: C.bg, border: `1px solid ${C.border}` },
            children: [
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0",
                  style: { background: `${C.accent}1A`, color: C.accent },
                  children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                    lineNumber: 841,
                    columnNumber: 17
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 839,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] uppercase tracking-wider", style: { color: C.textDim }, children: "Email diretta" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 844,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "font-semibold truncate", style: { color: C.text }, children: "info@4weblab.it" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 845,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 843,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1", style: { color: C.accent } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 847,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 836,
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
            className: "group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5",
            style: { background: "#25D36614", border: "1px solid #25D36655" },
            children: [
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0",
                  style: { background: "#25D366", color: "#fff" },
                  children: /* @__PURE__ */ jsxDEV("svg", { viewBox: "0 0 24 24", className: "w-5 h-5", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxDEV("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.463 3.488z" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                    lineNumber: 856,
                    columnNumber: 19
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                    lineNumber: 855,
                    columnNumber: 17
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 853,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] uppercase tracking-wider", style: { color: C.textDim }, children: "WhatsApp (più rapido)" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 860,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", style: { color: C.text }, children: "Scrivici su WhatsApp" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                  lineNumber: 861,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 859,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1", style: { color: "#25D366" } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
                lineNumber: 863,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 850,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 821,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-3 pt-6 border-t", style: { borderColor: C.border }, children: [
        { v: "24h", l: "Tempo di risposta" },
        { v: "Demo", l: "Personalizzabili" },
        { v: "0€", l: "Nessun impegno" }
      ].map((b) => /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "font-mono font-bold text-lg", style: { color: C.text }, children: b.v }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 874,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] uppercase tracking-wider mt-1", style: { color: C.textDim }, children: b.l }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 875,
          columnNumber: 17
        }, void 0)
      ] }, b.l, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 873,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 867,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 807,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 788,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "mt-12 md:mt-16 text-center", children: /* @__PURE__ */ jsxDEV(
    Link,
    {
      to: "/realizzazioni",
      className: "inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline",
      style: { color: C.accent },
      children: "Torna alla lista delle demo"
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 882,
      columnNumber: 9
    },
    void 0
  ) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 881,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
  lineNumber: 765,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
  lineNumber: 764,
  columnNumber: 3
}, void 0);
const AurumFooter = () => /* @__PURE__ */ jsxDEV("footer", { className: "pt-16 pb-8 border-t", style: { background: C.bg, borderColor: C.border }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-4 gap-10 mb-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5 mb-4", children: [
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: "w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm tracking-tight",
            style: { background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`, color: C.bg },
            children: "AU"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 901,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("span", { className: "font-semibold tracking-[0.18em]", style: { color: C.text }, children: "AURUM MECCANICA" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 903,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 900,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed mb-5 max-w-md italic", style: { color: C.textDim }, children: `"L'architettura del metallo, la precisione del futuro."` }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 905,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 text-sm", style: { color: C.textDim }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.accent } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 909,
            columnNumber: 53
          }, void 0),
          "Via delle Industrie 42, 25030 Erbusco (BS) — Italy"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 909,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.accent } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 910,
            columnNumber: 53
          }, void 0),
          "+39 030 1234567"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 910,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.accent } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 911,
            columnNumber: 53
          }, void 0),
          "info@aurum-meccanica.it"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 911,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs mt-3 opacity-70", children: "P.IVA 09876543210" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 912,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 908,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 899,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-4", style: { color: C.text }, children: "Navigazione" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 917,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-sm", children: navItems.map((it) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: it.href,
          onClick: (e) => {
            e.preventDefault();
            scrollToId(it.href.slice(1));
          },
          style: { color: C.textDim },
          onMouseEnter: (e) => e.currentTarget.style.color = C.accent,
          onMouseLeave: (e) => e.currentTarget.style.color = C.textDim,
          children: it.label
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 921,
          columnNumber: 17
        },
        void 0
      ) }, it.href, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 920,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 918,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 916,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-semibold uppercase tracking-[0.2em] mb-4", style: { color: C.text }, children: "Seguici" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 934,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: ["LinkedIn", "Instagram", "YouTube"].map((s) => /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "#",
          "aria-label": s,
          onClick: (e) => e.preventDefault(),
          className: "w-9 h-9 rounded-md flex items-center justify-center text-xs font-bold transition-colors",
          style: { background: C.bg2, color: C.textDim, border: `1px solid ${C.border}` },
          onMouseEnter: (e) => {
            e.currentTarget.style.color = C.accent;
            e.currentTarget.style.borderColor = `${C.accent}66`;
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.color = C.textDim;
            e.currentTarget.style.borderColor = C.border;
          },
          children: s[0]
        },
        s,
        false,
        {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 937,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 935,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 933,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 898,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "p-5 rounded-xl mb-8 text-sm leading-relaxed",
      style: { background: C.bg2, border: `1px solid ${C.border}`, color: C.textDim },
      children: [
        /* @__PURE__ */ jsxDEV("strong", { style: { color: C.text }, children: "Nota:" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 952,
          columnNumber: 9
        }, void 0),
        " AURUM Meccanica è un brand fittizio creato esclusivamente per finalità dimostrative. Questa pagina è una ",
        /* @__PURE__ */ jsxDEV("strong", { style: { color: C.text }, children: "tech demo" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 953,
          columnNumber: 71
        }, void 0),
        " ",
        "sviluppata da",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline", style: { color: C.accent }, children: "4 Web Lab" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 955,
          columnNumber: 9
        }, void 0),
        " per illustrare un possibile concept di sito web premium per il settore metalmeccanico."
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 950,
      columnNumber: 7
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t text-xs",
      style: { borderColor: C.border, color: C.textDim },
      children: [
        /* @__PURE__ */ jsxDEV("div", { children: "© 2026 AURUM Meccanica S.r.l. (demo) — Tutti i diritti riservati." }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 961,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          "Tech demo by",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "font-semibold", style: { color: C.text }, children: "4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
            lineNumber: 964,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 962,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 959,
      columnNumber: 7
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
  lineNumber: 897,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
  lineNumber: 896,
  columnNumber: 3
}, void 0);
const DemoMetalmeccanica = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Sito Web per Azienda Metalmeccanica · Demo | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 976,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "Demo di sito web per aziende metalmeccaniche e carpenteria, realizzata da 4 Web Lab, agenzia web di Padova. Pacchetto una tantum da 899€." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 977,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 978,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 979,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://4weblab.it/realizzazioni/demo-metalmeccanica" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 980,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 981,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 982,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: "Realizzazioni" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 983,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://4weblab.it/realizzazioni/demo-metalmeccanica" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 984,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Sito Web per Azienda Metalmeccanica · Demo | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 985,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Demo di sito web per aziende metalmeccaniche e carpenteria industriale · 4 Web Lab, agenzia web di Padova. Da 899€." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 986,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 987,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 988,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og/demo-metalmeccanica.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 989,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 990,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Sito Web per Azienda Metalmeccanica · Demo | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 991,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: "Demo di sito web per aziende metalmeccaniche · 4 Web Lab, agenzia web di Padova. Da 899€." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 992,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og/demo-metalmeccanica.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 993,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "theme-color", content: "#1A1A1B" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 994,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": "https://4weblab.it/realizzazioni/demo-metalmeccanica#concept",
        name: "Concept di sito web premium per azienda metalmeccanica — by 4 Web Lab",
        headline: "Tech demo: web design premium per aziende metalmeccaniche realizzata da 4 Web Lab",
        url: "https://4weblab.it/realizzazioni/demo-metalmeccanica",
        inLanguage: "it-IT",
        author: { "@id": "https://4weblab.it/#business" },
        creator: { "@id": "https://4weblab.it/#business" },
        producer: { "@id": "https://4weblab.it/#business" },
        publisher: { "@id": "https://4weblab.it/#business" },
        copyrightHolder: { "@id": "https://4weblab.it/#business" },
        about: "Web design, UX e SEO B2B per aziende metalmeccaniche realizzati da 4 Web Lab.",
        keywords: [
          "agenzia web design metalmeccanica",
          "realizzazione siti web carpenteria",
          "4 Web Lab industriale",
          "web design B2B manufacturing",
          "SEO aziende meccaniche"
        ],
        isAccessibleForFree: true,
        isFamilyFriendly: true
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 997,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "4 Web Lab — Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Realizzazioni 4 Web Lab", item: "https://4weblab.it/realizzazioni" },
          { "@type": "ListItem", position: 3, name: "Concept metalmeccanico premium · 4 Web Lab", item: "https://4weblab.it/realizzazioni/demo-metalmeccanica" }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 1025,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://4weblab.it/realizzazioni/demo-metalmeccanica#webpage",
        name: "4 Web Lab · Concept Web Design Premium per Aziende Metalmeccaniche",
        url: "https://4weblab.it/realizzazioni/demo-metalmeccanica",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        about: { "@id": "https://4weblab.it/realizzazioni/demo-metalmeccanica#concept" },
        mainEntity: { "@id": "https://4weblab.it/realizzazioni/demo-metalmeccanica#concept" },
        author: { "@id": "https://4weblab.it/#business" },
        creator: { "@id": "https://4weblab.it/#business" },
        publisher: { "@id": "https://4weblab.it/#business" },
        description: "Tech demo concettuale realizzata da 4 Web Lab — agenzia italiana specializzata in web design premium per aziende metalmeccaniche, carpenteria e manifatturiero B2B."
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 1038,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("style", { children: `
          @keyframes aurumFadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
        ` }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 1056,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 975,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { style: { background: C.bg, color: C.text, fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, sans-serif" }, children: [
      /* @__PURE__ */ jsxDEV(AurumHeader, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 1065,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("main", { children: [
        /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 1067,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Values, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 1068,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(About, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 1069,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Technologies, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 1070,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Process, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 1071,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Realizations, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 1072,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(CtaBanner, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 1073,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Contacts, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
          lineNumber: 1074,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 1066,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(AurumFooter, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
        lineNumber: 1076,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
      lineNumber: 1064,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoMetalmeccanica.tsx",
    lineNumber: 974,
    columnNumber: 5
  }, void 0);
};
export {
  DemoMetalmeccanica as default
};
