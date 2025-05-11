import React from "react";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-8  md:px-32 pb-5 pt-16 bg-green-900 text-white border-t border-green-500">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 lg:gap-30">
        <div className="flex flex-col items-center gap-2 shrink-0">
          <img
            src="/assets/porlucoffee-logo.png"
            alt="PorluCoffee Logo"
            className="bg-white rounded-full border-[0.2px] border-gray-200 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
            loading="lazy"
          />
          <img
            src="/assets/porlucoffee-text-logo-white.png"
            alt="PorluCoffee Logo"
            className="object-contain  w-28 md:w-36 lg:w-40"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 font-raleway">
            Contact Us
          </h3>
          <ul className="text-gray-200 text-sm font-quicksand space-y-2">
            <li>Email: porlucoffee@gmail.com</li>
            <li>Telp: +62 822 7778 6223</li>
            <li>Address: Pendidikan Street, Doloksanggul</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 font-raleway">
            Navigation
          </h3>
          <ul className="space-y-2 text-gray-200 font-quicksand text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/collaborate" className="hover:underline">
                Collaboration
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 font-raleway">Follow Us</h3>
          <div className="flex justify-center gap-4 text-2xl">
            <a
              href="https://www.instagram.com/porlucoffee"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
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
