export default function ProjectCard({ titulo, imagem, acao }) {
  return (
    <div className="projetos" onClick={acao}>
      <h3>{titulo}</h3>
      <img src={imagem} alt={titulo} />
      <button className="btn_ver_mais">VER MAIS</button>
    </div>
  );
}
