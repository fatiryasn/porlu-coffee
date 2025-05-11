"use client";
import React, { useEffect, useState } from "react";
import { MdZoomOutMap } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import ProductPopup from "./ProductPopup";

const categories = [
  { label: "All", value: "all" },
  { label: "Coffee", value: "coffee" },
  { label: "Grade A", value: "grade_a" },
  { label: "Grade B", value: "grade_b" },
  { label: "Pouch", value: "pouch" },
  { label: "Drip", value: "drip" },
];

type Variant = {
  name: string;
  price: number;
  image?: string;
};

type Product = {
  id: number;
  productName: string;
  price: number;
  image: string;
  categories: string[];
  variants?: Variant[];
  description: {
    en: string;
    id: string;
  };
};

const ProductTabs = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedMerch, setSelectedMerch] = useState<Product | null>(null);
  const [variantSelections, setVariantSelections] = useState<{
    [productId: number]: Variant | null;
  }>({});
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/data/products.json");
      const data = await response.json();
      setProducts(data);
      setSelectedProduct(data[0]);
      const defaultVariants: { [id: number]: Variant | null } = {};
      data.forEach((p: Product) => {
        defaultVariants[p.id] = p.variants?.[0] ?? null;
      });
      setVariantSelections(defaultVariants);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "all"
        ? !p.categories.includes("merch")
        : p.categories.includes(selectedCategory) &&
          !p.categories.includes("merch")
    )
    
  const handleZoomOutClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleMerchClick = (product: Product) => {
    setSelectedMerch(product);
    setIsPopupVisible(true);
  };

  return (
    <>
      <section className="relative overflow-hidden w-full mt-16">
        <img
          src="/assets/coffee-map.jpg"
          alt="Product Tab Background"
          className="z-0 absolute inset-0 object-cover object-center lg:object-right-bottom w-full h-full"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-amber-800 z-10"></div>

        <div className="flex flex-col relative z-20 px-3 sm:px-10 md:px-6 lg:px-10 xl:px-16 py-10">
          <h1 className="font-kaushan text-3xl md:text-4xl lg:text-5xl p-3 mb-3 text-gray-50">
            Products
          </h1>
          <div className="flex flex-col md:flex-row  md:h-[74dvh] ">
            <div
              className={`${
                loading ? "animate-pulse h-[41dvh] md:h-full bg-white/50" : ""
              } md:w-[50%] lg:w-[40%] relative bg-transparent object-center rounded-t-lg md:rounded-tr-none md:rounded-l-lg`}
            >
              {selectedProduct && (
                <>
                  <button
                    title="Zoom Out"
                    className="absolute top-5 right-5 text-3xl md:text-4xl text-green-950 bg-white/25 p-1 z-10 cursor-pointer hover:text-green-400 transition"
                    onClick={handleZoomOutClick}
                  >
                    <MdZoomOutMap />
                  </button>

                  <div className="overflow-hidden h-[22rem] w-full sm:h-[25rem] md:h-full md:w-full rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
                    <img
                      src={`/${
                        variantSelections[selectedProduct.id]?.image
                          ? variantSelections[selectedProduct.id]?.image
                          : selectedProduct.image
                      }`}
                      alt={selectedProduct.productName}
                      className="object-contain scale-105 hover:scale-110 transition h-full w-full"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute bottom-3 left-1/2 transform w-2xs lg:w-xs xl:w-sm -translate-x-1/2 flex justify-center items-center">
                    <div className="bg-green-800 p-3 w-full">
                      <h2 className="font-jura text-sm lg:text-base text-gray-50 text-nowrap">
                        {`${selectedProduct.productName} ${
                          variantSelections[selectedProduct.id]?.name ?? ""
                        }`}
                      </h2>
                    </div>
                    <div className="bg-white p-3 w-full">
                      <p className="font-kaushan text-xs lg:text-sm text-nowrap">
                        Rp{" "}
                        {(
                          variantSelections[selectedProduct.id]?.price ??
                          selectedProduct.price
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* RIGHT PREVIEW */}
            <div className="md:w-[50%] lg:w-[60%] p-2 md:p-5 lg:p-7 bg-transparent flex flex-col gap-2">
              {/* Category Tabs */}
              <div className="relative">
                <ul className="flex items-center overflow-x-auto scroll-smooth whitespace-nowrap gap-2 md:gap-2 lg:gap-4 font-outfit text-sm lg:text-base xl:text-lg bg-transparent rounded py-1 px-3 ">
                  {categories.map((cat) => (
                    <li
                      key={cat.value}
                      className={`cursor-pointer text-nowrap px-2 py-1 ${
                        selectedCategory === cat.value
                          ? "text-amber-300"
                          : "text-white"
                      }`}
                      onClick={() => setSelectedCategory(cat.value)}
                    >
                      {cat.label}
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="w-full text-gray-50 mb-3" />

              {/* Products List */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-3 lg:gap-5 md:px-4 overflow-y-auto max-h-[80dvh]">
                {loading &&
                  Array.from({ length: 8 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 bg-gray-100 animate-pulse p-2 cursor-pointer rounded h-28"
                    />
                  ))}

                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`flex flex-col gap-2 border-2  hover:border-amber-100 transition p-2 cursor-pointer rounded ${
                      selectedProduct?.id === product.id
                        ? "border-amber-200 bg-gray-50 text-black"
                        : "border-transparent text-gray-50 bg-transparent"
                    }`}
                  >
                    <div className="flex gap-2">
                      <img
                        src={`/${
                          variantSelections[product.id]?.image
                            ? variantSelections[product.id]?.image
                            : product.image
                        }`}
                        alt={product.productName}
                        className="object-cover h-20 w-20 lg:h-24 lg:w-24 aspect-square rounded"
                        loading="lazy"
                      />

                      <div className="flex flex-col gap-1">
                        <h3 className="font-outfit md:text-md lg:text-lg font-medium">
                          {product.productName}
                        </h3>
                        {/* Tombol variant */}
                        {product.variants && product.variants.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {product.variants.map((variant) => {
                              const isActive =
                                variantSelections[product.id]?.name ===
                                variant.name;
                              return (
                                <button
                                  key={variant.name}
                                  onClick={() => {
                                    setVariantSelections((prev) => ({
                                      ...prev,
                                      [product.id]: variant,
                                    }));
                                  }}
                                  className={` text-[0.6rem] sm:text-xs cursor-pointer font-jura font-bold px-3 py-1 rounded-full border transition-colors duration-200 ${
                                    isActive
                                      ? "bg-blue-500 border-blue-600 text-white"
                                      : "bg-white border-gray-300 text-black hover:bg-gray-100"
                                  }`}
                                >
                                  {variant.name}
                                </button>
                              );
                            })}
                          </div>
                        )}
                        <p className="font-quicksand text-md">
                          Rp{" "}
                          {(
                            variantSelections[product.id]?.price ??
                            product.price
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="w-full text-gray-50 mt-3" />
            </div>
          </div>
        </div>

        {isPopupVisible && (selectedProduct || selectedMerch) && (
          <ProductPopup
            product={selectedMerch ?? selectedProduct!}
            variant={
              variantSelections[(selectedMerch ?? selectedProduct)!.id] ?? null
            }
            onClose={() => {
              handleClosePopup();
              setSelectedMerch(null);
            }}
          />
        )}
      </section>

      <section className="w-full bg-amber-800 pt-10 pb-5">
        <div className="flex flex-col items-center gap-3 text-center">
          <h3 className="font-bold font-jura uppercase text-white text-xl tracking-widest">
            Order Via
          </h3>
          <a
            href={`https://wa.me/6282277786223`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:underline flex items-center gap-1 font-quicksand text-center transition cursor-pointer text-white">
              <FaWhatsapp /> Whatsapp
            </button>
          </a>
        </div>
      </section>

      {/* Merch Section */}
      <section className="min-h-[80vh] px-3 sm:px-10 md:px-6 lg:px-10 xl:px-16 py-10 bg-gradient-to-b from-amber-800 to-amber-200">
        <h1 className="font-kaushan text-3xl md:text-4xl lg:text-5xl p-3 mb-8 text-gray-50">
          Merchandise
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {loading &&
            Array.from({ length: 7 }).map((_, idx) => (
              <div
                key={idx}
                className="flex gap-2 bg-gray-100 animate-pulse p-2 cursor-pointer rounded-lg h-48 md:h-56"
              />
            ))}
          {products
            .filter((p) => p.categories.includes("merch"))
            .map((merch) => (
              <div
                key={merch.id}
                onClick={() => handleMerchClick(merch)}
                className="bg-white/50 rounded-lg shadow-lg hover:shadow-amber-400 cursor-pointer overflow-hidden transition-transform transform hover:scale-[102%]"
              >
                <img
                  src={`/${merch.image}`}
                  alt={merch.productName}
                  className="object-contain w-full h-44 md:h-52 lg:h-56"
                  loading="lazy"
                />
                <div className="p-3 bg-white h-full">
                  <h3 className="font-jura font-bold text-md text-amber-900">
                    {merch.productName}
                  </h3>
                  <p className="text-gray-700 text-sm font-quicksand">
                    Rp {merch.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default ProductTabs;
