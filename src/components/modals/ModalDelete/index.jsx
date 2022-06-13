import "./style.css";
import { toast } from "react-hot-toast";
import { deletePaleta } from "../../../services/paletaService";

const ModalDelete = ({ closeModal, element, list }) => {
  const handleRemovePaleta = async () => {
    try {
      const response = await deletePaleta(element._id);
      console.log(response);
      closeModal();
      list();
      toast.success(response.data.message);
    } catch (error) {
      toast.error(
        `Error ${error.response.status} \n ${error.response.data.message}`
      );
    }
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
