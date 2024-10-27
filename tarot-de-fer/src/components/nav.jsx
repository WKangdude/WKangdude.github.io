import React from 'react'
import index from '../App'

function nav() {
  return (
    <div className='flex justify-around border-t border-b border-gold py-2' >
      <a href={index} className='text-white text-2xl' >Servicios</a>
      <a href={index} className='text-white text-2xl' >Agendar</a>
      <a href={index} className='text-white text-2xl' >Contacto</a>
    </div>
  )
}

export default nav
