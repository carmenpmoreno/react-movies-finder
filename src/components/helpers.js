
export const setFavorite = ( movie ) => {

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

export const getFavorites = () => {

    let favoritesFromLS = [],
        favoritesToPicture = [];

    favoritesFromLS = localStorage.getItem( 'favorites' );

    if( favoritesFromLS === null ) {
        let favoritesToPicture = []
        return favoritesToPicture
    } else {
        let favorites = JSON.parse(favoritesFromLS)
        return favorites
    }

}