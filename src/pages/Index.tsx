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
          content="Agenzia Web Padova - siti professionali per negozi, professionisti e aziende. A partire da 199€ | Siti veloci, ottimizzati SEO e assistenza. Preventivo gratuito in 24 ore!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/" />
        <meta
          property="og:title"
          content="Agenzia Web Padova | Siti Professionali per Negozi, Professionisti e Aziende | Soluzioni web per la tua impresa | 4 Web Lab"
        />
        <meta
          property="og:description"
          content="Agenzia Web Padova specializzata in siti professionali per negozi, professionisti e PMI. Pacchetti da 249€ tutto incluso. Siti veloci, ottimizzati SEO e con assistenza locale. Preventivo gratuito in 24 ore!"
        />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://4weblab.it/" />
        <meta
          name="twitter:title"
          content="Agenzia Web Padova | Siti Professionali per Negozi, Professionisti e Aziende | Soluzioni web per la tua impresa | 4 Web Lab"
        />
        <meta
          name="twitter:description"
          content="Agenzia Web Padova specializzata in siti professionali per negozi, professionisti e PMI. Pacchetti da 249€ tutto incluso. Siti veloci, ottimizzati SEO e con assistenza locale. Preventivo gratuito in 24 ore!"
        />
        <meta name="twitter:image" content="https://4weblab.it/og-image.jpg" />
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
