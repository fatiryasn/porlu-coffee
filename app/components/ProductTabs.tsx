"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/porlucoffee-logo.png";

const categories = [
  { label: "All", value: "all" },
  { label: "Coffee", value: "coffee" }
];

type Product = {
  id: number;
  productName: string;
  price: number;
  image: string;
  categories: string[];
};

const ProductTabs = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/data/products.json");
      const data = await response.json();
      setProducts(data);
      setSelectedProduct(data[0]);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.categories.includes(selectedCategory));

  return (
    <section className="bg-gradient-to-b from-green-200 to-blue-200 flex flex-col md:flex-row px-3 md:12 lg:px-24 py-10 md:h-[70dvh] lg:h-[84dvh]">
      {/* LEFT PREVIEW */}
      <div
        className={`${
          loading ? "animate-pulse h-[41dvh] md:h-full" : ""
        } md:w-[50%] lg:w-[40%] relative  bg-white object-center rounded-t-lg md:rounded-tr-none md:rounded-l-lg`}
      >
        {selectedProduct && (
          <>
            <Image
              src={`/${selectedProduct.image}`}
              alt={selectedProduct.productName}
              width={100}
              height={100}
              quality={100}
              className="object-cover h-[25rem] w-full sm:h-[30rem]  md:h-full md:w-full rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
            />
            <Image
              src={logo}
              alt="PorluCoffee Logo"
              className="rounded-full absolute top-3 left-3 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white"
            />
            <div className="absolute bottom-3 left-1/2 transform w-2xs lg:w-xs xl:w-sm -translate-x-1/2 flex justify-center items-center">
              <div className="bg-green-800 p-3 w-full">
                <h2 className="font-jura text-sm lg:text-base text-white text-nowrap">
                  {selectedProduct.productName}
                </h2>
              </div>
              <div className="bg-white p-3 w-full">
                <p className="font-kaushan text-xs lg:text-sm text-nowrap">
                  Rp {selectedProduct.price.toLocaleString()}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* RIGHT PREVIEW */}
      <div className="md:w-[50%] lg:w-[60%] border-r-4 border-y-4 rounded-b-lg md:rounded-bl-none md:rounded-r-lg p-2 md:p-5 lg:p-10 border-white bg-gray-50 flex flex-col gap-5">
        {/* Category Tabs */}
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
          {loading && (
            <>
              <div className="flex gap-2 bg-gray-100 animate-pulse p-2 cursor-pointer rounded h-20"></div>
              <div className="flex gap-2 bg-gray-100 animate-pulse p-2 cursor-pointer rounded h-20"></div>
              <div className="flex gap-2 bg-gray-100 animate-pulse p-2 cursor-pointer rounded h-20"></div>
              <div className="flex gap-2 bg-gray-100 animate-pulse p-2 cursor-pointer rounded h-20"></div>
            </>
          )}
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`flex border-2 gap-2 bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer rounded ${
                selectedProduct?.productName === product.productName
                  ? "bg-gray-200 border-amber-200"
                  : "border-transparent"
              }`}
            >
              <Image
                src={`/${product.image}`}
                alt={product.productName}
                width={100}
                height={100}
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
