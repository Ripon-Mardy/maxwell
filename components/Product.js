import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

// === images === 
import product1 from '../public/Image/product image/1.png';
import product2 from '../public/Image/product image/2.jpg'
import product3 from '../public/Image/product image/3.webp'
import product4 from '../public/Image/product image/4.jpg'
import product5 from '../public/Image/product image/5.webp'
import product6 from '../public/Image/product image/6.webp'
import product7 from '../public/Image/product image/7.jpg'
import product8 from '../public/Image/product image/8.webp'
import product9 from '../public/Image/product image/9.webp'
import product10 from '../public/Image/product image/10.webp'
import product11 from '../public/Image/product image/11.webp'
import product12 from '../public/Image/product image/12.webp'

const Product = () => {

    const productList = [
        {
            "productImage" : product1,
            "productTitle" : "AUTOMATIC DOORS",
            "productDescription" : "Automatic electric door is individual solutions for today’s living requirements. In addition with the pioneering magnetic levitation operating principle. Its integrated Soft Motion technology with door motor makes it an exceptionally quiet operator offering an outstanding level of safety."
        },
        {
            "productImage" : product2,
            "productTitle" : "AUTOMATIC GATES & MOTOR",
            "productDescription" : "Automatic electric gate with encoder, gate motor, complete with electronic control unit and built-in 433,92 MHz rolling code radio receiver. Maximum gate weight 400 – 4000 kg for residential and industrial gates."
        },
        {
            "productImage" : product3,
            "productTitle" : "GARAGE DOORS & MOTOR",
            "productDescription" : "Garage door & garage motor made in Europe are among the most dependable and stylist, so you can feel good knowing that we’ll be there day or night, winter or summer. Get the best price quote for garage door."
        },
        {
            "productImage" : product4,
            "productTitle" : "CAR PARKING SOLUTIONS",
            "productDescription" : "Gate barriers are designed to professionally control every type of access: gate barriers, car park lock, parking guidance and management systems which are used in all types of small or large public facilities."
        },
        {
            "productImage" : product5,
            "productTitle" : "ROLLING SHUTTERS & MOTOR",
            "productDescription" : " Automatic rolling shutter & shutter motor. Automation range for blinds, curtains and rolling grilles. Find here the perfect solution for your residencial or business applications!"
        },
        {
            "productImage" : product6,
            "productTitle" : "TURNSTILES",
            "productDescription" : " High-Performance, Multipurpose. Turnstile Series Available in powder-coated carbon steel or all stainless cabinets, our extensive selection of turnstiles are capable of meeting any security need."
        }
    ]


  return (
    <>
    <section className='py-10'>
        <div className='container mx-auto px-3'>

            <div className='text-center'>
            <h1 className='text-3xl font-semibold mb-5'>Our Automation Expertise</h1>
            <p className='text-lg text-gray-500 font-semibold'>Maxwell goal is providing our customers with excellent service while delivering a quality product and services accompanied with integrity, professionalism, reliability, and satisfaction. We practice diversity in order to meet our customers’ needs. </p>
            <div className='w-28 h-1 bg-red-500 mx-auto mt-6'></div>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 pt-10'>
                {productList.map((item) => (
                    <div>
                        <Link href={'#'}><Image className='w-full rounded-sm hover:-translate-y-1 duration-200 ease-in-out' src={item.productImage} width={200} height={200} alt='product' /></Link>
                        <Link href={'#'} className='text-lg md:text-xl font-bold my-2 block hover:text-red-500 duration-200 ease-in-out'> {item.productTitle} </Link>
                        <p className='hidden md:block text-gray-500 text-lg font-medium'> {item.productDescription} </p>
                    </div>
                ))}
            </div>

        </div>
    </section>
    </>
  )
}

export default Product
