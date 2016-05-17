import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { things } from './data';

import reducer from './reducers';
import Things from './containers/Things';
import Signup from './containers/Signup';

const store = createStore(reducer, things);

render(
    <Provider store={store}>
        <div>
            <div>
                <h1>Yay THINGS!</h1>
                <Things />
            </div>
            <div>
                <h1>Sign up to learn more about THINGS!</h1>
                <Signup />
            </div>
        </div>
    </Provider>,
    document.getElementById('app-container')
);
