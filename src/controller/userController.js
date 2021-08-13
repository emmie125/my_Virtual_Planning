// eslint-disable-next-line import/extensions
import UserModel from '../model/userModel.js';

const postUser = async (req, res) => {
  try {
    const user = new UserModel({
      ...req.body,
    });
    await user.save();
    res.status(200).json({ message: 'Utilisateur enregistré avec succès !' });
    res.status(400).json({ message: 'Utilisateur enregistré avec error !' });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getUsers = (req, res) => {
  UserModel.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(500).json({ error }));
};

export default postUser;
