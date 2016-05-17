/* global describe, it */

import expect from 'expect';

import * as actions from '../../src/actions';

describe('main app actions', () => {
    it('should create ADD_THING action with and id and name', () => {
        expect(actions.addThing('abc', '123')).toEqual({
            type: 'ADD_THING',
            id: 'abc',
            name: '123'
        });
    });

    it('should create a REMOVE_THING action with action list index', () => {
        expect(actions.removeThing(3)).toEqual({
            type: 'REMOVE_THING',
            id: 3
        });
    });
});
