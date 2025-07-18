import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import productsData from '../data/productos.json';
import ProductLoader from './ProductLoader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductCarousel.css';
import './Products.css'; // Reutilizamos los estilos de las tarjetas de producto
import { useCart } from '../hooks/useCart';

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addItem } = useCart();

    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts(productsData.slice(0, 5));
            setLoading(false); 
        }, 500); 

        return () => clearTimeout(timer); 
    }, []);

    const settings = {
        dots: true,
        infinite: products.length > 3, // El carrusel es infinito si hay suficientes items
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    if (loading) {
        return <ProductLoader />;
    }

    return (
        <div className="product-carousel-container">
            <h2 className="product-carousel-title">Productos Destacados</h2>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="carousel-product-slide">
                         <div className="product-card">
                            <Link to={`/productos/${product.id}`} className="product-link">
                                <img src={product.image_url} alt={product.name} className="product-image" />
                            </Link>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">${product.price}</p>
                            <button className='product-button' onClick={()=> addItem(product, 1)}>Agregar al carrito</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductCarousel;