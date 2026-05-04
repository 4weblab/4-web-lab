import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Hero background images are served from /public/hero so the path stays stable
// in production and matches the <link rel="preload"> in index.html (critical for LCP).
const heroBgMobile = '/hero/hero-bg-mobile.webp';
const heroBgTablet = '/hero/hero-bg-tablet.webp';
const heroBgDesktop = '/hero/hero-bg-desktop.webp';

const whatsappNumber = '393514656042';
const whatsappMessage = encodeURIComponent('Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.');

const Hero = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleScrollToContact = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToAbout = () => {
    const element = document.getElementById('chi-siamo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}>

      {/* Background image */}
      <picture>
        <source media="(max-width: 640px)" srcSet={heroBgMobile} type="image/webp" />
        <source media="(max-width: 1280px)" srcSet={heroBgTablet} type="image/webp" />
        <img
          src={heroBgDesktop}
          alt="Sito web professionale realizzato da 4 Web Lab per PMI e professionisti"
          width={1920}
          height={1070}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-left sm:object-center"
        />
      </picture>

      {/* Directional overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, hsl(210 73% 10% / 0.68) 0%, hsl(210 73% 10% / 0.42) 45%, hsl(210 73% 10% / 0.10) 75%, transparent 100%)'
        }}
        aria-hidden="true" />

      <div className="container-section relative z-10 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left: main content */}
          <div className="max-w-xl text-left">
            <h1
              className="heading-1 text-primary-foreground mb-8 text-balance"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.55), 0 0 20px rgba(0,0,0,0.25)',
                fontWeight: 800,
                letterSpacing: '-0.03em'
              }}>
              <span className="block text-[0.6em] tracking-wide font-semibold opacity-90">SCEGLI LA MIGLIORE</span>
              <span className="block">WEB AGENCY PADOVA</span>
              <span className="block text-[0.6em] tracking-wide font-semibold opacity-90 mt-1">SITI WEB, SEO, CONSULENZA</span>
            </h1>

            <p
              className="body-large text-primary-foreground mb-14 text-balance whitespace-pre-line"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
            >

              Nessun investimento iniziale da migliaia di Euro.{"\n"}
              Scopri le soluzioni web per il sito del tuo negozio, della tua professione ( commercialista, elettricista, notaio, idraulico, avvocato etc. ) e per la tua azienda.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5">

              <button
                onClick={handleScrollToContact}
                className="hero-cta hero-cta-primary"
                aria-label="Richiedi un preventivo gratuito">
                Richiedi preventivo gratuito
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta hero-cta-whatsapp"
                aria-label="Scrivici su WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="WhatsApp" className="w-6 h-6">
                  <circle cx="256" cy="256" r="256" fill="#25D366" />
                  <path fill="#FFFFFF" d="M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z" />
                </svg>
                Scrivi su WhatsApp
              </a>

            </div>
          </div>

          {/* Right: promo box */}
          <div className="w-full max-w-sm lg:mt-8">

            <div className="rounded-2xl border-2 border-accent bg-[hsl(210_73%_10%/0.75)] backdrop-blur-md p-7 shadow-lg">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">🌸 Promozione</span>
              <h2 className="text-xl font-bold text-primary-foreground mb-2 leading-snug">Offerta di Primavera</h2>
              <p className="text-primary-foreground/75 text-sm leading-relaxed mb-5">
                Sconto del <strong className="text-primary-foreground">20%</strong> sul tuo nuovo sito aziendale.
              </p>
              <Link
                to="/siti-web-aziendali"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary-foreground transition-colors"
              >
                Scopri di più
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={handleScrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
          aria-label="Scorri verso il basso"
        >

          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>);

};

export default Hero;
