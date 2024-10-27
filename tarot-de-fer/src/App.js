import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Foto from './img/fotofer.png';
import Ritual from './components/ritual.jsx';
import CardDetails from './components/CardDetails.jsx'; // Importa el componente de detalles de la tarjeta
import Agendar from './components/Agendar.jsx';

function App() {
  return (
    <Router>
      <div className="bg-principal">
      
        {/* Define las rutas de tu aplicación */}
        <Routes>
          {/* Ruta principal, que muestra el contenido original */}
          <Route path="/" element={
            <>
            <Header />
              <div className="bg-gold flex flex-col justify-center items-center my-4 gap-2 py-9 shadow-sm md:flex-row md:gap-5">
                <img src={Foto} alt="Foto de Fernanda" />
                <h2 className="text-white text-3xl text-center">Hola! Soy Fer tu brujita de confianza 🕯️🤍</h2>
              </div>
              <div className="flex justify-center mt-9">
                <div className="flex flex-col w-4/5 justify-center">
                  <h2 className="text-gold text-5xl mb-2">Sobre mi</h2>
                  <p className="text-white text-left text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi amet atque sunt reiciendis ducimus doloribus neque tempore totam non labore blanditiis, quae ullam? Expedita itaque id aperiam numquam ad.
                  </p>
                </div>
              </div>
              <Ritual />
            </>
          } />

          {/* Ruta para los detalles de cada tarjeta */}
          <Route path="/details" element={<CardDetails />} />
          <Route path='/agendar' element={<Agendar/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
