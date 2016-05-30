/* global describe, it */

import expect from 'expect';
import expectImmutable from 'expect-immutable';
import { fromJS } from 'immutable';

import {
    SET_THING_NAME, ADD_THING, REMOVE_THING
} from '../../src/constants';

// add immutable comparison to expect
expect.extend(expectImmutable);

import things from '../../src/reducers/things';

const initialState = fromJS({
    signedUp: false,
    options: []
});

const starterState = fromJS({
    signedUp: false,
    options: [{
        id: '1',
        name: 'thing1'
    }, {
        id: '2',
        name: 'thing2'
    }, {
        id: '3',
        name: 'thing3'
    }]
});

describe('thing app reducer', () => {
    it('should handle initial state', () => {
        expect(things(undefined, {})).toEqualImmutable(initialState);
    });

    it('should remove an item by id', () => {
        const action = {
            type: REMOVE_THING,
            id: 3
        };
        const outState = starterState.updateIn(['options'], list => list.setSize(2));
        expect(things(starterState, action)).toEqualImmutable(outState);
    });

    it('should update the name of an item by index', () => {
        const action = {
            type: SET_THING_NAME,
            idx: 1,
            name: 'second thing'
        };
        const outState = starterState.updateIn(
            ['options'],
            list => list.setIn([1, 'name'], 'second thing')
        );
        expect(things(starterState, action)).toEqualImmutable(outState);
    });

    it('should add an item with id and name to the list', () => {
        const action = {
            type: ADD_THING,
            id: '5',
            name: 'new thing'
        };
        const outState = starterState.updateIn(
            ['options'],
            list => list.push(fromJS({ id: '5', name: 'new thing' }))
        );
        expect(things(starterState, action)).toEqualImmutable(outState);
    });
});
