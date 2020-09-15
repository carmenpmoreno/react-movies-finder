import { HOME_ACTIONS } from './constants'

const INITIAL_STATE = { 
    inputToSearch: '',
    isLoading: false,
    movies: [],
}

export default (state =  INITIAL_STATE, action) => {
    switch(action.type){

        case HOME_ACTIONS.GET_INPUT_TO_SEARCH:
            return {
                ...state,
                inputToSearch: action.inputToSearch                
            }

        case HOME_ACTIONS.SEARCH_START:
            return {
                ...state,
                isLoadingInput: action.isLoadingInput,
            }

        case HOME_ACTIONS.SEARCH_SUCESS:
            return {
                ...state,
                isLoading: action.isLoading,
                movies: action.movies
            }

        default:
            return state
    }
}