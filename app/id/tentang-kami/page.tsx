import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import abt1 from "../../../public/assets/abt1.png";
import abt3 from "../../../public/assets/abt3.png";
import abt5 from "../../../public/assets/abt5.png";
import founder from "../../../public/assets/founder.jpg";
import news1 from "@/public/assets/news1.jpg";
import news3 from "@/public/assets/news3.jpg";
import Carousel from "../../components/Carousel";

export const metadata: Metadata = {
  title: "Tentang Kami - PorluCoffee",
  description:
    "Ayo cari tahu bagaimana perjalanan PorluCoffee dan mari berkenalan dengan kami!",
};

const AboutPage = () => {
  return (
    <>
      <main className="pt-28 relative w-full min-h-[80vh] gap-10 flex flex-col bg-gray-100">
        <div className="flex max-h-[27rem]">
          <Image
            src={abt1}
            alt="Tentang Porlucoffee"
            className="object-cover w-[33%]"
          />
          <Image
            src={abt5}
            alt="Tentang Porlucoffee"
            className="object-cover w-[33%] grow"
          />
          <Image
            src={abt3}
            alt="Tentang Porlucoffee"
            className="object-cover w-[33%]"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="">
            <span className="font-jura text-gray-800 text-lg md:text-xl lg:text-2xl uppercase font-medium tracking-[0.6em]">
              About
            </span>{" "}
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-green-900">
              PorluCoffee
            </span>
          </h1>
          <p className="px-5 md:px-0 max-w-xl font-jura md:text-lg lg:text-xl leading-loose font-medium text-gray-700 text-center">
            Ayo cari tahu bagaimana perjalanan PorluCoffee dan mari berkenalan
            dengan kami!
          </p>
        </div>
      </main>
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="#F3F4F6" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,13L80,21.7C160,30,320,48,480,65C640,82,800,100,960,88.8C1120,78,1280,39,1440,23.8C1600,9,1760,17,1920,23.8C2080,30,2240,35,2400,47.7C2560,61,2720,82,2880,95.3C3040,108,3200,113,3360,101.8C3520,91,3680,65,3840,60.7C4000,56,4160,74,4320,80.2C4480,87,4640,82,4800,71.5C4960,61,5120,43,5280,45.5C5440,48,5600,69,5760,75.8C5920,82,6080,74,6240,60.7C6400,48,6560,30,6720,32.5C6880,35,7040,56,7200,60.7C7360,65,7520,52,7680,49.8C7840,48,8000,56,8160,67.2C8320,78,8480,91,8640,82.3C8800,74,8960,43,9120,41.2C9280,39,9440,65,9600,67.2C9760,69,9920,48,10080,47.7C10240,48,10400,69,10560,82.3C10720,95,10880,100,11040,84.5C11200,69,11360,35,11440,17.3L11520,0L11520,130L11440,130C11360,130,11200,130,11040,130C10880,130,10720,130,10560,130C10400,130,10240,130,10080,130C9920,130,9760,130,9600,130C9440,130,9280,130,9120,130C8960,130,8800,130,8640,130C8480,130,8320,130,8160,130C8000,130,7840,130,7680,130C7520,130,7360,130,7200,130C7040,130,6880,130,6720,130C6560,130,6400,130,6240,130C6080,130,5920,130,5760,130C5600,130,5440,130,5280,130C5120,130,4960,130,4800,130C4640,130,4480,130,4320,130C4160,130,4000,130,3840,130C3680,130,3520,130,3360,130C3200,130,3040,130,2880,130C2720,130,2560,130,2400,130C2240,130,2080,130,1920,130C1760,130,1600,130,1440,130C1280,130,1120,130,960,130C800,130,640,130,480,130C320,130,160,130,80,130L0,130Z"
        ></path>
      </svg>

      <section className="flex flex-col md:flex-row md:justify-center gap-10 md:items-center px-5 md:px-10 lg:px-24 mt-32">
        <div className="flex flex-col gap-2 md:w-[25%]">
          <div className="bg-green-600 w-24 h-1"></div>
          <h2 className="text-green-900 font-bold font-poppins text-4xl md:text-5xl">
            Perfect Arabica
          </h2>
          <p className="text-sm font-quicksand font-medium text-gray-900">
            From Doloksanggul, North Sumatera
          </p>
        </div>
        <div className=" md:p-0 md:w-[55%]">
          <p className="text-gray-900 text-lg md:text-xl lg:text-2xl leading-loose text-justify mb-3 font-quicksand">
            PorluCoffee lahir di dataran tinggi Doloksanggul, sebuah daerah yang
            kaya akan tradisi dan alam yang subur. Kami memulai perjalanan ini
            dengan satu tujuan sederhana: membawa cita rasa kopi terbaik dari
            tanah kami ke seluruh penjuru Indonesia, bahkan dunia.
          </p>
          <p className="text-gray-900 text-lg md:text-xl lg:text-2xl leading-loose text-justify mb-3 font-quicksand">
            Setiap biji kopi yang kami hasilkan dipetik secara selektif dan
            diproses dengan penuh dedikasi oleh para petani lokal. Kami percaya
            bahwa secangkir kopi yang baik bukan hanya soal rasa, tapi juga
            tentang cerita, asal usul, dan cinta terhadap proses. PorluCoffee
            bukan hanya produk — ini adalah warisan yang kami banggakan.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center gap-10 md:items-center px-5 md:px-16 lg:px-24 mt-32">
        <div className="flex flex-col items-end md:items-stretch gap-2 md:w-[25%]">
          <div className="bg-green-600 w-24 h-1"></div>
          <h2 className="text-green-900 font-bold font-poppins text-4xl md:text-5xl">
            Since 2025
          </h2>
          <p className="text-sm font-quicksand font-medium text-gray-900">
            The Founding of PorluCoffee
          </p>
        </div>
        <div className=" md:p-0 md:w-[55%]">
          <p className="text-gray-900 text-lg md:text-xl lg:text-2xl leading-loose text-justify mb-3 font-quicksand">
            Wujud cinta kami terhadap kopi lokal yang autentik dan bermakna.
            Didirikan dengan semangat untuk mengangkat potensi kopi dari tanah
            Batak ke panggung dunia, PorluCoffe tidak hanya menjadi tempat
            menikmati secangkir kopi, tetapi juga menjadi ruang pertemuan
            budaya, cerita, dan rasa. Dengan komitmen pada kualitas dan
            keberlanjutan, PorluCoffe telah menjangkau penikmat kopi dari
            berbagai daerah di Indonesia hingga internasional, membawa aroma
            khas tanah tinggi ke hati para pecinta kopi.
          </p>
        </div>
      </section>

      <section className="mt-32 px-3 md:px-16 lg:px-24 flex flex-col lg:flex-row-reverse justify-center gap-5 lg:gap-8 xl:gap-14">
              <div className="flex flex-col">
                <h2 className="font-semibold font-kaushan text-2xl md:text-3xl lg:text-4xl">
                  <span className="text-green-900 font-raleway">PorluCoffee</span>{" "}
                  with Ir. Surip Mawardi
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-20 h-1 bg-green-600"></div>
                  <h4 className="font-jura font-semibold md:text-xl lg:text-2xl">
                    Bapak Kopi Indonesia
                  </h4>
                </div>
                <p className="mt-2 max-w-xl text-sm md:text-[0.9rem] lg:text-base font-quicksand font-medium">
                  Founder PorluCoffee berkunjung ke kebun kopi dengan Ir. Surip
                  Mawardi, sosok yang dikenal luas sebagai pelopor riset kopi di
                  Indonesia. PorluCoffee berkomitmen untuk mengangkat kopi Indonesia
                  ke panggung dunia.
                </p>
                <div className="flex gap-2 lg:gap-5 lg:flex-col 2xl:flex-row xl:gap-10 mt-10">
                  <Image
                    src={news1}
                    alt="PorluCoffee with Mr. Surip Mawardi"
                    className="w-1/2 max-h-[18rem] lg:w-full  2xl:w-[16rem] shrink-0 rounded-lg aspect-square object-cover"
                  />
                  <Image
                    src={news3}
                    alt="PorluCoffee with Mr. Surip Mawardi"
                    className="w-1/2 max-h-[18rem] lg:w-full 2xl:w-[16rem] shrink-0 rounded-lg aspect-square object-cover"
                  />
                </div>
              </div>
              <Carousel />
            </section>

      {/* Visi & Misi */}
      <section className="flex flex-col items-center mt-48 px-6 md:px-12 lg:px-24 gap-20">
        <div className="flex flex-col items-center gap-4">
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-700 via-green-800 to-emerald-700 rounded-full"></div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-raleway text-center text-green-900">
            <span className="font-kaushan text-gray-800">Visi & Misi</span>{" "}
            PorluCoffee
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-emerald-700 via-green-800 to-emerald-700 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
          {/* Visi */}
          <div className="relative bg-green-500/20 backdrop-blur-md rounded-3xl p-10 shadow-lg hover:scale-[101%] hover:translate-y-[-5px] transition border border-emerald-400/50">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-700 to-emerald-500 text-white uppercase font-jura px-6 py-2 rounded-full text-lg font-semibold shadow-lg">
                Visi
              </div>
            </div>
            <p className="font-quicksand md:text-lg lg:text-xl font-medium leading-relaxed mt-4 text-center">
              Menjadi brand kopi lokal asal Doloksanggul yang dikenal secara
              global, dengan tetap menjunjung tinggi kualitas, kearifan lokal,
              dan keberlanjutan dalam setiap prosesnya.
            </p>
          </div>

          {/* Misi */}
          <div className="relative bg-green-500/20 backdrop-blur-md rounded-3xl p-10 shadow-lg hover:scale-[101%] hover:translate-y-[-5px] transition border border-emerald-400/50">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-amber-600 to-yellow-400 text-white uppercase font-jura px-6 py-2 rounded-full text-lg font-semibold shadow-lg">
                Misi
              </div>
            </div>
            <p className=" font-quicksand md:text-lg lg:text-xl font-medium leading-relaxed mt-4 text-center">
              Menyajikan kopi terbaik dari dataran tinggi Sumatera Utara dengan
              menjaga keaslian cita rasa, serta memperkenalkan kopi tanah Batak
              ke dunia melalui produk yang otentik dan bermakna.
            </p>
          </div>
        </div>
      </section>

      {/* founders */}
      <section
        className="mt-48 min-h-[70vh] flex flex-col bg-cover bg-no-repeat bg-center px-10 md:px-16 lg:px-32 py-20"
        style={{ backgroundImage: "url(/assets/bgabt.jpg)" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-grenze">The Founder</h2>
          <p className="text-gray-900 mt-2 text-lg font-jura">
            The passionate person behind PorluCoffee
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-20">
          <div className="bg-gray-200/30 backdrop-blur-lg rounded-2xl p-5 md:w-lg flex flex-col items-center shadow-xl hover:scale-[101%] hover:translate-y-[-5px] transition">
            <Image
              src={founder}
              alt="Founder PorluCoffee - Muhammad Aslam Fikri"
              className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full mb-6 border-4 border-white shadow-md"
            />
            <h3 className="text-3xl font-kaushan text-center">
              Muhammad Aslam Fikri
            </h3>
            <p className="text-gray-900 mt-2 font-raleway font-medium">
              Founder & CEO
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
