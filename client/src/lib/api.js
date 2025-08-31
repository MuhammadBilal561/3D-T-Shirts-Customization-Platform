import axios from "axios";

const api = axios.create({
  baseURL: "https://3d-tshirt-platform-backend-3fe80texh-muhammad-bilals-projects.vercel.app/",
});

export default api;
