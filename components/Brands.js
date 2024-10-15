'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Loading from './Loading';
import axiosInstance from '@/helpers/axiosInstance';

const Brands = () => {
    const [brandsList, setBrandsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrandsList = async () => {
            try {
                const response = await axiosInstance.get('/categories?taxonomy_type=product_brands');
                setBrandsList(response.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBrandsList();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <section className='py-10'>
                <div className='container mx-auto px-3'>

                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold'>Our Top Brands</h1>
                        <div className='w-28 h-1 bg-red-500 mx-auto mt-6'></div>
                    </div>

                    {/* ==== brands ====  */}
                    <div className='grid grid-cols-3 gap-8 md:gap-5 pt-10 md:grid-cols-4 xl:grid-cols-8'>
                        {brandsList.map((brand, index) => (
                            <div key={index} className='flex flex-wrap flex-row'>
                                <Link href={`/category/${brand?.slug}`}>
                                    <Image src={brand?.image} className='aspect-auto object-contain mix-blend-color-burn mx-auto' width={400} height={400} alt={brand?.name} priority={false} />
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Brands
