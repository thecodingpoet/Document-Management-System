import axios from 'axios';

export const SET_DOCUMENTS = 'SET_DOCUMENTS';
export const CREATE_DOCUMENTS = 'CREATE_DOCUMENTS';
export const EDIT_DOCUMENT_SUCCESS = 'EDIT_DOCUMENT_SUCCESS';
export const SET_CURRENT_DOCUMENT = 'SET_CURRENT_DOCUMENT';
export const DELETE_DOCUMENT_SUCCESS = 'DELETE_DOCUMENT_SUCCESS';

export function setCurrentDocument(document) {
  return {
    type: SET_CURRENT_DOCUMENT,
    document
  };
}
/**
 * This method dispatches the view documents action
 * @export
 * @param {any} documents
 * @returns {Object} - An object that consist of the type
 * of the document and the action
 */
export function viewDocs(documents) {
  return {
    type: SET_DOCUMENTS,
    documents
  };
}

/**
 * This method dispatches the new document action
 * @export
 * @param {any} documents
 * @returns {Object} - An object that consist of the type
 * of the document and the action
 */
export function newDoc(documents) {
  return {
    type: CREATE_DOCUMENTS,
    documents
  };
}

/**
 * This method dispatches the edit document action
 * @export
 * @param {any} document - Document to edit
 * @returns {}
 */
export function editDocSuccess(document) {
  return {
    type: EDIT_DOCUMENT_SUCCESS,
    document
  };
}

/**
 * This method dispatches the delete document action
 * @export
 * @returns 
 */
export function documentDeleted(documentId) {
  return {
    type: DELETE_DOCUMENT_SUCCESS,
    documentId
  };
}

/**
 * This method dispatches a method to fetch all documents
 * @export
 * @returns {Object} - An object that consist of the type
 * of the document and the action
 */
export function fetchPublicDocs() {
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    return axios.get('/documents', {
      headers: {
        authorization: token
      }
    })
    .then(documents => dispatch(viewDocs(documents.data.documents)));
  };
}

/**
 * This method dipatches a create document action
 * @export
 * @param {Object} doc
 * @returns {Object} - An object that consist of the type
 * of the document and the action
 */
export function createDoc(doc) {
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    return axios.post('/documents', doc, {
      headers: {
        authorization: token
      }
    }).then((documents) => {
      dispatch(newDoc(documents.data.documents));
    }).catch(() => {
      return false;
    });
  };
}

/**
 * This method dispatches an edit document action
 * @export
 * @param {Object} doc - AN object sontaining the filds of the documents
 * @param {Integer} docId - The document id
 * @returns {Object} - An object that consist of the type
 * of the document and the action
 */
export function editDoc(doc, docId) {
  debugger;
  return (dispatch) => {
    debugger;
    const token = window.localStorage.getItem('token');
    return axios.put(`/documents/${docId}`, doc, {
      headers: {
        authorization: token
      }
    }).then(documents => {
      debugger;
      dispatch(editDocSuccess(documents.data.documents));
    })
    .catch(() => {
      // An error occurred.....
    });
  };
}

/**
 * This method dispatches a delete document action
 * @export
 * @param {Integer} docId
 * @returns {Object} - An object that consist of the type
 * of the document and the action
 */
export function deleteDoc(docId) {
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    return axios.delete(`/documents/${docId}`, {
      headers: {
        authorization: token
      }
    }).then(documents => dispatch(documentDeleted(docId)))
    .catch((err) => {
      // An error occurred.....
    });
  };
}

