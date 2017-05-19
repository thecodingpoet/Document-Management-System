import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Signup from '../../public/js/components/Signup';

const mockStore = configureStore();

describe('<Signup />', () => {
  it('should display input field to register', (done) => {
    const wrapper = mount(
      <Provider store={mockStore()} >
        <Signup />
      </Provider>
    );

    expect(wrapper.find('#firstName')).to.have.length(1);
    expect(wrapper.find('#lastName')).to.have.length(1);
    expect(wrapper.find('#email')).to.have.length(1);
    expect(wrapper.find('#password')).to.have.length(1);
    done();
  });
});
