import { api } from "../helpers/api";

export const getList=()=>{
    const paletas = api.get("/paletas/find-paletas")

    return paletas
}