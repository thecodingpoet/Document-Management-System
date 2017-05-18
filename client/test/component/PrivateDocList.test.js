/* global expect:true */
/* global shallow:true */
/* global mount:true */

import React from 'react';//eslint-disable-line
import { shallow, mount } from 'enzyme';
import PrivateDocList from '../../public/js/components/PrivateDocsList';

describe('<PrivateDocList />', () => {
  const props = {
      docs: [
          { id: 3, title: 'new', content: 'six', ownerId: 4 },
          { id: 4, title: 'new1', content: 'sev', ownerId: 4 },
          { id: 5, title: 'new2', content: 'eig', ownerId: 4 }
      ]
  }
  it('should have a box', () => {
    const wrapper = mount(<PrivateDocList {...props} />);
    expect(wrapper.find('.docList')).to.have.length(1);
  });

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

//here are no Private Documents yet
