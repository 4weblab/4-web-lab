import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StrengthsSection from '@/components/StrengthsSection';
import ServicesSection from '@/components/ServicesSection';
import RentalSection from '@/components/RentalSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MobileCTABar from '@/components/MobileCTABar';
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
      
      {/* Sticky mobile CTA bar (call + WhatsApp) */}
      <MobileCTABar />
      
      {/* Cookie banner */}
      <CookieBanner />
    </>
  );
};

export default Index;
