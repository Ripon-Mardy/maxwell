"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";
import axiosInstance from "@/helpers/axiosInstance"; // Import your axios instance

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/posts?term_type=product"); // Use axiosInstance
        setProducts(res.data.data); // Set the products from the response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Uncomment if you want to display an error message
  // if (error) {
  //     return <h1>Error: {error}</h1>
  // }

  return (
    <section className="py-10">
      <div className="container mx-auto px-3">
        {/* ==== latest projects title === */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Our Products</h1>
          <div className="w-28 h-1 bg-red-500 mx-auto mt-6"></div>
        </div>

        {/* === latest projects list === */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-8 pt-10">
          {products.map((product, index) => (
            <Link
              href={`/products/${product.slug}`}
              key={index}
              className="border border-gray-100shadow hover:shadow-md hover:border-gray-200 duration-200 ease-in-out"
            >
              <Image
                src={product.featured_image}
                className="w-full h-44 object-cover rounded-sm hover:-translate-y-1 duration-200 ease-in-out"
                width={200}
                height={200}
                alt="product"
              />
              <h1 className="text-xl font-semibold bg-gray-500 text-center text-white">
                {product.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
