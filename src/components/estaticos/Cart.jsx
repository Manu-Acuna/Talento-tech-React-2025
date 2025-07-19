import React from 'react';
import { useCart } from '../../hooks/useCart';
import './styleCart.css';

const SideCart = ({ isOpen, onClose }) => {
    const { 
        cart, 
        removeItem, 
        clearCart, 
        totalPrice, 
        increaseQuantity, 
        decreaseQuantity 
    } = useCart();


    if (!isOpen) {
        return null;
    }

    return (
        
        <div className={`side-cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            
            <div className={`side-cart ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="side-cart-header">
                    <h2>Tu Carrito</h2>
                    <button onClick={onClose} className="close-button">
                        X
                    </button>
                </div>

                {cart.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image_url} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(item.id)} className="quantity-btn">-</button>
                                        <span>{item.quantity}</span>
                                        <button 
                                            onClick={() => increaseQuantity(item.id)} 
                                            disabled={item.quantity >= item.stock}
                                            className="quantity-btn"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p>Precio: ${item.price}</p>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="remove-item-btn" title="Eliminar producto">
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {cart.length > 0 && (
                    <div className="cart-summary">
                        <p>Total: ${totalPrice.toFixed(2)}</p>
                        <button onClick={clearCart} className="clear-button">
                            Vaciar Carrito
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideCart;
