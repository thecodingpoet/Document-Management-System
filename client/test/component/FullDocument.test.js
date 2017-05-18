import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import FullDocument from '../../public/js/components/FullDocument';

const mockStore = configureStore();

const props = {
    match: { params: { id: 7 } },
    docs: [
        { id: 7, title: 'rey', content: 'erso', ownerId: 2 }
    ]
}

describe('<FullDocument />', () => {
  it.only('should display input field to register', (done) => {
    const wrapper = mount(
      <Provider store={mockStore({ documents: props.docs })} >
          <FullDocument {...props} />
      </Provider>
    );
    expect(wrapper.find('#email')).to.have.length(1);
    expect(wrapper.find('#password')).to.have.length(1);
    // expect(props.editProfile.calledOnce).to.eql(true);
    done();
  });
});
