import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import PollContainer from '../containers/PollContainer';
import selector from '../reducers';

const store = createStore(selector,
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

ReactDOM.render(<PollContainer store={store} />,
    document.getElementById('app'));