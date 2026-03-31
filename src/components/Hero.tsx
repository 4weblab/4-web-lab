import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

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
      <div
        className="absolute inset-0 bg-cover bg-left sm:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true" />

      {/* Directional overlay: dark on left, transparent on right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, hsl(210 73% 10% / 0.68) 0%, hsl(210 73% 10% / 0.42) 45%, hsl(210 73% 10% / 0.10) 75%, transparent 100%)'
        }}
        aria-hidden="true" />

      <div className="container-section relative z-10 py-24">
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