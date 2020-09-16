import React from 'react';

const DetailPage = ( { movies, params } ) => {

    if( movies === undefined ) {
        movies = JSON.parse(sessionStorage.getItem('movies'))
    }
    
    const movieId = params.detailId,
        movie = movies.find( movie => movie.imdbID === movieId );

    
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

export default DetailPage;