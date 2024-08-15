import React from 'react'
import Contact_form from './Contact_form'

const Contact = () => {
  return (
    <>
    <section className='py-10'>
        <div className='container mx-auto px-3 grid gap-8 md:grid-cols-2'>

            <div className='md:w-3/4 mx-auto'>
                <h1 className='text-2xl font-medium text-center'>Our Nationwide Sales & Technical <br /> Support is on The Line.</h1>
                <div className='w-full h-0.5 bg-red-200 mt-2 '></div>

                <div className='mt-5'>
                    <h1 className='text-xl font-semibold'>Our Branch is Available to Visit in:</h1>
                    <ul className='list-disc pl-5 flex flex-col gap-1 mt-2'>
                        <li>Abu Dhabi</li>
                        <li>Dubai</li>
                        <li>Sharjah</li>
                        <li>Ajman</li>
                        <li>Ras-Al-Khaimah</li>
                    </ul>
                </div>
            </div>

            {/* === contact form ===  */}

            <div>
                <Contact_form/>
            </div>

        </div>
    </section>
    </>
  )
}

export default Contact
