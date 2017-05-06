import axios from 'axios';

export const SET_DOCUMENTS = 'SET_DOCUMENTS';
export const CREATE_DOCUMENTS = 'CREATE_DOCUMENTS';

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
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    return axios.post(`/api/documents/${docId}`, doc, {
      headers: {
        authorization: token
      }
    }).then(documents => dispatch(editDoc(documents.data.documents)))
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
    return axios.delete(`/api/documents/${docId}`, {
      headers: {
        authorization: token
      }
    }).then(documents => dispatch(deleteDoc(documents.data.documents)))
    .catch((err) => {
      // An error occurred.....
    });
  };
}

