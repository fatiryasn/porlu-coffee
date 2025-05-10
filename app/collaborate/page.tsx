import React from "react";
import { Metadata } from "next";

import CollabForm from "../components/CollabForm";

export const metadata: Metadata = {
  title: "Collaboration - PorluCoffee",
  description:
    "PorluCoffee opens up opportunities for collaboration with individuals, brands, and communities to create unlimited innovations. Contact us for more!",
};
const CollabPage = () => {
  return (
    <>
      <main className="pt-16 relative w-full flex justify-center mb-12 md:mb-5 xl:mb-0 ">
        <div className="relative w-full h-[32rem] md:h-[25rem] rounded-b-[3rem] shadow-[0px_10px_30px_1px_#7d947c] md:shadow-none overflow-hidden">
          <img
            src="/assets/collab-hero.jpg"
            alt="Hero Background"
            className="object-cover w-full h-full object-center "
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center z-20">
            <h1 className="text-amber-100 text-[2.5rem] lg:text-[4rem] font-poppins font-bold">
              Collaboration
            </h1>
            <p className="ml-2 px-4 text-sm md:text-base lg:text-xl text-gray-50 font-jura font-medium md:max-w-2xl text-center">
              PorluCoffee opens up opportunities for collaboration with
              individuals, brands, and communities to create unlimited
              innovations. Contact us for more!
            </p>
          </div>
        </div>
      </main>

      <CollabForm />
    </>
  );
};

export default CollabPage;
