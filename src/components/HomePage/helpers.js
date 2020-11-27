
export const addFavoriteKey = ( onlymovies ) => {

    const favoritesFromLS = JSON.parse( localStorage.getItem( 'favorites' ) );
    console.log(favoritesFromLS)
    let favoriteMovie = {},
        onlymoviesPlusFavoritesKey = {};

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