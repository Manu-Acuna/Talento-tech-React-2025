import React, { useState } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import './Contacto.css'

const Contacto = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email para suscripción:', email);
        alert(`¡Gracias por suscribirte con el correo: ${email}!`);
        setEmail(''); 
    };

    return (
        <>
            <Header/>
            <main>
                <h1>Contacto</h1>

                <section className="newsletter-signup">
                    <h2>Suscríbete a nuestro Newsletter</h2>
                    <p>Recibí nuestras últimas ofertas y noticias directamente en tu bandeja de entrada.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Suscribirse</button>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Contacto