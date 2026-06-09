window.CODES = {
 "Sunlogin": {
  "cat": "Todo en uno (popular en China)",
  "msg": "De Oray; más de 15.000 millones de minutos de conexión estable al mes, con una gama de control remoto por software y hardware.",
  "self": "Versión gratuita en todas las plataformas (Win/Mac/Linux/Android/iOS/HarmonyOS): control de escritorio básico + transferencia de archivos, sin límite de tiempo ni de sesiones; suficiente para uso personal y no comercial.",
  "hw": "Guazi desde ~158 CNY/año (mayor calidad / transferencia sin límite / sin anuncios); Super desde ~298 CNY (4K, 144 fps, CMD remoto, modo privacidad, cámara remota); Global 898 CNY (transfronterizo); Xiaoyuzhou 1288 CNY (TI, RDP/SSH).",
  "tip": "Usuarios personales/domésticos en China, multidispositivo, o quien quiera hardware (llave de encendido remoto).",
  "scene": "El uso comercial requiere el plan Empresa (desde 598 CNY/usuario/año); alta calidad / transfronterizo / TI son niveles de pago."
 },
 "ToDesk": {
  "cat": "China · relación calidad-precio",
  "msg": "Control remoto chino centrado en el valor; oficialmente más de 200 millones de dispositivos.",
  "self": "Nivel personal gratuito (sin licencia comercial); el control remoto básico + transferencia de archivos basta para uso personal.",
  "hw": "Pro 158–638 CNY/año (lista de 100–300 dispositivos, 10 controles simultáneos, 2K, canal rápido dedicado); Empresa Estándar 805 CNY/usuario/año (SSO, auditoría/grabación, dominio AD, despliegue silencioso).",
  "tip": "Usuarios personales intensivos en China que valoran calidad/velocidad, además de equipos pequeños.",
  "scene": "El uso comercial requiere Empresa/Equipo; el nivel gratuito limita la concurrencia y los derechos comerciales."
 },
 "AnyDesk": {
  "cat": "Internacional · ligero",
  "msg": "Control remoto ligero de Alemania; centros de datos certificados ISO/IEC 27001.",
  "self": "Gratis solo para uso personal; ligero y de conexión rápida.",
  "hw": "Solo ~23,12 €/mes (facturación anual; 1 usuario / 3 dispositivos / 1 conexión / 100 sin supervisión); Standard y Advanced escalan (20–100 usuarios, conexiones adicionales); transferencia de archivos / grabación / modo privacidad.",
  "tip": "Acceso ligero transfronterizo, nodos internacionales, equipos atentos al cumplimiento (ISO 27001).",
  "scene": "Precio en euros y facturación anual; el nivel gratuito es solo personal: el uso comercial exige licencia."
 },
 "TeamViewer": {
  "cat": "Internacional · veterano empresarial",
  "msg": "Control remoto global veterano con fuerte cuota empresarial.",
  "self": "Gratis estrictamente para uso no comercial (ayudar a familia / tus propios equipos); la detección de uso comercial corta la sesión (~5 min, con falsos positivos documentados).",
  "hw": "Remote Access 24,90 $/mes, Business 50,90 $/mes (endpoints ilimitados, 1 sesión), Premium 112,90 $, Corporate 229,90 $ (30 usuarios, 3 sesiones); Tensor para empresa añade SSO / auditoría.",
  "tip": "Empresas multinacionales, externalización de TI, equipos que necesitan un ecosistema maduro y controles.",
  "scene": "Solo facturación anual, sin licencia perpetua; el uso comercial gratuito se detecta y corta con facilidad."
 },
 "RustDesk": {
  "cat": "Código abierto · autoalojado",
  "msg": "Control remoto de código abierto (GPL), autoalojado, centrado en la soberanía de datos y P2P.",
  "self": "OSS gratuito, totalmente autoalojado, dispositivos gestionados ilimitados, P2P — pero sin consola web.",
  "hw": "Individual Pro 9,90 $/mes (facturación anual; 1 usuario / 20 dispositivos / consola web / 2FA); Basic 19,90 $ (10 usuarios / 100 dispositivos / OIDC/LDAP / cliente personalizado); Customized añade por usuario/dispositivo.",
  "tip": "Equipos técnicos / usuarios avanzados que quieren control de sus datos y gestionan su propio servidor.",
  "scene": "Debes operar tú mismo el servidor hbbs; el relé público es inestable — autoalojarlo es lo que lo hace sólido."
 },
 "Microsoft Remote Desktop": {
  "cat": "Integrado · RDP",
  "msg": "Escritorio remoto (RDP) integrado en Windows; sin relé en la nube del proveedor.",
  "self": "Gratis, pero el equipo controlado debe ser Windows Pro/Enterprise/Education (Home no puede ser host, solo cliente).",
  "hw": "Actualizar a Win Pro es un pago único de ~99 $; todas las funciones en LAN, mapeo de portapapeles/unidades, seguridad NLA; por internet necesitas tu propia VPN / reenvío de puertos / gateway.",
  "tip": "Misma LAN o intranet corporativa, licencias Pro existentes, cero software adicional.",
  "scene": "La edición Home no puede ser host; la conexión directa pública es arriesgada (usa VPN); una sesión activa por equipo."
 },
 "Chrome Remote Desktop": {
  "cat": "Navegador · gratis",
  "msg": "Control remoto en el navegador de Google, totalmente gratuito.",
  "self": "Totalmente gratis, multiplataforma, funciona en el navegador; requiere una cuenta de Google.",
  "hw": "Sin niveles de pago; admite acceso sin supervisión y transferencia básica de archivos, pero las funciones son básicas (sin alta calidad/multimonitor/controles de empresa).",
  "tip": "Acceso personal temporal, multiplataforma, mínimo y sin coste.",
  "scene": "Bastante básico; depende de una cuenta de Google y de la red (Google debe ser accesible)."
 },
 "Windows Quick Assist": {
  "cat": "Integrado · asistencia puntual",
  "msg": "La herramienta Quick Assist integrada en Windows 10/11.",
  "self": "Gratis, integrada en Windows; pensada para asistencia remota puntual.",
  "hw": "Sin niveles de pago; solo asistencia con presencia (ambas partes presentes) — sin control sin supervisión a largo plazo.",
  "tip": "Resolución puntual de problemas para familia/compañeros.",
  "scene": "Solo asistencia presencial, no control remoto continuo; requiere cuenta de Microsoft y ambas personas presentes."
 }
};
window.ALIAS = {"todesk": "ToDesk", "anydesk": "AnyDesk", "teamviewer": "TeamViewer", "tv": "TeamViewer", "rustdesk": "RustDesk", "rdp": "Microsoft Remote Desktop", "mstsc": "Microsoft Remote Desktop", "microsoft": "Microsoft Remote Desktop", "escritorio remoto": "Microsoft Remote Desktop", "chrome": "Chrome Remote Desktop", "google": "Chrome Remote Desktop", "quick assist": "Windows Quick Assist", "asistencia rapida": "Windows Quick Assist", "sunlogin": "Sunlogin", "oray": "Sunlogin", "girasol": "Sunlogin"};
window.LABELS = {"cat": "", "msg": "Proveedor / posición", "self": "Nivel gratuito", "hw": "Niveles de pago y funciones clave", "tip": "Ideal para", "scene": "Atención", "miss": "No listado — prueba otro nombre o mira la tabla completa abajo."};
window.THEAD = ["Producto", "Tipo", "Nivel gratuito", "Niveles de pago y funciones clave"];
