import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const previewFaqs = [
  {
    question: "Quanto costa realizzare un sito web?",
    answer: (
      <>
        Il costo per realizzare un sito web con 4 Web Lab parte da 199€ per i negozi locali. I pacchetti per professionisti partono da 549€, mentre i siti aziendali per PMI partono da 899€. Il prezzo varia in base al numero di pagine, alle funzionalità e all'ottimizzazione SEO/AEO richiesta.
        <br />
        <Link to="/blog/quanto-costa-un-sito-web-nel-2026" className="text-sm text-accent hover:underline inline-block mt-2">
          Leggi "Quanto costa un sito web nel 2026?"
        </Link>
      </>
    ),
  },
  {
    question: "In quanto tempo viene realizzato un sito web?",
    answer:
      "4 Web Lab realizza e pubblica un sito web in 2-4 settimane. Le tempistiche dipendono dalla complessità del progetto e dalla velocità nella consegna dei materiali; i siti monopagina o per negozi sono pronti in circa 14 giorni, mentre i progetti aziendali articolati richiedono 3-4 settimane.",
  },
  {
    question: "I siti web servono ancora nel 2026 con l'arrivo dell'AI?",
    answer: (
      <>
        Sì, i siti web sono fondamentali nell'era dell'AI. Gli AI Overviews di Google e gli assistenti come ChatGPT, Gemini e Perplexity si basano sui contenuti dei siti web autoritativi per generare le risposte. Un sito sviluppato da 4 Web Lab fornisce la struttura semantica necessaria per far sì che la tua attività venga consigliata e citata dalle chat IA.
        <br />
        <Link to="/posizionamento-google-e-ai" className="text-sm text-accent hover:underline inline-block mt-2">
          Scopri come funziona il posizionamento su Google e AI →
        </Link>
      </>
    ),
  },
];

const HomeFaqPreview = () => {
  return (
    <section id="faq" className="section-padding" style={{ background: "var(--gradient-surface)" }}>
      <div className="container-section">
        <AnimatedSection className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="icon-box w-11 h-11">
              <HelpCircle className="w-5 h-5 text-accent-foreground" aria-hidden="true" />
            </div>
            <h2 className="heading-2">Domande frequenti sulla realizzazione siti web</h2>
          </div>
          <p className="body-base text-muted-foreground mb-10 max-w-xl">
            Le domande più comuni su costi, tempi e scelte strategiche per la realizzazione di un sito web.
          </p>

          {/* FAQ preview list */}
          <div className="space-y-5 mb-10">
            {previewFaqs.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-border bg-background hover:border-accent/20 hover:bg-accent/2 transition-all duration-300"
              >
                <h3 className="font-semibold text-foreground mb-1.5 text-base">{faq.question}</h3>
                <div className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/faq-realizzazione-siti-web"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent/80 transition-colors duration-300 group"
          >
            Leggi tutte le domande frequenti (FAQ)
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HomeFaqPreview;
