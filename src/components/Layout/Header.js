import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <p>Header</p>
            <Link to={'/favorites'}>
                <span>Favoritos</span>
            </Link>
        </div>
    );
};

export default Header;