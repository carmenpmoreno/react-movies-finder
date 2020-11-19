import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {getFavorites} from '../helpers';
import UserMenu from '../Controls/UserMenu'

const Header = () => {
    const currentUser = sessionStorage.getItem('userName');
    const currentFavorites = getFavorites();

    const [ user, setUserUpdate ] = useState({
                                userName: currentUser,
                                favorites: currentFavorites,
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
                {/* <button
                    className="header-nav-item"
                    onClick={() => setUserUpdate({
                        userName: currentUser,
                        favorites: currentFavorites,
                    })}
                    >{user.userName}
                </button>
                {user.favorites.length > 0
                    ? <Link className="header-nav-item" to={'/favorites'}>
                        <span><i className="fas fa-star"> Favoritos</i></span>
                    </Link>
                    : ''
                } */}
            </nav>
        </header>
    );
};

export default Header;