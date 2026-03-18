import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Status = { state: "idle" | "sending" | "success" | "error"; message: string };
type FieldErrors = Record<string, string>;

export default function ContactFormWeb3Forms() {
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [timePrefs, setTimePrefs] = useState({ morning: false, afternoon: false });
  const [channel, setChannel] = useState<"email" | "phone">("email");

  const ACCESS_KEY = "2afa7184-7e7d-4881-9472-d10ca4e3c6c3";
  const mountedAtRef = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const RATE_LIMIT_MS = 60_000;
  const RL_KEY = "w3f_last_submit_ts";

  const timePrefLabel = useMemo(() => {
    const v: string[] = [];
    if (timePrefs.morning) v.push("Mattina");
    if (timePrefs.afternoon) v.push("Pomeriggio");
    return v.length ? v.join(", ") : "Nessuna";
  }, [timePrefs]);

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
    const firstName = String(formData.get("first_name") || "").trim();
    const lastName = String(formData.get("last_name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!firstName) errors.first_name = "Campo obbligatorio";
    if (!lastName) errors.last_name = "Campo obbligatorio";
    if (channel === "phone" && !phone) errors.phone = "Inserisci il numero di cellulare";
    if (channel === "email" && !email) errors.email = "Inserisci un indirizzo email valido";

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
    formData.append("subject", "Nuova richiesta dal sito");
    formData.append("preferred_time", timePrefLabel);
    formData.append("preferred_channel", channel === "email" ? "Email" : "Telefono");

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
      setTimePrefs({ morning: false, afternoon: false });
      setChannel("email");
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
      {/* Nome / Cognome */}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Nome *</span>
          <input
            data-field="first_name"
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            className={inputClasses("first_name")}
            onChange={() => clearFieldError("first_name")}
          />
          {fieldErrors.first_name && (
            <span className="text-xs text-red-400 mt-0.5">{fieldErrors.first_name}</span>
          )}
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Cognome *</span>
          <input
            data-field="last_name"
            name="last_name"
            type="text"
            required
            autoComplete="family-name"
            className={inputClasses("last_name")}
            onChange={() => clearFieldError("last_name")}
          />
          {fieldErrors.last_name && (
            <span className="text-xs text-red-400 mt-0.5">{fieldErrors.last_name}</span>
          )}
        </label>
      </div>

      {/* Azienda */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Azienda</span>
        <input name="company" type="text" autoComplete="organization" className={inputClasses()} />
      </label>

      {/* Telefono / Email */}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Cellulare *</span>
          <input
            data-field="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            placeholder="+39 ..."
            className={inputClasses("phone")}
            onChange={() => clearFieldError("phone")}
          />
          {fieldErrors.phone && (
            <span className="text-xs text-red-400 mt-0.5">{fieldErrors.phone}</span>
          )}
        </label>
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
      </div>

      {/* Preferenze orario */}
      <fieldset className="space-y-2">
        <legend className={labelClasses}>Preferenze di contatto</legend>
        <div className="flex flex-wrap gap-4 mt-1">
          <label className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 cursor-pointer">
            <input
              type="checkbox"
              checked={timePrefs.morning}
              onChange={(e) => setTimePrefs((s) => ({ ...s, morning: e.target.checked }))}
              className="rounded border-primary-foreground/20 bg-primary-foreground/5 text-accent focus:ring-accent h-4 w-4"
            />
            Mattina
          </label>
          <label className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 cursor-pointer">
            <input
              type="checkbox"
              checked={timePrefs.afternoon}
              onChange={(e) => setTimePrefs((s) => ({ ...s, afternoon: e.target.checked }))}
              className="rounded border-primary-foreground/20 bg-primary-foreground/5 text-accent focus:ring-accent h-4 w-4"
            />
            Pomeriggio
          </label>
        </div>
      </fieldset>

      {/* Canale preferito */}
      <fieldset className="space-y-2">
        <legend className={labelClasses}>Come preferisci essere contattato?</legend>
        <div className="flex flex-wrap gap-4 mt-1">
          <label className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 cursor-pointer">
            <input
              type="radio"
              name="preferred_channel_ui"
              value="email"
              checked={channel === "email"}
              onChange={() => setChannel("email")}
              className="border-primary-foreground/20 text-accent focus:ring-accent h-4 w-4"
            />
            Email
          </label>
          <label className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 cursor-pointer">
            <input
              type="radio"
              name="preferred_channel_ui"
              value="phone"
              checked={channel === "phone"}
              onChange={() => setChannel("phone")}
              className="border-primary-foreground/20 text-accent focus:ring-accent h-4 w-4"
            />
            Telefono
          </label>
        </div>
      </fieldset>

      {/* Messaggio */}
      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Messaggio</span>
        <textarea
          name="message"
          rows={4}
          className={`${inputClasses()} resize-none`}
        />
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
        {status.state === "sending" ? "Invio..." : "Invia richiesta"}
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
        <Link to="/privacy-policy" className="underline hover:text-primary-foreground/70 transition-colors">Privacy Policy</Link>.
      </p>
    </form>
  );
}
