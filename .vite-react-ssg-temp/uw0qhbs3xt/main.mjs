import { ViteReactSSG } from "vite-react-ssg";
import { useEffect, useRef, lazy, useState, Suspense, createContext, useLayoutEffect, useContext, useId, useCallback, useMemo, Fragment as Fragment$1, createElement, useInsertionEffect, forwardRef, Component } from "react";
import * as ReactJSXDevRuntime from "react/jsx-dev-runtime";
import { useLocation, Outlet, Link, Navigate } from "react-router-dom";
import { Lightbulb, ArrowLeft, X, Menu, ChevronDown, Phone, MessageCircle, Mail, Quote, Star, Users, Target, Zap, Search, Smartphone, Wrench, ArrowRight, Store, Briefcase, Building2, HelpCircle, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { getFeatureDefinitions, setFeatureDefinitions, isControllingVariants, isVariantLabel, isMotionValue, isForcedMotionValue, buildHTMLStyles, buildSVGAttrs, isSVGTag, resolveMotionValue, isVariantNode, isAnimationControls, resolveVariantFromProps, scrapeHTMLMotionValuesFromProps, scrapeSVGMotionValuesFromProps, optimizedAppearDataAttribute, SVGVisualElement, HTMLVisualElement, Feature, createAnimationState, isPrimaryPointer, addDomEvent, frame, cancelFrame, frameData, mixNumber, calcLength, createBox, eachAxis, measurePageBox, convertBoxToBoundingBox, convertBoundingBoxToBox, addValueToWillChange, animateMotionValue, setDragLock, percent, isElementTextInput, resize, globalProjectionState, microtask, HTMLProjectionNode, hover, press } from "motion-dom";
import { warning, invariant, warnOnce, pipe, secondsToMilliseconds, millisecondsToSeconds, progress, clamp, noop } from "motion-utils";
import { jsxs, jsx } from "react/jsx-runtime";
const _jsxDEV = ReactJSXDevRuntime.jsxDEV;
const Fragment = ReactJSXDevRuntime.Fragment;
const SOURCE_KEY = Symbol.for("__jsxSource__");
const cleanFileName = (fileName) => {
  if (!fileName) return "";
  if (fileName.includes("dev_server")) {
    fileName = fileName.split("dev_server")[1].slice(1);
  }
  if (fileName.includes("sandbox-scheduler/sandbox")) {
    const sandboxPart = fileName.split("sandbox-scheduler/")[1];
    fileName = sandboxPart.split("/").slice(1).join("/");
  }
  return fileName.replace(/^\/dev-server\//, "");
};
const sourceElementMap = /* @__PURE__ */ new Map();
window.sourceElementMap = sourceElementMap;
function getSourceKey(sourceInfo) {
  return `${cleanFileName(sourceInfo.fileName)}:${sourceInfo.lineNumber}:${sourceInfo.columnNumber}`;
}
function unregisterElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  const refs = sourceElementMap.get(key);
  if (refs) {
    for (const ref of refs) {
      if (ref.deref() === node) {
        refs.delete(ref);
        break;
      }
    }
    if (refs.size === 0) {
      sourceElementMap.delete(key);
    }
  }
}
function registerElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  if (!sourceElementMap.has(key)) {
    sourceElementMap.set(key, /* @__PURE__ */ new Set());
  }
  sourceElementMap.get(key).add(new WeakRef(node));
}
function getTypeName(type) {
  var _a, _b;
  if (typeof type === "string") return type;
  if (typeof type === "function") return type.displayName || type.name || "Unknown";
  if (typeof type === "object" && type !== null) {
    return type.displayName || ((_a = type.render) == null ? void 0 : _a.displayName) || ((_b = type.render) == null ? void 0 : _b.name) || "Unknown";
  }
  return "Unknown";
}
function jsxDEV(type, props, key, isStatic, source, self) {
  if ((source == null ? void 0 : source.fileName) && typeof type !== "string" && type !== Fragment) {
    const typeName = getTypeName(type);
    const jsxSourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: typeName
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          if (!node[SOURCE_KEY]) {
            node[SOURCE_KEY] = jsxSourceInfo;
            registerElement(node, jsxSourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  if ((source == null ? void 0 : source.fileName) && typeof type === "string") {
    const sourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: type
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          const existingSource = node[SOURCE_KEY];
          if (existingSource) {
            if (getSourceKey(existingSource) !== getSourceKey(sourceInfo)) {
              unregisterElement(node, existingSource);
              node[SOURCE_KEY] = sourceInfo;
              registerElement(node, sourceInfo);
            }
          } else {
            node[SOURCE_KEY] = sourceInfo;
            registerElement(node, sourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  return _jsxDEV(type, props, key, isStatic, source, self);
}
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};
const CONCEPT_DEMO_PATHS = [
  "/realizzazioni/demo-metalmeccanica",
  "/realizzazioni/demo-studio-dentistico-premium",
  "/realizzazioni/demo-fotovoltaico",
  "/realizzazioni/boutique-bb-luxury-rooms",
  "/realizzazioni/demo-flower-atelier",
  "/realizzazioni/demo-personal-trainer-vera-method"
];
const TopNotificationBar = () => {
  const { pathname } = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const h = el.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty(
          "--notification-bar-height",
          `${h}px`
        );
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      document.documentElement.style.removeProperty("--notification-bar-height");
    };
  }, []);
  if (CONCEPT_DEMO_PATHS.includes(pathname)) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref,
      role: "note",
      className: "fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground",
      children: /* @__PURE__ */ jsxDEV("div", { className: "container-section flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm text-center", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "font-semibold shrink-0", children: "Consiglio del giorno:" }, void 0, false, {
          fileName: "/dev-server/src/components/TopNotificationBar.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV(Lightbulb, { "aria-hidden": "true", className: "w-4 h-4 shrink-0 text-yellow-400" }, void 0, false, {
          fileName: "/dev-server/src/components/TopNotificationBar.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "leading-snug", children: "Scrivi Tag Title chiari e ingaggianti sotto i 60 caratteri. Un buon titolo aumenta il CTR (tasso di clic) dai risultati di ricerca di Google." }, void 0, false, {
          fileName: "/dev-server/src/components/TopNotificationBar.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/TopNotificationBar.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/TopNotificationBar.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    void 0
  );
};
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 1e3 * 60 * 60 * 24 * 30 * 6;
const CONSENT_STORAGE_KEY = "cookie-consent-v1";
const LEGACY_CONSENT_KEY = "cookie-consent-accepted";
const CONSENT_UPDATED_EVENT = "consent-updated";
const CONSENT_OPEN_EVENT = "consent-open-preferences";
function getConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (Date.now() - parsed.timestamp > CONSENT_MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}
function saveConsent(categories) {
  const record = {
    categories: { necessary: true, analytics: !!categories.analytics },
    timestamp: Date.now(),
    version: CONSENT_VERSION
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    localStorage.removeItem(LEGACY_CONSENT_KEY);
  } catch {
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: record }));
  }
  return record;
}
function hasAnalyticsConsent() {
  var _a;
  return !!((_a = getConsent()) == null ? void 0 : _a.categories.analytics);
}
function openPreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
  }
}
function gtagSafe(...args) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
}
function clearGaCookies() {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = /* @__PURE__ */ new Set();
  domains.add(host);
  domains.add(`.${host}`);
  for (let i = 1; i < parts.length - 1; i++) {
    const d = parts.slice(i).join(".");
    domains.add(d);
    domains.add(`.${d}`);
  }
  const gaCookieNames = document.cookie.split(";").map((c) => c.split("=")[0].trim()).filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid" || n === "_gat");
  for (const name of gaCookieNames) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}
