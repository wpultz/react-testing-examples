/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Item from '../../src/components/Item';

const renderComp = (id, name, removeItem) => (
    shallow(<Item id={id} name={name} removeItem={removeItem} />)
);

describe('Item component', () => {
    it('should have a three children if a remove fn was specified', () => {
        const removeComp = () => ({});
        const comp = renderComp('1', 'thing1', removeComp);
        const children = comp.children();
        expect(children.length).toEqual(3);
        expect(children.at(2).type()).toEqual('button');
    });

    it('should have two children if a remove fn was not specified', () => {
        const comp = renderComp('1', 'thing1');
        const children = comp.children();
        expect(children.length).toEqual(2);
    });

    it('should call the removeItem fn when the remove button is clicked', () => {
        const helpers = {
            removeItem: () => ({})
        };
        const spy = expect.spyOn(helpers, 'removeItem');
        // render the component
        const comp = renderComp('1', 'thing1', helpers.removeItem);
        // simulate a click on the component's button
        comp.find('button').simulate('click');
        expect(spy.calls.length).toEqual(1);
        // check the values passed to the function
        expect(spy).toHaveBeenCalledWith('1');
    });
});
