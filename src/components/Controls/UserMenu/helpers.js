export const handleUserMenuButton = (userOptions, setUserUpdate, currentFavorites) => {

    if(userOptions.menuShow) {
        setUserUpdate({
            favorites: currentFavorites(),
            menuShow: false
        })
    } else {
        setUserUpdate({
            favorites: currentFavorites(),
            menuShow: true
        })
    }

}

export const handleUserMenuOutsideClose = (setUserUpdate) => {

    setUserUpdate({
            menuShow: false
        })
}