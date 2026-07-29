import { g as getConsent, e as CONSENT_UPDATED_EVENT, j as jsxDEV, o as openPreferences } from "../main.mjs";
import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "react-router-dom";
import "react-helmet-async";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
const CookiePreferencesButton = () => {
  const [hasChosen, setHasChosen] = useState(false);
  useEffect(() => {
    setHasChosen(!!getConsent());
    const onUpdate = () => setHasChosen(!!getConsent());
    window.addEventListener(CONSENT_UPDATED_EVENT, onUpdate);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onUpdate);
  }, []);
  if (!hasChosen) return null;
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      onClick: openPreferences,
      "aria-label": "Gestisci preferenze cookie",
      title: "Gestisci preferenze cookie",
      className: "fixed bottom-4 left-4 z-40 w-11 h-11 rounded-full flex items-center justify-center border border-border/50 text-primary hover:text-accent transition-colors",
      style: {
        background: "var(--glass-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "var(--shadow-md)"
      },
      children: /* @__PURE__ */ jsxDEV(Cookie, { className: "w-5 h-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "/dev-server/src/components/CookiePreferencesButton.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/CookiePreferencesButton.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    void 0
  );
};
export {
  CookiePreferencesButton as default
};
