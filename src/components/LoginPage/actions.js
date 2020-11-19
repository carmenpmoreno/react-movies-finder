import { LOGIN_ACTIONS } from './constants'

export const getUserName = (userName) => ({
    type: LOGIN_ACTIONS.GET_USER_NAME,
    user: userName,
})

export const setUserName = () => {

    return (dispatch, getState) => {      
        
        const state = getState().LoginReducer,
            userName = state.user;
            // mock login
            fetch('./data/users.json')
            .then( response => response.json() )
            .then( users => {
                const userNameAuthorized =  users.find( user => user.name === userName ) 

                if (userNameAuthorized !== undefined ) {
                    sessionStorage.setItem('userName', userName)
                    dispatch({
                        type: LOGIN_ACTIONS.SET_USER_NAME,
                        isLoadingUser: false,
                        })
                } else {
                    dispatch({
                        type: LOGIN_ACTIONS.SET_USER_NAME_ERROR,
                        userUnauthorized: true,
                        })
                }

            } )

           
        
    }
}