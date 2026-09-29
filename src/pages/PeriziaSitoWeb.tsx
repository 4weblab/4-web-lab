import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ContactFormPerizia from "@/components/ContactFormPerizia";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PAGE_URL = "https://4weblab.it/perizia-sito-web";
const TITLE = "Perizia sito web: analisi tecnica indipendente | 4 Web Lab";
const DESCRIPTION =
  "Scopri cosa non funziona nel tuo sito. Analisi tecnica sito web: report scritto, prezzo fisso, da 219 € + IVA.";
const anchorStyle = { scrollMarginTop: "var(--header-height)" } as const;

const whenCards = [
  { t: "Avete pagato un sito e volete capire se è fatto bene.", d: "Non sapete se quello che vi hanno consegnato è un lavoro solido o una scorciatoia. La perizia ve lo dice." },
  { t: "Il sito non porta contatti.", d: "Ricevete qualche visita, ma nessuno chiama. Il problema è il sito, il prezzo, o il prodotto? Scopritelo." },
  { t: "Google non trova il vostro sito.", d: "Quando cercate il vostro nome, il sito non compare. O compare ma in fondo. La perizia identifica i blocchi." },
  { t: "Volete rifarlo ma non sapete se serve.", d: "Rifare un sito costa. Prima di investire, volete essere sicuri che il problema sia il sito e non altro. Giustissimo." },
  { t: "Avete cambiato agenzia.", d: "La nuova agenzia dice che il vecchio lavoro è un disastro. Una perizia indipendente vi dà un quadro chiaro." },
  { t: "Sospettate problemi tecnici.", d: "Il sito è lento, bugga su mobile, perde visitatori. Non sapete se è l'hosting, il codice, o il browser. La perizia lo scopre." },
  { t: "Volete capire cosa vi è stato consegnato.", d: "Chi è proprietario del dominio? Dove è hostato? Il codice è vostro o dell'agenzia? La perizia lo verifica e lo documenta." },
  { t: "Volete valutare un sito prima di comprarlo.", d: "Un sito in vendita potrebbe avere problemi nascosti. Una perizia vi dice il vero costo di farlo funzionare." },
];

const checksBoth = ["Struttura tecnica", "Indicizzazione", "SEO on-page essenziale", "Velocità e prestazioni", "Versione mobile", "Esperienza d'uso", "Conversione", "Proprietà e accessi"];
const checksPremium = ["Analisi HTML/CSS/JS", "Dati strutturati", "Canonical, sitemap, robots", "Analytics e tracciamenti", "Sicurezza di base"];

const plans = [
  {
    key: "essential",
    name: "Essential",
    price: "219 € + IVA",
    sub: "La diagnosi rapida, solo dall'esterno. Non servono accessi.",
    items: ["Analisi dall'URL", "Aree principali", "Proprietà e accessi (verifica di base)", "5 problemi che contano", "Consegna in 5 giorni lavorativi"],
    cta: "Richiedi Essential",
    featured: false,
  },
  {
    key: "premium",
    name: "Premium",
    price: "499 € + IVA",
    sub: "L'analisi completa. Serve accesso a Search Console e Analytics.",
    items: ["Tutto quello dell'Essential", "Analisi tecnica profonda", "Dati strutturati", "Canonical e robots", "Analytics", "Sicurezza", "Piano d'azione con stime", "Consegna in 7 giorni lavorativi"],
    cta: "Richiedi Premium",
    featured: true,
  },
];

const steps = [
  "Compilate il form con l'URL del vostro sito.",
  "Vi rispondiamo entro 24 ore per una prima rapida consulenza.",
  "Procediamo all'analisi e prepariamo il report.",
  "Ricevete il report assieme ad una call di consegna.",
];

