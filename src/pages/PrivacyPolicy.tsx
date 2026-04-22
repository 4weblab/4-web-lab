import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = 'Privacy Policy | 4 Web Lab';
  const pageDescription = 'Informativa sul trattamento dei dati personali di 4 Web Lab, ai sensi del GDPR. Scopri come raccogliamo e utilizziamo i tuoi dati.';
  const pageUrl = 'https://4weblab.it/privacy';
  const pageImage = 'https://4weblab.it/og-image.jpg';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      {/* Header */}
      <header className="relative overflow-hidden py-10" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0 bg-accent/5 blur-[100px]" aria-hidden="true" />
        <div className="container-section relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 mb-5"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>
          <h1 className="heading-1 text-primary-foreground">Privacy Policy</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container-section section-padding">
        <AnimatedSection>
          <article className="prose prose-slate max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">1. Titolare del trattamento</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Il Titolare del trattamento dei dati personali è:
              </p>
              <address className="not-italic text-muted-foreground p-5 rounded-2xl border border-border/40 leading-relaxed" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(8px)' }}>
                <strong>4 Web Lab di Fullin Carlo</strong><br />
                Via Belluno 44<br />
                35020 Legnaro (PD)<br />
                P.IVA: 05765760284<br />
                Email: info@4weblab.it
              </address>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">2. Dati raccolti</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Il presente sito web raccoglie esclusivamente i seguenti dati:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                <li>
                  <strong>Dati di navigazione:</strong> informazioni tecniche acquisite automaticamente dal server
                  (indirizzo IP anonimizzato, tipo di browser, sistema operativo, orario di accesso).
                  Questi dati sono utilizzati esclusivamente per finalità statistiche aggregate e anonime.
                </li>
                <li>
                  <strong>Dati forniti volontariamente:</strong> eventuali dati personali comunicati dall'utente
                  tramite il contatto WhatsApp (nome, numero di telefono, contenuto dei messaggi).
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">3. Finalità del trattamento</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I dati personali sono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Rispondere alle richieste di informazioni e preventivi</li>
                <li>Fornire i servizi richiesti</li>
                <li>Adempiere agli obblighi di legge</li>
                <li>Garantire il corretto funzionamento del sito web</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">4. Base giuridica</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il trattamento dei dati si fonda sul consenso dell'interessato (art. 6.1.a GDPR)
                espresso al momento del contatto, sull'esecuzione di un contratto o di misure precontrattuali
                (art. 6.1.b GDPR), e sugli obblighi legali del titolare (art. 6.1.c GDPR).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">5. Conservazione dei dati</h2>
              <p className="text-muted-foreground leading-relaxed">
                I dati personali sono conservati per il tempo strettamente necessario al conseguimento
                delle finalità per cui sono stati raccolti, e comunque non oltre i termini previsti dalla legge.
                I dati di contatto sono conservati per un massimo di 24 mesi dall'ultima interazione.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">6. Diritti dell'interessato</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Ai sensi degli articoli 15-22 del GDPR, l'interessato ha diritto di:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Accedere ai propri dati personali</li>
                <li>Ottenere la rettifica o la cancellazione dei dati</li>
                <li>Limitare il trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo all'Autorità Garante per la protezione dei dati personali</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Per esercitare i propri diritti, l'interessato può contattare il Titolare all'indirizzo
                email indicato nella sezione 1.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">7. Sicurezza</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il Titolare adotta misure di sicurezza tecniche e organizzative adeguate per proteggere
                i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
                Il sito utilizza il protocollo HTTPS per garantire la cifratura delle comunicazioni.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">8. Modifiche alla Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il Titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento,
                dandone comunicazione agli utenti su questa pagina. Si consiglia di consultare periodicamente
                questa pagina per verificare eventuali aggiornamenti.
              </p>
            </section>
          </article>
        </AnimatedSection>
      </main>

      {/* Footer link */}
      <footer className="py-8" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container-section text-center">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            ← Torna alla home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
