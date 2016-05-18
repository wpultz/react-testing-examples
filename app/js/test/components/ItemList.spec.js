/* global describe it */

import React from 'react';
import { List, fromJS } from 'immutable';
import { shallow } from 'enzyme';
import expect from 'expect';

import ItemList from '../../src/components/ItemList';
import Item from '../../src/components/Item';
import AddThingForm from '../../src/containers/AddThingForm';

describe('ItemList component', () => {
    it('should handle no items', () => {
        const items = List();
        const comp = shallow(<ItemList items={items} />);
        expect(comp.find(Item).length).toEqual(0);
    });

    it('should handle several items', () => {
        const items = fromJS([{
            id: '1',
            name: 'thing1'
        }, {
            id: '2',
            name: 'thing2'
        }]);
        const comp = shallow(<ItemList items={items} />);
        expect(comp.find(Item).length).toEqual(2);
    });

    it('should have include a form to add things', () => {
        const comp = shallow(<ItemList items={List()} AddItemForm={AddThingForm} />);
        expect(comp.find(AddThingForm).length).toEqual(1);
    });

    it('should pass the removeItem function down items', () => {
        const removeFn = () => ({});
        const items = fromJS([{
            id: '1',
            name: 'thing1'
        }]);
        const comp = shallow(<ItemList items={items} removeItem={removeFn} />);
        const itemComps = comp.find(Item);
        expect(itemComps.length).toEqual(1);
        expect(itemComps.at(0).props().removeItem).toEqual(removeFn);
    });
});
