import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/productos.json';
import { useCart } from '../hooks/useCart';
import ProductLoader from './ProductLoader';
import './Products.css'; // Reutilizamos los estilos de las tarjetas de producto
import './MostrarProducto.css'; // Estilos específicos para la vista de detalle

const MostrarProducto = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addItem } = useCart();

    useEffect(() => {
        // Simulamos una carga asíncrona
        const timer = setTimeout(() => {
            try {
                const productId = parseInt(id, 10);
                const foundProduct = productsData.find(p => p.id === productId);
                
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setError('Producto no encontrado.');
                }
            } catch (e) {
                console.error("Error al buscar el producto:", e);
                setError('Ocurrió un error al cargar el producto.');
            } finally {
                setLoading(false);
            }
        }, 300); // Un delay corto para simular la carga

        return () => clearTimeout(timer);
    }, [id]);

    if (loading) {
        // Podrías usar un loader más grande o centrado para la página de detalle
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><ProductLoader /></div>;
    }

    if (error) {
        return (
            <div className="product-detail-error">
                <h2>{error}</h2>
                <Link to="/productos" className="product-button">Volver a la tienda</Link>
            </div>
        );
    }

    if (!product) {
        // Este caso es redundante si `error` se maneja bien, pero es un buen fallback.
        return <div>Producto no disponible.</div>;
    }

    return (
        <div className="product-detail-container">
            <div className="product-card-detail">
                <div className="product-detail-image-container">
                    <img src={product.image_url} alt={product.name} className="product-detail-image" />
                </div>
                <div className="product-detail-info">
                    <h2 className="product-detail-name">{product.name}</h2>
                    <p className="product-detail-description">{product.description || 'No hay descripción disponible para este producto.'}</p>
                    <p className="product-detail-price">${product.price}</p>
                    <button className='product-button' onClick={() => addItem(product, 1)}>
                        Agregar al carrito
                    </button>
                    <Link to="/productos" className="product-button-secondary">
                        Volver a Productos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MostrarProducto;