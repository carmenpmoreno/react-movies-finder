//import { HOME_ACTIONS } from './constants'

const INITIAL_STATE = { }

export default (state =  INITIAL_STATE, action) => {
    switch(action.type){

        // case HOME_ACTIONS.SET_LOADING:
        // case HOME_ACTIONS.SET_LOADED:
        //     return {
        //         ...state,
        //         isLoading: action.isLoading                
        //     }

        default:
            return state
    }
}