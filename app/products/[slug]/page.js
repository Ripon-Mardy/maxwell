'use client'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RelatedProducts from '@/components/RelatedProducts'
import Loading from '@/components/Loading'
import axiosInstance from '@/helpers/axiosInstance'
import GetAQuote from '@/components/GetAQuote'
import { SlSizeFullscreen } from 'react-icons/sl'
import { IoIosClose } from 'react-icons/io'
import { IoMdCheckboxOutline } from "react-icons/io";

const ProductSingle = ({ params }) => {
    const slug = params.slug;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [productImage, setProductImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axiosInstance.get(`/post?slug=${slug}`);
                const productData = res.data.data;
                setProduct(productData);
                setProductImage(productData.featured_image || productData?.extra_fields[2]?.meta_value[0]);
            } catch (err) {
                setError("Error fetching product: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [slug]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleNextImage = () => {
        if (product.extra_fields[2]?.meta_value) {
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % product.extra_fields[2]?.meta_value.length;
                setProductImage(product.extra_fields[2]?.meta_value[nextIndex]);
                return nextIndex;
            });
        }
    };

    const handlePrevImage = () => {
        if (product.extra_fields[2]?.meta_value) {
            setCurrentImageIndex((prevIndex) => {
                const previousIndex = (prevIndex - 1 + product.extra_fields[2]?.meta_value.length) % product.extra_fields[2]?.meta_value.length;
                setProductImage(product.extra_fields[2]?.meta_value[previousIndex]);
                return previousIndex;
            });
        }
    };

    const openFullScreen = () => setIsFullScreen(true);
    const closeFullScreen = () => setIsFullScreen(false);

    const openPopUp = () => {
        setIsFormVisible(true);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    return (
        <>
            <section className='productsBanner py-10'>
                <div className='container mx-auto px-3'>
                    <div className='text-center'>
                        {/* <Image className='mx-auto' src={'/Image/icons/automatic-doors-Operators-icon-Dark.png'} width={50} height={60} alt='maxwelldoor' /> */}
                        <h3 className='text-2xl md:text-3xl tracking-wide font-semibold text-white my-1 mt-3'>
                            <Link className='text-white' href={`/category/${product?.categories[0]?.slug}`}>
                                {product?.categories[0]?.name}
                            </Link>
                        </h3>
                        <h3 className='text-xl font-medium text-white'>
                            {product?.categories[0]?.description}
                        </h3>
                    </div>
                    {product.categories && product.categories.length > 0 && product.categories[0].meta_data.length > 0 && (
                        <div className='mt-8 md:w-2/3 md:mx-auto'>
                            <h1 className='text-white font-semibold text-xl mb-3'>Features:</h1>
                            {product.categories[0].meta_data
                                .filter(meta => meta.meta_name === 'category_features')
                                .map(meta => (
                                    <div key={meta.id} className='list-disc text-white pl-5 flex flex-col gap-2 text-sm md:text-lg'>
                                        <div dangerouslySetInnerHTML={{ __html: meta.meta_value }} />
                                    </div>
                                ))}
                        </div>
                    )}
                    <div class="mt-6 md:mt-10 flex items-center justify-between gap-2 flex-wrap border-2 border-green-600 border-dashed p-2 md:p-4">
                        <p class="flex items-center gap-5 text-white">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xl text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"></path>
                            </svg>
                            ISO9001 Certified Co.
                        </p>
                        <p class="flex items-center gap-5 text-white">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xl text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"></path>
                            </svg>
                            Fastest 24/7 Technical Assistance.
                        </p>
                        <p class="flex items-center gap-5 text-white">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xl text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"></path>
                            </svg>
                            Nationwide Sales Network
                        </p>
                        <p class="flex items-center gap-5 text-white">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xl text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"></path>
                            </svg>
                            Highly qualified engineers and technicians.
                        </p>
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-3 md:px-0 pt-3">
                <div className='flex items-center gap-1 text-sm mb-5'>
                    <Link className='underline text-paracolor' href={'/'}>Home</Link> /
                    <Link className='underline text-paracolor' href={`/category/${product?.categories[0]?.slug}`}>
                        {product?.categories[0]?.name}
                    </Link> /
                    <span>{product?.name || 'Product'}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-6 pt-4">
                    <div className="basis-2/5">
                        <div className="flex flex-col items-center">
                            <div className="relative mb-3">
                                <Image
                                    src={productImage}
                                    alt="Main Product"
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover"
                                />
                                <span
                                    onClick={openFullScreen}
                                    className="absolute right-3 bottom-3 text-xl border border-gray-300 p-1 cursor-pointer rounded-md text-white bg-gray-600"
                                >
                                    <SlSizeFullscreen />
                                </span>
                            </div>

                            {/* Fullscreen view */}
                            {isFullScreen && (
                                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
                                    <div className="relative max-w-full max-h-full">
                                        <img
                                            src={productImage}
                                            alt="Full Screen"
                                            className="w-full h-auto max-h-[90vh] object-cover"
                                        />
                                        <button
                                            className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
                                            onClick={closeFullScreen}
                                        >
                                            <IoIosClose />
                                        </button>

                                        <button
                                            className="absolute left-4 top-1/2 bg-gray-800 text-white p-2 rounded-full"
                                            onClick={handlePrevImage}
                                        >
                                            Prev
                                        </button>
                                        <button
                                            className="absolute right-4 top-1/2 bg-gray-800 text-white p-2 rounded-full"
                                            onClick={handleNextImage}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Product Thumbnails */}
                            <div className="flex space-x-4">
                                {/* Featured Image */}
                                {product.featured_image && (
                                    <Image
                                        src={product.featured_image}
                                        width={100}
                                        height={100}
                                        alt="Featured Product"
                                        onClick={() => setProductImage(product.featured_image)}
                                        className={`cursor-pointer w-16 h-16 object-cover border ${product.featured_image === productImage ? 'border-blue-500' : 'border-gray-300'}`}
                                    />
                                )}

                                {/* Extra Images */}
                                {product.extra_fields[2]?.meta_value.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        width={100}
                                        height={100}
                                        alt={`Product ${index + 1}`}
                                        onClick={() => setProductImage(image)}
                                        className={`cursor-pointer w-16 h-16 object-cover border ${image === productImage ? 'border-blue-500' : 'border-gray-300'}`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="basis-2/5">
                        <h1 className='text-2xl font-semibold'>{product?.name}</h1>
                        <div className='w-full h-0.5 my-3 bg-red-500'></div>
                        <p className='text-gray-600'>
                            {typeof product?.extra_fields?.find(
                                (field) => field.meta_name === "product_short_description"
                            )?.meta_value === "string"
                                ? product.extra_fields.find((field) => field.meta_name === "product_short_description").meta_value.slice(0, 310)
                                : ""}
                        </p>

                        {product?.extra_fields.find(field => field.meta_name === "product_model")?.meta_value && (
                            <div className="flex py-2">
                                <h5 className="w-40 text-gray-500">Model</h5>
                                <p className="w-full">{product?.extra_fields.find(field => field.meta_name === "product_model")?.meta_value}</p>
                            </div>
                        )}
                        {product?.extra_fields.find(field => field.meta_name === "origin")?.meta_value && (
                            <div className="flex py-2">
                                <h5 className="w-40 text-gray-500">Origin</h5>
                                <p className="w-full">{product?.extra_fields.find(field => field.meta_name === "origin")?.meta_value}</p>
                            </div>
                        )}

                        {product?.extra_fields.find(field => field.meta_name === "condition")?.meta_value && (
                            <div className="flex py-2">
                                <h5 className="w-40 text-gray-500">Condition</h5>
                                <p className="w-full">{product?.extra_fields.find(field => field.meta_name === "condition")?.meta_value}</p>
                            </div>
                        )}

                        {product?.extra_fields.find(field => field.meta_name === "warranty")?.meta_value && (
                            <div className="flex py-2">
                                <h5 className="w-40 text-gray-500">Warranty</h5>
                                <p className="w-full">{product?.extra_fields.find(field => field.meta_name === "warranty")?.meta_value}</p>
                            </div>
                        )}

                        {product?.extra_fields.find(field => field.meta_name === "price")?.meta_value && (
                            <div className="flex py-2">
                                <h5 className="w-40 text-gray-500">Price</h5>
                                <p className="w-full">
                                    <span className="text-xl font-bold">BDT {product?.extra_fields.find(field => field.meta_name === "price")?.meta_value}</span>
                                </p>
                            </div>
                        )}

                        {product?.extra_fields.find(field => field.meta_name === "purchase_notes")?.meta_value && (
                            <div>
                                <p>
                                    {product?.extra_fields.find(field => field.meta_name === "purchase_notes")?.meta_value}
                                </p>
                            </div>
                        )}
                        <Link href={'#'} onClick={openPopUp} className='bg-yellow-400 p-2 rounded-sm inline-block my-4 px-4 font-semibold border border-gray-400'>Get a free quote</Link>
                    </div>
                    <div className="basis-1/4">
                        <video className='w-full rounded-sm' src="#" width={300} height={200} controls></video>
                        <h3 className='text-xl font-semibold capitalize mt-2'>Brand</h3>
                        <div className='w-full h-0.5 bg-red-200'>
                            {(() => {
                                const filteredCategories = product?.categories.filter(category => category.taxonomy_type === "product_brands");
                                return (
                                    <div>
                                        {filteredCategories.map(category => (
                                            <div key={category?.id} className="flex items-center gap-5">
                                                <Link href={`/category/${category?.slug}`}>
                                                    <Image
                                                        src={category?.media_url}
                                                        width={100}
                                                        height={100}
                                                        alt={category?.name}
                                                    />
                                                </Link>
                                                <Link href={`/category/${category?.slug}`}>
                                                    <h1 className="text-lg">{category?.name}</h1>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })()}
                        </div>
                    </div>

                </div>

                {/* Product Image Slider */}
                <div className="container mx-auto p-6 basis-[40%]">

                </div>
            </div>

            {/* Description Section */}
            <section className='py-10'>
                <div className='container mx-auto'>
                    <div className='border border-gray-300 rounded-md'>
                        <div className='bg-gray-100'>
                            <h2 className='text-lg font-semibold bg-white w-fit py-2 px-3'>Description</h2>
                        </div>
                        <div className='p-3'>
                            <p className='text-gray-600'>
                                <div dangerouslySetInnerHTML={{ __html: product?.description }} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <div className="container mx-auto px-3">
                <RelatedProducts />
            </div>

            {/* Get A Quote Popup */}
            <GetAQuote visible={isFormVisible} onClose={handleCloseForm} productName={product?.name} />
        </>
    );
}

export default ProductSingle;
