import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroBg from '@/assets/hero-bg.png';

const Hero = () => {
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
      <img
        src={heroBg}
        alt="Sito web professionale realizzato da 4weblab per PMI e professionisti"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-left sm:object-center"
      />

      {/* Directional overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, hsl(210 73% 10% / 0.68) 0%, hsl(210 73% 10% / 0.42) 45%, hsl(210 73% 10% / 0.10) 75%, transparent 100%)'
        }}
        aria-hidden="true" />

      <div className="container-section relative z-10 py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
          {/* Left: main content */}
          <div className="max-w-xl text-left">
            <motion.h1
              className="heading-1 text-primary-foreground mb-8 text-balance"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.55), 0 0 20px rgba(0,0,0,0.25)',
                fontWeight: 800,
                letterSpacing: '-0.03em'
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>

              Siti Web Professionali su Misura per PMI e Professionisti Da 49€/mese
            </motion.h1>

            <motion.p
              className="body-large text-primary-foreground mb-14 text-balance"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>

              Realizziamo siti web professionali per attività locali e PMI, curati nei dettagli e progettati per essere veloci, performanti e accessibili nel prezzo.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-5"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>

              <button
                onClick={handleScrollToContact}
                className="btn-primary text-lg px-12 py-5"
                aria-label="Richiedi un preventivo gratuito">

                Richiedi preventivo gratuito
              </button>

            </motion.div>
          </div>

          {/* Right: promo box */}
          <motion.div
            className="w-full max-w-sm lg:mt-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>

            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-md p-7 shadow-lg">
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
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={handleScrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
          aria-label="Scorri verso il basso"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>

          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>);

};

export default Hero;
