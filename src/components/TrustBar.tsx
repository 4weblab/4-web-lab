import { Zap, CalendarCheck, Code2, MessageSquare } from 'lucide-react';

const items = [
  { icon: Zap, text: 'Il tuo sito carica prima che il cliente cambi idea' },
  { icon: CalendarCheck, text: 'Online e operativo in 2-4 settimane' },
  { icon: Code2, text: 'Zero costi nascosti di manutenzione, zero WordPress da aggiornare' },
];

const TrustBar = () => {
  const renderItem = (item: (typeof items)[number], key: string) => (
    <li key={key} className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-muted-foreground flex-shrink-0">
      <item.icon className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
      <span>{item.text}</span>
    </li>
  );

  return (
    <section aria-label="Punti di forza in sintesi" className="border-y border-border/50 bg-surface-alt-2/60">
      <div className="container-section py-4 md:py-5">
        {/* Mobile: infinite marquee loop */}
        <div className="md:hidden overflow-hidden" role="marquee" aria-label="Punti di forza (scorrevole)">
          <ul className="trustbar-marquee flex gap-8 w-max">
            {[...items, ...items].map((item, i) => renderItem(item, `m-${i}`))}
          </ul>
        </div>

        {/* Desktop: centered static list */}
        <ul className="hidden md:flex md:justify-center md:flex-wrap md:gap-x-8 md:gap-y-2">
          {items.map((item, i) => renderItem(item, `d-${i}`))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
