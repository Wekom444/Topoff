import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

app.post("/api/generate-ad", async (req, res) => {
  const { brandTone, keywords, language } = req.body;
  
  const prompt = `Generate a ${brandTone} ad for a brand using keywords: ${keywords}, in ${language}.`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 100,
  });

  res.json({ adText: response.data.choices[0].text.trim(), seoScore: Math.floor(Math.random() * 100) });
});

app.listen(5000, () => console.log("Server running on port 5000"));
