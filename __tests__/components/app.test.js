import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from 'src/components/app';

describe('Root App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  })
})