const afterCards = [
  { t: "Continuate da soli", d: "Il report è vostro: potete condividerlo con il vostro team, portarlo all'agenzia che vi segue oppure a un'altra per chiedere un preventivo. Molti clienti intervengono per gradi, partendo dai punti più urgenti e proseguendo man mano che il budget lo permette." },
  { t: "Facciamo i lavori insieme", d: "Se il report indica, per esempio, che alcune pagine non vengono indicizzate da Google e volete risolvere, ogni intervento riceve una quotazione separata. Non c'è nessun contratto a lungo termine: potete cominciare da un solo intervento, valutare il risultato e decidere se proseguire. Se preferite aspettare, ci ricontattate quando volete." },
  { t: "Rifacciamo il sito", d: "Se il report conclude che i problemi partono dalla struttura e conviene ripartire da una base nuova, potete valutare il rifacimento con noi, con un preventivo pensato per il vostro caso. Se invece il sito è in buone condizioni e il problema è altrove (l'offerta, i prezzi, il modo di comunicare), il report lo scrive chiaramente: non vi proponiamo un rifacimento che non serve." },
];

const trust = [
  { t: "1. Il report è vostro. Indipendente.", d: "Il report è un documento indipendente: descrive cosa non funziona e come si corregge, senza indicare a chi affidare i lavori. Potete usarlo con noi, portarlo a un'altra agenzia per chiedere un preventivo o consegnarlo al vostro sviluppatore. Non c'è nessun obbligo di acquistare altro da 4 Web Lab: la perizia si chiude con la consegna del report, il resto lo decidete voi." },
  { t: "2. Il prezzo non cambia. Non ci sono sorprese.", d: "Essential costa 219 € + IVA, Premium 499 € + IVA. È la cifra che pagate, senza supplementi a lavoro iniziato. Se un sito ha dimensioni fuori dal normale e l'analisi richiede più tempo del previsto, ve lo comunichiamo prima di cominciare e decidete voi come procedere." },
  { t: "3. Il metodo è una checklist, non un'opinione.", d: "Ogni area del sito viene valutata con una checklist fissa e riceve un esito chiaro: ok, da migliorare o critico. Per ogni voce il report indica cosa abbiamo verificato, con quale criterio e quale risultato ne è derivato. In questo modo potete ricostruire come siamo arrivati alle conclusioni, contestarle o farle verificare a un altro professionista." },
];

const faqs = [
  { q: "Cos'è la perizia del sito web di 4 Web Lab?", a: "Un'analisi tecnica scritta di un sito esistente. Vi dice cosa funziona, cosa no, e cosa fare per primo. Non è una perizia giurata, non ha valore legale." },
  { q: "È la stessa cosa di un audit SEO?", a: "Un audit SEO guarda il posizionamento. La perizia guarda la salute tecnica, la user experience e la conversione. Si incrociano, ma non sono la stessa cosa." },
  { q: "Serve l'accesso al sito per fare la perizia Essential?", a: "No. Noi guardiamo da fuori con l'URL. Per il Premium ci servono Search Console e Analytics (opzionale ma consigliato)." },
  { q: "Quali accessi vi servono per il Premium?", a: "Idealmente Search Console e Google Analytics. Se non li avete, possiamo comunque fare l'analisi senza. Conta di meno, ma fattibile." },
  { q: "Quanto tempo serve?", a: "Essential: 5 giorni lavorativi dalla conferma. Premium: 7 giorni lavorativi dalla conferma." },
  { q: "Il report è riservato?", a: "Sì. Nessuno sa che l'avete fatto. Potete tenerlo privato o condividerlo con chi volete." },
  { q: "Se il mio sito va bene, me lo dite?", a: "Sì. Esplicitamente. Se va bene, il problema è altro (prezzo, prodotto, comunicazione, mercato). Non ci conviene dirvi il contrario." },
  { q: "Potete farmi un preventivo per i lavori?", a: "Sì. Nel Premium è incluso un piano con stime. Per l'Essential, facciamo un preventivo separato per ogni intervento che scegliete." },
  { q: "Potete eseguire voi i lavori?", a: "Sì, per gli interventi tecnici sul sito. Per lavori di programmazione complessi dipende da budget e tempi." },
];

