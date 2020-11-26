import { getFavorites } from '../transversal';

export const storeFavorite = ( value, movie ) => {

    const favoritesFromLs = getFavorites()
        let freshFavorites = [],
          favoriteMovieIndex = '';

    movie = {
        ...movie,
        opinion: value,
    }
    favoriteMovieIndex = favoritesFromLs.findIndex( favorite => favorite.imdbID === movie.imdbID )
    favoritesFromLs[favoriteMovieIndex] = movie
    freshFavorites = favoritesFromLs
    
    localStorage.setItem( 'favorites', JSON.stringify(freshFavorites) )

}