import React, { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import Cart from './Cart' // Importamos el nuevo componente
import './CartWidget.css'

const CartWidget = () => {
    const { totalQuantity } = useCart()
    const [isCartOpen, setIsCartOpen] = useState(false) // Estado para controlar la visibilidad del SideCart

    return (
        <>
            <div className="cart-widget" onClick={() => setIsCartOpen(true)}>
                <span className="cart-icon">🛒</span>
                {totalQuantity > 0 && (
                    <span className="cart-badge">{totalQuantity}</span>
                )}
            </div>
            {/* Renderizamos el SideCart condicionalmente */}
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    )
}

export default CartWidget
