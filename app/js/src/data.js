import { fromJS } from 'immutable';

export const things = {
    things: fromJS({
        signedUp: false,
        options: [{
            id: 1,
            name: 'thing1'
        }, {
            id: 2,
            name: 'thing2'
        }, {
            id: 3,
            name: 'thing3'
        }, {
            id: 4,
            name: 'thing4'
        }, {
            id: 5,
            name: 'thing5'
        }]
    })
};
