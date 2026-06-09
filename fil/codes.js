window.CODES = {
 "Sunlogin": {
  "cat": "All-in-one (sikat sa China)",
  "msg": "Mula sa Oray; mahigit 15 bilyong minuto ng matatag na koneksyon bawat buwan, may software at hardware na remote control.",
  "self": "Libreng bersyon sa lahat ng platform (Win/Mac/Linux/Android/iOS/HarmonyOS): basic na desktop control + file transfer, walang limitasyon sa oras/session; sapat para sa personal, di-komersyal na gamit.",
  "hw": "Guazi mula ~158 CNY/taon (mas mataas na kalidad / walang limitasyong transfer / walang ads); Super mula ~298 CNY (4K, 144 fps, remote CMD, privacy mode, remote camera); Global 898 CNY (cross-border); Xiaoyuzhou 1288 CNY (IT, RDP/SSH).",
  "tip": "Personal/home users sa China, multi-device, o gustong may hardware (wake-on-LAN dongle).",
  "scene": "Kailangan ng Enterprise plan para sa komersyal (mula 598 CNY/upuan/taon); mataas na kalidad / cross-border / IT ay bayad na tier."
 },
 "ToDesk": {
  "cat": "China · sulit",
  "msg": "Value-focused na Chinese remote control; opisyal na mahigit 200 milyong device.",
  "self": "Libreng personal tier (walang komersyal na lisensya); sapat ang basic control + file transfer para personal.",
  "hw": "Pro 158–638 CNY/taon (listahan ng 100–300 device, 10 sabayang control, 2K, dedicated fast lane); Enterprise Standard 805 CNY/user/taon (SSO, audit/recording, AD domain, silent deploy).",
  "tip": "Mabigat na personal users sa China na pumapansin sa kalidad/bilis, at maliliit na team.",
  "scene": "Kailangan ng Enterprise/Team para komersyal; nililimitahan ng libreng tier ang concurrency at komersyal na karapatan."
 },
 "AnyDesk": {
  "cat": "Internasyonal · magaan",
  "msg": "Magaan na remote control mula Germany; ISO/IEC 27001 certified ang data centers.",
  "self": "Libre para personal lang; magaan at mabilis kumonekta.",
  "hw": "Solo ~€23,12/buwan (annual billing; 1 user / 3 device / 1 koneksyon / 100 unattended); Standard at Advanced umaangat (20–100 user, dagdag na koneksyon); file transfer / recording / privacy mode.",
  "tip": "Magaan na cross-border access, internasyonal na endpoint, team na may pagtutok sa compliance (ISO 27001).",
  "scene": "Presyo sa euro at annual billing; personal lang ang libreng tier — kailangan ng lisensya para komersyal."
 },
 "TeamViewer": {
  "cat": "Internasyonal · enterprise veteran",
  "msg": "Beteranong global remote control na may mataas na enterprise share.",
  "self": "Libre nang mahigpit para sa di-komersyal (tulong sa pamilya / sariling device); kapag na-detect na komersyal, naputol ang session (~5 min, may dokumentadong maling pag-detect).",
  "hw": "Remote Access $24,90/buwan, Business $50,90/buwan (walang limitasyong endpoint, 1 session), Premium $112,90, Corporate $229,90 (30 user, 3 session); enterprise Tensor may SSO / audit.",
  "tip": "Multinational na kumpanya, IT outsourcing, team na nangangailangan ng matured ecosystem at kontrol.",
  "scene": "Annual billing lang, walang perpetual license; madaling ma-detect at maputol ang libreng komersyal na gamit."
 },
 "RustDesk": {
  "cat": "Open source · self-host",
  "msg": "Open-source (GPL), self-hosted na remote control na nakatuon sa data sovereignty at P2P.",
  "self": "Libreng OSS, ganap na self-hosted, walang limitasyong managed device, P2P — pero walang web console.",
  "hw": "Individual Pro $9,90/buwan (annual; 1 user / 20 device / web console / 2FA); Basic $19,90 (10 user / 100 device / OIDC/LDAP / custom client); Customized kada user/device.",
  "tip": "Technical team / advanced users na gustong may kontrol sa data at nagpapatakbo ng sariling server.",
  "scene": "Kailangan mong patakbuhin mismo ang hbbs server; di-matatag ang public relay — self-hosting ang nagpapatatag nito."
 },
 "Microsoft Remote Desktop": {
  "cat": "Built-in · RDP",
  "msg": "Built-in na Remote Desktop (RDP) sa Windows; walang cloud relay ng vendor.",
  "self": "Libre, pero kailangang Windows Pro/Enterprise/Education ang host (ang Home ay client lang, hindi host).",
  "hw": "One-time ~$99 ang upgrade sa Win Pro; buong feature sa LAN, clipboard/drive mapping, NLA security; sa internet kailangan ng sariling VPN / port forwarding / gateway.",
  "tip": "Iisang LAN o corporate intranet, may Pro license na, walang dagdag na software.",
  "scene": "Hindi maaaring host ang Home edition; mapanganib ang direktang public connect (gumamit ng VPN); isang active session kada makina."
 },
 "Chrome Remote Desktop": {
  "cat": "Browser · libre",
  "msg": "Browser-based na remote control ng Google, ganap na libre.",
  "self": "Ganap na libre, cross-platform, tumatakbo sa browser; kailangan ng Google account.",
  "hw": "Walang bayad na tier; sumusuporta sa unattended access at basic file transfer, pero medyo basic ang feature (walang mataas na kalidad/multi-monitor/enterprise control).",
  "tip": "Pansamantala, cross-platform, minimal, walang gastos na personal access.",
  "scene": "Medyo basic; umaasa sa Google account at network (kailangang ma-reach ang Google)."
 },
 "Windows Quick Assist": {
  "cat": "Built-in · isahang tulong",
  "msg": "Ang Quick Assist tool na built-in sa Windows 10/11.",
  "self": "Libre, built-in sa Windows; para sa isahang remote assistance.",
  "hw": "Walang bayad na tier; attended help lang (parehong present) — walang pangmatagalang unattended control.",
  "tip": "Isahang pag-troubleshoot para sa pamilya/katrabaho.",
  "scene": "Attended help lang, hindi tuloy-tuloy na control; kailangan ng Microsoft account at pareho sa harap ng computer."
 }
};
window.ALIAS = {"todesk": "ToDesk", "anydesk": "AnyDesk", "teamviewer": "TeamViewer", "tv": "TeamViewer", "rustdesk": "RustDesk", "rdp": "Microsoft Remote Desktop", "mstsc": "Microsoft Remote Desktop", "microsoft": "Microsoft Remote Desktop", "remote desktop": "Microsoft Remote Desktop", "chrome": "Chrome Remote Desktop", "google": "Chrome Remote Desktop", "quick assist": "Windows Quick Assist", "mabilis na tulong": "Windows Quick Assist", "sunlogin": "Sunlogin", "oray": "Sunlogin", "mirasol": "Sunlogin"};
window.LABELS = {"cat": "", "msg": "Vendor / posisyon", "self": "Libreng tier", "hw": "Bayad na tier & pangunahing feature", "tip": "Angkop para sa", "scene": "Pag-ingatan", "miss": "Wala sa listahan — subukan ang ibang pangalan o tingnan ang buong talahanayan sa baba."};
window.THEAD = ["Produkto", "Uri", "Libreng tier", "Bayad na tier & pangunahing feature"];
