"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingBag, MdOutlinePeople } from "react-icons/md";
import Image from "next/image";
import { HiOutlineXMark } from "react-icons/hi2";
import { TbCirclesRelation } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";

import logo from "../../public/assets/porlucoffee-logo.png"
import textLogo from "../../public/assets/porlucoffee-text-logo.png"
import textLogoWhite from "../../public/assets/porlucoffee-text-logo-white.png"

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
      ? "bg-[#f6faf5] text-emerald-900"
      : "bg text-gray-100"
    : "bg-[#f6faf5] text-emerald-900";

  const logoStyle = isHome ? (scrolled ? "" : "bg-white rounded-full") : "";

  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 z-30 flex justify-between md:justify-center items-center md:gap-20 p-4 transition-all duration-300 ${navbarStyle}`}
      >
        <div className="flex justify-center items-center gap-1 md:gap-2">
          <Image
            src={logo}
            alt="PorluCoffee Logo"
            className={`w-10 h-10 md:w-12 md:h-12 ${logoStyle}`}
          />
          <Image
            src={isHome ? (scrolled ? textLogo : textLogoWhite) : textLogo}
            alt="PorluCoffe Text Logo"
            className={`w-10 h-10 object-contain md:w-16 md:h-13 `}
          />
        </div>

        <nav className="hidden md:flex justify-center items-center gap-6">
          <Link
            href="/"
            className="font-outfit font-medium flex items-center gap-1 hover:underline md:text-lg"
          >
            <span>Beranda</span>
          </Link>
          <Link
            href="/products"
            className="font-outfit font-medium flex items-center gap-1 hover:underline md:text-lg"
          >
            <span>Produk</span>
          </Link>
          <Link
            href="/about"
            className="font-outfit font-medium flex items-center gap-1 hover:underline md:text-lg"
          >
            <span>Tentang Kami</span>
          </Link>
          <Link
            href="/collaborate"
            className="font-outfit font-medium flex items-center gap-1 hover:underline md:text-lg"
          >
            <span>Kolaborasi</span>
          </Link>
          <Link
            href="/contact"
            className="font-outfit font-medium flex items-center gap-1 hover:underline md:text-lg"
          >
            <span>Kontak</span>
          </Link>
        </nav>

        <button
          className="inline md:hidden text-2xl"
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
          <Link
            href="/collaborate"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <TbCirclesRelation />
            <span>Kolaborasi</span>
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2"
          >
            <MdConnectWithoutContact />
            <span>Kontak</span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
