import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { H as Helmet, m as motion } from "../main.mjs";
import { Link } from "react-router-dom";
import { Sun, X, Menu, Sparkles, ArrowRight, Activity, Zap, Leaf, Battery, Gauge, ChevronDown, CheckCircle2, Phone, Mail, MapPin, Cpu, TrendingDown, ShieldCheck, Home, Building2, Plug, Users, Wrench } from "lucide-react";
import { i as industrialImg } from "./solaris-industrial-DjkCnBnI.js";
import { resolveElements } from "motion-dom";
import "vite-react-ssg";
import "@tanstack/react-query";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "next-themes";
import "sonner";
import "motion-utils";
import "react-fast-compare";
import "invariant";
import "shallowequal";
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = useState(initial);
  useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const heroImg = "/assets/solaris-hero-CCHKnkz0.webp";
const villaImg = "/assets/solaris-villa-Dg1GYzi-.webp";
const installImg = "/assets/solaris-install-C1nCAl0q.webp";
const C = {
  bg: "#070B14",
  // nero tecnico / blu notte profondo
  bg2: "#0C1322",
  // navy scuro
  bg3: "#121A2E",
  // navy medio
  surface: "#0F1626",
  accent: "#22E27A",
  // electric green
  accentSoft: "#7BFFB0",
  // lime neon soft
  cyan: "#38BDF8",
  text: "#EAF2FF",
  textDim: "#8FA1BD",
  border: "rgba(234,242,255,0.08)",
  borderStrong: "rgba(234,242,255,0.16)"
};
const navItems = [
  { label: "Soluzioni", href: "#servizi" },
  { label: "Processo", href: "#processo" },
  { label: "Risultati", href: "#case-studies" },
  { label: "Incentivi", href: "#incentivi" },
  { label: "Contatti", href: "#contatti" }
];
const scrollToId = (id) => {
  var _a;
  (_a = document.getElementById(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
};
const SolarisHeader = () => {
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
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: "fixed top-0 inset-x-0 z-50 transition-all duration-500",
      style: {
        background: scrolled ? "rgba(7,11,20,0.78)" : "rgba(7,11,20,0.18)",
        backdropFilter: "blur(20px) saturate(150%)",
        WebkitBackdropFilter: "blur(20px) saturate(150%)",
        borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#top",
              onClick: (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className: "flex items-center gap-2.5 group",
              "aria-label": "Solaris Energy - Home demo",
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "w-9 h-9 rounded-md flex items-center justify-center",
                    style: {
                      background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
                      boxShadow: `0 8px 28px -8px ${C.accent}99`
                    },
                    "aria-hidden": true,
                    children: /* @__PURE__ */ jsx(Sun, { className: "w-5 h-5", style: { color: C.bg }, strokeWidth: 2.5 })
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-[1.05rem] tracking-[0.18em]", style: { color: C.text }, children: "SOLARIS" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", "aria-label": "Navigazione principale", children: navItems.map((it) => /* @__PURE__ */ jsx(
            "a",
            {
              href: it.href,
              onClick: (e) => {
                e.preventDefault();
                scrollToId(it.href.slice(1));
              },
              className: "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/5",
              style: { color: C.textDim },
              children: it.label
            },
            it.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "tel:+393514656042",
                className: "text-sm font-medium px-4 py-2 rounded-md transition-colors",
                style: { color: C.text },
                children: "+39 351 465 6042"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => scrollToId("contatti"),
                className: "text-sm font-semibold px-5 py-2.5 rounded-md transition-all hover:-translate-y-0.5",
                style: {
                  background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
                  color: C.bg,
                  boxShadow: `0 8px 24px -10px ${C.accent}aa`
                },
                children: "Richiedi consulenza"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen(!open),
              className: "lg:hidden w-10 h-10 flex items-center justify-center rounded-md",
              style: { color: C.text },
              "aria-label": "Apri menu",
              children: open ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxs(
          "div",
          {
            className: "lg:hidden absolute top-full inset-x-0 px-5 py-6 space-y-1",
            style: { background: "rgba(7,11,20,0.96)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.border}` },
            children: [
              navItems.map((it) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: it.href,
                  onClick: (e) => {
                    e.preventDefault();
                    scrollToId(it.href.slice(1));
                    setOpen(false);
                  },
                  className: "block px-4 py-3 rounded-md text-base",
                  style: { color: C.text },
                  children: it.label
                },
                it.href
              )),
              /* @__PURE__ */ jsx("div", { className: "pt-3 mt-3 border-t", style: { borderColor: C.border }, children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    scrollToId("contatti");
                    setOpen(false);
                  },
                  className: "w-full text-center px-5 py-3 rounded-md font-semibold",
                  style: { background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`, color: C.bg },
                  children: "Richiedi consulenza"
                }
              ) })
            ]
          }
        )
      ]
    }
  );
};
const Counter = ({ to, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const inView2 = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView2) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(eased * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView2, to]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    val.toLocaleString("it-IT", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }),
    suffix
  ] });
};
const Hero = () => /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16 md:pt-28", children: [
  /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: heroImg,
        alt: "Impianto fotovoltaico industriale ad alte prestazioni installato su tetto aziendale",
        className: "w-full h-full object-cover",
        width: 1920,
        height: 1080,
        fetchPriority: "high"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: `linear-gradient(180deg, rgba(7,11,20,0.55) 0%, rgba(7,11,20,0.85) 60%, ${C.bg} 100%)`
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-30 pointer-events-none",
        style: {
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none",
        style: { background: `radial-gradient(circle, ${C.accent}33 0%, transparent 70%)` }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none",
        style: { background: `radial-gradient(circle, ${C.cyan}22 0%, transparent 70%)` }
      }
    )
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6",
          style: { background: `${C.accent}1a`, color: C.accent, border: `1px solid ${C.accent}33` },
          children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
            "Energia · Fotovoltaico · Accumulo"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "h1",
        {
          className: "text-4xl sm:text-5xl lg:text-[4.2rem] font-bold leading-[1.05] tracking-tight mb-6",
          style: { color: C.text },
          children: [
            "Trasforma il sole in un",
            " ",
            /* @__PURE__ */ jsx("span", { style: {
              background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }, children: "vantaggio economico reale" }),
            "."
          ]
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Sito web per azienda fotovoltaica — concept realizzato da 4 Web Lab, agenzia web di Padova" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl leading-relaxed max-w-2xl mb-10", style: { color: C.textDim }, children: "Riduci i costi energetici della tua casa o azienda con impianti fotovoltaici ad alte prestazioni progettati su misura, sistemi di accumulo e monitoraggio smart H24." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToId("contatti"),
            className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-base transition-all hover:-translate-y-0.5",
            style: {
              background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
              color: C.bg,
              boxShadow: `0 14px 36px -12px ${C.accent}88`
            },
            children: [
              "Richiedi consulenza",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToId("case-studies"),
            className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-base transition-all hover:bg-white/5",
            style: { color: C.text, border: `1px solid ${C.borderStrong}` },
            children: "Simula il risparmio"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.2 },
        className: "lg:col-span-5",
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden",
            style: {
              background: "rgba(15,22,38,0.7)",
              border: `1px solid ${C.borderStrong}`,
              boxShadow: `0 30px 80px -30px ${C.accent}40`
            },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full animate-pulse", style: { background: C.accent, boxShadow: `0 0 12px ${C.accent}` } }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider", style: { color: C.textDim }, children: "Live · Monitoraggio impianto" })
                ] }),
                /* @__PURE__ */ jsx(Activity, { className: "w-4 h-4", style: { color: C.accent } })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-5", children: [
                /* @__PURE__ */ jsx(FloatingStat, { icon: Zap, label: "Produzione", value: "42.8 kWh", sub: "oggi" }),
                /* @__PURE__ */ jsx(FloatingStat, { icon: Leaf, label: "CO₂ evitata", value: "18.6 kg", sub: "oggi" }),
                /* @__PURE__ */ jsx(FloatingStat, { icon: Battery, label: "Accumulo", value: "86%", sub: "carica" }),
                /* @__PURE__ */ jsx(FloatingStat, { icon: Gauge, label: "Autonomia", value: "78%", sub: "rete" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between gap-1.5 h-20 mb-2", children: [35, 52, 48, 70, 88, 95, 78, 60, 45].map((h, i) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "flex-1 rounded-sm",
                    style: {
                      height: `${h}%`,
                      background: `linear-gradient(180deg, ${C.accent}, ${C.cyan}66)`,
                      boxShadow: `0 0 8px ${C.accent}33`
                    }
                  },
                  i
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px]", style: { color: C.textDim }, children: [
                  /* @__PURE__ */ jsx("span", { children: "06:00" }),
                  /* @__PURE__ */ jsx("span", { children: "12:00" }),
                  /* @__PURE__ */ jsx("span", { children: "18:00" })
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => scrollToId("kpi"),
      className: "absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center",
      style: { color: C.textDim },
      "aria-label": "Scorri",
      children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 animate-bounce" })
    }
  )
] });
const FloatingStat = ({ icon: Icon, label, value, sub }) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: "rounded-xl p-3.5",
    style: { background: "rgba(7,11,20,0.5)", border: `1px solid ${C.border}` },
    children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mb-1.5", children: [
        /* @__PURE__ */ jsx(Icon, { className: "w-3.5 h-3.5", style: { color: C.accent } }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider font-semibold", style: { color: C.textDim }, children: label })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", style: { color: C.text }, children: value }),
      /* @__PURE__ */ jsx("div", { className: "text-[10px]", style: { color: C.textDim }, children: sub })
    ]
  }
);
const KpiSection = () => /* @__PURE__ */ jsxs("section", { id: "kpi", className: "py-20 md:py-28 relative", style: { background: C.bg2 }, children: [
  /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute inset-0 opacity-[0.04] pointer-events-none",
      style: {
        backgroundImage: `radial-gradient(${C.accent} 1px, transparent 1px)`,
        backgroundSize: "32px 32px"
      }
    }
  ),
  /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10", children: [
    { value: 480, suffix: "+", label: "Impianti installati" },
    { value: 12.4, suffix: " MW", label: "Potenza prodotta", decimals: 1 },
    { value: 68, suffix: "%", label: "Riduzione media bolletta" },
    { value: 24, suffix: "/7", label: "Monitoraggio smart" }
  ].map((k) => /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "text-4xl md:text-6xl font-bold mb-2 tracking-tight",
        style: {
          background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        },
        children: /* @__PURE__ */ jsx(Counter, { to: k.value, suffix: k.suffix, decimals: k.decimals ?? 0 })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base font-medium", style: { color: C.textDim }, children: k.label })
  ] }, k.label)) }) })
] });
const problems = [
  "Bollette energetiche instabili e in continuo aumento",
  "Dipendenza totale dalla rete elettrica nazionale",
  "Costi operativi che erodono i margini aziendali",
  "Consumi reali difficili da monitorare e ottimizzare"
];
const solutions = [
  { icon: Sun, title: "Fotovoltaico intelligente", desc: "Pannelli ad alta efficienza con inverter di ultima generazione." },
  { icon: Battery, title: "Sistemi di accumulo", desc: "Batterie al litio per usare l'energia anche di notte." },
  { icon: Activity, title: "Monitoraggio smart", desc: "Dashboard in tempo reale, app dedicata, alert automatici." },
  { icon: TrendingDown, title: "Ottimizzazione consumi", desc: "Analisi dei carichi e gestione intelligente dell'energia." },
  { icon: ShieldCheck, title: "Indipendenza energetica", desc: "Riduci la dipendenza dalla rete fino al 90%." }
];
const ProblemSolution = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", style: { background: C.bg }, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start", children: [
  /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider mb-4", style: { color: C.accent }, children: "Il contesto energetico" }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold leading-tight mb-6", style: { color: C.text }, children: "Il costo dell'energia non è più una voce trascurabile." }),
    /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg mb-8", style: { color: C.textDim }, children: "Negli ultimi anni il prezzo dell'elettricità ha mostrato volatilità senza precedenti. Per famiglie e imprese, l'autoproduzione è passata da scelta etica a leva strategica di competitività." }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: problems.map((p) => /* @__PURE__ */ jsxs(
      "li",
      {
        className: "flex items-start gap-3 p-4 rounded-xl",
        style: { background: C.bg2, border: `1px solid ${C.border}` },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mt-0.5",
              style: { background: "rgba(239,68,68,0.12)" },
              children: /* @__PURE__ */ jsx(X, { className: "w-3.5 h-3.5", style: { color: "#ef4444" }, strokeWidth: 3 })
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-sm md:text-base", style: { color: C.text }, children: p })
        ]
      },
      p
    )) })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: solutions.map((s, i) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-30px" },
      transition: { duration: 0.4, delay: i * 0.05 },
      className: "rounded-xl p-5 transition-all hover:-translate-y-1",
      style: {
        background: `linear-gradient(135deg, ${C.bg2}, ${C.bg3})`,
        border: `1px solid ${C.border}`
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-11 h-11 rounded-lg mb-4 flex items-center justify-center",
            style: {
              background: `${C.accent}1a`,
              border: `1px solid ${C.accent}33`,
              boxShadow: `0 0 16px ${C.accent}22`
            },
            children: /* @__PURE__ */ jsx(s.icon, { className: "w-5 h-5", style: { color: C.accent } })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold mb-1.5", style: { color: C.text }, children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", style: { color: C.textDim }, children: s.desc })
      ]
    },
    s.title
  )) })
] }) }) });
const services = [
  { icon: Home, title: "Fotovoltaico Residenziale", desc: "Impianti su misura per case, ville e condomini con design integrato e massima efficienza." },
  { icon: Building2, title: "Fotovoltaico Aziendale", desc: "Soluzioni per PMI e grandi aziende: capannoni, uffici, attività commerciali." },
  { icon: Battery, title: "Sistemi di Accumulo", desc: "Batterie al litio LFP per autoconsumo serale e backup in caso di blackout." },
  { icon: Plug, title: "Colonnine EV", desc: "Stazioni di ricarica per veicoli elettrici, integrate con il fotovoltaico aziendale." },
  { icon: Users, title: "Comunità Energetiche", desc: "Costituzione e gestione di CER per condividere energia rinnovabile sul territorio." },
  { icon: Wrench, title: "Monitoraggio e Manutenzione", desc: "Controllo H24, manutenzione programmata e pulizia pannelli per massima resa." }
];
const ServicesSection = () => /* @__PURE__ */ jsx("section", { id: "servizi", className: "py-20 md:py-28 relative", style: { background: C.bg2 }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
    /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider mb-4", style: { color: C.accent }, children: "Le nostre soluzioni" }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold leading-tight mb-4", style: { color: C.text }, children: "Impianti fotovoltaici per aziende, professionisti e privati." }),
    /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg", style: { color: C.textDim }, children: "Dal sopralluogo all'attivazione, gestiamo ogni aspetto tecnico, burocratico e fiscale." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6", children: services.map((s, i) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-30px" },
      transition: { duration: 0.4, delay: Math.min(i * 0.05, 0.25) },
      className: "group relative rounded-2xl p-6 md:p-7 transition-all hover:-translate-y-1.5 overflow-hidden",
      style: {
        background: `linear-gradient(160deg, ${C.bg3} 0%, ${C.bg2} 100%)`,
        border: `1px solid ${C.border}`
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
            style: { background: `radial-gradient(circle, ${C.accent}33, transparent 70%)` }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-12 h-12 rounded-xl mb-5 flex items-center justify-center relative",
            style: {
              background: `linear-gradient(135deg, ${C.accent}26, ${C.cyan}1a)`,
              border: `1px solid ${C.accent}33`,
              boxShadow: `0 0 20px ${C.accent}22`
            },
            children: /* @__PURE__ */ jsx(s.icon, { className: "w-5 h-5", style: { color: C.accent } })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", style: { color: C.text }, children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", style: { color: C.textDim }, children: s.desc })
      ]
    },
    s.title
  )) })
] }) });
const processSteps = [
  { n: "01", title: "Analisi consumi", desc: "Studiamo le tue bollette degli ultimi 12 mesi per dimensionare l'impianto perfetto." },
  { n: "02", title: "Sopralluogo tecnico", desc: "Verifica strutturale del tetto, esposizione, ombreggiamenti e quadro elettrico." },
  { n: "03", title: "Progettazione", desc: "Layout pannelli, scelta inverter e accumulo, simulazione produzione e ROI." },
  { n: "04", title: "Installazione", desc: "Squadre certificate, materiali Tier 1 e cantiere chiavi in mano in 2-5 giorni." },
  { n: "05", title: "Attivazione e monitoraggio", desc: "Pratiche GSE, allaccio rete e dashboard di monitoraggio attiva H24." }
];
const ProcessSection = () => /* @__PURE__ */ jsx("section", { id: "processo", className: "py-20 md:py-28", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
    /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider mb-4", style: { color: C.accent }, children: "Come lavoriamo" }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold leading-tight mb-4", style: { color: C.text }, children: "Un processo chiaro, dall'analisi alla produzione di energia." })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "hidden lg:block absolute top-12 left-0 right-0 h-px",
        style: { background: `linear-gradient(90deg, transparent, ${C.accent}55, transparent)` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6", children: processSteps.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-30px" },
        transition: { duration: 0.4, delay: i * 0.08 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center relative",
              style: {
                background: `linear-gradient(135deg, ${C.bg2}, ${C.bg3})`,
                border: `1px solid ${C.accent}55`,
                boxShadow: `0 0 30px ${C.accent}22`
              },
              children: /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-2xl font-bold",
                  style: {
                    background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  },
                  children: s.n
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold mb-2 text-center", style: { color: C.text }, children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-center", style: { color: C.textDim }, children: s.desc })
        ]
      },
      s.n
    )) })
  ] })
] }) });
const compareRows = [
  { label: "Costo annuo energia", before: "€ 8.400", after: "€ 2.520", delta: "-70%" },
  { label: "Autonomia dalla rete", before: "0%", after: "82%", delta: "+82%" },
  { label: "Efficienza energetica", before: "Bassa", after: "Alta", delta: "↑" },
  { label: "Emissioni CO₂ / anno", before: "4.2 t", after: "0.6 t", delta: "-86%" },
  { label: "Monitoraggio consumi", before: "Mensile", after: "Tempo reale", delta: "Live" }
];
const CompareSection = () => /* @__PURE__ */ jsxs("section", { className: "py-20 md:py-28 relative overflow-hidden", style: { background: C.bg2 }, children: [
  /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute inset-0 opacity-[0.05] pointer-events-none",
      style: {
        backgroundImage: `linear-gradient(${C.accent} 1px, transparent 1px), linear-gradient(90deg, ${C.accent} 1px, transparent 1px)`,
        backgroundSize: "48px 48px"
      }
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "relative max-w-6xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider mb-4", style: { color: C.accent }, children: "Prima vs Dopo · Caso reale di riferimento" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold leading-tight mb-4", style: { color: C.text }, children: "L'impatto concreto, in numeri." }),
      /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg", style: { color: C.textDim }, children: "Esempio basato su una villa di 180 m² con consumo annuo di 6.500 kWh." })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-2xl overflow-hidden",
        style: {
          background: `linear-gradient(160deg, ${C.bg3}, ${C.bg2})`,
          border: `1px solid ${C.borderStrong}`,
          boxShadow: `0 30px 80px -30px ${C.accent}33`
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 px-6 py-4 text-xs font-semibold uppercase tracking-wider", style: { background: "rgba(0,0,0,0.25)", color: C.textDim }, children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-5", children: "Indicatore" }),
            /* @__PURE__ */ jsx("div", { className: "col-span-3 text-center", children: "Prima" }),
            /* @__PURE__ */ jsx("div", { className: "col-span-3 text-center", children: "Dopo Solaris" }),
            /* @__PURE__ */ jsx("div", { className: "col-span-1 text-right", children: "Δ" })
          ] }),
          compareRows.map((r, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "grid grid-cols-12 px-6 py-5 items-center",
              style: { borderTop: i ? `1px solid ${C.border}` : "none" },
              children: [
                /* @__PURE__ */ jsx("div", { className: "col-span-5 text-sm md:text-base font-medium", style: { color: C.text }, children: r.label }),
                /* @__PURE__ */ jsx("div", { className: "col-span-3 text-center text-sm md:text-base line-through", style: { color: "#ef4444" }, children: r.before }),
                /* @__PURE__ */ jsx("div", { className: "col-span-3 text-center text-sm md:text-base font-semibold", style: { color: C.accent }, children: r.after }),
                /* @__PURE__ */ jsx("div", { className: "col-span-1 text-right text-xs font-bold", style: { color: C.accentSoft }, children: r.delta })
              ]
            },
            r.label
          ))
        ]
      }
    )
  ] })
] });
const incentives = [
  { icon: TrendingDown, title: "Detrazione 50%", desc: "Recupero del 50% della spesa per impianti residenziali in 10 anni di IRPEF." },
  { icon: Building2, title: "Incentivi imprese", desc: "Credito d'imposta Transizione 5.0 e ammortamenti accelerati per investimenti energetici." },
  { icon: Users, title: "Comunità Energetiche", desc: "Tariffa incentivante GSE per l'energia condivisa fino a 20 anni." },
  { icon: Battery, title: "Sistemi di accumulo", desc: "Detrazioni dedicate per batterie installate contestualmente all'impianto." }
];
const IncentivesSection = () => /* @__PURE__ */ jsx("section", { id: "incentivi", className: "py-20 md:py-28", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
    /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider mb-4", style: { color: C.accent }, children: "Incentivi e detrazioni" }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold leading-tight mb-4", style: { color: C.text }, children: "Il quadro fiscale è oggi particolarmente favorevole." }),
    /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg", style: { color: C.textDim }, children: "Gestiamo l'intera parte burocratica: pratiche GSE, ENEA, comunicazioni al distributore." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: incentives.map((it) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "rounded-xl p-6",
      style: {
        background: `linear-gradient(160deg, ${C.bg2}, ${C.bg3})`,
        border: `1px solid ${C.border}`
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-11 h-11 rounded-lg mb-4 flex items-center justify-center",
            style: { background: `${C.accent}1a`, border: `1px solid ${C.accent}33` },
            children: /* @__PURE__ */ jsx(it.icon, { className: "w-5 h-5", style: { color: C.accent } })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold mb-2", style: { color: C.text }, children: it.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", style: { color: C.textDim }, children: it.desc })
      ]
    },
    it.title
  )) })
] }) });
const caseStudies = [
  {
    img: industrialImg,
    tag: "Azienda metalmeccanica",
    title: "Capannone produttivo · 320 kWp",
    kwp: "320 kWp",
    saving: "-72%",
    desc: "Impianto su tetto di un capannone industriale con accumulo da 200 kWh e sistema di gestione carichi.",
    bullets: ["Payback in 4,2 anni", "Riduzione 380 t CO₂/anno", "Monitoraggio per linea produttiva"]
  },
  {
    img: villaImg,
    tag: "Villa moderna",
    title: "Residenza privata · 9,8 kWp",
    kwp: "9,8 kWp",
    saving: "-82%",
    desc: "Impianto integrato architettonicamente con accumulo 15 kWh e colonnina di ricarica EV domestica.",
    bullets: ["Autonomia 85% annuale", "Pannelli full-black integrati", "App di controllo dedicata"]
  },
  {
    img: installImg,
    tag: "Magazzino logistico",
    title: "Centro logistico · 540 kWp",
    kwp: "540 kWp",
    saving: "-68%",
    desc: "Impianto su copertura industriale di 6.000 m² con interfacciamento al gestionale di magazzino.",
    bullets: ["Ammortamento Industria 5.0", "Comunità Energetica annessa", "ROI positivo dal mese 1"]
  }
];
const CaseStudiesSection = () => /* @__PURE__ */ jsx("section", { id: "case-studies", className: "py-20 md:py-28", style: { background: C.bg2 }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
    /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider mb-4", style: { color: C.accent }, children: "Case studies" }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold leading-tight mb-4", style: { color: C.text }, children: "Progetti che producono valore, ogni giorno." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-6", children: caseStudies.map((c, i) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-30px" },
      transition: { duration: 0.4, delay: i * 0.08 },
      className: "rounded-2xl overflow-hidden group",
      style: {
        background: C.bg3,
        border: `1px solid ${C.border}`
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: c.img,
              alt: `${c.tag} — ${c.title}: impianto fotovoltaico ${c.kwp} con risparmio ${c.saving}`,
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
              width: 1280,
              height: 896,
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
              style: { background: "rgba(7,11,20,0.8)", color: C.accent, border: `1px solid ${C.accent}55`, backdropFilter: "blur(8px)" },
              children: c.tag
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex justify-between items-end", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider mb-1", style: { color: C.textDim }, children: "Potenza" }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", style: { color: C.text }, children: c.kwp })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider mb-1", style: { color: C.textDim }, children: "Risparmio" }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", style: { color: C.accent }, children: c.saving })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3", style: { color: C.text }, children: c.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm mb-5 leading-relaxed", style: { color: C.textDim }, children: c.desc }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: c.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", style: { color: C.text }, children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mt-0.5 flex-shrink-0", style: { color: C.accent } }),
            b
          ] }, b)) })
        ] })
      ]
    },
    c.title
  )) })
] }) });
const faqs = [
  { q: "Quanto costa un impianto fotovoltaico?", a: "Il costo dipende dalla potenza e dalla presenza di accumulo. Per una casa media (3-6 kWp) si parte da circa 6.000-12.000 € chiavi in mano, prima delle detrazioni. Per impianti aziendali si valuta caso per caso." },
  { q: "Quanto si risparmia davvero in bolletta?", a: "Con un dimensionamento corretto e un sistema di accumulo, il risparmio in bolletta varia tipicamente tra il 60% e l'85%, fino a raggiungere quasi totale autonomia in alcuni mesi dell'anno." },
  { q: "Serve manutenzione?", a: "Gli impianti richiedono manutenzione minima: una verifica tecnica annuale e la pulizia periodica dei pannelli. Forniamo contratti di manutenzione programmata e monitoraggio remoto H24." },
  { q: "Conviene davvero alle aziende?", a: "Sì. Tra autoconsumo, detrazioni Transizione 5.0, ammortamenti accelerati e Comunità Energetiche, il payback per un impianto industriale si attesta oggi tra i 3 e i 5 anni." },
  { q: "Quanto dura un impianto fotovoltaico?", a: "I moduli Tier 1 garantiscono almeno l'80% della produzione iniziale dopo 25 anni. La vita utile reale è di 30+ anni. Gli inverter vengono solitamente sostituiti una volta dopo 10-15 anni." },
  { q: "Posso aggiungere un sistema di accumulo dopo?", a: "Sì, qualsiasi impianto può essere integrato con un accumulo successivamente. Lo progettiamo già predisposto in fase di installazione per renderlo economicamente conveniente." }
];
const FaqSection = () => {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", style: { background: C.bg }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-5 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider mb-4", style: { color: C.accent }, children: "Domande frequenti" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold leading-tight", style: { color: C.text }, children: "Le risposte che cerchi, prima di iniziare." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-xl overflow-hidden transition-all",
          style: {
            background: C.bg2,
            border: `1px solid ${isOpen ? C.accent + "55" : C.border}`
          },
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpen(isOpen ? null : i),
                className: "w-full flex items-center justify-between gap-4 p-5 text-left",
                "aria-expanded": isOpen,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base md:text-lg font-semibold", style: { color: C.text }, children: f.q }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      className: "w-5 h-5 flex-shrink-0 transition-transform",
                      style: { color: C.accent, transform: isOpen ? "rotate(180deg)" : "rotate(0)" }
                    }
                  )
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-sm md:text-base leading-relaxed", style: { color: C.textDim }, children: f.a })
          ]
        },
        f.q
      );
    }) })
  ] }) });
};
const ContactSection = () => {
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
    fd.append("subject", "[Demo Solaris Energy] Richiesta consulenza fotovoltaico");
    fd.append("from_name", "4 Web Lab — Demo Solaris");
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
  return /* @__PURE__ */ jsxs("section", { id: "contatti", className: "py-24 md:py-32 relative overflow-hidden", style: { background: C.bg2 }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-50 pointer-events-none",
        style: {
          background: `radial-gradient(ellipse at top, ${C.accent}22 0%, transparent 60%)`
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.04] pointer-events-none",
        style: {
          backgroundImage: `linear-gradient(${C.accent} 1px, transparent 1px), linear-gradient(90deg, ${C.accent} 1px, transparent 1px)`,
          backgroundSize: "64px 64px"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-5 md:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider mb-4", style: { color: C.accent }, children: "Inizia ora" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-6xl font-bold leading-[1.1] mb-6", style: { color: C.text }, children: [
          "L'energia che consumi può diventare un",
          " ",
          /* @__PURE__ */ jsx("span", { style: {
            background: `linear-gradient(135deg, ${C.accent}, ${C.accentSoft})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }, children: "investimento" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg", style: { color: C.textDim }, children: "Richiedi una consulenza gratuita: analizzeremo i tuoi consumi e ti proporremo il dimensionamento ottimale." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "rounded-2xl p-6 md:p-10",
            style: {
              background: `linear-gradient(160deg, ${C.bg3}, ${C.bg2})`,
              border: `1px solid ${C.borderStrong}`,
              boxShadow: `0 30px 80px -30px ${C.accent}40`
            },
            children: done ? /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center",
                  style: { background: `${C.accent}22`, border: `1px solid ${C.accent}55` },
                  children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8", style: { color: C.accent } })
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-2", style: { color: C.text }, children: "Richiesta ricevuta" }),
              /* @__PURE__ */ jsx("p", { style: { color: C.textDim }, children: "Ti ricontatteremo entro 24 ore lavorative all'indirizzo indicato." })
            ] }) : /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(Field, { name: "nome", label: "Nome e cognome", required: true }),
                /* @__PURE__ */ jsx(Field, { name: "azienda", label: "Azienda (opzionale)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(Field, { name: "email", type: "email", label: "Email", required: true }),
                /* @__PURE__ */ jsx(Field, { name: "telefono", type: "tel", label: "Telefono", required: true })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium mb-2 uppercase tracking-wider", style: { color: C.textDim }, children: "Tipo di intervento" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    name: "tipologia",
                    className: "w-full px-4 py-3 rounded-md text-sm focus:outline-none transition-colors",
                    style: { background: C.bg, border: `1px solid ${C.border}`, color: C.text },
                    defaultValue: "",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Seleziona…" }),
                      /* @__PURE__ */ jsx("option", { children: "Fotovoltaico residenziale" }),
                      /* @__PURE__ */ jsx("option", { children: "Fotovoltaico aziendale / industriale" }),
                      /* @__PURE__ */ jsx("option", { children: "Sistema di accumulo" }),
                      /* @__PURE__ */ jsx("option", { children: "Colonnine ricarica EV" }),
                      /* @__PURE__ */ jsx("option", { children: "Comunità Energetica" }),
                      /* @__PURE__ */ jsx("option", { children: "Sito web / consulenza digitale (4 Web Lab)" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium mb-2 uppercase tracking-wider", style: { color: C.textDim }, children: "Messaggio" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    name: "messaggio",
                    rows: 4,
                    placeholder: "Raccontaci il tuo progetto, i tuoi consumi indicativi, eventuali esigenze.",
                    className: "w-full px-4 py-3 rounded-md text-sm focus:outline-none transition-colors resize-none",
                    style: { background: C.bg, border: `1px solid ${C.border}`, color: C.text }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 text-xs", style: { color: C.textDim }, children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: consent,
                    onChange: (e) => setConsent(e.target.checked),
                    className: "mt-0.5",
                    required: true
                  }
                ),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Acconsento al trattamento dei dati personali per essere ricontattato in merito a questa richiesta (Art. 6.1.b GDPR). I dati saranno gestiti da",
                  " ",
                  /* @__PURE__ */ jsx(Link, { to: "/", className: "underline font-semibold", style: { color: C.accent }, children: "4 Web Lab" }),
                  " ",
                  "come titolare del trattamento. Vedi",
                  " ",
                  /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "underline", style: { color: C.text }, children: "privacy policy" }),
                  "."
                ] })
              ] }),
              error && /* @__PURE__ */ jsx("div", { className: "p-3 rounded-md text-sm", style: { background: "rgba(239,68,68,0.1)", border: `1px solid rgba(239,68,68,0.3)`, color: "#fca5a5" }, children: error }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  disabled: submitting || !consent,
                  className: "w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-base transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0",
                  style: {
                    background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
                    color: C.bg,
                    boxShadow: `0 14px 36px -12px ${C.accent}88`
                  },
                  children: [
                    submitting ? "Invio in corso…" : "Richiedi consulenza gratuita",
                    !submitting && /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
          /* @__PURE__ */ jsx(ContactCard, { icon: Phone, label: "Telefono", value: "+39 351 465 6042", href: "tel:+393514656042" }),
          /* @__PURE__ */ jsx(ContactCard, { icon: Mail, label: "Email", value: "info@4weblab.it", href: "mailto:info@4weblab.it" }),
          /* @__PURE__ */ jsx(ContactCard, { icon: MapPin, label: "Sede", value: "Via Belluno 44, Legnaro (PD)" }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "rounded-xl p-5 text-sm leading-relaxed",
              style: { background: C.bg, border: `1px solid ${C.border}`, color: C.textDim },
              children: [
                /* @__PURE__ */ jsx("strong", { style: { color: C.text }, children: "Tech demo · " }),
                "questa pagina è un concept dimostrativo realizzato da",
                " ",
                /* @__PURE__ */ jsx(Link, { to: "/", className: "underline", style: { color: C.accent }, children: "4 Web Lab" }),
                ". Le richieste inviate dal form arrivano direttamente a 4 Web Lab e riguardano un progetto di realizzazione sito web premium per il settore energetico."
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 md:mt-20 text-center", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: "/realizzazioni",
          className: "inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline",
          style: { color: C.accent },
          children: "Torna alla lista delle demo"
        }
      ) })
    ] })
  ] });
};
const Field = ({ name, label, type = "text", required = false }) => /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsxs("label", { className: "block text-xs font-medium mb-2 uppercase tracking-wider", style: { color: C.textDim }, children: [
    label,
    required && /* @__PURE__ */ jsx("span", { style: { color: C.accent }, children: " *" })
  ] }),
  /* @__PURE__ */ jsx(
    "input",
    {
      type,
      name,
      required,
      className: "w-full px-4 py-3 rounded-md text-sm focus:outline-none transition-colors",
      style: { background: C.bg, border: `1px solid ${C.border}`, color: C.text }
    }
  )
] });
const ContactCard = ({ icon: Icon, label, value, href }) => {
  const inner = /* @__PURE__ */ jsxs(
    "div",
    {
      className: "rounded-xl p-5 flex items-center gap-4 transition-all hover:-translate-y-0.5",
      style: {
        background: `linear-gradient(160deg, ${C.bg3}, ${C.bg2})`,
        border: `1px solid ${C.border}`
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0",
            style: { background: `${C.accent}1a`, border: `1px solid ${C.accent}33` },
            children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5", style: { color: C.accent } })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold mb-1", style: { color: C.textDim }, children: label }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold truncate", style: { color: C.text }, children: value })
        ] })
      ]
    }
  );
  return href ? /* @__PURE__ */ jsx("a", { href, children: inner }) : inner;
};
const TechDemoStrip = () => /* @__PURE__ */ jsx("section", { className: "py-12", style: { background: C.bg, borderTop: `1px solid ${C.border}` }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-5 md:px-8 text-center", children: [
  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-4", style: { background: `${C.cyan}1a`, color: C.cyan, border: `1px solid ${C.cyan}33` }, children: [
    /* @__PURE__ */ jsx(Cpu, { className: "w-3 h-3" }),
    " Tech demo · 4 Web Lab"
  ] }),
  /* @__PURE__ */ jsxs("p", { className: "text-sm md:text-base leading-relaxed mb-4", style: { color: C.textDim }, children: [
    "Solaris Energy è un brand fittizio creato da",
    " ",
    /* @__PURE__ */ jsx(Link, { to: "/", className: "underline font-semibold", style: { color: C.text }, children: "4 Web Lab" }),
    " ",
    "per illustrare un possibile concept di sito web premium per il settore fotovoltaico. Scopri le altre",
    " ",
    /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "underline", style: { color: C.accent }, children: "realizzazioni di 4 Web Lab" }),
    " ",
    "o la pagina dei",
    " ",
    /* @__PURE__ */ jsx(Link, { to: "/siti-web-aziendali", className: "underline", style: { color: C.accent }, children: "siti web aziendali" }),
    "."
  ] })
] }) });
const SolarisFooter = () => /* @__PURE__ */ jsx("footer", { style: { background: C.bg2, borderTop: `1px solid ${C.border}` }, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-5 md:px-8 py-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4 text-xs", style: { color: C.textDim }, children: [
  /* @__PURE__ */ jsx("div", { children: "© 2026 Solaris Energy (demo) — Brand fittizio." }),
  /* @__PURE__ */ jsxs("div", { children: [
    "Tech demo by",
    " ",
    /* @__PURE__ */ jsx(Link, { to: "/", className: "font-semibold", style: { color: C.text }, children: "4 Web Lab" }),
    " ",
    "·",
    " ",
    /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "underline", style: { color: C.textDim }, children: "Privacy" }),
    " ",
    "·",
    " ",
    /* @__PURE__ */ jsx(Link, { to: "/cookie", className: "underline", style: { color: C.textDim }, children: "Cookie" })
  ] })
] }) }) });
const StickyMobileCta = () => /* @__PURE__ */ jsx(
  "div",
  {
    className: "lg:hidden fixed bottom-0 inset-x-0 z-40 px-4 py-3",
    style: {
      background: "rgba(7,11,20,0.92)",
      backdropFilter: "blur(16px)",
      borderTop: `1px solid ${C.border}`
    },
    children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => scrollToId("contatti"),
        className: "w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold text-sm",
        style: {
          background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
          color: C.bg,
          boxShadow: `0 10px 30px -10px ${C.accent}88`
        },
        children: [
          "Richiedi consulenza gratuita",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ]
      }
    )
  }
);
const DemoFotovoltaico = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sito Web per Azienda Fotovoltaica · Demo | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Demo di sito web per aziende fotovoltaiche, realizzata da 4 Web Lab, agenzia web di Padova specializzata in siti aziendali. Da 899€ una tantum."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://4weblab.it/realizzazioni/demo-fotovoltaico" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "article:author", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "article:section", content: "Realizzazioni" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://4weblab.it/realizzazioni/demo-fotovoltaico" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Sito Web per Azienda Fotovoltaica · Demo | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Demo di sito web per aziende del settore fotovoltaico, realizzata da 4 Web Lab, agenzia web di Padova. Da 899€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og/demo-fotovoltaico.webp" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Sito Web per Azienda Fotovoltaica · Demo | 4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Demo di sito web per aziende fotovoltaiche · 4 Web Lab, agenzia web di Padova. Da 899€." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og/demo-fotovoltaico.webp" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#070B14" }),
      /* @__PURE__ */ jsx("link", { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": "https://4weblab.it/realizzazioni/demo-fotovoltaico#concept",
        name: "Concept di sito web premium per azienda fotovoltaica — by 4 Web Lab",
        headline: "Tech demo: web design premium per aziende del settore fotovoltaico realizzata da 4 Web Lab",
        url: "https://4weblab.it/realizzazioni/demo-fotovoltaico",
        inLanguage: "it-IT",
        author: { "@id": "https://4weblab.it/#business" },
        creator: { "@id": "https://4weblab.it/#business" },
        producer: { "@id": "https://4weblab.it/#business" },
        publisher: { "@id": "https://4weblab.it/#business" },
        copyrightHolder: { "@id": "https://4weblab.it/#business" },
        about: "Web design, UX e SEO per aziende del settore fotovoltaico ed energie rinnovabili realizzati da 4 Web Lab.",
        keywords: [
          "agenzia web design fotovoltaico",
          "realizzazione siti web energia rinnovabile",
          "4 Web Lab settore energia",
          "web design impianti fotovoltaici",
          "SEO aziende fotovoltaiche",
          "siti web Padova fotovoltaico"
        ],
        isAccessibleForFree: true,
        isFamilyFriendly: true
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "4 Web Lab — Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Realizzazioni 4 Web Lab", item: "https://4weblab.it/realizzazioni" },
          { "@type": "ListItem", position: 3, name: "Concept fotovoltaico premium · 4 Web Lab", item: "https://4weblab.it/realizzazioni/demo-fotovoltaico" }
        ]
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://4weblab.it/realizzazioni/demo-fotovoltaico#webpage",
        name: "4 Web Lab · Concept Web Design Premium per Aziende Fotovoltaiche",
        url: "https://4weblab.it/realizzazioni/demo-fotovoltaico",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        about: { "@id": "https://4weblab.it/realizzazioni/demo-fotovoltaico#concept" },
        mainEntity: { "@id": "https://4weblab.it/realizzazioni/demo-fotovoltaico#concept" },
        author: { "@id": "https://4weblab.it/#business" },
        creator: { "@id": "https://4weblab.it/#business" },
        publisher: { "@id": "https://4weblab.it/#business" },
        description: "Tech demo concettuale realizzata da 4 Web Lab — agenzia italiana specializzata in web design premium per aziende del settore fotovoltaico ed energia rinnovabile."
      }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          background: C.bg,
          color: C.text,
          fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, sans-serif"
        },
        children: [
          /* @__PURE__ */ jsx(SolarisHeader, {}),
          /* @__PURE__ */ jsxs("main", { children: [
            /* @__PURE__ */ jsx(Hero, {}),
            /* @__PURE__ */ jsx(KpiSection, {}),
            /* @__PURE__ */ jsx(ProblemSolution, {}),
            /* @__PURE__ */ jsx(ServicesSection, {}),
            /* @__PURE__ */ jsx(ProcessSection, {}),
            /* @__PURE__ */ jsx(CompareSection, {}),
            /* @__PURE__ */ jsx(IncentivesSection, {}),
            /* @__PURE__ */ jsx(CaseStudiesSection, {}),
            /* @__PURE__ */ jsx(FaqSection, {}),
            /* @__PURE__ */ jsx(ContactSection, {}),
            /* @__PURE__ */ jsx(TechDemoStrip, {})
          ] }),
          /* @__PURE__ */ jsx(SolarisFooter, {}),
          /* @__PURE__ */ jsx(StickyMobileCta, {})
        ]
      }
    )
  ] });
};
export {
  DemoFotovoltaico as default
};
