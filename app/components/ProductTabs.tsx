"use client";

import React, { useState } from "react";
import Image from "next/image";
import product from "../../public/pic1.png";

import bestsel from "../../public/best-seller.png"
import newar from "../../public/new-arr.png"

const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  desc: "Delicious and aromatic ground coffee. looooooooooong text yeaaaa",
  price: `Rp ${25_000 + i * 1000}`,
  image: product,
  category:
    i < 5
      ? "coffee"
      : i < 10
      ? "new-arrival"
      : i < 15
      ? "best-seller"
      : "other",
}));

const categories = [
  { label: "Coffee", value: "coffee" },
  { label: "New Arrival", value: "new-arrival" },
  { label: "Best Seller", value: "best-seller" },
  { label: "Other", value: "other" },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("coffee");

  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  const currentLabel =
    categories.find((cat) => cat.value === activeTab)?.label || "";

  return (
    <section className="flex flex-col md:flex-row justify-center gap-10 xl:gap-20 px-4 md:px-6 bg-gradient-to-b from-green-200 to-amber-200">
      <aside className="md:sticky top-36 h-fit">
        <ul className="bg-gray-50 p-2 rounded-sm md:bg-transparent flex items-center justify-center md:flex-col gap-3 md:items-end">
          {categories.map((cat) => (
            <li
              key={cat.value}
              className={`font-raleway font-bold text-nowrap text-base sm:text-lg md:text-2xl xl:text-3xl cursor-pointer transition duration-200 ${
                activeTab === cat.value
                  ? "text-yellow-950 underline"
                  : "text-yellow-950"
              }`}
              onClick={() => setActiveTab(cat.value)}
            >
              {cat.label}
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-full md:max-w-[59rem]">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-bold text-yellow-950 mb-3 md:mb-8">
          {currentLabel} Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-1 md:gap-3 xl:gap-8">
          {filteredProducts.map((product) => (
            <div
              className="flex flex-col lg:flex-row gap-2 lg:gap-5 relative rounded-lg bg-gray-50 p-2 md:p-3 shadow-sm"
              key={product.id}
            >
              <Image
                src={product.image}
                alt={product.title}
                className="rounded-md object-cover max-h-52 lg:w-48 lg:h-44 xl:w-56 xl:h-52 shrink-0"
              />
              {product.category === "best-seller" && (
                <Image
                  src={bestsel}
                  alt="Best Seller"
                  className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24  z-10 rotate-[-10deg]"
                />
              )}

              {product.category === "new-arrival" && (
                <Image
                  src={newar}
                  alt="New Arrival"
                  className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24  z-10 rotate-[-10deg]"
                />
              )}

              <div className="flex flex-col pt-1 pb-3">
                <h3 className="font-semibold font-poppins text-lg md:text-xl xl:text-2xl text-gray-950">
                  {product.title}
                </h3>
                <p className="font-quicksand font-medium text-xs md:text-sm xl:text-base lg:mt-1 leading-relaxed text-gray-800 grow">
                  {product.desc}
                </p>
                <p className="font-raleway font-semibold mt-2 lg:mt-0 md:text-lg lg:text-xl text-yellow-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;