"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Loading from "./Loading";
import axiosInstance from "@/helpers/axiosInstance"; // Assuming axiosInstance is set up

const RelatedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosInstance.get("/posts?term_type=product");
                setProducts(res.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div><Loading /></div>;
    }

    if (error) {
        return (
            <div className="flex items-center justify-center">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <section className='py-10'>
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-2xl capitalize font-semibold'>Related products</h1>
                    <div className='w-full h-0.5 bg-red-300 mb-5 mt-1'></div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-5 gap-5 py-6'>
                    {products.map((product, index) => (
                        <div key={index} className='border border-gray-300'>
                            <Link href={`/products/${product?.slug}`} className="block">
                                <Image
                                    className='w-full object-cover rounded-sm hover:-translate-y-1 duration-200 ease-in-out'
                                    src={product?.featured_image}                                    
                                    width={300}
                                    height={300}
                                    alt={product?.name}
                                />
                                <h1 className='text-center text-gray-700 text-lg font-semibold pt-1'>
                                    {product?.name}
                                </h1>
                                <div className='text-center pb-2'>
                                    <Link href={`/products/${product?.slug}`} className='bg-yellow-300 hover:bg-black hover:text-yellow-300 font-semibold md:shadow-md p-1 px-4 border border-yellow-500 inline-block'>
                                        Read More
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RelatedProducts;
