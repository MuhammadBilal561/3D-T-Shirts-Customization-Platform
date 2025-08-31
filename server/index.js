import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();

// ✅ allow your deployed frontend domain
app.use(cors({
  origin: ["https://3-d-t-shirts-customization-platform-a61392ykb.vercel.app"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({ limit: "50mb" }));

app.use("/dalle", dalleRoutes); // keep endpoint consistent

app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running 🚀" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
