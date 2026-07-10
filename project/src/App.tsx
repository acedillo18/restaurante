import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Nosotros from './pages/Nosotros';
import Galeria from './pages/Galeria';
import Reservaciones from './pages/Reservaciones';
import Ubicacion from './pages/Ubicacion';

export default function App() {
  useScrollReveal();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-ink-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/reservaciones" element={<Reservaciones />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
