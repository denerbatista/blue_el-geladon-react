import { useState } from "react";
import ModalDelete from "../modals/ModalDelete";
import ModalUpdate from "../modals/ModalUpdate";
import toast from "react-hot-toast";
import "./style.css";

function Card({ element, modEdition, list, identify, setsavePaletas }) {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const handleModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  };
  const handleModalUpdate = () => {
    setShowModalUpdate(!showModalUpdate);
  };

  const inConstrution = () => {
    toast.error("Em construção");
  };
  return (
    <>
      <div className="Card_Conteiner">
        <div className="Card_Items">
          <h3>{element.sabor}</h3>
          <span>{Number(element.preco).toFixed(2)}</span>
          <p>{element.descricao}</p>
          <div className="Card_ConteinerButtons">
            {!modEdition && (
              <button
                className="Button_AddCart"
                title="Clique para adicionar ao carrinho"
                onClick={inConstrution}
              >
                Adicionar ao carrinho
              </button>
            )}
            {modEdition && (
              <button className="Button_Edit" onClick={handleModalUpdate}>
                Editar
              </button>
            )}
            {modEdition && (
              <button className="Button_Remove" onClick={handleModalDelete}>
                Remover
              </button>
            )}
          </div>
        </div>
        <img
          className="Card_Foto"
          src={element.foto}
          alt={`Foto Paleta ${element.sabor}`}
        />
      </div>
      {showModalDelete && (
        <ModalDelete
          list={list}
          element={element}
          closeModal={handleModalDelete}
        />
      )}
      {showModalUpdate && (
        <ModalUpdate
          list={list}
          element={element}
          closeModal={handleModalUpdate}
          identify={identify}
          setsavePaletas={setsavePaletas}
        />
      )}
    </>
  );
}

export default Card;
