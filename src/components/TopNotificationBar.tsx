import { Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const CONCEPT_DEMO_PATHS = [
  "/realizzazioni/demo-metalmeccanica",
  "/realizzazioni/demo-studio-dentistico-premium",
  "/realizzazioni/demo-fotovoltaico",
  "/realizzazioni/boutique-bb-luxury-rooms",
  "/realizzazioni/demo-flower-atelier",
  "/realizzazioni/demo-personal-trainer-vera-method",
];

const TopNotificationBar = () => {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

  if (CONCEPT_DEMO_PATHS.includes(pathname)) {
    return null;
  }

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
          Elimina i link corrotti ed evita le pagine "404 Error". Un sito senza vicoli ciechi migliora l'esperienza di navigazione e mantiene alto il punteggio SEO.
        </p>
      </div>
    </div>
  );
};

export default TopNotificationBar;