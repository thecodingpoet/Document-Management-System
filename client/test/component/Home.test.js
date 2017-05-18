/* global expect:true */
/* global shallow:true */
/* global mount:true */

import React from 'react';//eslint-disable-line
import { shallow } from 'enzyme';
import Home from '../../public/js/components/Home';

describe('<Home />', () => {
  it('should display an image', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('#banner')).to.have.length(1);
  });
});
