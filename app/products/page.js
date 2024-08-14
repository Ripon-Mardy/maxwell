'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';


// ==== icons image === 
import icon1 from '../../public/Image/icons/automatic-doors-Operators-icon-Dark.png'

// === icons === 
import { IoMdCheckboxOutline } from "react-icons/io";

// ==== product list image === 
import product1 from '../../public/Image/product list image/product1.jpg'
import product2 from '../../public/Image/product list image/product2.jpg'
import product3 from '../../public/Image/product list image/product3.png'

const page = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    // ===== product menu handler === 
  const toggleMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

//   ==== product menu ==== 
  const productsMenu = [
    {
      title: 'Entrance Automation',
      icon : icon1,
      link: 'Receivers & Remote',
    },
    {
        title: 'Entrance Automation',
        icon : icon1,
        link: 'Receivers & Remote',
    },
    {
        title: 'Entrance Automation',
        icon : icon1,
        link: 'Receivers & Remote',
    },
  ];

// ===== product list item === 
const productListItem = [
    {
        "productImage" : product1,
        "productTitle" : "Automatic Revolving Door"
    },
    {
        "productImage" : product2,
        "productTitle" : "Automatic Revolving Door"
    },
    {
        "productImage" : product2,
        "productTitle" : "Automatic Revolving Door"
    },
    {
        "productImage" : product3,
        "productTitle" : "Automatic Revolving Door"
    },
    {
        "productImage" : product3,
        "productTitle" : "Automatic Revolving Door"
    },
    {
        "productImage" : product3,
        "productTitle" : "Automatic Revolving Door"
    }
]


  return (
    <>
    <section className='productsBanner py-10'>
        <div className='container mx-auto px-3'>


            <div>
                <div className='text-center'>
                <Image className='mx-auto' src={icon1} width={50} height={60} alt='maxwelldoor' />
                <h1 className='text-2xl md:text-3xl tracking-wide font-semibold text-white my-1 mt-3'>Automatic Door Operators</h1>
                <h2 className='text-xl font-medium text-white'>#1 Automatic Doors Co. UAE</h2>
                </div>
                <div className='mt-8 md:w-2/3 md:mx-auto'>
                    <h1 className='text-white font-semibold text-xl mb-3'>Features of Automatic Door Systems:</h1>
                    <ul className='list-disc text-white pl-5 flex flex-col gap-2 text-sm md:text-lg'>
                        <li>Running automatically, quietly and smoothly (Off, Automatic, Permanent open, Partial open, Exit only)</li>
                        <li>Up to 3.0 meter opening width, single sliding or double sliding door</li>
                        <li>Microprocessor controls sliding speed and other special functions programmable</li>
                        <li>Modular design, easy for mounting, service and maintaining</li>
                        <li>Custom build feasibility according to customer requirement</li>
                        <li>Standardized mechanical components for all operators, including driving and controlling module</li>
                        <li>Optional battery pack for emergency escape route solution</li>
                        <li>Sliding Glass Door, Revolving Door, Swing Door, Breakout Door, Telescopic Doors & Other Automatic Doors.</li>
                    </ul>
                </div>
                {/* === border box ===  */}
                <div className='mt-6 md:mt-10 flex items-center justify-between gap-2 flex-wrap border-2 border-green-600 border-dashed p-2 md:p-4'>
                    <p className='flex items-center gap-5 text-white'> <IoMdCheckboxOutline className='text-xl text-green-500'/> ISO9001 Certified Co. </p>
                    <p className='flex items-center gap-5 text-white'> <IoMdCheckboxOutline className='text-xl text-green-500'/> Fastest 24/7 Technical Assistance. </p>
                    <p className='flex items-center gap-5 text-white'> <IoMdCheckboxOutline className='text-xl text-green-500'/> Nationwide Sales Network </p>
                    <p className='flex items-center gap-5 text-white'> <IoMdCheckboxOutline className='text-xl text-green-500'/> highly qualified engineers and technicians. </p>
                </div>
            </div>


        </div>
    </section>



{/* ============
product list section 
============  */}

<section className='py-10'>


<div className='container mx-auto px-3 flex flex-col md:flex-row gap-10'>

{/* ====    ==== product list ===  */}
<div className='basis-[65%]'>


    <h1 className='text-lg font-semibold mb-4'>Showing all 5 results</h1>

    <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
        {productListItem.map((list) => (
            <div className='w-full border p-2 border-gray-300 rounded-md'>
                <Link href={'#'} className=' p-3 rounded-sm overflow-hidden'>
                <Image className='w-full rounded-sm hover:-translate-y-1 duration-200 ease-in-out overflow-hidden object-cover' src={list.productImage} width={100} height={100} alt='maxWelldoor' />
                <h1 className='text-lg font-semibold my-1'> {list.productTitle} </h1>
            </Link>
            <div className='text-center'>
            <Link href={'#'} className='bg-gray-700 p-2 text-white font-medium rounded-sm hover:bg-white hover:text-black border border-gray-300 duration-200 ease-in-out px-6 text-sm mb-2 inline-block'>Read More</Link>
            </div>
            </div>
        ))}
    </div>


</div>

{/* ==== prodcut menu ===  */}

<div className=" p-6 basis-[35%]">
      <div className="space-y-4 border border-gray-300 rounded-md p-3">
        {productsMenu.map((list, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleMenu(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium">{list.title}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  index === activeIndex ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                index === activeIndex ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <Link href={'#'} className='mt-2 text-gray-600 flex gap-2'>
                <Image src={list.icon} width={20} height={20} alt='maxWelldoor' />
                <span> {list.link} </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>



</div>



</section>


    </>
  )
}

export default page
