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
import SitiWebPadova from "./pages/SitiWebPadova";
import FaqSitiWeb from "./pages/FaqSitiWeb";
import CreareSitoConAI from "./pages/CreareSitoConAI";
import QuantoCostaSitoWeb from "./pages/QuantoCostaSitoWeb";
import SitoWebBarber from "./pages/SitoWebBarber";
import DemoDV from "./pages/DemoDV";
import DemoRBT from "./pages/DemoRBT";
import DemoZardini from "./pages/DemoZardini";
import DemoComit from "./pages/DemoComit";
import DemoSI2000 from "./pages/DemoSI2000";
import DemoIES from "./pages/DemoIES";
import DemoSovem from "./pages/DemoSovem";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const siteMetadata = {
  title: "Realizzazione siti web professionali per aziende, negozi e professionisti in tutta Italia | 4weblab",
  description: "Realizziamo siti web moderni, veloci e ottimizzati SEO per aziende, negozi e professionisti in tutta Italia. Metodo strutturato, costi chiari, risultati concreti.",
  url: "https://4weblab.it/",
  image: "https://4weblab.it/og-image.jpg",
};

const App = () => (
  <HelmetProvider>
    <Helmet>
      {/* Primary Meta Tags - fallback globale, ogni pagina sovrascrive con il proprio Helmet */}
      <title>{siteMetadata.title}</title>
      <meta name="title" content={siteMetadata.title} />
      <meta name="description" content={siteMetadata.description} />
      <meta name="robots" content="index, follow" />
      
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
      <html lang="it" />
      
      {/* Global JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "4 Web Lab di Fullin Carlo",
          "url": "https://4weblab.it/",
          "logo": "https://4weblab.it/logo.webp",
          "image": "https://4weblab.it/logo.webp",
          "telephone": "+393514656042",
          "email": "info@4weblab.it",
          "vatID": "05765760284",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Belluno 44",
            "addressLocality": "Legnaro",
            "addressRegion": "PD",
            "postalCode": "35020",
            "addressCountry": "IT"
          },
          "areaServed": ["IT", "Veneto", "Padova (PD)", "Venezia (VE)", "Treviso (TV)", "Vicenza (VI)", "Verona (VR)", "Rovigo (RO)", "Belluno (BL)"],
          "sameAs": ["https://share.google/oGOMV0sHAaV8JlqnZ"],
          "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "byAppointmentOnly": true }]
        })}
      </script>
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
             <Route path="/realizzazione-siti-web-padova" element={<SitiWebPadova />} />
             <Route path="/faq-realizzazione-siti-web" element={<FaqSitiWeb />} />
             <Route path="/creare-sito-con-intelligenza-artificiale" element={<CreareSitoConAI />} />
              <Route path="/quanto-costa-sito-web" element={<QuantoCostaSitoWeb />} />
             <Route path="/sito-web-barber" element={<SitoWebBarber />} />
             <Route path="/demo-dv" element={<DemoDV />} />
             <Route path="/demo-rbt" element={<DemoRBT />} />
             <Route path="/demo-zardini" element={<DemoZardini />} />
             <Route path="/demo-comit" element={<DemoComit />} />
             <Route path="/demo-si2000" element={<DemoSI2000 />} />
              <Route path="/demo-ies" element={<DemoIES />} />
              <Route path="/demo-sovem" element={<DemoSovem />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookie" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
