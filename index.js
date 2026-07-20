import dotenv from 'dotenv/config';
import express from 'express';
import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.post('/generateStory', async (req, res) => {
    const {character, age} = req.body;
    const response = await ai.models.generateContent({
    model: "models/gemini-3.5-flash",
    contents: `Write a short story about a ${age}-year-old ${character} and a dragon.`,
  });
  console.log(response);
  res.json(response);
});


