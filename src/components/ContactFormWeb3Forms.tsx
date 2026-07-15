import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Status = { state: "idle" | "sending" | "success" | "error"; message: string };
type FieldErrors = Record<string, string>;

export default function ContactFormWeb3Forms() {
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const ACCESS_KEY = "2afa7184-7e7d-4881-9472-d10ca4e3c6c3";
  const mountedAtRef = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const RATE_LIMIT_MS = 60_000;
  const RL_KEY = "w3f_last_submit_ts";

  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  const clearFieldError = (field: string) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.state === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // --- Field validation ---
    const errors: FieldErrors = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const businessType = String(formData.get("business_type") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name) errors.name = "Campo obbligatorio";
    if (!email) errors.email = "Inserisci un indirizzo email valido";
    if (!businessType) errors.business_type = "Seleziona un'opzione";
    if (!message) errors.message = "Raccontaci qualcosa del tuo progetto";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      // Scroll to first error field
      const firstKey = Object.keys(errors)[0];
      const firstInput = formRef.current?.querySelector<HTMLElement>(`[data-field="${firstKey}"]`);
      if (firstInput) {
        firstInput.scrollIntoView({ behavior: "smooth", block: "center" });
        firstInput.focus();
      }
      return;
    }

    // --- Timing check ---
    const elapsed = Date.now() - mountedAtRef.current;
    if (elapsed < 3000) {
      setStatus({ state: "error", message: "Errore invio." });
      return;
    }

    // --- Rate limit ---
    try {
      const last = Number(localStorage.getItem(RL_KEY) || "0");
      if (Date.now() - last < RATE_LIMIT_MS) {
        setStatus({ state: "error", message: "Hai già inviato da poco. Riprova tra 1 minuto." });
        return;
      }
    } catch { /* ignore */ }

    // --- Honeypot ---
    if (formData.get("website") || formData.get("fax")) {
      setStatus({ state: "error", message: "Errore invio." });
      return;
    }

    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "Nuova richiesta di analisi gratuita dal sito");

    setStatus({ state: "sending", message: "Invio in corso..." });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      let data: { success?: boolean } | null = null;
      try {
        data = await response.json();
      } catch { /* ignore */ }

      if (!response.ok || !data?.success) {
        setStatus({ state: "error", message: "Invio non riuscito. Riprova tra poco." });
        return;
      }

      try {
        localStorage.setItem(RL_KEY, String(Date.now()));
      } catch { /* ignore */ }

      setStatus({ state: "success", message: "Messaggio inviato. Ti ricontattiamo a breve." });
      setFieldErrors({});
      form.reset();
      mountedAtRef.current = Date.now();
    } catch {
      setStatus({ state: "error", message: "Problema di rete. Controlla la connessione e riprova." });
    }
  };

  const baseInput =
    "w-full rounded-xl border bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 transition-all duration-200";
  const normalBorder = "border-primary-foreground/15 focus:ring-accent focus:border-accent/40";
  const errorBorder = "border-red-500 ring-2 ring-red-500/30 focus:ring-red-500 focus:border-red-500";

  const inputClasses = (field?: string) =>
    `${baseInput} ${field && fieldErrors[field] ? errorBorder : normalBorder}`;

  const labelClasses = "text-sm font-medium text-primary-foreground/80";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-4">
      {/* Nome */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Nome *</span>
        <input
          data-field="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClasses("name")}
          onChange={() => clearFieldError("name")}
        />
        {fieldErrors.name && (
          <span className="text-xs text-red-400 mt-0.5">{fieldErrors.name}</span>
        )}
      </label>

      {/* Email */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Email *</span>
        <input
          data-field="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses("email")}
          onChange={() => clearFieldError("email")}
        />
        {fieldErrors.email && (
          <span className="text-xs text-red-400 mt-0.5">{fieldErrors.email}</span>
        )}
      </label>

      {/* Tipo di attività */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Tipo di attività *</span>
        <select
          data-field="business_type"
          name="business_type"
          required
          defaultValue=""
          className={`${inputClasses("business_type")} appearance-none pr-10 bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none' stroke='%23ffffff' stroke-opacity='0.6' stroke-width='1.5'><path d='M1 1.5l5 5 5-5'/></svg>\")",
          }}
          onChange={() => clearFieldError("business_type")}
        >
          <option value="" disabled className="bg-neutral-900">Seleziona un'opzione</option>
          <option value="Negozi" className="bg-neutral-900">Negozi</option>
          <option value="Professionisti" className="bg-neutral-900">Professionisti</option>
          <option value="Aziende" className="bg-neutral-900">Aziende</option>
        </select>
        {fieldErrors.business_type && (
          <span className="text-xs text-red-400 mt-0.5">{fieldErrors.business_type}</span>
        )}
      </label>

      {/* Progetto */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Parlaci del tuo progetto *</span>
        <textarea
          data-field="message"
          name="message"
          rows={5}
          required
          className={`${inputClasses("message")} resize-none`}
          onChange={() => clearFieldError("message")}
        />
        {fieldErrors.message && (
          <span className="text-xs text-red-400 mt-0.5">{fieldErrors.message}</span>
        )}
      </label>

      {/* Honeypots */}
      <div className="sr-only" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
        <label>
          Fax
          <input name="fax" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status.state === "sending"}
        className="btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status.state === "sending" ? (
          "Invio..."
        ) : (
          <>
            Richiedi analisi gratuita
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </>
        )}
      </button>

      {/* Status message */}
      {status.message && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-2 text-sm font-medium text-center ${
            status.state === "success"
              ? "text-green-400"
              : status.state === "error"
              ? "text-red-400"
              : "text-primary-foreground/60"
          }`}
        >
          {status.message}
        </p>
      )}

      <p className="text-xs font-bold text-primary-foreground/50 mt-4 leading-relaxed">
        I dati inseriti verranno trattati e usati unicamente per rispondere alla tua richiesta di contatto (base giuridica: esecuzione di misure precontrattuali – art. 6.1.b GDPR). Titolare del trattamento: 4 Web Lab di Fullin Carlo – P.IVA 05765760284. Maggiori informazioni nella nostra{" "}
        <Link to="/privacy" className="underline hover:text-primary-foreground/70 transition-colors">Privacy Policy</Link>.
      </p>
    </form>
  );
}
