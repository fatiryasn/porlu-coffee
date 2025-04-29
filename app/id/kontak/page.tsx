import React from "react";
import { Metadata } from "next";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak - PorluCoffee",
  description:
    "Kami siap mendengar Anda. Ajukan pertanyaan, sampaikan kekhawatiran, atau jalin kemitraan dan hubungan investor. Mari terhubung bersama PorluCoffee!",
};

const ContactPage = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center pt-30">
        <h1 className="font-raleway text-3xl md:text-4xl font-semibold text-green-900">
          Hubungi Kami
        </h1>
        <p className="font-jura mt-2 max-w-2xl text-sm md:text-base px-5 text-center leading-relaxed">
          Kami siap mendengar Anda. Ajukan pertanyaan, sampaikan kekhawatiran,
          atau jalin kemitraan dan hubungan investor. Mari terhubung bersama
          PorluCoffee!
        </p>
      </main>

      <section className="flex flex-col justify-center items-center md:items-start mt-28 md:flex-row gap-16 md:gap-8 lg:gap-16 px-5">
        <div
          className="relative text-gray-100 flex flex-col p-7 rounded-xl max-w-md lg:max-w-xl h-[40rem] overflow-hidden"
          style={{
            backgroundImage: `url('/assets/collab-hero.jpg')`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/30 z-0" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-grenze font-semibold">
              Kontak
            </h2>
            <p className="text-sm md:text-base mt-4 font-quicksand font-medium">
              PorluCoffee selalu terbuka untuk mendengar Anda. Pertanyaan,
              kekhawatiran, peluang kemitraan, atau hubungan investor, tim kami
              siap membantu. Anda dapat datang ke lokasi kami, lewat media
              sosial kami, atau dapat langsung mengisi form di halaman ini.
            </p>
            <ul className="font-jura mt-5 flex flex-col gap-3">
              <li className="flex items-center  md:text-lg  gap-2">
                <MdEmail />
                <span>porlucoffee@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+62 822 7778 6223</span>
              </li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
