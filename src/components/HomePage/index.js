import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions';

const HomePage = (props) => {

  const {
    onInputChange,
    onSearchButtonClick,
    inputToSearch } = props

    return (
      <section>
          <h1>Buscador de películas y series</h1>
          <article className="search-form-wrapper">
              <form className="search-form">
                  <input
                    className="input"
                    onChange={(e) => onInputChange(e.target.value)}
                    type="text"
                    placeholder="Ej: Star Wars"
                    value={inputToSearch}
                  />
                  <button 
                    onClick={(e) => onSearchButtonClick(e)}
                    type="submit" 
                    className="button is-info">
                      Buscar
                  </button>
              </form>        
          </article>
          
        </section>
      );
    
};

HomePage.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSearchButtonClick: PropTypes.func.isRequired,
}

// HomePage.defaultValue = {    
  
// }

const mapStateToProps = (state) => {

  const current = state.HomeReducer;

  return {
    inputToSearch: current.inputToSearch
  }
}

const mapDispatchToProps = dispatch => ({
  onInputChange: (value) => dispatch(actions.getInputToSearch(value)),
  onSearchButtonClick: (e) => dispatch(actions.searchHandler(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
