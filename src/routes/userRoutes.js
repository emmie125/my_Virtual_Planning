/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/extensions
import postUser, { getUsers } from '../controller/userController.js';

const userRoutes = (server) => {
  const BASE_URI = '/api/users';
  // eslint-disable-next-line prettier/prettier
  server.post(`${BASE_URI}/post`,postUser);
  server.use(`${BASE_URI}/get`, getUsers);
};
export default userRoutes;
