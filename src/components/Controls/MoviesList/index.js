import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setFavorite } from '../../helpers';
import { useInput } from '../../customHooks';

const MoviesList = ( { movies, favoriteInfo, storeFavoriteOpinion, opinionOptions } ) => {

    const { value, handleOnChange } = useInput("");

    return (
        <>
            {movies.map( movie => 
                <li className="card page-movie-item" key={movie.imdbID}>

                    <div className="card-header">
                        <h3 className="card-title page-movie-title">{movie.Title}</h3>
                    </div>
                    <div className="card-body page-movie-card-body">
                        <img
                            className="page-movie-image"
                            alt={movie.Title}
                            title={movie.Title}
                            src={movie.Poster}></img>
                    </div>
                    <div className="card-footer">
                        {favoriteInfo === true
                        ? <div className="page-movie-card-footer-buttons-wrapper">
                            <button
                                type="button"
                                className="btn btn-light page-movie-button"
                                onClick={ () => setFavorite(movie)}
                                ><i className="fas fa-star">Añadir</i>
                            </button>
                            <button
                            type="button"
                            className="btn btn-light page-movie-button"
                            >
                                <Link to={`/detail/${movie.imdbID}`}>
                                    Saber más
                                </Link>
                            </button>
                        </div>
                        : ''
                        }
                        {opinionOptions === true && movie.opinion === undefined
                        ? <div className="favorite-movie-card-footer">
                            <input 
                                className="page-card-input"
                                placeholder="Escribe aquí tu opinión" 
                                onChange={handleOnChange}
                                maxLength="20"
                            />
                            <div className="page-movie-card-footer-buttons-wrapper">
                                <button
                                    type="button"
                                    className="btn btn-light page-movie-button"
                                    onClick={() => storeFavoriteOpinion(value, movie)}
                                >
                                    Guardar
                                </button>
                                <button
                                type="button"
                                className="btn btn-light page-movie-button"
                                >
                                    <Link to={`/detail/${movie.imdbID}`}>
                                        Saber más
                                    </Link>
                                </button>
                            </div>
                            </div>
                        : ''
                        }
                        {opinionOptions === true && movie.opinion !== undefined
                        ? <div className="favorite-movie-card-footer">
                            <p className="favorite-movie-card-footer-opinion-title">Mi opinión:</p>
                            <p>{movie.opinion}</p>
                            <div className="page-movie-card-footer-button-more-wrapper"> 
                                <button
                                type="button"
                                className="btn btn-light page-movie-button"
                                >
                                    <Link to={`/detail/${movie.imdbID}`}>
                                        Saber más
                                    </Link>
                                </button>
                            </div>
                        </div>
                        : ''
                        }
                        
                    </div>
                    
                </li>)
            }

        </>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    favoriteInfo: PropTypes.bool,
}

export default MoviesList;