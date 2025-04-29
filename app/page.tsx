import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { FaInstagram } from "react-icons/fa";

import homeHero from "../public/assets/abt5.png";
import logo from "../public/assets/porlucoffee-logo.png";
import product from "../public/assets/porlucoffee-product1.png";
import quote from "../public/assets/quote.png";
import story from "../public/assets/porlucoffee-story.png";
import instagram from "../public/assets/instagram.png";
import BestOf from "./components/BestOf";

export const metadata: Metadata = {
  title: "Home - PorluCoffee",
  description:
    "Perfect Arabica. From Doloksanggul, North Sumatera. PorluCoffee is a coffee that comes from the highlands of North Sumatra, Doloksanggul",
};

export default function Home() {
  return (
    <>
      {/* sect 1 (hero) */}
      <main className="relative h-[100dvh] w-full overflow-hidden">
        <Image
          src={homeHero}
          alt="Hero Background"
          className="z-0 absolute inset-0 object-cover object-center lg:object-right-bottom w-full h-full"
          priority
        />

        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="relative z-20 h-full flex flex-col justify-center items-start px-8 md:px-12 lg:px-32 text-white">
          <Image
            src={logo}
            alt="PorluCoffee Logo"
            className="mb-4 rounded-full bg-white w-20 h-20 md:w-24 md:h-24 lg:h-28 lg:w-28 "
          />
          <h1 className="text-4xl font-kaushan md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow">
            Perfect Arabica,
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-green-500 mb-4">
            From Doloksanggul, North Sumatera.
          </h2>
          <p className="md:text-lg lg:text-xl font-jura text-gray-100 max-w-2xl mb-8">
            PorluCoffee offers quality coffee that is carefully selected to
            provide the perfect coffee drinking experience every day.
          </p>
          <Link href={"/products"}>
            <button className="bg-green-600 hover:bg-green-700 transition px-4 py-2 md:px-6 md:py-3 text-sm md:text-base cursor-pointer rounded-full font-poppins font-semibold text-white shadow-lg">
              See Our Products
            </button>
          </Link>
        </div>
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3c8a2f"
          fillOpacity="1"
          d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,208C672,235,768,277,864,272C960,267,1056,213,1152,192C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* sect 2 (whys) */}
      <section className="bg-white flex flex-col md:flex-row justify-center gap-10 mt-20 md:mt-0 p-5 ">
        <div className="flex flex-col md:items-stretch">
          <h2 className="text-3xl text-end md:text-left md:text-4xl lg:text-[2.5rem] font-bold font-kaushan text-gray-800 mb-2">
            Why PorluCoffee?
          </h2>
          <p className="text-gray-800 text-sm text-end md:text-left md:text-base lg:text-lg md:max-w-xl font-jura">
            We don&apos;t just serve coffee — we serve stories, flavors, and meaning
            in every cup.
          </p>
          <Image
            src={product}
            alt="PorluCoffee Product"
            className="object-cover rounded-l-[50px] rounded-r-sm h-80 w-[100%] md:h-[27rem] md:w-[35rem] mt-5"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 md:w-[50%]">
          <div className="bg-gray-100 p-3 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl md:text-4xl text-green-700 mb-4">🌱</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-grenze">
              Fresh roasted
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              All of our coffee beans are roasted in small batches to ensure
              they are fresh and delicious.
            </p>
          </div>

          <div className="bg-gray-100 p-3 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl md:text-4xl text-green-700 mb-4">☕</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-grenze">
              Rich and bold taste
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              Our selected coffee beans provide a balanced and delicious taste
              deep in every sip.
            </p>
          </div>

          <div className="bg-gray-100 p-3 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl md:text-4xl text-green-700 mb-4">🌍</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-grenze">
              Sustainable practices
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              We support environmentally friendly farming and ethical sourcing
              processes.
            </p>
          </div>

          <div className="bg-gray-100 p-3 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl md:text-4xl text-green-700 mb-4">📦</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-grenze">
              Delivery throughout Indonesia
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              We will deliver your favorite coffee right to your door, wherever
              you are.
            </p>
          </div>
        </div>
      </section>

      {/* sect 3 (story) */}
      <section className="bg-white flex flex-col md:flex-row-reverse justify-center gap-10 mt-20 md:px-16 lg:px-40 pt-32 pb-10 mb-20 md:mb-0 relative">
        <Image
          src={quote}
          alt="Quote"
          className="absolute top-20 right-10 md:top-12 md:left-32 w-20 h-20 object-contain"
        />

        <div className="px-5 md:p-0 md:w-[40%] flex flex-col">
          <h2 className="text-4xl md:text-[2.5rem] font-bold text-gray-800 font-kaushan mb-2">
            Our Story
          </h2>
          <Image
            src={story}
            alt="People"
            className="self-center object-cover rounded-r-[50px] rounded-l-sm h-[22rem] w-[100%] md:h-[35rem] md:w-full mt-5"
            loading="lazy"
          />
        </div>
        <div className="px-5 md:p-0 md:w-[60%]">
          <p className="text-gray-900 text-xl md:text-2xl lg:text-[1.7rem] leading-loose text-justify mb-3 font-quicksand">
            PorluCoffee was born in the Doloksanggul highlands, an area rich in
            tradition and lush nature. Founded in 2025, we began this journey
            with one simple goal: to bring the best taste of coffee from our
            land to all corners of Indonesia, and even the world.
          </p>
          <p className="text-gray-900 text-xl md:text-2xl lg:text-[1.7rem] leading-loose text-justify font-quicksand">
            Every coffee bean we produce is handpicked and processed with
            dedication by local farmers. We believe that a great cup of coffee
            is not just about taste, but also about story, origin, and love for
            the process. PorluCoffee is not just a product — it is a legacy we
            are proud of.
          </p>
        </div>
      </section>

      {/* sect 4 (best of) */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#bbf7d0"
          fillOpacity="1"
          d="M0,224L120,229.3C240,235,480,245,720,245.3C960,245,1200,235,1320,229.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <BestOf />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#93C5FD"
          fillOpacity="1"
          d="M0,96L120,90.7C240,85,480,75,720,85.3C960,96,1200,128,1320,144L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      {/* sect 6 (address) */}
      <section
        className="pb-20 mt-20 md:mt-0 px-5 md:px-10 lg:px-40"
        id="location"
      >
        <div className="flex items-center gap-5 mb-5">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold font-kaushan text-gray-900 mb-4">
            Our Location
          </h2>
          <div className="w-32 h-[3px] bg-green-700"></div>
          <p className="text-gray-900 font-jura text-sm md:text-lg max-w-lg">
            Visit our shop directly to experience the aroma and taste of
            selected coffee directly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse bg-green-200 border-[0.2px] border-green-800 md:p-5 rounded-xl justify-center lg:gap-10">
          <div className="p-5">
            <Image
              src={logo}
              alt="PorluCoffee Logo"
              className="h-14 w-14 md:h-20 md:w-20 bg-white rounded-full mb-2"
            />
            <h3 className="text-lg md:text-xl font-semibold font-raleway text-gray-900 mb-1">
              PorluCoffe HQ
            </h3>
            <p className="text-gray-950 font-quicksand mb-5">
              Pendidikan Street
              <br />
              Doloksanggul, Sumatera Utara
              <br />
              Indonesia
            </p>
            {/*<p className="text-gray-950 font-quicksand">
              <strong className="font-poppins">Jam Buka:</strong>
              <br />
              Senin – Sabtu: 08.00 – 18.00
              <br />
              Minggu: Libur
            </p>*/}
          </div>

          <div className="bg-white md:w-[60%] p-4 rounded-xl">
            <div className="h-[25rem] w-[100%] md:h-[35rem] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1676.2064680724388!2d98.74816262252601!3d2.260582384099417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e3b58ab49528b%3A0xbeefc0377db5069b!2sJl.%20Pendidikan%2C%20Ps.%20Dolok%20Sanggul%2C%20Kec.%20Dolok%20sanggul%2C%20Kabupaten%20Humbang%20Hasundutan%2C%20Sumatera%20Utara%2022457!5e0!3m2!1sid!2sid!4v1745894544244!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* sect 7 (insta) */}
      <section className="flex flex-col items-center lg:items-start lg:flex-row justify-evenly py-24 mt-20 px-3 md:px-12 lg:px-24 xl:px-40 bg-gradient-to-b from-emerald-100 to-amber-200 lg:gap-5">
        <div className="text-center flex flex-col items-center gap-3 lg:mt-32">
          <div className="flex ">
            <Image
              src={logo}
              alt="PorluCoffee Logo"
              className="h-24 w-24 md:h-28 md:w-28"
            />
            <Image
              src={instagram}
              alt="Instagram Logo"
              className="h-3 w-3 md:h-6 md:w-6"
            />
          </div>
          <h2 className="text-sm md:text-base lg:text-lg font-semibold font-poppins text-yellow-800">
            Follow us in Instagram!
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-raleway text-green-700">
            @porlucoffee
          </h1>
          <a
            href="https://www.instagram.com/porlucoffee"
            className="hover:text-gray-300"
          >
            <button className="flex items-center gap-1 border-2 border-white px-8 py-2 mt-5 rounded-3xl text-2xl font-poppins font-semibold text-white bg-green-600 cursor-pointer hover:bg-green-700 transition">
              <span>GO </span> <FaInstagram />
            </button>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-2 lg:gap-4 mt-20 lg:mt-0">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="w-28 h-28 sm:w-40 sm:h-40 xl:w-56 xl:h-56 bg-gray-100 rounded-sm"
            ></div>
          ))}
        </div>
      </section>
    </>
  );
}
