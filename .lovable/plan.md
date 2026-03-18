

## Piano: Aggiungere nota privacy sotto ogni form di contatto

Aggiungere il testo GDPR in piccolo e bold sotto ogni istanza di `<ContactFormWeb3Forms />` in tutto il sito, con link alla Privacy Policy.

### Approccio

Inserire il testo direttamente nel componente `ContactFormWeb3Forms.tsx`, alla fine del form (dopo il bottone di invio). Così tutte le pagine che lo usano lo ereditano automaticamente senza modificare 5 file separati.

### Testo da inserire

> I dati inseriti verranno trattati e usati unicamente per rispondere alla tua richiesta di contatto (base giuridica: esecuzione di misure precontrattuali – art. 6.1.b GDPR). Titolare del trattamento: 4 Web Lab di Fullin Carlo – P.IVA 05765760284. Maggiori informazioni nella nostra [Privacy Policy](/privacy-policy).

### Dettaglio tecnico

- **File**: `src/components/ContactFormWeb3Forms.tsx`
- Aggiungere un `<p>` con classi `text-xs font-bold text-primary-foreground/50 mt-4` dopo il bottone submit
- "Privacy Policy" sarà un `<Link>` (react-router-dom) verso `/privacy-policy`
- Nessuna modifica agli altri file: tutte le 5 occorrenze (ContactSection, SitiWebProfessionisti, SitiWebPadova, SitiWebAziendali, CreareSitoConAI) riceveranno il testo automaticamente

