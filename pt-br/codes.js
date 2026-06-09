window.CODES = {
 "Sunlogin": {
  "cat": "Tudo-em-um (popular na China)",
  "msg": "Da Oray; mais de 15 bilhões de minutos de conexão estável por mês, com uma linha de controle remoto por software e hardware.",
  "self": "Versão gratuita em todas as plataformas (Win/Mac/Linux/Android/iOS/HarmonyOS): controle de desktop básico + transferência de arquivos, sem limite de tempo ou de sessões; suficiente para uso pessoal e não comercial.",
  "hw": "Guazi a partir de ~158 CNY/ano (mais qualidade / transferência ilimitada / sem anúncios); Super a partir de ~298 CNY (4K, 144 fps, CMD remoto, modo privacidade, câmera remota); Global 898 CNY (transfronteiriço); Xiaoyuzhou 1288 CNY (TI, RDP/SSH).",
  "tip": "Usuários pessoais/domésticos na China, multidispositivo, ou quem quer hardware (chave de ligar remotamente).",
  "scene": "O uso comercial exige o plano Empresarial (a partir de 598 CNY/assento/ano); alta qualidade / transfronteiriço / TI são níveis pagos."
 },
 "ToDesk": {
  "cat": "China · custo-benefício",
  "msg": "Controle remoto chinês com foco em valor; oficialmente mais de 200 milhões de dispositivos.",
  "self": "Nível pessoal gratuito (sem licença comercial); o controle básico + transferência de arquivos basta para uso pessoal.",
  "hw": "Pro 158–638 CNY/ano (lista de 100–300 dispositivos, 10 controles simultâneos, 2K, canal rápido dedicado); Empresarial Padrão 805 CNY/usuário/ano (SSO, auditoria/gravação, domínio AD, implantação silenciosa).",
  "tip": "Usuários pessoais intensivos na China atentos a qualidade/velocidade, além de equipes pequenas.",
  "scene": "O uso comercial exige Empresarial/Equipe; o nível gratuito limita a simultaneidade e os direitos comerciais."
 },
 "AnyDesk": {
  "cat": "Internacional · leve",
  "msg": "Controle remoto leve da Alemanha; data centers certificados ISO/IEC 27001.",
  "self": "Grátis apenas para uso pessoal; leve e com conexão rápida.",
  "hw": "Solo ~23,12 €/mês (cobrança anual; 1 usuário / 3 dispositivos / 1 conexão / 100 sem supervisão); Standard e Advanced escalam (20–100 usuários, conexões adicionais); transferência de arquivos / gravação / modo privacidade.",
  "tip": "Acesso leve transfronteiriço, pontos internacionais, equipes atentas à conformidade (ISO 27001).",
  "scene": "Preço em euros e cobrança anual; o nível gratuito é só pessoal — o uso comercial exige licença."
 },
 "TeamViewer": {
  "cat": "Internacional · veterano empresarial",
  "msg": "Controle remoto global veterano com forte fatia empresarial.",
  "self": "Grátis estritamente para uso não comercial (ajudar a família / seus próprios aparelhos); a detecção de uso comercial corta a sessão (~5 min, com falsos positivos documentados).",
  "hw": "Remote Access US$ 24,90/mês, Business US$ 50,90/mês (endpoints ilimitados, 1 sessão), Premium US$ 112,90, Corporate US$ 229,90 (30 usuários, 3 sessões); Tensor para empresa adiciona SSO / auditoria.",
  "tip": "Empresas multinacionais, terceirização de TI, equipes que precisam de ecossistema maduro e controles.",
  "scene": "Só cobrança anual, sem licença perpétua; o uso comercial gratuito é facilmente detectado e cortado."
 },
 "RustDesk": {
  "cat": "Código aberto · auto-hospedado",
  "msg": "Controle remoto de código aberto (GPL), auto-hospedado, focado em soberania de dados e P2P.",
  "self": "OSS gratuito, totalmente auto-hospedado, dispositivos gerenciados ilimitados, P2P — mas sem console web.",
  "hw": "Individual Pro US$ 9,90/mês (anual; 1 usuário / 20 dispositivos / console web / 2FA); Basic US$ 19,90 (10 usuários / 100 dispositivos / OIDC/LDAP / cliente personalizado); Customized por usuário/dispositivo.",
  "tip": "Equipes técnicas / experts que querem controle dos dados e operam o próprio servidor.",
  "scene": "Você precisa operar o servidor hbbs; o relay público é instável — auto-hospedar é o que o torna sólido."
 },
 "Microsoft Remote Desktop": {
  "cat": "Integrado · RDP",
  "msg": "Área de Trabalho Remota (RDP) integrada ao Windows; sem relay em nuvem do fornecedor.",
  "self": "Grátis, mas o host precisa ser Windows Pro/Enterprise/Education (Home só pode ser cliente, não host).",
  "hw": "Atualizar para Win Pro custa ~US$ 99 uma vez; todos os recursos na LAN, mapeamento de área de transferência/unidades, segurança NLA; pela internet, é preciso VPN / encaminhamento de portas / gateway próprios.",
  "tip": "Mesma LAN ou intranet corporativa, licenças Pro existentes, zero software adicional.",
  "scene": "A edição Home não pode ser host; a conexão direta pública é arriscada (use VPN); uma sessão ativa por máquina."
 },
 "Chrome Remote Desktop": {
  "cat": "Navegador · grátis",
  "msg": "Controle remoto no navegador do Google, totalmente gratuito.",
  "self": "Totalmente grátis, multiplataforma, roda no navegador; requer uma conta Google.",
  "hw": "Sem níveis pagos; suporta acesso sem supervisão e transferência básica de arquivos, mas recursos bem básicos (sem alta qualidade/multimonitor/controles corporativos).",
  "tip": "Acesso pessoal temporário, multiplataforma, mínimo e sem custo.",
  "scene": "Bem básico; depende de uma conta Google e da rede (o Google precisa estar acessível)."
 },
 "Windows Quick Assist": {
  "cat": "Integrado · ajuda pontual",
  "msg": "A ferramenta Quick Assist integrada ao Windows 10/11.",
  "self": "Grátis, integrada ao Windows; pensada para assistência remota pontual.",
  "hw": "Sem níveis pagos; apenas assistência com presença (ambas as partes presentes) — sem controle sem supervisão de longo prazo.",
  "tip": "Resolução pontual para família/colegas.",
  "scene": "Apenas assistência presencial, não controle contínuo; exige conta Microsoft e ambas as pessoas presentes."
 }
};
window.ALIAS = {"todesk": "ToDesk", "anydesk": "AnyDesk", "teamviewer": "TeamViewer", "tv": "TeamViewer", "rustdesk": "RustDesk", "rdp": "Microsoft Remote Desktop", "mstsc": "Microsoft Remote Desktop", "microsoft": "Microsoft Remote Desktop", "area de trabalho remota": "Microsoft Remote Desktop", "chrome": "Chrome Remote Desktop", "google": "Chrome Remote Desktop", "quick assist": "Windows Quick Assist", "assistencia rapida": "Windows Quick Assist", "sunlogin": "Sunlogin", "oray": "Sunlogin", "girassol": "Sunlogin"};
window.LABELS = {"cat": "", "msg": "Fornecedor / posição", "self": "Nível gratuito", "hw": "Níveis pagos e recursos principais", "tip": "Ideal para", "scene": "Atenção", "miss": "Não listado — tente outro nome ou veja a tabela completa abaixo."};
window.THEAD = ["Produto", "Tipo", "Nível gratuito", "Níveis pagos e recursos principais"];
