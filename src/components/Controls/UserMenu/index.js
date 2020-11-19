import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const UserMenu = ( {
    setUserUpdate, 
    currentUser, 
    currentFavorites,
    user,
    }) => {

    return (
        <div className="profile-menu-wrapper">
            <button
                className="profile-menu-button"
                onClick={() => {
                    user.menuShow 
                    ? setUserUpdate({
                        userName: currentUser,
                        favorites: currentFavorites(),
                        menuShow: false
                    })
                    : setUserUpdate({
                        userName: currentUser,
                        favorites: currentFavorites(),
                        menuShow: true
                    })
                }
                    
                }
                ><i className="fas fa-user-cog"></i>Menú usuario
            </button>
            {user.menuShow
                ? <div id="profile-menu">
                        <ul 
                            className="profile-menu-user-name-container"
                            >
                            <li><i className="fas fa-user-circle"></i></li>
                            <li>{user.userName}</li>
                        </ul>    
                        <ul>
                            <li>
                                {user.favorites.length > 0
                                ? <Link className="header-nav-item" to={'/favorites'}>
                                    <span><i className="fas fa-star"> Favoritos</i></span>
                                </Link>
                                : ''
                                }                    
                            </li>
                            <li>
                                <Link className="header-nav-item" to={'/'}>
                                    Movies Finder
                                </Link>
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