import { j as jsxDEV, b as Fragment } from "../main.mjs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Leaf, ArrowRight, ChevronDown, X, Instagram, Sparkles, CheckCircle2, Phone, MessageCircle, Mail, Heart, Truck, Flower2, CalendarHeart } from "lucide-react";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxDEV(
    "header",
    {
      className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      style: {
        background: scrolled ? "rgba(245,240,230,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent"
      },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 h-[68px] md:h-[78px] flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo("home"),
              className: "flex items-center gap-2",
              "aria-label": "Verdefiore Atelier — torna alla home",
              children: /* @__PURE__ */ jsxDEV(
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
                    /* @__PURE__ */ jsxDEV("span", { style: { color: C.gold }, children: "·" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 119,
                      columnNumber: 23
                    }, void 0),
                    "Atelier"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 110,
                  columnNumber: 11
                },
                void 0
              )
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 105,
              columnNumber: 9
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("nav", { className: "hidden lg:flex items-center gap-9", children: NAV.map((n) => /* @__PURE__ */ jsxDEV(
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
            n.id,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 125,
              columnNumber: 13
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 123,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV(
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
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 141,
              columnNumber: 11
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 140,
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
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 161,
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
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 168,
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
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 172,
                    columnNumber: 11
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 156,
              columnNumber: 9
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 104,
          columnNumber: 7
        }, void 0),
        open && /* @__PURE__ */ jsxDEV("div", { className: "lg:hidden border-t", style: { background: C.bg, borderColor: C.line }, children: /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-6 flex flex-col gap-1", children: [
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
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 186,
              columnNumber: 15
            },
            void 0
          )),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo("contatti"),
              className: "mt-4 px-5 py-3 text-[12px] tracking-[0.18em] uppercase",
              style: { background: C.green, color: C.bg, fontFamily: SANS },
              children: "Richiedi informazioni"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 195,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 183,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 96,
      columnNumber: 5
    },
    void 0
  );
};
const Hero = () => /* @__PURE__ */ jsxDEV("section", { id: "home", className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden", children: [
  /* @__PURE__ */ jsxDEV(
    "img",
    {
      src: heroImg,
      alt: "Atelier di fiori botanici premium con composizioni floreali fresche, eucalipto e botaniche essiccate — concept sito web per negozi 4 Web Lab",
      width: 1920,
      height: 1080,
      fetchPriority: "high",
      decoding: "async",
      className: "absolute inset-0 w-full h-full object-cover"
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 214,
      columnNumber: 5
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "absolute inset-0",
      style: {
        background: "linear-gradient(180deg, rgba(20,20,15,0.45) 0%, rgba(20,20,15,0.15) 35%, rgba(20,20,15,0.75) 100%)"
      }
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 223,
      columnNumber: 5
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
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 230,
      columnNumber: 5
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV("div", { className: "relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32 text-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl animate-[fadeUp_1s_ease-out]", children: [
    /* @__PURE__ */ jsxDEV(
      "span",
      {
        className: "inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase mb-6",
        style: { fontFamily: SANS, color: C.goldSoft },
        children: [
          /* @__PURE__ */ jsxDEV(Leaf, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 244,
            columnNumber: 11
          }, void 0),
          " Demo concept · 4 Web Lab"
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 240,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "h1",
      {
        className: "text-[44px] sm:text-[60px] md:text-[80px] leading-[0.98] mb-6",
        style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Flower Atelier &",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 251,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("em", { style: { fontStyle: "italic", color: C.goldSoft }, children: "Botanical Design" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 252,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 246,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("h2", { className: "sr-only", children: "Sito web per negozio (fioreria) — concept realizzato da 4 Web Lab, agenzia web di Padova" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 254,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "p",
      {
        className: "text-[15px] md:text-[17px] max-w-xl leading-[1.7] mb-9",
        style: { fontFamily: SANS, color: "rgba(255,255,255,0.88)" },
        children: [
          "Una demo concept realizzata da",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline", style: { color: C.goldSoft }, children: "4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 260,
            columnNumber: 11
          }, void 0),
          " ",
          "(agenzia web di Padova) per mostrare il potenziale di un",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-per-negozi", className: "underline", style: { color: C.goldSoft }, children: "sito web per negozi" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 262,
            columnNumber: 11
          }, void 0),
          " ",
          "moderno: design immersivo, struttura SEO e cura mobile-first."
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 255,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3 mb-10", children: [
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "#contatti",
          className: "inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:scale-[1.02]",
          style: { background: C.bg, color: C.green, fontFamily: SANS, borderRadius: 2, fontWeight: 600 },
          children: [
            "Richiedi il tuo sito ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 272,
              columnNumber: 34
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 267,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
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
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 274,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 266,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 239,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 238,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] tracking-[0.3em] uppercase text-white", style: { fontFamily: SANS }, children: "Scroll" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 291,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-4 h-4 text-white animate-bounce" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 292,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 290,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV("style", { children: `
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    ` }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 295,
    columnNumber: 5
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 213,
  columnNumber: 3
}, void 0);
const Atelier = () => /* @__PURE__ */ jsxDEV("section", { id: "atelier", className: "py-24 md:py-36", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 md:gap-16 items-center", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-7 md:order-2 relative", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/5] overflow-hidden", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: detailImg,
        alt: "Mani di una florist compongono un bouquet artigianale con forbici e petali sul tavolo di lavoro",
        loading: "lazy",
        width: 1280,
        height: 1600,
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 312,
        columnNumber: 11
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 311,
      columnNumber: 9
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
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 321,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "hidden md:flex absolute -top-6 -right-6 w-28 h-28 items-center justify-center text-center",
        style: { background: C.bg, border: `1px solid ${C.line}`, borderRadius: "50%" },
        children: /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(Leaf, { className: "w-5 h-5 mx-auto mb-1", style: { color: C.green } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 331,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.2em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: [
            "Botanical",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 333,
              columnNumber: 24
            }, void 0),
            "Atelier"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 332,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 330,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 326,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 310,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-5 md:order-1", children: [
    /* @__PURE__ */ jsxDEV(
      "span",
      {
        className: "text-[11px] tracking-[0.3em] uppercase block mb-6",
        style: { fontFamily: SANS, color: C.green },
        children: "La filosofia"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 340,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-7",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: [
          "Fiori che raccontano,",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 350,
            columnNumber: 32
          }, void 0),
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.green }, children: "spazi che respirano." }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 351,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 346,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.85] mb-5", style: { fontFamily: SANS, color: C.inkSoft }, children: "Verdefiore è un atelier botanico immaginato come scenario per questa demo: un negozio di paese che diventa boutique, dove ogni composizione nasce dal dialogo tra forme naturali, stagioni e luce." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 353,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.85]", style: { fontFamily: SANS, color: C.inkSoft }, children: "L'obiettivo della pagina è dimostrare come un'attività locale possa comunicare cura, identità e qualità attraverso un sito moderno, veloce e curato in ogni dettaglio." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 358,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-6 mt-12 pt-10 border-t", style: { borderColor: C.line }, children: [
      { n: "100%", l: "Mobile-first" },
      { n: "<1s", l: "Tempo di caricamento" },
      { n: "SEO", l: "Strutturata e pulita" },
      { n: "GDPR", l: "Cookie e consensi" }
    ].map((s, i) => /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "text-[30px] md:text-[40px] leading-none mb-2",
          style: { fontFamily: SERIF, color: C.green, fontWeight: 400 },
          children: s.n
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 372,
          columnNumber: 15
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] tracking-[0.16em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: s.l }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 378,
        columnNumber: 15
      }, void 0)
    ] }, i, true, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 371,
      columnNumber: 13
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 364,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 339,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 309,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 308,
  columnNumber: 3
}, void 0);
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
const Composizioni = () => /* @__PURE__ */ jsxDEV("section", { id: "composizioni", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mb-16 md:mb-20", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: "Le composizioni" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 417,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-5",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: "Tre interpretazioni della natura."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 420,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Ogni proposta racconta un mood diverso: nel sito reale di un negozio questa griglia diventa il cuore della comunicazione visiva." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 426,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 416,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: COMPS.map((r, i) => /* @__PURE__ */ jsxDEV(
    "article",
    {
      className: "group flex flex-col bg-white transition-all duration-500 hover:-translate-y-1",
      style: { borderRadius: 2, boxShadow: "0 1px 0 rgba(0,0,0,0.04)" },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: r.img,
              alt: r.alt,
              loading: "lazy",
              width: 1280,
              height: 1600,
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 440,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              style: {
                background: "linear-gradient(180deg, transparent 50%, rgba(20,20,15,0.45) 100%)"
              }
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 448,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 439,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-7 md:p-9 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxDEV(
            "h3",
            {
              className: "text-[24px] md:text-[28px] leading-tight mb-3",
              style: { fontFamily: SERIF, color: C.ink, fontWeight: 400 },
              children: r.name
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 456,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: r.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 462,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 455,
          columnNumber: 13
        }, void 0)
      ]
    },
    i,
    true,
    {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 434,
      columnNumber: 11
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 432,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 415,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 414,
  columnNumber: 3
}, void 0);
const Eventi = () => /* @__PURE__ */ jsxDEV("section", { id: "eventi", className: "py-24 md:py-36", style: { background: C.bgDark }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-stretch", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-7 relative", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "aspect-[16/11] overflow-hidden", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: weddingImg,
        alt: "Arco floreale per matrimonio con rose bianche, peonie e verde fluente al tramonto",
        loading: "lazy",
        width: 1600,
        height: 1200,
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 481,
        columnNumber: 11
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 480,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute -bottom-6 -right-6 w-44 h-60 overflow-hidden", style: { borderRadius: 2, border: `4px solid ${C.bgDark}` }, children: /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: eventImg,
        alt: "Centrotavola elegante con fiori di stagione, candele e cristalleria",
        loading: "lazy",
        width: 800,
        height: 1e3,
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 491,
        columnNumber: 11
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 490,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 479,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-5 flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.goldSoft }, children: "Eventi · Matrimoni · Allestimenti" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 503,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[36px] md:text-[54px] leading-[1.05] mb-7 text-white",
        style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
        children: [
          "Flower styling",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 510,
            columnNumber: 25
          }, void 0),
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.goldSoft }, children: "per i momenti che restano." }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 511,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 506,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] leading-[1.85] mb-8", style: { fontFamily: SANS, color: "rgba(255,255,255,0.72)" }, children: "Matrimoni intimi, eventi privati, allestimenti per spazi commerciali: ogni progetto nasce su misura, dalla scelta dei materiali alla composizione finale. Questa sezione mostra come un sito può raccontare un servizio premium senza diventare un catalogo." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 513,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: "#contatti",
        className: "self-start inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase transition-all hover:scale-[1.02]",
        style: { background: C.gold, color: C.bgDark, fontFamily: SANS, borderRadius: 2, fontWeight: 600 },
        children: [
          "Richiedi una consulenza ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 524,
            columnNumber: 35
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 519,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 502,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 478,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 477,
  columnNumber: 3
}, void 0);
const SERVICES = [
  { i: Truck, t: "Consegna locale", d: "Bouquet e composizioni consegnate con cura nel raggio cittadino, in giornata." },
  { i: Flower2, t: "Bouquet personalizzati", d: "Composizioni su misura per occasioni speciali, dialogando con il cliente." },
  { i: Leaf, t: "Composizioni stagionali", d: "Solo materiale botanico fresco e selezionato, secondo la stagione." },
  { i: CalendarHeart, t: "Consulenza eventi", d: "Sopralluogo, mood board e allestimento completo per matrimoni ed eventi privati." }
];
const Servizi = () => /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: "I servizi" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 545,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[36px] md:text-[52px] leading-[1.05]",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: "Cura artigianale, in ogni dettaglio."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 548,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 544,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px", style: { background: C.line }, children: SERVICES.map((s, i) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "p-9 md:p-10 flex flex-col items-center text-center transition-colors duration-500",
      style: { background: C.bg },
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "w-12 h-12 rounded-full flex items-center justify-center mb-5",
            style: { background: "transparent", border: `1px solid ${C.green}` },
            children: /* @__PURE__ */ jsxDEV(s.i, { className: "w-5 h-5", style: { color: C.green } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 567,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 563,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[13px] tracking-[0.12em] uppercase mb-3", style: { fontFamily: SANS, color: C.ink, fontWeight: 500 }, children: s.t }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 569,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-[13px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: s.d }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 572,
          columnNumber: 13
        }, void 0)
      ]
    },
    i,
    true,
    {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 558,
      columnNumber: 11
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 556,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 543,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 542,
  columnNumber: 3
}, void 0);
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
  return /* @__PURE__ */ jsxDEV("section", { id: "gallery", className: "py-24 md:py-36", style: { background: C.bgAlt }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-6", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: "Gallery" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 602,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "h2",
            {
              className: "text-[36px] md:text-[56px] leading-[1.05]",
              style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
              children: "Dettagli e atmosfere."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 605,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 601,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "max-w-md text-[15px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Un layout editoriale per mostrare composizioni, ambienti del negozio e momenti dal vivo: nel sito di un'attività locale è il modo migliore per costruire fiducia visiva." }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 612,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 600,
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
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 628,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                style: { background: "rgba(20,20,15,0.25)" }
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 634,
                columnNumber: 15
              },
              void 0
            )
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 621,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 619,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 599,
      columnNumber: 7
    }, void 0),
    lightbox !== null && /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-[fadeUp_0.3s_ease-out]",
        style: { background: "rgba(20,20,15,0.94)" },
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
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 656,
                columnNumber: 13
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 651,
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
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 658,
              columnNumber: 11
            },
            void 0
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 644,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 598,
    columnNumber: 5
  }, void 0);
};
const FEED = [comp1, comp2, comp3, detailImg, eventImg, shopImg];
const Feed = () => /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: [
      /* @__PURE__ */ jsxDEV(Instagram, { className: "w-3.5 h-3.5" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 680,
        columnNumber: 11
      }, void 0),
      " Social feed (demo)"
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 679,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[34px] md:text-[48px] leading-[1.05]",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: "Un assaggio visivo dell'atelier."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 682,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 678,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3", children: FEED.map((src, i) => /* @__PURE__ */ jsxDEV("div", { className: "aspect-square overflow-hidden group", style: { borderRadius: 2 }, children: /* @__PURE__ */ jsxDEV(
    "img",
    {
      src,
      alt: `Scatto demo dal feed visuale dell'atelier floreale (${i + 1}/6)`,
      loading: "lazy",
      className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 692,
      columnNumber: 13
    },
    void 0
  ) }, i, false, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 691,
    columnNumber: 11
  }, void 0)) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 689,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 677,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 676,
  columnNumber: 3
}, void 0);
const TESTI = [
  { t: "Esempio dimostrativo di come una testimonianza cliente può essere presentata in modo elegante e leggibile.", n: "Cliente demo · A." },
  { t: "Testo placeholder usato per mostrare la spaziatura tipografica e l'impatto visivo di una citazione.", n: "Cliente demo · B." },
  { t: "Contenuto fittizio dichiarato: questa sezione, nel sito reale, ospiterà recensioni verificate del negozio.", n: "Cliente demo · C." }
];
const Testimonials = () => /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32", style: { background: C.bgAlt }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] tracking-[0.3em] uppercase block mb-5", style: { fontFamily: SANS, color: C.green }, children: "Testimonianze (demo)" }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 718,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "h2",
      {
        className: "text-[34px] md:text-[48px] leading-[1.05]",
        style: { fontFamily: SERIF, fontWeight: 400, color: C.ink, letterSpacing: "-0.01em" },
        children: "Come parlare dei propri clienti."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 721,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "mt-5 text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: C.inkSoft }, children: "Contenuti dichiaratamente fittizi: nel sito reale di un negozio queste card ospiterebbero recensioni verificate o Google Reviews." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 727,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 717,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: TESTI.map((r, i) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "p-8 md:p-10 flex flex-col",
      style: { background: C.bg, border: `1px solid ${C.line}`, borderRadius: 2 },
      children: [
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
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 739,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-5 border-t", style: { borderColor: C.line }, children: /* @__PURE__ */ jsxDEV("div", { className: "text-[13px] tracking-[0.08em] uppercase", style: { fontFamily: SANS, color: C.inkSoft }, children: r.n }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 746,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 745,
          columnNumber: 13
        }, void 0)
      ]
    },
    i,
    true,
    {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 734,
      columnNumber: 11
    },
    void 0
  )) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 732,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 716,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 715,
  columnNumber: 3
}, void 0);
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
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      id: "contatti",
      className: "relative overflow-hidden py-24 md:py-36",
      style: {
        background: `linear-gradient(135deg, ${C.green} 0%, #1F3322 60%, ${C.bgDark} 100%)`
      },
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-[0.07] pointer-events-none",
            style: {
              backgroundImage: "radial-gradient(circle at 20% 20%, rgba(216,188,140,0.45) 0px, transparent 35%), radial-gradient(circle at 80% 70%, rgba(216,188,140,0.35) 0px, transparent 40%)"
            }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 817,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
            /* @__PURE__ */ jsxDEV(
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
                  /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 838,
                    columnNumber: 13
                  }, void 0),
                  " Demo concept · contatto diretto con 4 Web Lab"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 829,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "h2",
              {
                className: "text-[36px] sm:text-[48px] md:text-[64px] leading-[1.02] text-white mb-8",
                style: { fontFamily: SERIF, fontWeight: 400, letterSpacing: "-0.01em" },
                children: [
                  "Vuoi un sito professionale",
                  /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 844,
                    columnNumber: 39
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("em", { style: { color: C.goldSoft }, children: "anche per il tuo negozio?" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 845,
                    columnNumber: 13
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 840,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[16px] md:text-[17px] leading-[1.8] max-w-2xl mx-auto", style: { fontFamily: SANS, color: "rgba(255,255,255,0.78)" }, children: [
              /* @__PURE__ */ jsxDEV("strong", { style: { color: "#fff", fontWeight: 600 }, children: "4 Web Lab" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 848,
                columnNumber: 13
              }, void 0),
              " realizza siti web per negozi, attività locali e professionisti a Padova, in Veneto e in tutta Italia. Soluzioni moderne ",
              /* @__PURE__ */ jsxDEV("strong", { style: { color: "#fff" }, children: "a partire da 199€" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 850,
                columnNumber: 31
              }, void 0),
              ", progettate per essere veloci, curate e ottimizzate anche da mobile."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 847,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("ul", { className: "flex flex-wrap gap-x-7 gap-y-3 justify-center mt-9", style: { fontFamily: SANS }, children: ["Design moderno", "Mobile-first", "SEO base inclusa", "Supporto diretto"].map((b) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-2 text-[13px]", style: { color: "rgba(255,255,255,0.85)" }, children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4", style: { color: C.goldSoft } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 857,
                columnNumber: 17
              }, void 0),
              b
            ] }, b, true, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 856,
              columnNumber: 15
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 854,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 828,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-14 lg:gap-20 items-start", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV(
                "h3",
                {
                  className: "text-[24px] md:text-[28px] mb-7 text-white",
                  style: { fontFamily: SERIF, fontWeight: 400 },
                  children: "Parla direttamente con 4 Web Lab."
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 867,
                  columnNumber: 13
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-5 mb-8", children: [
                /* @__PURE__ */ jsxDEV("a", { href: "tel:+393514656042", className: "flex items-center gap-4 group transition-opacity hover:opacity-80", children: [
                  /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: "w-11 h-11 flex items-center justify-center",
                      style: { border: `1px solid ${C.goldSoft}`, borderRadius: 2 },
                      children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4", style: { color: C.goldSoft } }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                        lineNumber: 880,
                        columnNumber: 19
                      }, void 0)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 876,
                      columnNumber: 17
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.55)" }, children: "Telefono" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 883,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "+39 351 465 6042" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 886,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 882,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 875,
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
                      /* @__PURE__ */ jsxDEV(
                        "div",
                        {
                          className: "w-11 h-11 flex items-center justify-center",
                          style: { border: `1px solid ${C.goldSoft}`, borderRadius: 2 },
                          children: /* @__PURE__ */ jsxDEV(MessageCircle, { className: "w-4 h-4", style: { color: "#25D366" } }, void 0, false, {
                            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                            lineNumber: 902,
                            columnNumber: 19
                          }, void 0)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                          lineNumber: 898,
                          columnNumber: 17
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV("div", { children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.55)" }, children: "WhatsApp" }, void 0, false, {
                          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                          lineNumber: 905,
                          columnNumber: 19
                        }, void 0),
                        /* @__PURE__ */ jsxDEV("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "Scrivici subito su WhatsApp" }, void 0, false, {
                          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                          lineNumber: 908,
                          columnNumber: 19
                        }, void 0)
                      ] }, void 0, true, {
                        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                        lineNumber: 904,
                        columnNumber: 17
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 892,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("a", { href: "mailto:info@4weblab.it", className: "flex items-center gap-4 group transition-opacity hover:opacity-80", children: [
                  /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: "w-11 h-11 flex items-center justify-center",
                      style: { border: `1px solid ${C.goldSoft}`, borderRadius: 2 },
                      children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4", style: { color: C.goldSoft } }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                        lineNumber: 919,
                        columnNumber: 19
                      }, void 0)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 915,
                      columnNumber: 17
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] tracking-[0.22em] uppercase mb-1", style: { fontFamily: SANS, color: "rgba(255,255,255,0.55)" }, children: "Email" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 922,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-[17px] text-white", style: { fontFamily: SERIF }, children: "info@4weblab.it" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 925,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 921,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 914,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 874,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDEV(
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
                    /* @__PURE__ */ jsxDEV("strong", { style: { color: C.goldSoft, fontWeight: 600 }, children: "Importante:" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 941,
                      columnNumber: 15
                    }, void 0),
                    " ",
                    '"Verdefiore Atelier" è una demo concept. Il contatto inviato da questa pagina arriva direttamente a',
                    " ",
                    /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline", style: { color: C.goldSoft }, children: "4 Web Lab" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 944,
                      columnNumber: 15
                    }, void 0),
                    " ",
                    "— non a una fioreria reale. Vedi le altre",
                    " ",
                    /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "underline", style: { color: C.goldSoft }, children: "realizzazioni" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                      lineNumber: 946,
                      columnNumber: 15
                    }, void 0),
                    "."
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 932,
                  columnNumber: 13
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 866,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV("form", { onSubmit, children: done ? /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "p-10 text-center",
                style: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 2 },
                children: [
                  /* @__PURE__ */ jsxDEV(Heart, { className: "w-8 h-8 mx-auto mb-5", style: { color: C.goldSoft } }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 957,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-[26px] mb-3 text-white", style: { fontFamily: SERIF, fontWeight: 400 }, children: "Richiesta ricevuta, grazie." }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 958,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.7]", style: { fontFamily: SANS, color: "rgba(255,255,255,0.65)" }, children: "Ti ricontatteremo a breve con una proposta su misura per il tuo negozio." }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 961,
                    columnNumber: 17
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 953,
                columnNumber: 15
              },
              void 0
            ) : /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "fa-name", children: "Nome completo *" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 969,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("input", { id: "fa-name", name: "name", type: "text", required: true, style: inputBase }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 970,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 968,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "fa-email", children: "Email *" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 973,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("input", { id: "fa-email", name: "email", type: "email", required: true, style: inputBase }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 974,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 972,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 967,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "fa-phone", children: "Telefono" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 979,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("input", { id: "fa-phone", name: "phone", type: "tel", style: inputBase }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 980,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 978,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "fa-activity", children: "Tipo di attività" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 983,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("input", { id: "fa-activity", name: "activity", type: "text", placeholder: "Negozio, studio, atelier…", style: inputBase }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 984,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 982,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 977,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { style: labelStyle, htmlFor: "fa-msg", children: "Messaggio" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 989,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "textarea",
                  {
                    id: "fa-msg",
                    name: "message",
                    rows: 4,
                    style: { ...inputBase, resize: "vertical" },
                    placeholder: "Raccontaci la tua attività e cosa vorresti ottenere dal sito…"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 990,
                    columnNumber: 19
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 988,
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
                    style: { accentColor: C.goldSoft }
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 1e3,
                    columnNumber: 19
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("span", { className: "text-[12px] leading-[1.7]", style: { fontFamily: SANS, color: "rgba(255,255,255,0.6)" }, children: [
                  "Acconsento al trattamento dei dati per essere ricontattato (Art. 6.1.b GDPR). Titolare: 4 Web Lab di Fullin Carlo — P.IVA 05765760284.",
                  " ",
                  /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "underline", style: { color: C.goldSoft }, children: "Privacy Policy" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                    lineNumber: 1010,
                    columnNumber: 21
                  }, void 0),
                  "."
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 1007,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 999,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("input", { type: "text", name: "botcheck", className: "hidden", tabIndex: -1, autoComplete: "off" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 1015,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV(
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
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                  lineNumber: 1017,
                  columnNumber: 17
                },
                void 0
              ),
              error && /* @__PURE__ */ jsxDEV("p", { className: "text-[13px] text-red-300", style: { fontFamily: SANS }, children: error }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
                lineNumber: 1033,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 966,
              columnNumber: 15
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 951,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 864,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-16 md:mt-20 text-center", children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/realizzazioni",
              className: "inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline",
              style: { fontFamily: SANS, color: C.goldSoft },
              children: "Torna alla lista delle demo"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 1041,
              columnNumber: 11
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 1040,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 826,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 809,
      columnNumber: 5
    },
    void 0
  );
};
const DemoFooter = () => /* @__PURE__ */ jsxDEV("footer", { style: { background: "#0D0D0A", color: "rgba(255,255,255,0.6)" }, children: [
  /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-4 gap-10", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "text-[22px] tracking-[0.18em] uppercase mb-5 text-white",
          style: { fontFamily: SERIF, fontWeight: 500 },
          children: [
            "Verdefiore",
            /* @__PURE__ */ jsxDEV("span", { style: { color: C.goldSoft }, children: "·" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
              lineNumber: 1065,
              columnNumber: 21
            }, void 0),
            "Atelier"
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1061,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-[1.8] max-w-sm", style: { fontFamily: SANS }, children: [
        "Demo concept di sito web premium per negozi e attività locali. Realizzato da ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline hover:text-white", style: { color: C.goldSoft }, children: "4 Web Lab" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1069,
          columnNumber: 25
        }, void 0),
        "."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1067,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 1060,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] tracking-[0.2em] uppercase text-white mb-4", style: { fontFamily: SANS }, children: "Naviga" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1074,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: NAV.map((n) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: `#${n.id}`, className: "hover:text-white transition-colors", children: n.label }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1080,
        columnNumber: 15
      }, void 0) }, n.id, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1079,
        columnNumber: 13
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1077,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 1073,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] tracking-[0.2em] uppercase text-white mb-4", style: { fontFamily: SANS }, children: "Contatti 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1087,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-[14px]", style: { fontFamily: SANS }, children: [
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "tel:+393514656042", className: "hover:text-white", children: "+39 351 465 6042" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1091,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1091,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "mailto:info@4weblab.it", className: "hover:text-white", children: "info@4weblab.it" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1092,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1092,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "https://wa.me/393514656042", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white", children: "WhatsApp" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1093,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1093,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-per-negozi", className: "hover:text-white", children: "Siti web per negozi" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1094,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1094,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "hover:text-white", children: "Altre realizzazioni" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1095,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1095,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1090,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 1086,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 1059,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "border-t py-7 text-[12px] text-center",
      style: { borderColor: "rgba(255,255,255,0.08)", fontFamily: SANS },
      children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Verdefiore Atelier — Tech demo realizzata da",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline hover:text-white", style: { color: C.goldSoft }, children: "4 Web Lab" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1104,
          columnNumber: 7
        }, void 0),
        ". Brand fittizio a scopo dimostrativo."
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 1099,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
  lineNumber: 1058,
  columnNumber: 3
}, void 0);
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
        style: { background: C.green, color: C.bg, fontFamily: SANS, borderRadius: 2 },
        children: [
          "Richiedi il tuo sito ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
            lineNumber: 1123,
            columnNumber: 28
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1118,
        columnNumber: 5
      },
      void 0
    )
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 1114,
    columnNumber: 3
  },
  void 0
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
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Sito Web per Negozio (Fioreria) · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1194,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Demo realizzata da 4 Web Lab, agenzia web di Padova specializzata in siti web per negozi e attività locali. Pacchetto una tantum da 199€."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1195,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1199,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1200,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: canonical }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1201,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1204,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1205,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: "Realizzazioni" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1206,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: canonical }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1207,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Sito Web per Negozio (Fioreria) · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1208,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "Demo di sito web per negozi realizzata da 4 Web Lab, agenzia web di Padova. Pacchetto una tantum da 199€."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1209,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1213,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1214,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og/flower-atelier-demo.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1215,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image:width", content: "1200" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1216,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image:height", content: "630" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1217,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1220,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Sito Web per Negozio (Fioreria) · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1221,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:description",
          content: "Demo di sito web per negozi realizzata da 4 Web Lab, agenzia web di Padova. Da 199€."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1222,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og/flower-atelier-demo.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1226,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1229,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1232,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1233,
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
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1234,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(creativeLd) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1240,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1241,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(webPageLd) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1242,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 1193,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { style: { background: C.bg, color: C.ink, fontFamily: SANS }, children: [
      /* @__PURE__ */ jsxDEV(DemoHeader, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1246,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("main", { children: [
        /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1248,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Atelier, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1249,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Composizioni, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1250,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Eventi, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1251,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Servizi, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1252,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Gallery, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1253,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Feed, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1254,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Testimonials, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1255,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(CTAFinale, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
          lineNumber: 1256,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1247,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(DemoFooter, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1258,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(StickyMobileCTA, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
        lineNumber: 1259,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
      lineNumber: 1245,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoFlowerAtelier.tsx",
    lineNumber: 1192,
    columnNumber: 5
  }, void 0);
};
export {
  DemoFlowerAtelier as default
};
