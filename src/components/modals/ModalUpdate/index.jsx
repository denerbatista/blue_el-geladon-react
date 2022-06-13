import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { updatePaleta } from "../../../services/paletaService";

const ModalUpdate = ({ closeModal, element, list, identify, setsavePaletas }) => {
  const [sabor, setSabor] = useState(element.sabor);
  const [preco, setPreco] = useState(element.preco);
  const [descricao, setDescricao] = useState(element.descricao);
  const [foto, setFoto] = useState(element.foto);
  const [id] = useState(element._id);

  const handleUpdate = async () => {
    const response = await updatePaleta({ sabor, descricao, foto, preco, id });
    
    if (response.status !== 200) {
      return toast.error("A atualização falhou");
    }
    
    closeModal();
    identify === 1 ? setsavePaletas(false) : list();
    toast.success("Paleta atualizada com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Editar</h3>
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
        <button onClick={handleUpdate}>Enviar</button>
      </div>
    </div>
  );
};

export default ModalUpdate;
