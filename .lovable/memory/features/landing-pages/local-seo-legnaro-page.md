---
name: Landing iper-locale Legnaro
description: /realizzazione-siti-web-legnaro — landing pura senza menu principale, header minimale, prezzi, doppia CTA WhatsApp+form
type: feature
---
Pagina `src/pages/SitiWebLegnaro.tsx` alla rotta /realizzazione-siti-web-legnaro (SSG).
Landing pura iper-locale (Legnaro, Saonara, Piove di Sacco, Saccisica): header minimale custom (logo + "← Visita il sito principale"), nessun menu di navigazione; Footer standard mantenuto.
Title: "Web Agency Legnaro e Piove di Sacco | Siti Web da 490€". JSON-LD: BreadcrumbList + WebPage + Service con areaServed Saccisica.
Sezioni: Hero (H1 "Sviluppo Siti Web a Legnaro... Senza WordPress"), 3 card vantaggi con illustrazioni generate (legnaro-prossimita/velocita/ia.webp in src/assets), griglia prezzi 490/990/1890€, sezione conversione scura (gradient-hero) con CTA WhatsApp #25D366 + ContactFormWeb3Forms.
Nota: ContactFormWeb3Forms è stilizzato per sfondi scuri (label primary-foreground) — va sempre montato su sezioni con var(--gradient-hero) o simili.
