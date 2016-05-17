/* global describe, it */

import expect from 'expect';
import expectImmutable from 'expect-immutable';
import { List } from 'immutable';

expect.extend(expectImmutable);

const initialState = List();

import { thingReducer } from '../../src/reducers';

describe('thing app reducer', () => {
    it('should handle initial state', () => {
        expect(thingReducer(undefined, {})).toEqualImmutable(initialState);
    });
});
