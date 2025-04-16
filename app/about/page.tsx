import React from "react";
import Image from "next/image";

import logo from "../../public/logo.png";
import hero1 from "../../public/abt1.png";
import hero2 from "../../public/abt3.png";
import hero3 from "../../public/abt5.png";
import bgabt from "../../public/bgabt.jpg";
import defpic from "../../public/def-person.png";

const AboutPage = () => {
  return (
    <>
      <main className="pt-28 relative w-full min-h-[80vh] gap-10 flex flex-col bg-lime-100">
        <div className="flex max-h-[25rem]">
          <Image
            src={hero1}
            alt="PorluCoffee"
            className="object-cover w-[33%]"
            loading="lazy"
          />
          <Image
            src={hero3}
            alt="PorluCoffee"
            className="object-cover w-[33%] grow"
            loading="lazy"
          />
          <Image
            src={hero2}
            alt="PorluCoffee"
            className="object-cover w-[33%]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="">
            <span className="font-quicksand text-gray-800 text-lg md:text-xl lg:text-2xl uppercase font-medium tracking-[0.6em]">
              About
            </span>{" "}
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-green-900">
              PorluCoffee
            </span>
          </h1>
          <p className="px-5 md:px-0 max-w-xl font-quicksand md:text-lg lg:text-xl leading-loose font-medium text-gray-700 text-center">
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
            <stop stopColor="#ecfccb" offset="100%"></stop>
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
            Since 2XXX
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

      {/*v&m*/}
      <section className="flex flex-col items-center mt-48 px-5 md:px-10 lg:px-24 gap-16">
        <div className="flex flex-col items-center gap-2">
          <div className="h-1 w-20 bg-green-900"></div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-poppins text-center">
            Visi & Misi PorluCoffee
          </h1>
          <div className="h-1 w-32 bg-green-900"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-5xl">
          <div className="bg-gradient-to-tr from-emerald-100 to-amber-100 p-6 rounded-xl text-center shadow-[-10px_10px_3px_#85ab9c]">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-raleway font-semibold mb-4 text-green-900">
              Visi
            </h2>
            <p className="text-gray-800 font-quicksand md:text-lg lg:text-xl font-medium leading-relaxed">
              Menjadi brand kopi lokal asal Doloksanggul yang dikenal secara
              global, dengan tetap menjunjung tinggi kualitas, kearifan lokal,
              dan keberlanjutan dalam setiap prosesnya.
            </p>
          </div>

          <div className="bg-gradient-to-tl from-emerald-100 to-amber-100 p-6 rounded-xl text-center shadow-[10px_10px_3px_#85ab9c]">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-raleway font-semibold mb-4 text-green-900">
              Misi
            </h2>
            <p className="text-gray-800 font-quicksand  md:text-lg lg:text-xl font-medium leading-relaxed">
              Menyajikan kopi terbaik dari dataran tinggi Sumatera Utara dengan
              menjaga keaslian cita rasa, serta memperkenalkan kopi tanah Batak
              ke dunia melalui produk yang otentik dan bermakna.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mt-48 min-h-[60vh] flex flex-col bg-cover bg-no-repeat bg-center px-10 md:px-16 lg:px-32 py-20"
        style={{ backgroundImage: `url(/bgabt.jpg)` }}
      >
        <h1 className="text-center md:text-left font-bold font-poppins text-2xl md:text-3xl lg:text-4xl text-amber-950 mb-10 md:mb-24">
          People behind PorluCoffee
        </h1>

        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16">
          <div className="flex flex-col pl-16 md:pl-24 pr-2 py-5 relative bg-emerald-100 border-2 border-amber-200 rounded-xl mt-8">
            <Image
              src={defpic}
              alt="default pic"
              className="absolute h-20 w-20 lg:h-32 lg:w-32 -top-8 -left-6 lg:-top-14 lg:-left-10"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-raleway">
              Lorem Ipsum
            </h3>
            <p className="font-medium text-xs md:text-sm lg:text-base font-quicksand text-gray-700">
              Co-Founder
            </p>
          </div>
          <div className="flex flex-col pl-16 md:pl-24 pr-2 py-5 relative bg-emerald-100 border-2 border-amber-200 rounded-xl mt-8">
            <Image
              src={defpic}
              alt="default pic"
              className="absolute h-20 w-20 lg:h-32 lg:w-32 -top-8 -left-6 lg:-top-14 lg:-left-10"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-raleway">
              Lorem Ipsum
            </h3>
            <p className="font-medium text-xs md:text-sm lg:text-base font-quicksand text-gray-700">
              Founder
            </p>
          </div>
          <div className="flex flex-col pl-16 md:pl-24 pr-2 py-5 relative bg-emerald-100 border-2 border-amber-200 rounded-xl mt-8">
            <Image
              src={defpic}
              alt="default pic"
              className="absolute h-20 w-20 lg:h-32 lg:w-32 -top-8 -left-6 lg:-top-14 lg:-left-10"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-raleway">
              Lorem Ipsum
            </h3>
            <p className="font-medium text-xs md:text-sm lg:text-base font-quicksand text-gray-700">
              Co-Founder
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
