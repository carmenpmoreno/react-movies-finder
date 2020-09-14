import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions';

class LoginPage extends Component {

    componentDidMount() { 
        sessionStorage.setItem('userName', '')
    }

    render() {
        const { onUserNameChange, onUserLogin } = this.props

        return (
            <div className="container-fluid login-container">
                <div className="login-welcome-container-mobile">
                    <h2 className="login-welcome">Bienvenido</h2>
                </div>
                <div className="login-welcome-container-tablet">
                    <h2 className="login-welcome">Bienvenido</h2>
                </div>
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
                    <button
                        onClick={onUserLogin}
                        className="login-card-button btn"
                    >Entrar</button>
                </div>
            </div>
        );
    }

};

LoginPage.propTypes = {
    user: PropTypes.string.isRequired,
    onUserNameChange: PropTypes.func.isRequired,
}

LoginPage.defaultValue = {    
    user: '',
}

const mapStateToProps = (state) => {

    const current = state.LoginReducer;

    return {
        user: current.user,
    }
}

const mapDispatchToProps = dispatch => ({
    onUserNameChange: (value) => dispatch(actions.getUserName(value)),
    onUserLogin: () => dispatch(actions.setUserName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

// export default LoginPage;