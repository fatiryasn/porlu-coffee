"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Variant = {
  name: string;
  price: number;
};

type Product = {
  id: number;
  productName: string;
  price: number;
  image: string;
  variants?: Variant[];
};

const BestOf = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/data/products.json");
      const data = await response.json();
      setProducts(data.slice(0, 4));
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  

  return (
    <section className="bg-gradient-to-b from-green-200 to-blue-300 py-20  md:px-12 lg:px-32">
      <div className="text-center mb-10 px-6">
        <h2 className="text-2xl md:text-4xl font-kaushan font-bold text-gray-800 mb-2 md:mb-4">
          Best of{" "}
          <span className="font-raleway text-green-900">PorluCoffee</span>
        </h2>
        <p className="text-gray-900 font-jura text-sm md:text-lg max-w-xl mx-auto">
          Pilihan terbaik untuk pecinta kopi sejati — setiap biji dipilih dengan
          cermat, demi rasa yang tak terlupakan.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:px-10 gap-2 md:gap-5 lg:gap-16">
        {loading && (
          <>
            <div className="flex bg-white/60 animate-pulse w-40 h-40 md:h-52 md:w-52 lg:h-60 lg:w-60 xl:w-72 xl:h-72 rounded-2xl shadow-md px-4 py-3 gap-50 items-center"></div>
            <div className="flex bg-white/60 animate-pulse w-40 h-40 md:h-52 md:w-52 lg:h-60 lg:w-60 xl:w-72 xl:h-72 rounded-2xl shadow-md px-4 py-3 gap-50 items-center"></div>
            <div className="flex bg-white/60 animate-pulse w-40 h-40 md:h-52 md:w-52 lg:h-60 lg:w-60 xl:w-72 xl:h-72 rounded-2xl shadow-md px-4 py-3 gap-50 items-center"></div>
            <div className="flex bg-white/60 animate-pulse w-40 h-40 md:h-52 md:w-52 lg:h-60 lg:w-60 xl:w-72 xl:h-72 rounded-2xl shadow-md px-4 py-3 gap-50 items-center"></div>
          </>
        )}
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition p-1 gap-6 border-[0.1px] border-yellow-600 hover:scale-[101%] hover:translate-y-[-4px]"
          >
            <img
              src={`/${product.image}`}
              alt={product.productName}
              className="w-40 h-40 md:h-52 md:w-52 lg:h-60 lg:w-60 xl:w-72 xl:h-72 object-cover rounded-xl shrink-0"
              loading="lazy"
            />
            <div className="max-w-40 md:max-w-52 lg:max-w-60 xl:max-w-72 px-1 pb-3 md:px-4">
              <h3 className="md:text-lg lg:text-xl font-outfit font-semibold text-gray-800 mb-1">
                {product.productName}
              </h3>
              <p className="text-emerald-900 text-sm md:text-base font-semibold font-jura">
                Rp
                {(product.variants?.[0]?.price ?? product.price).toLocaleString(
                  "id-ID"
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center items-center">
        <Link href="/products/">
          <button className="shine-button bg-green-600 hover:bg-green-700 transition px-5 py-3 md:px-6 md:py-3 text-sm md:text-base cursor-pointer rounded-full font-poppins font-semibold text-white shadow-lg">
            Lihat lebih banyak
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BestOf;
