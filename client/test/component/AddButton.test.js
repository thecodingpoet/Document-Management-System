/* global expect:true */
/* global shallow:true */
/* global mount:true */

import React from 'react';//eslint-disable-line
import { shallow } from 'enzyme';
import AddButton from '../../public/js/components/AddButton';

describe('<AddButton />', () => {
  it('should have a box', () => {
    const wrapper = shallow(<AddButton />);
    expect(wrapper.find('#addBtn')).to.have.length(1);
  });

  it('should have props for message and error type', () => {
    const wrapper = shallow(
      <AddButton />
    );
    expect(wrapper.find('#addBtn').props().children.props.children)
        .to.eql('Create new document');
  });
});
