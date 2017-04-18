import express from 'express';
import DocumentController from '../controllers/DocumentController';
import Authenticator from '../middlewares/Auth';
import DocumentMiddleware from '../middlewares/DocumentMiddleware';

const documentRoutes = express.Router();

documentRoutes.get(
  '/documents',
  Authenticator.authenticateUser,
  DocumentMiddleware.validateGetRequest,
  DocumentController.fetchDocuments
);

documentRoutes.get(
  '/documents/:id',
  Authenticator.authenticateUser,
  DocumentMiddleware.validateGetRequest,
  DocumentController.fetchDocument
);

documentRoutes.post(
  '/documents',
  Authenticator.authenticateUser,
  DocumentMiddleware.validateCreateRequest,
  DocumentController.createDocument
);

documentRoutes.put(
  '/documents/:id',
  Authenticator.authenticateUser,
  DocumentController.updateDocument
);

documentRoutes.delete(
  '/documents/:id',
  Authenticator.authenticateUser,
  DocumentController.deleteDocument
);

export default documentRoutes;
