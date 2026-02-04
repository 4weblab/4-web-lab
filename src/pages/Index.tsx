import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StrengthsSection from '@/components/StrengthsSection';
import ServicesSection from '@/components/ServicesSection';
import RentalSection from '@/components/RentalSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';

// TODO: Sostituire con dati reali dell'attività per Schema.org
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "4 Web Lab",
  "description": "Studio di produzione siti web professionali per professionisti, negozi e piccole e medie imprese in tutta Italia. Design moderno, SEO e performance elevate.",
  "url": "https://www.4weblab.it", // TODO: Inserire URL reale
  "telephone": "+39021234567", // TODO: Inserire telefono reale
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Roma 123", // TODO: Inserire indirizzo reale
    "addressLocality": "Milano",
    "postalCode": "20100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.4642, // TODO: Inserire coordinate reali
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
  "image": "https://www.4weblab.it/og-image.jpg", // TODO: Inserire URL immagine reale
  "sameAs": [
    // TODO: Inserire profili social reali
  ]
};

const Index = () => {
  return (
    <>
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
        <ContactSection />
      </main>

      <Footer />
      
      {/* Floating WhatsApp button (mobile only) */}
      <WhatsAppButton />
      
      {/* Cookie banner */}
      <CookieBanner />
    </>
  );
};

export default Index;
