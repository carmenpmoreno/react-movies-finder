import React from 'react';
import Layout from './components/Layout/index';
import LoginPage from './components/LoginPage';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { LOGIN_ACTIONS } from './components/LoginPage/constants';
import './styles/moviesFinder.scss';

const App = () => {

    const dispatch = useDispatch(),
      isLoadingUser = useSelector(state => state.LoginReducer.isLoadingUser),
      pathLocationName = useSelector(state => state.router.location.pathname),
      userNameStored = sessionStorage.getItem('userName'),
      checkUserLoaded = userNameStored !== null && userNameStored.length > 0 ? true : false;

    if ( isLoadingUser === true && checkUserLoaded === false ) {
        return <LoginPage/>
    }
    
    if ( isLoadingUser === false ) {
      return <Layout />
    }

    if ( isLoadingUser === true && checkUserLoaded === true ) {
        //to refresh page and store when loaded user refresh webApp
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
        
        return <Layout />
    }

}

export default App