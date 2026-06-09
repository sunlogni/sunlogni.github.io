window.CODES = {
 "Sunlogin": {
  "cat": "All-in-One (in China verbreitet)",
  "msg": "Von Oray; über 15 Mrd. Minuten stabile Verbindung pro Monat, mit Fernsteuerung aus Software und Hardware.",
  "self": "Kostenlose Version auf allen Plattformen (Win/Mac/Linux/Android/iOS/HarmonyOS): Basis-Desktopsteuerung + Dateiübertragung, ohne Zeit-/Sitzungslimit; für privaten, nicht-kommerziellen Gebrauch ausreichend.",
  "hw": "Guazi ab ~158 CNY/Jahr (höhere Qualität / unbegrenzte Übertragung / werbefrei); Super ab ~298 CNY (4K, 144 fps, Remote-CMD, Privatsphäre-Modus, Remote-Kamera); Global 898 CNY (grenzüberschreitend); Xiaoyuzhou 1288 CNY (IT, RDP/SSH).",
  "tip": "Private/Heimnutzer in China, mehrere Geräte, oder wer Hardware will (Wake-on-LAN-Dongle).",
  "scene": "Kommerzielle Nutzung erfordert den Enterprise-Plan (ab 598 CNY/Platz/Jahr); hohe Qualität / grenzüberschreitend / IT sind kostenpflichtige Stufen."
 },
 "ToDesk": {
  "cat": "China · Preis-Leistung",
  "msg": "Preis-Leistungs-orientierte chinesische Fernsteuerung; offiziell über 200 Mio. Geräte.",
  "self": "Kostenlose Privatstufe (ohne kommerzielle Lizenz); Basis-Fernsteuerung + Dateiübertragung reicht privat.",
  "hw": "Pro 158–638 CNY/Jahr (Geräteliste 100–300, 10 gleichzeitige Steuerungen, 2K, dedizierte Schnellspur); Enterprise Standard 805 CNY/Nutzer/Jahr (SSO, Audit/Aufzeichnung, AD-Domäne, Silent Deploy).",
  "tip": "Intensive Privatnutzer in China mit Anspruch an Qualität/Tempo, plus kleine Teams.",
  "scene": "Kommerzielle Nutzung erfordert Enterprise/Team; die Gratisstufe begrenzt Parallelität und kommerzielle Rechte."
 },
 "AnyDesk": {
  "cat": "International · leichtgewichtig",
  "msg": "Leichtgewichtige Fernsteuerung aus Deutschland; Rechenzentren nach ISO/IEC 27001 zertifiziert.",
  "self": "Kostenlos nur für privaten Gebrauch; leicht und schnell verbunden.",
  "hw": "Solo ~23,12 €/Monat (jährliche Abrechnung; 1 Nutzer / 3 Geräte / 1 Verbindung / 100 unbeaufsichtigt); Standard & Advanced skalieren (20–100 Nutzer, Zusatzverbindungen); Dateiübertragung / Aufzeichnung / Privatsphäre-Modus.",
  "tip": "Leichter grenzüberschreitender Zugriff, internationale Endpunkte, Compliance-bewusste Teams (ISO 27001).",
  "scene": "Preis in Euro, jährliche Abrechnung; die Gratisstufe ist nur privat — kommerzielle Nutzung muss lizenziert werden."
 },
 "TeamViewer": {
  "cat": "International · etablierter Enterprise",
  "msg": "Etablierte globale Fernsteuerung mit hohem Enterprise-Anteil.",
  "self": "Kostenlos streng für nicht-kommerzielle Nutzung (Familie helfen / eigene Geräte); kommerzielle Erkennung trennt die Sitzung (~5 Min, mit dokumentierten Fehlalarmen).",
  "hw": "Remote Access 24,90 $/Monat, Business 50,90 $/Monat (unbegrenzte Endpunkte, 1 Sitzung), Premium 112,90 $, Corporate 229,90 $ (30 Nutzer, 3 Sitzungen); Enterprise Tensor mit SSO / Audit.",
  "tip": "Multinationale Unternehmen, IT-Outsourcing, Teams mit Bedarf an reifem Ökosystem und Steuerung.",
  "scene": "Nur jährliche Abrechnung, keine Dauerlizenz; kostenlose kommerzielle Nutzung wird leicht erkannt und getrennt."
 },
 "RustDesk": {
  "cat": "Open Source · selbst gehostet",
  "msg": "Open-Source (GPL), selbst gehostete Fernsteuerung mit Fokus auf Datenhoheit und P2P.",
  "self": "Kostenlose OSS, vollständig selbst gehostet, unbegrenzt verwaltete Geräte, P2P — aber ohne Web-Konsole.",
  "hw": "Individual Pro 9,90 $/Monat (jährlich; 1 Nutzer / 20 Geräte / Web-Konsole / 2FA); Basic 19,90 $ (10 Nutzer / 100 Geräte / OIDC/LDAP / eigener Client); Customized pro Nutzer/Gerät.",
  "tip": "Technische Teams / Profis, die Datenhoheit wollen und einen eigenen Server betreiben.",
  "scene": "Du musst den hbbs-Server selbst betreiben; das öffentliche Relay ist instabil — selbst hosten macht es solide."
 },
 "Microsoft Remote Desktop": {
  "cat": "Integriert · RDP",
  "msg": "In Windows integriertes Remotedesktop (RDP); kein Cloud-Relay des Anbieters.",
  "self": "Kostenlos, aber der Host muss Windows Pro/Enterprise/Education sein (Home kann nur Client sein, nicht Host).",
  "hw": "Upgrade auf Win Pro ist einmalig ~99 $; volle Funktionen im LAN, Zwischenablage-/Laufwerks-Mapping, NLA-Sicherheit; über das Internet brauchst du eigene VPN / Portweiterleitung / Gateway.",
  "tip": "Gleiches LAN oder Firmen-Intranet, vorhandene Pro-Lizenzen, keine Zusatzsoftware.",
  "scene": "Home-Edition kann kein Host sein; direkte öffentliche Verbindung ist riskant (VPN nutzen); eine aktive Sitzung pro Rechner."
 },
 "Chrome Remote Desktop": {
  "cat": "Browser · kostenlos",
  "msg": "Browserbasierte Fernsteuerung von Google, komplett kostenlos.",
  "self": "Komplett kostenlos, plattformübergreifend, läuft im Browser; benötigt ein Google-Konto.",
  "hw": "Keine kostenpflichtigen Stufen; unterstützt unbeaufsichtigten Zugriff und einfache Dateiübertragung, aber recht einfache Funktionen (keine hohe Qualität/Multimonitor/Enterprise-Steuerung).",
  "tip": "Temporärer, plattformübergreifender, minimaler und kostenloser privater Zugriff.",
  "scene": "Recht einfach; abhängig von Google-Konto und Netzwerk (Google muss erreichbar sein)."
 },
 "Windows Quick Assist": {
  "cat": "Integriert · spontane Hilfe",
  "msg": "Das in Windows 10/11 integrierte Quick Assist.",
  "self": "Kostenlos, in Windows integriert; gedacht für einmalige Fernhilfe.",
  "hw": "Keine kostenpflichtigen Stufen; nur betreute Hilfe (beide Seiten anwesend) — keine unbeaufsichtigte Dauersteuerung.",
  "tip": "Einmalige Fehlerbehebung für Familie/Kollegen.",
  "scene": "Nur betreute Hilfe, keine dauerhafte Fernsteuerung; benötigt Microsoft-Konto und beide Personen am Rechner."
 }
};
window.ALIAS = {"todesk": "ToDesk", "anydesk": "AnyDesk", "teamviewer": "TeamViewer", "tv": "TeamViewer", "rustdesk": "RustDesk", "rdp": "Microsoft Remote Desktop", "mstsc": "Microsoft Remote Desktop", "microsoft": "Microsoft Remote Desktop", "remotedesktop": "Microsoft Remote Desktop", "chrome": "Chrome Remote Desktop", "google": "Chrome Remote Desktop", "quick assist": "Windows Quick Assist", "schnellhilfe": "Windows Quick Assist", "sunlogin": "Sunlogin", "oray": "Sunlogin"};
window.LABELS = {"cat": "", "msg": "Anbieter / Position", "self": "Gratisstufe", "hw": "Bezahlstufen & Kernfunktionen", "tip": "Ideal für", "scene": "Achtung", "miss": "Nicht gelistet — anderen Namen probieren oder die Tabelle unten ansehen."};
window.THEAD = ["Produkt", "Typ", "Gratisstufe", "Bezahlstufen & Kernfunktionen"];
