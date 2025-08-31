import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Hello from DALL.E ROUTES" });
  }

  if (req.method === "POST") {
    try {
      const { prompt } = req.body;

      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          method: "POST",
          headers: { 
            Authorization: `Bearer ${process.env.HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Hugging Face API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`
        );
      }

      const arrayBuffer = await response.arrayBuffer();
      const base64Image = Buffer.from(arrayBuffer).toString("base64");

      return res.status(200).json({ photo: base64Image });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  }

  // If not GET/POST → method not allowed
  return res.status(405).json({ error: "Method not allowed" });
}
