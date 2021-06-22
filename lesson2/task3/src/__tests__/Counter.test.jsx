import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Counter', () => {
    it('should return 0 when component in default state', () => {
        const wrappedComponent = shallow(<Counter />);

        expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
    });

    it('should return -1 when decrement function is called', () => {
        const wrappedComponent = shallow(<Counter />);
        wrappedComponent.find('.decrement').simulate('click');

        expect(wrappedComponent.find('.counter__value').text()).toEqual('-1');
    });

    it('should return 1 when increment function is called', () => {
        const wrappedComponent = shallow(<Counter />);
        wrappedComponent.find('.increment').simulate('click');

        expect(wrappedComponent.find('.counter__value').text()).toEqual('1');
    });

    it('should reset the value to 0 when by click', () => {
        const wrappedComponent = shallow(<Counter />);
        wrappedComponent.find('.increment').simulate('click');
        wrappedComponent.find('.increment').simulate('click');
        wrappedComponent.find('.counter__value').simulate('click');

        expect(wrappedComponent.find('.counter__value').text()).toEqual('0');
    });
});
