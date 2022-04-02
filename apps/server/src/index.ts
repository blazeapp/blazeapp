// simple express
import express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
