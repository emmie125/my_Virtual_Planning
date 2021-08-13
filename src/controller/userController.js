// eslint-disable-next-line import/extensions
import UserModel from '../model/userModel.js';

const postUser = async (req, res) => {
  try {
    const user = new UserModel({
      ...req.body,
    });
    console.log('hello');
    await user.save();
    res.status(200).json({ message: 'Utilisateur enregistré avec succès !' });
  } catch (error) {
    res.status(404).json(error.message);
    res.status(500).json(error.message);
  }
};

export const getUsers = (req, res) => {
  UserModel.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(500).json({ error }));
};

export default postUser;
