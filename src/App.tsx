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
const BlogGdprArticle = lazy(() => import("./pages/BlogGdprArticle"));
const BlogOutdatedWebsiteArticle = lazy(() => import("./pages/BlogOutdatedWebsiteArticle"));
const BlogNotFoundOnGoogleArticle = lazy(() => import("./pages/BlogNotFoundOnGoogleArticle"));
const BlogQuotePlatformsArticle = lazy(() => import("./pages/BlogQuotePlatformsArticle"));
const BlogDiyWebsiteArticle = lazy(() => import("./pages/BlogDiyWebsiteArticle"));
const Contact = lazy(() => import("./pages/Contact"));
const Realizzazioni = lazy(() => import("./pages/Realizzazioni"));
const DemoMetalmeccanica = lazy(() => import("./pages/DemoMetalmeccanica"));
const DemoStudioDentisticoPremium = lazy(() => import("./pages/DemoStudioDentisticoPremium"));
const DemoFotovoltaico = lazy(() => import("./pages/DemoFotovoltaico"));

const queryClient = new QueryClient();

const siteMetadata = {
  title: "4 Web Lab | Agenzia Web Padova - Siti da 199€",
  description: "Agenzia web a Padova: siti professionali per negozi, professionisti e aziende da 199€. SEO, assistenza locale e preventivo gratuito in 24h.",
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
          "@id": "https://4weblab.it/#business",
          "name": "4 Web Lab di Fullin Carlo",
          "url": "https://4weblab.it/",
          "logo": "https://4weblab.it/logo.webp",
          "image": "https://4weblab.it/logo.webp",
          "telephone": "+393514656042",
          "email": "info@4weblab.it",
          "vatID": "05765760284",
          "founder": {
            "@type": "Person",
            "name": "Carlo Fullin",
            "sameAs": "https://www.linkedin.com/in/carlo-fullin-6aa6b73b7/"
          },
          "foundingDate": "2026",
          "priceRange": "199€ - 899€+",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Belluno 44",
            "addressLocality": "Legnaro",
            "addressRegion": "PD",
            "postalCode": "35020",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.3461,
            "longitude": 11.9536
          },
          "areaServed": ["IT", "Veneto", "Padova (PD)", "Venezia (VE)", "Treviso (TV)", "Vicenza (VI)", "Verona (VR)", "Rovigo (RO)", "Belluno (BL)"],
          "sameAs": [
            "https://share.google/oGOMV0sHAaV8JlqnZ",
            "https://www.linkedin.com/in/carlo-fullin-6aa6b73b7/"
          ],
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
          }],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servizi 4 Web Lab",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Realizzazione siti web professionali a Padova",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": "199",
                  "maxPrice": "899",
                  "priceCurrency": "EUR"
                },
                "description": "Sviluppo siti web su misura per negozi, aziende e professionisti a Padova e provincia."
              }
            ]
          },
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
              <Route path="/blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy" element={<BlogGdprArticle />} />
              <Route path="/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026" element={<BlogOutdatedWebsiteArticle />} />
              <Route path="/blog/perche-il-tuo-sito-non-si-trova-su-google" element={<BlogNotFoundOnGoogleArticle />} />
              <Route path="/blog/siti-web-piattaforme-preventivi-online-conviene" element={<BlogQuotePlatformsArticle />} />
              <Route path="/blog/creare-sito-web-da-soli-conviene" element={<BlogDiyWebsiteArticle />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/realizzazioni" element={<Realizzazioni />} />
              <Route path="/realizzazioni/demo-metalmeccanica" element={<DemoMetalmeccanica />} />
              <Route path="/realizzazioni/demo-studio-dentistico-premium" element={<DemoStudioDentisticoPremium />} />
              <Route path="/realizzazioni/demo-fotovoltaico" element={<DemoFotovoltaico />} />
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
