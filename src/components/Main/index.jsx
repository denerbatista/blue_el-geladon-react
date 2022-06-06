import { useState, useEffect } from "react";
import Card from "../Card";
import "./style.css";

function Main() {
  const [paletaList, setPaletaList] = useState([]);
  const getList = async () => {
    const response = await fetch(
      "https://api-elgeladon-v2.onrender.com/paletas/find-paletas"
    );
    const responseJson = await response.json();
    setPaletaList([...responseJson]);
  };

  useEffect(() => {
    getList();
  });

  return (
    <div className="Main_Conteiner">
      <h1 className="Main_Title">Paletas Disponiveis:</h1>
      <div className="Main_CardsConteiner">
        <div className="Main_Cards">
          {paletaList.map((element) => {
            return (
              <Card
                key={element._id}
                sabor={element.sabor}
                preco={element.preco}
                foto={element.foto}
                descricao={element.descricao}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
