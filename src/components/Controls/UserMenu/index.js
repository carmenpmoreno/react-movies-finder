import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleUserMenuButton, handleUserLogoutButton } from './helpers';
import { userLogout } from '../../LoginPage/actions';

const UserMenu = ( {
    setUserUpdate, 
    currentUser, 
    currentFavorites,
    user,
    onUserLogout
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
                                    <Link className="header-nav-item" to={'/home'}>
                                        Movies Finder
                                    </Link>
                                </li>
                                </>
                                : ''
                            }                    
                            <li>
                                <button
                                    onClick={() => {
                                        onUserLogout()
                                        handleUserLogoutButton(setUserUpdate, currentFavorites)
                                    }}
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

const mapStateToProps = (state) => {

    return state
}

const mapDispatchToProps = dispatch => ({
    onUserLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);