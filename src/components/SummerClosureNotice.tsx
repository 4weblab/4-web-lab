import { useEffect, useState } from "react";
import { Sun, X } from "lucide-react";

const STORAGE_KEY = "summer-closure-2026-dismissed";

const SummerClosureNotice = () => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "true") {
        setDismissed(true);
      }
    } catch {
      // localStorage non disponibile in SSR/pre-rendering
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
  };

  if (dismissed) return null;

  return (
    <section
      role="note"
      aria-label="Avviso chiusura estiva"
      className="relative bg-background"
    >
      <div className="container-section py-6 md:py-8">
        <div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-accent/15 px-5 py-5 md:px-8 md:py-6"
          style={{
            background: "var(--glass-bg)",
            backdropFilter: "blur(var(--glass-blur))",
            boxShadow: "var(--shadow-glass)",
          }}
        >
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute top-3 right-3 inline-flex items-center justify-center rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
            aria-label="Chiudi avviso"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: "var(--gradient-accent)",
                boxShadow: "var(--shadow-accent)",
              }}
            >
              <Sun className="h-6 w-6 text-white" aria-hidden="true" />
            </div>

            <div className="min-w-0 flex-1 pr-6">
              <h2 className="text-lg font-semibold leading-snug text-foreground md:text-xl">
                Chiusura estiva 4 Web Lab
              </h2>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  Informiamo tutti i clienti che 4 Web Lab rimarrà chiusa per la pausa estiva
                  dall'8 Agosto al 23 Agosto compresi.
                </p>
                <p>
                  Durante questo periodo le attività saranno sospese e le risposte a email, WhatsApp
                  e richieste di assistenza potrebbero subire qualche giorno di ritardo.
                </p>
                <p className="font-medium text-foreground">
                  Grazie per la comprensione e vi auguriamo una splendida estate! ☀️
                </p>
                <p className="text-xs text-muted-foreground/80 md:text-sm">
                  Lo staff di 4 Web Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerClosureNotice;
