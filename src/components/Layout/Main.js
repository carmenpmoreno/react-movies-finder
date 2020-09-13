import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from '../HomePage'
import DetailPage from '../DetailPage'
import FavoritesPage from '../FavoritesPage'

const Main = () => {
    return (
        <Switch>
            <Route 
                exact path='/'
                component={HomePage} 
            />
            <Route 
                exact path='/detail'
                component={DetailPage} 
            />
            <Route 
                exact path='/favorites'
                component={FavoritesPage} 
            />
        </Switch>
    );
};

export default Main;