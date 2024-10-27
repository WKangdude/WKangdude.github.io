import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function CardDetails() {
  const location = useLocation();
  const { title, price, backgroundImage } = location.state || {}; // Desestructurar datos de state
  const navigate = useNavigate();

  // Verificar si los datos existen antes de mostrarlos
  if (!title || !price || !backgroundImage) {
    return <p>No se encontró información de la tarjeta.</p>;
  }

  return (
    <div className="p-6 flex flex-col items-center bg-gold h-full">
        <div className='text-right w-full'>
            <p className="text-4xl font-bold text-white text-right mb-6">{price} MXN</p>
        </div>
        <div 
            className='w-full h-72 bg-cover bg-no-repeat bg-center rounded-xl'
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <p></p>
        </div>
        <div className='w-full mt-6'>
            <h2 className="text-5xl font-bold text-beige text-left">{title}</h2>
            <h3 className='text-3xl text-white font-bold mt-6' >10 min</h3>
            <p className='mt-6 text-white text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, possimus. Nisi aperiam nemo consectetur repellendus fugit, laborum perspiciatis recusandae perferendis labore velit aliquid? Cumque voluptatibus dolores aliquam similique iure id!</p>

            <div className='mt-6 grid grid-cols-2 '>
                <div className='text-white'>
                    <h2 className='text-3xl'>Incluye</h2>
                    <div className='text-lg mt-2'>
                        <p>Lectura General</p>
                        <p>Vemos pasado</p>
                        <p>Presente</p>
                        <p>Puntos a trabajar</p>
                    </div>
                </div>
                <div className='text-white text-right'>
                    <h2 className='text-3xl' >No Incluye</h2>
                    <div className='text-lg mt-2'>
                        <p>Preguntas</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-12 w-full flex justify-center'>
            <button 
                className='text-white bg-principal py-4 w-full rounded-xl text-4xl font-bold'
                onClick={()=>{navigate("/Agendar");}}
            >AGENDAR</button>
        </div>
    </div>
  );
}

export default CardDetails;
