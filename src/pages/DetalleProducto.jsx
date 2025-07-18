import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import MostrarProducto from '../components/MostrarProducto';

const DetalleProducto = () => {
    return (
        <>
            <Header />
            <main>
                <MostrarProducto />
            </main>
            <Footer />
        </>
    );
};

export default DetalleProducto;