import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {getFavorites} from '../helpers';
import UserMenu from '../Controls/UserMenu'

const Header = () => {
    const currentUser = sessionStorage.getItem('userName');
    const currentFavorites = getFavorites;

    const [ user, setUserUpdate ] = useState({
                                userName: currentUser,
                                favorites: currentFavorites(),
                                menuShow: false,
                            })

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        document.title = `${user.userName} Movies Finder profile`;
        
        return function cleanUp() {
            document.title = 'Movies Finder';
        }
    });


    return (
        <header className="header-container">
            <nav className="header-nav-container">
                <Link className="header-nav-item" to={'/'}>
                    <i className="fas fa-film"></i> Movies Finder
                </Link>
                <UserMenu 
                    setUserUpdate={setUserUpdate}
                    currentUser={currentUser}
                    currentFavorites={currentFavorites}
                    user={user}
                />
            </nav>
        </header>
    );
};

export default Header;