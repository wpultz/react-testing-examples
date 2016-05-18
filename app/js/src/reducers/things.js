import { List, Map } from 'immutable';

import {
    SET_THING_NAME, ADD_THING, REMOVE_THING
} from '../constants';

export default function things(state = List(), action) {
    switch (action.type) {
    case SET_THING_NAME:
        return state.setIn([action.idx, 'name'], action.name);
    case ADD_THING:
        return state.push(Map({ id: action.id, name: action.name }));
    case REMOVE_THING:
        return state.filter(thing => String(thing.get('id')) !== String(action.id));
    default:
        return state;
    }
}
