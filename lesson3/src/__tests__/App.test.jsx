import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('<App/>', () =>{
    it('Should render Todo List', () => {
        const wrapperComponent = shallow(<App />);
        expect(wrapperComponent.find('TodoList').exists()).toBeTruthy();
    });
});








// .exists() - Повертає, чи існують у обгортці будь-які вузли. Або, якщо передано селектор, чи має цей селектор 
//збіги в обгортці.


/* const wrapper = mount(<div className="some-class" />);
expect(wrapper.exists('.some-class')).to.equal(true);
expect(wrapper.find('.other-class').exists()).to.equal(false); */