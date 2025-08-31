import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();

// ✅ Allow all origins for now (debugging)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({ limit: "50mb" }));

app.use("/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running 🚀" });
});

// ❌ REMOVE app.listen()
// ✅ Instead, export the app for Vercel
export default app;
