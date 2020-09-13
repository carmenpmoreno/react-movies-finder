import { LOGIN_ACTIONS } from './constants'

export const getUserName = (userName) => ({
    type: LOGIN_ACTIONS.GET_USER_NAME,
    user: userName,
})

export const setUserName = () => {

    return (dispatch, getState) => {      
        
        const state = getState().LoginReducer,
            userName = state.user;

        sessionStorage.setItem('userName', userName)
        
        dispatch({
        type: LOGIN_ACTIONS.SET_USER_NAME,
        isLoadingUser: false,
        })
    }
}