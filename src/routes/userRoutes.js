import postUser from '../controller/userController';

const userRoutes = (app) => {
  const BASE_URL = '/api/myvirtualplanning';
  // eslint-disable-next-line prettier/prettier
  app.post(BASE_URL,postUser);
};
export default userRoutes;
