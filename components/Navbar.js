'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

// ==== images ==== 
import maxwelllogo from './../public/Image/maxwelllogo.webp'
import mobileLogo from './../public/Image/mobileLogo.webp'
import us from '../public/Image/en-us.png'
import ar from '../public/Image/ar.png'
import mobileMaxwellLogo from '../public/Image/Maxwell-Automatic-Doors-LLC-Logo.jpg'

// ==== icons ===== 
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { FaFacebookF, FaLinkedin, FaYoutube, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const handlemenuBar = () => {
        setIsOpen(!isOpen);
    }

    const variants =
    {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 }
    }


    return (
        <>

            <header className='py-1'>
                <div className='container mx-auto '>

                    <div className='flex items-center justify-between px-3'>
                        <div className='w-fit'>
                            <Image className='hidden md:block' src={maxwelllogo} width={200} height={200} alt='maxwelllogo' />
                            <Image className='md:hidden' src={mobileLogo} width={200} height={200} alt='maxwelldoor' />
                        </div>

                        {/* ==== mbile bar===  */}
                        <div onClick={handlemenuBar} className='lg:hidden'>
                            <FiMenu className='text-2xl cursor-pointer font-bold' />
                        </div>



                        {/* ======== mobile menu =====  */}
                       <AnimatePresence>
                       {
                              isOpen && (
                                <div className='absolute left-0 top-0 w-full h-full bg-black bg-opacity-75 overflow-x-hidden bg-fixed'>



                                        <motion.div initial={{ x: "100%" }}
                                            animate={{ x: 0 }}
                                            transition={{ duration: 0.3 }}
                                            exit={{ x: "100%" }} className='absolute right-0 top-0 w-1/2 backdrop-blur-xl text-white h-screen py-8 overflow-y-auto bg-fixed z-10'>
                                            {/* === mobile crose ===  */}
                                            <div onClick={handlemenuBar} className='absolute left-2 top-2 text-xl cursor-pointer'>
                                                <FaTimes />
                                            </div>
                                            {/* ---- end mobile crose ===  */}
                                            <div className='text-center'>
                                                <Image className='mx-auto' src={mobileMaxwellLogo} width={100} height={100} alt='maxWelldoor' />
                                                <button className='bg-yellow-400 p-2 px-6 rounded-sm text-center border mt-4 uppercase hover:bg-white hover:text-black duration-100 ease-in-out hover:border font-medium'>Call us now</button>
                                            </div>
                                            <div className='flex flex-col gap-2 py-4'>
                                                <Link href={'#'} className='uppercase font-medium hover:text-red-600 hover:bg-black py-3 pl-5'>Home</Link>
                                                <Link href={'#'} className='uppercase font-medium hover:text-red-600 hover:bg-black py-3 pl-5'>about</Link>
                                                <Link href={'#'} className='uppercase font-medium hover:text-red-600 hover:bg-black py-3 pl-5'>products</Link>
                                                <Link href={'#'} className='uppercase font-medium hover:text-red-600 hover:bg-black py-3 pl-5'>repair services</Link>
                                                <Link href={'#'} className='uppercase font-medium hover:text-red-600 hover:bg-black py-3 pl-5'>helpful blogs</Link>
                                                <Link href={'#'} className='uppercase font-medium hover:text-red-600 hover:bg-black py-3 pl-5'>contact</Link>
                                            </div>
                                            {/* === social ===  */}
                                            <div className='flex items-center justify-center gap-6'>
                                                <Link href={'#'} className='text-xl cursor-pointer hover:text-red-600 duration-200 ease-in-out'><FaFacebookF /></Link>
                                                <Link href={'#'} className='text-xl cursor-pointer hover:text-red-600 duration-200 ease-in-out'><FaLinkedin /></Link>
                                                <Link href={'#'} className='text-xl cursor-pointer hover:text-red-600 duration-200 ease-in-out'><FaYoutube /></Link>
                                            </div>
                                            {/* === end social ===  */}
                                        </motion.div>

                                </div>
                            )
                        }
                       </AnimatePresence>
                        {/* ======= end mobile menu ======  */}



                        {/* ==== end mobile bar ===  */}
                        <div className='hidden lg:flex md:items-center md:justify-between md:gap-40'>
                            <div className=' hidden lg:flex items-center justify-center gap-2'>
                                <FaPhoneAlt className='text-2xl text-red-600' />
                                <div className='flex flex-col'>
                                    <span className='text-xl'>Reach Us</span>
                                    <a href="#">052 730 6525</a>
                                </div>
                            </div>

                            <div className=' hidden md:flex items-center justify-center gap-2'>
                                <CiMail className='text-2xl text-red-600' />
                                <div className='flex flex-col'>
                                    <span className='text-xl'>Write Us</span>
                                    <a href="#">info@maxwelldoor.ae</a>
                                </div>
                            </div>

                            <div className='hidden md:flex items-center justify-center gap-2'>
                                <IoIosTimer className='text-2xl text-red-600' />
                                <div className='flex flex-col'>
                                    <span className='text-xl'>24/7 Service</span>
                                    <a href="#">Nationwide Sales Support</a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='hidden md:block'>
                        {/* <marquee behavior="" direction=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, non.</p></marquee> */}
                    </div>

                </div>
            </header>

            <nav className='bg-gray-800 text-white py-4 hidden lg:block'>
                <div className='container mx-auto px-3'>
                    <div className='flex items-center justify-between'>
                        <Link href={'#'} className='uppercase font-medium hover:text-red-600'>Home</Link>
                        <Link href={'#'} className='uppercase font-medium hover:text-red-600'>about</Link>
                        <Link href={'#'} className='uppercase font-medium hover:text-red-600'>products</Link>
                        <Link href={'#'} className='uppercase font-medium hover:text-red-600'>repair services</Link>
                        <Link href={'#'} className='uppercase font-medium hover:text-red-600'>helpful blogs</Link>
                        <Link href={'#'} className='uppercase font-medium hover:text-red-600'>contact</Link>
                        <div className='flex items-center justify-center gap-3'>
                            <Link href={'#'} className='flex items-center justify-center gap-1'>
                                <Image src={us} width={20} height={20} alt='us' />
                                <span>US</span>
                            </Link>
                            <Link href={'#'} className='flex items-center justify-center gap-1'>
                                <Image src={ar} width={20} height={20} alt='ar' />
                                <span>AR</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
