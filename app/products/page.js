import React from 'react'
import Image from 'next/image'


// ==== icons image === 
import icon1 from '../../public/Image/icons/automatic-doors-Operators-icon-Dark.png'

// === icons === 
import { IoMdCheckboxOutline } from "react-icons/io";

const page = () => {
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



{/* ===== product list ====  */}

<section>
    <div className='container mx-auto'>




    </div>
</section>


    </>
  )
}

export default page
