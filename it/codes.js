window.CODES = {
 "Sunlogin": {
  "cat": "Tutto-in-uno (popolare in Cina)",
  "msg": "Di Oray; oltre 15 miliardi di minuti di connessione stabile al mese, con una gamma di controllo remoto software e hardware.",
  "self": "Versione gratuita su tutte le piattaforme (Win/Mac/Linux/Android/iOS/HarmonyOS): controllo desktop di base + trasferimento file, senza limiti di tempo o sessioni; sufficiente per uso personale e non commerciale.",
  "hw": "Guazi da ~158 CNY/anno (qualità superiore / trasferimento illimitato / senza pubblicità); Super da ~298 CNY (4K, 144 fps, CMD remoto, modalità privacy, fotocamera remota); Global 898 CNY (transfrontaliero); Xiaoyuzhou 1288 CNY (IT, RDP/SSH).",
  "tip": "Utenti personali/domestici in Cina, multi-dispositivo, o chi vuole hardware (chiavetta di avvio remoto).",
  "scene": "L'uso commerciale richiede il piano Enterprise (da 598 CNY/postazione/anno); alta qualità / transfrontaliero / IT sono livelli a pagamento."
 },
 "ToDesk": {
  "cat": "Cina · qualità-prezzo",
  "msg": "Controllo remoto cinese orientato al valore; ufficialmente oltre 200 milioni di dispositivi.",
  "self": "Livello personale gratuito (senza licenza commerciale); il controllo di base + trasferimento file basta per uso personale.",
  "hw": "Pro 158–638 CNY/anno (elenco 100–300 dispositivi, 10 controlli simultanei, 2K, corsia veloce dedicata); Enterprise Standard 805 CNY/utente/anno (SSO, audit/registrazione, dominio AD, distribuzione silenziosa).",
  "tip": "Utenti personali intensivi in Cina attenti a qualità/velocità, più piccoli team.",
  "scene": "L'uso commerciale richiede Enterprise/Team; il livello gratuito limita la concorrenza e i diritti commerciali."
 },
 "AnyDesk": {
  "cat": "Internazionale · leggero",
  "msg": "Controllo remoto leggero dalla Germania; data center certificati ISO/IEC 27001.",
  "self": "Gratis solo per uso personale; leggero e con connessione rapida.",
  "hw": "Solo ~23,12 €/mese (fatturazione annuale; 1 utente / 3 dispositivi / 1 connessione / 100 non presidiati); Standard e Advanced scalano (20–100 utenti, connessioni aggiuntive); trasferimento file / registrazione / modalità privacy.",
  "tip": "Accesso leggero transfrontaliero, endpoint internazionali, team attenti alla conformità (ISO 27001).",
  "scene": "Prezzo in euro e fatturazione annuale; il livello gratuito è solo personale — l'uso commerciale richiede licenza."
 },
 "TeamViewer": {
  "cat": "Internazionale · veterano enterprise",
  "msg": "Controllo remoto globale veterano con forte quota enterprise.",
  "self": "Gratis strettamente per uso non commerciale (aiutare la famiglia / i propri dispositivi); il rilevamento di uso commerciale interrompe la sessione (~5 min, con falsi positivi documentati).",
  "hw": "Remote Access 24,90 $/mese, Business 50,90 $/mese (endpoint illimitati, 1 sessione), Premium 112,90 $, Corporate 229,90 $ (30 utenti, 3 sessioni); Tensor per l'azienda aggiunge SSO / audit.",
  "tip": "Aziende multinazionali, outsourcing IT, team che vogliono un ecosistema maturo e controlli.",
  "scene": "Solo fatturazione annuale, nessuna licenza perpetua; l'uso commerciale gratuito viene facilmente rilevato e interrotto."
 },
 "RustDesk": {
  "cat": "Open source · self-hosted",
  "msg": "Controllo remoto open source (GPL), self-hosted, incentrato su sovranità dei dati e P2P.",
  "self": "OSS gratuito, completamente self-hosted, dispositivi gestiti illimitati, P2P — ma senza console web.",
  "hw": "Individual Pro 9,90 $/mese (annuale; 1 utente / 20 dispositivi / console web / 2FA); Basic 19,90 $ (10 utenti / 100 dispositivi / OIDC/LDAP / client personalizzato); Customized per utente/dispositivo.",
  "tip": "Team tecnici / esperti che vogliono il controllo dei dati e gestiscono il proprio server.",
  "scene": "Devi gestire tu stesso il server hbbs; il relay pubblico è instabile — il self-hosting è ciò che lo rende solido."
 },
 "Microsoft Remote Desktop": {
  "cat": "Integrato · RDP",
  "msg": "Desktop remoto (RDP) integrato in Windows; senza relay cloud del fornitore.",
  "self": "Gratis, ma l'host deve essere Windows Pro/Enterprise/Education (Home può essere solo client, non host).",
  "hw": "Passare a Win Pro costa ~99 $ una tantum; tutte le funzioni in LAN, mappatura appunti/unità, sicurezza NLA; via internet servono VPN / port forwarding / gateway propri.",
  "tip": "Stessa LAN o intranet aziendale, licenze Pro esistenti, zero software aggiuntivo.",
  "scene": "L'edizione Home non può essere host; la connessione diretta pubblica è rischiosa (usa una VPN); una sessione attiva per macchina."
 },
 "Chrome Remote Desktop": {
  "cat": "Browser · gratis",
  "msg": "Controllo remoto nel browser di Google, completamente gratuito.",
  "self": "Completamente gratis, multipiattaforma, funziona nel browser; richiede un account Google.",
  "hw": "Nessun livello a pagamento; supporta accesso non presidiato e trasferimento file di base, ma funzioni piuttosto basilari (niente alta qualità/multi-monitor/controlli enterprise).",
  "tip": "Accesso personale temporaneo, multipiattaforma, minimo e a costo zero.",
  "scene": "Piuttosto basilare; dipende da un account Google e dalla rete (Google deve essere raggiungibile)."
 },
 "Windows Quick Assist": {
  "cat": "Integrato · assistenza occasionale",
  "msg": "Lo strumento Quick Assist integrato in Windows 10/11.",
  "self": "Gratis, integrato in Windows; pensato per assistenza remota occasionale.",
  "hw": "Nessun livello a pagamento; solo assistenza presidiata (entrambe le parti presenti) — niente controllo non presidiato a lungo termine.",
  "tip": "Risoluzione occasionale per famiglia/colleghi.",
  "scene": "Solo assistenza presidiata, non controllo continuo; richiede un account Microsoft e entrambe le persone presenti."
 }
};
window.ALIAS = {"todesk": "ToDesk", "anydesk": "AnyDesk", "teamviewer": "TeamViewer", "tv": "TeamViewer", "rustdesk": "RustDesk", "rdp": "Microsoft Remote Desktop", "mstsc": "Microsoft Remote Desktop", "microsoft": "Microsoft Remote Desktop", "desktop remoto": "Microsoft Remote Desktop", "chrome": "Chrome Remote Desktop", "google": "Chrome Remote Desktop", "quick assist": "Windows Quick Assist", "assistenza rapida": "Windows Quick Assist", "sunlogin": "Sunlogin", "oray": "Sunlogin", "girasole": "Sunlogin"};
window.LABELS = {"cat": "", "msg": "Fornitore / posizione", "self": "Livello gratuito", "hw": "Livelli a pagamento e funzioni chiave", "tip": "Ideale per", "scene": "Attenzione", "miss": "Non elencato — prova un altro nome o guarda la tabella completa sotto."};
window.THEAD = ["Prodotto", "Tipo", "Livello gratuito", "Livelli a pagamento e funzioni chiave"];
