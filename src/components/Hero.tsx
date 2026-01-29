import { ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleScrollToAbout = () => {
    const element = document.getElementById('chi-siamo');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    background: 'var(--gradient-hero)'
  }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroBg})`
    }} aria-hidden="true" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" aria-hidden="true" />

      <div className="container-section relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 text-primary-foreground mb-6 animate-fade-in-up text-balance">
            Creiamo siti web che fanno crescere il tuo business
          </h1>
          
          <p className="body-large text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up text-balance" style={{
          animationDelay: '0.1s'
        }}>Soluzioni web professionali per attivià e PMI. Design moderno, performance elevate e strategie SEO per farti trovare dai tuoi clienti.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <button onClick={handleScrollToContact} className="btn-primary text-lg px-8 py-4" aria-label="Richiedi un preventivo gratuito">
              Richiedi preventivo gratuito
            </button>
            
            <button onClick={handleScrollToAbout} className="btn-outline" aria-label="Scopri di più sui nostri servizi">
              Scopri di più
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button onClick={handleScrollToAbout} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce" aria-label="Scorri verso il basso">
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>;
};
export default Hero;