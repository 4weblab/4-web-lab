import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.webp';

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

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-12"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true" />

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.5) 100%)' }}
        aria-hidden="true" />


      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="hero-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch" />

          </filter>
          <rect width="100%" height="100%" filter="url(#hero-noise)" />
        </svg>
      </div>

      {/* Radial spotlight behind headline */}
      <div className="hero-spotlight" aria-hidden="true" />

      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" aria-hidden="true" />

      <div className="container-section relative z-10 text-center py-24">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="heading-1 text-primary-foreground mb-8 text-balance"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>

            Siti web professionali per commercianti, professionisti e <Link to="/siti-web-aziendali" className="text-primary-foreground/90 hover:underline font-medium">piccole medie imprese</Link> in tutta Italia
          </motion.h1>

          <motion.p
            className="body-large text-primary-foreground/90 mb-14 max-w-2xl mx-auto text-balance"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>

            Progettiamo e realizziamo siti web moderni, veloci e ottimizzati SEO, lavorando da remoto con un metodo chiaro, strutturato e orientato ai risultati.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>

            <button
              onClick={handleScrollToContact}
              className="btn-primary text-lg px-10 py-4"
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