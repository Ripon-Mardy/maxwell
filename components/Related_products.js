import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ==== product list image === 
import product1 from '../public/Image/product list image/product1.jpg'
import product2 from '../public/Image/product list image/product2.jpg'
import product3 from '../public/Image/product list image/product3.png'

const Related_products = () => {

    const productList = [
        {
            "productImage" : product1,
            "productTitle" : "Automatic Swing Door"
        },
        {
            "productImage" : product2,
            "productTitle" : "Automatic Swing Door"
        },
        {
            "productImage" : product3,
            "productTitle" : "Automatic Swing Door"
        }
    ]


  return (
    <>
    <section className='py-10'>
        <div className='container mx-auto px-3'>

            <div>
                <h1 className='text-2xl capitalize text-red-600 font-semibold'>Related products</h1>
                <div className='w-full h-0.5 bg-red-300 mb-5 mt-1'></div>
            </div>

<div className='grid grid-cols-2 md:grid-cols-5 gap-7 py-6'>
    {
        productList.map((list) => (
            <div className='border border-r-gray-300 p-2 rounded-md py-4'>
                <Image className='w-full object-cover rounded-sm hover:-translate-y-1 duration-200 ease-in-out' src={list.productImage} width={100} height={100} alt='product' />
                <h1 className='text-center my-2 text-gray-700 text-lg font-semibold border-b border-b-gray-300 pt-1'> {list.productTitle} </h1>
               <div className='text-center'>
               <Link href={'#'} className='bg-yellow-300 font-semibold p-1 px-4 border border-gray-300 inline-block'>Read More</Link>
               </div>
            </div>
        ))
    }
</div>

        </div>
    </section>
    </>
  )
}

export default Related_products
