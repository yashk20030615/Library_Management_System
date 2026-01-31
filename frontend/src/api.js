import axios from "axios";

const API = axios.create({
  baseURL: "https://library-management-system-79nt.onrender.com",
});

export default API;
