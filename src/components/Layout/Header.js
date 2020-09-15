import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-container">
            <nav className="header-nav-container">
                <Link className="header-nav-item" to={'/'}>
                    <i className="fas fa-film"></i>
                </Link>
                <Link className="header-nav-item" to={'/favorites'}>
                    <span>Favoritos</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;