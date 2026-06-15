import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';
import PageBreadcrumb from '@/components/PageBreadcrumb';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = 'Cookie Policy | 4 Web Lab';
  const pageDescription = "Informativa sull'utilizzo dei cookie nel sito di 4 Web Lab. Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento.";
  const pageUrl = 'https://4weblab.it/cookie';
  const pageImage = 'https://4weblab.it/og-image.webp';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://4weblab.it/' },
              { '@type': 'ListItem', position: 2, name: 'Cookie Policy', item: 'https://4weblab.it/cookie' },
            ],
          })}
        </script>
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
          <PageBreadcrumb
            className="!mx-0 !justify-start !mb-5"
            items={[
              { label: 'Home', to: '/' },
              { label: 'Cookie Policy' },
            ]}
          />
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
                Il presente sito web <strong>non utilizza cookie HTTP di profilazione, di marketing o di terze parti</strong>.
                Vengono impiegati esclusivamente strumenti di archiviazione locale (<em>localStorage</em>) di natura
                tecnica, strettamente necessari al corretto funzionamento del sito e all'erogazione dei servizi richiesti
                dall'utente (es. memorizzazione del consenso e protezione anti-spam del modulo di contatto).
                Non sono presenti Google Analytics, Meta Pixel o altri sistemi di tracciamento.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border/40" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border-b border-border/40 p-4 text-left font-semibold">Nome</th>
                      <th className="border-b border-border/40 p-4 text-left font-semibold">Tipo</th>
                      <th className="border-b border-border/40 p-4 text-left font-semibold">Finalità</th>
                      <th className="border-b border-border/40 p-4 text-left font-semibold">Durata</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="p-4">cookie-consent-accepted</td>
                      <td className="p-4">Tecnico (localStorage)</td>
                      <td className="p-4">Memorizza l'accettazione del banner cookie</td>
                      <td className="p-4">Persistente (fino a cancellazione manuale)</td>
                    </tr>
                    <tr>
                      <td className="p-4">web3forms_last_send</td>
                      <td className="p-4">Tecnico (localStorage)</td>
                      <td className="p-4">Protezione anti-spam del modulo di contatto (limite di 1 invio al minuto)</td>
                      <td className="p-4">Persistente (fino a cancellazione manuale)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
                <strong>Servizi di terze parti:</strong> il sito carica i font tipografici da Google Fonts (solo CSS,
                senza impostazione di cookie) e invia i dati del modulo di contatto al servizio Web3Forms al momento
                dell'invio. L'hosting su Netlify potrebbe utilizzare cookie tecnici di bilanciamento del carico,
                esenti da consenso ai sensi della normativa vigente.
              </p>
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
                L’utilizzo dei cookie tecnici non richiede il consenso dell’utente ai sensi dell’art. 122,
                comma 1, del Codice Privacy e delle Linee guida del Garante per la protezione dei dati
                personali in materia di cookie e altri strumenti di tracciamento (10 giugno 2021), in
                quanto strettamente necessario all’erogazione del servizio richiesto.
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
