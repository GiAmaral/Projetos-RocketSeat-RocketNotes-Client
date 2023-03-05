import axios from "axios"; //biblioteca responsável por trabalhar requisições http

export const api = axios.create({
  baseURL: "https://rocketnotes-api-ryjq.onrender.com",
});
