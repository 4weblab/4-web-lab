import { Zap, CalendarCheck, Code2, MessageSquare } from 'lucide-react';

const items = [
  { icon: Zap, text: 'Il tuo sito carica prima che il cliente cambi idea' },
  { icon: CalendarCheck, text: 'Online e operativo in 2-4 settimane' },
  { icon: MessageSquare, text: 'Parli solo con chi scrive il tuo codice, mai con un centralino' },
  { icon: Code2, text: 'Zero costi nascosti di manutenzione, zero WordPress da aggiornare' },
];

const TrustBar = () => {
  return (
    <section aria-label="Punti di forza in sintesi" className="border-y border-border/50 bg-surface-alt-2/60">
      <div className="container-section py-4 md:py-5">
        <ul className="flex gap-6 overflow-x-auto md:overflow-visible md:justify-between md:gap-4 scrollbar-none">
          {items.map((item) => (
            <li key={item.text} className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-muted-foreground">
              <item.icon className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
