import {
    SET_THING_NAME, ADD_THING, REMOVE_THING, THING_SIGN_UP, THING_SIGN_UP_RESET
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

export const thingSignup = () => ({
    type: THING_SIGN_UP
});

export const thingSignupReset = () => ({
    type: THING_SIGN_UP_RESET
});
