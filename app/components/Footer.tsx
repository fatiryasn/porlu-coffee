import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-96 px-8 md:px-32 pb-5 pt-24 bg-green-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={logo}
            alt="PorluCoffee"
            className="bg-white rounded-full border-[0.2px] border-gray-200"
            width={120}
            height={120}
          />
          <p className="mt-4 text-sm text-gray-200 max-w-sm font-quicksand">
            PorluCoffee adalah tempat terbaik untuk menikmati kopi asli yang kaya
            akan cita rasa dan budaya.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 font-raleway">Navigasi</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
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
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 font-raleway">
            Hubungi Kami
          </h3>
          <ul className="text-gray-200 text-sm space-y-2">
            <li>Email: info@porlucoffee.id</li>
            <li>Telepon: +62 812 3456 7890</li>
            <li>Alamat: Jl. Raya Mandailing No.10</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 font-raleway">Ikuti Kami</h3>
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
