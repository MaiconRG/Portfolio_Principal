export default function ItemDetalhe({ titulo, imagem, descricao, link }) {
  return (
    <div className="card-interno">
      <div className="card-interno-img-wrapper">
        <img src={imagem} alt={titulo} />
      </div>
      <div className="card-interno-info">
        <h4>{titulo}</h4>
        <p>{descricao}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="link-projeto"
        >
          ACESSAR DETALHES
        </a>
      </div>
    </div>
  );
}
