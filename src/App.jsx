import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { getList } from "./services/paletaService";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [filter, setFilter] = useState([]);
  const [filterListed, setFilterListed] = useState([]);
  const [paletaList, setPaletaList] = useState([]);
  const List = async () => {
    const response = await getList();

    setPaletaList(response.data);
  };

  const filterList = () => {
    setFilterListed(
      paletaList.filter((element) =>
        element.sabor.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  useEffect(() => {
    List();
  });
  return (
    <>
      <Toaster position="bottom-center" />
      <Header
        modEdition={false}
        paletaList={paletaList}
        filter={filter}
        setFilter={setFilter}
        filterList={filterList}
      />
      <Main paletaList={paletaList} filterListed={filterListed} modEdition={false} />
      <Footer />
    </>
  );
};

export default App;
