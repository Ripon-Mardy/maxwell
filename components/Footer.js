'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axiosInstance from '@/helpers/axiosInstance';
import { getMetaValueByMetaName } from '@/helpers/metaHelpers';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

import automaticdu from '@/public/images/automaticdooruae.jpeg';

const Footer = () => {
  const [settings, setSettings] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  // Function to fetch menu items
  const fetchMenuItems = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/menus');
      setMenuItems(response.data.data[0].items);
    } catch (error) {
      console.log('Failed to fetch menu:', error.message);
    }
  }, []);

  // Fetch settings and menu items on component mount
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

  // Use helper method to get specific meta values with fallback
  const facebookLink = getMetaValueByMetaName(settings, 'facebook_url') || '#';
  const instagramLink = getMetaValueByMetaName(settings, 'instagram_url') || '#';
  const linkedinLink = getMetaValueByMetaName(settings, 'linkedin_url') || '#';
  const twitterLink = getMetaValueByMetaName(settings, 'twitter_url') || '#';

  // Contact details with fallbacks
  const hotline = getMetaValueByMetaName(settings, 'company_phone') || '052 730 6525';
  const email = getMetaValueByMetaName(settings, 'company_email') || 'info@mail.com';
  const address = getMetaValueByMetaName(settings, 'footer_content') || 'Your Address Here';
  const mapLink = getMetaValueByMetaName(settings, 'office_location') || '#'; // Update this if you have a map link

  return (
    <footer className='bg-footerBackgroundColor'>
      <div className='py-10 footerBgImg'>
        <div className='container mx-auto px-3 grid gap-10 md:grid-cols-2 xl:grid-cols-4'>
          <div className='flex flex-col gap-3 items-center text-center'>
            <Link href={'/'}>
              <Image
                src={automaticdu}
                width={100}
                height={100}
                alt='Automatic Door UAE'
              />
            </Link>
            <p className='text-white'>Automatic Door UAE</p>
            <p className='text-sm text-white'>LLC. © 2020 All rights reserved.</p>
            <div className='flex items-center gap-3 text-white justify-center'>
              <h1>Follow us</h1>
              <Link href={facebookLink} target="_blank" className='text-lg cursor-pointer'><FaFacebook /></Link>
              <Link href={linkedinLink} target="_blank" className='text-lg cursor-pointer'><FaLinkedin /></Link>
              <Link href={instagramLink} target="_blank" className='text-lg cursor-pointer'><FaInstagram /></Link>
              <Link href={twitterLink} target="_blank" className='text-lg cursor-pointer'><FaTwitter /></Link>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-semibold text-yellow-300'>
              <Link href={mapLink}>Quick Navigations</Link>
            </h2>
            {menuItems.map((item, index) => (
              <Link href={item.link} key={index} className='uppercase font-medium hover:text-red-600 py-1 pl-0 text-paracolor'>
                {item.label}
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl capitalize text-yellow-300 font-semibold'>Contact Details</h2>
            <p className='text-paracolor'>{address}</p>
            <h3 className='text-yellow-300 font-semibold text-xl'>Hotline:</h3>
            <Link className='text-paracolor' href={`tel:${hotline}`}>{hotline}</Link>
            <h3 className='text-yellow-300 font-semibold text-xl'>Email:</h3>
            <Link className='text-paracolor' href={`mailto:${email}`}>{email}</Link>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-semibold text-yellow-300'><Link href={mapLink}>Find Us</Link></h2>
            {/* You can add additional info here if needed */}
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-600"></div>
      <div className="container mx-auto pt-2 flex flex-col md:flex-row items-center justify-center text-sm text-gray-400 pb-2">
        <p className="mb-2 md:mb-0">All Rights Reserved © Automatic Doors.</p>
        <p className="flex items-center">
          &nbsp; Developed By
          <Link
            className="text-green-600 ml-1"
            href={"https://mathmozo.com"}
            target="_blank"
          >
            Mathmozo IT
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
