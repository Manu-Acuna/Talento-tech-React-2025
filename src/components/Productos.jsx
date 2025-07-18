import React, { useState, useEffect } from 'react'
import productsData from '../data/productos.json'
import ProductLoader from './ProductLoader'
import {Link} from 'react-router-dom'
import { useCart } from '../hooks/useCart' // Importamos nuestro hook
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { addItem } = useCart(); // Obtenemos la función para agregar items

    useEffect(() => {
        const timer = setTimeout(() => {
            try{
                setProducts(productsData)
                setLoading(false)
            }
            catch (e){
                console.log(e)
                setLoading(false)
            }
        }, 500)

        return () => clearTimeout(timer)
    }, []);

    if (loading) {
        return <ProductLoader />
    }

    return(
        <div className="products-container">
            <h2 className="products-title">Nuestros Productos</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/productos/${product.id}`} className="product-link">
                            <img src={product.image_url} alt={product.name} className="product-image" />
                        </Link>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">${product.price}</p>
                        <button className='product-button' onClick={()=> addItem(product, 1)}>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;