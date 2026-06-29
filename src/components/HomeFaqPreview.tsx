import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const previewFaqs = [
  {
    question: "Quanto costa realizzare un sito web?",
    answer: (
      <>
        Il costo parte generalmente a partire da 199€ per una struttura one-page e aumenta in base a pagine, funzionalità e ottimizzazione SEO.
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
      "Un sito standard può essere realizzato in 2–4 settimane, a seconda della complessità e della rapidità nella consegna dei materiali.",
  },
  {
    question: "I siti web servono ancora nel 2026 con l'arrivo dell'AI?",
    answer: (
      <>
        Sì, oggi più che mai: gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano sui contenuti dei siti web per generare le risposte. Senza un sito autorevole, l'attività non viene citata.
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
                <p className="font-semibold text-foreground mb-1.5 text-base">{faq.question}</p>
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
