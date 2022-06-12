import "./style.css";
import logo from "../../assets/icons/logo.svg";
import checkoutIcon from "../../assets/icons/sacola.svg";
import paletaAdd from "../../assets/icons/paleta.svg";
import login from "../../assets/icons/safety.png";
import logout from "../../assets/icons/logout.png";
import { useEffect } from "react";

const Header = ({filter, setFilter, modEdition, filterList }) => {

useEffect(()=>{filterList()},[filter])
  return (
    <div className="Header_Container">
      <div className="Header_LogoName">
        <img alt="El Geladon Logo" src={logo} />
        <h2>El Geladon</h2>
      </div>
      <div className="Header_Icons">
        <input type="text" placeholder="Digite para pesquisar" value={filter}
        onChange={(event) => setFilter(event.target.value)} />
        {modEdition && <img alt="Adicionar paleta" src={paletaAdd} />}
        <img alt="Sacola de checkout" src={checkoutIcon} />
        {!modEdition && <img src={login} alt="Botão login" />}
        {modEdition && <img src={logout} alt="Botão logout" />}
      </div>
    </div>
  );
};

export default Header;
