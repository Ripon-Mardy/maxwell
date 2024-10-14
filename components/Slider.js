'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axiosInstance from '@/helpers/axiosInstance'; // Ensure axiosInstance is correctly imported

// == icons === 
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slider, setSlider] = useState([]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slider.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
  };


  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await axiosInstance.get('/posts?term_type=slider');
        setSlider(response.data.data);
      } catch (error) {
        console.error('Failed to fetch data from sensor slider', error);
      }
    };

    fetchSlider();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [slider.length]);


  return (
    <>

      <div className="relative w-full h-64 md:h-[80vh] overflow-hidden ">
        <div className='container mx-auto'>
          {slider.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={banner.featured_image}
                alt={`Banner ${index + 1}`}
                width={300}
                height={300}
                layout='responsive'
                className="w-full h-32 md:h-full object-cover rounded-sm"
                priority={false}
              />
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-r"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-l"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

    </>
  )
}

export default Slider
