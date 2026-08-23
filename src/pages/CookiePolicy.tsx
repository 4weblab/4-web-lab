import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { openPreferences } from '@/lib/consent';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = 'Cookie Policy | 4 Web Lab';
  const pageDescription = "Informativa sull'utilizzo dei cookie nel sito di 4 Web Lab: cookie tecnici e, previo consenso, cookie statistici Google Analytics 4.";
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
      <header className="page-hero">
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
                Il presente sito web utilizza <strong>cookie tecnici</strong> strettamente necessari al funzionamento
                del sito e, <strong>previo consenso dell'utente</strong>, <strong>cookie statistici di terze parti</strong>
                {' '}(Google Analytics 4) per misurare in forma aggregata l'utilizzo del sito.
                Non sono presenti cookie di profilazione o di marketing.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border/40" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <table className="w-full border-collapse text-sm min-w-[520px]">
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
                      <td className="p-4">cookie-consent-v1</td>
                      <td className="p-4">Tecnico (localStorage)</td>
                      <td className="p-4">Memorizza le scelte dell'utente sul banner cookie (categorie accettate/rifiutate)</td>
                      <td className="p-4">6 mesi</td>
                    </tr>
                    <tr>
                      <td className="p-4">web3forms_last_send</td>
                      <td className="p-4">Tecnico (localStorage)</td>
                      <td className="p-4">Protezione anti-spam del modulo di contatto (limite di 1 invio al minuto)</td>
                      <td className="p-4">Persistente (fino a cancellazione manuale)</td>
                    </tr>
                    <tr>
                      <td className="p-4">_ga</td>
                      <td className="p-4">Statistica — terza parte (Google)</td>
                      <td className="p-4">Identifica in modo pseudonimo l'utente per Google Analytics 4 (misurazione aggregata del traffico)</td>
                      <td className="p-4">2 anni</td>
                    </tr>
                    <tr>
                      <td className="p-4">_ga_&lt;container-id&gt;</td>
                      <td className="p-4">Statistica — terza parte (Google)</td>
                      <td className="p-4">Mantiene lo stato di sessione per la property Google Analytics 4</td>
                      <td className="p-4">2 anni</td>
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
              <h2 className="heading-3 mb-4">Cookie statistici — Google Analytics 4</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Il sito può utilizzare <strong>Google Analytics 4</strong>, uno strumento di analisi web fornito
                da <strong>Google Ireland Limited</strong> (Gordon House, Barrow Street, Dublino 4, Irlanda),
                per raccogliere in forma aggregata e pseudonima informazioni su come i visitatori interagiscono
                con il sito (pagine viste, tempo di permanenza, dispositivo, sorgente di traffico).
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                <strong>ID misurazione:</strong> <code>G-HWVJ1KWYSN</code>. Il tag di Google è
                caricato tramite <strong>Google Consent Mode v2</strong> con stato predefinito
                <em> denied</em>: nessun cookie <em>_ga</em> / <em>_ga_HWVJ1KWYSN</em> viene
                scritto finché non presti consenso ai cookie statistici tramite il banner.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
                <li>
                  <strong>Finalità:</strong> misurazione statistica del traffico e miglioramento
                  dell'esperienza utente.
                </li>
                <li>
                  <strong>Base giuridica:</strong> consenso dell'utente ai sensi dell'art. 122 del
                  Codice Privacy e delle Linee guida del Garante del 10 giugno 2021, nonché
                  art. 6.1.a GDPR.
                </li>
                <li>
                  <strong>Dati trattati:</strong> identificatori pseudonimi (cookie <em>_ga</em>,{' '}
                  <em>_ga_&lt;container-id&gt;</em>), indirizzo IP <strong>anonimizzato</strong>
                  {' '}(GA4 non memorizza né registra l'IP completo), informazioni tecniche sul
                  browser e sul dispositivo, eventi di navigazione.
                </li>
                <li>
                  <strong>Trasferimento extra-UE:</strong> i dati possono essere trasferiti negli
                  Stati Uniti. Google LLC aderisce all'<em>EU-U.S. Data Privacy Framework</em> e
                  ha adottato le <em>Clausole Contrattuali Standard</em> approvate dalla Commissione
                  Europea, oltre a misure tecniche e organizzative supplementari.
                </li>
                <li>
                  <strong>Conservazione:</strong> 14 mesi (impostazione minima consigliata) per i
                  dati a livello utente/evento; i cookie <em>_ga</em> hanno durata 2 anni salvo
                  rinnovo o cancellazione.
                </li>
                <li>
                  <strong>Profilazione:</strong> le funzioni pubblicitarie di Google Analytics
                  (Google Signals, remarketing, condivisione dati con Google Ads) <strong>non sono
                  attive</strong>. Il servizio è configurato in modalità puramente statistica.
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Per maggiori informazioni:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  Informativa privacy di Google
                </a>
                {' · '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  Componente di opt-out del browser
                </a>
                .
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">Revoca e modifica del consenso</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Puoi modificare o revocare in qualsiasi momento le tue preferenze sui cookie
                statistici. La revoca ha effetto immediato e non pregiudica la liceità del
                trattamento avvenuto prima della revoca stessa.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
                <li>
                  <strong>Icona flottante</strong> (biscotto) sempre visibile in basso a sinistra
                  su ogni pagina del sito.
                </li>
                <li>
                  Link <strong>"Gestisci cookie"</strong> nel piè di pagina di ogni pagina.
                </li>
                <li>
                  <button
                    type="button"
                    onClick={openPreferences}
                    className="text-accent hover:underline font-medium"
                  >
                    Apri ora il pannello preferenze
                  </button>
                  .
                </li>
                <li>
                  Eliminazione dei cookie direttamente dalle impostazioni del browser
                  (vedi sezione seguente).
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Il consenso ha una durata massima di 6 mesi: allo scadere, o quando la Cookie
                Policy viene aggiornata in modo sostanziale, il banner ti verrà nuovamente
                proposto.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">Gestione dei cookie dal browser</h2>
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
                <strong>Nota:</strong> la disabilitazione dei cookie tecnici potrebbe compromettere
                il corretto funzionamento del sito web.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-3 mb-4">Base giuridica</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>Cookie tecnici:</strong> non richiedono il consenso dell'utente ai sensi
                dell'art. 122, comma 1, del Codice Privacy e delle Linee guida del Garante per la
                protezione dei dati personali in materia di cookie e altri strumenti di tracciamento
                (10 giugno 2021), in quanto strettamente necessari all'erogazione del servizio
                richiesto.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Cookie statistici di terze parti (Google Analytics 4):</strong> vengono
                installati esclusivamente <strong>previo consenso esplicito, libero, specifico e
                informato</strong> dell'utente, prestato tramite il banner cookie (art. 122 Codice
                Privacy e art. 6.1.a GDPR). Il consenso è documentato tramite la registrazione
                puntuale delle scelte e delle relative marche temporali sul dispositivo dell'utente.
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