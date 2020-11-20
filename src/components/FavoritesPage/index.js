import React from 'react';
import MoviesList from '../Controls/MoviesList'
import {getFavorites} from '../helpers';


const FavoritesPage = () => {

    const movies = getFavorites();

    return (
        <section className="page-container">
          <h2 className="favorites-page-title">Mis favoritos</h2>
          <article>
            <ul className="page-movies-list-container container-fluid">
              {movies.length > 0
              ? <MoviesList
                  movies={movies}  
                  opinionInfo={true}
                />
              : <p className="page-movies-list-message">Aún no ha seleccionado ninguna película o serie</p> }
            </ul>
          </article>
            
        </section>
    );

};

export default FavoritesPage;