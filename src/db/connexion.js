import mongoose from 'mongoose';

const mongoDB =
  'mongodb+srv://My_virtual_planning-1:My_virtual_planning_1@cluster0.rxijp.mongodb.net/dbMyVip?retryWrites=true&w=majority';
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`'Connexion à MongoDB reussie !`);
  })
  .catch((error) => console.log('Connexion à MongoDB échouée !', error));
