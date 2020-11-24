import React from 'react';
import Layout from './components/Layout/index';
import LoginPage from './components/LoginPage';

import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux'
import { LOGIN_ACTIONS } from './components/LoginPage/constants';


import './styles/moviesFinder.scss';

const App = () => {

    const dispatch = useDispatch(),
      pathLocationName = useSelector(state => state.router.location.pathname),
      userNameStored = sessionStorage.getItem('userName');

    const checkUserLoaded = userNameStored !== null && userNameStored.length > 0 ? true : false

    if ( checkUserLoaded === false ) {

        return <LoginPage/>

    } else {

        if( pathLocationName === '/') {
          dispatch(push('/home'))
        } else {
          dispatch(push(pathLocationName))
        }

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

export default App