import React, { useState } from 'react';
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