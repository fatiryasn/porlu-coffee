"use client";

import React, { useState } from "react";
import Image from "next/image";

import product1 from "../../public/assets/porlucoffee-product1.png";
import logo from "../../public/assets/porlucoffee-logo.png";
import abt5 from "../../public/assets/abt5.png"

// Dummy products
const products = [
  {
    id: 1,
    productName: "Classic Arabica",
    price: 25000,
    image: product1,
    categories: ["coffee", "best-seller"],
  },
  {
    id: 2,
    productName: "Mandheling Beans",
    price: 32000,
    image: logo,
    categories: ["coffee"],
  },
  {
    id: 3,
    productName: "Summer Blend",
    price: 28000,
    image: product1,
    categories: ["new-arrival"],
  },
  {
    id: 4,
    productName: "Robusta Strong",
    price: 27000,
    image: product1,
    categories: ["coffee"],
  },
  {
    id: 5,
    productName: "Golden Drip",
    price: 35000,
    image: abt5,
    categories: ["new-arrival", "best-seller"],
  },
  {
    id: 6,
    productName: "Morning Glory",
    price: 26000,
    image: product1,
    categories: ["best-seller"],
  },
  {
    id: 7,
    productName: "Nightfall Espresso",
    price: 29000,
    image: product1,
    categories: ["other"],
  },
  {
    id: 8,
    productName: "Tropical Vibes",
    price: 33000,
    image: abt5,
    categories: ["new-arrival"],
  },
  {
    id: 9,
    productName: "Hazelnut Dream",
    price: 31000,
    image: product1,
    categories: ["coffee", "other"],
  },
  {
    id: 10,
    productName: "Choco Mocha",
    price: 34000,
    image: product1,
    categories: ["best-seller"],
  },
  {
    id: 11,
    productName: "Berry Delight",
    price: 30000,
    image: abt5,
    categories: ["new-arrival"],
  },
  {
    id: 12,
    productName: "Red Velvet Latte",
    price: 36000,
    image: product1,
    categories: ["other"],
  },
  {
    id: 13,
    productName: "Caramel Bliss",
    price: 33000,
    image: product1,
    categories: ["best-seller"],
  },
  {
    id: 14,
    productName: "Vanilla Bean",
    price: 31000,
    image: product1,
    categories: ["coffee"],
  },
  {
    id: 15,
    productName: "Almond Crunch",
    price: 32000,
    image: product1,
    categories: ["new-arrival"],
  },
  {
    id: 16,
    productName: "Butterscotch",
    price: 35000,
    image: product1,
    categories: ["other"],
  },
  {
    id: 17,
    productName: "Sweet Cinnamon",
    price: 30000,
    image: product1,
    categories: ["coffee", "other"],
  },
  {
    id: 18,
    productName: "Irish Cream",
    price: 37000,
    image: product1,
    categories: ["best-seller"],
  },
  {
    id: 19,
    productName: "Pumpkin Spice",
    price: 38000,
    image: product1,
    categories: ["new-arrival"],
  },
  {
    id: 20,
    productName: "French Vanilla",
    price: 34000,
    image: product1,
    categories: ["coffee"],
  },
];

// Category list
const categories = [
  { label: "All", value: "all" },
  { label: "Coffee", value: "coffee" },
  { label: "New Arrival", value: "new-arrival" },
  { label: "Best Seller", value: "best-seller" },
  { label: "Other", value: "other" },
];

const ProductTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.categories.includes(selectedCategory));

  return (
    <section className="bg-gradient-to-b from-green-200 to-blue-200 flex flex-col md:flex-row px-3 md:12 lg:px-24 py-10 md:h-[70dvh] lg:h-[80dvh]">
      {/* LEFT PREVIEW */}
      <div className="md:w-[50%] lg:w-[40%] relative bg-white object-center rounded-lg">
        <Image
          src={selectedProduct.image}
          alt={selectedProduct.productName}
          quality={100}
          className="object-cover h-[20rem] w-full sm:h-[25rem]  md:h-full md:w-full rounded-l-lg"
        />
        <Image
          src={logo}
          alt="PorluCoffee Logo"
          className="rounded-full absolute top-3 left-3 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />
        <div className="absolute bottom-3 left-1/2 transform w-2xs lg:w-xs xl:w-sm -translate-x-1/2 flex justify-center items-center">
          <div className="bg-green-800 p-3 w-full">
            <h2 className="font-jura text-sm lg:text-base text-white text-nowrap">
              {selectedProduct.productName}
            </h2>
          </div>
          <div className="bg-white p-3 w-full">
            <p className="font-kaushan text-xs lg:text-sm text-nowrap">
              Rp{selectedProduct.price}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="md:w-[50%] lg:w-[60%] border-r-4 border-y-4 rounded-r-lg p-2 md:p-5 lg:p-10 border-white bg-gray-50 flex flex-col gap-5">
        <ul className="flex items-center justify-center md:gap-2 lg:gap-4 font-outfit text-sm lg:text-base xl:text-lg  bg-amber-100 rounded py-1">
          {categories.map((cat) => (
            <li
              key={cat.value}
              className={`cursor-pointer text-nowrap px-2 py-1 ${
                selectedCategory === cat.value ? "bg-amber-200" : ""
              }`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </li>
          ))}
        </ul>

        {/* Products List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5 md:px-4 overflow-y-auto max-h-[80dvh]">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`flex border-2 gap-2 bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer rounded ${
                selectedProduct.productName === product.productName
                  ? "bg-gray-200 border-amber-200"
                  : "border-transparent"
              }`}
            >
              <Image
                src={product.image}
                alt={product.productName}
                quality={100}
                className="object-cover h-16 w-16 aspect-square rounded"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-raleway md:text-md lg:text-lg font-semibold">
                  {product.productName}
                </h3>
                <p className="font-quicksand text-md">
                  Rp {product.price.toLocaleString()}
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
