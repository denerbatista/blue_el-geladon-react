import "./style.css";
import logo from "../../assets/icons/logo.svg";
import checkoutIcon from "../../assets/icons/sacola.svg";
import paletaAdd from "../../assets/icons/paleta.svg";
import login from "../../assets/icons/safety.png";
import logout from "../../assets/icons/logout.png";
import { useEffect, useState } from "react";
import ModalCreate from "../modals/ModalCreate";

const Header = ({
  handleEdition,
  modEdition,
  list,
  filter,
  setFilter,
  filterList,
}) => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const closeModal = () => {
    setShowModalCreate(!showModalCreate);
  };
  useEffect(() => {
    filterList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return (
    <>
      <div className="Header_Container">
        <div className="Header_LogoName">
          <img alt="El Geladon Logo" src={logo} />
          <h2>El Geladon</h2>
        </div>
        <div className="Header_Icons">
          <button className="Button_Edition" onClick={handleEdition}>
            Edição
          </button>
          <input
            type="text"
            placeholder="Digite para pesquisar"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
          {modEdition && <img alt="Adicionar paleta" src={paletaAdd} onClick={closeModal} />}
          <img alt="Sacola de checkout" src={checkoutIcon} />
          {!modEdition && <img src={login} alt="Botão login" />}
          {modEdition && <img src={logout} alt="Botão logout" />}
        </div>
      </div>
      {showModalCreate && <ModalCreate closeModal={closeModal} list={list} />}
    </>
  );
};

export default Header;
