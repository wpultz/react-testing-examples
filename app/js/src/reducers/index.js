import { Map, List } from 'immutable';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
    SET_THING_NAME, ADD_THING, REMOVE_THING
} from '../constants';

export function thingReducer(state = List(), action) {
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

const rootReducer = combineReducers({
    form: formReducer,
    things: thingReducer
});

export default rootReducer;
