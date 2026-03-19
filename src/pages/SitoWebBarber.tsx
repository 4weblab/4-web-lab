import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Scissors, MessageCircle, Phone, MapPin, Clock, Check, X, ChevronRight, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ContactFormWeb3Forms from '@/components/ContactFormWeb3Forms';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

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

const SitoWebBarber = () => {
  return (
    <>
      <Helmet>
        <title>Sito Web Barber Shop | Realizzazione Siti per Parrucchieri Uomo</title>
        <meta name="description" content="Realizziamo siti web per barber shop progettati per portare nuovi clienti. Lavoriamo con barber in tutta Italia." />
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
            <img src={barberHero} alt="Interno di un barber shop moderno" loading="eager" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.03em] max-w-4xl mb-8 text-white"
              style={headingStyle}
            >
              Sito Web per Barber Shop che porta nuovi clienti
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

        {/* ─── IDENTITÀ ─── */}
        <section className="py-28 md:py-36">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <img src={barberIdentity} alt="Identità barber shop online" loading="lazy" className="rounded-2xl w-full object-cover aspect-[4/3]" />
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.15}>
                <p className="text-[hsl(35,60%,60%)] uppercase tracking-[0.2em] text-sm font-semibold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>Identità</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-[-0.02em] text-white" style={headingStyle}>
                  Un'identità forte, anche online
                </h2>
                <p className="text-[hsl(0,0%,70%)] text-lg leading-relaxed mb-6">
                  Un barber non vende solo un servizio. Vende immagine.<br />
                  Il sito deve trasmetterlo subito, senza spiegazioni inutili.
                </p>
                <p className="text-[hsl(35,60%,55%)] italic text-base">
                  Una struttura pensata per presentarti al meglio e far capire subito chi sei.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ─── SERVIZI ─── */}
        <section className="py-28 md:py-36 bg-[hsl(0,0%,6%)]">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[hsl(35,60%,60%)] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Servizi</p>
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
                  <div className="group rounded-2xl overflow-hidden bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] hover:border-[hsl(35,60%,45%)] transition-all duration-300 hover:shadow-[0_8px_40px_hsl(35,60%,40%/0.18)] hover:-translate-y-1">
                    <div className="overflow-hidden aspect-[4/3]">
                      <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white" style={headingStyle}>{s.title}</h3>
                      <p className="text-[hsl(0,0%,60%)] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <AnimatedSection delay={0.4}>
              <p className="text-center text-[hsl(0,0%,55%)] mt-12 max-w-xl mx-auto">
                Una presentazione semplice e ordinata aiuta il cliente a scegliere più velocemente.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── GALLERIA ─── */}
        <section className="py-28 md:py-36">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[hsl(35,60%,60%)] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-[-0.02em] text-white" style={headingStyle}>
                I risultati parlano
              </h2>
              <p className="text-center text-[hsl(0,0%,65%)] text-lg max-w-2xl mx-auto mb-12">
                Quando il lavoro è fatto bene, si vede. Il sito serve anche a questo: mostrare quello che sai fare.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img src={barberGallery} alt="Galleria tagli barber shop" loading="lazy" className="rounded-2xl w-full object-cover" />
            </AnimatedSection>
          </div>
        </section>

        {/* ─── BREAK COMMERCIALE (GIGA FONT) ─── */}
        <section className="py-28 md:py-40 bg-[hsl(0,0%,5%)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-bold leading-none select-none pointer-events-none" style={{ fontFamily: "'Oswald', sans-serif" }}>✂</div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-16 leading-[0.95] tracking-[-0.03em] text-white" style={headingStyle}>
                Vuoi un sito così per il tuo barber shop?
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16 text-left" staggerDelay={0.1}>
              {[
                'Design pulito e moderno',
                'Struttura pensata per essere trovata su Google',
                'Contatto diretto tramite WhatsApp',
                'Esperienza semplice per chi visita il sito',
              ].map((p) => (
                <StaggerItem key={p}>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(35,60%,60%)] mt-0.5 shrink-0" />
                    <span className="text-lg text-[hsl(0,0%,80%)]">{p}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <AnimatedSection delay={0.5}>
              <a href="#contatti-barber" onClick={scrollToContatti}
                className="inline-flex items-center justify-center gap-3 bg-[hsl(35,60%,50%)] hover:bg-[hsl(35,60%,45%)] text-[hsl(0,0%,5%)] font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg">
                Parliamone senza impegno <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── PROBLEMA ─── */}
        <section className="py-28 md:py-36">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[hsl(35,60%,60%)] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Il problema</p>
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
                  <div className="flex items-start gap-4 bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] rounded-xl p-6">
                    <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                    <span className="text-lg text-[hsl(0,0%,75%)]">{p}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ─── SOLUZIONE ─── */}
        <section className="py-28 md:py-36 bg-[hsl(0,0%,6%)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <AnimatedSection>
              <p className="text-[hsl(35,60%,60%)] uppercase tracking-[0.2em] text-sm font-semibold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>La soluzione</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-[-0.02em] text-white" style={headingStyle}>
                Un sito fatto bene cambia davvero le cose
              </h2>
              <p className="text-[hsl(0,0%,65%)] text-lg leading-relaxed">
                Un sito costruito con criterio ti permette di essere trovato, presentarti in modo professionale e ricevere contatti diretti.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── CONTATTI DEMO ─── */}
        <section className="py-28 md:py-36">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={0}>
                <div className="bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] rounded-2xl p-8 text-center hover:border-[hsl(35,60%,40%)] transition-all duration-300">
                  <MapPin className="w-8 h-8 text-[hsl(35,60%,60%)] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white" style={headingStyle}>Dove siamo</h3>
                  <p className="text-[hsl(0,0%,55%)]">Via Roma 42, Milano</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] rounded-2xl p-8 text-center hover:border-[hsl(35,60%,40%)] transition-all duration-300">
                  <Clock className="w-8 h-8 text-[hsl(35,60%,60%)] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white" style={headingStyle}>Orari</h3>
                  <p className="text-[hsl(0,0%,55%)]">Mar – Sab: 9:00 – 19:00</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] rounded-2xl p-8 text-center hover:border-[hsl(35,60%,40%)] transition-all duration-300">
                  <Phone className="w-8 h-8 text-[hsl(35,60%,60%)] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2 text-white" style={headingStyle}>Contatti</h3>
                  <p className="text-[hsl(0,0%,55%)]">+39 351 465 6042</p>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.3}>
              <p className="text-center text-[hsl(0,0%,55%)] mt-10 max-w-xl mx-auto">
                Tutto deve essere semplice: trovare il negozio, vedere gli orari, contattarti in un attimo.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── OFFERTE ─── */}
        <section className="py-28 md:py-36 bg-[hsl(0,0%,6%)]">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[hsl(35,60%,60%)] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Prezzi</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-[-0.02em] text-white" style={headingStyle}>
                Soluzioni per il tuo sito barber
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
              {[
                { title: 'Sito Base', desc: 'Sito professionale one page, completo e ottimizzato per mobile e contatti diretti.', price: 'Da 400€', highlight: false },
                { title: 'Sito Completo', desc: 'Più sezioni, struttura più ampia per presentare al meglio servizi e attività.', price: 'Da 700€', highlight: false },
                { title: 'Noleggio Operativo', desc: 'Sito completo senza investimento iniziale, con gestione inclusa.', price: '69€ al mese', highlight: true },
              ].map((o) => (
                <StaggerItem key={o.title}>
                  <div className={`rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] relative ${o.highlight
                    ? 'bg-[hsl(35,60%,50%/0.1)] border-[hsl(35,60%,50%)] shadow-[0_0_40px_hsl(35,60%,50%/0.15)] ring-1 ring-[hsl(35,60%,50%/0.3)]'
                    : 'bg-[hsl(0,0%,10%)] border-[hsl(0,0%,15%)] hover:border-[hsl(35,60%,40%)]'
                    }`}>
                    {o.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-block text-xs uppercase tracking-wider font-bold text-[hsl(0,0%,5%)] bg-[hsl(35,60%,50%)] px-4 py-1.5 rounded-full shadow-[0_2px_12px_hsl(35,60%,50%/0.4)]">
                        ⭐ Più scelto
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-3 text-white" style={headingStyle}>{o.title}</h3>
                    <p className="text-[hsl(0,0%,60%)] leading-relaxed mb-6">{o.desc}</p>
                    <p className={`font-bold text-[hsl(35,60%,60%)] ${o.highlight ? 'text-4xl md:text-5xl' : 'text-3xl'}`} style={{ fontFamily: "'Oswald', sans-serif" }}>{o.price}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <AnimatedSection delay={0.4}>
              <p className="text-center text-[hsl(0,0%,55%)] mt-10 max-w-xl mx-auto mb-10">
                Scegliamo insieme la soluzione più adatta, in base a come lavori e a cosa ti serve davvero.
              </p>
              <div className="text-center">
                <a href="#contatti-barber" onClick={scrollToContatti}
                  className="inline-flex items-center justify-center gap-3 bg-[hsl(35,60%,50%)] hover:bg-[hsl(35,60%,45%)] text-[hsl(0,0%,5%)] font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg">
                  Richiedi il tuo sito <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-28 md:py-36">
          <div className="max-w-3xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[hsl(35,60%,60%)] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>FAQ</p>
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
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-[hsl(0,0%,15%)] rounded-xl px-6 bg-[hsl(0,0%,10%)]">
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline text-[hsl(0,0%,88%)]">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(0,0%,60%)] text-base leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── CTA FINALE ─── */}
        <section className="py-28 md:py-40 bg-[hsl(0,0%,5%)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1] tracking-[-0.03em] text-white" style={headingStyle}>
                Vuoi un sito così anche per il tuo barber shop?
              </h2>
              <p className="text-[hsl(0,0%,65%)] text-lg max-w-xl mx-auto mb-10">
                Scrivici e vediamo insieme la soluzione più adatta al tuo barber shop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg shadow-[0_4px_16px_hsl(142,70%,30%/0.4)]">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a href="#contatti-barber" onClick={scrollToContatti}
                  className="inline-flex items-center justify-center gap-3 border-2 border-[hsl(0,0%,40%)] hover:border-[hsl(35,60%,60%)] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-lg backdrop-blur-sm bg-white/5">
                  Richiedi informazioni <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── FORM CONTATTI ─── */}
        <section id="contatti-barber" className="py-28 md:py-36 bg-[hsl(0,0%,8%)]">
          <div className="max-w-3xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-[hsl(35,60%,60%)] uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>Contattaci</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-[-0.02em] text-white" style={headingStyle}>
                Iniziamo a parlarne
              </h2>
              <p className="text-center text-[hsl(0,0%,55%)] mb-12 max-w-md mx-auto">
                Compila il form e ti ricontattiamo noi, senza impegno.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ContactFormWeb3Forms />
            </AnimatedSection>
          </div>
        </section>

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
