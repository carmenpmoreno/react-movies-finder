import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MoviesList from '../Controls/MoviesList';
import { getFavorites } from '../transversal';
import { storeFavorite } from './helpers';
import { getShowToast, getHideToast } from '../Controls/Toast/actions';
import { TOAST_TYPES } from '../Controls/Toast/constants';

const FavoritesPage = () => {

    const movies = getFavorites(),
        [opinion, setOpinionUpdate] = useState(''),
        [opinionStoredMessage, setopinionStoredMessage] = useState(''),
        dispatch = useDispatch();

    const storeFavoriteOpinion = ( value, movie ) => {
        storeFavorite(value, movie)
        setOpinionUpdate(value)
    }

    useEffect(() => {
        if( opinion !== undefined && opinion.length > 0 ) {
            setopinionStoredMessage('¡Guardada con éxito!')
            dispatch( getShowToast(TOAST_TYPES.SUCCESS, opinionStoredMessage) )
        }
    }, [opinion, opinionStoredMessage, dispatch]);

    useEffect(() => {
        if( opinionStoredMessage.length === 0 ) {
            dispatch( getHideToast() )
        }
    }, [opinionStoredMessage, dispatch]);

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
                  setopinionStoredMessage={setopinionStoredMessage}
                  opinionStoredMessage={opinionStoredMessage}
                />
              : <p className="page-movies-list-message">Aún no ha seleccionado ninguna película o serie</p> }
            </ul>
          </article>
            
        </section>
    );

};

export default FavoritesPage;