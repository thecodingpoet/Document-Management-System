import express from 'express';
import DocumentController from '../controllers/DocumentController';
import Authenticator from '../middlewares/Auth';
import DocumentMiddleware from '../middlewares/DocumentMiddleware';

const documentRoutes = express.Router();

  /**
 * @swagger
 * /documents:
 *   get:
 *     description: Gets a list of all documents
 *     tags:
 *      - Get Document List
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
 *          description: documents
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/definitions/Document'
 */
documentRoutes.get(
  '/documents',
  Authenticator.authenticateUser,
  DocumentMiddleware.validateGetRequest,
  DocumentController.fetchDocuments
);

/**
 * @swagger
 * /documents/{id}:
 *   get:
 *     description: Gets a document by Id
 *     tags:
 *      - Returns a single document
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
 *          description: documents
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/definitions/Document'
 */
documentRoutes.get(
  '/documents/:id',
  Authenticator.authenticateUser,
  DocumentMiddleware.validateGetRequest,
  DocumentController.fetchDocument
);

  /**
 * @swagger
 * /documents:
 *   post:
 *     description: Creates a new document
 *     tags:
 *      - Create Document
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: body
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewDocument'
 *     responses:
 *       201:
 *         description: documents
 *         schema:
 *          type: object
 */
documentRoutes.post(
  '/documents',
  Authenticator.authenticateUser,
  DocumentMiddleware.validateCreateRequest,
  DocumentController.createDocument
);

  /**
 * @swagger
 * /documents/{id}:
 *   put:
 *     description: Updates a document by Id
 *     tags:
 *      - Returns a updated document
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
 *          description: documents
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/definitions/Document'
 */
documentRoutes.put(
  '/documents/:id',
  Authenticator.authenticateUser,
  DocumentController.updateDocument
);

/**
 * @swagger
 * /documents/{id}:
 *   delete:
 *     description: Removes a document by Id
 *     tags:
 *      - Removes a document by Id
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
 *          description: documents
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/definitions/Document'
 */
documentRoutes.delete(
  '/documents/:id',
  Authenticator.authenticateUser,
  DocumentController.deleteDocument
);

  /**
 * @swagger
 * /api/users/search/documents?q={DocumentTitle}:
 *    get:
 *      description: Returns the documents
 *      tags:
 *        - Finds a document by title
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
documentRoutes.get(
  '/search/documents',
  Authenticator.authenticateUser,
  DocumentController.findDoc
);

export default documentRoutes;
