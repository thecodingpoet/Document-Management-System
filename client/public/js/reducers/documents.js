import actionTypes from '../actions/actionTypes';

/**
 * Documents Reducer
 * @export
 * @param {any} [state=[]]
 * @param {any} [action={}]
 * @returns {state} - state
 */
export default function documents(state = [], action = {}) {
  switch (action.type) {
  case actionTypes.CREATE_DOCUMENTS:
    return [
      ...state,
      action.documents
    ];
  case actionTypes.SET_DOCUMENTS:
    return action.documents;
  case actionTypes.SET_CURRENT_DOCUMENT:
    return [action.document];
  case actionTypes.DELETE_DOCUMENT_SUCCESS:
    return state.filter(item => item.id !== action.documentId);
  default: return state;
  }
}
