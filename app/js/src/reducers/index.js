import { List } from 'immutable';
import { combineReducers } from 'redux';

function thingReducer(state = List(), action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
    case 'SET_THING_NAME':
        return state.setIn([action.idx, 'name'], action.name);
    case 'ADD_THING':
        return state.push(action.thing);
    case 'REMOVE_THING':
        return state.filter(thing => String(thing.get('id')) !== String(action.id));
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    things: thingReducer
});

export default rootReducer;
