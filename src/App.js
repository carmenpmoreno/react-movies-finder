import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/Layout/index';
import LoginPage from './components/LoginPage';
import './styles/moviesFinder.scss';

const App = (props) => {

  const { isLoadingUser } = props,
    userName = sessionStorage.getItem('userName');

  return !userName && isLoadingUser
    ? <LoginPage />
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