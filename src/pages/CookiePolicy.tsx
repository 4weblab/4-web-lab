import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container-section">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>
          <h1 className="heading-2">Cookie Policy</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container-section section-padding">
        <article className="prose prose-slate max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">Cosa sono i cookie</h2>
            <p className="text-muted-foreground">
              I cookie sono piccoli file di testo che i siti web visitati inviano al dispositivo dell'utente, 
              dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. 
              I cookie sono utilizzati per diverse finalità: esecuzione di autenticazioni informatiche, 
              monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">Cookie utilizzati da questo sito</h2>
            <p className="text-muted-foreground mb-4">
              Il presente sito web utilizza <strong>esclusivamente cookie tecnici</strong>, 
              necessari al corretto funzionamento del sito. Non vengono utilizzati cookie di profilazione 
              o di terze parti per finalità di marketing.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left font-semibold">Cookie</th>
                    <th className="border border-border p-3 text-left font-semibold">Tipo</th>
                    <th className="border border-border p-3 text-left font-semibold">Finalità</th>
                    <th className="border border-border p-3 text-left font-semibold">Durata</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3">cookie-consent-accepted</td>
                    <td className="border border-border p-3">Tecnico</td>
                    <td className="border border-border p-3">Memorizza l'accettazione del banner cookie</td>
                    <td className="border border-border p-3">1 anno</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">Cookie di terze parti</h2>
            <p className="text-muted-foreground mb-4">
              Il sito incorpora una mappa di Google Maps. Quando la mappa viene visualizzata, 
              Google potrebbe installare cookie tecnici necessari al funzionamento del servizio. 
              Per maggiori informazioni sui cookie utilizzati da Google, si rimanda alla relativa 
              informativa:{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google Privacy Policy
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">Gestione dei cookie</h2>
            <p className="text-muted-foreground mb-4">
              L'utente può gestire le proprie preferenze sui cookie direttamente dal proprio browser. 
              Ecco i link alle guide per i browser più diffusi:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <a 
                  href="https://support.google.com/chrome/answer/95647" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a 
                  href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a 
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a 
                  href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>Nota:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere 
              il corretto funzionamento del sito web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">Base giuridica</h2>
            <p className="text-muted-foreground">
              L'utilizzo dei cookie tecnici non richiede il consenso dell'utente ai sensi dell'art. 122, 
              comma 1, del Codice Privacy e del Provvedimento del Garante dell'8 maggio 2014, 
              in quanto strettamente necessari all'erogazione del servizio richiesto.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-4">Contatti</h2>
            <p className="text-muted-foreground">
              Per qualsiasi domanda relativa alla presente Cookie Policy, l'utente può contattare 
              il Titolare del trattamento ai recapiti indicati nella{' '}
              <Link to="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </article>
      </main>

      {/* Footer link */}
      <footer className="bg-muted py-6">
        <div className="container-section text-center">
          <Link 
            to="/" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Torna alla home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default CookiePolicy;
