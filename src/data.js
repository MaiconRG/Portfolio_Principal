// PROJETOS
const centerlink = {
  titulo: "CENTRALIZADOR",
  descricao:
    "Projeto web interativo desenvolvido para explorar navegação entre seções e experiência do usuário.",
  imagem: "/PROJETOS/centerlink.png",
  link: "https://maiconrg.github.io/Centerlinkportfolio/",
};

const loteamento = {
  titulo: "SITE DIVULGAÇÃO",
  descricao:
    "Site de catálogo de lotes com fotos, descrições sucintas e formulário de contato.",
  imagem: "/PROJETOS/loteamento.png",
  link: "https://loteamento-graziadei.vercel.app/",
};

const convite_Ana = {
  titulo: "CONVITE DIGITAL",
  descricao:
    "Página de apresentação de evento com layout responsivo, desenvolvida para convite digital e navegação clara.",
  imagem: "/PROJETOS/15anosAna.png",
  link: "https://maiconrg.github.io/15-Anos-Ana-Mara/",
};

//CERTIFICADOS
const faculdade = {
  titulo: "DIPLOMA",
  descricao:
    "Diploma acadêmico de formação concluída, como parte do meu desenvolvimento profissional.",
  imagem: "/CERTIFICADOS/Diploma_academico.jpg",
  link: "https://7da154.mannesoftprime.com.br/arquivo_digital/index.php?1b62fbW9kdWxvPXBocC9hZF9wb3J0YWwucGhwJkRJUExPTUE9MTQ4Ny4xNDg3LmQ3ZjZkY2EzMzQ1MCZjaGF2ZT0yMDI1LTEyLTI201bbd",
};

const discover = {
  titulo: "CERTIFICADO DISCOVER",
  descricao:
    "Certificado Discover concluído, com foco em fundamentos de programação e desenvolvimento web.",
  imagem: "/CERTIFICADOS/certificado_Discover.jpg",
  link: "https://app.rocketseat.com.br/certificates/d274706d-4bc0-4701-989b-416b2efab326",
};

const html = {
  titulo: "CERTIFICADO HTML",
  descricao:
    "Desenvolvimento front-end básico: criação de interfaces web estruturadas em HTML5 e semântica acessível.",
  imagem: "/CERTIFICADOS/certificado_HTML.jpg",
  link: "https://www.devmedia.com.br/certificado/tecnologia/html/maicon-riebe-gretschmann",
};

const programador = {
  titulo: "CERTIFICADO DEV",
  descricao:
    "Base teórica e prática em programação, abrangendo lógica, conceitos de desenvolvimento e tecnologias de mercado.",
  imagem: "/CERTIFICADOS/certificado_Programador.jpg",
  link: "https://www.devmedia.com.br/certificado/tecnologia/programacao/maicon-riebe-gretschmann",
};
const docker = {
  titulo: "CERTIFICADO DOCKER",
  descricao:
    "Certificado de Docker concluído, com foco em conceitos e boas práticas de conteinerização.",
  imagem: "/CERTIFICADOS/certificado_docker.jpg",
  link: "https://www.devmedia.com.br/cursos/certificado/?id=146794",
};

const acessibilidade = {
  titulo: "ACESSIBILIDADE",
  descricao:
    "Desenvolvimento inclusivo focado em diretrizes WCAG, acessibilidade e uso prático de leitores de tela.",
  imagem: "/CERTIFICADOS/certificado_Acessibilidade_React.jpg",
  link: "https://app.rocketseat.com.br/certificates/f15066b6-b983-4ee2-b277-91988cee1df2",
};

const fullstack = {
  titulo: "APLICAÇÃO FULLSTACK",
  descricao:
    "Certificado concluído com foco em desenvolvimento front-end, fundamentos de programação e uso de JavaScript com Day.js.",
  imagem: "/CERTIFICADOS/certificado_Fullstack.jpg",
  link: "https://app.rocketseat.com.br/certificates/64c3d3f6-f32c-4aed-9a06-62a2aa026152",
};

const php = {
  titulo: "CERIFICADO PHP",
  descricao:
    "Desenvolvimento web em PHP/Laravel: arquitetura MVC, gestão de dados com SQLite e front-end.",
  imagem: "/CERTIFICADOS/certificado_PHP.jpg",
  link: "https://app.rocketseat.com.br/certificates/728d127e-4171-4414-be54-7cac92514a0c",
};

const algoritmo = {
  titulo: "CERIFICADO ALGORITMO",
  descricao:
    "Formação em algoritmos e lógica de programação: conceitos fundamentais, estruturas de controle e manipulação de dados.",
  imagem: "/CERTIFICADOS/ceritificado_Algoritmo.png",
  link: "https://www.devmedia.com.br/certificado/tecnologia/algoritmo/maicon-riebe-gretschmann",
};
// DESING
const flayer = {
  titulo: "FLAYER DIVULGAÇÃO",
  descricao:
    "Material gráfico de assistência técnica desenvolvido para apresentar serviços de forma clara e objetiva.",
  imagem: "/DESING/panfleto_assistencia.png",
  link: "#",
};

const cartao = {
  titulo: "CARTÃO DE VISTA",
  descricao:
    "Cartão de visita para professora particular, com layout organizado e comunicação direta.",
  imagem: "/DESING/cartao_de_visita.png",
  link: "https://www.behance.net/gallery/146379363/Cartao-de-Visita-e-Logo",
};

const ilustracao = {
  titulo: "ILUSTRAÇÃO",
  descricao:
    "Retrato vetorial desenvolvido para representação visual, com atenção a detalhes e proporções.",
  imagem: "/DESING/ilustracao.png",
  link: "https://www.behance.net/gallery/134619197/Ilustracao",
};

const cartaomae = {
  titulo: "CARTÃO DATA ESPECIAL",
  descricao:
    "Material gráfico comemorativo de Dia das Mães, desenvolvido com clareza visual e sensibilidade.",
  imagem: "/DESING/cartao_dia_especial.png",
  link: "https://www.behance.net/gallery/241172275/Cartao-especial",
};

const chabebe = {
  titulo: "CHÁ DE BEBE",
  descricao:
    "Convite de chá de bebê criado para comunicação afetiva, com composição visual equilibrada.",
  imagem: "/DESING/cha_bebe.png",
  link: "https://www.behance.net/gallery/241172355/Cha-de-bebe",
};

// Helper: cria slug limpo a partir do título
const slug = (s) =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");

// Helper: adiciona id automático a cada item (usa slug(titulo) + índice)
const autoId = (items, fallbackPrefix = "item") =>
  items.map((it, i) => ({
    ...it,
    id: it.id ?? `${slug(it.titulo ?? fallbackPrefix)}-${i + 1}`,
  }));

export const dadosProjetos = autoId([centerlink, loteamento, convite_Ana]);

export const dadosCertificados = autoId([
  faculdade,
  fullstack,
  discover,
  docker,
  acessibilidade,
  php,
  algoritmo,
  programador,
  html,
]);

export const dadosDesign = autoId([
  flayer,
  cartao,
  ilustracao,
  cartaomae,
  chabebe,
]);
