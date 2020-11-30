import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Toast from '../Controls/Toast';

import { getFavorites } from '../transversal';

const Layout = () => {
    const currentFavorites = getFavorites,
    [ userOptions, setUserUpdate ] = useState({
                                    favorites: currentFavorites(),
                                    menuShow: false,
                                });
    return (
        <>
            <Toast />
            <Header 
                setUserUpdate={setUserUpdate}
                currentFavorites={currentFavorites}
                userOptions={userOptions}
            />
            <Main
                setUserUpdate={setUserUpdate}
            />
            <Footer />
        </>
    );
};

export default Layout;