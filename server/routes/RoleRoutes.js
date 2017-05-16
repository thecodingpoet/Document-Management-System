import RoleController from '../controllers/RoleController';
import Authenticator from '../middlewares/Authenticator';
import RoleMiddleware from '../middlewares/RoleMiddleware';

/**
 * Class for creating Role routes
 */
class RoleRoutes {

  /**
   * Method to hook up all routes to respective endpoints
   * @param{Object} router - Express router
   * @return{Void} returns void
   */
  static setRoleRoutes(router) {
    /**
   * @swagger
   * definition:
   *   NewRole:
   *     type: object
   *     required:
   *       - title
   *     properties:
   *       title:
   *         type: string
   *   Role:
   *     allOf:
   *       - $ref: '#/definitions/NewRole'
   *       - required:
   *         - id
   *       - properties:
   *         id:
   *           type: integer
   *           format: int64
   */
    RoleRoutes.getRole(router);
    RoleRoutes.getRoles(router);
    RoleRoutes.createRole(router);
    RoleRoutes.deleteRole(router);
    RoleRoutes.updateRole(router);
  }

  /**
   * Method to setup Route for deleting a specified role
   * @param{Object} router - Express router
   * @return{Void} returns void
   */
  static getRoles(router) {
    router.get(
      '/roles',
      Authenticator.authenticateUser,
      RoleMiddleware.validateGetRequest,
      RoleController.fetchRoles
    );
  }

  /**
   * Method to setup Route for deleting a specified role
   * @param{Object} router - Express router
   * @return{Void} returns void
   */
  static getRole(router) {
             /**
     * @swagger
     * /roles/{id}:
     *   get:
     *     description: Returns a role
     *     tags:
     *      - Returns a Role by id
     *     produces:
     *      - application/json
     *     parameters:
     *       - name: Authorization
     *         in:  header
     *         description: an authorization token
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/Role'
     *     responses:
     *       201:
     *         description: roles
     *         schema:
     *          type: object
     */
    router.get(
      '/roles/:id',
      Authenticator.authenticateUser,
      RoleMiddleware.validateGetRequest,
      RoleController.fetchRole
    );
  }

  /**
   * Method to setup Route for deleting a specified role
   * @param{Object} router - Express router
   * @return{Void} returns void
   */
  static createRole(router) {
        /**
     * @swagger
     * /roles:
     *   post:
     *     description: Creates a role
     *     tags:
     *      - Create Role
     *     produces:
     *      - application/json
     *     parameters:
     *       - name: Authorization
     *         in:  header
     *         description: an authorization token
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/Role'
     *     responses:
     *       201:
     *         description: roles
     *         schema:
     *          type: object
     */
    router.post(
      '/roles',
      Authenticator.authenticateUser,
      RoleMiddleware.validateCreateRequest,
      RoleController.createRole
    );
  }

  /**
   * Method to setup Route for deleting a specified role
   * @param{Object} router - Express router
   * @return{Void} returns void
   */
  static updateRole(router) {
                /**
     * @swagger
     * /roles/{id}:
     *   put:
     *     description: Updates a role
     *     tags:
     *      - Updates a role
     *     produces:
     *      - application/json
     *     parameters:
     *       - name: Authorization
     *         in:  header
     *         description: an authorization token
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/Role'
     *     responses:
     *       201:
     *         description: roles
     *         schema:
     *          type: object
     */
    router.put(
      '/roles/:id',
      Authenticator.authenticateUser,
      RoleMiddleware.validateUpdateRequest,
      RoleController.updateRole
    );
  }

  /**
   * Method to setup Route for deleting a specified role
   * @param{Object} router - Express router
   * @return{Void} returns void
   */
  static deleteRole(router) {
                    /**
     * @swagger
     * /roles/{id}:
     *   delete:
     *     description: Deletes a role
     *     tags:
     *      - Deletes a role
     *     produces:
     *      - application/json
     *     parameters:
     *       - name: Authorization
     *         in:  header
     *         description: an authorization token
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/Role'
     *     responses:
     *       201:
     *         description: roles
     *         schema:
     *          type: object
     */
    router.delete(
      '/roles/:id',
      Authenticator.authenticateUser,
      RoleMiddleware.validateDeleteRequest,
      RoleController.deleteRole);
  }
}

export default RoleRoutes;
