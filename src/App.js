import React from 'react';
import { connect } from 'react-redux'

import Layout from './components/Layout/index'
import LoginPage from './components/LoginPage'

const App = (props) => {

  const { isLoadingUser } = props

  if(isLoadingUser === true) {
    return <LoginPage />
  } else {
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