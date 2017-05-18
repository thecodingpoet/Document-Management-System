import expect from 'expect';
import auth from '../../public/js/reducers/documents';
import actions from '../../public/js/actions/actionTypes';

describe('Documents Reducer', () => {
  it('should create documents when passed CREATE_DOCUMENTS', () => {
    const initialState = {};
    const documents = { title: 'Harry Potter', content: `Alice:
    How long is forever? White Rabbit:Sometimes, just one second.` };
    const action = { type: actions.CREATE_DOCUMENTS, documents };
    const newState = auth(initialState, action);
    expect(newState).toEqual([documents]);
  });

  it('should deletedocuments when passed DELETE_DOCUMENT_SUCCESS', () => {
    const initialState = [{ title: 'Harry Potter',
      content: `Alice:
    How long is forever? White Rabbit:Sometimes, just one second.`,
      id: 2 }];

    const documents = [];
    const action = { type: actions.DELETE_DOCUMENT_SUCCESS, documentId: 2 };
    const newState = auth(initialState, action);
    expect(newState).toEqual(documents);
  });
});
