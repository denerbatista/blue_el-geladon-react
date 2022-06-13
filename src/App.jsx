import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { getList } from "./services/paletaService";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [filter, setFilter] = useState([]);
  const [filterListed, setFilterListed] = useState([]);
  const [paletaList, setPaletaList] = useState([]);
  const [edition, setEdition] = useState(false);
  const list = async () => {
    try {
      const response = await getList();
      setPaletaList(response.data);
    } catch (error) {
      toast.error(
        `Error ${error.response.status} \n ${error.response.data.message}`
      );
    }
  };

  const filterList = () => {
    setFilterListed(
      paletaList.filter((element) =>
        element.sabor.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const handleEdition = () => {
    setEdition(!edition);
  };

  useEffect(() => {
    list();
  });
  return (
    <>
      <Toaster position="bottom-center" />
      <Header
        handleEdition={handleEdition}
        modEdition={edition}
        list={list}
        filter={filter}
        setFilter={setFilter}
        filterList={filterList}
      />
      <Main
        list={list}
        paletaList={paletaList}
        setFilter={setFilter}
        filter={filter}
        filterListed={filterListed}
        modEdition={edition}
      />
      <Footer />
    </>
  );
};

export default App;
