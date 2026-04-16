import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SitiWebNegozi = () => {
  return (
    <>
      <Helmet>
        <title>Siti Web per Negozi | 4 Web Lab</title>
        <meta name="description" content="Realizziamo siti web professionali per negozi. Soluzioni su misura per la tua attività commerciale." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/siti-web-per-negozi" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-[var(--header-height)]">
        {/* Content coming soon */}
      </main>
      <Footer />
    </>
  );
};

export default SitiWebNegozi;
