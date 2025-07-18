import React, { useState, useCallback } from 'react';
import { CartContext } from './CartContext';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = useCallback((item, quantity) => {
        const productInCart = cart.find(product => product.id === item.id);
        if (productInCart) {
            const newQuantity = productInCart.quantity + quantity;
            if (newQuantity > item.stock) {
                console.warn('No hay suficiente stock para agregar al carrito.');
                return;
            }
            setCart(cart.map(product => product.id === item.id ? { ...product, quantity: newQuantity } : product));
        } else{
            if (quantity > item.stock) {
                console.warn(`No podes agregar mas de ${item.stock} unidades de ${item.name}.`);
                return;
            }
            setCart(prevCart => [...prevCart, { ...item, quantity}]);
        }
    }, [cart]);

    const increaseQuantity = useCallback((itemId) => {
        setCart(cart => cart.map(product => (product.id ===itemId && product.quantity < product.stock) ? {...product, quantity: product.quantity + 1} : product))
    }, []);

    const decreaseQuantity = useCallback((itemId) => {
        const updatedCart = cart.map(product => product.id === itemId ? {...product, quantity: product.quantity - 1} : product);
        setCart(updatedCart.filter(product => product.quantity > 0));
    }, [cart]);

    const removeItem = useCallback((itemId) => {
        setCart(currentCart => currentCart.filter(product => product.id !== itemId));
    }, []);

    const clearCart = () => {
        setCart([]);
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem, 
            removeItem, 
            clearCart, 
            totalQuantity, 
            totalPrice,
            increaseQuantity,
            decreaseQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
