import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Productos from '../components/Productos'


const GaleriaDeProductos = () => {
    return (
        <>
            <Header/>
            <main>
                <Productos />
            </main>
            <Footer/>
        </>
    )
}

export default GaleriaDeProductos