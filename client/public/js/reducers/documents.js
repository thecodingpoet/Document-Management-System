import { SET_DOCUMENTS, CREATE_DOCUMENTS, SET_CURRENT_DOCUMENT, DELETE_DOCUMENT_SUCCESS } from '../actions/documents';

export default function documents(state = [], action = {}) {
  switch (action.type) {
  case CREATE_DOCUMENTS:
    return [
      ...state,
      action.documents
    ];
  case SET_DOCUMENTS:
    return action.documents;
  case SET_CURRENT_DOCUMENT:
    return [action.document];
  case DELETE_DOCUMENT_SUCCESS:
    return state.filter(item => item.id !== action.documentId);
  default: return state;
  }
}
