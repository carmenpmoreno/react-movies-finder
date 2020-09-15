import React from 'react';
import { setFavorite } from '../../helpers'

const MoviesList = ( { movies, favoriteInfo } ) => {
    return (
        <>
            {movies.map( movie => 
                <li className="card page-movie-item" key={movie.imdbID} >
                    <div className="card-header">
                    <h3 className="card-title page-movie-title">{movie.Title}</h3>
                    </div>
                    <div className="card-body">
                    <img
                        className="page-movie-image"
                        alt={movie.Title}
                        title={movie.Title}
                        src={movie.Poster}></img>
                        {/* <p>{`Año:${movie.Year}`}</p> */}
                    </div>
                    <div className="card-footer">
                        {favoriteInfo === true
                        ? <button
                            type="button"
                            onClick={ () => setFavorite(movie)}
                            >Añadir a favoritos</button>
                            : ''
                        }
                    </div>
                    
                </li>
                
                )
            }
            
        </>
    );
};

export default MoviesList;