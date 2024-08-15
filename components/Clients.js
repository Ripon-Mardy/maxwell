import React from 'react'
import Image from 'next/image'

// ==== clients ==
import c1 from '../public/Image/clients/1.png'
import c2 from '../public/Image/clients/2.png'
import c3 from '../public/Image/clients/3.png'
import c4 from '../public/Image/clients/4.png'
import c5 from '../public/Image/clients/5.jpg'
import c6 from '../public/Image/clients/6.jpg'
import c7 from '../public/Image/clients/7.png'
import c8 from '../public/Image/clients/8.jpg'
import c9 from '../public/Image/clients/9.png'
import c10 from '../public/Image/clients/10.png'
import c11 from '../public/Image/clients/11.jpg'
import c12 from '../public/Image/clients/12.png'
import c13 from '../public/Image/clients/13.png'
import c14 from '../public/Image/clients/14.png'
import c15 from '../public/Image/clients/15.jpg'
import c16 from '../public/Image/clients/16.jpg'
import c17 from '../public/Image/clients/17.png'
import c18 from '../public/Image/clients/18.png'
import c19 from '../public/Image/clients/19.png'
import c20 from '../public/Image/clients/20.png'
import c21 from '../public/Image/clients/21.png'
import c22 from '../public/Image/clients/22.png'
import c23 from '../public/Image/clients/23.png'
import c24 from '../public/Image/clients/24.jpg'

const Clients = () => {
  const clientsList = [
    c1,
    c2,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
    c21,
    c22,
    c23,
    c24
  ]

  return (
    <>
      <section className='py-10'>
        <div className='container mx-auto px-3'>

{/* ===== clients title ====  */}
<div className='text-center'>
    <h1 className='text-3xl font-semibold'>Our Clients</h1>
    <div className='w-28 h-1 bg-red-500 mx-auto mt-6'></div>
</div>

{/* ==== clients list ===  */}

<div className='grid grid-cols-3 md:grid-cols-6 xl:grid-cols-7 md:gap-10 gap-7 pt-10'>

{clientsList.map((list) => (
    <div>
        <Image className='w-full object-cover' src={list} width={100} height={100} alt='clients' />
    </div>
))}

</div>



        </div>
      </section>
    </>
  )
}

export default Clients
