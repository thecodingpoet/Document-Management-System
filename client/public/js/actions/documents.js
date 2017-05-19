/* eslint-disable no-undef */

import axios from 'axios';
import actionTypes from './actionTypes';

export /**
 * This sets current document
 * @param {any} document - document
 * @returns {Object} - Object containing action type and document
 */
const setCurrentDocument = document => ({
  type: actionTypes.SET_CURRENT_DOCUMENT,
  document
});

export /**
 * View documents action
 * @param {any} documents - documents
 * @returns {Object} - Object containing action type and document
 */
const viewDocs = documents => ({
  type: actionTypes.SET_DOCUMENTS,
  documents
});

export /**
 * This creates new document
 * @param {any} document - document
 * @returns {Object} - Object containing action type and document
 */
const newDoc = document => ({
  type: actionTypes.CREATE_DOCUMENTS,
  document
});

export /**
 * This creates new document
 * @param {any} document - document
 * @returns {Object} - Object containing action type and document
 */
const editDocSuccess = document => ({
  type: actionTypes.EDIT_DOCUMENT_SUCCESS,
  document
});

export /**
 * This creates new document
 * @param {any} documentId - document
 * @returns {Object} - Object containing action type and document id
 */
const documentDeleted = documentId => ({
  type: actionTypes.DELETE_DOCUMENT_SUCCESS,
  documentId
});

export /**
 * This creates new document
 * @param {any} documentId - document
 * @returns {Object} - Object containing action type and document id
 */
const fetchAllDocs = () => (dispatch) => {
  const token = window.localStorage.getItem('token');
  return axios.get('/documents', {
    headers: {
      authorization: token
    }
  })
    .then(documents => dispatch(viewDocs(documents.data.documents)));
};

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
    }).then((res) => {
      dispatch(newDoc(res.data));
    }).catch(() => false);
  };
}

/**
 * This method dipatches an edit document action
 * @export
 * @param {Object} doc
 * @param {Integer} docId
 * @returns {Object} - An object that consist of the type
 * of the document and the action
 */
export function editDoc(doc, docId) {
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    return axios.put(`/documents/${docId}`, doc, {
      headers: {
        authorization: token
      }
    }).then((documents) => {
      dispatch(editDocSuccess(documents.data.documents));
      Materialize.toast('Document Edited Successfully', 4000, 'green');
    });
  };
}


export /**
 * This method dipatches the delete document action
 * @param {any} docId - document id
 * @returns {Object} - Document list without the document with the given id
 */
const deleteDoc = docId => (dispatch) => {
  const token = window.localStorage.getItem('token');
  return axios.delete(`/documents/${docId}`, {
    headers: {
      authorization: token
    }
  }).then(() => dispatch(documentDeleted(docId)));
};
