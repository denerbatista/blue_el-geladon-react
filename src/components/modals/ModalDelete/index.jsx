import "./style.css";
import { toast } from "react-hot-toast";
import { deletePaleta } from "../../../services/paletaService";


const ModalDelete = ({ closeModal, element, list }) => {
  const handleRemovePaleta = async () => {
    

    const response = await deletePaleta(element._id);

    if (response.status !== 200) {
      return toast.error("Erro na exclusão da paleta");
    }

    closeModal();
    list();
    toast.success("Paleta excluida com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modalRemove-container">
        <h3>Deseja excluir a paleta {element.sabor}?</h3>
        <div className="modalRemove-actions">
          <button className="cancelButton" onClick={closeModal}>
            Não
          </button>
          <button className="successButton" onClick={handleRemovePaleta}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;