import {GoogleGenAI} from "@google/genai";


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateStory = async (prompt) => {
  return await ai.models.generateContent({
    model: "models/gemini-3.5-flash",
    contents: prompt,
  });
};

export default generateStory;