"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "@/components/Loading";
import axiosInstance from "@/helpers/axiosInstance"; // Import your axios instance

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axiosInstance.get("/posts?term_type=clients"); // Fetch the clients/brands
        setClients(res.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
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
      <section className="py-10">
        <div className="container mx-auto px-3">
          {/* ===== clients title ==== */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Our Clients</h1>
            <div className="w-28 h-1 bg-red-500 mx-auto mt-6"></div>
          </div>

          {/* ==== clients list === */}
          <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-7 md:gap-10 gap-7 pt-10">
            {clients.map((client, index) => (
              <div
                key={index}
                className=""
              >
                <Image
                  src={client.featured_image}
                  className="w-full object-cover"
                  width={100}
                  height={100}
                  alt={client.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
