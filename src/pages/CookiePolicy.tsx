import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cookie Policy | 4 Web Lab</title>
        <meta name="description" content="Informativa sull'utilizzo dei cookie nel sito di 4 Web Lab. Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.4weblab.it/cookie" />
        <meta property="og:title" content="Cookie Policy | 4 Web Lab" />
        <meta property="og:url" content="https://www.4weblab.it/cookie" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Informativa sull'utilizzo dei cookie nel sito di 4 Web Lab. Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento." />
        <meta property="og:image" content="https://www.4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
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
          <h1 className="heading-1 text-primary-foreground">Cookie Policy</h1>
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
              <h2 className="heading-3 mb-4">Cosa sono i cookie</h2>
              <p className="text-muted-foreground leading-relaxed">
                I cookie sono piccoli file di testo che i siti web visitati inviano al dispositivo dell'utente,
                dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
                I cookie sono utilizzati per diverse finalità: esecuzione di autenticazioni informatiche,
                monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">Cookie utilizzati da questo sito</h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Il presente sito web utilizza <strong>esclusivamente cookie tecnici</strong>,
                necessari al corretto funzionamento del sito. Non vengono utilizzati cookie di profilazione
                o di terze parti per finalità di marketing.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border/40" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border-b border-border/40 p-4 text-left font-semibold">Cookie</th>
                      <th className="border-b border-border/40 p-4 text-left font-semibold">Tipo</th>
                      <th className="border-b border-border/40 p-4 text-left font-semibold">Finalità</th>
                      <th className="border-b border-border/40 p-4 text-left font-semibold">Durata</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="p-4">cookie-consent-accepted</td>
                      <td className="p-4">Tecnico</td>
                      <td className="p-4">Memorizza l'accettazione del banner cookie</td>
                      <td className="p-4">1 anno</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>


            <section className="mb-10">
              <h2 className="heading-3 mb-4">Gestione dei cookie</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                L'utente può gestire le proprie preferenze sui cookie direttamente dal proprio browser.
                Ecco i link alle guide per i browser più diffusi:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                {[
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop' },
                  { name: 'Safari', url: 'https://support.apple.com/it-it/guide/safari/sfri11471/mac' },
                  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
                ].map((browser) => (
                  <li key={browser.name}>
                    <a href={browser.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                      {browser.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Nota:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere
                il corretto funzionamento del sito web.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">Base giuridica</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'utilizzo dei cookie tecnici non richiede il consenso dell'utente ai sensi dell'art. 122,
                comma 1, del Codice Privacy e del Provvedimento del Garante dell'8 maggio 2014,
                in quanto strettamente necessari all'erogazione del servizio richiesto.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Contatti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Per qualsiasi domanda relativa alla presente Cookie Policy, l'utente può contattare
                il Titolare del trattamento ai recapiti indicati nella{' '}
                <Link to="/privacy" className="text-accent hover:underline font-medium">
                  Privacy Policy
                </Link>
                .
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

export default CookiePolicy;
