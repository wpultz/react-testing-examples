import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import things from './things';

const rootReducer = combineReducers({
    form,
    things
});

export default rootReducer;
