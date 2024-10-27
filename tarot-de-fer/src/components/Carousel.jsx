import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import Card from "./card";

import tarot1 from '../img/tarot1.png'
import tarot2 from '../img/tarot2.png'

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1134,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  const navigate = useNavigate();

  const handleCardClick = (title, price, backgroundImage) => {
    navigate("/details", { state: { title, price, backgroundImage } });
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="flex justify-center">
          <Card
            backgroundImage={tarot1}
            title="Lectura Básica"
            price="$1500"
            color={'#232323'}
            onClick={() => handleCardClick("Lectura Basica", "$1500", tarot1)}
          />
        </div>
        <div className="flex justify-center">
          <Card
            backgroundImage={tarot2}
            title="Lectura Avanzada"
            price="$2500"
            color={'#232323'}
            onClick={() => handleCardClick("Lectura Avanzada", "$2500", tarot2)}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
