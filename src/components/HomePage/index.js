import React from 'react';

const HomePage = () => {
    return (
    <section>
        <h1>Buscador de películas y series</h1>
        <article className="search-form-wrapper">
            <form  
                className="search-form" 
                // onSubmit={this._handleSubmit}
                >
                <input
                className="input"
                // onChange={this._handleChange}
                type="text"
                placeholder="Ej: Star Wars"
                />
                <button type="submit" className="button is-info">
                    Buscar
                </button>
            </form>        
        </article>
        
      </section>
    );
};

export default HomePage;