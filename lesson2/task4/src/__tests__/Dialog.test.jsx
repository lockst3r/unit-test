import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog';

describe('Dialog', () => {
    it('Should not displayed dialog component', () =>{
        const wrappedComponent = shallow(<Dialog />);

        expect(wrappedComponent.find('.dialog').exists()).toEqual(false);
    });

    it('Should displayed dialog component', () => {
        const wrappedComponent = shallow(<Dialog isOpen={true}/>);

        expect(wrappedComponent.find('.dialog').exists()).toBeTruthy();
    });

    it('Should close dialog', () => {
        const onClose = jest.fn(),
            props = {
                isOpen: true,
                onClose
            },
            wrappedComponent = shallow(<Dialog {...props} />).find('.dialog__close-btn');

        wrappedComponent.simulate('click', {
            target: { isOpen: false }
        });

        expect(wrappedComponent.find('.dialog').exists()).toEqual(false);
    });

    it('Should displayed dialog title', () => {
        const wrappedComponent = shallow(<Dialog isOpen={true} title={'Hello, world!'}/>);

        expect(wrappedComponent.find('.dialog__title').text()).toEqual('Hello, world!');
    });

    it('Should render all children elements of dialog component', () => {
        const cildrenElemns = <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>;
        const wrappedComponent = shallow(<Dialog isOpen={true} title={'Hello, world!'} children={cildrenElemns}/>);

        expect(wrappedComponent.exists()).toMatchSnapshot();
    });
});