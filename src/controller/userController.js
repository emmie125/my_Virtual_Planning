import bcrypt from 'bcrypt';
// eslint-disable-next-line import/extensions
import UserModel from '../model/userModel.js';

export const postUser = async (req, res) => {
  const saltRounds = 10;
  const {
    username,
    password,
    imageProfil,
    firstname,
    lastname,
    dateBirth,
    gender,
    phoneNumber,
    address,
    userType,
    statusUser,
    accountSession,
    cDate,
  } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    console.log(hash);
    const user = new UserModel({
      username,
      password: hash,
      imageProfil,
      firstname,
      lastname,
      dateBirth,
      gender,
      phoneNumber,
      address,
      userType,
      statusUser,
      accountSession,
      cDate,
    });
    user
      .save()
      .then(() =>
        res
          .status(200)
          .json({ message: 'Utilisateur enregistré avec succès !' })
      )
      .catch((error) => res.status(500).json(error.message));
  });
};

export const getUsers = (req, res) => {
  UserModel.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(500).json({ error }));
};
