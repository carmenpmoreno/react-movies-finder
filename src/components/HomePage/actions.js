import { HOME_ACTIONS, API_KEY } from './constants';
import { TOAST_ACTIONS } from '../Controls/Toast/constants';

import { addFavoriteKey, storeFavorite } from './helpers';

export const getInputToSearch = (inputValue) => ({
    type: HOME_ACTIONS.GET_INPUT_TO_SEARCH,
    inputToSearch: inputValue,
})

export const searchHandler = (e) => {

    e.preventDefault();

    return (dispatch, getState) => {      
        
        const state = getState().HomeReducer,
            inputToSearch = state.inputToSearch;

        let moviesResultsPlusFavoritesKey = {},
            onlymoviesPlusFavoritesKey = [];

            if(inputToSearch.length > 3) {

                dispatch({
                    type: HOME_ACTIONS.SEARCH_START,
                    isLoading: true,
                })

                fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputToSearch}`)
                    .then(resp => resp.json())
                    .then(data => {

                        if(data.Response === "True") {
                            moviesResultsPlusFavoritesKey = data;
                            onlymoviesPlusFavoritesKey = addFavoriteKey(moviesResultsPlusFavoritesKey.Search);
                            moviesResultsPlusFavoritesKey.Search = onlymoviesPlusFavoritesKey;

                            dispatch({
                                type: HOME_ACTIONS.SEARCH_SUCESS,
                                isLoading: false,
                                movies: moviesResultsPlusFavoritesKey
                            })
                            sessionStorage.setItem('movies', JSON.stringify(onlymoviesPlusFavoritesKey))
                        } else {
                            dispatch({
                                type: HOME_ACTIONS.SEARCH_FAILED,
                                isLoading: false,
                                error: true,
                                errorMessage: data.Error
                            })
                        }

                    })
                    .catch((error) => {
                        dispatch({
                            type: HOME_ACTIONS.SEARCH_FAILED,
                            isLoading: false,
                            remoteError: true,
                        })
                    });

            }
        
    }
}

export const getFavoriteMovie = ( movie ) => ({
    type: HOME_ACTIONS.ADD_TO_FAVORITES_LIST,
    movie: movie,
})


export const filterSearchedMovies = ( movie, setNewFavorite ) => {
    
    return ( dispatch, getState) => {

        storeFavorite( movie )

        const state = getState().HomeReducer,
            currentMovies = state.movies.Search;
        let filteredMovies = currentMovies,
            filteredOnlyMovies = addFavoriteKey(currentMovies);
        
        filteredMovies.Search = filteredOnlyMovies

        dispatch({
            type: TOAST_ACTIONS.HIDE_TOAST
        })

        dispatch({    
            type: HOME_ACTIONS.FILTER_SEARCHED_MOVIES,
            filteredMovies: filteredMovies,
        })

        setNewFavorite(true)

    }
    
}