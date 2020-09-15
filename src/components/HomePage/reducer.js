import { HOME_ACTIONS } from './constants'

const INITIAL_STATE = { 
    inputToSearch: '',
    isLoading: false,
    movies: [],
    error: false,
    errorMessage: '',
    remoteError: false,
}

export default (state =  INITIAL_STATE, action) => {
    switch(action.type){

        case HOME_ACTIONS.GET_INPUT_TO_SEARCH:
            return {
                inputToSearch: action.inputToSearch,
                isLoading: false,
                movies: [],
                error: false,
                errorMessage: '',
                remoteError: false,
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
        case HOME_ACTIONS.SEARCH_FAILED:
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error,
                errorMessage: action.errorMessage
            }
        case HOME_ACTIONS.SEARCH_REMOTE_FAILED:
            return {
                ...state,
                isLoading: action.isLoading,
                remoteError: action.error,
            }

        default:
            return state
    }
}