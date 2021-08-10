import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const server = express();
server.use(express.json());
server.use(cors());
const port = 3000;
const mongoDB =
  'mongodb+srv://My_virtual_planning-1:My_virtual_planning_1@cluster0.rxijp.mongodb.net/dbMyVip?retryWrites=true&w=majority';

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
