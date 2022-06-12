import { api } from "../helpers/api";

export const getList = () => {
  const paletas = api.get("/paletas/find-paletas");

  return paletas;
};

export const createPaleta = ({ sabor, descricao, foto, preco }) => {
  const newPaleta = {
    sabor,
    descricao,
    foto,
    preco,
  };
  const response = api.post("/paletas/create", newPaleta);

  return response;
};

export const updatePaleta = ({ sabor, descricao, foto, preco, id }) => {
  const editedPaleta = {
    sabor,
    descricao,
    foto,
    preco,
  };
  const response = api.put(`/paletas/update/${id}`, editedPaleta);

  return response;
};

export const deletePaleta = (id) => {
  const response = api.delete(`paletas/delete/${id}`);

  return response;
};
