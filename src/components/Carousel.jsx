import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const ImageCarousel = () => {
    const images = [
        "https://imagenes.compragamer.com/bannerPrincipal/DC_20250701163255_2KZCh40l.jpg",
        "https://imagenes.compragamer.com/bannerPrincipal/DC_20250618143926_hx3LajEg.jpg",
        "https://imagenes.compragamer.com/bannerPrincipal/DC_20250619112111_Hcg1ZXTi.jpg"
    ];

    const settings = {
        dots: true,         
        infinite: true,     
        speed: 500,         
        slidesToShow: 1,    
        slidesToScroll: 1,  
        autoplay: true,     
        autoplaySpeed: 10000, 
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // Ancho de pantalla para dispositivos móviles
                settings: {
                    arrows: false, // Oculta las flechas en móviles
                }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="carousel-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;