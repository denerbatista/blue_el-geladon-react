import Card from "../Card";
import "./style.css";
import Loading from "../Loading";
import { useState } from "react";
import { useEffect } from "react";

function Main({
  list,
  paletaList,
  setFilter,
  filter,
  filterListed,
  modEdition,
}) {
  const [savePaletas, setsavePaletas] = useState(filterListed.length !== 0);
  const keyLoading = paletaList.length === 0;

  useEffect(() => {
    setsavePaletas(filterListed.length !== 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return (
    <div className="Main_Conteiner">
      <h1 className="Main_Title">Paletas Disponiveis:</h1>
      <div className="Main_CardsConteiner">
        <div className="Main_Cards">
          {keyLoading ? (
            <Loading />
          ) : savePaletas ? (
            filterListed.map((element) => {
              return (
                <Card
                  key={element._id}
                  element={element}
                  modEdition={modEdition}
                  list={list}
                  setFilter={setFilter}
                  identify={1}
                  setsavePaletas={setsavePaletas}
                />
              );
            })
          ) : (
            paletaList.map((element) => {
              return (
                <Card
                  key={element._id}
                  element={element}
                  modEdition={modEdition}
                  list={list}
                  setFilter={setFilter}
                  identify={0}
                  setsavePaletas={setsavePaletas}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
