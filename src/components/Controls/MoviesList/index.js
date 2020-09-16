import React from 'react';
import {Link} from 'react-router-dom';
import { setFavorite } from '../../helpers';

const MoviesList = ( { movies, favoriteInfo } ) => {
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
                    <div className="card-footer">
                        {favoriteInfo === true
                        ? <button
                            type="button"
                            onClick={ () => setFavorite(movie)}
                            ><i className="fas fa-star">Añadir</i></button>
                            : ''
                        }
                        <Link to={`/detail/${movie.imdbID}`}>
                            Detalle
                        </Link>
                    </div>
                    
                </li>
                
                )
            }
            
        </>
    );
};

export default MoviesList;