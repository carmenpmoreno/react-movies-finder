import React, { useState } from 'react';
import MoviesList from '../Controls/MoviesList'
import { getFavorites } from '../helpers';


const FavoritesPage = () => {

    const movies = getFavorites(),
        [opinion, setOpinionUpdate] = useState(''),
        [opinionStoredMessage, setopinionStoredMessage] = useState('');


    const storeFavoriteOpinion = (value, movie) => {
        const favoritesFromLs = getFavorites()
        let freshFavorites = [],
          favoriteMovieIndex = '';

        movie = {
            ...movie,
            opinion: value,
        }
        favoriteMovieIndex = favoritesFromLs.findIndex( favorite => favorite.imdbID === movie.imdbID )
        favoritesFromLs[favoriteMovieIndex] = movie
        freshFavorites = favoritesFromLs
        
        localStorage.setItem( 'favorites', JSON.stringify(freshFavorites) )

        setOpinionUpdate(value)
    }

    return (
        <section className="page-container">
          <h2 className="favorites-page-title">Mis favoritos</h2>
          <article>
            <ul className="page-movies-list-container container-fluid">
              {movies.length > 0
              ? <MoviesList
                  movies={movies}  
                  storeFavoriteOpinion={storeFavoriteOpinion}
                  opinionOptions={true}
                  opinion={opinion}
                  opinionStoredMessage={opinionStoredMessage}
                  setopinionStoredMessage={setopinionStoredMessage}
                />
              : <p className="page-movies-list-message">Aún no ha seleccionado ninguna película o serie</p> }
            </ul>
          </article>
            
        </section>
    );

};

export default FavoritesPage;