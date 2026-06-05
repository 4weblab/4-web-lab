Rimuovere il box "Offerta di primavera" in `src/pages/SitiWebAziendali.tsx` (righe 159-171): eliminare l'intero `<div class="mt-8 max-w-xl ...">` con il paragrafo promo e il pulsante "clicca qui". Nessun import diventa orfano (`handleContactClick` resta usato dalla CTA principale).

Nessun'altra modifica.