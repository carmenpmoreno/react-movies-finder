export const handleUserMenuButton = (user, setUserUpdate, currentUser, currentFavorites) => {

    if(user.menuShow) {
        setUserUpdate({
            userName: currentUser,
            favorites: currentFavorites(),
            menuShow: false
        })
    } else {
        setUserUpdate({
            userName: currentUser,
            favorites: currentFavorites(),
            menuShow: true
        })
    }

}

export const handleUserLogoutButton = ( setUserUpdate, currentFavorites ) => {

    setUserUpdate({
        userName: '',
        favorites: currentFavorites(),
        menuShow: false
    })
    
}