import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Signup from '../../public/js/components/Signup';

const mockStore = configureStore();

const props = {
    editProfile: sinon.spy()
}

describe('<Signup />', () => {
  it('should display input field to register', (done) => {
    const wrapper = mount(
      <Provider store={mockStore()} >
          <Signup />
      </Provider>
    );
    const input = wrapper.find('#firstName');

    expect(wrapper.find('#firstName')).to.have.length(1);
    expect(wrapper.find('#lastName')).to.have.length(1);
    expect(wrapper.find('#email')).to.have.length(1);
    expect(wrapper.find('#password')).to.have.length(1);
    // expect(props.editProfile.calledOnce).to.eql(true);
    done();
  });
});
