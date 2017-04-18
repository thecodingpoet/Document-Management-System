import express from 'express';
import UserController from '../controllers/UserController';
import Authenticator from '../middlewares/Auth';
import UserMiddleware from '../middlewares/UserMiddleware';


const userRoutes = express.Router();

// Displays the index page
userRoutes.route('/')
  .get((req, res) => {
    res.status(200).send({
      message: 'Welcome to Document Management System API'
    });
  });

//
userRoutes.get(
    '/users/:id',
    Authenticator.authenticateUser,
    UserMiddleware.validateGetRequest,
    UserController.fetchUser
);

userRoutes.put(
   '/users/:id',
   Authenticator.authenticateUser,
   UserMiddleware.validateUpdateRequest,
   UserController.updateUser
 );

userRoutes.get(
   '/users/',
   Authenticator.authenticateUser,
   UserMiddleware.validateGetRequest,
   UserController.fetchUsers
 );

// set up route for requests to create a new user
userRoutes.post(
  '/users/',
  UserMiddleware.validateCreateRequest,
  UserController.createUser
);

userRoutes.delete(
   '/users/:id',
   Authenticator.authenticateUser,
   UserMiddleware.validateDeleteRequest,
   UserController.deleteUser
 );

// set up route for user login requests
userRoutes.post(
   '/users/login',
   UserController.loginUser
 );

// set up route for user logout requests
userRoutes.post(
    '/users/logout',
    Authenticator.authenticateUser,
    UserController.logoutUser
);

userRoutes.get(
 '/users/:id/documents',
 Authenticator.authenticateUser,
 UserController.fetchUserDocuments
);

export default userRoutes;
