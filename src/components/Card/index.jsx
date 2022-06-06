import "./style.css"

function Card(props) {
  return (
    <div className="Card_Conteiner">
      <div className="Card_Items">
          <h3>{props.sabor}</h3>
          <span>{Number(props.preco).toFixed(2)}</span>
          <p>{props.descricao}</p>
      </div>
      <img
        className="Card_Foto"
        src={props.foto}
        alt={`Foto Paleta ${props.sabor}`}
      />
    </div>
  );
}

export default Card;
