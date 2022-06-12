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
    const response = createPaleta({ sabor, preco, descricao, foto });

    if (response.status === 422) {
      return toast.error("Falha na criação da paleta");
    }

    setSabor("");
    setPreco("");
    setDescricao("");
    setFoto("");
    closeModal();
    list();
    toast.success("Paleta adicionada ao cardápio");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Adicionar ao cardápio</h3>
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
        <button onClick={handleCreatePaleta}>Adicionar</button>
      </div>
    </div>
  );
};

export default ModalCreate;
