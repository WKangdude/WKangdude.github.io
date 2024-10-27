import React from 'react';

function Card({ backgroundImage, title, price, onClick, color }) {
  return (
    <div className="flex justify-center" onClick={onClick}>
      <div 
        className=" rounded-3xl p-2 w-72 relative cursor-pointer"
        style={{ backgroundColor: color }}
      >
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="min-h-96 rounded-2xl flex justify-center items-center bg-no-repeat bg-cover bg-center relative z-0"
        >
          <div className="absolute inset-0 bg-principal opacity-50 brightness-50 rounded-2xl w-full h-full z-10"></div>
          <div className="absolute left-0 p-3 top-48 z-20">
            <h3 className="text-white text-3xl">{title}</h3>
          </div>
          <div className="absolute bottom-0 right-0 p-3 m-2 backdrop-blur-md rounded-2xl z-20">
            <h3 className="text-white text-2xl text-right">{price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
