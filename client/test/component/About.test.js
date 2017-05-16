/* global expect:true */
/* global shallow:true */
/* global mount:true */

import React from 'react';//eslint-disable-line
import { shallow } from 'enzyme';
import About from '../../public/js/components/About';

describe('<About />', () => {
  it('should have a box', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('#docIcon')).to.have.length(1);
  });

  it('should have props for message and error type', () => {
    const wrapper = shallow(
      <About />
    );
    expect(wrapper.find('#aboutDiv')).to.have.length(1);
  });
});
