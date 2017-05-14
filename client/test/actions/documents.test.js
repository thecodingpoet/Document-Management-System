import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import nock from 'nock';
import * as actions from '../../public/js/actions/documents';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Document Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates SET_DOCUMENTS and SET_PAGINATION when fetching documents has been done',
  () => {
    nock('http://localhost.com/')
      .get('/documents')
      .reply(200, {
        body: { documents: [{ title: '', content: '', access: '' }] } });

    const expectedActions = [{ type: actions.SET_DOCUMENTS,
      documents: [{ title: '', content: '', access: '' }] }];

    // const store = mockStore({ auth: {}, documents: [],
    // users: [], search: [], paginate: {}, user: [] });
    const store = mockStore({ documents: [], paginate: {} });

    store.dispatch(actions.fetchPublicDocs())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates ADD_DOCUMENT when saving document has been done',
  () => {
    const document = { title: 'title', content: 'content', access: 'public' };
    nock('http://localhost.com/')
      .post('/documents', document)
      .reply(200, {
        body: { document:
            { title: 'title', content: 'content', access: 'public' } } });

    const expectedActions = [{ type: actions.CREATE_DOCUMENTS,
      document: { title: 'title', content: 'content', access: 'public' } }];

    // const store = mockStore({ auth: {}, documents: [],
    // users: [], search: [], paginate: {}, user: [] });
    const store = mockStore({ documents: [] });

    store.dispatch(actions.createDoc())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
