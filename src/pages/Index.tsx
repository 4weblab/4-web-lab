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

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "4 Web Lab di Fullin Carlo",
  url: "https://4weblab.it/",
  logo: "https://4weblab.it/logo.webp",
  image: "https://4weblab.it/logo.webp",
  telephone: "+393514656042",
  email: "info@4weblab.it",
  vatID: "05765760284",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Belluno 44",
    addressLocality: "Legnaro",
    addressRegion: "PD",
    postalCode: "35020",
    addressCountry: "IT",
  },
  areaServed: [
    "IT",
    "Veneto",
    "Padova (PD)",
    "Venezia (VE)",
    "Treviso (TV)",
    "Vicenza (VI)",
    "Verona (VR)",
    "Rovigo (RO)",
    "Belluno (BL)",
  ],
  sameAs: ["https://share.google/oGOMV0sHAaV8JlqnZ"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      byAppointmentOnly: true,
    },
  ],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Agenzia Web Padova | Siti Professionali per Negozi, Professionisti e Aziende | 4weblab</title>
        <meta
          name="description"
          content="Agenzia Web Padova: realizziamo siti web professionali da 249€ una tantum. Siti veloci, ottimizzati SEO e su misura per negozi, professionisti e aziende. Assistenza locale a Padova e preventivo gratuito in 24h."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/" />
        <meta property="og:title" content="Agenzia Web Padova | Siti per Negozi, Professionisti e Aziende | 4weblab" />
        <meta
          property="og:description"
          content="Agenzia Web Padova: realizziamo siti web professionali da 249€ una tantum. Siti veloci, ottimizzati SEO e su misura per negozi, professionisti e aziende. Assistenza locale a Padova e preventivo gratuito in 24h."
        />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
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
