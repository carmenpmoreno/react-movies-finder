import { HOME_ACTIONS } from './constants'

const INITIAL_STATE = { 
    inputToSearch: ''
}

export default (state =  INITIAL_STATE, action) => {
    switch(action.type){

        case HOME_ACTIONS.GET_USER_NAME:
            return {
                ...state,
                inputToSearch: action.inputToSearch                
            }

        case HOME_ACTIONS.SET_USER_NAME:
            return {
                ...state,
            }

        default:
            return state
    }
}