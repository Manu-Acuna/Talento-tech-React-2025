import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import SideCart from './Cart';
import { useCart } from '../../hooks/useCart';
import '../estaticos/styleEstaticos.css';

const Header = () => {
    const { user, logout } = useAuth();
    const { totalQuantity } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header className="main-header">
                <div className="logo">
                    <NavLink to="/"> MiTienda</NavLink>
                </div>
                <nav className={isMobileMenuOpen ? 'mobile-nav-open' : ''}>
                    <ul>
                        <li><NavLink to="/" className="nav-link" onClick={closeMobileMenu}> Inicio</NavLink></li>
                        <li><NavLink to="/productos" className="nav-link" onClick={closeMobileMenu}>Productos</NavLink></li>
                        <li><NavLink to="/contacto" className="nav-link" onClick={closeMobileMenu}>Contacto</NavLink></li>
                    </ul>
                </nav>
                <div className="user-section">
                    <button onClick={() => setIsCartOpen(true)} className="cart-toggle-button" aria-label="Abrir carrito">
                        <FaShoppingCart />
                        {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
                    </button>
                    {user ? (
                        <div className="user-info">
                            <button onClick={logout} className="logout-button">
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <NavLink to="/login" className="login-button">
                            Iniciar Sesión
                        </NavLink>
                    )}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menú de navegación"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </header>
        <SideCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

export default Header;