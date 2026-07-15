import { Lightbulb } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

const TopNotificationBar = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const h = el.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty(
          "--notification-bar-height",
          `${h}px`
        );
      }
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      document.documentElement.style.removeProperty("--notification-bar-height");
    };
  }, []);

  return (
    <div
      ref={ref}
      role="note"
      className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground"
    >
      <div className="container-section flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm text-center">
        <span className="font-semibold shrink-0">Consiglio del giorno:</span>
        <Lightbulb aria-hidden="true" className="w-4 h-4 shrink-0 text-yellow-400" />
        <p className="leading-snug">
          Ottimizza le immagini inserendo sempre un testo Alt descrittivo. Aiuta Google a capire il contesto e migliora il posizionamento.
        </p>
      </div>
    </div>
  );
};

export default TopNotificationBar;