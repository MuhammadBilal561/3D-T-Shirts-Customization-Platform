import axios from "axios";

const api = axios.create({
  baseURL: "https://3d-tshirt-platform-backend.vercel.app",
});

export default api;
