import React from 'react';

const DetailPage = ( { movies, params } ) => {
    
    console.log(movies, params.detailId)
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