import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contatti | 4 Web Lab</title>
        <meta
          name="description"
          content="Contatta 4 Web Lab per una consulenza gratuita. Siamo a Legnaro (PD) e realizziamo siti web professionali per negozi, professionisti e aziende."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/contatti" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/contatti" />
        <meta property="og:title" content="Contatti | 4 Web Lab" />
        <meta
          property="og:description"
          content="Contatta 4 Web Lab per una consulenza gratuita. Siamo a Legnaro (PD) e realizziamo siti web professionali per negozi, professionisti e aziende."
        />
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" style={{ minHeight: "calc(100vh - var(--header-height))" }} />

      <Footer />
    </>
  );
};

export default Contact;
