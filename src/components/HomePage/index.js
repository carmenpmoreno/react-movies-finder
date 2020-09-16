import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions';

import MoviesList from '../Controls/MoviesList';

export  const detectSafariBrowser = () => {
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari']);
  return isSafari
}

const HomePage = (props) => {

  const {
    onInputChange,
    onSearchButtonClick,
    inputToSearch,
    movies,
    error,
    errorMessage,
    remoteError,
   } = props

    return (
      <section className="page-container">
        <div className="home-hero-container">
          {detectSafariBrowser
              ? <video playsInline autoPlay loop muted className="home-hero-video">
                  <source src="./assets/videos/Film Strip - 5129.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
              </video>
              : <video autoPlay loop muted className="home-hero-video" >
                  <source src="./assets/videos/Film Strip - 5129.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
              </video>
              }
          <div className="home-app-title-container"> 
                <i className="fas fa-film"></i>
                <h1 className="login-app-title">Movies finder</h1>
          </div>
        </div>

        <article className="home-finder-container">
          <form>
              <label className="home-finder-label">
                  Buscar por título
              </label>
              <input
                className="login-card-input"
                onChange={(e) => onInputChange(e.target.value)}
                type="text"
                placeholder="Ej: Star Wars"
                value={inputToSearch}
              />
              <button 
                onClick={(e) => onSearchButtonClick(e)}
                type="submit" 
                className="btn btn-search">
                  <i className="fas fa-search"></i>
              </button>
          </form>        
        </article>

        <article>
          <ul className="page-movies-list-container container-fluid">
            {movies && error === false && remoteError === false
            ? <MoviesList
                movies={movies}
                favoriteInfo={true}  
              />
            : '' }

            {!movies && error === true && remoteError === false && errorMessage === "Movie not found!"
              ? <p className="page-movies-list-message">No hemos encontrado la película o serie solicitada</p>
              : ''
            }

            {!movies && error === false && remoteError === true
              ? <p className="page-movies-list-message">Lo sentimos, ha habido un error del servidor, inténtelo de nuevo en unos instantes</p>
              : ''
            }
          </ul>
        </article>

          
          
        </section>
      );
    
};

HomePage.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSearchButtonClick: PropTypes.func.isRequired,
  inputToSearch: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
}

const mapStateToProps = (state) => {

  const current = state.HomeReducer;

  return {
    inputToSearch: current.inputToSearch,
    movies: current.movies.Search,
    error: current.error,
    errorMessage: current.errorMessage,
    remoteError: current.remoteError,
  }
}

const mapDispatchToProps = dispatch => ({
  onInputChange: (value) => dispatch(actions.getInputToSearch(value)),
  onSearchButtonClick: (e) => dispatch(actions.searchHandler(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
