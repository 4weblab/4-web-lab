import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StrengthsSection from '@/components/StrengthsSection';
import ServicesSection from '@/components/ServicesSection';
import RentalSection from '@/components/RentalSection';
import PricingSection from '@/components/PricingSection';
import HomeFaqPreview from '@/components/HomeFaqPreview';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

// TODO: Sostituire con dati reali dell'attività per Schema.org
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "4 Web Lab",
  "description": "Studio di produzione siti web professionali per professionisti, negozi e piccole e medie imprese in tutta Italia. Design moderno, SEO e performance elevate.",
  "url": "https://www.4weblab.it",
  "telephone": "+39021234567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Roma 123",
    "addressLocality": "Milano",
    "postalCode": "20100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.4642,
    "longitude": 9.1900
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€",
  "image": "https://www.4weblab.it/og-image.jpg",
  "sameAs": []
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Realizzazione siti web professionali per aziende, negozi e professionisti in tutta Italia | 4weblab</title>
        <meta name="description" content="Realizziamo siti web moderni, veloci e ottimizzati SEO per aziende, negozi e professionisti in tutta Italia. Metodo strutturato, costi chiari, risultati concreti." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.4weblab.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.4weblab.it/" />
        <meta property="og:title" content="Realizzazione siti web professionali per aziende, negozi e professionisti in tutta Italia | 4weblab" />
        <meta property="og:description" content="Realizziamo siti web moderni, veloci e ottimizzati SEO per aziende, negozi e professionisti in tutta Italia. Metodo strutturato, costi chiari, risultati concreti." />
        <meta property="og:image" content="https://www.4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
      </Helmet>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <Header />
      
      <main id="main-content">
        <Hero />
        <AboutSection />
        <StrengthsSection />
        <ServicesSection />
        <RentalSection />
        <PricingSection />
        <HomeFaqPreview />
        <ContactSection />
      </main>

      <Footer />

      {/* Cookie banner */}
      <CookieBanner />
    </>
  );
};

export default Index;
