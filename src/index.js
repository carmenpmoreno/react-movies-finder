import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store'
import App from './App';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/store';

const store = configureStore();

ReactDOM.render(       
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter >
    </Provider>
    , document.getElementById('root')
);