import { List, Map } from 'immutable';

import {
    SET_THING_NAME, ADD_THING, REMOVE_THING, THING_SIGN_UP, THING_SIGN_UP_RESET
} from '../constants';

const initialState = Map({
    options: List(),
    signedUp: false
});

export default function things(state = initialState, action) {
    switch (action.type) {
    case SET_THING_NAME:
        return state.setIn(['options', action.idx, 'name'], action.name);
    case ADD_THING:
        return state.updateIn(
            ['options'],
            list => list.push(Map({ id: action.id, name: action.name }))
        );
    case REMOVE_THING:
        return state.updateIn(
            ['options'],
            list => list.filter(thing => String(thing.get('id')) !== String(action.id))
        );
    case THING_SIGN_UP:
        return state.set('signedUp', true);
    case THING_SIGN_UP_RESET:
        return state.set('signedUp', false);
    default:
        return state;
    }
}
