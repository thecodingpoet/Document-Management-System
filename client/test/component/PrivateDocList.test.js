/* global expect:true */
/* global shallow:true */
/* global mount:true */

import React from 'react';
import { shallow } from 'enzyme';
import PrivateDocList from '../../public/js/components/PrivateDocsList';

describe('<PrivateDocList />', () => {
  it('should render the empty message paragraph if no document', () => {
    const wrapper = shallow(
      <PrivateDocList docs={[]} />
    );
    expect(wrapper.find('#empty-msg')).to.have.length(1);
  });

  it('should render the empty message if no document', () => {
    const wrapper = shallow(
      <PrivateDocList docs={[]} />
    );
    expect(wrapper.find('#empty-msg').props().children)
        .to.eql('There are no Private Documents yet');
  });
});

