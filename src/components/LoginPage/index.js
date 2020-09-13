import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions';



const LoginPage = (props) => {

    const { onUserNameChange, onUserLogin } = props

    return (
        <div>
            <div>
                <label>
                    Nombre usuario
                </label>
                <input
                    className=""
                    type="text"
                    autoComplete="off"
                    maxLength="100"
                    placeholder="Ej: Movie friki user" 
                    onChange={(e) => onUserNameChange(e.target.value)}
                ></input>
                <button
                    onClick={onUserLogin}
                >Entrar</button>
            </div>
        </div>
    );
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