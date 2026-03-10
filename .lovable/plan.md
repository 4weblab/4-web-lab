

## Piano: Inserire script Chatbase in index.html

Inserirò lo script Chatbase fornito subito prima della chiusura del tag `</body>` in `index.html`, dopo lo script principale dell'app.

### Modifica

**File: `index.html`** — Aggiungere lo script Chatbase prima di `</body>`:

```html
    <script type="module" src="/src/main.tsx"></script>
    
    <!-- Chatbase chatbot -->
    <script>
    (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="lniGLa4RQRQ3XaohU3LUp";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
    </script>
  </body>
```

Nessun'altra modifica a routing, componenti o struttura.

