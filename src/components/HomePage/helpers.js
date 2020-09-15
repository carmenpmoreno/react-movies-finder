
export const getFavorite = ( movie ) => {

    let freshFavorites = [ movie ],
        oldFavorites = [],
        favoritesFromLS = [];

    favoritesFromLS = localStorage.getItem( 'favorites' );

    if( favoritesFromLS === null ) {
        localStorage.setItem( 'favorites', JSON.stringify(freshFavorites) )
    } else {
        oldFavorites = JSON.parse(favoritesFromLS)
        oldFavorites.push(movie)
        localStorage.setItem( 'favorites', JSON.stringify(oldFavorites) )
    }
}