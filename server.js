import express from 'express';
import cors from 'cors';
// eslint-disable-next-line import/extensions
import './src/db/connexion.js';

const server = express();
server.use(express.json());
server.use(cors());
const port = 3000;

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
