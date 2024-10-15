'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import axiosInstance from '@/helpers/axiosInstance';
import { debounce } from 'lodash';
import { getMetaValueByMetaName } from '@/helpers/metaHelpers';

// ==== images ==== 
import automaticdu from '@/public/images/automaticdooruae.png';
import moenalsaad from '@/public/images/logo.png';

// ==== icons ===== 
import { FaPhoneAlt, FaFacebookF, FaLinkedin, FaYoutube, FaTimes } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterProducts, setFilterProducts] = useState([]);
    const [settings, setSettings] = useState(null);

    // Contact details with fallbacks
    const hotline = getMetaValueByMetaName(settings, 'company_phone') || '052 730 6525';
    const email = getMetaValueByMetaName(settings, 'company_email') || 'info@mail.com';
    const address = getMetaValueByMetaName(settings, 'footer_content') || 'Your Address Here';
    const mapLink = getMetaValueByMetaName(settings, 'office_location') || '#'; // Update this if you have a map link

    const handlemenuBar = () => {
        setIsOpen(!isOpen);
    };

    const fetchMenuItems = useCallback(async () => {
        try {
            const response = await axiosInstance.get('/menus');
            setMenuItems(response.data.data[0].items);
        } catch (error) {
            console.log('Failed to fetch menu:', error.message);
        }
    }, []);

    const debouncedSearch = useCallback(debounce(async (searchTerm) => {
        try {
            const res = await axiosInstance.get("/posts?term_type=product");
            const products = res.data.data;
            const productFilter = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilterProducts(productFilter);
        } catch (error) {
            console.log("Error fetching products:", error.message);
        }
    }, 300), []);

    useEffect(() => {
        fetchMenuItems();
        axiosInstance.get('/frontend/settings')
            .then(response => {
                setSettings(response.data);
            })
            .catch(error => {
                console.error('Error fetching settings:', error);
            });
    }, [fetchMenuItems]);

    useEffect(() => {
        if (searchTerm) {
            debouncedSearch(searchTerm);
        } else {
            setFilterProducts([]);
        }

        return () => {
            debouncedSearch.cancel();
        };
    }, [searchTerm, debouncedSearch]);

    const variants = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    };

    return (
        <>
            <header className='py-1 md:header-gradient'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between px-3 border-b border-b-slate-400 md:border-b-0 md:border-white'>
                        <div className='w-fit'>
                            <Link href={'/'}>
                                <Image className='hidden md:block' src={moenalsaad} width={340} height={102} alt='automaticdu' />
                            </Link>
                            <Link href={'/'}>
                                <Image className='md:hidden' src={moenalsaad} width={250} height={102} alt='automaticdu' />
                            </Link>
                        </div>

                        {/* Mobile menu bar */}
                        <div onClick={handlemenuBar} className='lg:hidden'>
                            <FiMenu className='text-2xl cursor-pointer font-bold' />
                        </div>

                        {/* Mobile menu */}
                        <AnimatePresence>
                            {isOpen && (
                                <div className='absolute left-0 top-0 w-full h-full bg-black-900 overflow-x-hidden bg-fixed'>
                                    <motion.div
                                        initial={{ x: '100%' }}
                                        animate={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        exit={{ x: '100%' }}
                                        className='absolute right-0 top-0 w-1/2 backdrop-blur-xl bg-black text-white h-screen py-8 overflow-y-auto bg-fixed z-10'
                                    >
                                        <div onClick={handlemenuBar} className='absolute left-2 top-2 text-xl cursor-pointer'>
                                            <FaTimes />
                                        </div>
                                        <div className='text-center'>
                                            <Image className='mx-auto' src={automaticdu} width={100} height={100} alt='maxWelldoor' />
                                            <button className='bg-yellow-300 border-yellow-500 p-2 px-6 rounded-sm text-center border mt-4 uppercase hover:bg-white hover:text-black duration-100 ease-in-out hover:border font-medium'>
                                                Call us now
                                            </button>
                                        </div>
                                        <div className='flex flex-col gap-2 py-4'>
                                            {menuItems.map((item, index) => (
                                                <Link href={item.link} key={index} className='uppercase font-medium hover:text-red-600 hover:bg-black py-3 pl-5'>
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                        {/* Contact details */}
                                        <div className='flex flex-col gap-2 text-center'>
                                            <p className='text-sm'>{settings?.ph}</p>
                                            <p className='text-sm'>{email}</p>
                                        </div>
                                        {/* Social media icons */}
                                        <div className='flex items-center justify-center gap-6'>
                                            <Link href={'#'} className='text-xl cursor-pointer hover:text-red-600 duration-200 ease-in-out'><FaFacebookF /></Link>
                                            <Link href={'#'} className='text-xl cursor-pointer hover:text-red-600 duration-200 ease-in-out'><FaLinkedin /></Link>
                                            <Link href={'#'} className='text-xl cursor-pointer hover:text-red-600 duration-200 ease-in-out'><FaYoutube /></Link>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>

                        {/* Desktop info */}
                        <div className='hidden lg:flex md:items-center md:justify-between md:gap-40'>
                            <div className='hidden lg:flex items-center justify-center gap-2'>
                                <FaPhoneAlt className='text-2xl text-red-600' />
                                <div className='flex flex-col'>
                                    <span className='text-xl'>Reach Us</span>
                                    <a href={`tel:${hotline}`}>{hotline}</a>
                                </div>
                            </div>

                            <div className='hidden md:flex items-center justify-center gap-2'>
                                <CiMail className='text-2xl text-red-600' />
                                <div className='flex flex-col'>
                                    <span className='text-xl'>Write Us</span>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </div>
                            </div>

                            <div className='hidden md:flex items-center justify-center gap-2'>
                                <IoIosTimer className='text-2xl text-red-600' />
                                <div className='flex flex-col'>
                                    <span className='text-xl'>24/7 Service</span>
                                    Nationwide Sales Support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Desktop navigation */}
            <nav className='bg-gray-800 text-white py-4 hidden lg:block'>
                <div className='container mx-auto px-3'>
                    <div className='flex items-center justify-between'>
                        {menuItems.map((item, index) => (
                            <Link href={item.link} key={index} className='uppercase font-medium hover:text-red-600'>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
