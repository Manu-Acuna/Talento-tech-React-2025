import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import './NotFound.css'; // Estilos para esta página

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <div className="not-found-container">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Página No Encontrada</h2>
            <p className="not-found-text">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <Link to="/" className="not-found-button">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;