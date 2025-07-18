import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartProvider' // Importamos el Provider
import { AuthProvider } from './context/authContext' // Importamos el AuthProvider
import Home from './pages/Home'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import Contacto from './pages/Contacto'
import RutaProtegida from './components/RutaProtegida'
import DetalleProducto from './pages/DetalleProducto'
import PanelAdmin from './pages/PanelAdmin'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


function App() {

    return (
    
      <Router>
        <CartProvider>
          <AuthProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<GaleriaDeProductos />} />
                <Route path="/productos/:id" element={<DetalleProducto />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/admin"
                  element={
                    <RutaProtegida allowedRole="Admin">
                      <PanelAdmin />
                    </RutaProtegida>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </AuthProvider>
        </CartProvider>
      </Router>
  );
}

export default App;
