"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axiosInstance from "@/helpers/axiosInstance"; // Import your axios instance

const ServiceSection = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const servicesList = async () => {
            try {
                const response = await axiosInstance.get("/posts?term_type=services"); // Use axiosInstance for the request
                setServices(response.data.data); // Set the data from the response
            } catch (error) {
                setError(error.message); // Handle any errors
            }
        };

        servicesList();
    }, []);


    return (
        <>
            <section className='py-10'>
                <div className='container mx-auto px-3'>

                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold mb-5'>Our Automation Expertise</h1>
                        <p className='text-lg text-gray-500 font-semibold'>Maxwell goal is providing our customers with excellent service while delivering a quality product and services accompanied with integrity, professionalism, reliability, and satisfaction. We practice diversity in order to meet our customers’ needs. </p>
                        <div className='w-28 h-1 bg-red-500 mx-auto mt-6'></div>
                    </div>


                    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 pt-10'>
                        {services.map((product) => (
                            <div key={product?.id}>
                                <Link href={`/${product?.slug}`}>                                    
                                    <Image
                                        src={product.featured_image}
                                        width={200}
                                        height={200}
                                        className="w-full rounded-sm hover:-translate-y-1 duration-200 ease-in-out"
                                        alt={product?.name}
                                    />
                                </Link>
                                <Link href={`/${product?.slug}`} className='text-lg md:text-xl font-bold my-2 block hover:text-red-500 duration-200 ease-in-out'>
                                    {product?.name}
                                </Link>
                                <p className='hidden md:block text-gray-500 text-lg font-medium'>
                                    {typeof product?.extraFields?.find(
                                        (field) => field.meta_name === "service_short_description"
                                    )?.meta_value === "string"
                                        ? product.extraFields
                                            .find((field) => field.meta_name === "service_short_description")
                                            .meta_value.slice(0, 120) // Just slice the string, no split or join
                                        : ""}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default ServiceSection
