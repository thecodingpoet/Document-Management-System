import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import MyDocumentCard from '../../public/js/components/MyDocumentCard';

const mockStore = configureStore();

const props = {
    doc: { title: 'some', content: 'yada yada' },
    // testFunc: sinon.spy(),
    user: {}
}

describe('<MyDocumentCard />', () => {
  it('should view my document', (done) => {
    const wrapper = mount(
      <Provider store={mockStore()} >
          <MyDocumentCard {...props} />
      </Provider>
    );
    expect(wrapper.find('.card-title').props().children.props.children).to.eql(props.doc.title);
    done();
  });

  it('should view my document', (done) => {
    const wrapper = mount(
      <Provider store={mockStore()} >
          <MyDocumentCard {...props} />
      </Provider>
    );
    expect(wrapper.find('#content')).to.have.length(1);
    done();
  });
});
