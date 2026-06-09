window.CODES = {
 "Sunlogin": {
  "cat": "Alles-in-één (populair in China)",
  "msg": "Van Oray; meer dan 15 miljard minuten stabiele verbinding per maand, met een lijn van software- en hardware-afstandsbediening.",
  "self": "Gratis versie op alle platforms (Win/Mac/Linux/Android/iOS/HarmonyOS): basis-desktopbediening + bestandsoverdracht, zonder tijd-/sessielimiet; voldoende voor persoonlijk, niet-commercieel gebruik.",
  "hw": "Guazi vanaf ~158 CNY/jaar (hogere kwaliteit / onbeperkte overdracht / geen advertenties); Super vanaf ~298 CNY (4K, 144 fps, externe CMD, privacymodus, externe camera); Global 898 CNY (grensoverschrijdend); Xiaoyuzhou 1288 CNY (IT, RDP/SSH).",
  "tip": "Persoonlijke/thuisgebruikers in China, meerdere apparaten, of wie hardware wil (wake-on-LAN-dongle).",
  "scene": "Commercieel gebruik vereist het Enterprise-plan (vanaf 598 CNY/plaats/jaar); hoge kwaliteit / grensoverschrijdend / IT zijn betaalde niveaus."
 },
 "ToDesk": {
  "cat": "China · prijs-kwaliteit",
  "msg": "Waardegerichte Chinese afstandsbediening; officieel meer dan 200 miljoen apparaten.",
  "self": "Gratis persoonlijk niveau (geen commerciële licentie); basisbediening + bestandsoverdracht volstaat voor persoonlijk gebruik.",
  "hw": "Pro 158–638 CNY/jaar (lijst 100–300 apparaten, 10 gelijktijdige bedieningen, 2K, speciaal snel kanaal); Enterprise Standard 805 CNY/gebruiker/jaar (SSO, audit/opname, AD-domein, stille uitrol).",
  "tip": "Intensieve persoonlijke gebruikers in China die om kwaliteit/snelheid geven, plus kleine teams.",
  "scene": "Commercieel gebruik vereist Enterprise/Team; het gratis niveau beperkt gelijktijdigheid en commerciële rechten."
 },
 "AnyDesk": {
  "cat": "Internationaal · lichtgewicht",
  "msg": "Lichtgewicht afstandsbediening uit Duitsland; datacenters ISO/IEC 27001-gecertificeerd.",
  "self": "Gratis alleen voor persoonlijk gebruik; lichtgewicht en snel verbonden.",
  "hw": "Solo ~€23,12/maand (jaarlijks gefactureerd; 1 gebruiker / 3 apparaten / 1 verbinding / 100 onbeheerd); Standard & Advanced schalen op (20–100 gebruikers, extra verbindingen); bestandsoverdracht / opname / privacymodus.",
  "tip": "Lichte grensoverschrijdende toegang, internationale eindpunten, compliancebewuste teams (ISO 27001).",
  "scene": "Prijs in euro en jaarlijks gefactureerd; het gratis niveau is alleen persoonlijk — commercieel gebruik vereist een licentie."
 },
 "TeamViewer": {
  "cat": "Internationaal · enterprise-veteraan",
  "msg": "Veteraan in wereldwijde afstandsbediening met hoog enterprise-aandeel.",
  "self": "Gratis strikt voor niet-commercieel gebruik (familie helpen / eigen apparaten); detectie van commercieel gebruik verbreekt de sessie (~5 min, met gedocumenteerde valse detecties).",
  "hw": "Remote Access $24,90/maand, Business $50,90/maand (onbeperkte eindpunten, 1 sessie), Premium $112,90, Corporate $229,90 (30 gebruikers, 3 sessies); enterprise Tensor voegt SSO / audit toe.",
  "tip": "Multinationale bedrijven, IT-uitbesteding, teams die een volwassen ecosysteem en controle nodig hebben.",
  "scene": "Alleen jaarlijks gefactureerd, geen eeuwigdurende licentie; gratis commercieel gebruik wordt makkelijk gedetecteerd en verbroken."
 },
 "RustDesk": {
  "cat": "Open source · zelf gehost",
  "msg": "Open source (GPL), zelf-gehoste afstandsbediening gericht op datasoevereiniteit en P2P.",
  "self": "Gratis OSS, volledig zelf gehost, onbeperkt beheerde apparaten, P2P — maar geen webconsole.",
  "hw": "Individual Pro $9,90/maand (jaarlijks; 1 gebruiker / 20 apparaten / webconsole / 2FA); Basic $19,90 (10 gebruikers / 100 apparaten / OIDC/LDAP / eigen client); Customized per gebruiker/apparaat.",
  "tip": "Technische teams / gevorderden die datacontrole willen en hun eigen server beheren.",
  "scene": "Je moet de hbbs-server zelf draaien; de publieke relay is instabiel — zelf hosten maakt het solide."
 },
 "Microsoft Remote Desktop": {
  "cat": "Ingebouwd · RDP",
  "msg": "In Windows ingebouwd extern bureaublad (RDP); zonder cloud-relay van de leverancier.",
  "self": "Gratis, maar de host moet Windows Pro/Enterprise/Education zijn (Home kan alleen client zijn, geen host).",
  "hw": "Upgraden naar Win Pro is eenmalig ~$99; volledige functies in LAN, klembord-/schijftoewijzing, NLA-beveiliging; via internet heb je eigen VPN / poortdoorsturing / gateway nodig.",
  "tip": "Zelfde LAN of bedrijfsintranet, bestaande Pro-licenties, geen extra software.",
  "scene": "De Home-editie kan geen host zijn; directe openbare verbinding is riskant (gebruik VPN); één actieve sessie per machine."
 },
 "Chrome Remote Desktop": {
  "cat": "Browser · gratis",
  "msg": "Browsergebaseerde afstandsbediening van Google, volledig gratis.",
  "self": "Volledig gratis, platformonafhankelijk, draait in de browser; vereist een Google-account.",
  "hw": "Geen betaalde niveaus; ondersteunt onbeheerde toegang en basis-bestandsoverdracht, maar de functies zijn vrij basaal (geen hoge kwaliteit/meerdere monitoren/enterprise-controle).",
  "tip": "Tijdelijke, platformonafhankelijke, minimale, gratis persoonlijke toegang.",
  "scene": "Vrij basaal; afhankelijk van een Google-account en netwerk (Google moet bereikbaar zijn)."
 },
 "Windows Quick Assist": {
  "cat": "Ingebouwd · eenmalige hulp",
  "msg": "De in Windows 10/11 ingebouwde Quick Assist-tool.",
  "self": "Gratis, in Windows ingebouwd; bedoeld voor eenmalige externe hulp.",
  "hw": "Geen betaalde niveaus; alleen begeleide hulp (beide partijen aanwezig) — geen langdurige onbeheerde bediening.",
  "tip": "Eenmalige probleemoplossing voor familie/collega's.",
  "scene": "Alleen begeleide hulp, geen continue bediening; vereist een Microsoft-account en beide personen aan de computer."
 }
};
window.ALIAS = {"todesk": "ToDesk", "anydesk": "AnyDesk", "teamviewer": "TeamViewer", "tv": "TeamViewer", "rustdesk": "RustDesk", "rdp": "Microsoft Remote Desktop", "mstsc": "Microsoft Remote Desktop", "microsoft": "Microsoft Remote Desktop", "extern bureaublad": "Microsoft Remote Desktop", "chrome": "Chrome Remote Desktop", "google": "Chrome Remote Desktop", "quick assist": "Windows Quick Assist", "snelle hulp": "Windows Quick Assist", "sunlogin": "Sunlogin", "oray": "Sunlogin", "zonnebloem": "Sunlogin"};
window.LABELS = {"cat": "", "msg": "Leverancier / positie", "self": "Gratis niveau", "hw": "Betaalde niveaus & kernfuncties", "tip": "Ideaal voor", "scene": "Let op", "miss": "Niet vermeld — probeer een andere naam of zie de volledige tabel hieronder."};
window.THEAD = ["Product", "Type", "Gratis niveau", "Betaalde niveaus & kernfuncties"];
