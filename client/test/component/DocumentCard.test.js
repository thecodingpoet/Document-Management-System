/* global expect:true */
/* global shallow:true */
/* global mount:true */

import React from 'react';//eslint-disable-line
import { shallow } from 'enzyme';
import DocumentCard from '../../public/js/components/DocumentCard';

describe('<DocumentCard />', () => {
  const props = {
    doc: {
      title: 'test-doc',
      content: 'one new doc',
      id: 1
    }
  };
  it('should have the card-content area', () => {
    const wrapper = shallow(<DocumentCard {...props} />);
    expect(wrapper.find('.card-content')).to.have.length(1);
  });

  it('should set the title based on information from props', () => {
    const wrapper = shallow(<DocumentCard {...props} />);
    expect(wrapper.find('.card-title').props().children.props.children).to.eql('test-doc');
  });

  it('should set the content based on information from props', () => {
    const wrapper = shallow(<DocumentCard {...props} />);
    console.log();
    expect(wrapper.find('.docContent').props().dangerouslySetInnerHTML.__html).to.eql('one new doc');
  });
});
