import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import StrengthsSection from "@/components/StrengthsSection";
import UserRoutingSection from "@/components/UserRoutingSection";
import HomeFaqPreview from "@/components/HomeFaqPreview";
import ContactSection from "@/components/ContactSection";
import SummerClosureNotice from "@/components/SummerClosureNotice";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Web Agency Padova | Siti Web e SEO | 4 Web Lab</title>
        <meta
          name="description"
          content="Web Agency a Padova specializzata in siti web professionali, SEO per Google/AI e Google Ads. Contattaci per un preventivo gratuito in 24 ore!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/" />
        <meta property="og:title" content="Web Agency Padova | Siti Web e SEO | 4 Web Lab" />
        <meta
          property="og:description"
          content="Web Agency a Padova specializzata in siti web professionali, SEO per Google/AI e Google Ads. Contattaci per un preventivo gratuito in 24 ore!"
        />
        <meta property="og:image" content="https://4weblab.it/og-image.webp" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://4weblab.it/" />
        <meta name="twitter:title" content="Web Agency Padova | Siti Web e SEO | 4 Web Lab" />
        <meta
          name="twitter:description"
          content="Web Agency a Padova specializzata in siti web professionali, SEO per Google/AI e Google Ads. Contattaci per un preventivo gratuito in 24 ore!"
        />
        <meta name="twitter:image" content="https://4weblab.it/og-image.webp" />

        {/* Home-only: aggregateRating + review (Google policy: must be visible on page) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "additionalType": "https://schema.org/InternetMarketingService",
            "@id": "https://4weblab.it/#business",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "3",
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Mattia Loreggian" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "4 Web Lab si è occupata di crearci il sito, un logo e un'identità di brand molto precisa che adesso usiamo ovunque.",
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Jessica Trovò" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Adesso ho un sito nuovo, a norma e al prezzo giusto, e sto già vedendo i primi risultati di clientela nuova.",
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Lisa Bogana" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
                "reviewBody": "Carlo è riuscito a guidarmi senza complicare le cose. Il sito che abbiamo realizzato insieme mi rappresenta davvero.",
              },
            ],
          })}
        </script>

        {/* FAQPage — mirrors the 3 Q&A visible in HomeFaqPreview */}
        <script type="application/ld+json">
          {JSON.stringify({
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

        {/* WebPage + Speakable + BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
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
              cssSelector: ["h1", ".aeo-answer"],
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
              ],
            },
          })}
        </script>

        {/* Service + hasOfferCatalog (3 pacchetti) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Realizzazione siti web, SEO e Google Ads",
            provider: { "@id": "https://4weblab.it/#business" },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Veneto" },
              { "@type": "City", name: "Padova" },
              { "@type": "City", name: "Venezia" },
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
                  priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "199", valueAddedTaxIncluded: false },
                },
                {
                  "@type": "Offer",
                  name: "Sito web per professionisti",
                  url: "https://4weblab.it/siti-web-per-professionisti",
                  priceCurrency: "EUR",
                  price: "549",
                  priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "549", valueAddedTaxIncluded: false },
                },
                {
                  "@type": "Offer",
                  name: "Sito web aziendale",
                  url: "https://4weblab.it/siti-web-aziendali",
                  priceCurrency: "EUR",
                  price: "899",
                  priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", price: "899", valueAddedTaxIncluded: false },
                },
              ],
            },
          })}
        </script>

        {/* HowTo: come realizziamo il tuo sito web */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Come realizziamo il tuo sito web",
            description: "Il processo in 4 step di 4 Web Lab per realizzare un sito professionale ottimizzato per Google e per le AI.",
            totalTime: "P28D",
            step: [
              { "@type": "HowToStep", position: 1, name: "Brief gratuito", text: "Analisi delle tue esigenze, del settore e degli obiettivi di business. Sopralluogo telefonico o videocall." },
              { "@type": "HowToStep", position: 2, name: "Progettazione", text: "Architettura informativa, wireframe, scelte di design e copy strategy orientata alla conversione." },
              { "@type": "HowToStep", position: 3, name: "Sviluppo e SEO", text: "Sviluppo del sito, ottimizzazione Core Web Vitals, SEO on-page, dati strutturati per Google e AI." },
              { "@type": "HowToStep", position: 4, name: "Pubblicazione e supporto", text: "Go-live, indicizzazione, formazione e supporto continuo con un referente dedicato." },
            ],
          })}
        </script>

      </Helmet>

      <Header />

      <main id="main-content">
        <Hero />
        <AboutSection />
        <StrengthsSection />
        <UserRoutingSection />
        <HomeFaqPreview />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
