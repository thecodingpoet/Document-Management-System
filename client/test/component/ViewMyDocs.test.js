import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import ViewMyDocs from '../../public/js/components/ViewMyDocs';

const mockStore = configureStore();

const props = {
    docs: [{ ownerId: 2 }],
    // testFunc: sinon.spy(),
    user: {}
}

describe('<ViewMyDocs />', () => {
  it('should view my document', (done) => {
    const wrapper = mount(
      <Provider store={mockStore()} >
          <ViewMyDocs docs={[{ ownerId: 2, title: 'chef', content: 'pink', id: 2 }]} />
      </Provider>
    );
    console.log(wrapper);
  });
});
