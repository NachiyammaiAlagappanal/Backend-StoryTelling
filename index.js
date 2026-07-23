import dotenv from 'dotenv/config';
import express from 'express';
import generateStory from './textGeneration.js';
import generateImage from './imageGenerator.js';

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

   const prompt = `Write a 200-word story about a ${age}-year-old ${character} and a dragon.`;
    const story = await generateStory(prompt);
    res.json({story: story});
    
});

app.post('/generateImage', async (req, res) => {
      const {character, age} = req.body;

   const prompt = `Generate an image of a lord vinayagar`;
    const image = await generateImage(prompt);
    res.json({image: image});

});



