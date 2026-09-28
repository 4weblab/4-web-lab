# Audit del funnel commerciale 4 Web Lab (solo analisi, nessuna modifica)

Base: lettura del codice di tutte le pagine (pulsanti, collegamenti, moduli). Non ho misurato traffico reale né testato gli invii dei moduli: le priorità vanno confermate con Search Console e Analytics.

## 1. Mappa dei percorsi

```text
TRAFFICO FREDDO (informativo)          ALTA INTENZIONE (commerciale)
Blog / FAQ / SEO-AEO  ──►  Pagine servizio (negozi/prof./aziende) ──► Modulo
Realizzazioni / Demo  ──►  Pagine servizio o Contatti            ──► Modulo / WhatsApp
Pagine locali (Padova + 7 comuni)  ──────────────────────────────► Modulo interno
Google Ads / ChatGPT Ads (servizi mensili) ──────────────────────► Modulo interno
Home ──► 3 card di smistamento ──► pagine servizio
```

## 2. Valutazione per pagina

| Pagina | Intento | Promessa / CTA primaria | Destinazione | Prova | Carenze principali |
|---|---|---|---|---|---|
| Home | Misto, soprattutto navigazionale | "Analisi AEO & SEO gratuita" + WhatsApp | Modulo in fondo alla Home | Recensioni, trust bar | La promessa (SEO/AI) è diversa dal title e dalla meta (siti da 490€): chi arriva da Google per "siti web" riceve una CTA SEO |
| Negozi / Professionisti / Aziende | Alta intenzione | Preventivo gratuito in 24h | Modulo interno con indicazione della pagina di provenienza | Demo di settore, FAQ prezzo, casi RB snc | Buone. Nessun passaggio verso Google Ads/SEO dopo la scelta del pacchetto (manca il cross-sell "sito + visibilità") |
| Padova | Alta intenzione locale | Preventivo 24h (modulo interno) | Modulo interno | Casi e demo | Una funzione residua manda a "/#contatti" della Home (da verificare se ancora usata); nessuna altra carenza |
| 7 pagine comuni | Alta intenzione locale | Modulo interno + WhatsApp | Modulo generico | Scarsa: collegano solo ai 3 pacchetti; solo Cittadella collega un caso reale | Modulo senza indicazione di provenienza (non si sa da quale comune arriva il contatto); nessun link a Realizzazioni, Padova o FAQ; testo del pulsante generico |
| Realizzazioni | Valutazione / fiducia | Contatti | /contatti (esce dalla pagina) | Portfolio | Porta a una pagina generica invece che al pacchetto giusto con modulo |
| Demo / concept | Ispirazione | Modulo e contatti "finti" della demo, WhatsApp, telefono | Mix di contatti della demo e di 4 Web Lab | La demo stessa | Punto di dispersione principale: l'utente non sa se il pulsante è della demo o di 4 Web Lab. Metalmeccanica, Dentista e B&B non riportano al pacchetto di settore. Solo il dentista pre-compila il messaggio WhatsApp |
| Caso RB snc | Prova forte | Contatti | /contatti | PageSpeed reali | Non collega la pagina Aziende |
| Blog (10 articoli) | Freddo | "Preventivo Gratuito in 24h" solo in 6 su 10 | /contatti | Link interni | GDPR, sito vs social, sito obsoleto, WordPress hanno ancora il vecchio CTA; 7 articoli su 10 collegano Google Ads come cross-sell anche quando il tema è il sito (es. GDPR, fai-da-te) |
| FAQ | Obiezioni | Modulo della Home | Modulo | Link a blog | Collega molto al blog (verso il freddo) e poco ai pacchetti |
| SEO/AEO | Intenzione media | Modulo interno + WhatsApp | Modulo senza provenienza | Prezzi 249/649€ | Non collega ChatGPT Ads (servizio affine) |
| Google Ads | Alta intenzione | Consulenza gratuita | Modulo senza provenienza | Caso RB snc, prezzi 299/549€ | Non collega i pacchetti sito ("prima serve una landing che converte") |
| ChatGPT Ads | Alta intenzione / curiosità | Analisi di fattibilità | Modulo dedicato | Sezione "Prova" | Nessun collegamento ai pacchetti sito; unico punto d'ingresso dal menu servizi |
| Contatti | Conversione | Modulo + email + WhatsApp | Modulo senza provenienza | Poca | Nessuna prova (recensioni, tempi di risposta) accanto al modulo |
| Zone servite | Locale | /contatti + WhatsApp | Contatti | - | Non porta alla pagina del comune poi al modulo in modo diretto |
| Menu / Footer | Navigazione | Nessun pulsante di contatto fisso nel menu | - | - | Da verificare: nel menu non risulta un pulsante "Richiedi preventivo" sempre visibile |

## 3. Priorità

**P0 – perdite di contatti o messaggi in conflitto**
1. Demo/concept: aggiungere una fascia fissa e riconoscibile "Questo è un concept di 4 Web Lab – Vuoi un sito così?" che porti al pacchetto di settore; rendere evidenti come finti i contatti interni della demo.
2. Allineare la promessa della Home: CTA primaria sul sito ("Richiedi una valutazione gratuita", come da regola del progetto) con l'analisi SEO/AEO come seconda opzione.
3. Indicare la pagina di provenienza in tutti i moduli (comuni, SEO, Google Ads, Contatti, Home), per sapere quali pagine portano davvero clienti.
4. Uniformare il CTA dei 4 articoli rimasti al vecchio testo.

**P1 – continuità del funnel**
5. Pagine dei comuni: aggiungere un blocco "Lavori realizzati" e un link a Padova e alla FAQ; pulsante con lo stesso testo delle pagine servizio.
6. Realizzazioni e caso RB snc: portare ai pacchetti (negozi/professionisti/aziende) invece che solo a /contatti.
7. Cross-sell mirato: pacchetti sito → SEO/AEO e Google Ads ("dopo il lancio"); Google Ads e ChatGPT Ads → pacchetti sito ("serve una pagina che converte"); SEO/AEO ↔ ChatGPT Ads.
8. Blog: sostituire il link fisso a Google Ads con il servizio coerente con l'argomento (GDPR e fai-da-te → pacchetti sito; "non si trova su Google" → SEO).
9. Pagina Contatti: aggiungere 1–2 recensioni e il tempo di risposta accanto al modulo.

**P2 – rifiniture**
10. Pulsante "Richiedi preventivo" sempre visibile nel menu (da verificare prima).
11. Messaggio WhatsApp pre-compilato con il nome della pagina su tutte le pagine.
12. FAQ: più link ai pacchetti, meno verso il blog.
13. Rimuovere la funzione residua su Padova che punta alla Home, se inutilizzata.

## 4. Cosa non toccare
URL, H1, title, dati strutturati, sitemap e struttura delle sezioni restano invariati: gli interventi aggiungono pulsanti, collegamenti e fasce, senza riscrivere contenuti indicizzati.

## Dettagli tecnici
- Moduli senza `sourcePage`: Contact, ContactSection (Home/FAQ), 7 pagine comuni, PosizionamentoGoogleEAi, PubblicitaGoogleAds.
- `handleContactClick` in SitiWebPadova.tsx (riga 18) → `/#contatti`: verificare se referenziata.
- Blog senza "Preventivo Gratuito in 24h": BlogGdprArticle, BlogSiteVsSocialArticle, BlogOutdatedWebsiteArticle, BlogWordPressGuideArticle.
- Fascia demo: componente unico riutilizzato in tutte le pagine `Demo*.tsx`.

Approvando, procedo con i P0; P1 e P2 li applico solo se me lo confermi.
