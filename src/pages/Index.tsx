import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const AboutSection = lazy(() => import('@/components/AboutSection'));
const StrengthsSection = lazy(() => import('@/components/StrengthsSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const RentalSection = lazy(() => import('@/components/RentalSection'));
const PricingSection = lazy(() => import('@/components/PricingSection'));
const HomeFaqPreview = lazy(() => import('@/components/HomeFaqPreview'));
const ContactSection = lazy(() => import('@/components/ContactSection'));


const businessSchema = {
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
        <title>Agenzia Web Padova | Siti Professionali da 49€/mese o 400€ | 4weblab</title>
        <meta name="description" content="Realizziamo siti web moderni, veloci e ottimizzati SEO per aziende, negozi e professionisti in tutta Italia. Metodo strutturato, costi chiari, risultati concreti." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/" />
        <meta property="og:title" content="Agenzia Web Padova | Siti Professionali da 49€/mese o 400€ | 4weblab" />
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
        <Suspense fallback={null}>
          <AboutSection />
          <StrengthsSection />
          <ServicesSection />
          <RentalSection />
          <PricingSection />
          <HomeFaqPreview />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />

    </>
  );
};

export default Index;
