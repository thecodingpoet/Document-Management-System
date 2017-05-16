import UserController from '../controllers/UserController';
import Authenticator from '../middlewares/Authenticator';
import UserMiddleware from '../middlewares/UserMiddleware';

/**
 * Class to create an instance of a UserRoutes Object
 * and set up all routes associated with a user object
 * for an express router
 */
class UserRoutes {
  /**
   * Method to set all User routes
   * @param{Object} router - Express router
   * @returns{Void} - Returns Void
   */
  static setUserRoutes(router) {
    /**
     * @swagger
     * definition:
     *   NewUser:
     *     type: object
     *     required:
     *       - firstname
     *       - lastname
     *       - email
     *       - password
     *     properties:
     *       firstName:
     *         type: string
     *       lastName:
     *         type: string
     *       password:
     *         type: string
     *         format: password
     *       email:
     *         type: string
     *   User:
     *     allOf:
     *       - $ref: '#/definitions/NewUser'
     *       - required:
     *         - id
     *       - properties:
     *         id:
     *           type: integer
     *           format: int64
     */
    UserRoutes.createUser(router);
    UserRoutes.loginUser(router);
    UserRoutes.logoutUser(router);
    UserRoutes.fetchUser(router);
    UserRoutes.fetchUsers(router);
    UserRoutes.updateUser(router);
    UserRoutes.deleteUser(router);
    UserRoutes.fetchUserDocuments(router);
  }

  /**
   * Method to set up route for requests to create a new user
   * @param{Object} router - Express router
   * @return{Void} - Returns Void
   */
  static createUser(router) {
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
    router.post(
      '/users/',
      UserMiddleware.validateCreateRequest,
      UserController.createUser
    );
  }

  /**
   * Method to set up route for user login requests
   * @param{Object} router - Express router
   * @return{Void} - Returns Void
   */
  static loginUser(router) {
      /**
     * @swagger
     * definition:
     *   Login:
     *     type: object
     *     required:
     *       - email
     *       - password
     *     properties:
     *       password:
     *         type: string
     *         format: password
     *       email:
     *         type: string
     *         format: email
     */
    router.post(
      '/users/login',
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
      UserController.loginUser
    );
  }

  /**
   * Method to set up route for user logout requests
   * @param{Object} router - Express router
   * @return{Void} - Returns Void
   */
  static logoutUser(router) {
    router.post(
      '/users/logout',
      Authenticator.authenticateUser,
      UserController.logoutUser
    );
  }

  /**
   * Method to set up route for fetching users
   * @param{Object} router - Express router
   * @return{Void} - Returns Void
   */
  static fetchUsers(router) {
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
    router.get(
      '/users/',
      Authenticator.authenticateUser,
      UserMiddleware.validateGetRequest,
      UserController.fetchUsers
    );
  }


  /**
   * Method to set up route for fetching a specific user
   * @param{Object} router - Express router
   * @return{Void} - Returns Void
   */
  static fetchUser(router) {
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
    router.get(
      '/users/:id',
      Authenticator.authenticateUser,
      UserMiddleware.validateGetRequest,
      UserController.fetchUser
    );
  }

  /**
   * Method to set up route for updating user fields
   * @param{Object} router - Express router
   * @return{Void} - Returns Void
   */
  static updateUser(router) {
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
    router.put(
      '/users/:id',
      Authenticator.authenticateUser,
      UserMiddleware.validateUpdateRequest,
      UserController.updateUser
    );
  }

  /**
   * Method to set up route for delete user requests
   * @param{Object} router - Express router
   * @return{Void} - Returns Void
   */
  static deleteUser(router) {
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
    router.delete(
      '/users/:id',
      Authenticator.authenticateUser,
      UserMiddleware.validateDeleteRequest,
      UserController.deleteUser
    );
  }

  /**
   * Method to set up route for fetching all specified user documents
   * @param{Object} router - Express router
   * @return{Void} - Returns Void
   */
  static fetchUserDocuments(router) {
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
    router.get(
      '/users/:id/documents',
      Authenticator.authenticateUser,
      UserController.fetchUserDocuments
    );
  }

  /**
   * Method to set up route for searching documents
   * @param{Object} router - Express router
   * @return{Void} - Returns Void
   */
  static searchDocument(router) {
  /**
   * @swagger
   * /search/users?q={johndoe@gmail.com}:
   *    get:
   *      description: Returns the user
   *      tags:
   *        - Finds a user by email
   *      produces:
   *        - application/json
   *      parameters:
   *        - name: Authorization
   *          in: header
   *          description: an authorization header
   *          required: true
   *          type: string
   *        - in: query
   *          name: q
   *          description: email of a registred user
   *          required: true
   *          type: string
   *      responses:
   *        200:
   *          description: user
   *          schema:
   *            type: object
   */
    router.get('/search/users',
    Authenticator.authenticateUser, UserController.searchUser);
  }
}

export default UserRoutes;
