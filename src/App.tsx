import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import SitiWebProfessionisti from "./pages/SitiWebProfessionisti";
import SitiWebAziendali from "./pages/SitiWebAziendali";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// TODO: Sostituire con dati reali
const siteMetadata = {
  title: "Realizzazione siti web professionali per aziende, negozi e professionisti in tutta Italia | 4weblab",
  description: "Realizziamo siti web moderni, veloci e ottimizzati SEO per aziende, negozi e professionisti in tutta Italia. Metodo strutturato, costi chiari, risultati concreti.",
  url: "https://www.4weblab.it", // TODO: Inserire URL reale
  image: "https://www.4weblab.it/og-image.jpg", // TODO: Inserire immagine OG reale
};

const App = () => (
  <HelmetProvider>
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteMetadata.title}</title>
      <meta name="title" content={siteMetadata.title} />
      <meta name="description" content={siteMetadata.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteMetadata.url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteMetadata.url} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.image} />
      <meta property="og:locale" content="it_IT" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteMetadata.url} />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={siteMetadata.image} />
      
      {/* Additional SEO */}
      <meta name="author" content="4 Web Lab" />
      <meta name="geo.region" content="IT-MI" />
      <meta name="geo.placename" content="Milano" />
      <html lang="it" />
    </Helmet>
    
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
             <Route path="/realizzazione-siti-web-per-professionisti" element={<SitiWebProfessionisti />} />
             <Route path="/siti-web-aziendali" element={<SitiWebAziendali />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookie" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
