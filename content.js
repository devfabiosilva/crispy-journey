/**
 * content.js
 * -----------------------------------------------------------------------
 * Edite SOMENTE este arquivo para atualizar o site.
 * Não precisa saber HTML/CSS — só preencher os campos abaixo.
 * Depois de editar, basta commitar e dar push:
 *
 *   git add content.js
 *   git commit -m "Atualiza conteúdo"
 *   git push
 *
 * O GitHub Pages publica automaticamente em alguns segundos.
 * -----------------------------------------------------------------------
 */

window.SITE_CONTENT = {

  // ---------------------------------------------------------------------
  // IDENTIDADE
  // ---------------------------------------------------------------------
  profile: {
    name: "Fábio Pereira da Silva",
    role: "Embedded & Software Engineer",
    tagline:
      "Sistemas de baixo nível, performance e hardware — escrevo sobre o que aprendo construindo do zero.",
    location: "Rio de Janeiro, BR",
    avatarInitials: "FS", // usado se você não tiver foto
  },

  // ---------------------------------------------------------------------
  // LINKS — canal, redes, contato
  // troque "#" pela URL real de cada um. Deixe vazio ("") os que não usar.
  // ---------------------------------------------------------------------
  links: [
    { label: "GitHub", url: "https://github.com/devfabiosilva" },
    { label: "YouTube", url: "https://www.youtube.com/@ocurioso1981" },
    { label: "Instagram", url: "https://www.instagram.com/fabio.silva1981/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/devfabiosilva/" },
    { label: "E-mail", url: "mailto:fabioegel@gmail.com" },
  ],

  // ---------------------------------------------------------------------
  // ARTIGOS / PUBLICAÇÕES
  // tag: categoria curta (ex: "C", "JAVA", "EMBEDDED", "GO")
  // date: "AAAA-MM"
  //
  // Cada artigo pode ser:
  //  (a) um link externo único:        url: "https://..."
  //  (b) um artigo local em markdown, com uma ou duas línguas:
  //        langs: { pt: "artigos/arquivo.pt.md", en: "artigos/arquivo.en.md" }
  //      (pode ter só "pt" ou só "en" também — o badge que faltar some sozinho)
  // ---------------------------------------------------------------------
  articles: [
    {
      tag: "Hardware, IoT, Power Electronics",
      title: "Concurso KiCad / PCBWay 2026 projetos de hardware",
      summary:
        "Faça você mesmo DIY sua fonte chaveada de alto alcance para sistemas embutidos com tensão de entrada entre 100 V ~ 820 V AC",
      date: "2026-06-01",
      url: "https://www.pcbway.com/project/shareproject/TeslaSMPS_Simple_3_Transistor_Ultra_Wide_Range_100V_820V_AC_142V_1160V_DC_c3cf9745.html",
    },
    {
      tag: "JAVA",
      title: "O custo real de Exceções Java",
      summary:
        "Benchmark de 6 cenários medindo o custo de exceptions com warmup de JIT — e como writableStackTrace=false muda o jogo.",
      date: "2026-05",
      url: "https://www.linkedin.com/pulse/221x-mais-lento-o-que-seu-log-est%C3%A1-custando-de-f%C3%A1bio-pereira-da-silva-z8nrf",
    },
    {
      tag: "C",
      title: "No Silver Bullet, Revisitado",
      summary:
        "Complexidade acidental vs. essencial em sistemas de alta performance, à luz da experiência prática com Vortex21.",
      date: "2026-06",
      langs: {
        pt: "artigos/no-silver-bullet.pt.md",
        en: "artigos/no-silver-bullet.en.md",
      },
    },
  ],

  // ---------------------------------------------------------------------
  // PROJETOS — aparecem como carrossel (arraste ou use as setas)
  // ---------------------------------------------------------------------
  projects: [
    {
      name: "Vortex21",
      description: "Parser/bridge de alta performance — 216 MB/s, IPC 2.10.",
      url: "https://github.com/devfabiosilva/Vortex21",
    },
    {
      name: "Solda",
      description: "Sistema de ordens de serviço em Qt6/C++ com PostgreSQL.",
      url: "https://github.com/devfabiosilva/Solda",
    },
    {
      name: "TeslaSMPS",
      description: "Fonte chaveada DIY, 100–820V AC, 11 anos em campo.",
      url: "https://github.com/devfabiosilva/TeslaSMPS",
    },
    {
      name: "Solar48",
      description: "Monitoramento solar bare-metal / FreeRTOS em STM32 (48V/MPPT, RS485 DMA).",
      url: "https://github.com/devfabiosilva/solar48",
    },
    {
      name: "Nakamoto",
      description: "Simples protetor de carteiras de criptomoedas.",
      url: "https://github.com/devfabiosilva/nakamoto",
    },
    {
      name: "ctest",
      description: "Framework de testes em C.",
      url: "https://github.com/devfabiosilva/ctest",
    },
    {
      name: "CAuth2",
      description: "Implementação de autenticação/autorização em C.",
      url: "https://github.com/devfabiosilva/CAuth2",
    },
    {
      name: "AquaLink",
      description: "Projeto de conectividade/monitoramento.",
      url: "https://github.com/devfabiosilva/AquaLink",
    },
  ],

  // ---------------------------------------------------------------------
  // SOBRE / ABOUT
  // photo: caminho pra uma imagem local (ex: "img/foto.jpg") ou URL externa.
  //        Deixe vazio ("") para usar as iniciais como placeholder.
  // bio: parágrafos separados em array — cada item vira um <p>.
  // stack: tecnologias que aparecem como badges.
  // ---------------------------------------------------------------------
  about: {
    photo: "img/profile.png",
    bio: [
      "Engenheiro de Software e Embarcados com base no Rio de Janeiro, com experiência em sistemas de baixo nível, firmware e desenvolvimento SaaS no setor de óleo & gás.",
      "Apaixonado por performance real e hardware-awareness — prefiro entender o que acontece nos registradores antes de confiar em qualquer abstração. Construo projetos open-source que vão de fontes chaveadas bare-metal a parsers de alta performance em C e bridges CGo.",
      "Quando não estou escrevendo código ou debugando no osciloscópio, escrevo artigos técnicos em português e inglês sobre o que aprendo na prática.",
    ],
    stack: [
      "C", "C++", "Java", "Go", "Qt6",
      "STM32", "POSIX", "PostgreSQL",
      "Make", "Docker", "Linux",
      "Electronics", "NodeJS", "Python",
      "ESP32", "Arduino", "Criptography",
      "Bitcoin", "Power Electronics", "IoT",
      "Reverse Engineering"
    ],
  },


  footer: {
    text: "EM CONSTRUÇÃO: Construído à mão, sem frameworks. Hospedado no GitHub Pages.",
  },
};
