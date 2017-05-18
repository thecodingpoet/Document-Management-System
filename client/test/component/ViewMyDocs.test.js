import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import ViewMyDocuments from '../../public/js/components/ViewMyDocuments';

const mockStore = configureStore();

const props = {
  docs: [{ ownerId: 2 }],
  user: {}
};

describe('<ViewMyDocs />', () => {
  it('should view my document', (done) => {
    const wrapper = mount(
      <Provider store={mockStore()} >
        <ViewMyDocuments docs={[{ ownerId: 2, title: 'chef', content: 'pink', id: 2 }]} />
      </Provider>
    );
  });
});
