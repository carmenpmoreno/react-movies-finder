
export const getFavorites = () => {

    let favoritesFromLS = [],
        favoritesToPicture = [];

    favoritesFromLS = localStorage.getItem( 'favorites' );

    if( favoritesFromLS === null ) {
        return favoritesToPicture
    } else {
        let favorites = JSON.parse(favoritesFromLS)
        return favorites
    }

}