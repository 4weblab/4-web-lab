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
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />

      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-foreground/3 blur-[150px]" aria-hidden="true" />

      <div className="container-section relative z-10 text-center py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="heading-1 text-primary-foreground mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Siti web professionali per professionisti, negozi e piccole e medie imprese in tutta Italia
          </motion.h1>

          <motion.p
            className="body-large text-primary-foreground/75 mb-12 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Progettiamo e realizziamo siti web moderni, veloci e ottimizzati SEO, lavorando da remoto con un metodo chiaro, strutturato e orientato ai risultati.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              onClick={handleScrollToContact}
              className="btn-primary text-lg px-9 py-4"
              aria-label="Richiedi un preventivo gratuito"
            >
              Richiedi preventivo gratuito
            </button>

            <button
              onClick={handleScrollToAbout}
              className="btn-outline"
              aria-label="Scopri di più sui nostri servizi"
            >
              Scopri di più
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={handleScrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          aria-label="Scorri verso il basso"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
