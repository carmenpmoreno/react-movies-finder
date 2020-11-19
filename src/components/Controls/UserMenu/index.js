import React from 'react';
import { Link } from 'react-router-dom';

const UserMenu = ( {
    setUserUpdate, 
    currentUser, 
    currentFavorites,
    user
    }) => {

    return (
        <div>
            <button
                    className="profile-menu-button"
                    onClick={() => setUserUpdate({
                        userName: currentUser,
                        favorites: currentFavorites,
                    })}
                    ><i className="fas fa-user-cog"></i>Menú usuario
                </button>    
            <div 
                className="profile-menu-close">
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
                        <button
                            // onClick={onSignoutHandler}
                            className="logout-button"
                        ><i className="fa fa-sign-out-alt"></i> Salir
                        </button>
                    </li>
                </ul>
            </div>
        </div>        
    );
};

export default UserMenu;