/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/extensions
import express from 'express';
// eslint-disable-next-line import/extensions
import { postUser, getUsers } from '../controller/userController.js';

const userRoutes = express.Router();
// eslint-disable-next-line prettier/prettier
userRoutes.post('/', postUser);
userRoutes.get('/', getUsers);
export default userRoutes;
