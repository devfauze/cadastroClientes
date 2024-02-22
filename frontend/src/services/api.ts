import axios from "axios";

export const api= axios.create({
    baseURL: "https://api-cadastro-clientes.vercel.app/"
})