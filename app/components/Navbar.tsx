"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "../../public/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingBag, MdOutlinePeople } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navbarStyle = isHome
    ? scrolled
      ? "bg-[#f6faf5] text-black"
      : "bg-transparent text-white"
    : "bg-[#f6faf5] text-black";

  const textTitleStyle = isHome
    ? scrolled
      ? "text-green-800"
      : "text-gray-50"
    : "text-green-800";

  const logoStyle = isHome ? (scrolled ? "" : "bg-white rounded-full") : "";

  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 z-30 flex justify-between md:justify-center items-center md:gap-32 p-4 transition-all duration-300 ${navbarStyle}`}
      >
        <div className="flex justify-center items-center gap-1 md:gap-2">
          <Image
            src={logo}
            alt="PorluCoffee"
            className={`w-8 h-8 md:w-12 md:h-12 ${logoStyle}`}
            loading="lazy"
          />
          <h1
            className={`font-raleway font-semibold text-sm md:text-lg ${textTitleStyle}`}
          >
            PorluCoffee
          </h1>
        </div>

        <nav className="hidden sm:flex justify-center items-center gap-8">
          <Link
            href="/"
            className="font-quicksand flex items-center gap-1 hover:underline md:text-lg"
          >
            <AiOutlineHome />
            <span>Beranda</span>
          </Link>
          <Link
            href="/products"
            className="font-quicksand flex items-center gap-1 hover:underline md:text-lg"
          >
            <MdOutlineShoppingBag />
            <span>Produk</span>
          </Link>
          <Link
            href="/about"
            className="font-quicksand flex items-center gap-1 hover:underline md:text-lg"
          >
            <MdOutlinePeople />
            <span>Tentang Kami</span>
          </Link>
        </nav>

        <button
          className="inline sm:hidden text-2xl"
          onClick={() => setIsSidebarOpen(true)}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-[65%] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold font-raleway">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="text-2xl">
            <HiOutlineXMark />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-base font-quicksand">
          <Link
            href="/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <AiOutlineHome />
            <span>Beranda</span>
          </Link>
          <Link
            href="/products"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <MdOutlineShoppingBag />
            <span>Produk</span>
          </Link>
          <Link
            href="/about"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <MdOutlinePeople />
            <span>Tentang Kami</span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
