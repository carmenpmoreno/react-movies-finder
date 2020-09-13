import { LOGIN_ACTIONS } from './constants'

const INITIAL_STATE = { 
    user: '',
    isLoadingUser: true
}

export default (state =  INITIAL_STATE, action) => {
    switch(action.type){

        case LOGIN_ACTIONS.GET_USER_NAME:
            return {
                ...state,
                user: action.user                
            }

        case LOGIN_ACTIONS.SET_USER_NAME:
            return {
                ...state,
                isLoadingUser: action.isLoadingUser,
            }

        default:
            return state
    }
}