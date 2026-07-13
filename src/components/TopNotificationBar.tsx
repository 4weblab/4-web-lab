import { Lightbulb } from "lucide-react";

const TopNotificationBar = () => (
  <div
    role="note"
    className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground"
    style={{ minHeight: "var(--notification-bar-height)" }}
  >
    <div className="container-section flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm text-center">
      <Lightbulb aria-hidden="true" className="w-4 h-4 shrink-0 text-accent" />
      <p className="leading-snug">
        Ottimizza le immagini inserendo sempre un testo Alt descrittivo. Aiuta Google a capire il contesto e migliora il posizionamento.
      </p>
    </div>
  </div>
);

export default TopNotificationBar;