import {
    SET_THING_NAME, ADD_THING, REMOVE_THING
} from '../constants';

export const addThing = (id, name) => ({
    type: ADD_THING,
    id,
    name
});


export const removeThing = id => ({
    type: REMOVE_THING,
    id
});

export const setThingName = (id, name) => ({
    type: SET_THING_NAME,
    id,
    name
});
