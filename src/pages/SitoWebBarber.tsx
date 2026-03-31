import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Scissors, MessageCircle, Phone, MapPin, Clock, Check, X, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ContactFormWeb3Forms from '@/components/ContactFormWeb3Forms';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import BarberLightbox from '@/components/BarberLightbox';

import barberHero from '@/assets/barber-hero.jpg';
import barberCut from '@/assets/barber-cut.jpg';
import barberBeard from '@/assets/barber-beard.jpg';
import barberStyling from '@/assets/barber-styling.jpg';
import barberGallery from '@/assets/barber-gallery.jpg';
import barberIdentity from '@/assets/barber-identity.jpg';
import barberSolutionBg from '@/assets/barber-solution-bg.jpg';

const whatsappUrl = 'https://wa.me/393514656042?text=' + encodeURIComponent('Ciao! Vorrei informazioni per un sito web per il mio barber shop.');

const scrollToContatti = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById('contatti-barber')?.scrollIntoView({ behavior: 'smooth' });
};

/* Text shadow for improved readability on dark backgrounds */
const textShadowSubtle = { textShadow: '0px 0px 2px rgba(245, 230, 200, 0.5), 0px 0px 6px rgba(245, 230, 200, 0.3)' };
const headingStyle = { fontFamily: "'Oswald', sans-serif", ...textShadowSubtle };

const galleryImages = [
  { src: barberCut, alt: 'Esempio taglio uomo professionale su sito web barber shop 4weblab' },
  { src: barberBeard, alt: 'Servizio barba e rasatura mostrato nel sito web per barberia' },
  { src: barberStyling, alt: 'Styling capelli nel portfolio sito web barber shop' },
  { src: barberGallery, alt: 'Galleria lavori barber shop realizzata da 4weblab' },
  { src: barberIdentity, alt: 'Esempio sito web barber shop con identità visiva personalizzata da 4weblab' },
  { src: barberHero, alt: 'Sito web per barber shop realizzato da 4weblab – esempio hero' },
];

