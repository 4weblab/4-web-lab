import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Search, TrendingUp } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const services = [
  {
    icon: Search,
    title: "Posizionamento su Google e sulle IA",
    lead: "Trovato su Google, citato dalle IA.",
    body: "SEO, AEO e GEO in un solo metodo: sei ovunque le persone cercano oggi, da Google a ChatGPT.",
    linkLabel: "Scopri SEO, AEO e GEO",
    to: "/posizionamento-google-e-ai",
  },
  {
    icon: TrendingUp,
    title: "Campagne Google ADS",
    lead: "Clienti da subito, non tra sei mesi.",
    body: "Mentre il sito scala la classifica organica, le campagne ADS ti portano contatti fin dal primo giorno.",
    linkLabel: "Scopri Google ADS",
    to: "/pubblicita-google-ads",
  },
  {
    icon: MessageCircle,
    title: "Campagne ChatGPT Ads",
    lead: "Il tuo brand, dentro la conversazione.",
    body: "Compari mentre i clienti chiedono consiglio direttamente all'IA — un canale nuovo, ancora senza concorrenza.",
    linkLabel: "Scopri le Campagne ChatGPT",
    to: "/chatgpt-ads",
  },
];

const ExtraServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Oltre al sito: i servizi che accelerano i risultati</h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            Il sito è la base. Ecco cosa lo fa lavorare ancora di più per te.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.to}>
              <Link
                to={service.to}
                className="card-glass h-full flex flex-col items-start gap-4 group hover:-translate-y-1.5 transition-all duration-400"
              >
                <div className="icon-box w-13 h-13 flex-shrink-0">
                  <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-lg mb-1.5">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong className="text-foreground">{service.lead}</strong> {service.body}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm text-accent font-medium mt-auto">
                  {service.linkLabel}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ExtraServicesSection;
