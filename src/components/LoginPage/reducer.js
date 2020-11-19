import { LOGIN_ACTIONS } from './constants'

const INITIAL_STATE = { 
    user: '',
    isLoadingUser: true,
    userUnauthorized: false
}

export default (state =  INITIAL_STATE, action) => {
    switch(action.type){

        case LOGIN_ACTIONS.GET_USER_NAME:
            return {
                ...state,
                user: action.user,
                userUnauthorized: false                
            }

        case LOGIN_ACTIONS.SET_USER_NAME:
            return {
                ...state,
                isLoadingUser: action.isLoadingUser,
            }
        case LOGIN_ACTIONS.SET_USER_NAME_ERROR:
            return {
                ...state,
                userUnauthorized: action.userUnauthorized,
            }

        default:
            return state
    }
}