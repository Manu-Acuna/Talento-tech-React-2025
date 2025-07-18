import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import { useAuth } from '../context/authContext';

const PanelAdmin = () => {
    const { user } = useAuth();

    return (
        <>
            <Header />
            <main style={{ padding: '40px 20px', minHeight: 'calc(100vh - 160px)', textAlign: 'center' }}>
                <h1>Panel de Administración</h1>
                <p>¡Bienvenido, {user ? user.email : 'Admin'}! Esta es una ruta protegida.</p>
                <p>Solo los usuarios con el rol "Admin" pueden ver esta página.</p>
            </main>
            <Footer />
        </>
    );
};

export default PanelAdmin;