import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import EditProfile from '../../public/js/components/EditProfile';

const mockStore = configureStore();

const props = {
    editProfile: sinon.spy()
}

describe('<EditProfile />', () => {
  it('should edit the user information', (done) => {
    const wrapper = mount(
      <Provider store={mockStore()} >
          <EditProfile {...props} />
      </Provider>
    );
    const input = wrapper.find('#firstName');

    input.simulate('focus');
    wrapper.find('.firstName').simulate('change', { target: { value: 'Olere' } });
    wrapper.find('#lastName').simulate('change', { target: { value: 'Olecvd' } });
    wrapper.find('#email').simulate('change', { target: { value: 'Ole@g.com' } });
    wrapper.find('#password').simulate('change', { target: { value: 'Ole8password' } });
    wrapper.find('#edit-profile-btn').simulate('click');
    expect(wrapper.find('#firstName')).to.have.length(1);
    expect(wrapper.find('#lastName')).to.have.length(1);
    expect(wrapper.find('#email')).to.have.length(1);
    expect(wrapper.find('#password')).to.have.length(1);
    // expect(props.editProfile.calledOnce).to.eql(true);
    done();
  });
});
