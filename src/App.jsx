import { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import ItemDetalhe from "./components/ItemDetalhe";
import { dadosProjetos, dadosCertificados, dadosDesign } from "./data";

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  const handleContatoSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/<YOUR_FORM_ID>", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ativo");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".revelar").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [secaoAtiva]);

  // Ajusta largura dos botões de contato para serem iguais (maior texto + 15px)
  useEffect(() => {
    const measureBtns = () => {
      const btns = Array.from(
        document.querySelectorAll(".container-contato .btn-contato")
      );
      if (btns.length === 0) return;
      const max = btns.reduce((m, b) => Math.max(m, b.scrollWidth), 0);
      document.documentElement.style.setProperty(
        "--btn-contato-width",
        `${max + 15}px`
      );
    };

    measureBtns();

    const onResize = () => measureBtns();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", measureBtns);
    const timer = setTimeout(measureBtns, 300); // reserva para fontes/carregamentos assíncronos

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", measureBtns);
      clearTimeout(timer);
    };
  }, []);

  const abrirSecao = (nome) => {
    setSecaoAtiva(nome);
    // Pequeno delay para garantir que o elemento foi renderizado antes do scroll
    setTimeout(() => {
      document
        .getElementById("detalhes-container")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const obterDados = () => {
    if (secaoAtiva === "projetos") return dadosProjetos;
    if (secaoAtiva === "certificados") return dadosCertificados;
    if (secaoAtiva === "visuais") return dadosDesign;
    return [];
  };

  // Fecha o menu automaticamente em resize (quando volta para desktop)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // Trava o scroll da página quando o menu móvel está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const SUBTITULOS_SECAO = {
    projetos:
      "Projetos desenvolvidos com foco em funcionalidade, organização de código e experiência do usuário.",
    certificados:
      "Certificações que representam minha base técnica e o processo contínuo de aprendizado na área de tecnologia.",
    visuais:
      "Produções visuais desenvolvidas como complemento a projetos digitais e interfaces web.",
  };

  return (
    <main>
      <header>
        <div className="header-inner">
          <div className="brand" aria-hidden>
            <img
              className="logomarca"
              src="mrg_logo.png"
              alt="Logo marca MR Gretschmann"
            />
          </div>

          <nav id="links">
            <a href="#conteudo" onClick={() => setMenuOpen(false)}>
              <h3>INÍCIO</h3>
            </a>
            <a href="#projetos" onClick={() => setMenuOpen(false)}>
              <h3>PRODUÇÕES</h3>
            </a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              <h3>SOBRE</h3>
            </a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>
              <h3>CONTATO</h3>
            </a>
          </nav>

          <button
            className={`hamburger ${menuOpen ? "is-active" : ""}`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </button>
        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <a href="#conteudo" onClick={() => setMenuOpen(false)}>
            INÍCIO
          </a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>
            PRODUÇÕES
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            SOBRE
          </a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>
            CONTATO
          </a>
        </div>
      </header>

      <section id="conteudo" className="revelar">
        <div className="conteudo-avatar">
          <img src="Avatar_S.png" alt="Maicon" />
        </div>
        <div className="texto-apresentacao">
          <h4>OLÁ, EU SOU</h4>
          <h1>MAICON GRETSCHMANN</h1>
          <p>
            Desenvolvedor Front-end com base em sistemas e compreensão de
            back-end <br /> Crio interfaces focadas em experiência do usuário,
            unindo desenvolvimento web, visão técnica e comunicação clara.
          </p>
        </div>
      </section>

      <section id="projetos" className="revelar">
        <div className="container-cards-principais">
          <ProjectCard
            titulo="PROJETOS"
            imagem="Projetos_S.png"
            acao={() => abrirSecao("projetos")}
          />
          <ProjectCard
            titulo="CERTIFICAÇÕES"
            imagem="CERTIFICACAO.png"
            acao={() => abrirSecao("certificados")}
          />
          <ProjectCard
            titulo="VISUAIS"
            imagem="DESING.png"
            acao={() => abrirSecao("visuais")}
          />
        </div>
      </section>

      {/* ÁREA DOS MINI-CARDS (INICIA OCULTA PELO ESTADO) */}
      <div id="detalhes-container">
        {secaoAtiva && (
          <section className="detalhes-expandidos revelar">
            <h2 className="subtitulo_detalhes-expandidos">
              {SUBTITULOS_SECAO[secaoAtiva]}
            </h2>
            <div className="grid-detalhes">
              {obterDados().map((item) => (
                <ItemDetalhe
                  key={item.id}
                  titulo={item.titulo}
                  imagem={item.imagem}
                  descricao={item.descricao}
                  link={item.link}
                />
              ))}
            </div>
            <a href="#projetos">
              <button
                className="btn-fechar"
                onClick={() => setSecaoAtiva(null)}
              >
                FECHAR
              </button>
            </a>
          </section>
        )}
      </div>

      {/* SOBRE MIM REFORMULADO */}
      <section id="sobre" className="revelar">
        <div className="container-sobre-fluido">
          <h2>SOBRE MIM</h2>
          <p>
            Sou profissional da área de Tecnologia, formado em Sistemas para
            Internet, com experiência em suporte técnico a sistemas e
            atendimento ao usuário em empresa de software. Ao longo da minha
            trajetória, atuei com alto volume de atendimentos, foco em
            qualidade, alinhamento de expectativas e comunicação clara, sendo
            reconhecido pela liderança pelo comprometimento e profissionalismo.
            Essa vivência fortaleceu minha visão sobre como sistemas impactam
            diretamente a experiência do usuário. Hoje, direciono meu
            desenvolvimento para o Front-end, aplicando conhecimentos em HTML,
            CSS e JavaScript na criação de interfaces funcionais, acessíveis e
            bem estruturadas, buscando sempre unir usabilidade, desempenho e
            clareza técnica.
          </p>

          <div className="skills-grid">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">Usabilidade</span>
            <span className="skill-tag">Clean Code</span>
          </div>
        </div>
      </section>

      {/* CONTATO REFORMULADO */}
      <section id="contato" className="revelar">
        <div className="container-contato">
          <h2>VAMOS CONVERSAR?</h2>
          <div className="contato-conteudo">
            <div className="contato-lado-esquerdo">
              <div className="contato-botoes">
                <p
                  className="text_contato"
                  style={{ marginBottom: "20px", opacity: 0.7 }}
                >
                  Disponível para novos projetos e consultorias.
                </p>
                <a
                  className="btn-contato whatsapp"
                  href="https://wa.me/5549984321985"
                  target="_blank"
                >
                  <span>WhatsApp</span>
                </a>
                <a
                  className="btn-contato linkedin"
                  href="https://www.linkedin.com/in/maicon-gretschmann/"
                  target="_blank"
                >
                  <span>LinkedIn</span>
                </a>
                <a
                  className="btn-contato whatsapp"
                  href="https://maiconrg.github.io/Centerlinkportfolio/"
                  target="_blank"
                >
                  <span>Redes Socias</span>
                </a>
              </div>
            </div>

            <div className="contato-lado-direito">
              <form className="form-contato" onSubmit={handleContatoSubmit}>
                <div className="input-group">
                  <input type="text" name="nome" placeholder="Nome" required />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="assunto"
                  placeholder="Assunto do projeto"
                />
                <textarea
                  name="mensagem"
                  rows="5"
                  placeholder="Como posso ajudar você?"
                  required
                ></textarea>
                <button className="btn-enviar" type="submit">
                  ENVIAR PROPOSTA
                </button>
                {formStatus === "success" && (
                  <p className="status-message success">
                    Mensagem enviada com sucesso.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="status-message error">
                    Ocorreu um erro ao enviar. Tente novamente mais tarde.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="rodape">
          <p>© 2024 Maicon Gretschmann. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
