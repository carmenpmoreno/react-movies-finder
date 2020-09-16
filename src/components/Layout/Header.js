import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-container">
            <nav className="header-nav-container">
                <Link className="header-nav-item" to={'/'}>
                    <i className="fas fa-film"></i> Movies Finder
                </Link>
                <Link className="header-nav-item" to={'/favorites'}>
                    <span><i className="fas fa-star"> Favoritos</i></span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;