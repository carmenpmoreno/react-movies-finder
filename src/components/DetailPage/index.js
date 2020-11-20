import React from 'react';
import PropTypes from 'prop-types';

const DetailPage = ( { params } ) => {

    const favoriteMovies = JSON.parse(localStorage.getItem('favorites'))
    const searchMovies = JSON.parse(sessionStorage.getItem('movies'))
    
    const movieId = params.detailId
    let movie = favoriteMovies.find( favoriteMovie => favoriteMovie.imdbID === movieId );

    if( movie === undefined ) {
        movie = searchMovies.find( searchMovie => searchMovie.imdbID === movieId );
    }

    
    return (
        <section className="page-container page-movies-list-container">
            <article className="detail-page-wrapper" key={movie.imdbID}>
                <h2 className="detail-page-movie-title">{movie.Title}</h2>
                <div>
                    <img
                        className="detail-page-movie-image"
                        alt={movie.Title}
                        title={movie.Title}
                        src={movie.Poster}></img>
                </div>
                <ul className="detail-page-info-list">
                    <li>{`Año: ${movie.Year}`}</li>
                    <li></li>
                    {movie.Type && movie.Type === 'movie' ? <li>Película</li> : ''}
                    {movie.Type && movie.Type === 'series' ? <li>Serie</li> : ''}
                </ul>

            </article>
        </section>
    );
};

DetailPage.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    params: PropTypes.object,
}

export default DetailPage;