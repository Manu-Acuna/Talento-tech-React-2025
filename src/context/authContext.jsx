import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Para saber si estamos verificando la sesión inicial
    const navigate = useNavigate();

    useEffect(() => {
        // Al cargar la app, revisamos si hay un usuario en localStorage para mantener la sesión
        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Error al parsear el usuario de localStorage", error);
            localStorage.removeItem('user');
        } finally {
            setLoading(false);
        }
    }, []);

    const login = async (email, password) => {
        const response = await fetch('https://6878590931d28a460e1dfa77.mockapi.io/Usuariosecommerce');
        if (!response.ok) {
            throw new Error('No se pudo conectar con el servidor.');
        }
        const users = await response.json();
        const foundUser = users.find(u => u.email === email && u.password === password);

        if (foundUser) {
            const userData = { nombre: foundUser.nombre, role: foundUser.role, email: foundUser.email };
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            return foundUser; // Devolvemos el usuario para que Login.jsx pueda redirigir
        } else {
            throw new Error('Email o contraseña incorrectos.');
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    const value = {
        user,
        loading,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto de autenticación más fácilmente
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    return context;
};