import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { setFavorite } from '../../helpers';
import { UseInput } from '../../customHooks';

const MoviesList = ( { movies, favoriteInfo, opinionInfo } ) => {

    const { value, handleOnChange } = UseInput("");

    return (
        <>
            {movies.map( movie => 
                <li className="card page-movie-item" key={movie.imdbID}>

                    <div className="card-header">
                        <h3 className="card-title page-movie-title">{movie.Title}</h3>
                    </div>
                    <div className="card-body">
                        <img
                            className="page-movie-image"
                            alt={movie.Title}
                            title={movie.Title}
                            src={movie.Poster}></img>
                    </div>
                    <div className="card-footer page-movie-card-footer">
                        {favoriteInfo === true
                        ? <>
                            <button
                                type="button"
                                className="btn btn-light page-movie-button"
                                onClick={ () => setFavorite(movie)}
                                ><i className="fas fa-star">Añadir</i>
                            </button>
                        </>
                        : ''
                        }
                        {opinionInfo === true
                        ? <>
                        <input 
                            placeholder="Escribe aquí tu opinión" 
                            onChange={handleOnChange} />
                        <p>{value}</p>
                        </>
                        : ''
                        }
                        <button
                            type="button"
                            className="btn btn-light page-movie-button"
                            >
                            <Link to={`/detail/${movie.imdbID}`}>
                                Saber más
                            </Link>
                        </button>
                        
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