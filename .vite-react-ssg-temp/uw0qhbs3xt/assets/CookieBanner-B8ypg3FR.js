import { g as getConsent, d as CONSENT_OPEN_EVENT, j as jsxDEV, s as saveConsent } from "../main.mjs";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "react-helmet-async";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
const CookieBanner = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState("banner");
  const [analyticsOn, setAnalyticsOn] = useState(false);
  useEffect(() => {
    const current = getConsent();
    if (!current) {
      const timer = setTimeout(() => {
        setMounted(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);
  useEffect(() => {
    const openHandler = () => {
      const current = getConsent();
      setAnalyticsOn(!!(current == null ? void 0 : current.categories.analytics));
      setView("preferences");
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
    };
    window.addEventListener(CONSENT_OPEN_EVENT, openHandler);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openHandler);
  }, []);
  const close = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setMounted(false);
      setView("banner");
    }, 400);
  }, []);
  const handleAcceptAll = () => {
    saveConsent({ analytics: true });
    close();
  };
  const handleRejectAll = () => {
    saveConsent({ analytics: false });
    close();
  };
  const handleOpenPreferences = () => {
    const current = getConsent();
    setAnalyticsOn(!!(current == null ? void 0 : current.categories.analytics));
    setView("preferences");
  };
  const handleSavePreferences = () => {
    saveConsent({ analytics: analyticsOn });
    close();
  };
  const handleDismiss = () => {
    saveConsent({ analytics: false });
    close();
  };
  if (!mounted) return null;
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "fixed left-0 right-0 bottom-0 z-50 border-t border-border/30",
      style: {
        background: "var(--glass-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "var(--shadow-lg)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        willChange: "opacity, transform"
      },
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": "cookie-banner-title",
      "aria-describedby": "cookie-banner-description",
      children: /* @__PURE__ */ jsxDEV("div", { className: "container-section py-5 relative", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: handleDismiss,
            className: "absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-muted/50",
            "aria-label": "Chiudi banner (equivale a rifiuto dei cookie non necessari)",
            type: "button",
            children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/components/CookieBanner.tsx",
              lineNumber: 107,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/CookieBanner.tsx",
            lineNumber: 101,
            columnNumber: 13
          },
          void 0
        ),
        view === "banner" ? /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4 pr-10", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(
              "h2",
              {
                id: "cookie-banner-title",
                className: "text-base sm:text-lg font-semibold text-foreground mb-1",
                children: "Rispettiamo la tua privacy"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 113,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "p",
              {
                id: "cookie-banner-description",
                className: "text-sm text-muted-foreground leading-relaxed",
                children: [
                  "Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo tuo consenso, cookie statistici di terze parti (Google Analytics 4) per misurare in forma aggregata come viene utilizzato il sito. Puoi accettare tutti i cookie, rifiutarli o scegliere quali attivare. Il consenso è revocabile in qualsiasi momento.",
                  " ",
                  /* @__PURE__ */ jsxDEV(Link, { to: "/cookie", className: "text-accent hover:underline font-medium", children: "Leggi la Cookie Policy" }, void 0, false, {
                    fileName: "/dev-server/src/components/CookieBanner.tsx",
                    lineNumber: 128,
                    columnNumber: 21
                  }, void 0),
                  "."
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 119,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/CookieBanner.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleRejectAll,
                className: "py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors",
                type: "button",
                children: "Rifiuta tutti"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 135,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleOpenPreferences,
                className: "py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors",
                type: "button",
                children: "Personalizza"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 142,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleAcceptAll,
                className: "btn-primary py-2 px-5 text-sm rounded-xl",
                type: "button",
                children: "Accetta tutti"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 149,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/CookieBanner.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/CookieBanner.tsx",
          lineNumber: 111,
          columnNumber: 15
        }, void 0) : /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4 pr-10", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV(
              "h2",
              {
                id: "cookie-banner-title",
                className: "text-base sm:text-lg font-semibold text-foreground mb-1",
                children: "Preferenze cookie"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 161,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "p",
              {
                id: "cookie-banner-description",
                className: "text-sm text-muted-foreground leading-relaxed",
                children: "Scegli quali categorie di cookie vuoi abilitare. I cookie tecnici sono sempre attivi in quanto strettamente necessari."
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 167,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/CookieBanner.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-3 max-h-[45vh] overflow-y-auto pr-1", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-4 rounded-xl border border-border/50 p-3 sm:p-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-foreground", children: "Cookie tecnici" }, void 0, false, {
                  fileName: "/dev-server/src/components/CookieBanner.tsx",
                  lineNumber: 180,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Strettamente necessari al funzionamento del sito (memorizzazione del consenso, anti-spam del modulo di contatto). Non richiedono consenso ex art. 122 Codice Privacy." }, void 0, false, {
                  fileName: "/dev-server/src/components/CookieBanner.tsx",
                  lineNumber: 183,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 179,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "span",
                {
                  className: "shrink-0 inline-flex items-center h-6 px-2 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-muted text-muted-foreground",
                  "aria-label": "Sempre attivi",
                  children: "Sempre attivi"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/CookieBanner.tsx",
                  lineNumber: 189,
                  columnNumber: 21
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/CookieBanner.tsx",
              lineNumber: 178,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("label", { className: "flex items-start justify-between gap-4 rounded-xl border border-border/50 p-3 sm:p-4 cursor-pointer", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-foreground", children: "Cookie statistici (Google Analytics 4)" }, void 0, false, {
                  fileName: "/dev-server/src/components/CookieBanner.tsx",
                  lineNumber: 200,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Ci aiutano a capire in forma aggregata come i visitatori utilizzano il sito. IP anonimizzato, dati conservati 14 mesi, trasferimento verso USA con Clausole Contrattuali Standard e Data Privacy Framework." }, void 0, false, {
                  fileName: "/dev-server/src/components/CookieBanner.tsx",
                  lineNumber: 203,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 199,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "button",
                  role: "switch",
                  "aria-checked": analyticsOn,
                  "aria-label": "Attiva o disattiva cookie statistici",
                  onClick: () => setAnalyticsOn((v) => !v),
                  className: `shrink-0 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${analyticsOn ? "bg-accent" : "bg-muted-foreground/30"}`,
                  children: /* @__PURE__ */ jsxDEV(
                    "span",
                    {
                      className: `inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${analyticsOn ? "translate-x-5" : "translate-x-0.5"}`
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/components/CookieBanner.tsx",
                      lineNumber: 220,
                      columnNumber: 23
                    },
                    void 0
                  )
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/CookieBanner.tsx",
                  lineNumber: 210,
                  columnNumber: 21
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/CookieBanner.tsx",
              lineNumber: 198,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/CookieBanner.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleRejectAll,
                className: "py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors",
                type: "button",
                children: "Rifiuta tutti"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 230,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleAcceptAll,
                className: "py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors",
                type: "button",
                children: "Accetta tutti"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 237,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleSavePreferences,
                className: "btn-primary py-2 px-5 text-sm rounded-xl sm:ml-auto",
                type: "button",
                children: "Salva preferenze"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/CookieBanner.tsx",
                lineNumber: 244,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/CookieBanner.tsx",
            lineNumber: 229,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/CookieBanner.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/CookieBanner.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/CookieBanner.tsx",
      lineNumber: 83,
      columnNumber: 5
    },
    void 0
  );
};
export {
  CookieBanner as default
};
