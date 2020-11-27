import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleUserMenuButton } from './helpers';
import { userLogout } from '../../LoginPage/actions';

const UserMenu = ( {
    setUserUpdate, 
    currentFavorites,
    userOptions,
    userName,
    onUserLogout
    }) => {

    return (
        <div className="user-menu-wrapper"
        >
            <button
                className="user-menu-button"
                onClick={() => handleUserMenuButton(userOptions, setUserUpdate, currentFavorites)}
                ><i className="fas fa-user-cog"></i>Menú usuario
            </button>
            {userOptions.menuShow
                ? <div 
                    id="user-menu"
                    // onMouseLeave={() => handleUserMenuButton(userOptions, setUserUpdate, currentFavorites)}
                    >
                        <ul 
                            className="user-menu-user-name-container"
                            >
                            <li><i className="fas fa-user-circle"></i></li>
                            <li>{userName}</li>
                        </ul>    
                        <ul>
                            {userOptions.favorites.length > 0
                            ? <>
                                <li 
                                    onClick={() => handleUserMenuButton(userOptions, setUserUpdate, currentFavorites)}
                                    >
                                    <Link className="header-nav-item" to={'/favorites'}>
                                    <span><i className="fas fa-star"> Favoritos</i></span>
                                    </Link>
                                </li>
                                <li
                                    onClick={() => handleUserMenuButton(userOptions, setUserUpdate, currentFavorites)}
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