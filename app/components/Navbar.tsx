import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'

import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineShoppingBag, MdOutlinePeople } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center gap-32 p-4 border-b-[0.5px] bg-[#f2fcf7] border-gray-200">
      <div className="flex justify-center items-center gap-1">
        <Image src={logo} alt="PorluCoffe" className="w-12 h-12" />
        <h1 className="font-raleway text-green-800 font-semibold text-center text-lg">
          PorluCoffe
        </h1>
      </div>
      <nav className="flex justify-center items-center gap-8">
        <Link
          href="/"
          className="font-quicksand flex items-center flex-nowrap gap-1 hover:underline text-nowrap text-lg"
        >
          <AiOutlineHome /> <span>Beranda</span>
        </Link>
        <Link
          href="/products"
          className="font-quicksand flex items-center flex-nowrap gap-1 hover:underline text-nowrap text-lg"
        >
          <MdOutlineShoppingBag /> <span>Produk</span>
        </Link>
        <Link
          href="/about"
          className="font-quicksand flex items-center flex-nowrap gap-1 hover:underline text-nowrap text-lg"
        >
          <MdOutlinePeople /> <span>Tentang Kami</span>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar