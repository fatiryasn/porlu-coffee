import React from "react";
import { Metadata } from "next";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - PorluCoffee",
  description:
    "We are here to listen to you. Ask questions, share concerns,or build partnerships and investor relations. Let's connect with PorluCoffee!",
};

const ContactPage = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center pt-30">
        <h1 className="font-raleway text-3xl md:text-4xl font-semibold text-green-900">
          Contact Us
        </h1>
        <p className="font-jura mt-2 max-w-2xl text-sm md:text-base px-5 text-center leading-relaxed">
          We are here to listen to you. Ask questions, share concerns, or build
          partnerships and investor relations. Let&apos;s connect with PorluCoffee!
        </p>
      </main>

      <section className="flex flex-col justify-center items-center md:items-start mt-28 mb-24 md:flex-row gap-16 md:gap-8 lg:gap-16 px-5">
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
              Contact Info
            </h2>
            <p className="text-sm md:text-base mt-4 font-quicksand font-medium">
              PorluCoffee is always open to hear from you. Questions, concerns,
              partnership opportunities, or investor relations, our team is
              ready to help. You can come to our location, via our social media,
              or you can directly fill out the form on this page.
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
