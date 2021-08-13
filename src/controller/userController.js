// eslint-disable-next-line import/extensions
import UserModel from '../model/userModel.js';

export const postUser = (req, res) => {
  const user = new UserModel({
    ...req.body,
  });
  user
    .save()
    .then(() =>
      res.status(200).json({ message: 'Utilisateur enregistré avec succès !' })
    )
    .catch((error) => res.status(500).json(error.message));
};

export const getUsers = (req, res) => {
  UserModel.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(500).json({ error }));
};
