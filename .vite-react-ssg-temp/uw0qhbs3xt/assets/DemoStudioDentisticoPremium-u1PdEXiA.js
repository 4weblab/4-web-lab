import { j as jsxDEV, b as Fragment, m as motion } from "../main.mjs";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Menu, X, Calendar, Star, ShieldCheck, Users, ScanLine, Sparkles, Award, CheckCircle2, ArrowLeft, Minus, Plus, AlertTriangle, Clock, MapPin, Mail, Smile, Heart, Smartphone, Gauge, Lock, Search } from "lucide-react";
import { h as heroImg } from "./dental-hero-DRkimlWq.js";
import { r as roomImg } from "./dental-room-CLFnv7L6.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
const scan3dImg = "/assets/dental-3d-scan-CRhWmhLW.webp";
const beforeImg = "/assets/dental-before-ydejJBIr.webp";
const afterImg = "/assets/dental-after-D64JzUgY.webp";
const doc1 = "/assets/dental-doctor-1-C3NoOCD7.webp";
const doc2 = "/assets/dental-doctor-2-BwBitP9f.webp";
const doc3 = "/assets/dental-doctor-3-BhgDxMuJ.webp";
const C = {
  bg: "#FFFFFF",
  bgSoft: "#F5F8FC",
  bgTint: "#EAF2FB",
  ink: "#0B2545",
  inkSoft: "#1E3358",
  textDim: "#5C6E86",
  border: "rgba(11,37,69,0.08)",
  borderStrong: "rgba(11,37,69,0.16)",
  primary: "#1E4FD8",
  primarySoft: "#3A7BFF",
  cyan: "#19B8C2",
  cyanSoft: "#7BD9DF",
  beige: "#C8A97E",
  beigeSoft: "#F4ECDD"
};
const navItems = [
  { label: "Studio", href: "#studio" },
  { label: "Trattamenti", href: "#trattamenti" },
  { label: "Tecnologia", href: "#dsd" },
  { label: "Risultati", href: "#risultati" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" }
];
const scrollToContact = () => {
  var _a;
  (_a = document.getElementById("prenota")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
};
const scrollToId = (id) => {
  var _a;
  (_a = document.getElementById(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
};
const AureaHeader = () => {
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
        background: scrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.55)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
        boxShadow: scrolled ? "0 8px 30px -20px rgba(11,37,69,0.18)" : "none"
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
              className: "flex items-center gap-2.5",
              "aria-label": "Studio Dentistico Aurea — Home",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    className: "w-9 h-9 rounded-lg flex items-center justify-center font-semibold text-sm",
                    style: {
                      background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})`,
                      color: "#fff",
                      boxShadow: `0 8px 20px -8px ${C.primary}80`
                    },
                    children: "Au"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-[1.05rem] tracking-[0.04em]", style: { color: C.ink }, children: [
                  "Aurea",
                  /* @__PURE__ */ jsxDEV("span", { style: { color: C.cyan }, children: "." }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 128,
                    columnNumber: 18
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 127,
                  columnNumber: 11
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 111,
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
              className: "px-3.5 py-2 rounded-md text-[13.5px] font-medium transition-colors",
              style: { color: C.inkSoft },
              onMouseEnter: (e) => e.currentTarget.style.color = C.primary,
              onMouseLeave: (e) => e.currentTarget.style.color = C.inkSoft,
              children: it.label
            },
            it.href,
            false,
            {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 134,
              columnNumber: 13
            },
            void 0
          )) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 132,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "tel:+393514656042",
                className: "inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[13.5px] font-medium",
                style: { color: C.inkSoft },
                children: [
                  /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 154,
                    columnNumber: 13
                  }, void 0),
                  " 02 1234 5678"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 149,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: scrollToContact,
                className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5",
                style: {
                  background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`,
                  color: "#fff",
                  boxShadow: `0 10px 24px -10px ${C.primary}aa`
                },
                children: [
                  "Prenota visita",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 166,
                    columnNumber: 13
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 156,
                columnNumber: 11
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 148,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "lg:hidden p-2 rounded-md",
              onClick: () => setOpen(true),
              "aria-label": "Apri menu",
              style: { color: C.ink },
              children: /* @__PURE__ */ jsxDEV(Menu, { className: "w-6 h-6" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 176,
                columnNumber: 11
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 170,
              columnNumber: 9
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 110,
          columnNumber: 7
        }, void 0),
        open && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-[60] flex flex-col", style: { background: C.bg }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "px-5 h-16 flex items-center justify-between border-b", style: { borderColor: C.border }, children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-semibold tracking-[0.04em]", style: { color: C.ink }, children: "Aurea." }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 183,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("button", { onClick: () => setOpen(false), "aria-label": "Chiudi menu", style: { color: C.ink }, className: "p-2", children: /* @__PURE__ */ jsxDEV(X, { className: "w-6 h-6" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 185,
              columnNumber: 15
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 184,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 182,
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
                className: "text-3xl md:text-4xl font-semibold py-3",
                style: { color: C.ink, animation: `aureaFadeUp 0.4s ${i * 0.05}s both` },
                children: it.label
              },
              it.href,
              false,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 190,
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
                className: "mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold",
                style: { background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`, color: "#fff" },
                children: [
                  "Prenota una visita ",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 205,
                    columnNumber: 34
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 200,
                columnNumber: 13
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 188,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 181,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 100,
      columnNumber: 5
    },
    void 0
  );
};
const Hero = () => /* @__PURE__ */ jsxDEV(
  "section",
  {
    id: "top",
    className: "relative min-h-[100svh] flex items-center overflow-hidden",
    style: { background: `linear-gradient(180deg, ${C.bg} 0%, ${C.bgSoft} 100%)` },
    children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          "aria-hidden": true,
          className: "absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full",
          style: { background: `radial-gradient(circle, ${C.cyanSoft}55 0%, transparent 70%)`, filter: "blur(20px)" }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 222,
          columnNumber: 5
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          "aria-hidden": true,
          className: "absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full",
          style: { background: `radial-gradient(circle, ${C.primary}22 0%, transparent 70%)`, filter: "blur(20px)" }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 224,
          columnNumber: 5
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { "aria-hidden": true, className: "absolute inset-0 opacity-[0.4]", style: {
        backgroundImage: `radial-gradient(circle at 1px 1px, ${C.ink}11 1px, transparent 0)`,
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)"
      } }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 226,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 md:pt-40 md:pb-24 w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxDEV(
                "span",
                {
                  className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] mb-7",
                  style: {
                    color: C.primary,
                    background: "rgba(30,79,216,0.08)",
                    border: `1px solid ${C.primary}33`
                  },
                  children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full", style: { background: C.cyan, boxShadow: `0 0 12px ${C.cyan}` } }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 246,
                      columnNumber: 11
                    }, void 0),
                    "Studio Dentistico Premium · Milano"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 238,
                  columnNumber: 9
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                "h1",
                {
                  className: "font-semibold leading-[1.04] tracking-tight text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] mb-6",
                  style: { color: C.ink, letterSpacing: "-0.025em", fontFamily: "ui-serif, 'Times New Roman', serif" },
                  children: [
                    "Un nuovo standard",
                    /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 255,
                      columnNumber: 11
                    }, void 0),
                    "per il tuo",
                    " ",
                    /* @__PURE__ */ jsxDEV("span", { style: {
                      background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }, children: "sorriso" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 257,
                      columnNumber: 11
                    }, void 0),
                    "."
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 250,
                  columnNumber: 9
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("h2", { className: "sr-only", children: "Sito web per studio dentistico — concept realizzato da 4 Web Lab, agenzia web di Padova specializzata in siti per professionisti" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 266,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl max-w-2xl mb-10 leading-relaxed", style: { color: C.textDim }, children: "Odontoiatria di precisione e estetica dentale con tecnologia digitale 3D. Un percorso personalizzato, in un ambiente progettato attorno alla tua serenità." }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 268,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3 mb-12", children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: scrollToContact,
                    className: "inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm md:text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5",
                    style: {
                      background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`,
                      color: "#fff",
                      boxShadow: `0 18px 40px -14px ${C.primary}cc`
                    },
                    children: [
                      /* @__PURE__ */ jsxDEV(Calendar, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 283,
                        columnNumber: 13
                      }, void 0),
                      "Prenota la tua prima visita"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 274,
                    columnNumber: 11
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => scrollToId("dsd"),
                    className: "inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm md:text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5",
                    style: {
                      color: C.ink,
                      background: "rgba(255,255,255,0.7)",
                      border: `1px solid ${C.borderStrong}`,
                      backdropFilter: "blur(8px)"
                    },
                    children: "Scopri il Digital Smile Design"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 273,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-x-8 gap-y-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-current", style: { color: "#F5B301" } }, i, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 304,
                    columnNumber: 37
                  }, void 0)) }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 303,
                    columnNumber: 13
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", style: { color: C.ink }, children: "4.9/5 · 320+ recensioni" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 306,
                    columnNumber: 13
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 302,
                  columnNumber: 11
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-sm", style: { color: C.textDim }, children: [
                  /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-4 h-4", style: { color: C.cyan } }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 309,
                    columnNumber: 13
                  }, void 0),
                  "Direttore sanitario iscritto Albo"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 308,
                  columnNumber: 11
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 301,
                columnNumber: 9
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 233,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.96 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.9, ease: "easeOut" },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "relative rounded-[28px] overflow-hidden aspect-[4/5] md:aspect-[5/6]",
                  style: {
                    border: `1px solid ${C.border}`,
                    boxShadow: "0 60px 120px -40px rgba(11,37,69,0.35), 0 20px 40px -20px rgba(11,37,69,0.2)"
                  },
                  children: [
                    /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        src: heroImg,
                        alt: "Reception dello studio dentistico Aurea, ambiente luminoso e moderno",
                        width: 1920,
                        height: 1280,
                        fetchPriority: "high",
                        decoding: "async",
                        className: "w-full h-full object-cover"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
                      background: `linear-gradient(180deg, transparent 50%, ${C.ink}26 100%)`
                    } }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 338,
                      columnNumber: 11
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 322,
                  columnNumber: 9
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { opacity: 0, x: -20, y: 10 },
                  animate: { opacity: 1, x: 0, y: 0 },
                  transition: { delay: 0.5, duration: 0.6 },
                  className: "absolute -left-3 md:-left-10 top-10 md:top-16 p-4 md:p-5 rounded-2xl flex items-center gap-3",
                  style: {
                    background: "rgba(255,255,255,0.85)",
                    border: `1px solid ${C.border}`,
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 24px 48px -20px rgba(11,37,69,0.25)"
                  },
                  children: [
                    /* @__PURE__ */ jsxDEV(
                      "div",
                      {
                        className: "w-10 h-10 rounded-xl flex items-center justify-center",
                        style: { background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})` },
                        children: /* @__PURE__ */ jsxDEV(Users, { className: "w-5 h-5 text-white" }, void 0, false, {
                          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                          lineNumber: 358,
                          columnNumber: 13
                        }, void 0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "text-[18px] font-semibold leading-none", style: { color: C.ink }, children: "+2.500" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 361,
                        columnNumber: 13
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] mt-1", style: { color: C.textDim }, children: "pazienti seguiti" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 362,
                        columnNumber: 13
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 360,
                      columnNumber: 11
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 344,
                  columnNumber: 9
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { opacity: 0, x: 20, y: -10 },
                  animate: { opacity: 1, x: 0, y: 0 },
                  transition: { delay: 0.65, duration: 0.6 },
                  className: "absolute -right-3 md:-right-8 top-1/2 -translate-y-1/2 p-4 md:p-5 rounded-2xl flex items-center gap-3",
                  style: {
                    background: "rgba(255,255,255,0.85)",
                    border: `1px solid ${C.border}`,
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 24px 48px -20px rgba(11,37,69,0.25)"
                  },
                  children: [
                    /* @__PURE__ */ jsxDEV(
                      "div",
                      {
                        className: "w-10 h-10 rounded-xl flex items-center justify-center",
                        style: { background: C.bgTint, border: `1px solid ${C.cyanSoft}` },
                        children: /* @__PURE__ */ jsxDEV(ScanLine, { className: "w-5 h-5", style: { color: C.primary } }, void 0, false, {
                          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                          lineNumber: 381,
                          columnNumber: 13
                        }, void 0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 379,
                        columnNumber: 11
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "text-[14px] font-semibold leading-none", style: { color: C.ink }, children: "Tecnologia 3D" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 384,
                        columnNumber: 13
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] mt-1", style: { color: C.textDim }, children: "Scansione intraorale" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 385,
                        columnNumber: 13
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 383,
                      columnNumber: 11
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 367,
                  columnNumber: 9
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.8, duration: 0.6 },
                  className: "absolute left-1/2 -translate-x-1/2 -bottom-6 md:-bottom-8 px-5 py-3.5 rounded-full flex items-center gap-2.5 whitespace-nowrap",
                  style: {
                    background: "#fff",
                    border: `1px solid ${C.border}`,
                    boxShadow: "0 24px 48px -20px rgba(11,37,69,0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full animate-pulse", style: { background: C.cyan } }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 401,
                      columnNumber: 11
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-[13px] font-semibold", style: { color: C.ink }, children: "Prima visita dedicata · 60 min" }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 402,
                      columnNumber: 11
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 390,
                  columnNumber: 9
                },
                void 0
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 316,
            columnNumber: 7
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 232,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 216,
    columnNumber: 3
  },
  void 0
);
const DemoNotice = () => /* @__PURE__ */ jsxDEV("section", { className: "py-10 md:py-14", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto px-5 md:px-8", children: /* @__PURE__ */ jsxDEV(
  "div",
  {
    className: "flex flex-col md:flex-row md:items-center gap-4 p-5 md:p-6 rounded-2xl",
    style: {
      background: `linear-gradient(135deg, ${C.bgTint} 0%, ${C.beigeSoft}80 100%)`,
      border: `1px solid ${C.border}`
    },
    children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center",
          style: { background: "#fff", border: `1px solid ${C.border}` },
          children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-5 h-5", style: { color: C.primary } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 422,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 420,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] mb-1", style: { color: C.primary }, children: "Concept project · Tech demo" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 425,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-[14.5px] leading-relaxed", style: { color: C.inkSoft }, children: [
          "Questa pagina è una ",
          /* @__PURE__ */ jsxDEV("strong", { children: "demo concettuale realizzata da 4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 429,
            columnNumber: 33
          }, void 0),
          ' per mostrare un possibile approccio premium al web design per studi dentistici. Lo studio "Aurea" è un brand fittizio.'
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 428,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 424,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: "/realizzazioni",
          className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors",
          style: { background: "#fff", color: C.ink, border: `1px solid ${C.borderStrong}` },
          children: [
            "Portfolio 4 Web Lab ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 438,
              columnNumber: 31
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 433,
          columnNumber: 9
        },
        void 0
      )
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 413,
    columnNumber: 7
  },
  void 0
) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 412,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 411,
  columnNumber: 3
}, void 0);
const SectionHead = ({
  kicker,
  title,
  sub,
  light = false,
  center = false
}) => /* @__PURE__ */ jsxDEV("div", { className: `max-w-3xl ${center ? "mx-auto text-center" : ""} mb-14 md:mb-20`, children: [
  /* @__PURE__ */ jsxDEV(
    "span",
    {
      className: "inline-block text-[11px] font-semibold uppercase tracking-[0.22em] mb-4",
      style: { color: C.cyan },
      children: kicker
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 450,
      columnNumber: 5
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV(
    "h2",
    {
      className: "text-3xl md:text-[2.85rem] leading-[1.1] tracking-tight mb-5 font-semibold",
      style: {
        color: light ? "#fff" : C.ink,
        letterSpacing: "-0.02em",
        fontFamily: "ui-serif, 'Times New Roman', serif"
      },
      children: title
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 456,
      columnNumber: 5
    },
    void 0
  ),
  sub && /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg leading-relaxed", style: { color: light ? "rgba(255,255,255,0.78)" : C.textDim }, children: sub }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 467,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 449,
  columnNumber: 3
}, void 0);
const Trust = () => {
  const items = [
    { v: "20+", l: "Anni di esperienza clinica" },
    { v: "+2.500", l: "Pazienti seguiti dal team" },
    { v: "4.9/5", l: "Recensioni medie online" },
    { v: "ISO 9001", l: "Standard di sterilizzazione" }
  ];
  return /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-20", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden",
      style: { background: C.border },
      children: items.map((it) => /* @__PURE__ */ jsxDEV("div", { className: "px-6 py-7 md:py-9 text-center", style: { background: C.bgSoft }, children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "text-2xl md:text-4xl font-semibold mb-2",
            style: { color: C.ink, fontFamily: "ui-serif, serif", letterSpacing: "-0.02em" },
            children: it.v
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 491,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[12px] uppercase tracking-wider", style: { color: C.textDim }, children: it.l }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 497,
          columnNumber: 15
        }, void 0)
      ] }, it.l, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 490,
        columnNumber: 13
      }, void 0))
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 485,
      columnNumber: 9
    },
    void 0
  ) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 484,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 483,
    columnNumber: 5
  }, void 0);
};
const Studio = () => /* @__PURE__ */ jsxDEV("section", { id: "studio", className: "py-24 md:py-32 relative overflow-hidden", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "relative order-2 lg:order-1", children: [
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "relative rounded-[24px] overflow-hidden aspect-[4/5]",
        style: { border: `1px solid ${C.border}`, boxShadow: "0 40px 80px -40px rgba(11,37,69,0.3)" },
        children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: roomImg,
            alt: "Sala operativa con tecnologia digitale dello Studio Aurea",
            width: 1600,
            height: 1200,
            loading: "lazy",
            decoding: "async",
            className: "w-full h-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 515,
            columnNumber: 11
          },
          void 0
        )
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 513,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute -bottom-6 -right-4 md:-right-10 p-5 rounded-2xl max-w-[260px]",
        style: {
          background: "#fff",
          border: `1px solid ${C.border}`,
          boxShadow: "0 24px 48px -20px rgba(11,37,69,0.3)"
        },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxDEV(Award, { className: "w-4 h-4", style: { color: C.beige } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 534,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] font-semibold uppercase tracking-wider", style: { color: C.inkSoft }, children: "Filosofia" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 535,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 533,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[13.5px] leading-relaxed", style: { color: C.ink }, children: '"Ogni sorriso è una storia. Il nostro compito è prendercene cura come fosse la nostra."' }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 539,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 525,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 512,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "order-1 lg:order-2", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Lo studio",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Un approccio ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.primary, fontStyle: "italic" }, children: "su misura" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 548,
            columnNumber: 33
          }, void 0),
          ", fondato su ascolto e tecnologia."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 548,
          columnNumber: 18
        }, void 0),
        sub: "Aurea è uno studio dentistico nato per offrire un'esperienza diversa: tempo dedicato a ogni paziente, percorsi clinici personalizzati e una struttura pensata per accogliere con calma. Diagnostica digitale 3D, sterilizzazione tracciata e un team multidisciplinare per coprire ogni esigenza, dall'estetica all'implantologia."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 546,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3.5", children: [
      "Prima visita estesa di 60 minuti, senza fretta",
      "Diagnostica con scanner intraorale 3D di ultima generazione",
      "Piano di cura preventivo, scritto e trasparente",
      "Sedazione cosciente per il massimo comfort durante i trattamenti"
    ].map((p) => /* @__PURE__ */ jsxDEV("li", { className: "flex gap-3 text-[15px]", style: { color: C.ink }, children: [
      /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 flex-shrink-0 mt-0.5", style: { color: C.cyan } }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 559,
        columnNumber: 15
      }, void 0),
      p
    ] }, p, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 558,
      columnNumber: 13
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 551,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 545,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 511,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 510,
  columnNumber: 3
}, void 0);
const Trattamenti = () => {
  const items = [
    { icon: Smile, title: "Implantologia", desc: "Implanti a carico immediato con guida chirurgica digitale e protesi su misura." },
    { icon: ScanLine, title: "Invisalign", desc: "Allineatori trasparenti progettati con simulazione 3D e revisioni periodiche del piano." },
    { icon: Sparkles, title: "Estetica dentale", desc: "Rimodellazione del sorriso con un approccio minimamente invasivo e altamente estetico." },
    { icon: Heart, title: "Faccette", desc: "Faccette in ceramica ultra-sottile, calibrate sul tuo viso con fotografia clinica e DSD." },
    { icon: ShieldCheck, title: "Igiene professionale", desc: "Sedute di igiene avanzata con protocolli di prevenzione personalizzati per la tua bocca." },
    { icon: Award, title: "Sbiancamento", desc: "Sbiancamento professionale in studio o domiciliare, con monitoraggio dei risultati nel tempo." }
  ];
  return /* @__PURE__ */ jsxDEV("section", { id: "trattamenti", className: "py-24 md:py-32 relative", style: { background: C.bgSoft }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Trattamenti",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Ogni servizio è un ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.primary, fontStyle: "italic" }, children: "percorso" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 584,
            columnNumber: 39
          }, void 0),
          ", non una semplice prestazione."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 584,
          columnNumber: 18
        }, void 0),
        sub: "Combiniamo competenza clinica, tecnologia digitale e attenzione estetica per piani di cura completi e prevedibili.",
        center: true
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 582,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((it, i) => /* @__PURE__ */ jsxDEV(
      motion.article,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: Math.min(i * 0.06, 0.3) },
        className: "group relative p-7 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1",
        style: {
          background: "#fff",
          border: `1px solid ${C.border}`,
          boxShadow: "0 1px 0 rgba(11,37,69,0.02)"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.boxShadow = "0 30px 60px -25px rgba(30,79,216,0.25)";
          e.currentTarget.style.borderColor = `${C.primary}55`;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.boxShadow = "0 1px 0 rgba(11,37,69,0.02)";
          e.currentTarget.style.borderColor = C.border;
        },
        children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110",
              style: {
                background: `linear-gradient(135deg, ${C.bgTint} 0%, #fff 100%)`,
                border: `1px solid ${C.borderStrong}`
              },
              children: /* @__PURE__ */ jsxDEV(it.icon, { className: "w-5 h-5", style: { color: C.primary } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 618,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 611,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-2", style: { color: C.ink }, children: it.title }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 620,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[14.5px] leading-relaxed mb-5", style: { color: C.textDim }, children: it.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 621,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: scrollToContact,
              className: "inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors",
              style: { color: C.primary },
              children: [
                "Richiedi informazioni",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 628,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 622,
              columnNumber: 15
            },
            void 0
          )
        ]
      },
      it.title,
      true,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 590,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 588,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 581,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 580,
    columnNumber: 5
  }, void 0);
};
const DSD = () => {
  const phases = [
    { n: "01", t: "Scansione 3D", d: "Acquisizione intraorale digitale, senza paste o calchi tradizionali." },
    { n: "02", t: "Simulazione", d: "Anteprima del sorriso finale prima di iniziare qualsiasi trattamento." },
    { n: "03", t: "Pianificazione", d: "Piano clinico condiviso, con tempi, fasi e investimento trasparenti." },
    { n: "04", t: "Trattamento", d: "Esecuzione guidata digitalmente, con controlli periodici programmati." }
  ];
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      id: "dsd",
      className: "py-24 md:py-36 relative overflow-hidden",
      style: { background: `linear-gradient(180deg, ${C.ink} 0%, #07182F 100%)` },
      children: [
        /* @__PURE__ */ jsxDEV("div", { "aria-hidden": true, className: "absolute inset-0 opacity-[0.18]", style: {
          backgroundImage: `linear-gradient(${C.cyan}33 1px, transparent 1px), linear-gradient(90deg, ${C.cyan}33 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
        } }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 649,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -top-32 right-0 w-[500px] h-[500px] rounded-full",
            style: { background: `radial-gradient(circle, ${C.cyan}40 0%, transparent 70%)`, filter: "blur(40px)" }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 654,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(
              SectionHead,
              {
                kicker: "Digital Smile Design",
                title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
                  "Vedere il tuo sorriso, ",
                  /* @__PURE__ */ jsxDEV("em", { style: { color: C.cyan, fontStyle: "italic" }, children: "prima" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 661,
                    columnNumber: 45
                  }, void 0),
                  " di iniziare."
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 661,
                  columnNumber: 20
                }, void 0),
                sub: "Con la tecnologia DSD acquisiamo bocca, viso e movimento, e simuliamo il risultato finale prima di toccare un solo dente. Una scelta consapevole, basata su dati.",
                light: true
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 659,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: phases.map((p, i) => /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                initial: { opacity: 0, x: -16 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, margin: "-40px" },
                transition: { duration: 0.45, delay: i * 0.08 },
                className: "flex gap-5 p-5 rounded-xl",
                style: {
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)"
                },
                children: [
                  /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: "font-mono text-sm font-bold flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                      style: { background: `${C.cyan}22`, color: C.cyanSoft, border: `1px solid ${C.cyan}55` },
                      children: p.n
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 680,
                      columnNumber: 17
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-[15px] font-semibold mb-1", style: { color: "#fff" }, children: p.t }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 687,
                      columnNumber: 19
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[13.5px] leading-relaxed", style: { color: "rgba(255,255,255,0.7)" }, children: p.d }, void 0, false, {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 688,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 686,
                    columnNumber: 17
                  }, void 0)
                ]
              },
              p.n,
              true,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 667,
                columnNumber: 15
              },
              void 0
            )) }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 665,
              columnNumber: 11
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 658,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.7 },
              className: "relative",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "relative rounded-[24px] overflow-hidden",
                    style: {
                      border: "1px solid rgba(123,217,223,0.3)",
                      boxShadow: `0 60px 120px -40px ${C.cyan}55, 0 0 0 1px rgba(123,217,223,0.1)`
                    },
                    children: [
                      /* @__PURE__ */ jsxDEV(
                        "img",
                        {
                          src: scan3dImg,
                          alt: "Mockup di interfaccia per scansione 3D dentale",
                          width: 1920,
                          height: 1080,
                          loading: "lazy",
                          decoding: "async",
                          className: "w-full h-auto block"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                          lineNumber: 708,
                          columnNumber: 13
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
                        background: `linear-gradient(180deg, transparent 60%, ${C.ink}80 100%)`
                      } }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 717,
                        columnNumber: 13
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 703,
                    columnNumber: 11
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "absolute -top-4 -left-4 px-4 py-2.5 rounded-full flex items-center gap-2",
                    style: {
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(14px)",
                      border: `1px solid ${C.cyan}55`,
                      boxShadow: `0 12px 30px -12px ${C.cyan}80`
                    },
                    children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full animate-pulse", style: { background: C.cyan } }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 731,
                        columnNumber: 13
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-[12px] font-semibold tracking-wide", style: { color: "#fff" }, children: "SCAN ATTIVA" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 732,
                        columnNumber: 13
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 722,
                    columnNumber: 11
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "absolute -bottom-5 right-4 px-4 py-3 rounded-xl",
                    style: {
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(14px)",
                      border: `1px solid ${C.border}`,
                      boxShadow: "0 24px 48px -20px rgba(11,37,69,0.5)"
                    },
                    children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] uppercase tracking-wider mb-0.5", style: { color: C.textDim }, children: "Anteprima trattamento" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 743,
                        columnNumber: 13
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("div", { className: "text-[13px] font-semibold", style: { color: C.ink }, children: "Allineamento + faccette · 14 mesi" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 746,
                        columnNumber: 13
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 734,
                    columnNumber: 11
                  },
                  void 0
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 696,
              columnNumber: 9
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 657,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 647,
      columnNumber: 5
    },
    void 0
  );
};
const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef(null);
  const dragging = useRef(false);
  const handleMove = (clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = (clientX - r.left) / r.width * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };
  return /* @__PURE__ */ jsxDEV("section", { id: "risultati", className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Risultati reali",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Trasformazioni visibili, ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.primary, fontStyle: "italic" }, children: "millimetro dopo millimetro" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 775,
            columnNumber: 45
          }, void 0),
          "."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 775,
          columnNumber: 18
        }, void 0),
        sub: "Trascina la barra al centro per confrontare il prima e il dopo dei nostri trattamenti estetici e funzionali.",
        center: true
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 773,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          ref: wrapRef,
          className: "relative aspect-[16/10] rounded-3xl overflow-hidden select-none cursor-ew-resize",
          style: {
            border: `1px solid ${C.border}`,
            boxShadow: "0 40px 90px -40px rgba(11,37,69,0.4)",
            background: C.bgSoft
          },
          onMouseMove: (e) => dragging.current && handleMove(e.clientX),
          onMouseDown: (e) => {
            dragging.current = true;
            handleMove(e.clientX);
          },
          onMouseUp: () => dragging.current = false,
          onMouseLeave: () => dragging.current = false,
          onTouchStart: (e) => {
            dragging.current = true;
            handleMove(e.touches[0].clientX);
          },
          onTouchMove: (e) => handleMove(e.touches[0].clientX),
          onTouchEnd: () => dragging.current = false,
          children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: afterImg,
                alt: "Risultato dopo trattamento estetico — sorriso luminoso",
                loading: "lazy",
                decoding: "async",
                width: 1200,
                height: 750,
                className: "absolute inset-0 w-full h-full object-cover"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 798,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "absolute inset-0 overflow-hidden",
                style: { clipPath: `inset(0 ${100 - pos}% 0 0)` },
                children: /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: beforeImg,
                    alt: "Situazione iniziale prima del trattamento",
                    loading: "lazy",
                    decoding: "async",
                    width: 1200,
                    height: 750,
                    className: "w-full h-full object-cover"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 811,
                    columnNumber: 15
                  },
                  void 0
                )
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 807,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: "absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider",
                style: { background: "rgba(11,37,69,0.85)", color: "#fff", backdropFilter: "blur(8px)" },
                children: "Prima"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 822,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: "absolute top-4 right-4 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider",
                style: { background: "rgba(255,255,255,0.95)", color: C.ink, backdropFilter: "blur(8px)" },
                children: "Dopo"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 826,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 bottom-0 pointer-events-none", style: { left: `${pos}%`, width: 2, background: "#fff", boxShadow: "0 0 20px rgba(0,0,0,0.4)" } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 832,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-xl",
                style: {
                  left: `${pos}%`,
                  background: "#fff",
                  border: `2px solid ${C.primary}`,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)"
                },
                children: [
                  /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-3.5 h-3.5", style: { color: C.primary } }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 843,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5 -ml-1", style: { color: C.primary } }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 844,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 834,
                columnNumber: 13
              },
              void 0
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 781,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm mt-6", style: { color: C.textDim }, children: "Caso clinico dimostrativo · Le immagini di paragone sono a scopo illustrativo." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 848,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 780,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 772,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 771,
    columnNumber: 5
  }, void 0);
};
const Reviews = () => {
  const items = [
    { n: "Giulia M.", role: "Paziente · Invisalign", t: "Mi sono sentita ascoltata dal primo minuto. Hanno spiegato ogni passaggio con calma e i risultati sono andati oltre le aspettative.", img: doc1 },
    { n: "Marco T.", role: "Paziente · Implantologia", t: "Avevo paura del dentista da una vita. Lo studio è bellissimo, il team rassicurante e l'intervento si è svolto senza alcun fastidio.", img: doc2 },
    { n: "Federica B.", role: "Paziente · Faccette", t: "Mi hanno fatto vedere il sorriso finale prima ancora di iniziare. Una cosa che cambia tutto. Tornata a sorridere senza filtri.", img: doc3 }
  ];
  return /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32", style: { background: C.bgSoft }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Recensioni",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "La parola ai nostri ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.primary, fontStyle: "italic" }, children: "pazienti" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 869,
            columnNumber: 40
          }, void 0),
          "."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 869,
          columnNumber: 18
        }, void 0),
        sub: "La nostra reputazione si costruisce sorriso dopo sorriso. Una selezione di esperienze condivise dai nostri pazienti.",
        center: true
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 867,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6", children: items.map((r, i) => /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "p-7 md:p-8 rounded-2xl flex flex-col",
        style: { background: "#fff", border: `1px solid ${C.border}`, boxShadow: "0 20px 40px -30px rgba(11,37,69,0.2)" },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1 mb-4", children: [0, 1, 2, 3, 4].map((s) => /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-current", style: { color: "#F5B301" } }, s, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 885,
            columnNumber: 39
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 884,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[15px] leading-relaxed mb-6 flex-1", style: { color: C.ink }, children: [
            '"',
            r.t,
            '"'
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 887,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 pt-5 border-t", style: { borderColor: C.border }, children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: r.img,
                alt: `Foto di ${r.n}`,
                loading: "lazy",
                width: 48,
                height: 48,
                className: "w-12 h-12 rounded-full object-cover",
                style: { border: `1px solid ${C.border}` }
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 891,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-[14px] font-semibold", style: { color: C.ink }, children: r.n }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 900,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "text-[12px]", style: { color: C.textDim }, children: r.role }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 901,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 899,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 890,
            columnNumber: 15
          }, void 0)
        ]
      },
      r.n,
      true,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 875,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 873,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs mt-8", style: { color: C.textDim }, children: "Recensioni illustrative create per la demo. Nessun dato reale è stato utilizzato." }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 907,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 866,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 865,
    columnNumber: 5
  }, void 0);
};
const Team = () => {
  const team = [
    { n: "Dr.ssa Elena Marchetti", role: "Direttrice sanitaria · Estetica dentale", img: doc1 },
    { n: "Dr. Andrea Conti", role: "Implantologia e chirurgia orale", img: doc2 },
    { n: "Dr. Luca Rinaldi", role: "Ortodonzia · Invisalign", img: doc3 }
  ];
  return /* @__PURE__ */ jsxDEV("section", { id: "team", className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Il team",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Specialisti, prima ancora che ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.primary, fontStyle: "italic" }, children: "professionisti" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 927,
            columnNumber: 50
          }, void 0),
          "."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 927,
          columnNumber: 18
        }, void 0),
        sub: "Un team multidisciplinare, formato in Italia e all'estero, che condivide un unico obiettivo: la cura del paziente nel tempo.",
        center: true
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 925,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", children: team.map((m, i) => /* @__PURE__ */ jsxDEV(
      motion.figure,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "group rounded-2xl overflow-hidden",
        style: { background: C.bgSoft, border: `1px solid ${C.border}` },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: m.img,
                alt: `Ritratto di ${m.n}`,
                loading: "lazy",
                width: 900,
                height: 1200,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 943,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", style: {
              background: `linear-gradient(180deg, transparent 55%, ${C.ink}cc 100%)`
            } }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 950,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 942,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("figcaption", { className: "p-6", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-1", style: { color: C.ink }, children: m.n }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 955,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "text-[13px]", style: { color: C.textDim }, children: m.role }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 956,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 954,
            columnNumber: 15
          }, void 0)
        ]
      },
      m.n,
      true,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 933,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 931,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 924,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 923,
    columnNumber: 5
  }, void 0);
};
const EEAT = () => {
  const items = [
    { icon: Smartphone, t: "UX mobile-first", d: "L'80% delle ricerche di uno studio dentistico avviene da mobile. Un sito leggero e ordinato è il primo segno di professionalità." },
    { icon: ShieldCheck, t: "Fiducia online", d: "Foto reali, team identificabile, contenuti chiari su trattamenti e percorsi: la trasparenza è la nuova prevenzione." },
    { icon: Gauge, t: "Velocità e prestazioni", d: "Un sito che si carica in meno di 2 secondi riduce drasticamente l'abbandono e migliora la percezione percepita di qualità." },
    { icon: Lock, t: "Accessibilità e GDPR", d: "Contrasti adeguati, navigazione da tastiera e gestione consensi: requisiti tecnici e legali oggi imprescindibili." },
    { icon: Search, t: "SEO locale", d: 'Essere trovati per "dentista + città" non è fortuna: è struttura, contenuti coerenti e autorevolezza nel tempo.' },
    { icon: Calendar, t: "Prenotazione rapida", d: "Click-to-call, WhatsApp e form prenotazione in pochi tap: meno frizione, più appuntamenti reali." }
  ];
  return /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32", style: { background: C.bgSoft }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Strategia digitale",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Perché un sito moderno è oggi ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.primary, fontStyle: "italic" }, children: "parte della cura" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 981,
            columnNumber: 50
          }, void 0),
          "."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 981,
          columnNumber: 18
        }, void 0),
        sub: "Per uno studio dentistico, il sito è spesso il primo contatto con un futuro paziente. Velocità, chiarezza e estetica raccontano il livello di attenzione che metterete anche in poltrona."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 979,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((it, i) => /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.45, delay: i * 0.05 },
        className: "p-7 rounded-2xl",
        style: { background: "#fff", border: `1px solid ${C.border}` },
        children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "w-11 h-11 rounded-xl mb-4 flex items-center justify-center",
              style: { background: C.bgTint, border: `1px solid ${C.borderStrong}` },
              children: /* @__PURE__ */ jsxDEV(it.icon, { className: "w-5 h-5", style: { color: C.primary } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 997,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 995,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold mb-2", style: { color: C.ink }, children: it.t }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 999,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-relaxed", style: { color: C.textDim }, children: it.d }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1e3,
            columnNumber: 15
          }, void 0)
        ]
      },
      it.t,
      true,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 986,
        columnNumber: 13
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 984,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 978,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 977,
    columnNumber: 5
  }, void 0);
};
const FAQ = () => {
  const items = [
    {
      q: "Quanto è importante il sito web per uno studio dentistico nel 2026?",
      a: "Per la maggior parte dei pazienti, il sito è il primo contatto con lo studio. Velocità, chiarezza dei trattamenti, foto reali e prenotazione rapida da mobile sono oggi tra i principali fattori di scelta, insieme al passaparola."
    },
    {
      q: "Quali sezioni non possono mancare nel sito di un dentista?",
      a: "Una hero rassicurante, presentazione dello studio e del team, descrizione dei trattamenti, casi clinici (anche dimostrativi), recensioni, percorso di prima visita, FAQ e una pagina contatti con indirizzo, mappa e prenotazione."
    },
    {
      q: "Come si comunica un trattamento estetico in modo elegante?",
      a: "Con fotografia clinica curata, copy umano e mai aggressivo, simulazioni 3D quando possibile e una chiara distinzione tra benefici estetici e funzionali. Mai promesse, sempre processo."
    },
    {
      q: "Cosa significa SEO locale per uno studio dentistico?",
      a: 'Significa essere trovati su Google per le ricerche del tipo "dentista Milano", "implantologo zona Navigli" e simili. Si lavora su contenuti localizzati, scheda Google, recensioni reali, dati strutturati e citazioni coerenti su tutto il web.'
    },
    {
      q: "Posso usare un template generico per il mio studio dentistico?",
      a: "Si può, ma raramente è una buona idea. Un template generico trasmette generica professionalità. Un sito su misura comunica il livello reale dello studio fin dal primo secondo, e questo si traduce in più appuntamenti qualificati."
    }
  ];
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsxDEV("section", { id: "faq", className: "py-24 md:py-32", style: { background: C.bg }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHead,
      {
        kicker: "Domande frequenti",
        title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Le risposte ai dubbi più ",
          /* @__PURE__ */ jsxDEV("em", { style: { color: C.primary, fontStyle: "italic" }, children: "comuni" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1039,
            columnNumber: 45
          }, void 0),
          "."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1039,
          columnNumber: 18
        }, void 0),
        center: true
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1037,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: items.map((it, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "rounded-2xl overflow-hidden transition-all duration-300",
          style: {
            background: isOpen ? C.bgSoft : "#fff",
            border: `1px solid ${isOpen ? C.borderStrong : C.border}`
          },
          children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => setOpen(isOpen ? null : i),
                className: "w-full flex items-center gap-4 text-left px-6 py-5",
                "aria-expanded": isOpen,
                children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "flex-1 text-[15px] md:text-base font-semibold", style: { color: C.ink }, children: it.q }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 1059,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(
                    "span",
                    {
                      className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform",
                      style: {
                        background: isOpen ? C.primary : C.bgTint,
                        color: isOpen ? "#fff" : C.primary
                      },
                      children: isOpen ? /* @__PURE__ */ jsxDEV(Minus, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 1069,
                        columnNumber: 31
                      }, void 0) : /* @__PURE__ */ jsxDEV(Plus, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                        lineNumber: 1069,
                        columnNumber: 63
                      }, void 0)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                      lineNumber: 1062,
                      columnNumber: 19
                    },
                    void 0
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 1054,
                columnNumber: 17
              },
              void 0
            ),
            isOpen && /* @__PURE__ */ jsxDEV("div", { className: "px-6 pb-6 text-[14.5px] leading-relaxed", style: { color: C.textDim }, children: it.a }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1073,
              columnNumber: 19
            }, void 0)
          ]
        },
        it.q,
        true,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1046,
          columnNumber: 15
        },
        void 0
      );
    }) }, void 0, false, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1042,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 1036,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 1035,
    columnNumber: 5
  }, void 0);
};
const BookingForm = () => {
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
    fd.append("subject", "[DEMO Studio Dentistico Aurea] Nuova richiesta dal form demo 4 Web Lab");
    fd.append("from_name", "Demo Studio Aurea - 4 Web Lab");
    fd.append("origine_demo", "/realizzazioni/demo-studio-dentistico-premium");
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
  const inputBase = "w-full rounded-xl px-4 py-3.5 text-[14.5px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";
  const inputStyle = (f) => ({
    background: "#fff",
    border: `1px solid ${f && errors[f] ? "#ef4444" : C.borderStrong}`,
    color: C.ink
  });
  const labelCls = "text-[12px] font-semibold uppercase tracking-wider mb-1.5 block";
  return /* @__PURE__ */ jsxDEV("form", { ref: formRef, onSubmit, noValidate: true, className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.inkSoft }, children: "Nome e cognome *" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1164,
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
            className: inputBase,
            style: inputStyle("name"),
            onChange: () => clear("name")
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1165,
            columnNumber: 11
          },
          void 0
        ),
        errors.name && /* @__PURE__ */ jsxDEV("span", { className: "text-xs mt-1 block text-red-500", children: errors.name }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1167,
          columnNumber: 27
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1163,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.inkSoft }, children: "Telefono *" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1170,
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
            className: inputBase,
            style: inputStyle("phone"),
            onChange: () => clear("phone")
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1171,
            columnNumber: 11
          },
          void 0
        ),
        errors.phone && /* @__PURE__ */ jsxDEV("span", { className: "text-xs mt-1 block text-red-500", children: errors.phone }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1173,
          columnNumber: 28
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1169,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1162,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.inkSoft }, children: "Email *" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1178,
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
            className: inputBase,
            style: inputStyle("email"),
            onChange: () => clear("email")
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1179,
            columnNumber: 11
          },
          void 0
        ),
        errors.email && /* @__PURE__ */ jsxDEV("span", { className: "text-xs mt-1 block text-red-500", children: errors.email }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1181,
          columnNumber: 28
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1177,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.inkSoft }, children: "Trattamento di interesse" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1184,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("select", { name: "trattamento", className: inputBase, style: inputStyle(), defaultValue: "", children: [
          /* @__PURE__ */ jsxDEV("option", { value: "", children: "Seleziona…" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1186,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { children: "Prima visita" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1187,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { children: "Igiene professionale" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1188,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { children: "Implantologia" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1189,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { children: "Invisalign" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1190,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { children: "Estetica dentale / Faccette" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1191,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { children: "Sbiancamento" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1192,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("option", { children: "Altro" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1193,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1185,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1183,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1176,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: labelCls, style: { color: C.inkSoft }, children: "Messaggio" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1198,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          name: "message",
          rows: 4,
          placeholder: "Raccontaci brevemente la tua esigenza o i giorni preferiti per la visita...",
          className: `${inputBase} resize-none`,
          style: inputStyle()
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1199,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1197,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "sr-only", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxDEV("label", { children: [
        "Website",
        /* @__PURE__ */ jsxDEV("input", { name: "website", type: "text", tabIndex: -1, autoComplete: "off" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1205,
          columnNumber: 23
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1205,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("label", { children: [
        "Fax",
        /* @__PURE__ */ jsxDEV("input", { name: "fax", type: "text", tabIndex: -1, autoComplete: "off" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1206,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1206,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1204,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "submit",
        disabled: status.state === "sending",
        className: "w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:hover:translate-y-0",
        style: {
          background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`,
          color: "#fff",
          boxShadow: `0 18px 40px -14px ${C.primary}cc`
        },
        children: [
          status.state === "sending" ? "Invio in corso..." : "Prenota la prima visita",
          status.state !== "sending" && /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1217,
            columnNumber: 40
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1209,
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
        style: { color: status.state === "success" ? "#16a34a" : status.state === "error" ? "#dc2626" : C.textDim },
        children: status.message
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1221,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "text-[11.5px] leading-relaxed mt-2", style: { color: C.textDim }, children: [
      "I dati inseriti verranno trattati da ",
      /* @__PURE__ */ jsxDEV("strong", { children: "4 Web Lab di Fullin Carlo" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1228,
        columnNumber: 46
      }, void 0),
      " (P.IVA 05765760284) per rispondere alla richiesta di contatto, base giuridica art. 6.1.b GDPR. Maggiori info nella",
      " ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", target: "_blank", className: "underline", style: { color: C.primary }, children: "Privacy Policy" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1230,
        columnNumber: 9
      }, void 0),
      "."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1227,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 1161,
    columnNumber: 5
  }, void 0);
};
const Booking = () => /* @__PURE__ */ jsxDEV("section", { id: "prenota", className: "py-24 md:py-32", style: { background: C.bgSoft }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "mb-10 md:mb-14 p-5 md:p-6 rounded-2xl flex gap-4 items-start",
      style: {
        background: "rgba(30,79,216,0.06)",
        border: `1px solid ${C.primary}33`
      },
      children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
            style: { background: "#fff", color: C.primary, border: `1px solid ${C.borderStrong}` },
            children: /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1248,
              columnNumber: 11
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1246,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] font-bold uppercase tracking-[0.2em] mb-1", style: { color: C.primary }, children: "Avviso importante — Tech Demo" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1251,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-[14.5px] leading-relaxed", style: { color: C.ink }, children: [
            "Questa è una ",
            /* @__PURE__ */ jsxDEV("strong", { children: "demo concettuale realizzata da 4 Web Lab" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1255,
              columnNumber: 26
            }, void 0),
            ". Le richieste inviate tramite questo modulo verranno recapitate ",
            /* @__PURE__ */ jsxDEV("strong", { children: "direttamente a 4 Web Lab" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1256,
              columnNumber: 55
            }, void 0),
            " e ",
            /* @__PURE__ */ jsxDEV("strong", { children: "non" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1256,
              columnNumber: 99
            }, void 0),
            ' ad uno studio dentistico reale. "Studio Aurea" è un brand fittizio creato a scopo dimostrativo.'
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1254,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1250,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1241,
      columnNumber: 7
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "lg:pt-2", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHead,
        {
          kicker: "Prenota",
          title: /* @__PURE__ */ jsxDEV(Fragment, { children: [
            "La prima visita è il ",
            /* @__PURE__ */ jsxDEV("em", { style: { color: C.primary, fontStyle: "italic" }, children: "primo passo" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1267,
              columnNumber: 43
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1267,
            columnNumber: 20
          }, void 0),
          sub: "Compila il modulo: ti ricontattiamo entro 24 ore per concordare insieme un appuntamento, senza alcun impegno."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1265,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 mb-8", children: [
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "tel:+393514656042",
            className: "group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5",
            style: { background: "#fff", border: `1px solid ${C.border}` },
            children: [
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                  style: { background: C.bgTint, color: C.primary },
                  children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 1277,
                    columnNumber: 17
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 1275,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] uppercase tracking-wider", style: { color: C.textDim }, children: "Chiama lo studio" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 1280,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", style: { color: C.ink }, children: "+39 351 465 6042" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 1281,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 1279,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1", style: { color: C.primary } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 1283,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1272,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "https://wa.me/393514656042?text=Ciao%2C%20ho%20visto%20la%20demo%20studio%20dentistico%20premium%20su%204weblab.it",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5",
            style: { background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.4)" },
            children: [
              /* @__PURE__ */ jsxDEV(
                "div",
                {
                  className: "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                  style: { background: "#25D366", color: "#fff" },
                  children: /* @__PURE__ */ jsxDEV("svg", { viewBox: "0 0 24 24", className: "w-5 h-5", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxDEV("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.463 3.488z" }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 1293,
                    columnNumber: 19
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                    lineNumber: 1292,
                    columnNumber: 17
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 1290,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] uppercase tracking-wider", style: { color: C.textDim }, children: "WhatsApp (più rapido)" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 1297,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "font-semibold", style: { color: C.ink }, children: "Scrivici su WhatsApp" }, void 0, false, {
                  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                  lineNumber: 1298,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 1296,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1", style: { color: "#25D366" } }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 1300,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1286,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 p-4 rounded-2xl", style: { background: "#fff", border: `1px solid ${C.border}` }, children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
              style: { background: C.bgTint, color: C.primary },
              children: /* @__PURE__ */ jsxDEV(Clock, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 1306,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1304,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] uppercase tracking-wider", style: { color: C.textDim }, children: "Orari (placeholder)" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1309,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "font-semibold text-[14px]", style: { color: C.ink }, children: "Lun-Ven 9:00 — 19:30 · Sab 9:00 — 13:00" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1310,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1308,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1303,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 p-4 rounded-2xl", style: { background: "#fff", border: `1px solid ${C.border}` }, children: [
          /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
              style: { background: C.bgTint, color: C.primary },
              children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 1317,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1315,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-[11px] uppercase tracking-wider", style: { color: C.textDim }, children: "Sede (placeholder)" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1320,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "font-semibold text-[14px]", style: { color: C.ink }, children: "Via Demo del Sorriso 12 — Milano" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1321,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1319,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1314,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1271,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-3 pt-6 border-t", style: { borderColor: C.border }, children: [
        { v: "24h", l: "Risposta" },
        { v: "60'", l: "Prima visita" },
        { v: "0€", l: "Senza impegno" }
      ].map((b) => /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "font-semibold text-xl", style: { color: C.ink, fontFamily: "ui-serif, serif" }, children: b.v }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1333,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] uppercase tracking-wider mt-1", style: { color: C.textDim }, children: b.l }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1334,
          columnNumber: 17
        }, void 0)
      ] }, b.l, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1332,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1326,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1264,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "p-6 md:p-10 rounded-3xl",
        style: {
          background: "#fff",
          border: `1px solid ${C.border}`,
          boxShadow: "0 50px 100px -50px rgba(11,37,69,0.35)"
        },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold", style: { color: C.ink, fontFamily: "ui-serif, serif" }, children: "Modulo prenotazione" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1348,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: "text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full",
                style: { background: C.bgTint, color: C.primary },
                children: "Demo"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
                lineNumber: 1351,
                columnNumber: 13
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1347,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV(BookingForm, {}, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1356,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1341,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 1262,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "mt-16 md:mt-20 text-center", children: /* @__PURE__ */ jsxDEV(
    Link,
    {
      to: "/realizzazioni",
      className: "inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline",
      style: { color: C.primary },
      children: "Torna alla lista delle demo"
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1360,
      columnNumber: 9
    },
    void 0
  ) }, void 0, false, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 1359,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 1239,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 1238,
  columnNumber: 3
}, void 0);
const AureaFooter = () => /* @__PURE__ */ jsxDEV("footer", { className: "pt-16 pb-8", style: { background: C.ink, color: "rgba(255,255,255,0.7)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-4 gap-10 mb-10", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5 mb-4", children: [
        /* @__PURE__ */ jsxDEV(
          "span",
          {
            className: "w-9 h-9 rounded-lg flex items-center justify-center font-semibold text-sm",
            style: { background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})`, color: "#fff" },
            children: "Au"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1379,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("span", { className: "font-semibold tracking-[0.04em] text-white", children: [
          "Aurea",
          /* @__PURE__ */ jsxDEV("span", { style: { color: C.cyan }, children: "." }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1381,
            columnNumber: 79
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1381,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1378,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-[14px] leading-relaxed mb-5 max-w-md italic", style: { color: "rgba(255,255,255,0.6)" }, children: '"Un nuovo standard per il tuo sorriso."' }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1383,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 text-[13.5px]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.cyan } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1387,
            columnNumber: 53
          }, void 0),
          "Via Demo del Sorriso 12 — 20121 Milano (placeholder)"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1387,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.cyan } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1388,
            columnNumber: 53
          }, void 0),
          "02 1234 5678 (placeholder)"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1388,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.cyan } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1389,
            columnNumber: 53
          }, void 0),
          "info@studio-aurea.demo"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1389,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxDEV(Clock, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.cyan } }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1390,
            columnNumber: 53
          }, void 0),
          "Lun-Ven 9:00 — 19:30 · Sab 9:00 — 13:00"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1390,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1386,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1377,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("h4", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 text-white", children: "Studio" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1395,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-[13.5px]", children: navItems.map((it) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: it.href,
          onClick: (e) => {
            e.preventDefault();
            scrollToId(it.href.slice(1));
          },
          className: "hover:text-white transition-colors",
          children: it.label
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1399,
          columnNumber: 17
        },
        void 0
      ) }, it.href, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1398,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1396,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1394,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("h4", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 text-white", children: "Seguici" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1410,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 mb-5", children: ["Instagram", "Facebook", "LinkedIn"].map((s) => /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "#",
          "aria-label": s,
          onClick: (e) => e.preventDefault(),
          className: "w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-colors",
          style: { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.12)" },
          children: s[0]
        },
        s,
        false,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1413,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1411,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: scrollToContact,
          className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold",
          style: { background: `linear-gradient(135deg, ${C.primary}, ${C.cyan})`, color: "#fff" },
          children: [
            "Prenota visita ",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
              lineNumber: 1423,
              columnNumber: 28
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1420,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1409,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 1376,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "p-5 rounded-2xl mb-8 text-[13px] leading-relaxed",
      style: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" },
      children: [
        /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: "Nota:" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1430,
          columnNumber: 9
        }, void 0),
        ' Studio Dentistico "Aurea" è un brand fittizio creato esclusivamente per finalità dimostrative. Questa pagina è una ',
        /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: "tech demo" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1431,
          columnNumber: 56
        }, void 0),
        " sviluppata da ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "underline", style: { color: C.cyan }, children: "4 Web Lab" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1432,
          columnNumber: 12
        }, void 0),
        " per illustrare un possibile concept di sito web premium per il settore odontoiatrico. Nessun dato medico, recensione o contatto è reale."
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1428,
      columnNumber: 7
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t text-[12px]",
      style: { borderColor: "rgba(255,255,255,0.1)" },
      children: [
        /* @__PURE__ */ jsxDEV("div", { children: "© 2026 Studio Dentistico Aurea (demo) — Tutti i diritti riservati." }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1438,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          "Tech demo by",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "font-semibold text-white", children: "4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1441,
            columnNumber: 11
          }, void 0),
          " ·",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "hover:text-white", children: "Privacy" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1442,
            columnNumber: 11
          }, void 0),
          " ·",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/cookie", className: "hover:text-white", children: "Cookie" }, void 0, false, {
            fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
            lineNumber: 1443,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1439,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1436,
      columnNumber: 7
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 1375,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 1374,
  columnNumber: 3
}, void 0);
const MobileSticky = () => /* @__PURE__ */ jsxDEV("div", { className: "lg:hidden fixed bottom-4 inset-x-4 z-40 flex gap-2", children: [
  /* @__PURE__ */ jsxDEV(
    "a",
    {
      href: "tel:+393514656042",
      className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-[14px] font-semibold",
      style: {
        background: "rgba(255,255,255,0.95)",
        color: C.ink,
        border: `1px solid ${C.border}`,
        backdropFilter: "blur(12px)",
        boxShadow: "0 14px 30px -10px rgba(11,37,69,0.3)"
      },
      children: [
        /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1464,
          columnNumber: 7
        }, void 0),
        " Chiama"
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1453,
      columnNumber: 5
    },
    void 0
  ),
  /* @__PURE__ */ jsxDEV(
    "button",
    {
      onClick: scrollToContact,
      className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-[14px] font-semibold",
      style: {
        background: `linear-gradient(135deg, ${C.primary}, ${C.primarySoft})`,
        color: "#fff",
        boxShadow: `0 14px 30px -10px ${C.primary}aa`
      },
      children: [
        /* @__PURE__ */ jsxDEV(Calendar, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1475,
          columnNumber: 7
        }, void 0),
        " Prenota"
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1466,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
  lineNumber: 1452,
  columnNumber: 3
}, void 0);
const DemoStudioDentisticoPremium = () => {
  const canonical = "https://4weblab.it/realizzazioni/demo-studio-dentistico-premium";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Sito Web per Studio Dentistico · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1487,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Demo di sito web per studi dentistici, realizzata da 4 Web Lab, agenzia web di Padova specializzata in siti per professionisti. Da 549€."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1488,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1492,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1493,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: canonical }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1494,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1495,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1496,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: "Realizzazioni" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1497,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1498,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Sito Web per Studio Dentistico · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1499,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Demo di sito web per studi dentistici e professionisti sanitari · 4 Web Lab, agenzia web di Padova. Da 549€." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1500,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: canonical }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1501,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og/demo-studio-dentistico-premium.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1502,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1503,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Sito Web per Studio Dentistico · Demo Padova | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1504,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: "Demo di sito web per studi dentistici · 4 Web Lab, agenzia web di Padova. Da 549€." }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1505,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og/demo-studio-dentistico-premium.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1506,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": canonical + "#concept",
        name: "Concept di sito web premium per studio dentistico — by 4 Web Lab",
        headline: "Tech demo: web design premium per studi dentistici realizzata da 4 Web Lab",
        url: canonical,
        inLanguage: "it-IT",
        author: { "@id": "https://4weblab.it/#business" },
        creator: { "@id": "https://4weblab.it/#business" },
        producer: { "@id": "https://4weblab.it/#business" },
        publisher: { "@id": "https://4weblab.it/#business" },
        copyrightHolder: { "@id": "https://4weblab.it/#business" },
        about: "Web design, UX e SEO locale per studi dentistici realizzati da 4 Web Lab.",
        keywords: [
          "agenzia web design studi dentistici",
          "realizzazione siti web dentisti Italia",
          "4 Web Lab healthcare",
          "web design medicale premium",
          "SEO locale studi dentistici"
        ],
        isAccessibleForFree: true,
        isFamilyFriendly: true
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1509,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "4 Web Lab — Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Realizzazioni 4 Web Lab", item: "https://4weblab.it/realizzazioni" },
          { "@type": "ListItem", position: 3, name: "Concept dentistico premium · 4 Web Lab", item: canonical }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1537,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": canonical + "#webpage",
        name: "4 Web Lab · Concept Web Design Premium per Studi Dentistici",
        url: canonical,
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        about: { "@id": canonical + "#concept" },
        mainEntity: { "@id": canonical + "#concept" },
        author: { "@id": "https://4weblab.it/#business" },
        creator: { "@id": "https://4weblab.it/#business" },
        publisher: { "@id": "https://4weblab.it/#business" },
        description: "Tech demo concettuale realizzata da 4 Web Lab — agenzia italiana specializzata in web design premium per studi dentistici, healthcare e professionisti."
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1550,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("style", { children: `
          @keyframes aureaFadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        ` }, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1568,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1486,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { style: { background: C.bg, color: C.ink, fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }, children: [
      /* @__PURE__ */ jsxDEV(AureaHeader, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1574,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("main", { children: [
        /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1576,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(DemoNotice, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1577,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Trust, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1578,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Studio, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1579,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Trattamenti, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1580,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(DSD, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1581,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(BeforeAfter, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1582,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Reviews, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1583,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Team, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1584,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(EEAT, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1585,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(FAQ, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1586,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(Booking, {}, void 0, false, {
          fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
          lineNumber: 1587,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1575,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(AureaFooter, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1589,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(MobileSticky, {}, void 0, false, {
        fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
        lineNumber: 1590,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
      lineNumber: 1573,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/DemoStudioDentisticoPremium.tsx",
    lineNumber: 1485,
    columnNumber: 5
  }, void 0);
};
export {
  DemoStudioDentisticoPremium as default
};
