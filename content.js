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
    role: "Developer, Embedded, Hardware & Software Engineer",
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
    { label: "LinkedIn", url: "https://www.linkedin.com/in/devfabiosilva/" },
    { label: "YouTube", url: "https://www.youtube.com/@ocurioso1981" },
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
      tag: "JAVA",
      title: "The Real Cost of Java Exceptions",
      summary:
        "Benchmark de 6 cenários medindo o custo de exceptions com warmup de JIT — e como writableStackTrace=false muda o jogo.",
      date: "2026-06-02",
      url: "https://www.linkedin.com/pulse/221x-slower-what-your-logs-really-costing-you-f%C3%A1bio-pereira-da-silva-jthif/",
    },
    {
      tag: "C, Go, Rust",
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
  // PROJETOS EM DESTAQUE (opcional)
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
      url: "https://www.pcbway.com/project/shareproject/TeslaSMPS_Simple_3_Transistor_Ultra_Wide_Range_100V_820V_AC_142V_1160V_DC_c3cf9745.html",
    },

  ],

  // ---------------------------------------------------------------------
  // RODAPÉ
  // ---------------------------------------------------------------------
  footer: {
    text: "Hospedado no GitHub Pages by Fábio Pereira.",
  },
};
