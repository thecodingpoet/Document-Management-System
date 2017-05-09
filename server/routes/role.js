import express from 'express';
import RoleController from '../controllers/RoleController';
import Authenticator from '../middlewares/Auth';
import RoleMiddleware from '../middlewares/RoleMiddleware';

const roleRoutes = express.Router();

        /**
 * @swagger
 * /roles:
 *   get:
 *     description: Return all roles
 *     tags:
 *      - Return all roles
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
roleRoutes.get(
  '/roles',
  Authenticator.authenticateUser,
  RoleMiddleware.validateGetRequest,
  RoleController.fetchRoles
);

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
roleRoutes.get(
  '/roles/:id',
  Authenticator.authenticateUser,
  RoleMiddleware.validateGetRequest,
  RoleController.fetchRole
);

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
roleRoutes.post(
  '/roles',
  Authenticator.authenticateUser,
  RoleMiddleware.validateCreateRequest,
  RoleController.createRole
);

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
roleRoutes.put(
  '/roles/:id',
  Authenticator.authenticateUser,
  RoleMiddleware.validateUpdateRequest,
  RoleController.updateRole
);
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
roleRoutes.delete(
  '/roles/:id',
  Authenticator.authenticateUser,
  RoleMiddleware.validateDeleteRequest,
  RoleController.deleteRole);

export default roleRoutes;
