
export const addFavoriteKey = ( onlymovies ) => {

    const favoritesFromLS = JSON.parse( localStorage.getItem( 'favorites' ) );
    let favoriteMovie = {},
        onlymoviesPlusFavoritesKey = {};

    if(favoritesFromLS === null || favoritesFromLS === undefined) {

        onlymoviesPlusFavoritesKey = onlymovies.map( movie => {
                movie = {
                    ...movie,
                    favorite: false
                }
                return movie
        });
        return onlymoviesPlusFavoritesKey

    } else {
        onlymoviesPlusFavoritesKey = onlymovies.map( movie => {
            favoriteMovie = favoritesFromLS.find(favorite => favorite.imdbID === movie.imdbID )
            if(favoriteMovie !== undefined) {
                movie = {
                    ...movie,
                    favorite: true
                }
                return movie
            } else {
                movie = {
                    ...movie,
                    favorite: false
                }
                return movie
            }
        });
        return onlymoviesPlusFavoritesKey
    
    }
    
}

export const storeFavorite = ( movie ) => {
    let freshFavorites = [ movie ],
        oldFavorites = [],
        favoritesFromLS = [];    
    
    favoritesFromLS = localStorage.getItem( 'favorites' );

    if( favoritesFromLS === null ) {
        console.log(freshFavorites)
        localStorage.setItem( 'favorites', JSON.stringify(freshFavorites) )
    } else {
        oldFavorites = JSON.parse(favoritesFromLS);
        let oldFavoritesFiltered = oldFavorites.filter( oldFavorite => oldFavorite.imdbID !== movie.imdbID )
        oldFavoritesFiltered.push(movie);
        localStorage.setItem( 'favorites', JSON.stringify(oldFavoritesFiltered) );
    }
}