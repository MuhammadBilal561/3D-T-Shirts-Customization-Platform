// client/src/lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api",   // ✅ this will point to Vercel’s serverless functions
});

export default api;
