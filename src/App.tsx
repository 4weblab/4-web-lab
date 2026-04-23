import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SitiWebProfessionisti = lazy(() => import("./pages/SitiWebProfessionisti"));
const SitiWebNegozi = lazy(() => import("./pages/SitiWebNegozi"));
const SitiWebAziendali = lazy(() => import("./pages/SitiWebAziendali"));
const SitiWebPadova = lazy(() => import("./pages/SitiWebPadova"));
const FaqSitiWeb = lazy(() => import("./pages/FaqSitiWeb"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogAiWebsiteArticle = lazy(() => import("./pages/BlogAiWebsiteArticle"));
const BlogWebsiteCostArticle = lazy(() => import("./pages/BlogWebsiteCostArticle"));
const BlogSiteVsSocialArticle = lazy(() => import("./pages/BlogSiteVsSocialArticle"));
const DemoDV = lazy(() => import("./pages/DemoDV"));
const DemoRBT = lazy(() => import("./pages/DemoRBT"));
const DemoZardini = lazy(() => import("./pages/DemoZardini"));
const DemoComit = lazy(() => import("./pages/DemoComit"));
const DemoSI2000 = lazy(() => import("./pages/DemoSI2000"));
const DemoIES = lazy(() => import("./pages/DemoIES"));
const DemoSovem = lazy(() => import("./pages/DemoSovem"));
const DemoPlatiumed = lazy(() => import("./pages/DemoPlatiumed"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

const siteMetadata = {
  title: "Agenzia Web Padova | Siti Professionali per Negozi, Professionisti e Aziende | Soluzioni web per la tua impresa | 4 Web Lab",
  description: "Agenzia Web Padova specializzata in siti professionali per negozi, professionisti e PMI. Pacchetti da 249€ tutto incluso. Siti veloci, ottimizzati SEO e con assistenza locale. Preventivo gratuito in 24 ore!",
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
      <link rel="canonical" href={siteMetadata.url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteMetadata.url} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.image} />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content="4 Web Lab" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteMetadata.url} />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={siteMetadata.image} />
      <meta name="twitter:site" content="@4weblab" />
      
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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/realizzazione-siti-web-per-professionisti" element={<SitiWebProfessionisti />} />
              <Route path="/siti-web-aziendali" element={<SitiWebAziendali />} />
              <Route path="/realizzazione-siti-web-padova" element={<SitiWebPadova />} />
              <Route path="/siti-web-per-negozi" element={<SitiWebNegozi />} />
              <Route path="/faq-realizzazione-siti-web" element={<FaqSitiWeb />} />
              <Route path="/creare-sito-con-intelligenza-artificiale" element={<Navigate to="/blog/siti-web-creati-con-intelligenza-artificiale" replace />} />
              <Route path="/quanto-costa-sito-web" element={<Navigate to="/blog/quanto-costa-un-sito-web-nel-2026" replace />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/siti-web-creati-con-intelligenza-artificiale" element={<BlogAiWebsiteArticle />} />
              <Route path="/blog/quanto-costa-un-sito-web-nel-2026" element={<BlogWebsiteCostArticle />} />
              <Route path="/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026" element={<BlogSiteVsSocialArticle />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/demo-dv" element={<DemoDV />} />
              <Route path="/demo-rbt" element={<DemoRBT />} />
              <Route path="/demo-zardini" element={<DemoZardini />} />
              <Route path="/demo-comit" element={<DemoComit />} />
              <Route path="/demo-si2000" element={<DemoSI2000 />} />
              <Route path="/demo-ies" element={<DemoIES />} />
              <Route path="/demo-sovem" element={<DemoSovem />} />
              <Route path="/demo-platiumed" element={<DemoPlatiumed />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/cookie" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
