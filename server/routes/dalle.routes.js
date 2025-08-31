import express from "express";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();

// Body parser
app.use(express.json({ limit: "50mb" }));

// Preflight and CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://3-d-t-shirts-customization-platform.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Respond immediately to preflight
  }
  next();
});

// Root POST endpoint for image generation
app.post("/", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: "POST",
        headers: { 
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(500).json({ error: JSON.stringify(errorData) });
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");
    res.status(200).json({ photo: base64Image });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Root GET endpoint for testing
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend running 🚀" });
});

export default app; // ✅ for Vercel serverless
