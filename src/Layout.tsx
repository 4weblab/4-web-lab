import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import TopNotificationBar from "@/components/TopNotificationBar";
import { initAnalyticsBridge } from "@/lib/analytics";
import { useGaPageview } from "@/hooks/useGaPageview";

const queryClient = new QueryClient();

const Layout = () => {
  useGaPageview();
  useEffect(() => {
    initAnalyticsBridge();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <TopNotificationBar />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          <CookieBanner />
          <CookiePreferencesButton />
        </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Layout;