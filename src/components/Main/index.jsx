import { useState, useEffect } from "react";
import Card from "../Card";
import "./style.css";

function Main({ paletaList, filterListed, modEdition }) {

  return (
    <div className="Main_Conteiner">
      <h1 className="Main_Title">Paletas Disponiveis:</h1>
      <div className="Main_CardsConteiner">
        <div className="Main_Cards">
          {filterListed
            ? filterListed.map((element) => {
                return <Card element={element} modEdition={modEdition} />;
              })
            : paletaList.map((element) => {
                return <Card element={element} modEdition={modEdition} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default Main;