const SitoWebBarber = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <Helmet>
        <title>Siti Web per Barber Shop e Parrucchieri: Realizzazione Professionale | 4weblab</title>
        <meta name="description" content="Siti web moderni per barberia, parrucchieri e saloni: booking online, galleria foto, SEO locale Padova e Italia. Da 49€/mese con assistenza continua." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/sito-web-barber" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Serve davvero un sito per un barber?", "acceptedAnswer": { "@type": "Answer", "text": "Sì, perché ti permette di farti trovare su Google e di presentarti in modo professionale." } },
              { "@type": "Question", "name": "Instagram non basta?", "acceptedAnswer": { "@type": "Answer", "text": "Instagram è utile, ma non è tuo. Un sito è uno spazio tuo, dove il cliente trova tutto subito." } },
              { "@type": "Question", "name": "Lavorate solo nella vostra zona?", "acceptedAnswer": { "@type": "Answer", "text": "No, lavoriamo con barber shop in tutta Italia e gestiamo tutto anche a distanza." } },
              { "@type": "Question", "name": "Quanto tempo serve?", "acceptedAnswer": { "@type": "Answer", "text": "In pochi giorni il sito può essere online e già utilizzabile." } }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-[hsl(0,0%,8%)] text-[hsl(0,0%,92%)] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={barberHero} alt="Sito web per barber shop realizzato da 4weblab – esempio hero" loading="eager" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/45" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-[hsl(35,60%,60%)] uppercase tracking-[0.25em] text-sm font-semibold mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Realizzazione siti web per barber shop
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[3.25rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-bold leading-[0.9] tracking-[-0.03em] max-w-4xl mb-8 text-white"
              style={{ ...headingStyle, textShadow: '0px 2px 12px rgba(0,0,0,0.7), 0px 0px 4px rgba(245,230,200,0.4)' }}
            >
              Sito Web per Barber Shop: Porta Nuovi Clienti in Agenda
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-[hsl(0,0%,78%)] max-w-xl mb-10 leading-relaxed"
            >
              Se gestisci un barber shop e vuoi farti trovare su Google, un sito fatto bene fa la differenza. Realizziamo siti pensati per trasformare le visite in appuntamenti, senza complicazioni.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg shadow-[0_4px_16px_hsl(142,70%,30%/0.4)]">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="#contatti-barber" onClick={scrollToContatti}
                className="inline-flex items-center justify-center gap-3 border-2 border-[hsl(0,0%,40%)] hover:border-[hsl(35,60%,60%)] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg backdrop-blur-sm bg-white/5">
                Richiedi informazioni <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Transition fade dark→light */}
        <div className="h-4 md:h-6" style={{ background: 'linear-gradient(180deg, #141414 0%, #F5E6C8 100%)' }} />

        {/* ─── IDENTITÀ ─── */}
        <section className="py-24 md:py-32 relative" style={{ background: 'linear-gradient(180deg, #F5E6C8 0%, #EFE3C7 100%)' }}>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <img src={barberIdentity} alt="Identità barber shop online" loading="lazy" className="rounded-2xl w-full object-cover aspect-[4/3]" />
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.15}>
                <p className="text-[#C8A96A] uppercase tracking-[0.2em] text-sm font-semibold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Identità</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-[-0.02em] text-[#1A1A1A]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Un'identità forte, anche online
                </h2>
                <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">
                  Un barber non vende solo un servizio. Vende immagine.<br />
                  Il sito deve trasmetterlo subito, senza spiegazioni inutili.
                </p>
                <p className="text-[#C8A96A] italic text-base">
                  Una struttura pensata per presentarti al meglio e far capire subito chi sei.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Transition fade light→dark */}
        <div className="h-4 md:h-6" style={{ background: 'linear-gradient(180deg, #EFE3C7 0%, #0B0B0B 100%)' }} />

        {/* ─── SERVIZI ─── */}
        <section className="py-24 md:py-32 bg-[#0B0B0B]">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[#C8A96A] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Servizi</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-[-0.02em] text-white" style={headingStyle}>
                Cosa offri ai tuoi clienti
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-3 gap-10" staggerDelay={0.12}>
              {[
                { img: barberCut, title: 'Taglio Uomo', desc: 'Linee pulite, stile classico o moderno, attenzione al dettaglio.' },
                { img: barberBeard, title: 'Barba e Rasatura', desc: 'Trattamenti curati, per un risultato preciso e professionale.' },
                { img: barberStyling, title: 'Styling', desc: 'Prodotti e consigli per mantenere il look anche fuori dal negozio.' },
              ].map((s) => (
                <StaggerItem key={s.title}>
                  <div className="group rounded-2xl overflow-hidden bg-[#121212] border border-[hsl(0,0%,15%)] hover:border-[#C8A96A] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(200,169,106,0.18)] hover:-translate-y-1">
                    <div className="overflow-hidden aspect-[4/3]">
                      <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white" style={headingStyle}>{s.title}</h3>
                      <p className="text-[#BFBFBF] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <AnimatedSection delay={0.4}>
              <p className="text-center text-[#BFBFBF] mt-12 max-w-xl mx-auto">
                Una presentazione semplice e ordinata aiuta il cliente a scegliere più velocemente.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── GALLERIA ─── */}
        <section className="py-28 md:py-36 bg-[#121212]">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[#C8A96A] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-[-0.02em] text-white" style={headingStyle}>
                I risultati parlano
              </h2>
              <p className="text-center text-[#BFBFBF] text-lg max-w-2xl mx-auto mb-12">
                Quando il lavoro è fatto bene, si vede. Il sito serve anche a questo: mostrare quello che sai fare.
              </p>
            </AnimatedSection>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" staggerDelay={0.08}>
              {galleryImages.map((img, i) => (
                <StaggerItem key={i}>
                  <button
                    onClick={() => openLightbox(i)}
                    className="block w-full overflow-hidden rounded-xl md:rounded-2xl group focus:outline-none focus:ring-2 focus:ring-[#C8A96A] focus:ring-offset-2 focus:ring-offset-[#121212]"
                    aria-label={`Apri ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <BarberLightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />

        {/* Transition fade dark→light */}
        <div className="h-4 md:h-6" style={{ background: 'linear-gradient(180deg, #121212 0%, #F5E6C8 100%)' }} />

        {/* ─── BREAK COMMERCIALE (GIGA FONT) ─── */}
        <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5E6C8 0%, #EFE3C7 100%)' }}>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-bold leading-none select-none pointer-events-none text-[#1A1A1A]" style={{ fontFamily: "'Oswald', sans-serif" }}>✂</div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-10 leading-[0.92] tracking-[-0.03em] text-[#1A1A1A]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Vuoi un sito così per il tuo barber shop?
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10 text-left" staggerDelay={0.1}>
              {[
                'Design pulito e moderno',
                'Struttura pensata per essere trovata su Google',
                'Contatto diretto tramite WhatsApp',
                'Esperienza semplice per chi visita il sito',
              ].map((p) => (
                <StaggerItem key={p}>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C8A96A] mt-0.5 shrink-0" />
                    <span className="text-lg text-[#4A4A4A]">{p}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <AnimatedSection delay={0.5}>
              <a href="#contatti-barber" onClick={scrollToContatti}
                className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-[#0B0B0B] text-[#F5E6C8] font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg">
                Parliamone senza impegno <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Transition fade light→dark */}
        <div className="h-4 md:h-6" style={{ background: 'linear-gradient(180deg, #EFE3C7 0%, #0B0B0B 100%)' }} />

        {/* ─── PROBLEMA ─── */}
        <section className="py-24 md:py-32 bg-[#0B0B0B]">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[#C8A96A] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Il problema</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-[-0.02em] text-white" style={headingStyle}>
                Perché molti barber faticano a trovare clienti online
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {[
                'Non compaiono su Google',
                'Si affidano solo ai social',
                'Non hanno un sito professionale',
                'Perdono opportunità ogni giorno',
              ].map((p) => (
                <StaggerItem key={p}>
                  <div className="flex items-start gap-4 bg-[#121212] border border-[hsl(0,0%,15%)] rounded-xl p-6">
                    <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                    <span className="text-lg text-[#BFBFBF]">{p}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ─── SOLUZIONE ─── */}
        <section className="relative py-36 md:py-48 overflow-hidden">
          {/* Parallax background */}
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center md:bg-fixed bg-scroll"
            style={{ backgroundImage: `url(${barberSolutionBg})` }}
            aria-hidden="true"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <AnimatedSection>
              <p className="text-[hsl(35,60%,60%)] uppercase tracking-[0.2em] text-sm font-semibold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>La soluzione</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-[-0.02em] text-white" style={{ ...headingStyle, textShadow: '0px 2px 8px rgba(0,0,0,0.6), 0px 0px 2px rgba(245,230,200,0.5)' }}>
                Un sito fatto bene cambia davvero le cose
              </h2>
              <p className="text-[hsl(0,0%,85%)] text-lg leading-relaxed" style={{ textShadow: '0px 1px 4px rgba(0,0,0,0.5)' }}>
                Un sito costruito con criterio ti permette di essere trovato, presentarti in modo professionale e ricevere contatti diretti.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── CONTATTI DEMO ─── */}
        <section className="py-28 md:py-36 bg-[#0B0B0B]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={0}>
                <div className="bg-[#121212] border border-[hsl(0,0%,15%)] rounded-2xl p-8 text-center hover:border-[#C8A96A] transition-all duration-300">
                  <MapPin className="w-8 h-8 text-[#C8A96A] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white" style={headingStyle}>Dove siamo</h3>
                  <p className="text-[#BFBFBF]">Via Roma 42, Milano</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-[#121212] border border-[hsl(0,0%,15%)] rounded-2xl p-8 text-center hover:border-[#C8A96A] transition-all duration-300">
                  <Clock className="w-8 h-8 text-[#C8A96A] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white" style={headingStyle}>Orari</h3>
                  <p className="text-[#BFBFBF]">Mar – Sab: 9:00 – 19:00</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-[#121212] border border-[hsl(0,0%,15%)] rounded-2xl p-8 text-center hover:border-[#C8A96A] transition-all duration-300">
                  <Phone className="w-8 h-8 text-[#C8A96A] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white" style={headingStyle}>Contatti</h3>
                  <p className="text-[#BFBFBF]">+39 351 465 6042</p>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.3}>
              <p className="text-center text-[#BFBFBF] mt-10 max-w-xl mx-auto">
                Tutto deve essere semplice: trovare il negozio, vedere gli orari, contattarti in un attimo.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Transition fade dark→light */}
        <div className="h-4 md:h-6" style={{ background: 'linear-gradient(180deg, #0B0B0B 0%, #F5E6C8 100%)' }} />

        {/* ─── OFFERTE ─── */}
        <section className="py-24 md:py-32 relative" style={{ background: 'linear-gradient(180deg, #F5E6C8 0%, #EFE3C7 100%)' }}>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[#C8A96A] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Prezzi</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-[-0.02em] text-[#1A1A1A]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Soluzioni per il tuo sito barber
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-3 gap-8 items-start" staggerDelay={0.12}>
              {[
                { title: 'Sito Base', desc: 'Sito professionale one page, completo e ottimizzato per mobile e contatti diretti.', price: 'Da 400€', highlight: false },
                { title: 'Sito Completo', desc: 'Più sezioni, struttura più ampia per presentare al meglio servizi e attività.', price: 'Da 700€', highlight: false },
                { title: 'Noleggio Operativo', desc: 'Sito completo senza investimento iniziale, con gestione inclusa.', price: '69€ al mese', highlight: true },
              ].map((o) => (
                <StaggerItem key={o.title}>
                  <div className={`rounded-2xl border transition-all duration-300 hover:scale-[1.02] relative ${o.highlight
                    ? 'bg-[#1A1A1A] border-[#C8A96A] shadow-[0_0_50px_rgba(200,169,106,0.25),0_8px_32px_rgba(0,0,0,0.3)] ring-2 ring-[#C8A96A]/40 p-10 md:-mt-4 md:mb-4'
                    : 'bg-white/60 border-[#D6B97B]/30 hover:border-[#C8A96A] backdrop-blur-sm p-8'
                    }`}>
                    {o.highlight && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-block text-xs uppercase tracking-[0.15em] font-bold text-[#1A1A1A] bg-gradient-to-r from-[#D6B97B] to-[#C8A96A] px-5 py-2 rounded-full shadow-[0_4px_16px_rgba(200,169,106,0.5)]">
                        ⭐ Più scelto
                      </span>
                    )}
                    <h3 className={`font-bold mb-3 ${o.highlight ? 'text-white text-3xl' : 'text-[#1A1A1A] text-2xl'}`} style={{ fontFamily: "'Oswald', sans-serif" }}>{o.title}</h3>
                    <p className={`leading-relaxed mb-6 ${o.highlight ? 'text-[#BFBFBF]' : 'text-[#4A4A4A]'}`}>{o.desc}</p>
                    <p className={`font-bold text-[#C8A96A] ${o.highlight ? 'text-5xl md:text-6xl' : 'text-3xl'}`} style={{ fontFamily: "'Oswald', sans-serif" }}>{o.price}</p>
                    {o.highlight && (
                      <p className="text-sm text-[#BFBFBF]/80 mt-2 font-medium">Senza investimento iniziale</p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <AnimatedSection delay={0.4}>
              <p className="text-center text-[#4A4A4A] mt-10 max-w-xl mx-auto mb-10">
                Scegliamo insieme la soluzione più adatta, in base a come lavori e a cosa ti serve davvero.
              </p>
              <div className="text-center">
                <a href="#contatti-barber" onClick={scrollToContatti}
                  className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-[#0B0B0B] text-[#F5E6C8] font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg">
                  Richiedi il tuo sito <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <p className="text-center text-[#4A4A4A] mt-4 text-sm">
                <Link to="/quanto-costa-sito-web" className="text-[#C8A96A] hover:underline">Scopri tutti i prezzi e pacchetti aggiornati 2026</Link>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Transition fade light→dark */}
        <div className="h-4 md:h-6" style={{ background: 'linear-gradient(180deg, #EFE3C7 0%, #0B0B0B 100%)' }} />

        {/* ─── FAQ ─── */}
        <section className="py-24 md:py-32 bg-[#0B0B0B]">
          <div className="max-w-3xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[#C8A96A] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-[-0.02em] text-white" style={headingStyle}>
                Domande frequenti
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  { q: 'Serve davvero un sito per un barber?', a: 'Sì, perché ti permette di farti trovare su Google e di presentarti in modo professionale.' },
                  { q: 'Instagram non basta?', a: 'Instagram è utile, ma non è tuo. Un sito è uno spazio tuo, dove il cliente trova tutto subito.' },
                  { q: 'Lavorate solo nella vostra zona?', a: 'No, lavoriamo con barber shop in tutta Italia e gestiamo tutto anche a distanza.' },
                  { q: 'Quanto tempo serve?', a: 'In pochi giorni il sito può essere online e già utilizzabile.' },
                ].map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-[hsl(0,0%,15%)] rounded-xl px-6 bg-[#121212]">
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline text-[hsl(0,0%,88%)]">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#BFBFBF] text-base leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <p className="text-center text-[#BFBFBF] mt-8 text-sm">
                <Link to="/creare-sito-con-intelligenza-artificiale" className="text-[#C8A96A] hover:underline">Confronta pro e contro dei siti creati con intelligenza artificiale</Link>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── CTA FINALE ─── */}
        <section className="py-28 md:py-40 bg-[#121212]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1] tracking-[-0.03em] text-white" style={headingStyle}>
                Vuoi un sito così anche per il tuo barber shop?
              </h2>
              <p className="text-[#BFBFBF] text-lg max-w-xl mx-auto mb-10">
                Scrivici e vediamo insieme la soluzione più adatta al tuo barber shop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg shadow-[0_4px_16px_hsl(142,70%,30%/0.4)]">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a href="#contatti-barber" onClick={scrollToContatti}
                  className="inline-flex items-center justify-center gap-3 border-2 border-[hsl(0,0%,30%)] hover:border-[#C8A96A] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg backdrop-blur-sm bg-white/5">
                  Richiedi informazioni <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-[#BFBFBF]/60 mt-5">Rispondiamo entro poche ore, senza impegno</p>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── FORM CONTATTI ─── */}
        <section id="contatti-barber" className="py-28 md:py-36 bg-[#0B0B0B]">
          <div className="max-w-3xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[#C8A96A] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Contattaci</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-[-0.02em] text-white" style={headingStyle}>
                Iniziamo a parlarne
              </h2>
              <p className="text-center text-[#BFBFBF] mb-12 max-w-md mx-auto">
                Compila il form e ti ricontattiamo noi, senza impegno.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ContactFormWeb3Forms />
            </AnimatedSection>
          </div>
        </section>

        {/* ─── LINK AL SITO PRINCIPALE ─── */}
        <div className="py-10 bg-[#0B0B0B] text-center">
          <p className="text-[hsl(0,0%,35%)] text-sm">
            Vuoi conoscere meglio 4 Web Lab?{' '}
            <Link to="/" className="text-[#C8A96A]/70 hover:text-[#C8A96A] transition-colors underline underline-offset-4 decoration-[#C8A96A]/30 hover:decoration-[#C8A96A]/60">
              Scopri di più sul nostro studio
            </Link>
          </p>
        </div>

        {/* ─── FOOTER MINI ─── */}
        <footer className="py-8 border-t border-[hsl(0,0%,12%)]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[hsl(0,0%,40%)]">
            <p>© {new Date().getFullYear()} 4 Web Lab di Fullin Carlo — P.IVA 05765760284</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-[hsl(0,0%,70%)] transition-colors">Privacy</a>
              <a href="/cookie" className="hover:text-[hsl(0,0%,70%)] transition-colors">Cookie</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SitoWebBarber;
