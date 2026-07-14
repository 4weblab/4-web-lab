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
import TopNotificationBar from "./components/TopNotificationBar";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SitiWebProfessionisti = lazy(() => import("./pages/SitiWebProfessionisti"));
const SitiWebNegozi = lazy(() => import("./pages/SitiWebNegozi"));
const SitiWebAziendali = lazy(() => import("./pages/SitiWebAziendali"));
const SitiWebPadova = lazy(() => import("./pages/SitiWebPadova"));
const FaqSitiWeb = lazy(() => import("./pages/FaqSitiWeb"));
const PosizionamentoGoogleEAi = lazy(() => import("./pages/PosizionamentoGoogleEAi"));
const PubblicitaGoogleAds = lazy(() => import("./pages/PubblicitaGoogleAds"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogAiWebsiteArticle = lazy(() => import("./pages/BlogAiWebsiteArticle"));
const BlogWebsiteCostArticle = lazy(() => import("./pages/BlogWebsiteCostArticle"));
const BlogSiteVsSocialArticle = lazy(() => import("./pages/BlogSiteVsSocialArticle"));
const BlogGdprArticle = lazy(() => import("./pages/BlogGdprArticle"));
const BlogOutdatedWebsiteArticle = lazy(() => import("./pages/BlogOutdatedWebsiteArticle"));
const BlogNotFoundOnGoogleArticle = lazy(() => import("./pages/BlogNotFoundOnGoogleArticle"));
const BlogQuotePlatformsArticle = lazy(() => import("./pages/BlogQuotePlatformsArticle"));
const BlogDiyWebsiteArticle = lazy(() => import("./pages/BlogDiyWebsiteArticle"));
const BlogArubaSupersiteArticle = lazy(() => import("./pages/BlogArubaSupersiteArticle"));
const Contact = lazy(() => import("./pages/Contact"));
const Realizzazioni = lazy(() => import("./pages/Realizzazioni"));
const DemoMetalmeccanica = lazy(() => import("./pages/DemoMetalmeccanica"));
const DemoStudioDentisticoPremium = lazy(() => import("./pages/DemoStudioDentisticoPremium"));
const DemoFotovoltaico = lazy(() => import("./pages/DemoFotovoltaico"));
const DemoBoutiqueBB = lazy(() => import("./pages/DemoBoutiqueBB"));
const DemoFlowerAtelier = lazy(() => import("./pages/DemoFlowerAtelier"));
const DemoRbSncEdilizia = lazy(() => import("./pages/DemoRbSncEdilizia"));
const DemoPersonalTrainerVeraMethod = lazy(() => import("./pages/DemoPersonalTrainerVeraMethod"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <Helmet>
      {/* Solo defaults sitewide. Ogni pagina emette title/description/canonical/og/twitter via il proprio Helmet. */}
      <html lang="it" />
      <meta name="robots" content="index, follow" />
      
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
          "priceRange": "€€",
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
          "areaServed": [
            { "@type": "City", "name": "Padova" },
            { "@type": "AdministrativeArea", "name": "Veneto" }
          ],
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
          }
        })}
      </script>

      {/* Global WebSite entity — referenced by isPartOf on all pages */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://4weblab.it/#website",
          "url": "https://4weblab.it/",
          "name": "4 Web Lab",
          "inLanguage": "it-IT",
          "publisher": { "@id": "https://4weblab.it/#business" }
        })}
      </script>
    </Helmet>
    
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <TopNotificationBar />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/siti-web-per-professionisti" element={<SitiWebProfessionisti />} />
              <Route path="/siti-web-aziendali" element={<SitiWebAziendali />} />
              <Route path="/realizzazione-siti-web-padova" element={<SitiWebPadova />} />
              <Route path="/siti-web-per-negozi" element={<SitiWebNegozi />} />
              <Route path="/faq-realizzazione-siti-web" element={<FaqSitiWeb />} />
              <Route path="/posizionamento-google-e-ai" element={<PosizionamentoGoogleEAi />} />
              <Route path="/pubblicita-google-ads" element={<PubblicitaGoogleAds />} />
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
              <Route path="/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere" element={<BlogArubaSupersiteArticle />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/realizzazioni" element={<Realizzazioni />} />
              <Route path="/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto" element={<DemoRbSncEdilizia />} />
              <Route path="/realizzazioni/demo-metalmeccanica" element={<DemoMetalmeccanica />} />
              <Route path="/realizzazioni/demo-studio-dentistico-premium" element={<DemoStudioDentisticoPremium />} />
              <Route path="/realizzazioni/demo-fotovoltaico" element={<DemoFotovoltaico />} />
              <Route path="/realizzazioni/boutique-bb-luxury-rooms" element={<DemoBoutiqueBB />} />
              <Route path="/realizzazioni/demo-flower-atelier" element={<DemoFlowerAtelier />} />
              <Route path="/realizzazioni/demo-personal-trainer-vera-method" element={<DemoPersonalTrainerVeraMethod />} />
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
