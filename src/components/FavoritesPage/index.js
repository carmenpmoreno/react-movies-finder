import React, { useState } from 'react';
import MoviesList from '../Controls/MoviesList'
import { getFavorites } from '../helpers';


const FavoritesPage = () => {

    const movies = getFavorites();

    const [opinionUpdate, setOpinionUpdate] = useState(false);

    const storeFavoriteOpinion = (value, movie) => {

      setOpinionUpdate(false)
        
      const favoritesFromLs = getFavorites()
      let freshFavorites = [];

      movie = {
          ...movie,
          opinion: value
      }

      freshFavorites = favoritesFromLs.filter( favorite => favorite.imdbID !== movie.imdbID )
      freshFavorites.push(movie)

      localStorage.setItem( 'favorites', JSON.stringify(freshFavorites) )

      setOpinionUpdate(true)
  }

    return (
        <section className="page-container">
          <h2 className="favorites-page-title">Mis favoritos</h2>
          <article>
            <ul className="page-movies-list-container container-fluid">
              {movies.length > 0
              ? <MoviesList
                  movies={movies}  
                  opinionInfo={true}
                  storeFavoriteOpinion={storeFavoriteOpinion}
                />
              : <p className="page-movies-list-message">Aún no ha seleccionado ninguna película o serie</p> }
            </ul>
          </article>
            
        </section>
    );

};

export default FavoritesPage;