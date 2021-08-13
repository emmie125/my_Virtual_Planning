import express from 'express';
import cors from 'cors';
// eslint-disable-next-line import/extensions
import './src/db/connexion.js';
// eslint-disable-next-line import/extensions
import userRoutes from './src/routes/userRoutes.js';

const server = express();
server.use(express.json());
server.use(cors());
userRoutes(server);
