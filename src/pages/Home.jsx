import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ImageCarousel from '../components/Carousel'
import ProductCarousel from '../components/ProductCarousel'
import '../index.css'

const Home = () => {
    return (
        <>
            <Header />
            <ImageCarousel />
            <main>
                <ProductCarousel />
            </main>
            <Footer />
        </>
    )
}

export default Home