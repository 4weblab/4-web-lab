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

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "4 Web Lab di Fullin Carlo",
  "url": "https://4weblab.it/",
  "logo": "https://4weblab.it/logo.png",
  "image": "https://4weblab.it/logo.png",
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
  "areaServed": [
    "IT",
    "Veneto",
    "Padova (PD)",
    "Venezia (VE)",
    "Treviso (TV)",
    "Vicenza (VI)",
    "Verona (VR)",
    "Rovigo (RO)",
    "Belluno (BL)"
  ],
  "sameAs": [
    "https://share.google/oGOMV0sHAaV8JlqnZ"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "byAppointmentOnly": true
    }
  ]
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Realizzazione siti web professionali per aziende, negozi e professionisti in tutta Italia | 4weblab</title>
        <meta name="description" content="Realizziamo siti web moderni, veloci e ottimizzati SEO per aziende, negozi e professionisti in tutta Italia. Metodo strutturato, costi chiari, risultati concreti." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/" />
        <meta property="og:title" content="Realizzazione siti web professionali per aziende, negozi e professionisti in tutta Italia | 4weblab" />
        <meta property="og:description" content="Realizziamo siti web moderni, veloci e ottimizzati SEO per aziende, negozi e professionisti in tutta Italia. Metodo strutturato, costi chiari, risultati concreti." />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>

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
