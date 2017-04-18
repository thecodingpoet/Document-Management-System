import express from 'express';
import RoleController from '../controllers/RoleController';
import Authenticator from '../middlewares/Auth';
import RoleMiddleware from '../middlewares/RoleMiddleware';

const roleRoutes = express.Router();

roleRoutes.get(
  '/roles',
  Authenticator.authenticateUser,
  RoleMiddleware.validateGetRequest,
  RoleController.fetchRoles
);

roleRoutes.get(
  '/roles/:id',
  Authenticator.authenticateUser,
  RoleMiddleware.validateGetRequest,
  RoleController.fetchRole
);

roleRoutes.post(
  '/roles',
  Authenticator.authenticateUser,
  RoleMiddleware.validateCreateRequest,
  RoleController.createRole
);

roleRoutes.put(
  '/roles/:id',
  Authenticator.authenticateUser,
  RoleMiddleware.validateUpdateRequest,
  RoleController.updateRole
);

roleRoutes.delete(
  '/roles/:id',
  Authenticator.authenticateUser,
  RoleMiddleware.validateDeleteRequest,
  RoleController.deleteRole);

export default roleRoutes;
