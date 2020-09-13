import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../store/store';

import HomePage from '../HomePage'
import DetailPage from '../DetailPage'


const Main = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route 
                    exact path='/'
                    component={HomePage} 
                />
                <Route 
                    exact path='/detail'
                    component={DetailPage} 
                />
            </Switch>
        </ConnectedRouter >
    );
};

export default Main;