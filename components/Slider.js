'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

// ==== image === 
import slider1 from '../public/Image/slider img/1.jpg'
import slider2 from '../public/Image/slider img/2.jpg'

// == icons === 
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";

const Slider = () => {

    

    const images = [
        slider1, slider2
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);

      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
    
        return () => clearInterval(interval);
      }, [images.length]);


  return (
    <>

<div className="relative w-full h-64 md:h-[80vh] overflow-hidden ">
     <div className='container mx-auto'>
     {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Slider ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-r"
      >
        <FaAngleLeft/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-l"
      >
        <FaAngleRight/>
      </button>
     </div>
    </div>

    </>
  )
}

export default Slider
