'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// === images ===
import maxwellDorrCustomer from '../public/Image/Maxwell-Doors-Customer-Support.png'
import maxwellDoorLogo from '../public/Image/Maxwell-Automatic-Doors-LLC-Logo.jpg'

// === icons === 
import logo1 from '../public/Image/icons/automatic-doors-Operators-icon-Dark.png'

// === icons ===
import { FaFacebook, FaLinkedin, FaInstagram, FaPlus } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [tabNumber, setTabnumber] = useState(null);

  const handlefooterMenu = (tabnumber) => {
    setIsFooterOpen(!isFooterOpen)
    setTabnumber(tabnumber)
    console.log(tabNumber);

  }

  return (
    <>
      <footer className=' bg-footerBackgroundColor'>
        <div className='container mx-auto px-3 grid md:grid-cols-2 xl:grid-cols-4 md:gap-8 gap-6 py-12'>
          {/* == footer 1 ===  */}
          <div className='flex flex-col gap-2'>
            <h1 className='text-textHeadingColor text-3xl font-semibold'>
              Dubai
            </h1>
            <div className='flex flex-col gap-2'>
              <div className='text-sm'>
                <span className='text-gray-400'>HOTLINE:</span> <br />
                <Link className='text-white' href={'#'}>
                  052 730 6525
                </Link>
              </div>
              <div className='text-sm'>
                <span className='text-gray-400'>SEND AN EMAIL:</span> <br />
                <Link className='text-white' href={'#'}>
                  dxb@maxwelldoor.ae
                </Link>
              </div>
            </div>
            <p className='text-paracolor mt-4 text-sm uppercase border-t border-gray-700 pt-2'>
              Office 21, Al Nasirya Building, Damascus Street – Al Qusais,
              Industrial Area 1, Dubai – UAE.
            </p>
          </div>
          {/* === end footer 1 ==  */}
          {/* === footer 2 ===  */}
          <div className='flex flex-col gap-2'>
            <h1 className='text-textHeadingColor text-3xl font-semibold'>
              Abu Dubai
            </h1>
            <div className='flex flex-col gap-2'>
              <div className='text-sm'>
                <span className='text-gray-400'>HOTLINE:</span> <br />
                <Link className='text-white' href={'#'}>
                  052 730 6525
                </Link>
              </div>
              <div className='text-sm'>
                <span className='text-gray-400'>SEND AN EMAIL:</span> <br />
                <Link className='text-white' href={'#'}>
                  ad@maxwelldoor.ae
                </Link>
              </div>
            </div>
            <p className='text-paracolor mt-4 text-sm uppercase border-t border-gray-700 pt-2'>
              OFFICE NO. 12, FIRST FLOOR, JUMBO BUILDING, MUSSAFAH INDUSTRIAL
              AREA M-43, MUSSAFAH, P.O.BOX: 8516, ABU-DHABI, UAE.
            </p>
          </div>
          {/* ===  end footer 2 ===  */}
          {/* === footer 3 ===  */}
          <div className='flex flex-col gap-2'>
            <h1 className='text-textHeadingColor text-3xl font-semibold'>
              Sharjah & Ajman
            </h1>
            <div className='flex flex-col gap-2'>
              <div className='text-sm'>
                <span className='text-gray-400'>HOTLINE:</span> <br />
                <Link className='text-white' href={'#'}>
                  052 730 6525
                </Link>
              </div>
              <div className='text-sm'>
                <span className='text-gray-400'>SEND AN EMAIL:</span> <br />
                <Link className='text-white' href={'#'}>
                  shj@maxwelldoor.ae
                </Link>
              </div>
            </div>
            <p className='text-paracolor mt-4 text-sm uppercase border-t border-gray-700 pt-2'>
              E 311 – Sheikh Mohammed Bin Zayed Rd – Near National Paints – Al
              Sharjah & AJMAN INDUSTRIAL AREA, P.O.BOX: 82715, AJMAN, UAE.
            </p>
          </div>
          {/* ==== end footer 3 ===  */}
          {/* ==== Footer 4 ===  */}
          <div className='flex flex-col gap-2'>
            <h1 className='text-textHeadingColor text-3xl font-semibold'>
              India
            </h1>
            <div className='flex flex-col gap-2'>
              <div className='text-sm'>
                <span className='text-gray-400'>HOTLINE:</span> <br />
                <Link className='text-white' href={'#'}>
                  +91 90522 21035
                </Link>
              </div>
              <div className='text-sm'>
                <span className='text-gray-400'>SEND AN EMAIL:</span> <br />
                <Link className='text-white' href={'#'}>
                  info@maxwellautodoors.com
                </Link>
              </div>
            </div>
            <p className='text-paracolor mt-4 text-sm uppercase border-t border-gray-700 pt-2'>
              MAXWELL AUTOMATIC DOORS INDIA PVT, LTD. 1st FLOOR, OFFICE NO.
              167/1&2, SS COMPLEX, N.R ROAD, DAVANAGERE, P.O.BOX: 577001,
              KARNATAKA, INDIA.
            </p>
          </div>
          {/* === end footer 4 ===  */}
        </div>

        <div className=' py-5 bg-[#C0B3A0]'>
          <div className='container mx-auto px-3 flex flex-col flex-wrap md:flex-row md:items-center md:justify-between gap-5'>
            <div className='flex items-center gap-4'>
              <Image
                src={maxwellDorrCustomer}
                width={150}
                height={150}
                alt='maxwellDoorCustomer'
              />
              <div className='text-white flex flex-col'>
                <h1 className='text-textsecondHeadingColor text-xl font-semibold'>
                  DO YOU HAVE ANY ENQUIRY?
                </h1>
                <p className='text-sm text-black'>
                  Call us or send us an email for any inquiries.{' '}
                  <Link className='text-green-600 font-semibold' href={'#'}>
                    Whatsapp
                  </Link>{' '}
                </p>
              </div>
            </div>
            <div>
              <h1 className='text-xl text-textsecondHeadingColor font-semibold'>
                CALL US NOW
              </h1>
              <Link href={'#'}>+971 52 730 6525</Link>
            </div>
            <div>
              <Link
                className='bg-footerBackgroundColor text-white p-3 text-sm uppercase rounded-sm hover:bg-red-600  duration-200 ease-in-out'
                href={'#'}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        <div className='py-10 footerBgImg'>
          <div className='container mx-auto px-3 grid gap-10 md:grid-cols-2 xl:grid-cols-4'>

            <div className='flex flex-col gap-3'>
              <Image
                src={maxwellDoorLogo}
                width={100}
                height={100}
                alt='maxwelldoor'
              />
              <p className='text-white'>Maxwell Automatic Doors Co.</p>
              <p className='text-sm text-white'>LLC. © 2020 All rights reserved.</p>
              <h1 className='text-white text-sm'>Nationwide Sales & Technical Support</h1>

              <div className='flex items-center gap-3 text-white'>
                <h1>Follow us</h1>
                <Link href={'#'} className='text-lg cursor-pointer'>
                  <FaFacebook />
                </Link>
                <Link href={'#'} className='text-lg cursor-pointer'>
                  <FaLinkedin />
                </Link>
                <Link href={'#'} className='text-lg cursor-pointer'>
                  <FaInstagram />
                </Link>
                <Link href={'#'} className='text-lg cursor-pointer'>
                  <FaXTwitter />
                </Link>
              </div>
            </div>

            <div className='flex gap-2 flex-col'>
              <Link href={'#'} className='text-xl font-semibold text-paracolor'>Entrance Automation</Link>
              <Link href={'#'} className='text-xl font-semibold text-paracolor'>Automation Accessories</Link>
              <Link href={'#'} className='text-xl font-semibold text-paracolor'>Access Control</Link>
              <Link href={'#'} className='text-xl font-semibold text-paracolor'>Automatic Door & Gate Hardware</Link>

            </div>


            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl capitalize text-yellow-300 font-semibold'>Contact Deatils</h1>
              <h2 className='text-lg font-semibold text-paracolor'>Corporate Office:</h2>
              <p className='text-paracolor'>Maxwell Automatic Doors Co. LLC. <br />

                Office 21, Al Nasirya Building, <br />

                Damascus Street – Al Qusais, <br />

                Industrial Area 1, <br />

                Dubai, UAE.</p>
              <h3 className='text-yellow-300 font-semibold text-xl'>Phone No:</h3>
              <Link className='text-paracolor' href={'#'}> +971 52 730 6525</Link>
              <h1 className='text-yellow-300 font-semibold text-xl'>Email:</h1>
              <Link className='text-paracolor font-semibold' href={'#'}>✉ info@maxwelldoor.ae</Link>
            </div>


            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-semibold text-yellow-300'><Link href={'#'}>Map</Link> Find Us</h1>
              <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.5184045788656!2d75.92410058373045!3d14.470873752621658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba25f62dda192f%3A0x3c3db91491f0266d!2sMaxwell%20Automatic%20Doors%20India!5e1!3m2!1sen!2sbd!4v1723637545473!5m2!1sen!2sbd" width="600" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
