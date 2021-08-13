import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// eslint-disable-next-line import/extensions
import './src/db/connexion.js';
// eslint-disable-next-line import/extensions
import userRoutes from './src/routes/userRoutes.js';

const server = express();
server.use(bodyParser.json());
server.use(cors());
const port = process.env.PORT || 8083;
const BASE_URI = '/api/users';
server.use(BASE_URI, userRoutes);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
