export const setFavorite = ( movie ) => {

    let freshFavorites = [ movie ],
        oldFavorites = [],
        favoritesFromLS = [],
        favoriteMessage = document.querySelector('#favorite-message');

    favoritesFromLS = localStorage.getItem( 'favorites' );

    if( favoritesFromLS === null ) {
        localStorage.setItem( 'favorites', JSON.stringify(freshFavorites) )
    } else {
        oldFavorites = JSON.parse(favoritesFromLS);
        let oldFavoritesFiltered = oldFavorites.filter( oldFavorite => oldFavorite.imdbID !== movie.imdbID )
        oldFavoritesFiltered.push(movie);
        localStorage.setItem( 'favorites', JSON.stringify(oldFavoritesFiltered) );
    }

    favoriteMessage.classList.remove('favorite-message-hidden');
    favoriteMessage.classList.add('favorite-message-show');
}

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

export const closeFavoriteModal = () => {
    let favoriteMessage = document.querySelector('#favorite-message');

    favoriteMessage.classList.add('favorite-message-hidden');
    favoriteMessage.classList.remove('favorite-message-show');
}