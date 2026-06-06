window.CODES = {
 "Sunlogin": {
  "cat": "All-in-one (China's popular)",
  "msg": "By Oray; 15B+ minutes of stable connection per month, with a software + hardware remote-control lineup.",
  "self": "Free tier on every platform (Win/Mac/Linux/Android/iOS/HarmonyOS): basic desktop control + file transfer, no time/session limit; fine for personal, non-commercial use.",
  "hw": "Guazi VIP from ~CNY 158/yr (higher quality / unthrottled transfer / no ads); Super ~CNY 298+ (4K, 144fps, remote CMD, blackout-privacy, remote camera); Global CNY 898 (cross-border); Xiaoyuzhou CNY 1288 (IT ops, RDP/SSH).",
  "tip": "Personal/home users in China, multi-device, or anyone wanting hardware (wake-on-LAN dongle).",
  "scene": "Commercial use needs the Enterprise plan (from CNY 598/seat/yr); high quality / cross-border / IT ops are paid tiers."
 },
 "ToDesk": {
  "cat": "China · value pick",
  "msg": "Value-focused Chinese remote control; officially 200M+ devices.",
  "self": "Free personal tier (no commercial license); basic remote control + file transfer is enough for personal use.",
  "hw": "Pro CNY 158–638/yr (device list 100–300, 10 simultaneous controls, 2K, dedicated fast lane); Enterprise Standard CNY 805/user/yr (SSO, session audit/recording, AD domain, silent deploy).",
  "tip": "Heavy personal users in China who care about quality/speed, plus small-team ops.",
  "scene": "Commercial use needs Enterprise/Team; the free tier limits concurrency and commercial rights."
 },
 "AnyDesk": {
  "cat": "Overseas · lightweight",
  "msg": "Lightweight remote control from Germany; data centers are ISO/IEC 27001 certified.",
  "self": "Free for personal use only; light and fast to connect.",
  "hw": "Solo ~EUR 23.12/mo (billed annually; 1 user / 3 devices / 1 connection / 100 unattended); Standard & Advanced scale up (20–100 users, add-on connections); file transfer / session recording / privacy mode.",
  "tip": "Cross-border lightweight access, overseas endpoints, compliance-minded teams (ISO 27001).",
  "scene": "Priced in EUR and billed annually; the free tier is personal-only — commercial use must be licensed."
 },
 "TeamViewer": {
  "cat": "Overseas · legacy enterprise",
  "msg": "Veteran global remote control with strong enterprise share.",
  "self": "Free for strictly non-commercial use (helping family / your own devices); commercial detection cuts sessions (~5 min, with documented false positives).",
  "hw": "Remote Access $24.90/mo, Business $50.90/mo (unlimited endpoints, 1 session), Premium $112.90, Corporate $229.90 (30 users, 3 sessions); enterprise Tensor adds SSO / audit.",
  "tip": "Multinational enterprises, IT outsourcing, teams needing a mature ecosystem and controls.",
  "scene": "Annual billing only, no perpetual license; free commercial use is easily flagged and cut off."
 },
 "RustDesk": {
  "cat": "Open source · self-host",
  "msg": "Open-source (GPL), self-hosted remote control focused on data sovereignty and P2P.",
  "self": "Free OSS, fully self-hosted, unlimited managed devices, P2P — but no web console.",
  "hw": "Individual Pro $9.90/mo (billed annually; 1 user / 20 devices / web console / 2FA); Basic $19.90 (10 users / 100 devices / OIDC/LDAP / custom client); Customized adds per-user/per-device.",
  "tip": "Technical teams/power users who want data ownership and run their own server.",
  "scene": "You must operate the hbbs server yourself; the public relay is unstable — self-hosting is what makes it solid."
 },
 "Microsoft Remote Desktop": {
  "cat": "Built-in · RDP",
  "msg": "Windows built-in Remote Desktop (RDP); no vendor cloud relay.",
  "self": "Free, but the host must be Windows Pro/Enterprise/Education (Home can't be a host, only a client).",
  "hw": "Upgrading to Win Pro is a one-time ~$99; full features on LAN, clipboard/drive mapping, NLA security; over the internet you need your own VPN / port-forward / gateway.",
  "tip": "Same LAN or corporate intranet, existing Pro licenses, zero extra software.",
  "scene": "Home edition can't be a host; public direct connect is risky (use a VPN); one active session per machine."
 },
 "Chrome Remote Desktop": {
  "cat": "Browser · free",
  "msg": "Google's browser-based remote control, completely free.",
  "self": "Completely free, cross-platform, runs in the browser; needs a Google account.",
  "hw": "No paid tiers; supports unattended access and basic file transfer, but features are fairly basic (no high-quality/multi-monitor/enterprise controls).",
  "tip": "Temporary, cross-platform, minimal, zero-cost personal access.",
  "scene": "Fairly basic; relies on a Google account and network (Google must be reachable)."
 },
 "Windows Quick Assist": {
  "cat": "Built-in · attended help",
  "msg": "The Quick Assist tool built into Windows 10/11.",
  "self": "Free, built into Windows; meant for one-off remote assistance.",
  "hw": "No paid tiers; attended help only (both sides present) — no unattended long-term control.",
  "tip": "One-off troubleshooting for family/colleagues.",
  "scene": "Attended help only, not long-term remote control; needs a Microsoft account and both people present."
 }
};
window.ALIAS = {"todesk": "ToDesk", "anydesk": "AnyDesk", "teamviewer": "TeamViewer", "tv": "TeamViewer", "rustdesk": "RustDesk", "rdp": "Microsoft Remote Desktop", "mstsc": "Microsoft Remote Desktop", "microsoft": "Microsoft Remote Desktop", "windows rdp": "Microsoft Remote Desktop", "chrome": "Chrome Remote Desktop", "google": "Chrome Remote Desktop", "quick assist": "Windows Quick Assist", "quickassist": "Windows Quick Assist", "sunlogin": "Sunlogin", "oray": "Sunlogin", "向日葵": "Sunlogin"};
window.LABELS={cat:"",msg:"Vendor / position",self:"Free tier",hw:"Paid tiers & key features",tip:"Best for",scene:"Watch out",miss:"Not listed — try another name or see the full table below."};
window.THEAD=["Product","Type","Free tier","Paid tiers & key features"];
