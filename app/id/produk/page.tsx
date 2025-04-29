import Image from "next/image";
import { Metadata } from "next";

import ProductTabs from "../../components/ProductTabs";
import productHero from "../../../public/assets/product-hero.png"
import logo from "../../../public/assets/porlucoffee-logo.png"

export const metadata: Metadata = {
  title: "Produk - PorluCoffee",
  description: "List lengkap dari seluruh produk original PorluCoffee"
}

const ProdukPage = () => {
  return (
    <>
      <main className="pt-24 relative w-full flex justify-center px-4 mb-12 md:mb-5 xl:mb-0">
        <div className="relative w-full h-[30rem] md:w-[80rem] sm:h-[20rem] rounded-lg overflow-hidden">
          <Image
            src={productHero}
            alt="Hero Background"
            className="object-cover w-full h-full object-center"
            priority
          />
          <div className="absolute inset-0 bg-white/75 z-10" />
          <div className="absolute inset-0 flex flex-col gap-2 md:flex-row md:gap-5 items-center justify-center z-20">
            <Image
              src={logo}
              alt="PorluCoffee Logo"
              className="w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-white"
            />
            <div className="bg-green-900 w-1 h-32 hidden md:inline"></div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-green-900 text-[2.5rem] lg:text-[4.5rem] font-poppins font-bold">
                Produk
              </h1>
              <p className="tracking-[0.5em] text-lg lg:tracking-[1em] ml-2 lg:text-2xl font-jura font-medium">
                PORLUCOFFEE
              </p>
            </div>
          </div>
        </div>
      </main>

      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 150"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="#b9f8cf" offset="0%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,75L120,85C240,95,480,115,720,105C960,95,1200,55,1440,45C1680,35,1920,55,2160,70C2400,85,2640,95,2880,87.5C3120,80,3360,55,3600,47.5C3840,40,4080,50,4320,52.5C4560,55,4800,50,5040,40C5280,30,5520,15,5760,25C6000,35,6240,70,6480,70C6720,70,6960,35,7200,37.5C7440,40,7680,80,7920,82.5C8160,85,8400,50,8640,30C8880,10,9120,5,9360,22.5C9600,40,9840,80,10080,92.5C10320,105,10560,90,10800,72.5C11040,55,11280,35,11520,27.5C11760,20,12000,25,12240,37.5C12480,50,12720,70,12960,82.5C13200,95,13440,100,13680,90C13920,80,14160,55,14400,57.5C14640,60,14880,90,15120,95C15360,100,15600,80,15840,72.5C16080,65,16320,70,16560,70C16800,70,17040,65,17160,62.5L17280,60L17280,150L17160,150C17040,150,16800,150,16560,150C16320,150,16080,150,15840,150C15600,150,15360,150,15120,150C14880,150,14640,150,14400,150C14160,150,13920,150,13680,150C13440,150,13200,150,12960,150C12720,150,12480,150,12240,150C12000,150,11760,150,11520,150C11280,150,11040,150,10800,150C10560,150,10320,150,10080,150C9840,150,9600,150,9360,150C9120,150,8880,150,8640,150C8400,150,8160,150,7920,150C7680,150,7440,150,7200,150C6960,150,6720,150,6480,150C6240,150,6000,150,5760,150C5520,150,5280,150,5040,150C4800,150,4560,150,4320,150C4080,150,3840,150,3600,150C3360,150,3120,150,2880,150C2640,150,2400,150,2160,150C1920,150,1680,150,1440,150C1200,150,960,150,720,150C480,150,240,150,120,150L0,150Z"
        ></path>
      </svg>
      <ProductTabs />
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 150"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="sw-gradient-green-200"
            x1="0"
            x2="0"
            y1="1"
            y2="0"
          >
            <stop
              stopColor="#BFDBFE
"
              offset="0%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-green-200)"
          d="M0,75L120,85C240,95,480,115,720,105C960,95,1200,55,1440,45C1680,35,1920,55,2160,70C2400,85,2640,95,2880,87.5C3120,80,3360,55,3600,47.5C3840,40,4080,50,4320,52.5C4560,55,4800,50,5040,40C5280,30,5520,15,5760,25C6000,35,6240,70,6480,70C6720,70,6960,35,7200,37.5C7440,40,7680,80,7920,82.5C8160,85,8400,50,8640,30C8880,10,9120,5,9360,22.5C9600,40,9840,80,10080,92.5C10320,105,10560,90,10800,72.5C11040,55,11280,35,11520,27.5C11760,20,12000,25,12240,37.5C12480,50,12720,70,12960,82.5C13200,95,13440,100,13680,90C13920,80,14160,55,14400,57.5C14640,60,14880,90,15120,95C15360,100,15600,80,15840,72.5C16080,65,16320,70,16560,70C16800,70,17040,65,17160,62.5L17280,60L17280,150L17160,150C17040,150,16800,150,16560,150C16320,150,16080,150,15840,150C15600,150,15360,150,15120,150C14880,150,14640,150,14400,150C14160,150,13920,150,13680,150C13440,150,13200,150,12960,150C12720,150,12480,150,12240,150C12000,150,11760,150,11520,150C11280,150,11040,150,10800,150C10560,150,10320,150,10080,150C9840,150,9600,150,9360,150C9120,150,8880,150,8640,150C8400,150,8160,150,7920,150C7680,150,7440,150,7200,150C6960,150,6720,150,6480,150C6240,150,6000,150,5760,150C5520,150,5280,150,5040,150C4800,150,4560,150,4320,150C4080,150,3840,150,3600,150C3360,150,3120,150,2880,150C2640,150,2400,150,2160,150C1920,150,1680,150,1440,150C1200,150,960,150,720,150C480,150,240,150,120,150L0,150Z"
        ></path>
      </svg>
    </>
  );
};

export default ProdukPage;
