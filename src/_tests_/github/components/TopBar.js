import React from 'react';
import { shallow } from 'enzyme';
import { TopBar } from '../../../github/components/TopBar';

it('render', ()=> {
    const wrapper = shallow(<TopBar />);
    expect(wrapper.find().length).toBe(0);
});