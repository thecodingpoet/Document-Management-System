import DocumentController from '../controllers/DocumentController';
import Authenticator from '../middlewares/Authenticator';
import DocumentMiddleware from '../middlewares/DocumentMiddleware';

/**
 * Class for creating Document routes
 */
class DocumentRoutes {
  /**
   * Method to set the various document routes
   * @param{Object} router - Express router
   * @return{Void} - returns Void
   */
  static setDocumentRoutes(router) {
      /**
   * @swagger
   * definition:
   *   NewDocument:
   *     type: object
   *     required:
   *        - title
   *        - content
   *     properties:
   *        title:
   *           type: string
   *        content:
   *           type: string
   *   Document:
   *      allOf:
   *        - $ref: '#definitions/NewDocument'
   *        - required:
   *        - id:
   *              type: integer
   *              format: int64
   */
    DocumentRoutes.getDocuments(router);
    DocumentRoutes.getDocument(router);
    DocumentRoutes.createDocument(router);
    DocumentRoutes.updateDocument(router);
    DocumentRoutes.deleteDocument(router);
  }

  /**
   * Method to set controller for fetch documents route
   * @param{Object} router - Express router
   * @return{Void} - Returns void
   */
  static getDocuments(router) {
    /**
     * @swagger
     * /documents:
     *   get:
     *      description: Returns a list of all documents
     *      tags:
     *        - Get Documents List
     *      produces:
     *        - application/json
     *      parameters:
     *        - name: Authorization
     *          description: A valid token
     *          in: header
     *          required: true
     *          type: string
     *      responses:
     *          200:
     *              description: documents
     *              schema:
     *                  type: array
     *                  items:
     *                      $ref: '#/definitions/Document'
     */
    router.get(
      '/documents',
      Authenticator.authenticateUser,
      DocumentMiddleware.validateGetRequest,
      DocumentController.fetchDocuments
    );
  }

  /**
   * Method to set controller for fetch document route
   * @param{Object} router - Express router
   * @return{Void} - Returns void
   */
  static getDocument(router) {
    router.get(
      '/documents/:id',
      Authenticator.authenticateUser,
      DocumentMiddleware.validateGetRequest,
      DocumentController.fetchDocument
    );
  }

  /**
   * Method to set controller for create a document route
   * @param{Object} router - Express router
   * @return{Void}  - Returns void
   */
  static createDocument(router) {
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
    router.post(
      '/documents',
      Authenticator.authenticateUser,
      DocumentMiddleware.validateCreateRequest,
      DocumentController.createDocument
    );
  }

  /**
   * Method to set controller for update documents route
   * @param{Object} router - Express router
   * @return{Void} - Returns void
   */
  static updateDocument(router) {
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
    router.put(
      '/documents/:id',
      Authenticator.authenticateUser,
      DocumentController.updateDocument
    );
  }

  /**
   * Method to set controller for delete document route
   * @param{Object} router - Express router
   * @return{Void} - Returns void
   */
  static deleteDocument(router) {
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
    router.delete(
      '/documents/:id',
      Authenticator.authenticateUser,
      DocumentController.deleteDocument
    );
  }

  /**
   * Method to set controller for search document route
   * @param{Object} router - Express router
   * @return{Void} - Returns void
   */
  static searchDocument(router) {
        /**
   * @swagger
   * /search/documents?q={DocumentTitle}:
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
    router.get('/search/documents', Authenticator.authenticateUser,
    DocumentMiddleware.validateGetRequest,
     DocumentController.searchDocuments);
  }
}

export default DocumentRoutes;
