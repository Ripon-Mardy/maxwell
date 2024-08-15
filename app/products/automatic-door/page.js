'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import Related_products from '@/components/Related_products'

// ==== iamges === 
import pl1 from '../../../public/Image/Product slide/1.jpg'
import pl2 from '../../../public/Image/Product slide/2.jpg'
import pl3 from '../../../public/Image/Product slide/3.jpg'
import pl4 from '../../../public/Image/Product slide/4.jpg'


// ==== product logo == 
import productLogo1 from '../../../public/Image/productLogo.webp'
import productLogo2 from '../../../public/Image/productlogo2.webp'

const page = () => {



    const images = [
        pl1,
        pl2,
        pl3,
        pl4
    ];

    const [mainImage, setMainImage] = useState(images[0]);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
    const imageContainerRef = useRef(null);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setZoomPosition({ x: `${x}%`, y: `${y}%` });
    };

    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };



    return (
        <>
            <section className='py-10'>
                <div className='container mx-auto px-3'>

                    {/* ==== link ==  */}
                    <div className='flex items-center gap-1 text-sm mb-5'>
                        <Link className='underline text-paracolor' href={'/'}>Home /</Link> <Link className='underline text-paracolor' href={'#'}>Automatic Door /</Link>
                        <span>Automatic Revolving Door</span>
                    </div>


                    <div className='flex flex-col md:flex-row gap-6 pt-4'>

                        {/* ==== product description ===  */}

                        <div className='basis-[60%] flex flex-col md:flex-row gap-5'>
                            <div className='basis-1/2'>
                                <video className='w-full rounded-sm' src="#" width={300} height={200} controls></video>
                                <Link href={'#'} className='bg-yellow-400 p-2 rounded-sm inline-block my-4 px-4 font-semibold border border-gray-400'> Get a free quote </Link>
                                <Image className='my-6' src={productLogo1} width={200} height={200} alt='logo' />
                                <h1 className='text-xl font-semibold capitalize'>Our brands</h1>
                                <div className='w-full h-0.5 bg-red-200'></div>
                                <Image className='mt-4' src={productLogo2} width={200} height={200} alt='logo' />
                            </div>
                            <div className='basis-1/2'>
                                <h1 className='text-2xl font-semibold'>Automatic Revolving Door</h1>
                                <div className='w-full h-0.5 my-3 bg-red-500'></div>
                                <p className='text-gray-600'>Automatic Revolving Door mainly include two-wing, three-wing and four-wing automatic revolving door and all glass automatic revolving door. According to the way the automatic revolving doors revolve, it can be divided into two catalogues: two-wing automatic revolving door and three/four-wing automatic revolving door. Two-wing automatic revolving door combines Automatic Sliding Door and automatic revolving door, satisfying various customer demands. Maxwell automatic revolving door is ideal for hotels, hospitals, conference centres, exhibitions, office building, etc..

                                    Our Brands: Aprimatic – Italy, Motorline- Portugal, Dorma/Geze- Germany, Boon Edam – The Netherlands & Maxwell – UAE

                                    Categories: Automatic Doors, Entrance Automation</p>
                            </div>
                        </div>


                        {/* ==== product slider ====  */}
                        <div className="container mx-auto p-6 basis-[40%]">
                            <div className="flex flex-col items-center">
                                {/* Main Product Image */}
                                <div
                                    className="w-72 h-64 mb-3 overflow-hidden relative"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    ref={imageContainerRef}
                                >
                                    <Image
                                        src={mainImage}
                                        alt="Main Product"
                                        className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? 'md:scale-150' : ''} `}
                                        style={{
                                            transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
                                        }}
                                    />
                                </div>

                                {/* Product Thumbnails */}
                                <div className="flex space-x-4">
                                    {images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            onClick={() => handleImageClick(image)}
                                            className={`w-16 h-16 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105 ${image === mainImage ? 'border-2 border-blue-500' : 'border border-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* === end product slider ===  */}



                    </div>


                </div>
            </section>


            {/* === description ===  */}
            <section className='py-10'>
                <div className='container mx-auto'>

                    <div className='border border-gray-300 rounded-md'>
                        <div className='bg-gray-100'>
                            <h2 className='text-2xl font-semibold bg-white w-fit py-2 px-3'> Description</h2>
                        </div>
                        <div className='p-3 flex flex-col gap-3'>
                        <p className='text-gray-600'>Automatic Revolving Doors have been developed to meet all market requirements in term of security in public resorts. It offers more flexibility and more comfort of use. Combining technical performance and safe design, this new range is perfect for all public resorts and heavy traffic areas: shopping centres, airports, stations, etc.</p>

<p className='text-gray-600'>Maxwell have been developed to meet all market requirements in term of security in public resorts. It offers more flexibility and more comfort of use. Combining technical performance and safe design, this new range is perfect for all public resorts and heavy traffic areas: shopping centres, airports, stations, etc.Maxwell have been developed to meet all market requirements in term of security in public resorts. It offers more flexibility and more comfort of use. Combining technical performance and safe design, this new range is perfect for all public resorts and heavy traffic areas: shopping centres, airports, stations, etc.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ==== related products ===  */}
            <div>
                <Related_products/>
            </div>
            
        </>
    )
}

export default page
