import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/Layout/index';
import LoginPage from './components/LoginPage';
import { Switch, Route } from 'react-router';

import './styles/moviesFinder.scss';

const App = ({ isLoadingUser }) => {

  return isLoadingUser
    ? <>
    <Switch>
        <Route 
            exact path='/'
            component={LoginPage} 
        />
      </Switch>
    </>
    : <Layout/>

}

const mapStateToProps = (state) => {
  return {
    isLoadingUser: state.LoginReducer.isLoadingUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)