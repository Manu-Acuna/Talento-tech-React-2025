import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const RutaProtegida = ({ children, allowedRole }) => {
    const { user, loading } = useAuth();

    if (loading) {
        // Muestra un loader o nada mientras se verifica la sesión inicial
        return <div>Cargando...</div>;
    }

    if (!user || user.role !== allowedRole) {
        // Si no hay un usuario logueado o su rol no es el permitido,
        // lo redirigimos a la página de login.
        // `replace` evita que el usuario pueda volver a la página anterior (la protegida).
        return <Navigate to="/login" replace />;
    }

    // Si el rol es el correcto, se muestra el contenido protegido.
    return children;
};

export default RutaProtegida;