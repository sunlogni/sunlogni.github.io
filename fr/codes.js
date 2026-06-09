window.CODES = {
 "Sunlogin": {
  "cat": "Tout-en-un (populaire en Chine)",
  "msg": "Par Oray ; plus de 15 milliards de minutes de connexion stable par mois, avec une gamme de contrôle à distance logiciel et matériel.",
  "self": "Version gratuite sur toutes les plateformes (Win/Mac/Linux/Android/iOS/HarmonyOS) : contrôle de bureau de base + transfert de fichiers, sans limite de temps ni de sessions ; suffisant pour un usage personnel et non commercial.",
  "hw": "Guazi à partir de ~158 CNY/an (meilleure qualité / transfert illimité / sans pub) ; Super à partir de ~298 CNY (4K, 144 fps, CMD distant, mode confidentialité, caméra distante) ; Global 898 CNY (transfrontalier) ; Xiaoyuzhou 1288 CNY (IT, RDP/SSH).",
  "tip": "Particuliers/foyers en Chine, multi-appareils, ou qui veut du matériel (clé de démarrage à distance).",
  "scene": "L'usage commercial exige le plan Entreprise (à partir de 598 CNY/siège/an) ; haute qualité / transfrontalier / IT sont des niveaux payants."
 },
 "ToDesk": {
  "cat": "Chine · rapport qualité-prix",
  "msg": "Contrôle à distance chinois axé sur la valeur ; officiellement plus de 200 millions d'appareils.",
  "self": "Niveau personnel gratuit (sans licence commerciale) ; le contrôle de base + transfert de fichiers suffit pour un usage personnel.",
  "hw": "Pro 158–638 CNY/an (liste de 100–300 appareils, 10 contrôles simultanés, 2K, voie rapide dédiée) ; Entreprise Standard 805 CNY/utilisateur/an (SSO, audit/enregistrement, domaine AD, déploiement silencieux).",
  "tip": "Particuliers intensifs en Chine attentifs à la qualité/vitesse, plus petites équipes.",
  "scene": "L'usage commercial exige Entreprise/Équipe ; le niveau gratuit limite la concurrence et les droits commerciaux."
 },
 "AnyDesk": {
  "cat": "International · léger",
  "msg": "Contrôle à distance léger venu d'Allemagne ; centres de données certifiés ISO/IEC 27001.",
  "self": "Gratuit pour un usage personnel uniquement ; léger et connexion rapide.",
  "hw": "Solo ~23,12 €/mois (facturation annuelle ; 1 utilisateur / 3 appareils / 1 connexion / 100 sans surveillance) ; Standard et Advanced montent en charge (20–100 utilisateurs, connexions en option) ; transfert de fichiers / enregistrement / mode confidentialité.",
  "tip": "Accès léger transfrontalier, points de présence internationaux, équipes soucieuses de conformité (ISO 27001).",
  "scene": "Prix en euros et facturation annuelle ; le niveau gratuit est personnel uniquement — l'usage commercial doit être licencié."
 },
 "TeamViewer": {
  "cat": "International · vétéran entreprise",
  "msg": "Contrôle à distance mondial vétéran avec forte part entreprise.",
  "self": "Gratuit strictement pour un usage non commercial (aider la famille / vos propres appareils) ; la détection d'usage commercial coupe la session (~5 min, avec faux positifs documentés).",
  "hw": "Remote Access 24,90 $/mois, Business 50,90 $/mois (points de terminaison illimités, 1 session), Premium 112,90 $, Corporate 229,90 $ (30 utilisateurs, 3 sessions) ; Tensor pour l'entreprise ajoute SSO / audit.",
  "tip": "Entreprises multinationales, infogérance IT, équipes voulant un écosystème mûr et des contrôles.",
  "scene": "Facturation annuelle uniquement, pas de licence perpétuelle ; l'usage commercial gratuit est facilement détecté et coupé."
 },
 "RustDesk": {
  "cat": "Open source · auto-hébergé",
  "msg": "Contrôle à distance open source (GPL), auto-hébergé, axé sur la souveraineté des données et le P2P.",
  "self": "OSS gratuit, entièrement auto-hébergé, appareils gérés illimités, P2P — mais sans console web.",
  "hw": "Individual Pro 9,90 $/mois (annuel ; 1 utilisateur / 20 appareils / console web / 2FA) ; Basic 19,90 $ (10 utilisateurs / 100 appareils / OIDC/LDAP / client personnalisé) ; Customized par utilisateur/appareil.",
  "tip": "Équipes techniques / experts qui veulent la maîtrise des données et gèrent leur propre serveur.",
  "scene": "Vous devez exploiter vous-même le serveur hbbs ; le relais public est instable — l'auto-hébergement le rend solide."
 },
 "Microsoft Remote Desktop": {
  "cat": "Intégré · RDP",
  "msg": "Bureau à distance (RDP) intégré à Windows ; sans relais cloud du fournisseur.",
  "self": "Gratuit, mais l'hôte doit être Windows Pro/Entreprise/Éducation (Famille ne peut être que client, pas hôte).",
  "hw": "Passer à Win Pro coûte ~99 $ une fois ; toutes les fonctions en LAN, mappage presse-papiers/lecteurs, sécurité NLA ; par internet il faut votre propre VPN / redirection de ports / passerelle.",
  "tip": "Même LAN ou intranet d'entreprise, licences Pro existantes, zéro logiciel supplémentaire.",
  "scene": "L'édition Famille ne peut être hôte ; la connexion directe publique est risquée (utilisez un VPN) ; une session active par machine."
 },
 "Chrome Remote Desktop": {
  "cat": "Navigateur · gratuit",
  "msg": "Contrôle à distance dans le navigateur de Google, entièrement gratuit.",
  "self": "Entièrement gratuit, multiplateforme, fonctionne dans le navigateur ; nécessite un compte Google.",
  "hw": "Aucun niveau payant ; prend en charge l'accès sans surveillance et le transfert de fichiers de base, mais des fonctions assez basiques (pas de haute qualité/multi-écran/contrôles entreprise).",
  "tip": "Accès personnel temporaire, multiplateforme, minimal et sans coût.",
  "scene": "Assez basique ; dépend d'un compte Google et du réseau (Google doit être accessible)."
 },
 "Windows Quick Assist": {
  "cat": "Intégré · aide ponctuelle",
  "msg": "L'outil Quick Assist intégré à Windows 10/11.",
  "self": "Gratuit, intégré à Windows ; conçu pour une assistance à distance ponctuelle.",
  "hw": "Aucun niveau payant ; assistance avec présence uniquement (les deux parties présentes) — pas de contrôle sans surveillance à long terme.",
  "tip": "Dépannage ponctuel pour la famille/les collègues.",
  "scene": "Assistance présentielle uniquement, pas de contrôle continu ; nécessite un compte Microsoft et les deux personnes présentes."
 }
};
window.ALIAS = {"todesk": "ToDesk", "anydesk": "AnyDesk", "teamviewer": "TeamViewer", "tv": "TeamViewer", "rustdesk": "RustDesk", "rdp": "Microsoft Remote Desktop", "mstsc": "Microsoft Remote Desktop", "microsoft": "Microsoft Remote Desktop", "bureau a distance": "Microsoft Remote Desktop", "chrome": "Chrome Remote Desktop", "google": "Chrome Remote Desktop", "quick assist": "Windows Quick Assist", "assistance rapide": "Windows Quick Assist", "sunlogin": "Sunlogin", "oray": "Sunlogin", "tournesol": "Sunlogin"};
window.LABELS = {"cat": "", "msg": "Fournisseur / position", "self": "Niveau gratuit", "hw": "Niveaux payants et fonctions clés", "tip": "Idéal pour", "scene": "Attention", "miss": "Non listé — essayez un autre nom ou consultez le tableau complet ci-dessous."};
window.THEAD = ["Produit", "Type", "Niveau gratuit", "Niveaux payants et fonctions clés"];
