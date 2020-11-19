import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import {handleUserMenuButton} from './helpers';

const UserMenu = ( {
    setUserUpdate, 
    currentUser, 
    currentFavorites,
    user,
    }) => {

    return (
        <div className="user-menu-wrapper"
        >
            <button
                className="user-menu-button"
                onClick={() => handleUserMenuButton(user, setUserUpdate, currentUser, currentFavorites)}
                ><i className="fas fa-user-cog"></i>Menú usuario
            </button>
            {user.menuShow
                ? <div 
                    id="user-menu"
                    onMouseLeave={() => handleUserMenuButton(user, setUserUpdate, currentUser, currentFavorites)}
                    >
                        <ul 
                            className="user-menu-user-name-container"
                            >
                            <li><i className="fas fa-user-circle"></i></li>
                            <li>{user.userName}</li>
                        </ul>    
                        <ul>
                            <li>
                                {user.favorites.length > 0
                                ? <>
                                    <li 
                                        onClick={() => handleUserMenuButton(user, setUserUpdate, currentUser, currentFavorites)}
                                        >
                                        <Link className="header-nav-item" to={'/favorites'}>
                                        <span><i className="fas fa-star"> Favoritos</i></span>
                                        </Link>
                                    </li>
                                    <li
                                        onClick={() => handleUserMenuButton(user, setUserUpdate, currentUser, currentFavorites)}
                                        >
                                        <Link className="header-nav-item" to={'/'}>
                                            Movies Finder
                                        </Link>
                                    </li>
                                </>
                                : ''
                                }                    
                            </li>
                            <li>
                                <button
                                    // onClick={onSignoutHandler}
                                    className="logout-button"
                                ><i className="fa fa-sign-out-alt"></i> Salir
                                </button>
                            </li>
                        </ul>
                    </div>  
                : ''
            }
        </div>
    );
};

export default UserMenu;