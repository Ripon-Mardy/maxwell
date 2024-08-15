import React from 'react'
import Image from 'next/image'

// ==== images === 
import brand1 from '../public/Image/brands/1.webp'
import brand2 from '../public/Image/brands/2.webp'
import brand3 from '../public/Image/brands/3.png'
import brand4 from '../public/Image/brands/4.png'
import brand5 from '../public/Image/brands/5.webp'
import brand6 from '../public/Image/brands/6.png'
import brand7 from '../public/Image/brands/7.webp'
import brand8 from '../public/Image/brands/8.webp'

const Brands = () => {

    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

  return (
    <>
    <section className='py-10'>
        <div className='container mx-auto px-3'>

            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>Our Top Brands</h1>
                <div className='w-28 h-1 bg-red-500 mx-auto mt-6'></div>
            </div>

            {/* ==== brands ====  */}
            <div className='grid grid-cols-3 gap-8 md:gap-5 pt-10 md:grid-cols-4 xl:grid-cols-5'>
                {brands.map((item) => (
                    <div className='flex '>
                        <Image className=' aspect-auto object-contain mix-blend-color-burn mx-auto' src={item} width={140} height={140} alt='brands' />
                    </div>
                ))}
            </div>

        </div>
    </section>
    </>
  )
}

export default Brands
