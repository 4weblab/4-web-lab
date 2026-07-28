import { Suspense, lazy, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import TopNotificationBar from "@/components/TopNotificationBar";
import { initAnalyticsBridge } from "@/lib/analytics";
import { useGaPageview } from "@/hooks/useGaPageview";

// Non-critical UI: lazy-loaded after first paint to keep initial JS light.
const CookieBanner = lazy(() => import("@/components/CookieBanner"));
const CookiePreferencesButton = lazy(() => import("@/components/CookiePreferencesButton"));

const Layout = () => {
  useGaPageview();
  const [deferredReady, setDeferredReady] = useState(false);

  useEffect(() => {
    initAnalyticsBridge();

    const trigger = () => setDeferredReady(true);
    const ric = (window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    }).requestIdleCallback;
    let timeoutId: number | undefined;
    let idleId: number | undefined;
    if (ric) {
      idleId = ric(trigger, { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(trigger, 1200);
    }
    const opts: AddEventListenerOptions = { once: true, passive: true };
    window.addEventListener("scroll", trigger, opts);
    window.addEventListener("pointerdown", trigger, opts);
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", trigger);
      window.removeEventListener("pointerdown", trigger);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <TopNotificationBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {deferredReady && (
        <Suspense fallback={null}>
          <CookieBanner />
          <CookiePreferencesButton />
        </Suspense>
      )}
    </>
  );
};

export default Layout;