import React from 'react';
import Layout from './components/Layout/index';
import LoginPage from './components/LoginPage';
import './styles/moviesFinder.scss';

const App = () => {

  const userName = sessionStorage.getItem('userName');

  return !userName
    ? <LoginPage />
    : <Layout/>

}

export default App
