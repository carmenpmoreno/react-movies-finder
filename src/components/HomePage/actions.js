import { HOME_ACTIONS, API_KEY } from './constants'

export const getInputToSearch = (inputValue) => ({
    type: HOME_ACTIONS.GET_INPUT_TO_SEARCH,
    inputToSearch: inputValue,
})

export const searchHandler = (e) => {

    e.preventDefault();

    return (dispatch, getState) => {      
        
        const state = getState().HomeReducer,
        inputToSearch = state.inputToSearch;

            if(inputToSearch.length > 3) {

                dispatch({
                    type: HOME_ACTIONS.SEARCH_START,
                    isLoading: true,
                })

                fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputToSearch}`)
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);
                        data.Response === "True"
                        ? dispatch({
                            type: HOME_ACTIONS.SEARCH_SUCESS,
                            isLoading: false,
                            movies: data
                        })
                        : dispatch({
                            type: HOME_ACTIONS.SEARCH_FAILED,
                            isLoading: false,
                            error: true,
                            errorMessage: data.Error
                        })
                    })
                    .catch((error) => {
                        // TODO: manejar error 500
                        console.log(error)
                        dispatch({
                            type: HOME_ACTIONS.SEARCH_FAILED,
                            isLoading: false,
                            remoteError: true,
                        })
                    });

            }
        
    }
}