"use client";
import React, { useState, useEffect } from 'react';
import axiosInstance from '@/helpers/axiosInstance';
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        subject: 'Contact Query',
        product_id: '', // Pre-populate if needed
        product_name: '', // Pre-populate if needed
        name: '',
        email: '',
        phone: '',
        comment: '',
    });

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/contacts/create', formData);
            toast.success('Your query has been submitted successfully', {
                position: 'bottom-left',
            });

            // Reset the form data
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'Contact Query', // Reset to default
                comment: '',
            });
        } catch (error) {
            toast.error(error.response?.data || error.message);
        }
    };

    if (!isMounted) return null;

    return (
        <>
            <section className='py-10'>
                <div className='container mx-auto px-3 grid gap-8 md:grid-cols-2'>
                    <div className='md:w-3/4 mx-auto'>
                        <h2 className="text-xl font-medium text-center">Our Nationwide Sales &amp; Technical Support Team is Ready to Assist You</h2>
                        <div className='w-full h-0.5 bg-red-200 mt-2'></div>

                        <div className='mt-5'>
                            <h2 className='text-xl font-semibold'>Our branch is available to visit in:</h2>
                            <ul className='list-disc pl-5 flex flex-col gap-1 mt-2'>
                                <li>Abu Dhabi</li>
                                <li>Dubai</li>
                                <li>Sharjah</li>
                                <li>Ajman</li>
                                <li>Ras-Al-Khaimah</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='basis-1/3 w-full footerBgImg'>
                            <div className='bg-gray-900 text-white p-4 py-5  rounded-md'>
                                <div className="text-center"><h1 className="text-3xl font-medium">Contact Us</h1><div className="w-full bg-gray-600 h-0.5 mb-6 mt-2"></div></div>
                                <form onSubmit={handleSubmitForm} className='flex flex-col gap-5'>
                                    {/* Hidden Fields */}
                                    <input type="hidden" value={formData.subject} name="subject" required />
                                    <input type="hidden" value={formData.product_id} name="product_id" required />
                                    <input type="hidden" value={formData.product_name} name="product_name" required />

                                    <input
                                        onChange={handleForm}
                                        value={formData.name}
                                        name="name"
                                        type="text"
                                        className='border w-full border-gray-300 rounded-md outline-none p-2 text-sm font-medium text-gray-700'
                                        placeholder='Name'
                                        required
                                    />
                                    <input
                                        onChange={handleForm}
                                        value={formData.email}
                                        name="email"
                                        type="email"
                                        className='border w-full border-gray-300 rounded-md outline-none p-2 text-sm font-medium text-gray-700'
                                        placeholder='Email'
                                        required
                                    />
                                    <input
                                        value={formData.phone}
                                        onChange={handleForm}
                                        name="phone"
                                        type="number"
                                        className='border w-full border-gray-300 rounded-md outline-none p-2 text-sm font-medium text-gray-700'
                                        placeholder='Mobile Number'
                                        required
                                    />
                                    <textarea
                                        value={formData.comment}
                                        name="comment"
                                        onChange={handleForm}
                                        rows={6}
                                        className='border w-full border-gray-300 outline-none p-2 rounded-md text-sm text-gray-700'
                                        placeholder='Message'
                                        required
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className='py-2 px-6 rounded-md bg-blue-500 text-lg text-white w-fit hover:bg-blue-600 transition'
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
