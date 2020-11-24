import React from 'react'


const LogoutPage = () => {

    return (
        <div className="container-fluid logout-container">
            <div className="logout-app-title-container"> 
                <i className="fas fa-film"></i>
                <h1 className="login-app-title">Movies finder</h1>
            </div>
            <div>
                <h2 className="logout-goobdye">Ha cerrado su sessión</h2>
                <div className="logout-card">
                    <p>Cierre la ventana del navegador</p>
                </div>
            </div>
        </div>
    );

};

export default LogoutPage;