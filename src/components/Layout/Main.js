import React from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from '../HomePage'
import DetailPage from '../DetailPage'
import FavoritesPage from '../FavoritesPage'
import LogoutPage from '../LogoutPage';

import { handleUserMenuOutsideClose } from '../Controls/UserMenu/helpers';

const Main = ({setUserUpdate}) => {

    return (
        <main
            onClick={() => handleUserMenuOutsideClose(setUserUpdate)}
        >
            <Switch>
                <Route 
                    exact path='/logout'
                    component={LogoutPage} 
                />
                <Route 
                    path='/home'
                    component={HomePage}
                    setUserUpdate={setUserUpdate}
                />
                <Route
                    path='/detail/:detailId'
                    render={routerProps =>
                        <DetailPage
                        params={routerProps.match.params}
                        />
                    }
                />
                <Route 
                    exact path='/favorites'
                    component={FavoritesPage} 
                />
            </Switch>
        </main>
    );
};

Main.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
}


const mapStateToProps = (state) => {

    const current = state.HomeReducer;

    return {
        movies: current.movies.Search,
    }
}
  
  const mapDispatchToProps = dispatch => ({
    dispatch
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);