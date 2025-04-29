"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  productName: string;
  price: number;
  image: string;
}

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
    <section className="bg-gradient-to-b from-green-200 to-blue-300 py-20 md:py-5 px-6 md:px-12 lg:px-32">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-kaushan font-bold text-gray-800 mb-2 md:mb-4">
          Best of{" "}
          <span className="font-raleway text-green-900">PorluCoffee</span>
        </h2>
        <p className="text-gray-900 font-jura text-sm md:text-lg max-w-xl mx-auto">
          Pilihan terbaik untuk pecinta kopi sejati — setiap biji dipilih dengan
          cermat, demi rasa yang tak terlupakan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
        {loading && (
          <>
            <div className="flex bg-white/60 animate-pulse h-40 rounded-2xl shadow-md px-4 py-3 gap-50 items-center"></div>
            <div className="flex bg-white/60 animate-pulse h-40 rounded-2xl shadow-md px-4 py-3 gap-50 items-center"></div>
            <div className="flex bg-white/60 animate-pulse h-40 rounded-2xl shadow-md px-4 py-3 gap-50 items-center"></div>
            <div className="flex bg-white/60 animate-pulse h-40 rounded-2xl shadow-md px-4 py-3 gap-50 items-center"></div>
          </>
        )}
        {products.map((product) => (
          <div
            key={product.id}
            className="flex bg-white rounded-2xl shadow-md hover:shadow-lg transition px-4 py-3 gap-5 border-[0.1px] border-yellow-600 items-center hover:scale-[101%] hover:translate-y-[-4px]"
          >
            <Image
              src={`/${product.image}`}
              alt={product.productName}
              width={100}
              height={100}
              className="w-24 h-24 md:h-28 md:w-28 lg:w-36 lg:h-36 object-cover rounded-xl shrink-0"
            />
            <div className="max-w-sm">
              <h3 className="text-lg md:text-xl font-raleway font-semibold text-gray-800 mb-1">
                {product.productName}
              </h3>
              <p className="text-emerald-800 text-base font-semibold font-raleway">
                Rp{product.price.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center items-center">
        <Link href="/products">
          <button className="text-gray-50 bg-green-700 rounded-xl hover:bg-green-900 transition cursor-pointer font-poppins font-semibold px-5 py-3">
            Lihat lebih banyak
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BestOf;
