import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import HomeReducer from '../components/HomePage/reducer';
import LoginReducer from '../components/LoginPage/reducer';
import ToastReducer from '../components/Controls/Toast/reducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    HomeReducer,
    LoginReducer,
    ToastReducer
})