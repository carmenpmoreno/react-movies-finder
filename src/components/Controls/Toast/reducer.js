import { TOAST_ACTIONS } from './constants';

const INITIAL_STATE = {
    show: false,
    toastType: '',
    message: '',
    containerClass: '',
    buttonClass: '',
    headerClass: ''
}

export default (state =  INITIAL_STATE, action) => {    
    switch(action.type){
        case TOAST_ACTIONS.SHOW_TOAST:
            return {
                show: true,
                message: action.message,
                toastType: action.toastType,
                containerClass: action.containerClass,
                buttonClass: action.buttonClass,
                headerClass: action.headerClass
            }
        case TOAST_ACTIONS.HIDE_TOAST:
            return {
                show: false,
                message: '',
                toastType: '',
                containerClass: '',
                buttonClass: '',
                headerClass: ''
            }
        default:
            return state;
    }
}