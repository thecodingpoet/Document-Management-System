import { SET_DOCUMENTS, CREATE_DOCUMENTS } from '../actions/documents';

export default function documents(state = [], action = {}) {
  switch (action.type) {
  case CREATE_DOCUMENTS:
    return [
      ...state,
      action.documents
    ];
  case SET_DOCUMENTS:
    return action.documents;
  default: return state;
  }
}
