## Sostituire link della card "Siti web professionali"

**File:** `src/components/ServicesSection.tsx`

1. In `services[0]` (icon Globe), cambiare `link: '/siti-web-aziendali'` in `link: '#sitiweb'`.
2. Adeguare l'`onClick` dell'`<article>` (sia desktop che mobile) affinché, se `link` inizia con `#`, faccia scroll smooth all'elemento con quell'id anziché usare `navigate`. Fallback attuale (`navigate(link)`) resta per le altre card.

Nessun'altra modifica.
