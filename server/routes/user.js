import express from 'express';
import UserController from '../controllers/UserController';
import Authenticator from '../middlewares/Auth';
import UserMiddleware from '../middlewares/UserMiddleware';

const userRoutes = express.Router();

      /**
 * @swagger
 * /users/{id}:
 *   get:
 *     description: Return a single user by id
 *     tags:
 *      - Return a single user by id
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: body
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: users
 *         schema:
 *          type: array
 */
userRoutes.get(
    '/users/:id',
    Authenticator.authenticateUser,
    UserMiddleware.validateGetRequest,
    UserController.fetchUser
);

      /**
 * @swagger
 * /users/{id}:
 *   put:
 *     description: Updates details of a single user by id
 *     tags:
 *      - Updates user details
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: body
 *         description: User object
 *         in:  body
 *         required: true
 *         type: integer
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: users
 *         schema:
 *          type: array
 */
userRoutes.put(
   '/users/:id',
   Authenticator.authenticateUser,
   UserMiddleware.validateUpdateRequest,
   UserController.updateUser
 );

/**
 * @swagger
 * /users:
 *   get:
 *     description: Gets a list of all users
 *     tags:
 *      - Get Users List
 *     produces:
 *      - application/json
 *     parameters:
 *        - name: Authorization
 *          in: header
 *          description: an authorization header
 *          required: true
 *          type: string
 *     responses:
 *        200:
 *          description: users
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/definitions/User'
 */
userRoutes.get(
   '/users/',
   Authenticator.authenticateUser,
   UserMiddleware.validateGetRequest,
   UserController.fetchUsers
 );

    /**
     * @swagger
     * /users:
     *   post:
     *     description: Creates a user
     *     tags:
     *      - Create User
     *     produces:
     *      - application/json
     *     parameters:
     *       - name: body
     *         description: User object
     *         in:  body
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/NewUser'
     *     responses:
     *       201:
     *         description: users
     *         schema:
     *          type: object
     */
userRoutes.post(
  '/users/',
  UserMiddleware.validateCreateRequest,
  UserController.createUser
);

    /**
 * @swagger
 * /users/{id}:
 *   delete:
 *     description: Deletes a user by id
 *     tags:
 *      - Deletes a user by id
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: body
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: users
 *         schema:
 *          type: array
 */
userRoutes.delete(
   '/users/:id',
   Authenticator.authenticateUser,
   UserMiddleware.validateDeleteRequest,
   UserController.deleteUser
 );

  /**
   * @swagger
   * /users/login:
   *   post:
   *     description: Signs in a user
   *     tags:
   *      - Signs in a user
   *     produces:
   *      - application/json
   *     parameters:
   *       - name: body
   *         description: User object
   *         in:  body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/Login'
   *     responses:
   *       201:
   *         description: users
   *         schema:
   *          type: object
   */
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

/**
 * @swagger
 * /users/{id}/documents:
 *    get:
 *      description: Returns the documents belonging to the user of id
 *      tags:
 *        - Returns Documents of A User
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: Authorization
 *          in: header
 *          description: an authorization header
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: user's documents
 *          schema:
 *            type: object
 */
userRoutes.get(
 '/users/:id/documents',
 Authenticator.authenticateUser,
 UserController.fetchUserDocuments
);

  /**
 * @swagger
 * /api/users/{id}/documents:
 *    get:
 *      description: Returns the documents belonging to the user of id
 *      tags:
 *        - Returns Documents of A User
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: Authorization
 *          in: header
 *          description: an authorization header
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: user's documents
 *          schema:
 *            type: object
 */
userRoutes.get('/search/users',
  Authenticator.authenticateUser,
  UserController.findUser);

export default userRoutes;
