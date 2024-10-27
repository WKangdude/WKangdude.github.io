import React from 'react';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';


function ritual() {
  return (
    <div className='flex flex-col'>
      <div className='flex bg-gold mt-9 justify-center py-2 flex-col items-center'>
          <div className='w-4/5 flex justify-center flex-col items-left'>
              <h2 className='text-5xl text-principal font-semibold'>Lecturas</h2>
          </div>
          <div className='w-4/5 mt-5'>
              <Carousel/>
          </div>
      </div>
      <div className='flex bg-principal mt-9 justify-center py-2 flex-col items-center'>
          <div className='w-4/5 flex justify-center flex-col items-left'>
              <h2 className='text-5xl text-gold font-semibold'>Rituales</h2>
          </div>
          <div className='w-4/5 mt-5'>
              <Carousel2/>
          </div>
      </div>
    </div>
  )
}

export default ritual
