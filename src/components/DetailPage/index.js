import React from 'react';

const DetailPage = ( { movies, params } ) => {

    if( movies === undefined ) {
        movies = JSON.parse(sessionStorage.getItem('movies'))
    }
    
    const movieId = params.detailId,
        movie = movies.find( movie => movie.imdbID === movieId );

    
    return (
        <div className="page-container ">
            <p>Detail Page</p>
            <h2>{movie.Title}</h2>
        </div>
    );
};

export default DetailPage;