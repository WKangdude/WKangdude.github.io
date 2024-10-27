import React from 'react'

import Header from './header'
import transfer from '../img/Bank Transfer Icon.png'
import deposito from '../img/Deposito dinero icon.png'
import whatsapp from '../img/Whatsapp icon.png'
import insta from '../img/Instagram logo.png'

function Agendar() {
  return (
    <div className='w-full'>
        <div className='flex flex-col items-center px-6'>
            <Header></Header>
            <div className='w-full mt-10'>
                <h1 className='text-5xl font-bold text-gold '>Pagos</h1>
                <div className='grid grid-cols-2 mt-10'>
                    <div className='flex flex-col items-center'>
                        <div className='bg-gold py-3 px-9 rounded-lg'>
                            <img className='w-20' src={transfer} alt="transferencia" />
                        </div>
                        <h3 className='text-white text-2xl mt-2' >Transferencia</h3>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-gold py-3 px-9 rounded-lg'>
                            <img className='w-20' src={deposito} alt="deposito" />
                        </div>
                        <h3 className='text-white text-2xl mt-2' >Depósito</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full mt-10 bg-gold px-6 pt-3 pb-7'>
            <h1 className='text-5xl font-bold text-principal '>Pagos</h1>
            <div className='flex mt-4 w-full items-center py-2 gap-1'>
                <img className='w-7' src={whatsapp} alt="Whatsapp" />
                <p className='text-white text-2xl' >(33)11223344</p>
            </div>
            <div className='flex w-full items-center gap-1'>
                <img className='w-7' src={insta} alt="Whatsapp" />
                <p className='text-white text-2xl' >@eltarotdefer</p>
            </div>
        </div>
    </div>
  )
}

export default Agendar
