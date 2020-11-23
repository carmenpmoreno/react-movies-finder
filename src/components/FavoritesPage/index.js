import React, { useState } from 'react';
import MoviesList from '../Controls/MoviesList'
import { getFavorites } from '../helpers';


const FavoritesPage = () => {

    const movies = getFavorites();
    const [opinionUpdate, setOpinionUpdate] = useState(false);

    const storeFavoriteOpinion = (value, movie) => {
        
      const favoritesFromLs = getFavorites()
      let freshFavorites = [];

      movie = {
          ...movie,
          opinion: value,
          opinionUpdate: true
      }

      freshFavorites = favoritesFromLs.filter( favorite => favorite.imdbID !== movie.imdbID )
      freshFavorites.push(movie)
      localStorage.setItem( 'favorites', JSON.stringify(freshFavorites) )

      setOpinionUpdate(true)
    }

    if(opinionUpdate === true) {
      setOpinionUpdate(false)
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
                />
              : <p className="page-movies-list-message">Aún no ha seleccionado ninguna película o serie</p> }
            </ul>
          </article>
            
        </section>
    );

};

export default FavoritesPage;