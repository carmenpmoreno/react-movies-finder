import { TOAST_ACTIONS, TOAST_TYPES } from './constants';

export const getShowToast = (toastType, message) => {

    let styles = getClassName(toastType);

    return {
        type: TOAST_ACTIONS.SHOW_TOAST,
        toastType: toastType,
        message: message,
        containerClass: styles.containerClass,
        buttonClass: styles.buttonClass,
        headerClass: styles.headerClass
    }
}

export const getHideToast = () => {
    return {
        type: TOAST_ACTIONS.HIDE_TOAST
    }
}

const getClassName  = (toastType) => {
    
    let className = {
        containerClass: '',
        buttonClass: '',
        headerClass: ''
    };

    switch(toastType){
        
        case TOAST_TYPES.ERROR:
            className = {
                containerClass: 'toast-container danger btn-danger',
                buttonClass: 'delete-toast-button',
                headerClass: 'delete-toast-p'
            }
            break;

        case TOAST_TYPES.SUCCESS:
            className = {
                containerClass: 'toast-container success btn-success',
                buttonClass: 'success-toast-button',
                headerClass: 'success-toast-p'
            }
            break;

        case TOAST_TYPES.WARNING:
            className = {
                containerClass: 'toast-container warning btn-warning',
                buttonClass: 'warning-toast-button',
                headerClass: 'warning-toast-p'
            }
            break;

        case TOAST_TYPES.INFO:
            className = {
                containerClass: 'toast-container info btn-info',
                buttonClass: 'info-toast-button',
                headerClass: 'info-toast-p'
            }
            break;
        
        default:
            break;
    }

    return className;
}