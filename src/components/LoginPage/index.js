import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions';

const LoginPage = ({ onUserNameChange, onUserLogin, userUnauthorized }) => {

    return (
        <div className="container-fluid login-container">
            <div className="login-app-title-container"> 
                <i className="fas fa-film"></i>
                <h1 className="login-app-title">Movies finder</h1>
            </div>
            <div>
                <h2 className="login-welcome">Bienvenido</h2>
                <div className="login-card">
                    <label className="login-card-label">
                        Nombre usuario
                    </label>
                    <input
                        className="login-card-input"                    
                        type="text"
                        autoComplete="off"
                        maxLength="100"
                        placeholder="Ej: Movie friki" 
                        onChange={(e) => onUserNameChange(e.target.value)}
                    ></input>
                    {userUnauthorized === true 
                    ? <p>usuario no autorizado</p>
                    :''
                    }
                    {}
                    <button
                        onClick={onUserLogin}
                        className="login-card-button btn"
                    >Entrar</button>
                </div>
            </div>
            
        </div>
    );

};

LoginPage.propTypes = {
    user: PropTypes.string.isRequired,
    onUserNameChange: PropTypes.func.isRequired,
    onUserLogin: PropTypes.func.isRequired,
}

LoginPage.defaultValue = {    
    user: '',
}

const mapStateToProps = (state) => {

    const current = state.LoginReducer;

    return {
        user: current.user,
        userUnauthorized: current.userUnauthorized
    }
}

const mapDispatchToProps = dispatch => ({
    onUserNameChange: (value) => dispatch(actions.getUserName(value)),
    onUserLogin: () => dispatch(actions.setUserName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);