const offer = (name: string, price: string) => ({
  "@type": "Offer",
  name,
  url: PAGE_URL,
  priceCurrency: "EUR",
  price,
  availability: "https://schema.org/InStock",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    priceCurrency: "EUR",
    price,
    valueAddedTaxIncluded: false,
  },
});

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const PeriziaSitoWeb = () => {
  const navigate = useNavigate();

  const choosePlan = (key: string) => {
    navigate({ search: `?livello=${key}` }, { replace: true, preventScrollReset: true });
    setTimeout(() => scrollToId("richiedi-perizia"), 0);
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://4weblab.it/og-image.webp" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://4weblab.it/og-image.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
                  { "@type": "ListItem", position: 2, name: "Perizia sito web", item: PAGE_URL },
                ],
              },
              {
                "@type": "Service",
                "@id": `${PAGE_URL}#service`,
                name: "Perizia del sito web",
                serviceType: "Perizia tecnica del sito web",
                provider: { "@id": "https://4weblab.it/#business" },
                areaServed: { "@type": "Country", name: "Italia" },
                url: PAGE_URL,
                inLanguage: "it-IT",
                isPartOf: { "@id": "https://4weblab.it/#website" },
                offers: [offer("Essential", "219"), offer("Premium", "499")],
              },
            ],
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)] overflow-x-hidden">
        {/* 1) Hero */}
        <section className="page-hero">
          <div className="container-section relative z-10">
            <div className="max-w-3xl mx-auto">
              <PageBreadcrumb items={[{ label: "Home", to: "/" }, { label: "Perizia sito web" }]} />
              <h1 className="heading-1 mb-6 font-extrabold tracking-tight text-primary-foreground text-balance">
                Perizia del sito web. Scopri cosa non funziona e come ripararlo.
              </h1>
              <p className="body-large text-primary-foreground/80 mb-4 text-balance">
                I tool gratuiti vi dicono che avete 50 errori. Noi vi diciamo quali impattano davvero sul vostro
                rendimento e come risolverli. Report scritto, prezzo fisso, entro 7 giorni.
              </p>
              <p className="text-xs text-primary-foreground/60 mb-8">Perizia tecnica indipendente, non forense.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => scrollToId("richiedi-perizia")}
                  className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4">
                  Richiedi la perizia
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button onClick={() => scrollToId("cosa-controlliamo")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors">
                  Gli step dell'analisi
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2) Definizione */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-accent/5 border border-accent/15">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  La perizia del sito web di 4 Web Lab è un'analisi tecnica completa di un sito esistente.
                </strong>{" "}
                Analizziamo struttura, indicizzazione, prestazioni, esperienza utente e capacità di convertire
                visitatori in clienti. Vi consegniamo un report scritto con i problemi trovati, ordinati per impatto:
                dai bloccanti ai secondari, e relative soluzioni. Lavoriamo a distanza in tutta Italia.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 3) Quando serve */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section max-w-5xl mx-auto">
            <AnimatedSection><h2 className="heading-2 mb-10 text-center">Quando conviene far verificare il vostro sito</h2></AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 gap-4">
              {whenCards.map((c) => (
                <StaggerItem key={c.t}>
                  <div className="card-glass p-6 h-full">
                    <p className="font-bold text-foreground mb-1">{c.t}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 4) Cosa controlliamo */}
        <section id="cosa-controlliamo" style={anchorStyle} className="section-padding bg-background">
          <div className="container-section max-w-5xl mx-auto">
            <AnimatedSection><h2 className="heading-2 mb-10 text-center">Cosa controlliamo nel vostro sito</h2></AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection>
                <p className="font-bold text-foreground mb-4">Presente in entrambi i livelli</p>
                <ul className="space-y-2">
                  {checksBoth.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />{c}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="font-bold text-foreground mb-4">Nel Premium si aggiungono</p>
                <ul className="space-y-2">
                  {checksPremium.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-muted-foreground">
                      <Plus className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />{c}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
            <p className="text-sm text-muted-foreground mt-8 text-center">
              Sui cookie e privacy verifichiamo solo che banner e pagine esistano, non esprimiamo pareri legali.
            </p>
          </div>
        </section>

        {/* 5) Cosa ricevi */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="heading-2 mb-8 text-center">Cosa trovi nel report</h2>
              <ul className="space-y-3 mb-8">
                {["Punteggio per ogni area", "Problemi ordinati per gravità (ok / da migliorare / critico)", "Priorità di intervento in ordine di impatto"].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />{p}
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-foreground text-center">Un report che potete consegnare a qualsiasi agenzia.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* 6) Prezzi */}
        <section id="prezzi" style={anchorStyle} className="section-padding bg-background">
          <div className="container-section max-w-5xl mx-auto">
            <AnimatedSection><h2 className="heading-2 mb-10 text-center">Scegli il livello di perizia</h2></AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {plans.map((p) => (
                <AnimatedSection key={p.key}
                  className={`card-glass p-8 flex flex-col h-full ${p.featured ? "border-2 border-accent" : ""}`}>
                  {p.featured && (
                    <span className="self-start mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
                      Per chi deve decidere se rifare il sito
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                  <p className="text-3xl font-extrabold text-foreground my-3">{p.price}</p>
                  <p className="text-sm text-muted-foreground mb-6">{p.sub}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />{i}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => choosePlan(p.key)} className="btn-primary w-full inline-flex items-center justify-center gap-2">
                    {p.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </AnimatedSection>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center">
              Prezzi IVA esclusa. Perizia tecnica indipendente, non forense.
            </p>
          </div>
        </section>

        {/* 7) Come funziona */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section max-w-3xl mx-auto">
            <AnimatedSection><h2 className="heading-2 mb-8 text-center">Come funziona</h2></AnimatedSection>
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="icon-box w-10 h-10 shrink-0 font-bold text-accent-foreground">{i + 1}</span>
                  <p className="text-muted-foreground pt-2">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 8) Dopo la perizia */}
        <section className="section-padding bg-background">
          <div className="container-section max-w-6xl mx-auto">
            <AnimatedSection><h2 className="heading-2 mb-10 text-center">E dopo la perizia?</h2></AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {afterCards.map((c) => (
                <StaggerItem key={c.t}>
                  <div className="card-glass p-6 h-full">
                    <h3 className="font-bold text-foreground mb-2">{c.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 9) Perché fidarvi */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section max-w-3xl mx-auto">
            <AnimatedSection><h2 className="heading-2 mb-8 text-center">Perché potete fidarvi di noi</h2></AnimatedSection>
            <div className="space-y-8">
              {trust.map((b) => (
                <AnimatedSection key={b.t}>
                  <h3 className="font-bold text-foreground mb-2">{b.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.d}</p>
                </AnimatedSection>
              ))}
              <AnimatedSection>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Bonus: un report d'esempio pubblico.</strong> Qui sotto vedrete uno
                  screenshot anonimizzato di un nostro report. Quando vedrete questo report reale, capirete esattamente
                  come è strutturato il vostro, che linguaggio usiamo, quanto è tecnico, quanto è comprensibile.
                </p>
                {/* TODO: sostituire questo segnaposto con l'immagine (WebP con width/height) dello screenshot anonimizzato del report, oppure con un link al PDF d'esempio, prima della pubblicazione. */}
                <div id="report-esempio" style={anchorStyle}
                  className="mt-6 rounded-2xl border-2 border-dashed border-border p-10 text-center text-muted-foreground">
                  [SEGNAPOSTO – report d'esempio da inserire]
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 10) FAQ */}
        <section className="section-padding bg-background">
          <div className="container-section max-w-3xl mx-auto">
            <AnimatedSection><h2 className="heading-2 mb-8 text-center">Domande frequenti</h2></AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-white px-6 transition-all duration-300 hover:border-accent/15">
                  <AccordionTrigger className="text-left py-5 hover:no-underline">
                    <h3 className="font-semibold text-foreground text-base pr-4">{faq.q}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 11) Zone */}
        <section className="py-10" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section text-center">
            <p className="text-muted-foreground">
              Lavoriamo a distanza per tutta l'Italia. Niente costi aggiuntivi per la geografia.
            </p>
          </div>
        </section>

        {/* 12) Form */}
        <section id="richiedi-perizia" style={{ ...anchorStyle, background: "var(--gradient-hero)" }} className="section-padding">
          <div className="container-section max-w-2xl mx-auto">
            <AnimatedSection className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 sm:p-8">
              <h2 className="heading-2 text-primary-foreground mb-6">Richiedi maggiori informazioni</h2>
              <ContactFormPerizia />
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PeriziaSitoWeb;
