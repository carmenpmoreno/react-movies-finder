import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk';

import reducers from '../setup/reducers';


export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    reducers(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware
      )
    )
  );


  return store
}