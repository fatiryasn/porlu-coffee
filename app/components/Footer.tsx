import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa";
import logo from "../../public/assets/porlucoffee-logo.png";

const Footer = () => {
  return (
    <footer className="px-8 mt-16 md:px-32 pb-5 pt-24 bg-green-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={logo}
            alt="PorluCoffee Logo"
            className="bg-white rounded-full border-[0.2px] border-gray-200 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40"
          />
          <p className="mt-4 text-sm text-gray-200 max-w-sm font-quicksand">
            PorluCoffee adalah tempat terbaik untuk menikmati kopi asli yang
            kaya akan cita rasa dan budaya.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 font-raleway">Navigasi</h3>
          <ul className="space-y-2 text-gray-200 font-quicksand text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Produk
              </Link>
            </li>
            <li>
              <Link href="/collaborate" className="hover:underline">
                Kolaborasi
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 font-raleway">
            Hubungi Kami
          </h3>
          <ul className="text-gray-200 text-sm font-quicksand space-y-2">
            <li>Email: porlucoffee@gmail.com</li>
            <li>Alamat: Jl. Raya Mandailing No.10</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 font-raleway">
            Ikuti Kami
          </h3>
          <div className="flex justify-center gap-4 text-2xl">
            <a
              href="https://www.instagram.com/porlucoffee"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 mt-16 pt-6 text-center text-sm font-quicksand text-gray-300">
        &copy; {new Date().getFullYear()} PorluCoffee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
