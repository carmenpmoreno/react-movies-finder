import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getFavorites} from '../transversal';
import UserMenu from '../Controls/UserMenu'

const Header = () => {
    const currentFavorites = getFavorites,
        [ userOptions, setUserUpdate ] = useState({
                                        favorites: currentFavorites(),
                                        menuShow: false,
                                    }),
        userName = useSelector(state => state.LoginReducer.user);

    return (
        <header className="header-container">
            <nav className="header-nav-container">
                <Link className="header-nav-item" to={'/home'}>
                    <i className="fas fa-film"></i> Movies Finder
                </Link>
                <UserMenu 
                    setUserUpdate={setUserUpdate}
                    currentFavorites={currentFavorites}
                    userOptions={userOptions}
                    userName={userName}
                />
            </nav>
        </header>
    );
};

export default Header;