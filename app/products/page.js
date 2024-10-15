'use client';
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Loading from "@/components/Loading";
import axiosInstance from "@/helpers/axiosInstance";
import GetAQuote from "@/components/GetAQuote";
// import CategorySection from "@/components/CategorySection";


// ==== Product List Section (Dynamic) ====
const Products = () => {
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle for categories accordion menu
  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const openPopUp = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  // Fetch products and categories on component mount
  useEffect(() => {
    const fetchProducts = async (retries = 3) => {
      try {
        const res = await axiosInstance.get("/posts?term_type=product");
        setProducts(res.data.data);
      } catch (error) {
        if (error.response?.status === 429 && retries > 0) {
          setTimeout(() => fetchProducts(retries - 1), 1000);
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    const fetchCategory = async () => {
      try {
        const res = await axiosInstance.get("/categories?taxonomy_type=categories&limit=40");
        setCategoryData(res.data.data);
      } catch (error) {
        setError('Failed to fetch categories');
      }
    };

    fetchCategory();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Product List Section */}
      <section className='py-10'>
        <div className='container mx-auto px-3 flex flex-col md:flex-row gap-10'>
          {/* Product List */}
          <div className='basis-4/5'>
            <h2 className='text-lg font-semibold mb-4'>Showing {products.length} results</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {products.map((product, index) => (
                <div key={index} className='w-full border border-gray-300 rounded-md'>
                  <Link href={`/products/${product.slug}`} className='rounded-sm overflow-hidden'>
                    <Image className='w-full rounded-sm hover:-translate-y-1 duration-200 ease-in-out overflow-hidden object-cover' src={product.featured_image} width={500} height={500} alt='maxWelldoor' />

                  </Link>
                  <div className='p-2'>
                    <h2 className='text-lg font-semibold my-1'> {product.name} </h2>
                    <Link href={`/products/${product.slug}`} className='bg-yellow-300  hover:bg-black hover:text-yellow-300 font-semibold md:shadow-md p-1 px-4 border border-yellow-500 inline-block '>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="basis-1/5 border border-slate-300 p-3">
            <h2 className='text-lg font-semibold mb-4'>Categories</h2>
            <div className="flex flex-col gap-2">
              {categoryData.map((category) => (
                <Link key={category.id} href={`/category/${category.slug}`} className="text-gray-700 hover:text-red-600">
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
