import "./style.css";

function Card({ element, modEdition }) {
  return (
    <div className="Card_Conteiner">
      <div className="Card_Items">
        <h3>{element.sabor}</h3>
        <span>{Number(element.preco).toFixed(2)}</span>
        <p>{element.descricao}</p>
        <div className="Card_ConteinerButtons">
          {!modEdition && <button className="Button_AddCart">Adicionar ao carrinho</button>}
          {modEdition && <button className="Button_Edit">Editar</button>}
          {modEdition && <button className="Button_Remove">Remover</button>}
        </div>
      </div>
      <img
        className="Card_Foto"
        src={element.foto}
        alt={`Foto Paleta ${element.sabor}`}
      />
    </div>
  );
}

export default Card;
