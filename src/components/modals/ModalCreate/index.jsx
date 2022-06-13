import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { createPaleta } from "../../../services/paletaService.js";

const ModalCreate = ({ closeModal, list }) => {
  const [sabor, setSabor] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");

  const handleCreatePaleta = async () => {
    try {
      await createPaleta({ sabor, preco, descricao, foto });
      setSabor("");
      setPreco("");
      setDescricao("");
      setFoto("");
      closeModal();
      list();
      toast.success("Paleta adicionada com sucesso!");
    } catch (error) {
      toast.error(
        `Error ${error.response.status} \n ${error.response.data.message}`
      );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Adicionar</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={sabor}
          placeholder="Digite o sabor"
          onChange={(event) => setSabor(event.target.value)}
          name="sabor"
        />
        <input
          value={preco}
          placeholder="Digite o preço"
          onChange={(event) => setPreco(event.target.value)}
          name="preco"
          type="number"
        />
        <input
          value={descricao}
          placeholder="Digite a descrição"
          onChange={(event) => setDescricao(event.target.value)}
          name="descricao"
        />
        <input
          value={foto}
          placeholder="Digite o caminho da foto"
          onChange={(event) => setFoto(event.target.value)}
          name="foto"
        />
        <button onClick={handleCreatePaleta}>Enviar</button>
      </div>
    </div>
  );
};

export default ModalCreate;