function applyConsent(granted) {
  gtagSafe("consent", "update", {
    analytics_storage: granted ? "granted" : "denied"
  });
  if (granted) {
    gtagSafe("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
      page_location: window.location.href,
      page_title: document.title
    });
  } else {
    clearGaCookies();
  }
}
let initialized = false;
function initAnalyticsBridge() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  if (hasAnalyticsConsent()) {
    gtagSafe("consent", "update", { analytics_storage: "granted" });
  }
  window.addEventListener(CONSENT_UPDATED_EVENT, (e) => {
    const detail = e.detail;
    const granted = !!(detail == null ? void 0 : detail.categories.analytics);
    applyConsent(granted);
  });
}
function useGaPageview() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasAnalyticsConsent()) return;
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title
    });
  }, [location.pathname, location.search]);
}
const CookieBanner = lazy(() => import("./assets/CookieBanner-B8ypg3FR.js"));
const CookiePreferencesButton = lazy(() => import("./assets/CookiePreferencesButton-7Ck9GpSx.js"));
const Layout = () => {
  useGaPageview();
  const [deferredReady, setDeferredReady] = useState(false);
  useEffect(() => {
    initAnalyticsBridge();
    const trigger = () => setDeferredReady(true);
    const ric = window.requestIdleCallback;
    let timeoutId;
    if (ric) {
      ric(trigger, { timeout: 2e3 });
    } else {
      timeoutId = window.setTimeout(trigger, 1200);
    }
    const opts = { once: true, passive: true };
    window.addEventListener("scroll", trigger, opts);
    window.addEventListener("pointerdown", trigger, opts);
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", trigger);
      window.removeEventListener("pointerdown", trigger);
    };
  }, []);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(ScrollToTop, {}, void 0, false, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(TopNotificationBar, {}, void 0, false, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Suspense, { fallback: null, children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, void 0),
    deferredReady && /* @__PURE__ */ jsxDEV(Suspense, { fallback: null, children: [
      /* @__PURE__ */ jsxDEV(CookieBanner, {}, void 0, false, {
        fileName: "/dev-server/src/Layout.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(CookiePreferencesButton, {}, void 0, false, {
        fileName: "/dev-server/src/Layout.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/Layout.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, void 0);
};
const navItems = [
  { label: "Home", href: "/" },
  { label: "Siti web", href: "/#sitiweb" },
  { label: "Realizzazioni", href: "/realizzazioni" },
  { label: "SEO & AI", href: "/posizionamento-google-e-ai" },
  { label: "Google ADS", href: "/pubblicita-google-ads" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq-realizzazione-siti-web" },
  { label: "Contatti", href: "/contatti" }
];
const Header = ({ satelliteMode = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isBlogArticle = pathname.startsWith("/blog/") && pathname !== "/blog";
  const backLinkClass = `inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isScrolled ? "text-foreground hover:bg-muted/60" : "text-primary-foreground hover:bg-primary-foreground/10"}`;
  const mobileBackLinkClass = `inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isScrolled ? "text-foreground hover:bg-muted/60" : "text-primary-foreground hover:bg-primary-foreground/10"}`;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (href) => {
    setIsOpen(false);
    const sectionId = href.substring(1);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const styles = getComputedStyle(document.documentElement);
      const headerHeight = parseFloat(styles.getPropertyValue("--header-height")) * 16 || 72;
      const barRaw = styles.getPropertyValue("--notification-bar-height");
      const barHeight = barRaw ? parseFloat(barRaw) * 16 : 0;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - barHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxDEV(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "border-b border-border/30" : "bg-transparent"}`,
      style: {
        height: "var(--header-height)",
        top: "var(--notification-bar-height)",
        ...isScrolled ? {
          background: "var(--glass-bg)",
          backdropFilter: `blur(${isScrolled ? "20px" : "0px"})`,
          WebkitBackdropFilter: `blur(${isScrolled ? "20px" : "0px"})`,
          boxShadow: "var(--shadow-sm)"
        } : {}
      },
      children: /* @__PURE__ */ jsxDEV("nav", { className: "container-section h-full flex items-center justify-between", "aria-label": "Navigazione principale", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", "aria-label": "Vai alla home", className: "font-serif text-xl font-semibold text-foreground flex items-center gap-2.5 rounded-lg hover:opacity-90 transition-opacity", children: [
          /* @__PURE__ */ jsxDEV("img", { alt: "4 Web Lab logo", className: "w-9 h-9 rounded-lg object-contain", src: "/logo.webp", width: 36, height: 36, decoding: "async" }, void 0, false, {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: `transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground lg:text-foreground"}`, children: "4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Header.tsx",
          lineNumber: 91,
          columnNumber: 9
        }, void 0),
        satelliteMode ? /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:flex items-center gap-2", children: [
          isBlogArticle && /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: backLinkClass, children: [
            /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/components/Header.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, void 0),
            "Torna agli articoli"
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: backLinkClass, children: [
            /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/components/Header.tsx",
              lineNumber: 107,
              columnNumber: 15
            }, void 0),
            "Torna alla Home"
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Header.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, void 0) : /* @__PURE__ */ jsxDEV("ul", { className: "hidden lg:flex items-center gap-1", children: navItems.map((item) => {
          const isRoute = item.href.startsWith("/");
          const isActive = !isRoute && activeSection === item.href.substring(1);
          const baseClass = `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${isActive ? "text-accent-foreground" : isScrolled ? "text-foreground hover:bg-muted/60" : "text-primary-foreground hover:bg-primary-foreground/10"}`;
          const activeStyle = isActive ? { background: "var(--gradient-accent)", boxShadow: "0 2px 8px hsl(207 90% 54% / 0.25)" } : {};
          return /* @__PURE__ */ jsxDEV("li", { children: isRoute ? /* @__PURE__ */ jsxDEV(Link, { to: item.href, className: baseClass, style: activeStyle, children: item.label }, void 0, false, {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 129,
            columnNumber: 21
          }, void 0) : /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: item.href,
              onClick: (e) => {
                e.preventDefault();
                handleNavClick(item.href);
              },
              className: baseClass,
              style: activeStyle,
              "aria-current": isActive ? "page" : void 0,
              children: item.label
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/Header.tsx",
              lineNumber: 133,
              columnNumber: 21
            },
            void 0
          ) }, item.href, false, {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 127,
            columnNumber: 17
          }, void 0);
        }) }, void 0, false, {
          fileName: "/dev-server/src/components/Header.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, void 0),
        satelliteMode ? /* @__PURE__ */ jsxDEV("div", { className: "lg:hidden flex items-center gap-2", children: [
          isBlogArticle && /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: mobileBackLinkClass, children: [
            /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/components/Header.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, void 0),
            "Torna agli articoli"
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: mobileBackLinkClass, children: [
            /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/dev-server/src/components/Header.tsx",
              lineNumber: 162,
              columnNumber: 15
            }, void 0),
            "Torna alla Home"
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 161,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Header.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, void 0) : /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "lg:hidden p-2.5 rounded-xl hover:bg-muted/50 transition-colors",
            onClick: () => setIsOpen(!isOpen),
            "aria-expanded": isOpen,
            "aria-controls": "mobile-menu",
            "aria-label": isOpen ? "Chiudi menu" : "Apri menu",
            children: isOpen ? /* @__PURE__ */ jsxDEV(X, { className: `w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}` }, void 0, false, {
              fileName: "/dev-server/src/components/Header.tsx",
              lineNumber: 175,
              columnNumber: 15
            }, void 0) : /* @__PURE__ */ jsxDEV(Menu, { className: `w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}` }, void 0, false, {
              fileName: "/dev-server/src/components/Header.tsx",
              lineNumber: 177,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 167,
            columnNumber: 11
          },
          void 0
        ),
        isOpen && !satelliteMode && /* @__PURE__ */ jsxDEV(
          "div",
          {
            id: "mobile-menu",
            className: "absolute top-full left-0 right-0 lg:hidden border-b border-border/30 bg-background/95",
            style: {
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: "var(--shadow-lg)"
            },
            children: /* @__PURE__ */ jsxDEV("ul", { className: "container-section py-4 flex flex-col gap-1", children: navItems.map((item) => {
              const isRoute = item.href.startsWith("/");
              const isActive = !isRoute && activeSection === item.href.substring(1);
              const cls = `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted/60"}`;
              return /* @__PURE__ */ jsxDEV("li", { children: isRoute ? /* @__PURE__ */ jsxDEV(Link, { to: item.href, className: cls, onClick: () => setIsOpen(false), children: item.label }, void 0, false, {
                fileName: "/dev-server/src/components/Header.tsx",
                lineNumber: 203,
                columnNumber: 25
              }, void 0) : /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: item.href,
                  onClick: (e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  },
                  className: cls,
                  "aria-current": isActive ? "page" : void 0,
                  children: item.label
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/Header.tsx",
                  lineNumber: 207,
                  columnNumber: 25
                },
                void 0
              ) }, item.href, false, {
                fileName: "/dev-server/src/components/Header.tsx",
                lineNumber: 201,
                columnNumber: 21
              }, void 0);
            }) }, void 0, false, {
              fileName: "/dev-server/src/components/Header.tsx",
              lineNumber: 193,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/Header.tsx",
            lineNumber: 184,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/Header.tsx",
        lineNumber: 90,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/Header.tsx",
      lineNumber: 71,
      columnNumber: 5
    },
    void 0
  );
};
const HeroScrollTransition = () => {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxDEV("div", { className: "scroll-indicator flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-background/90 border border-accent/30 shadow-accent/30 shadow-lg backdrop-blur-md", children: /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-6 h-6 text-accent", strokeWidth: 2.5 }, void 0, false, {
        fileName: "/dev-server/src/components/HeroScrollTransition.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/HeroScrollTransition.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/HeroScrollTransition.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    void 0
  );
};
const heroBgMobile = "/hero/hero-bg-mobile.webp";
const heroBgTablet = "/hero/hero-bg-tablet.webp";
const heroBgDesktop = "/hero/hero-bg-desktop.webp";
const whatsappNumber$1 = "393514656042";
const whatsappMessage$1 = encodeURIComponent("Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.");
const Hero = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber$1}?text=${whatsappMessage$1}`;
  const handleScrollToContact = () => {
    const element = document.getElementById("contatti");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      className: "relative flex items-center justify-center overflow-hidden",
      style: {
        background: "var(--gradient-hero)",
        minHeight: "calc(100svh - var(--header-height) - var(--notification-bar-height, 0px))",
        paddingTop: "calc(var(--header-height) + var(--notification-bar-height, 0px))"
      },
      children: [
        /* @__PURE__ */ jsxDEV("picture", { children: [
          /* @__PURE__ */ jsxDEV("source", { media: "(max-width: 640px)", srcSet: heroBgMobile, type: "image/webp" }, void 0, false, {
            fileName: "/dev-server/src/components/Hero.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("source", { media: "(max-width: 1280px)", srcSet: heroBgTablet, type: "image/webp" }, void 0, false, {
            fileName: "/dev-server/src/components/Hero.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: heroBgDesktop,
              alt: "Mappa astratta del Veneto con rete di nodi luminosi e linee dati che convergono su Padova — 4 Web Lab, web agency SEO e siti web a Padova",
              width: 1920,
              height: 1070,
              fetchPriority: "high",
              decoding: "async",
              className: "absolute inset-0 w-full h-full object-cover object-left sm:object-center"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/Hero.tsx",
              lineNumber: 35,
              columnNumber: 9
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Hero.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(to right, hsl(210 73% 10% / 0.68) 0%, hsl(210 73% 10% / 0.42) 45%, hsl(210 73% 10% / 0.10) 75%, transparent 100%)"
            },
            "aria-hidden": "true"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/Hero.tsx",
            lineNumber: 47,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10 py-24", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl text-left", children: [
            /* @__PURE__ */ jsxDEV(
              "h1",
              {
                className: "heading-1 text-primary-foreground mb-8 text-balance",
                style: {
                  textShadow: "0 2px 8px rgba(0,0,0,0.55), 0 0 20px rgba(0,0,0,0.25)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em"
                },
                children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "block text-[0.6em] tracking-wide font-semibold opacity-90 sm:whitespace-nowrap uppercase", children: "SOLUZIONI SU MISURA E ACCESSIBILI" }, void 0, false, {
                    fileName: "/dev-server/src/components/Hero.tsx",
                    lineNumber: 65,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "block my-3 sm:my-4 sm:whitespace-nowrap", children: "WEB AGENCY PADOVA" }, void 0, false, {
                    fileName: "/dev-server/src/components/Hero.tsx",
                    lineNumber: 66,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "block text-[0.6em] tracking-wide font-semibold opacity-90 sm:whitespace-nowrap", children: "SITI WEB, SEO, GOOGLE ADS, BRANDING" }, void 0, false, {
                    fileName: "/dev-server/src/components/Hero.tsx",
                    lineNumber: 67,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/components/Hero.tsx",
                lineNumber: 58,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "p",
              {
                className: "body-large text-primary-foreground mb-14 text-balance",
                style: { textShadow: "0 1px 4px rgba(0,0,0,0.5)" },
                children: "4 Web Lab è la web agency a Padova specializzata nello sviluppo di siti web veloci e pronti per l'AI, posizionamento SEO e campagne Google Ads per portare clienti qualificati alla tua attività."
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/Hero.tsx",
                lineNumber: 70,
                columnNumber: 13
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row items-start gap-5", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: handleScrollToContact,
                  className: "hero-cta hero-cta-primary",
                  "aria-label": "Richiedi un preventivo gratuito",
                  children: "Richiedi preventivo gratuito"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/Hero.tsx",
                  lineNumber: 79,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: whatsappUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hero-cta hero-cta-whatsapp",
                  "aria-label": "Scrivici su WhatsApp",
                  children: [
                    /* @__PURE__ */ jsxDEV("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", role: "img", "aria-label": "WhatsApp", className: "w-6 h-6", children: [
                      /* @__PURE__ */ jsxDEV("circle", { cx: "256", cy: "256", r: "256", fill: "#25D366" }, void 0, false, {
                        fileName: "/dev-server/src/components/Hero.tsx",
                        lineNumber: 94,
                        columnNumber: 19
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("path", { fill: "#FFFFFF", d: "M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z" }, void 0, false, {
                        fileName: "/dev-server/src/components/Hero.tsx",
                        lineNumber: 95,
                        columnNumber: 19
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/components/Hero.tsx",
                      lineNumber: 93,
                      columnNumber: 17
                    }, void 0),
                    "Scrivi su WhatsApp"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/Hero.tsx",
                  lineNumber: 86,
                  columnNumber: 15
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/Hero.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/Hero.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/Hero.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV(HeroScrollTransition, {}, void 0, false, {
            fileName: "/dev-server/src/components/Hero.tsx",
            lineNumber: 104,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Hero.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/Hero.tsx",
      lineNumber: 23,
      columnNumber: 5
    },
    void 0
  );
};
const businessInfo = {
  name: "4 Web Lab",
  fullName: "4 Web Lab di Fullin Carlo",
  vatNumber: "P.IVA: 05765760284",
  address: "Via Belluno 44",
  city: "Legnaro (PD)",
  postalCode: "35020",
  country: "Italia",
  phone: "+39 351 465 6042",
  whatsapp: "393514656042",
  email: "info@4weblab.it"
};
const Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxDEV("footer", { className: "bg-primary text-primary-foreground py-16 md:pb-16 pb-[calc(var(--mobile-cta-height)+1rem)]", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-left sm:col-span-2 lg:col-span-1", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-2.5 mb-5 hover:opacity-80 transition-opacity duration-300", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              alt: "4 Web Lab logo",
              className: "w-10 h-10 rounded-xl object-contain",
              src: "/logo.webp",
              width: 40,
              height: 40,
              loading: "lazy",
              decoding: "async"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/Footer.tsx",
              lineNumber: 29,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "font-serif text-xl font-bold", children: businessInfo.name }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-primary-foreground/60 leading-relaxed text-sm", children: "Studio di soluzioni web per negozi, professionisti ed aziende con sede a Padova. Creiamo siti professionali, ottimizzati per i motori di ricerca e orientati alla conversione per attività in tutta Italia." }, void 0, false, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/Footer.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-accent text-sm font-semibold uppercase tracking-wider mb-4", children: "Soluzioni" }, void 0, false, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-per-negozi", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Siti per Negozi" }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 51,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-per-professionisti", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Siti per Professionisti" }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-aziendali", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Siti per Aziende" }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/Footer.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-accent text-sm font-semibold uppercase tracking-wider mb-4", children: "Esplora" }, void 0, false, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/posizionamento-google-e-ai", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "SEO & AI" }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Google ADS" }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Blog" }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/faq-realizzazione-siti-web", className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4", children: "Domande Frequenti (FAQ)" }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 90,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/Footer.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-accent text-sm font-semibold uppercase tracking-wider mb-4", children: "Contatti" }, void 0, false, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "tel:+393514656042",
              className: "inline-flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4",
              children: [
                /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4", "aria-hidden": "true" }, void 0, false, {
                  fileName: "/dev-server/src/components/Footer.tsx",
                  lineNumber: 107,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: "+39 351 465 6042" }, void 0, false, {
                  fileName: "/dev-server/src/components/Footer.tsx",
                  lineNumber: 108,
                  columnNumber: 19
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/Footer.tsx",
              lineNumber: 104,
              columnNumber: 17
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: `https://wa.me/${businessInfo.whatsapp}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4",
              children: [
                /* @__PURE__ */ jsxDEV(MessageCircle, { className: "w-4 h-4", "aria-hidden": "true" }, void 0, false, {
                  fileName: "/dev-server/src/components/Footer.tsx",
                  lineNumber: 117,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: "WhatsApp" }, void 0, false, {
                  fileName: "/dev-server/src/components/Footer.tsx",
                  lineNumber: 118,
                  columnNumber: 19
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/Footer.tsx",
              lineNumber: 112,
              columnNumber: 17
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "mailto:info@4weblab.it",
              className: "inline-flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4",
              children: [
                /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4", "aria-hidden": "true" }, void 0, false, {
                  fileName: "/dev-server/src/components/Footer.tsx",
                  lineNumber: 125,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: "info@4weblab.it" }, void 0, false, {
                  fileName: "/dev-server/src/components/Footer.tsx",
                  lineNumber: 126,
                  columnNumber: 19
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/Footer.tsx",
              lineNumber: 122,
              columnNumber: 17
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/Footer.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/Footer.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "border-t border-primary-foreground/12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center gap-x-4 gap-y-1 text-sm text-primary-foreground/45", children: [
        /* @__PURE__ */ jsxDEV("span", { children: [
          "© ",
          currentYear,
          " ",
          businessInfo.name,
          ". Tutti i diritti riservati."
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "hidden md:inline text-primary-foreground/25", children: "|" }, void 0, false, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { children: [
          businessInfo.fullName,
          " — ",
          businessInfo.vatNumber
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/Footer.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4", children: "Privacy Policy" }, void 0, false, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Link, { to: "/cookie", className: "text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4", children: "Cookie Policy" }, void 0, false, {
          fileName: "/dev-server/src/components/Footer.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            onClick: openPreferences,
            className: "text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4",
            children: "Gestisci cookie"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/Footer.tsx",
            lineNumber: 147,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/Footer.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/Footer.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/Footer.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, void 0);
};
const LayoutGroupContext = createContext({});
function useConstant(init) {
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}
const isBrowser = typeof window !== "undefined";
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
const PresenceContext = /* @__PURE__ */ createContext(null);
const MotionConfigContext = createContext({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});
function usePresence(subscribe = true) {
  const context = useContext(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context;
  const id2 = useId();
  useEffect(() => {
    if (subscribe) {
      return register(id2);
    }
  }, [subscribe]);
  const safeToRemove = useCallback(() => subscribe && onExitComplete && onExitComplete(id2), [id2, onExitComplete, subscribe]);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
const LazyContext = createContext({ strict: false });
const featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let isInitialized = false;
function initFeatureDefinitions() {
  if (isInitialized)
    return;
  const initialFeatureDefinitions = {};
  for (const key in featureProps) {
    initialFeatureDefinitions[key] = {
      isEnabled: (props) => featureProps[key].some((name) => !!props[name])
    };
  }
  setFeatureDefinitions(initialFeatureDefinitions);
  isInitialized = true;
}
function getInitializedFeatureDefinitions() {
  initFeatureDefinitions();
  return getFeatureDefinitions();
}
function loadFeatures(features) {
  const featureDefinitions = getInitializedFeatureDefinitions();
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
  setFeatureDefinitions(featureDefinitions);
}
const validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (typeof isValidProp !== "function")
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}
const MotionContext = /* @__PURE__ */ createContext({});
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate) ? animate : void 0
    };
  }
  return props.inherit !== false ? context : {};
}
function useCreateMotionContext(props) {
  const { initial, animate } = getCurrentTreeVariants(props, useContext(MotionContext));
  return useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}
const createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return useMemo(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}
const createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = useMemo(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, isSVGTag(Component2), props.transformTemplate, props.style);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}
const lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function isSVGComponent(Component2) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component2 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component2.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component2) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/u.test(Component2)
  ) {
    return true;
  }
  return false;
}
function useRender(Component2, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG) {
  const useVisualProps = isSVG ?? isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
  const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
  const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
  const elementProps = Component2 !== Fragment$1 ? { ...filteredProps, ...visualProps, ref } : {};
  const { children } = props;
  const renderedChildren = useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
  return createElement(Component2, {
    ...elementProps,
    children: renderedChildren
  });
}
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
    renderState: createRenderState()
  };
  return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate === void 0)
      animate = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0; i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}
const makeUseVisualState = (config) => (props, isStatic) => {
  const context = useContext(MotionContext);
  const presenceContext = useContext(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
const useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps: scrapeHTMLMotionValuesFromProps,
  createRenderState: createHtmlRenderState
});
const useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps: scrapeSVGMotionValuesFromProps,
  createRenderState: createSvgRenderState
});
const motionComponentSymbol = Symbol.for("motionComponentSymbol");
function useMotionRef(visualState, visualElement, externalRef) {
  const externalRefContainer = useRef(externalRef);
  useInsertionEffect(() => {
    externalRefContainer.current = externalRef;
  });
  const refCleanup = useRef(null);
  return useCallback((instance) => {
    var _a;
    if (instance) {
      (_a = visualState.onMount) == null ? void 0 : _a.call(visualState, instance);
    }
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    const ref = externalRefContainer.current;
    if (typeof ref === "function") {
      if (instance) {
        const cleanup = ref(instance);
        if (typeof cleanup === "function") {
          refCleanup.current = cleanup;
        }
      } else if (refCleanup.current) {
        refCleanup.current();
        refCleanup.current = null;
      } else {
        ref(instance);
      }
    } else if (ref) {
      ref.current = instance;
    }
  }, [visualElement]);
}
const SwitchLayoutGroupContext = createContext({});
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function useVisualElement(Component2, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
  var _a, _b;
  const { visualElement: parent } = useContext(MotionContext);
  const lazyContext = useContext(LazyContext);
  const presenceContext = useContext(PresenceContext);
  const motionConfig = useContext(MotionConfigContext);
  const reducedMotionConfig = motionConfig.reducedMotion;
  const skipAnimations = motionConfig.skipAnimations;
  const visualElementRef = useRef(null);
  const hasMountedOnce = useRef(false);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig,
      skipAnimations,
      isSVG
    });
    if (hasMountedOnce.current && visualElementRef.current) {
      visualElementRef.current.manuallyAnimateOnMount = true;
    }
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = useContext(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
  }
  const isMounted = useRef(false);
  useInsertionEffect(() => {
    if (visualElement && isMounted.current) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = useRef(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) == null ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) == null ? void 0 : _b.call(window, optimisedAppearId)));
  useIsomorphicLayoutEffect(() => {
    hasMountedOnce.current = true;
    if (!visualElement)
      return;
    isMounted.current = true;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    visualElement.scheduleRenderMicrotask();
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  useEffect(() => {
    if (!visualElement)
      return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        var _a2;
        (_a2 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a2.call(window, optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
    visualElement.enteringChildren = void 0;
  });
  return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
  const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot, layoutCrossfade } = props;
  visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
  visualElement.projection.setOptions({
    layoutId,
    layout: layout2,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof layout2 === "string" ? layout2 : "both",
    initialPromotionConfig,
    crossfade: layoutCrossfade,
    layoutScroll,
    layoutRoot
  });
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement)
    return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
function createMotionComponent(Component2, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  const isSVG = type ? type === "svg" : isSVGComponent(Component2);
  const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
  function MotionDOMComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...useContext(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      useStrictMode(configAndProps, preloadedFeatures);
      const layoutProjection = getProjectionFunctionality(configAndProps);
      MeasureLayout2 = layoutProjection.MeasureLayout;
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
    }
    return jsxs(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? jsx(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)] });
  }
  MotionDOMComponent.displayName = `motion.${typeof Component2 === "string" ? Component2 : `create(${Component2.displayName ?? Component2.name ?? ""})`}`;
  const ForwardRefMotionComponent = forwardRef(MotionDOMComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component2;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  const isStrict = useContext(LazyContext).strict;
  if (process.env.NODE_ENV !== "production" && preloadedFeatures && isStrict) {
    const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    configAndProps.ignoreStrict ? warning(false, strictMessage, "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
  }
}
function getProjectionFunctionality(props) {
  const featureDefinitions = getInitializedFeatureDefinitions();
  const { drag: drag2, layout: layout2 } = featureDefinitions;
  if (!drag2 && !layout2)
    return {};
  const combined = { ...drag2, ...layout2 };
  return {
    MeasureLayout: (drag2 == null ? void 0 : drag2.isEnabled(props)) || (layout2 == null ? void 0 : layout2.isEnabled(props)) ? combined.MeasureLayout : void 0,
    ProjectionNode: combined.ProjectionNode
  };
}
function createMotionProxy(preloadedFeatures, createVisualElement) {
  if (typeof Proxy === "undefined") {
    return createMotionComponent;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const factory = (Component2, options) => {
    return createMotionComponent(Component2, options, preloadedFeatures, createVisualElement);
  };
  const deprecatedFactoryFunction = (Component2, options) => {
    if (process.env.NODE_ENV !== "production") {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return factory(Component2, options);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return factory;
      if (!componentCache.has(key)) {
        componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
      }
      return componentCache.get(key);
    }
  });
}
const createDomVisualElement = (Component2, options) => {
  const isSVG = options.isSVG ?? isSVGComponent(Component2);
  return isSVG ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component2 !== Fragment$1
  });
};
class AnimationFeature extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate } = this.node.getProps();
    if (isAnimationControls(animate)) {
      this.unmountControls = animate.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate } = this.node.getProps();
    const { animate: prevAnimate } = this.node.prevProps || {};
    if (animate !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    var _a;
    this.node.animationState.reset();
    (_a = this.unmountControls) == null ? void 0 : _a.call(this);
  }
}
let id = 0;
class ExitAnimationFeature extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent, onExitComplete } = this.node.presenceContext;
    const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
    if (onExitComplete && !isPresent) {
      exitAnimation.then(() => {
        onExitComplete(this.id);
      });
    }
  }
  mount() {
    const { register, onExitComplete } = this.node.presenceContext || {};
    if (onExitComplete) {
      onExitComplete(this.id);
    }
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {
  }
}
const animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
const addPointerInfo = (handler) => {
  return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
const getContextWindow = ({ current }) => {
  return current ? current.ownerDocument.defaultView : null;
};
const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
const overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
class PanSession {
  constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = /* @__PURE__ */ new Map();
    this.removeScrollListeners = null;
    this.onElementScroll = (event2) => {
      this.handleScroll(event2.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point2, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin || !this.startEvent) {
        resumeAnimation && resumeAnimation();
      }
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.distanceThreshold = distanceThreshold;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point, timestamp }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
    if (element) {
      this.startScrollTracking(element);
    }
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(element) {
    let current = element.parentElement;
    while (current) {
      const style = getComputedStyle(current);
      if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) {
        this.scrollPositions.set(current, {
          x: current.scrollLeft,
          y: current.scrollTop
        });
      }
      current = current.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    });
    window.addEventListener("scroll", this.onElementScroll, {
      capture: true,
      passive: true
    });
    window.addEventListener("scroll", this.onWindowScroll, {
      passive: true
    });
    this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: true
      });
      window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(target) {
    const initial = this.scrollPositions.get(target);
    if (!initial)
      return;
    const isWindow = target === window;
    const current = isWindow ? { x: window.scrollX, y: window.scrollY } : {
      x: target.scrollLeft,
      y: target.scrollTop
    };
    const delta = { x: current.x - initial.x, y: current.y - initial.y };
    if (delta.x === 0 && delta.y === 0)
      return;
    if (isWindow) {
      if (this.lastMoveEventInfo) {
        this.lastMoveEventInfo.point.x += delta.x;
        this.lastMoveEventInfo.point.y += delta.y;
      }
    } else {
      if (this.history.length > 0) {
        this.history[0].x -= delta.x;
        this.history[0].y -= delta.y;
      }
    }
    this.scrollPositions.set(target, current);
    frame.update(this.updatePoint, true);
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    this.removeScrollListeners && this.removeScrollListeners();
    this.scrollPositions.clear();
    cancelFrame(this.updatePoint);
  }
}
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta) * 2) {
    timestampedPoint = history[1];
  }
  const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function applyConstraints(point, { min, max }, elastic) {
  if (min !== void 0 && point < min) {
    point = elastic ? mixNumber(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mixNumber(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
const defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
const elementDragControls = /* @__PURE__ */ new WeakMap();
class VisualElementDragControls {
  constructor(visualElement) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
    const { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false)
      return;
    const onSessionStart = (event) => {
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event).point);
      }
      this.stopAnimation();
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openDragLock)
          this.openDragLock();
        this.openDragLock = setDragLock(drag2);
        if (!this.openDragLock)
          return;
      }
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const { projection } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      addValueToWillChange(this.visualElement, "transform");
      const { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      if (onDrag) {
        frame.update(() => onDrag(event, info), false, true);
      }
    };
    const onSessionEnd = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.stop(event, info);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const resumeAnimation = () => {
      const { dragSnapToOrigin: snap } = this.getProps();
      if (snap || this.constraints) {
        this.startAnimation({ x: 0, y: 0 });
      }
    };
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      distanceThreshold,
      contextWindow: getContextWindow(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(event, panInfo) {
    const finalEvent = event || this.latestPointerEvent;
    const finalPanInfo = panInfo || this.latestPanInfo;
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging || !finalPanInfo || !finalEvent)
      return;
    const { velocity } = finalPanInfo;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
    }
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.endPanSession();
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end();
    this.panSession = void 0;
  }
  updateAxis(axis, _point, offset) {
    const { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    const { dragConstraints, dragElastic } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) == null ? void 0 : _a.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min, max } = projection.layout.layoutBox[axis];
        const current = axisValue.get() || 0;
        axisValue.set(point[axis] - mixNumber(min, max, 0.5) + current);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue && this.constraints !== false) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = this.constraints[axis];
      axisValue.set(mixNumber(min, max, boxProgress[axis]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      const target = event.target;
      const isClickingTextInputChild = target !== element && isElementTextInput(target);
      if (drag2 && dragListener && !isClickingTextInputChild) {
        this.start(event);
      }
    });
    let stopResizeObservers;
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints) && dragConstraints.current) {
        this.constraints = this.resolveRefConstraints();
        if (!stopResizeObservers) {
          stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
        }
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue = this.getAxisMotionValue(axis);
          if (!motionValue)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue.set(motionValue.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
      stopResizeObservers && stopResizeObservers();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
}
function skipFirstCall(callback) {
  let isFirst = true;
  return () => {
    if (isFirst) {
      isFirst = false;
      return;
    }
    callback();
  };
}
function startResizeObservers(element, constraintsElement, onResize) {
  const stopElement = resize(element, skipFirstCall(onResize));
  const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
  return () => {
    stopElement();
    stopContainer();
  };
}
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
class DragGesture extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  update() {
    const { dragControls } = this.node.getProps();
    const { dragControls: prevDragControls } = this.node.prevProps || {};
    if (dragControls !== prevDragControls) {
      this.removeGroupControls();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
    }
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
}
const asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info), false, true);
  }
};
class PanGesture extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: asyncHandler(onPan),
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
}
let hasTakenAnySnapshot = false;
class MeasureLayoutWithContext extends Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      if (hasTakenAnySnapshot) {
        projection.root.didUpdate();
      }
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
    const { projection } = visualElement;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (prevProps.layoutDependency !== layoutDependency) {
      projection.setOptions({
        ...projection.options,
        layoutDependency
      });
    }
    hasTakenAnySnapshot = true;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    hasTakenAnySnapshot = true;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
}
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = useContext(LayoutGroupContext);
  return jsx(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: useContext(SwitchLayoutGroupContext), isPresent, safeToRemove });
}
const drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
function handleHoverEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.animationState && props.whileHover) {
    node.animationState.setActive("whileHover", lifecycle === "Start");
  }
  const eventName = "onHover" + lifecycle;
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
class HoverGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = hover(current, (_element, startEvent) => {
      handleHoverEvent(this.node, startEvent, "Start");
      return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
    });
  }
  unmount() {
  }
}
class FocusGesture extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function handlePressEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.current instanceof HTMLButtonElement && node.current.disabled) {
    return;
  }
  if (node.animationState && props.whileTap) {
    node.animationState.setActive("whileTap", lifecycle === "Start");
  }
  const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
class PressGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    const { globalTapTarget, propagate } = this.node.props;
    this.unmount = press(current, (_element, startEvent) => {
      handlePressEvent(this.node, startEvent, "Start");
      return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
    }, {
      useGlobalTarget: globalTapTarget,
      stopPropagation: (propagate == null ? void 0 : propagate.tap) === false
    });
  }
  unmount() {
  }
}
const observerCallbacks = /* @__PURE__ */ new WeakMap();
const observers = /* @__PURE__ */ new WeakMap();
const fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}
const thresholdNames = {
  some: 0,
  all: 1
};
class InViewFeature extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
  }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}
const gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};
const layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
const featureBundle = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
};
const motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);
const getVariants = (direction, distance2 = 40) => {
  const initial = { opacity: 0 };
  if (direction === "up") initial.y = distance2;
  if (direction === "down") initial.y = -distance2;
  if (direction === "left") initial.x = distance2;
  if (direction === "right") initial.x = -distance2;
  return {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0
    }
  };
};
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6
}) => {
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-60px" },
      variants: getVariants(direction),
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
      children
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/AnimatedSection.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    void 0
  );
};
const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  delay = 0
}) => {
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-60px" },
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
      children
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/AnimatedSection.tsx",
      lineNumber: 68,
      columnNumber: 5
    },
    void 0
  );
};
const StaggerItem = ({
  children,
  className = "",
  direction = "up"
}) => {
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className,
      variants: getVariants(direction, 30),
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
      children
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/AnimatedSection.tsx",
      lineNumber: 92,
      columnNumber: 5
    },
    void 0
  );
};
const testimonials = [
  {
    name: "Mattia Loreggian",
    initial: "M",
    text: "4 Web Lab si è occupata di crearci il sito, un logo e un'identità di brand molto precisa che adesso usiamo ovunque."
  },
  {
    name: "Jessica Trovò",
    initial: "J",
    text: "Adesso ho un sito nuovo, a norma e al prezzo giusto, e sto già vedendo i primi risultati di clientela nuova."
  },
  {
    name: "Lisa Bogana",
    initial: "L",
    text: "Carlo è riuscito a guidarmi senza complicare le cose. Il sito che abbiamo realizzato insieme mi rappresenta davvero."
  }
];
const cards$1 = [{
  icon: Users,
  title: "Approccio Personale",
  description: "Lavoriamo fianco a fianco con te. Parli direttamente con chi sviluppa il tuo sito, senza intermediari o sistemi a ticket."
}, {
  icon: Target,
  title: "Orientati ai Risultati",
  description: "Non solo estetica: ogni linea di codice e di copy è progettata per intercettare i clienti e convertire i visitatori in contatti reali."
}, {
  icon: Lightbulb,
  title: "Design Sartoriale (Zero Template)",
  description: "Nessun modello pre-fatto o stampino. Il tuo brand riceve un design esclusivo, flessibile e cucito al millimetro sulle tue necessità."
}];
const guarantees = [
  {
    label: "Tempi certi e zero attese",
    text: "Analisi, sviluppo e pubblicazione in 2-4 settimane, con gestione diretta da remoto."
  },
  {
    label: "Tecnologia e Performance",
    text: "Siti web statici ultra-veloci ospitati su hosting Netlify. Massima sicurezza, zero canoni nascosti."
  },
  {
    label: "Casi reali, non solo demo",
    text: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      "Guarda il restyling completo di ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto", className: "text-accent hover:underline font-medium", children: "R.B. s.n.c." }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 48,
        columnNumber: 45
      }, void 0),
      " o naviga tutti i nostri ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "concept e realizzazioni" }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 48,
        columnNumber: 212
      }, void 0),
      "."
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/AboutSection.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, void 0)
  }
];
const AboutSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "chi-siamo", className: "section-padding bg-surface-alt", style: { scrollMarginTop: "var(--header-height)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: [
    /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "text-center mb-14 md:mb-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "section-divider" }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 mb-5", children: "Il web si è evoluto. Il tuo sito è pronto per le AI?" }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "aeo-answer body-large text-muted-foreground max-w-3xl mx-auto text-balance", children: [
        /* @__PURE__ */ jsxDEV("strong", { children: "4 Web Lab" }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, void 0),
        " è uno studio web con sede a ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent hover:underline font-medium", children: "Padova" }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 60,
          columnNumber: 68
        }, void 0),
        " che realizza siti professionali, ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/posizionamento-google-e-ai", className: "text-accent hover:underline font-medium", children: "SEO per Google e per le AI" }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 60,
          columnNumber: 209
        }, void 0),
        " (ChatGPT, Gemini, Perplexity) e ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "campagne Google Ads" }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 60,
          columnNumber: 366
        }, void 0),
        " per negozi, professionisti e PMI in tutta Italia."
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/AboutSection.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "md:pt-2", direction: "left", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "sr-only", children: "Le garanzie tecniche" }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-5", children: guarantees.map((item, index) => /* @__PURE__ */ jsxDEV("li", { className: "flex gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/components/AboutSection.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { children: [
            /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: [
              item.label,
              ":"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/AboutSection.tsx",
              lineNumber: 72,
              columnNumber: 21
            }, void 0),
            " ",
            item.text
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/AboutSection.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid gap-4", staggerDelay: 0.12, children: cards$1.map((card, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "card-glass flex items-start gap-5 group hover:-translate-y-1.5 transition-all duration-400", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13 flex-shrink-0", children: /* @__PURE__ */ jsxDEV(card.icon, { className: "w-6 h-6 text-white" }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 85,
          columnNumber: 21
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 84,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-sans font-bold text-lg mb-1.5", children: card.title }, void 0, false, {
            fileName: "/dev-server/src/components/AboutSection.tsx",
            lineNumber: 88,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm leading-relaxed", children: card.description }, void 0, false, {
            fileName: "/dev-server/src/components/AboutSection.tsx",
            lineNumber: 89,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 87,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, void 0) }, index, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 82,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/AboutSection.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "text-center mt-20 mb-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "section-divider" }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 mb-2", children: "La parola a chi ha scelto 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "body-large text-muted-foreground max-w-2xl mx-auto text-balance", children: "Storie di business reali. Risultati concreti, codice su misura e nessuna promessa campata in aria." }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/AboutSection.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid md:grid-cols-3 gap-6", staggerDelay: 0.12, children: testimonials.map((t, i) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "card-glass relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-400 h-full flex flex-col", children: [
      /* @__PURE__ */ jsxDEV(Quote, { className: "absolute top-4 right-4 w-8 h-8 text-accent/15" }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 110,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex gap-0.5 mb-4", children: [...Array(5)].map((_, s) => /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4 fill-amber-400 text-amber-400" }, s, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 113,
        columnNumber: 21
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm leading-relaxed italic mb-6 flex-1", children: [
        '"',
        t.text,
        '"'
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 116,
        columnNumber: 17
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mt-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0", children: t.initial }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 120,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-sm", children: t.name }, void 0, false, {
          fileName: "/dev-server/src/components/AboutSection.tsx",
          lineNumber: 123,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 119,
        columnNumber: 17
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/AboutSection.tsx",
      lineNumber: 109,
      columnNumber: 15
    }, void 0) }, i, false, {
      fileName: "/dev-server/src/components/AboutSection.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, void 0)) }, void 0, false, {
      fileName: "/dev-server/src/components/AboutSection.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "text-center mt-8", children: /* @__PURE__ */ jsxDEV(
      "a",
      {
        href: "https://maps.app.goo.gl/FQ8UkcNRm8YHWq8LA",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 font-medium transition-colors",
        children: "Leggi tutte le recensioni su Google →"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/AboutSection.tsx",
        lineNumber: 131,
        columnNumber: 11
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/components/AboutSection.tsx",
      lineNumber: 130,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/AboutSection.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/AboutSection.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, void 0);
};
const strengths = [
  {
    icon: Zap,
    title: "Performance elevate",
    description: "Realizziamo siti web ultra-veloci  e ottimizzati secondo i rigidi standard Core Web Vitals di Google. Un sito rapido non solo offre un'esperienza d'uso fluida e piacevole per i tuoi clienti, ma si posiziona meglio sui motori di ricerca, trasformando i semplici visitatori in contatti concreti per la tua attività."
  },
  {
    icon: Search,
    title: "SEO e visibilità AI",
    description: "Ottimizzazione per Google e per le AI (ChatGPT, Gemini, Perplexity): farti trovare, ovunque cerchino. I tuoi clienti stanno già cercando soluzioni su Gemini o ChatGPT. Progettiamo un'architettura semantica avanzata che posiziona il tuo brand come fonte ufficiale e attendibile, convertendo le ricerche assistite dall'AI in lead reali per il tuo business."
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Progettazione mobile-first: il sito funziona perfettamente dove i tuoi clienti lo guardano davvero."
  },
  {
    icon: Wrench,
    title: "Supporto dedicato",
    description: "Un referente diretto, niente ticket impersonali: rispondiamo a te, sul tuo progetto."
  }
];
const BentoCard = ({
  strength,
  index,
  className = "",
  featured = false
}) => {
  const number = String(index + 1).padStart(2, "0");
  return /* @__PURE__ */ jsxDEV(StaggerItem, { className, children: /* @__PURE__ */ jsxDEV("article", { className: "group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-card/60 hover:shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.18)] md:p-8", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "pointer-events-none absolute right-4 top-2 font-sans text-6xl font-black leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-accent/[0.08] md:text-7xl", children: number }, void 0, false, {
      fileName: "/dev-server/src/components/StrengthsSection.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex h-full flex-col", children: [
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: `mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/10 transition-transform duration-500 group-hover:scale-105 ${featured ? "h-16 w-16" : "h-12 w-12"}`,
          children: /* @__PURE__ */ jsxDEV(
            strength.icon,
            {
              className: `text-white ${featured ? "h-8 w-8" : "h-6 w-6"}`,
              "aria-hidden": "true"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/StrengthsSection.tsx",
              lineNumber: 53,
              columnNumber: 13
            },
            void 0
          )
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/StrengthsSection.tsx",
          lineNumber: 48,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "h3",
        {
          className: `font-sans font-bold mb-3 ${featured ? "text-2xl md:text-3xl" : "text-lg"}`,
          children: strength.title
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/StrengthsSection.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "p",
        {
          className: `leading-relaxed text-muted-foreground ${featured ? "text-base md:text-lg max-w-md" : "text-sm"}`,
          children: strength.description
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/StrengthsSection.tsx",
          lineNumber: 67,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/StrengthsSection.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition-opacity duration-500 group-hover:opacity-70" }, void 0, false, {
      fileName: "/dev-server/src/components/StrengthsSection.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/StrengthsSection.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/StrengthsSection.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, void 0);
};
const StrengthsSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "punti-di-forza", className: "section-padding bg-surface-alt-2", style: { scrollMarginTop: "var(--header-height)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: [
    /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "section-divider" }, void 0, false, {
        fileName: "/dev-server/src/components/StrengthsSection.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 mb-5", children: "Perché scegliere la nostra agenzia web" }, void 0, false, {
        fileName: "/dev-server/src/components/StrengthsSection.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "body-large text-muted-foreground max-w-2xl mx-auto text-balance", children: [
        "Supportiamo ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-per-professionisti", className: "text-accent hover:underline font-medium", children: "professionisti" }, void 0, false, {
          fileName: "/dev-server/src/components/StrengthsSection.tsx",
          lineNumber: 90,
          columnNumber: 25
        }, void 0),
        ", ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-per-negozi", className: "text-accent hover:underline font-medium", children: "negozi" }, void 0, false, {
          fileName: "/dev-server/src/components/StrengthsSection.tsx",
          lineNumber: 90,
          columnNumber: 140
        }, void 0),
        " e ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-aziendali", className: "text-accent hover:underline font-medium", children: "piccole e medie imprese" }, void 0, false, {
          fileName: "/dev-server/src/components/StrengthsSection.tsx",
          lineNumber: 90,
          columnNumber: 240
        }, void 0),
        " in tutta Italia nella realizzazione di siti web professionali orientati alla crescita online."
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/StrengthsSection.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/StrengthsSection.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      StaggerContainer,
      {
        className: "grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2",
        staggerDelay: 0.1,
        children: [
          /* @__PURE__ */ jsxDEV(
            BentoCard,
            {
              strength: strengths[0],
              index: 0,
              featured: true,
              className: "md:col-span-2 md:row-span-2"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/StrengthsSection.tsx",
              lineNumber: 98,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            BentoCard,
            {
              strength: strengths[1],
              index: 1,
              className: "md:col-span-2"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/StrengthsSection.tsx",
              lineNumber: 104,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            BentoCard,
            {
              strength: strengths[2],
              index: 2,
              className: "md:col-span-1"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/StrengthsSection.tsx",
              lineNumber: 109,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            BentoCard,
            {
              strength: strengths[3],
              index: 3,
              className: "md:col-span-1"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/StrengthsSection.tsx",
              lineNumber: 114,
              columnNumber: 11
            },
            void 0
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/StrengthsSection.tsx",
        lineNumber: 94,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/StrengthsSection.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/StrengthsSection.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, void 0);
};
const cardNegozio = "/assets/card-negozio-B7U3Pp4a.webp";
const cardProfessionista = "/assets/card-professionista-dBM77kXu.webp";
const cardAzienda = "/assets/card-azienda-CGbsSXVV.webp";
const cards = [
  {
    title: "Ho un negozio",
    text: "Sito chiaro, veloce e ottimizzato per Google Maps e ricerche locali. A partire da 199€.",
    cta: "Scopri i siti per negozi",
    link: "/siti-web-per-negozi",
    image: cardNegozio,
    imageAlt: "Vetrina di un negozio locale con prodotti esposti",
    icon: Store
  },
  {
    title: "Sono un professionista",
    text: "Dall'avvocato all'elettricista: il sito che costruisce credibilità e porta nuovi contatti. Da 549€.",
    cta: "Scopri i siti per professionisti",
    link: "/siti-web-per-professionisti",
    image: cardProfessionista,
    imageAlt: "Professionista al lavoro in uno studio mentre consulta il computer",
    icon: Briefcase
  },
  {
    title: "Ho un'azienda",
    text: "Siti aziendali per PMI: visibilità, autorevolezza e generazione di lead misurabili. Da 899€.",
    cta: "Scopri i siti aziendali",
    link: "/siti-web-aziendali",
    image: cardAzienda,
    imageAlt: "Team aziendale in riunione in un ambiente di lavoro moderno",
    icon: Building2
  }
];
const UserRoutingSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "py-28 md:py-36 bg-surface-alt relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("span", { id: "sitiweb", "aria-hidden": "true", className: "block relative -top-24" }, void 0, false, {
      fileName: "/dev-server/src/components/UserRoutingSection.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-[0.03]", style: { backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "32px 32px" } }, void 0, false, {
      fileName: "/dev-server/src/components/UserRoutingSection.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container-section relative", children: [
      /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "section-divider" }, void 0, false, {
          fileName: "/dev-server/src/components/UserRoutingSection.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 mb-5", children: "Servizi web e soluzioni sartoriali per il tuo business" }, void 0, false, {
          fileName: "/dev-server/src/components/UserRoutingSection.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large text-muted-foreground max-w-2xl mx-auto text-balance", children: "Ogni attività ha esigenze e regole diverse. Scegli il tuo profilo e scopri l'architettura web più adatta per scalare il tuo mercato." }, void 0, false, {
          fileName: "/dev-server/src/components/UserRoutingSection.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/UserRoutingSection.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8", staggerDelay: 0.15, delay: 0.2, children: cards.map((card) => {
        const Icon = card.icon;
        return /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: card.link,
            className: "group block relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[420px] md:min-h-[480px]",
            children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: card.image,
                  alt: card.imageAlt,
                  loading: "lazy",
                  width: 800,
                  height: 512,
                  className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                  lineNumber: 64,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/90" }, void 0, false, {
                fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                lineNumber: 74,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "relative h-full flex flex-col justify-end p-8 md:p-9", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-3 mt-auto", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-accent/80 transition-colors duration-500 shrink-0", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-5 h-5 text-white", "aria-hidden": "true" }, void 0, false, {
                    fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                    lineNumber: 80,
                    columnNumber: 25
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                    lineNumber: 79,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-serif font-bold text-white", children: card.title }, void 0, false, {
                    fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                    lineNumber: 82,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                  lineNumber: 78,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-white/85 text-base leading-relaxed mb-6 max-w-sm min-h-[8rem] md:min-h-[9rem]", children: card.text }, void 0, false, {
                  fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                  lineNumber: 86,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-white font-semibold text-base group-hover:gap-3 transition-all duration-300", children: [
                  card.cta,
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1", "aria-hidden": "true" }, void 0, false, {
                    fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                    lineNumber: 93,
                    columnNumber: 23
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                  lineNumber: 91,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/UserRoutingSection.tsx",
                lineNumber: 77,
                columnNumber: 19
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/UserRoutingSection.tsx",
            lineNumber: 59,
            columnNumber: 17
          },
          void 0
        ) }, card.link, false, {
          fileName: "/dev-server/src/components/UserRoutingSection.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, void 0);
      }) }, void 0, false, {
        fileName: "/dev-server/src/components/UserRoutingSection.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/UserRoutingSection.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/UserRoutingSection.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, void 0);
};
const previewFaqs = [
  {
    question: "Quanto costa realizzare un sito web?",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      "Il costo parte generalmente a partire da 199€ per una struttura one-page e aumenta in base a pagine, funzionalità e ottimizzazione SEO.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog/quanto-costa-un-sito-web-nel-2026", className: "text-sm text-accent hover:underline inline-block mt-2", children: 'Leggi "Quanto costa un sito web nel 2026?"' }, void 0, false, {
        fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, void 0)
  },
  {
    question: "In quanto tempo viene realizzato un sito web?",
    answer: "Un sito standard può essere realizzato in 2–4 settimane, a seconda della complessità e della rapidità nella consegna dei materiali."
  },
  {
    question: "I siti web servono ancora nel 2026 con l'arrivo dell'AI?",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      "Sì, oggi più che mai: gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano sui contenuti dei siti web per generare le risposte. Senza un sito autorevole, l'attività non viene citata.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/posizionamento-google-e-ai", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Scopri come funziona il posizionamento su Google e AI →" }, void 0, false, {
        fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, void 0)
  }
];
const HomeFaqPreview = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "faq", className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-11 h-11", children: /* @__PURE__ */ jsxDEV(HelpCircle, { className: "w-5 h-5 text-accent-foreground", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Domande frequenti sulla realizzazione siti web" }, void 0, false, {
        fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "body-base text-muted-foreground mb-10 max-w-xl", children: "Le domande più comuni su costi, tempi e scelte strategiche per la realizzazione di un sito web." }, void 0, false, {
      fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-5 mb-10", children: previewFaqs.map((faq, i) => /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "p-5 rounded-2xl border border-border bg-background hover:border-accent/20 hover:bg-accent/2 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-foreground mb-1.5 text-base", children: faq.question }, void 0, false, {
            fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-muted-foreground text-sm leading-relaxed", children: faq.answer }, void 0, false, {
            fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, void 0)
        ]
      },
      i,
      true,
      {
        fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
        lineNumber: 56,
        columnNumber: 15
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      Link,
      {
        to: "/faq-realizzazione-siti-web",
        className: "inline-flex items-center gap-2 font-semibold text-accent hover:text-accent/80 transition-colors duration-300 group",
        children: [
          "Leggi tutte le domande frequenti (FAQ)",
          /* @__PURE__ */ jsxDEV(
            ArrowRight,
            {
              className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
              "aria-hidden": "true"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
              lineNumber: 72,
              columnNumber: 13
            },
            void 0
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
        lineNumber: 67,
        columnNumber: 11
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/HomeFaqPreview.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, void 0);
};
function ContactFormWeb3Forms() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const ACCESS_KEY = "2afa7184-7e7d-4881-9472-d10ca4e3c6c3";
  const mountedAtRef = useRef(Date.now());
  const formRef = useRef(null);
  const RATE_LIMIT_MS = 6e4;
  const RL_KEY = "w3f_last_submit_ts";
  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);
  const clearFieldError = (field) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };
  const onSubmit = async (event) => {
    var _a;
    event.preventDefault();
    if (status.state === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const errors = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const businessType = String(formData.get("business_type") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!name) errors.name = "Campo obbligatorio";
    if (!email) errors.email = "Inserisci un indirizzo email valido";
    if (!businessType) errors.business_type = "Seleziona un'opzione";
    if (!message) errors.message = "Raccontaci qualcosa del tuo progetto";
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstKey = Object.keys(errors)[0];
      const firstInput = (_a = formRef.current) == null ? void 0 : _a.querySelector(`[data-field="${firstKey}"]`);
      if (firstInput) {
        firstInput.scrollIntoView({ behavior: "smooth", block: "center" });
        firstInput.focus();
      }
      return;
    }
    const elapsed = Date.now() - mountedAtRef.current;
    if (elapsed < 3e3) {
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
    if (formData.get("website") || formData.get("fax")) {
      setStatus({ state: "error", message: "Errore invio." });
      return;
    }
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "Nuova richiesta di analisi gratuita dal sito");
    setStatus({ state: "sending", message: "Invio in corso..." });
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      let data = null;
      try {
        data = await response.json();
      } catch {
      }
      if (!response.ok || !(data == null ? void 0 : data.success)) {
        setStatus({ state: "error", message: "Invio non riuscito. Riprova tra poco." });
        return;
      }
      try {
        localStorage.setItem(RL_KEY, String(Date.now()));
      } catch {
      }
      setStatus({ state: "success", message: "Messaggio inviato. Ti ricontattiamo a breve." });
      setFieldErrors({});
      form.reset();
      mountedAtRef.current = Date.now();
    } catch {
      setStatus({ state: "error", message: "Problema di rete. Controlla la connessione e riprova." });
    }
  };
  const baseInput = "w-full rounded-xl border bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 transition-all duration-200";
  const normalBorder = "border-primary-foreground/15 focus:ring-accent focus:border-accent/40";
  const errorBorder = "border-red-500 ring-2 ring-red-500/30 focus:ring-red-500 focus:border-red-500";
  const inputClasses = (field) => `${baseInput} ${field && fieldErrors[field] ? errorBorder : normalBorder}`;
  const labelClasses = "text-sm font-medium text-primary-foreground/80";
  return /* @__PURE__ */ jsxDEV("form", { ref: formRef, onSubmit, noValidate: true, className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV("label", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsxDEV("span", { className: labelClasses, children: "Nome *" }, void 0, false, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          "data-field": "name",
          name: "name",
          type: "text",
          required: true,
          autoComplete: "name",
          className: inputClasses("name"),
          onChange: () => clearFieldError("name")
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
          lineNumber: 133,
          columnNumber: 9
        },
        this
      ),
      fieldErrors.name && /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-red-400 mt-0.5", children: fieldErrors.name }, void 0, false, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("label", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsxDEV("span", { className: labelClasses, children: "Email *" }, void 0, false, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          "data-field": "email",
          name: "email",
          type: "email",
          required: true,
          autoComplete: "email",
          className: inputClasses("email"),
          onChange: () => clearFieldError("email")
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
          lineNumber: 150,
          columnNumber: 9
        },
        this
      ),
      fieldErrors.email && /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-red-400 mt-0.5", children: fieldErrors.email }, void 0, false, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("label", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsxDEV("span", { className: labelClasses, children: "Tipo di attività *" }, void 0, false, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "select",
        {
          "data-field": "business_type",
          name: "business_type",
          required: true,
          defaultValue: "",
          className: `${inputClasses("business_type")} appearance-none pr-10 bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`,
          style: {
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none' stroke='%23ffffff' stroke-opacity='0.6' stroke-width='1.5'><path d='M1 1.5l5 5 5-5'/></svg>")`
          },
          onChange: () => clearFieldError("business_type"),
          children: [
            /* @__PURE__ */ jsxDEV("option", { value: "", disabled: true, className: "bg-neutral-900", children: "Seleziona un'opzione" }, void 0, false, {
              fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
              lineNumber: 179,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "Negozi", className: "bg-neutral-900", children: "Negozi" }, void 0, false, {
              fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
              lineNumber: 180,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "Professionisti", className: "bg-neutral-900", children: "Professionisti" }, void 0, false, {
              fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
              lineNumber: 181,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "Aziende", className: "bg-neutral-900", children: "Aziende" }, void 0, false, {
              fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
              lineNumber: 182,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
          lineNumber: 167,
          columnNumber: 9
        },
        this
      ),
      fieldErrors.business_type && /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-red-400 mt-0.5", children: fieldErrors.business_type }, void 0, false, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 185,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("label", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsxDEV("span", { className: labelClasses, children: "Parlaci del tuo progetto *" }, void 0, false, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          "data-field": "message",
          name: "message",
          rows: 5,
          required: true,
          className: `${inputClasses("message")} resize-none`,
          onChange: () => clearFieldError("message")
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
          lineNumber: 192,
          columnNumber: 9
        },
        this
      ),
      fieldErrors.message && /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-red-400 mt-0.5", children: fieldErrors.message }, void 0, false, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 201,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "sr-only", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxDEV("label", { children: [
        "Website",
        /* @__PURE__ */ jsxDEV("input", { name: "website", type: "text", tabIndex: -1, autoComplete: "off" }, void 0, false, {
          fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
          lineNumber: 209,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("label", { children: [
        "Fax",
        /* @__PURE__ */ jsxDEV("input", { name: "fax", type: "text", tabIndex: -1, autoComplete: "off" }, void 0, false, {
          fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
          lineNumber: 213,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "submit",
        disabled: status.state === "sending",
        className: "btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100",
        children: status.state === "sending" ? "Invio..." : /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Richiedi analisi gratuita",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
            lineNumber: 228,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 218,
        columnNumber: 7
      },
      this
    ),
    status.message && /* @__PURE__ */ jsxDEV(
      "p",
      {
        role: "status",
        "aria-live": "polite",
        className: `mt-2 text-sm font-medium text-center ${status.state === "success" ? "text-green-400" : status.state === "error" ? "text-red-400" : "text-primary-foreground/60"}`,
        children: status.message
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 235,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-bold text-primary-foreground/50 mt-4 leading-relaxed", children: [
      "I dati inseriti verranno trattati e usati unicamente per rispondere alla tua richiesta di contatto (base giuridica: esecuzione di misure precontrattuali – art. 6.1.b GDPR). Titolare del trattamento: 4 Web Lab di Fullin Carlo – P.IVA 05765760284. Maggiori informazioni nella nostra",
      " ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/privacy", className: "underline hover:text-primary-foreground/70 transition-colors", children: "Privacy Policy" }, void 0, false, {
        fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
        lineNumber: 252,
        columnNumber: 9
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
      lineNumber: 250,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/ContactFormWeb3Forms.tsx",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}
const whatsappNumber = "393514656042";
const whatsappMessage = encodeURIComponent("Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.");
const ContactSection = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return /* @__PURE__ */ jsxDEV("section", { id: "contatti", className: "section-padding relative overflow-hidden", style: { background: "var(--gradient-hero)", scrollMarginTop: "var(--header-height)" }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsxDEV("filter", { id: "contact-noise", children: /* @__PURE__ */ jsxDEV("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }, void 0, false, {
        fileName: "/dev-server/src/components/ContactSection.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/ContactSection.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("rect", { width: "100%", height: "100%", filter: "url(#contact-noise)" }, void 0, false, {
        fileName: "/dev-server/src/components/ContactSection.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ContactSection.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/ContactSection.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/8 blur-[120px]", "aria-hidden": "true" }, void 0, false, {
      fileName: "/dev-server/src/components/ContactSection.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground/3 blur-[100px]", "aria-hidden": "true" }, void 0, false, {
      fileName: "/dev-server/src/components/ContactSection.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "grid gap-12 lg:grid-cols-2 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "lg:pr-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-1 rounded-full mb-8 bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/components/ContactSection.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-primary-foreground mb-5", children: "Inizia il tuo progetto web con noi" }, void 0, false, {
          fileName: "/dev-server/src/components/ContactSection.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/70 mb-10 text-balance", children: "Parla direttamente con lo sviluppatore. Analizziamo la tua presenza online per trovare i blocchi che rallentano la tua crescita su Google e sulle AI." }, void 0, false, {
          fileName: "/dev-server/src/components/ContactSection.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/[0.03] px-5 py-2.5 text-sm font-medium text-primary-foreground hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-all duration-300",
                "aria-label": "Avvia una chat rapida su WhatsApp",
                children: [
                  /* @__PURE__ */ jsxDEV(MessageCircle, { className: "w-4 h-4 text-accent", "aria-hidden": "true" }, void 0, false, {
                    fileName: "/dev-server/src/components/ContactSection.tsx",
                    lineNumber: 46,
                    columnNumber: 19
                  }, void 0),
                  "Avvia una chat rapida"
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/components/ContactSection.tsx",
                lineNumber: 39,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("span", { className: "block text-xs text-primary-foreground/40 mt-1.5 ml-1", children: [
              /* @__PURE__ */ jsxDEV("strong", { children: "WhatsApp" }, void 0, false, {
                fileName: "/dev-server/src/components/ContactSection.tsx",
                lineNumber: 50,
                columnNumber: 19
              }, void 0),
              " · richiede WhatsApp Web su PC"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/ContactSection.tsx",
              lineNumber: 49,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/ContactSection.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5", "aria-hidden": "true" }, void 0, false, {
              fileName: "/dev-server/src/components/ContactSection.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs uppercase tracking-wider text-primary-foreground/40 mb-0.5", children: "Email" }, void 0, false, {
                fileName: "/dev-server/src/components/ContactSection.tsx",
                lineNumber: 57,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "mailto:info@4weblab.it",
                  className: "text-primary-foreground hover:text-accent transition-colors",
                  children: "info@4weblab.it"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/ContactSection.tsx",
                  lineNumber: 58,
                  columnNumber: 19
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/ContactSection.tsx",
              lineNumber: 56,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/ContactSection.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5", "aria-hidden": "true" }, void 0, false, {
              fileName: "/dev-server/src/components/ContactSection.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs uppercase tracking-wider text-primary-foreground/40 mb-0.5", children: "Località" }, void 0, false, {
                fileName: "/dev-server/src/components/ContactSection.tsx",
                lineNumber: 70,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-primary-foreground", children: "Padova – Italia" }, void 0, false, {
                fileName: "/dev-server/src/components/ContactSection.tsx",
                lineNumber: 71,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-primary-foreground/60", children: "Disponibili da remoto in tutta Italia" }, void 0, false, {
                fileName: "/dev-server/src/components/ContactSection.tsx",
                lineNumber: 72,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/ContactSection.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/ContactSection.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ContactSection.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/ContactSection.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.15, children: /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.04] backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]", children: /* @__PURE__ */ jsxDEV(ContactFormWeb3Forms, {}, void 0, false, {
        fileName: "/dev-server/src/components/ContactSection.tsx",
        lineNumber: 81,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/ContactSection.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/ContactSection.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/ContactSection.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/ContactSection.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/ContactSection.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, void 0);
};
const Index = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Web Agency Padova | Siti Web e SEO | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Web Agency a Padova specializzata in siti web professionali, SEO per Google/AI e Google Ads. Contattaci per un preventivo gratuito in 24 ore!"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 16,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://4weblab.it/" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://4weblab.it/" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Web Agency Padova | Siti Web e SEO | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "Web Agency a Padova specializzata in siti web professionali, SEO per Google/AI e Google Ads. Contattaci per un preventivo gratuito in 24 ore!"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: "https://4weblab.it/" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Web Agency Padova | Siti Web e SEO | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:description",
          content: "Web Agency a Padova specializzata in siti web professionali, SEO per Google/AI e Google Ads. Contattaci per un preventivo gratuito in 24 ore!"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Index.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "additionalType": "https://schema.org/InternetMarketingService",
        "@id": "https://4weblab.it/#business",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "3"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Mattia Loreggian" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "4 Web Lab si è occupata di crearci il sito, un logo e un'identità di brand molto precisa che adesso usiamo ovunque."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Jessica Trovò" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "Adesso ho un sito nuovo, a norma e al prezzo giusto, e sto già vedendo i primi risultati di clientela nuova."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Lisa Bogana" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "Carlo è riuscito a guidarmi senza complicare le cose. Il sito che abbiamo realizzato insieme mi rappresenta davvero."
          }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quanto costa realizzare un sito web?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Il costo parte generalmente a partire da 199€ per una struttura one-page e aumenta in base a pagine, funzionalità e ottimizzazione SEO."
            }
          },
          {
            "@type": "Question",
            "name": "In quanto tempo viene realizzato un sito web?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un sito standard può essere realizzato in 2–4 settimane, a seconda della complessità e della rapidità nella consegna dei materiali."
            }
          },
          {
            "@type": "Question",
            "name": "I siti web servono ancora nel 2026 con l'arrivo dell'AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sì, oggi più che mai: gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano sui contenuti dei siti web per generare le risposte. Senza un sito autorevole, l'attività non viene citata."
            }
          }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://4weblab.it/#webpage",
        url: "https://4weblab.it/",
        name: "Web Agency Padova | Realizzazione Siti Web, SEO e Google Ads | 4 Web Lab",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        about: { "@id": "https://4weblab.it/#business" },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".aeo-answer"]
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" }
          ]
        }
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Realizzazione siti web, SEO e Google Ads",
        provider: { "@id": "https://4weblab.it/#business" },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Veneto" },
          { "@type": "City", name: "Padova" },
          { "@type": "City", name: "Venezia" }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Pacchetti siti web 4 Web Lab",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Sito web per negozi",
              url: "https://4weblab.it/siti-web-per-negozi",
              priceCurrency: "EUR",
              price: "199",
              priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "199", valueAddedTaxIncluded: false }
            },
            {
              "@type": "Offer",
              name: "Sito web per professionisti",
              url: "https://4weblab.it/siti-web-per-professionisti",
              priceCurrency: "EUR",
              price: "549",
              priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "549", valueAddedTaxIncluded: false }
            },
            {
              "@type": "Offer",
              name: "Sito web aziendale",
              url: "https://4weblab.it/siti-web-aziendali",
              priceCurrency: "EUR",
              price: "899",
              priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "899", valueAddedTaxIncluded: false }
            }
          ]
        }
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Come realizziamo il tuo sito web",
        description: "Il processo in 4 step di 4 Web Lab per realizzare un sito professionale ottimizzato per Google e per le AI.",
        totalTime: "P28D",
        step: [
          { "@type": "HowToStep", position: 1, name: "Brief gratuito", text: "Analisi delle tue esigenze, del settore e degli obiettivi di business. Sopralluogo telefonico o videocall." },
          { "@type": "HowToStep", position: 2, name: "Progettazione", text: "Architettura informativa, wireframe, scelte di design e copy strategy orientata alla conversione." },
          { "@type": "HowToStep", position: 3, name: "Sviluppo e SEO", text: "Sviluppo del sito, ottimizzazione Core Web Vitals, SEO on-page, dati strutturati per Google e AI." },
          { "@type": "HowToStep", position: 4, name: "Pubblicazione e supporto", text: "Go-live, indicizzazione, formazione e supporto continuo con un referente dedicato." }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 205,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(AboutSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 206,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(StrengthsSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(UserRoutingSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 208,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(HomeFaqPreview, {}, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ContactSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, void 0);
};
const page = (loader) => async () => {
  const mod = await loader();
  return { Component: mod.default };
};
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Index, entry: "src/pages/Index.tsx" },
      {
        path: "siti-web-per-professionisti",
        lazy: page(() => import("./assets/SitiWebProfessionisti-Dsp8Xd0b.js")),
        entry: "src/pages/SitiWebProfessionisti.tsx"
      },
      {
        path: "realizzazione-siti-web-per-professionisti",
        element: /* @__PURE__ */ jsxDEV(Navigate, { to: "/siti-web-per-professionisti", replace: true }, void 0, false, {
          fileName: "/dev-server/src/routes.tsx",
          lineNumber: 27,
          columnNumber: 18
        }, void 0)
      },
      {
        path: "siti-web-aziendali",
        lazy: page(() => import("./assets/SitiWebAziendali-CV-tntsg.js")),
        entry: "src/pages/SitiWebAziendali.tsx"
      },
      {
        path: "realizzazione-siti-web-padova",
        lazy: page(() => import("./assets/SitiWebPadova-0FCRQ6ZJ.js")),
        entry: "src/pages/SitiWebPadova.tsx"
      },
      {
        path: "siti-web-per-negozi",
        lazy: page(() => import("./assets/SitiWebNegozi-Ci9rcSzt.js")),
        entry: "src/pages/SitiWebNegozi.tsx"
      },
      {
        path: "faq-realizzazione-siti-web",
        lazy: page(() => import("./assets/FaqSitiWeb-DrX3Lavz.js")),
        entry: "src/pages/FaqSitiWeb.tsx"
      },
      {
        path: "posizionamento-google-e-ai",
        lazy: page(() => import("./assets/PosizionamentoGoogleEAi-CPu9koDy.js")),
        entry: "src/pages/PosizionamentoGoogleEAi.tsx"
      },
      {
        path: "pubblicita-google-ads",
        lazy: page(() => import("./assets/PubblicitaGoogleAds-CHvjmLdk.js")),
        entry: "src/pages/PubblicitaGoogleAds.tsx"
      },
      {
        path: "creare-sito-con-intelligenza-artificiale",
        element: /* @__PURE__ */ jsxDEV(
          Navigate,
          {
            to: "/blog/siti-web-creati-con-intelligenza-artificiale",
            replace: true
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/routes.tsx",
            lineNumber: 62,
            columnNumber: 11
          },
          void 0
        )
      },
      {
        path: "quanto-costa-sito-web",
        element: /* @__PURE__ */ jsxDEV(Navigate, { to: "/blog/quanto-costa-un-sito-web-nel-2026", replace: true }, void 0, false, {
          fileName: "/dev-server/src/routes.tsx",
          lineNumber: 70,
          columnNumber: 18
        }, void 0)
      },
      {
        path: "blog",
        lazy: page(() => import("./assets/Blog-DU-sRulo.js")),
        entry: "src/pages/Blog.tsx"
      },
      {
        path: "blog/siti-web-creati-con-intelligenza-artificiale",
        lazy: page(() => import("./assets/BlogAiWebsiteArticle-Dg1ybLU5.js")),
        entry: "src/pages/BlogAiWebsiteArticle.tsx"
      },
      {
        path: "blog/quanto-costa-un-sito-web-nel-2026",
        lazy: page(() => import("./assets/BlogWebsiteCostArticle-M5mE3jQF.js")),
        entry: "src/pages/BlogWebsiteCostArticle.tsx"
      },
      {
        path: "blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
        lazy: page(() => import("./assets/BlogSiteVsSocialArticle-BcnZ8Mkx.js")),
        entry: "src/pages/BlogSiteVsSocialArticle.tsx"
      },
      {
        path: "blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy",
        lazy: page(() => import("./assets/BlogGdprArticle-QhQveY9v.js")),
        entry: "src/pages/BlogGdprArticle.tsx"
      },
      {
        path: "blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
        lazy: page(() => import("./assets/BlogOutdatedWebsiteArticle-DpN2KTeA.js")),
        entry: "src/pages/BlogOutdatedWebsiteArticle.tsx"
      },
      {
        path: "blog/perche-il-tuo-sito-non-si-trova-su-google",
        lazy: page(() => import("./assets/BlogNotFoundOnGoogleArticle-BBNxHFwo.js")),
        entry: "src/pages/BlogNotFoundOnGoogleArticle.tsx"
      },
      {
        path: "blog/siti-web-piattaforme-preventivi-online-conviene",
        lazy: page(() => import("./assets/BlogQuotePlatformsArticle-Bcp5CXnq.js")),
        entry: "src/pages/BlogQuotePlatformsArticle.tsx"
      },
      {
        path: "blog/creare-sito-web-da-soli-conviene",
        lazy: page(() => import("./assets/BlogDiyWebsiteArticle-CRbh2mpD.js")),
        entry: "src/pages/BlogDiyWebsiteArticle.tsx"
      },
      {
        path: "blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere",
        lazy: page(() => import("./assets/BlogArubaSupersiteArticle-CveLj478.js")),
        entry: "src/pages/BlogArubaSupersiteArticle.tsx"
      },
      {
        path: "contatti",
        lazy: page(() => import("./assets/Contact-B3cqdD_v.js")),
        entry: "src/pages/Contact.tsx"
      },
      {
        path: "realizzazioni",
        lazy: page(() => import("./assets/Realizzazioni-BX0A3dGK.js")),
        entry: "src/pages/Realizzazioni.tsx"
      },
      {
        path: "realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto",
        lazy: page(() => import("./assets/DemoRbSncEdilizia-BLLdBFYl.js")),
        entry: "src/pages/DemoRbSncEdilizia.tsx"
      },
      {
        path: "realizzazioni/demo-metalmeccanica",
        lazy: page(() => import("./assets/DemoMetalmeccanica-Hm6gdBHP.js")),
        entry: "src/pages/DemoMetalmeccanica.tsx"
      },
      {
        path: "realizzazioni/demo-studio-dentistico-premium",
        lazy: page(() => import("./assets/DemoStudioDentisticoPremium-u1PdEXiA.js")),
        entry: "src/pages/DemoStudioDentisticoPremium.tsx"
      },
      {
        path: "realizzazioni/demo-fotovoltaico",
        lazy: page(() => import("./assets/DemoFotovoltaico-BAr6cmRo.js")),
        entry: "src/pages/DemoFotovoltaico.tsx"
      },
      {
        path: "realizzazioni/boutique-bb-luxury-rooms",
        lazy: page(() => import("./assets/DemoBoutiqueBB-BSmQhq3E.js")),
        entry: "src/pages/DemoBoutiqueBB.tsx"
      },
      {
        path: "realizzazioni/demo-flower-atelier",
        lazy: page(() => import("./assets/DemoFlowerAtelier-BxRyvcou.js")),
        entry: "src/pages/DemoFlowerAtelier.tsx"
      },
      {
        path: "realizzazioni/demo-personal-trainer-vera-method",
        lazy: page(() => import("./assets/DemoPersonalTrainerVeraMethod-CUjelRG_.js")),
        entry: "src/pages/DemoPersonalTrainerVeraMethod.tsx"
      },
      {
        path: "privacy",
        lazy: page(() => import("./assets/PrivacyPolicy-y2kMQwHc.js")),
        entry: "src/pages/PrivacyPolicy.tsx"
      },
      {
        path: "cookie",
        lazy: page(() => import("./assets/CookiePolicy-Df6me4Fn.js")),
        entry: "src/pages/CookiePolicy.tsx"
      },
      {
        path: "*",
        lazy: page(() => import("./assets/NotFound-CQTaQPIm.js")),
        entry: "src/pages/NotFound.tsx"
      }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  AnimatedSection as A,
  ContactFormWeb3Forms as C,
  Footer as F,
  Header as H,
  StaggerContainer as S,
  StaggerItem as a,
  Fragment as b,
  ContactSection as c,
  createRoot,
  CONSENT_OPEN_EVENT as d,
  CONSENT_UPDATED_EVENT as e,
  getConsent as g,
  jsxDEV as j,
  motion as m,
  openPreferences as o,
  saveConsent as s
};
