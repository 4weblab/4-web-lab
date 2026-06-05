import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const StrengthsSection = lazy(() => import("@/components/StrengthsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const UserRoutingSection = lazy(() => import("@/components/UserRoutingSection"));
const HomeFaqPreview = lazy(() => import("@/components/HomeFaqPreview"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Agenzia Web Padova - Siti web, SEO, da 199€ | 4 Web Lab
        </title>
        <meta
          name="description"
          content="Agenzia Web Padova: siti professionali per negozi, professionisti e aziende da 199€. SEO, assistenza e preventivo gratuito in 24h."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/" />
        <meta
          property="og:title"
          content="Agenzia Web Padova - Siti da 199€ | 4 Web Lab"
        />
        <meta
          property="og:description"
          content="Agenzia Web Padova: siti professionali per negozi, professionisti e aziende da 199€. SEO, assistenza e preventivo gratuito in 24h."
        />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://4weblab.it/" />
        <meta
          name="twitter:title"
          content="Agenzia Web Padova - Siti da 199€ | 4 Web Lab"
        />
        <meta
          name="twitter:description"
          content="Agenzia Web Padova: siti professionali per negozi, professionisti e aziende da 199€. SEO, assistenza e preventivo gratuito in 24h."
        />
        <meta name="twitter:image" content="https://4weblab.it/og-image.jpg" />

        {/* WebSite entity, linked to the global ProfessionalService via publisher @id */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://4weblab.it/#website",
            "url": "https://4weblab.it/",
            "name": "4 Web Lab",
            "inLanguage": "it-IT",
            "publisher": { "@id": "https://4weblab.it/#business" },
          })}
        </script>

        {/* FAQPage — mirrors the 3 Q&A visible in HomeFaqPreview */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quanto costa realizzare un sito web?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Il costo parte generalmente a partire da 199€ per una struttura one-page e aumenta in base a pagine, funzionalità e ottimizzazione SEO.",
                },
              },
              {
                "@type": "Question",
                "name": "In quanto tempo viene realizzato un sito web?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un sito standard può essere realizzato in 2–4 settimane, a seconda della complessità e della rapidità nella consegna dei materiali.",
                },
              },
              {
                "@type": "Question",
                "name": "I siti web servono ancora nel 2026 con l'arrivo dell'AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sì, oggi più che mai: gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano sui contenuti dei siti web per generare le risposte. Senza un sito autorevole, l'attività non viene citata.",
                },
              },
            ],
          })}
        </script>

        {/* BreadcrumbList minimale per coerenza con le altre pagine */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://4weblab.it/",
              },
            ],
          })}
        </script>
      </Helmet>

      <Header />

      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <AboutSection />
          <StrengthsSection />
          <ServicesSection />
          <UserRoutingSection />
          <HomeFaqPreview />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default Index;
