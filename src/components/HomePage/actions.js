import { HOME_ACTIONS } from './constants'

export const getUserName = (userName) => ({
    type: HOME_ACTIONS.GET_USER_NAME,
    user: userName,
})

export const setUserName = () => {

    return (dispatch, getState) => {      
        
        const state = getState().LoginReducer,
            userName = state.user;

            if(userName !== '') {
                sessionStorage.setItem('userName', userName)
                dispatch({
                    type: HOME_ACTIONS.SET_USER_NAME,
                    isLoadingUser: false,
                    })
            }
        
    }
}