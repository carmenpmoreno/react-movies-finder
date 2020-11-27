import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Toast from '../Controls/Toast';

const Layout = () => {
    return (
        <>
            <Toast />
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default Layout;