import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import './index.css'

const Toast = (props) => {

  const {
    show,    
    containerClass,
    buttonClass,
    headerClass,
    message,
    onClickHandler
  } = props;

  const tag = 
    <div className={containerClass}>
      <div className="toast-button-container">
        <button 
          onClick={onClickHandler} 
          className={buttonClass}>
            x
        </button>
      </div>
      <h4 className={headerClass}>
          {message}
      </h4>      
    </div>

  return show ? tag : '';
}

const mapStateToProps = (state) => {

    const current = state.ToastReducer;

    return {
      show: current.show,
      message: current.message,
      containerClass: current.containerClass,
      buttonClass: current.buttonClass,
      headerClass: current.headerClass,
    }
}

const mapDispatchToProps = dispatch =>{  
  return {
    onClickHandler: () => dispatch(actions.getHideToast())
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Toast)