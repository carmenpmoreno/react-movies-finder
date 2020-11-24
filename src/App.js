import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/Layout/index';
import LoginPage from './components/LoginPage';
import { push } from 'connected-react-router';

import { useDispatch } from 'react-redux'
import { LOGIN_ACTIONS } from './components/LoginPage/constants';


import './styles/moviesFinder.scss';

const App = ({ isLoadingUser }) => {

  const dispatch = useDispatch();
  const userNameStored = sessionStorage.getItem('userName')
  const checkUserLoaded = () => {

    if (userNameStored !== null && userNameStored.length > 0 ) {
      return true
    } else {
      return false
    }
  }

  if ( checkUserLoaded() === false ) {
    return <LoginPage/>
  }

  if( checkUserLoaded() === true ) {

    dispatch(push('/home'))
    dispatch({
      type: LOGIN_ACTIONS.GET_USER_NAME,
      user: userNameStored,
    })  
    dispatch({
      type: LOGIN_ACTIONS.SET_USER_NAME_SUCESS,
      isLoadingUser: false,
    })            

    return <Layout/>

  }

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