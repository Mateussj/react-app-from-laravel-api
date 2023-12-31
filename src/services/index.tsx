import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    Authorization: "Bearer " + localStorage.getItem('@laragramToken')
  }
});

export default api;