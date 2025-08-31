import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();
const app = express();

// Allow frontend for CORS
app.use(cors({
  origin: ["https://3-d-t-shirts-customization-platform.vercel.app"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({ limit: "50mb" }));

// ✅ Mount DALL·E route at root instead of /dalle
app.use("/", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running " });
});

// ❌ DO NOT listen(); Vercel handles it
export default app;
