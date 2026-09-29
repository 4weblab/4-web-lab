import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Status = { state: "idle" | "sending" | "success" | "error"; message: string };
type FieldErrors = Record<string, string>;

export const PERIZIA_REASONS = [
  "Avete pagato un sito e volete capire se è fatto bene.",
  "Il sito non porta contatti.",
  "Google non trova il vostro sito.",
  "Volete rifarlo ma non sapete se serve.",
  "Avete cambiato agenzia.",
  "Sospettate problemi tecnici.",
  "Volete capire cosa vi è stato consegnato.",
  "Volete valutare un sito prima di comprarlo.",
];

const LEVELS: Record<string, string> = {
  essential: "Essential – 219 € + IVA",
  premium: "Premium – 499 € + IVA",
};

interface Props {
  submitLabel?: string;
}

/** Form per la pagina /perizia-sito-web. Stilizzato per sfondi scuri, come ContactFormChatGptAds. */
export default function ContactFormPerizia({ submitLabel = "Richiedi la perizia" }: Props) {
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [level, setLevel] = useState("");
  const [searchParams] = useSearchParams();

  const ACCESS_KEY = "2afa7184-7e7d-4881-9472-d10ca4e3c6c3";
  const mountedAtRef = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const RATE_LIMIT_MS = 60_000;
  const RL_KEY = "w3f_last_submit_ts";

  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  // Preselezione lato client (mai in pre-render): reagisce anche ai cambi del parametro.
  const livello = searchParams.get("livello");
  useEffect(() => {
    if (livello && LEVELS[livello]) {
      setLevel(LEVELS[livello]);
      setFieldErrors((prev) => {
        if (!prev.level) return prev;
        const next = { ...prev };
        delete next.level;
        return next;
      });
    }
  }, [livello]);

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

    const errors: FieldErrors = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    let siteUrl = String(formData.get("site_url") || "").trim();
    const reason = String(formData.get("reason") || "");
    const lvl = String(formData.get("level") || "");
    if (!name) errors.name = "Campo obbligatorio";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Inserisci un indirizzo email valido";
    if (!siteUrl || !/^(https?:\/\/)?[^\s.]+\.[^\s]{2,}/i.test(siteUrl)) errors.site_url = "Inserisci l'indirizzo del sito";
    if (!reason) errors.reason = "Seleziona un motivo";
    if (!lvl) errors.level = "Seleziona un livello";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstKey = Object.keys(errors)[0];
      const firstInput = formRef.current?.querySelector<HTMLElement>(`[data-field="${firstKey}"]`);
      if (firstInput) {
        firstInput.scrollIntoView({ behavior: "smooth", block: "center" });
        firstInput.focus();
      }
      return;
    }

    if (Date.now() - mountedAtRef.current < 3000) {
      setStatus({ state: "error", message: "Errore invio." });
      return;
    }

    try {
      const last = Number(localStorage.getItem(RL_KEY) || "0");
      if (Date.now() - last < RATE_LIMIT_MS) {
        setStatus({ state: "error", message: "Hai già inviato da poco. Riprova tra 1 minuto." });
        return;
      }
    } catch { /* ignore */ }

    if (formData.get("website") || formData.get("fax")) {
      setStatus({ state: "error", message: "Errore invio." });
      return;
    }

    if (!/^https?:\/\//i.test(siteUrl)) siteUrl = `https://${siteUrl}`;
    formData.set("site_url", siteUrl);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "Nuova richiesta perizia sito web");
    formData.append("from_name", "4 Web Lab – Perizia sito web");
    formData.append("replyto", email);

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

      setStatus({ state: "success", message: "Richiesta inviata. Ti rispondiamo entro 24 ore lavorative." });
      setFieldErrors({});
      form.reset();
      setLevel("");
      mountedAtRef.current = Date.now();
    } catch {
      setStatus({ state: "error", message: "Problema di rete. Controlla la connessione e riprova." });
    }
  };

  const baseInput =
    "w-full rounded-xl border bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 transition-all duration-200";
  const normalBorder = "border-primary-foreground/15 focus:ring-accent focus:border-accent/40";
  const errorBorder = "border-red-500 ring-2 ring-red-500/30 focus:ring-red-500 focus:border-red-500";
  const inputClasses = (field: string) => `${baseInput} ${fieldErrors[field] ? errorBorder : normalBorder}`;
  const selectClasses = (field: string) => `${inputClasses(field)} [&>option]:text-foreground`;
  const labelClasses = "text-sm font-medium text-primary-foreground/80";
  const err = (f: string) =>
    fieldErrors[f] && <span className="text-xs text-red-400 mt-0.5">{fieldErrors[f]}</span>;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-4">
      <input type="hidden" name="source_page" value="perizia-sito-web" />

      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Nome e cognome *</span>
        <input data-field="name" name="name" type="text" required autoComplete="name"
          className={inputClasses("name")} onChange={() => clearFieldError("name")} />
        {err("name")}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Email *</span>
        <input data-field="email" name="email" type="email" required autoComplete="email"
          className={inputClasses("email")} onChange={() => clearFieldError("email")} />
        {err("email")}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Telefono</span>
        <input data-field="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses("phone")} />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Indirizzo del sito *</span>
        <input data-field="site_url" name="site_url" type="text" inputMode="url" required
          placeholder="www.tuosito.it" autoComplete="url"
          className={inputClasses("site_url")} onChange={() => clearFieldError("site_url")} />
        {err("site_url")}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Motivo della richiesta *</span>
        <select data-field="reason" name="reason" required defaultValue=""
          className={selectClasses("reason")} onChange={() => clearFieldError("reason")}>
          <option value="" disabled>Seleziona un motivo</option>
          {PERIZIA_REASONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {err("reason")}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Livello di perizia *</span>
        <select data-field="level" name="level" required value={level}
          className={selectClasses("level")}
          onChange={(e) => { setLevel(e.target.value); clearFieldError("level"); }}>
          <option value="" disabled>Seleziona un livello</option>
          {Object.values(LEVELS).map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        {err("level")}
      </label>

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

      <button type="submit" disabled={status.state === "sending"}
        className="btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
        {status.state === "sending" ? "Invio..." : (
          <>
            {submitLabel}
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </>
        )}
      </button>

      {status.message && (
        <p role="status" aria-live="polite"
          className={`mt-2 text-sm font-medium text-center ${
            status.state === "success" ? "text-green-400"
              : status.state === "error" ? "text-red-400" : "text-primary-foreground/60"
          }`}>
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
