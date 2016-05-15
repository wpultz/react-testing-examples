import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { things } from './data';

import reducer from './reducers';
import Things from './containers/Things';

const store = createStore(reducer, things);

render(
    <Provider store={store}>
        <Things />
    </Provider>,
    document.getElementById('app-container')
);
