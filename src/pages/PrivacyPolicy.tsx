import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
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
          <h1 className="heading-2">Privacy Policy</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container-section section-padding">
        <article className="prose prose-slate max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">1. Titolare del trattamento</h2>
            <p className="text-muted-foreground mb-4">
              Il Titolare del trattamento dei dati personali è:
            </p>
            {/* TODO: Inserire dati reali del titolare */}
            <address className="not-italic text-muted-foreground bg-muted p-4 rounded-lg">
              <strong>WebStudio S.r.l.</strong><br />
              Via Roma 123<br />
              20100 Milano (MI)<br />
              P.IVA: 00000000000<br />
              Email: privacy@webstudio.it
            </address>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">2. Dati raccolti</h2>
            <p className="text-muted-foreground mb-4">
              Il presente sito web raccoglie esclusivamente i seguenti dati:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
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

          <section className="mb-8">
            <h2 className="heading-3 mb-4">3. Finalità del trattamento</h2>
            <p className="text-muted-foreground mb-4">
              I dati personali sono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Rispondere alle richieste di informazioni e preventivi</li>
              <li>Fornire i servizi richiesti</li>
              <li>Adempiere agli obblighi di legge</li>
              <li>Garantire il corretto funzionamento del sito web</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">4. Base giuridica</h2>
            <p className="text-muted-foreground">
              Il trattamento dei dati si fonda sul consenso dell'interessato (art. 6.1.a GDPR) 
              espresso al momento del contatto, sull'esecuzione di un contratto o di misure precontrattuali 
              (art. 6.1.b GDPR), e sugli obblighi legali del titolare (art. 6.1.c GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">5. Conservazione dei dati</h2>
            <p className="text-muted-foreground">
              I dati personali sono conservati per il tempo strettamente necessario al conseguimento 
              delle finalità per cui sono stati raccolti, e comunque non oltre i termini previsti dalla legge.
              I dati di contatto sono conservati per un massimo di 24 mesi dall'ultima interazione.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 mb-4">6. Diritti dell'interessato</h2>
            <p className="text-muted-foreground mb-4">
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

          <section className="mb-8">
            <h2 className="heading-3 mb-4">7. Sicurezza</h2>
            <p className="text-muted-foreground">
              Il Titolare adotta misure di sicurezza tecniche e organizzative adeguate per proteggere 
              i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
              Il sito utilizza il protocollo HTTPS per garantire la cifratura delle comunicazioni.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-4">8. Modifiche alla Privacy Policy</h2>
            <p className="text-muted-foreground">
              Il Titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento, 
              dandone comunicazione agli utenti su questa pagina. Si consiglia di consultare periodicamente 
              questa pagina per verificare eventuali aggiornamenti.
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

export default PrivacyPolicy;
