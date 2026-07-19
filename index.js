import dotenv from 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/generateStory', (req, res) => {
    console.log(req.body)
  res.json({ message: 'Story generated successfully', data: req.body });
})