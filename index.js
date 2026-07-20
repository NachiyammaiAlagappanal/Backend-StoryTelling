import dotenv from 'dotenv/config';
import express from 'express';
import generateStory from './storyGenerator.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.post('/generateStory', async (req, res) => {
  try {
    const {character, age} = req.body;

    if (!character || !age) {
      return res.status(400).json({ error: 'character and age are required' });
    }

    const prompt = `Write a short story about a ${age}-year-old ${character} and a dragon.`;
    const story = await generateStory(prompt);
    const storyText = story?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!storyText) {
      throw new Error('No story content returned from the generator.');
    }

    res.json({ story: storyText });
  } catch (error) {
    console.error('Error generating story:', error);
    res.status(500).json({ error: 'Failed to generate story' });
  }
});


