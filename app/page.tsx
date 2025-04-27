import Link from "next/link";
import Image from "next/image";

import { FaInstagram} from "react-icons/fa";

import homeHero from "../public/assets/abt5.png";
import logo from "../public/assets/porlucoffee-logo.png";
import product from "../public/assets/porlucoffee-product1.png"
import quote from "../public/assets/quote.png"
import story from "../public/assets/porlucoffee-story.png"
import bestProduct from "../public/assets/product.jpg"
import instagram from "../public/assets/instagram.png"

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
            PorluCoffee menawarkan kualitas dari kopi yang dipilih secara matang
            untuk menghadirkan pengalaman minum kopi yang sempurna setiap hari.
          </p>
          <Link href={"/products"}>
            <button className="bg-green-600 hover:bg-green-700 transition px-4 py-2 md:px-6 md:py-3 text-sm md:text-base cursor-pointer rounded-full font-poppins font-semibold text-white shadow-lg">
              Lihat Produk Kami
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
            Kami tidak sekadar menyajikan kopi — tapi juga cerita, rasa, dan
            makna dalam setiap cangkir.
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
              Sangrai Segar
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              Semua biji kopi kami disangrai dalam batch kecil agar tetap segar
              dan nikmat.
            </p>
          </div>

          <div className="bg-gray-100 p-3 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl md:text-4xl text-green-700 mb-4">☕</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-grenze">
              Rasa Kaya & Berani
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              Biji kopi pilihan kami menghadirkan rasa yang seimbang dan
              mendalam di setiap tegukan.
            </p>
          </div>

          <div className="bg-gray-100 p-3 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl md:text-4xl text-green-700 mb-4">🌍</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-grenze">
              Praktik Berkelanjutan
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              Kami mendukung pertanian ramah lingkungan dan proses sumber yang
              etis.
            </p>
          </div>

          <div className="bg-gray-100 p-3 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-2xl md:text-4xl text-green-700 mb-4">📦</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-grenze">
              Pengiriman Seluruh Indonesia
            </h3>
            <p className="text-gray-800 text-sm font-quicksand">
              Kopi favoritmu akan kami antar langsung ke pintu rumah, ke mana
              pun kamu berada.
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
            PorluCoffee lahir di dataran tinggi Doloksanggul, sebuah daerah yang
            kaya akan tradisi dan alam yang subur. Didirikan pada tahun 2025,
            kami memulai perjalanan ini dengan satu tujuan sederhana: membawa
            cita rasa kopi terbaik dari tanah kami ke seluruh penjuru Indonesia,
            bahkan dunia.
          </p>
          <p className="text-gray-900 text-xl md:text-2xl lg:text-[1.7rem] leading-loose text-justify font-quicksand">
            Setiap biji kopi yang kami hasilkan dipetik secara selektif dan
            diproses dengan penuh dedikasi oleh para petani lokal. Kami percaya
            bahwa secangkir kopi yang baik bukan hanya soal rasa, tapi juga
            tentang cerita, asal usul, dan cinta terhadap proses. PorluCoffee
            bukan hanya produk — ini adalah warisan yang kami banggakan.
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
      <section className="bg-gradient-to-b from-green-200 to-blue-300 py-20 md:py-5 px-6 md:px-12 lg:px-32">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-kaushan font-bold text-gray-800 mb-2 md:mb-4">
            Best of{" "}
            <span className="font-raleway text-green-900">PorluCoffee</span>
          </h2>
          <p className="text-gray-900 font-jura text-sm md:text-lg max-w-xl mx-auto">
            Pilihan terbaik untuk pecinta kopi sejati — setiap biji dipilih
            dengan cermat, demi rasa yang tak terlupakan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {[
            {
              img: bestProduct,
              title: "House Blend",
              desc: "Campuran biji khas kami dengan rasa seimbang — nutty, caramel, dan sedikit fruity.",
            },
            {
              img: bestProduct,
              title: "Single Origin",
              desc: "Cita rasa murni dari satu wilayah, menawarkan karakteristik khas dan unik.",
            },
            {
              img: bestProduct,
              title: "Dark Roast",
              desc: "Rasa bold dan pekat, cocok untuk espresso lovers dan pecinta kopi kuat.",
            },
            {
              img: bestProduct,
              title: "Cold Brew Pack",
              desc: "Paket khusus untuk penyeduhan dingin di rumah — praktis dan menyegarkan.",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="flex bg-white rounded-2xl shadow-md hover:shadow-lg transition px-4 py-3 gap-5 border-[0.1px] border-yellow-600 items-center"
            >
              <Image
                src={product.img}
                alt={product.title}
                className="w-24 h-24 md:h-28 md:w-28 lg:w-36 lg:h-36 object-cover rounded-xl"
              />
              <div className="max-w-sm">
                <h3 className="text-lg md:text-xl font-raleway font-semibold text-gray-800 mb-1">
                  {product.title}
                </h3>
                <p className="text-gray-900 text-xs md:text-sm mb-3 font-quicksand ">
                  {product.desc}
                </p>
                <p className="text-emerald-800 text-base font-semibold font-raleway">
                  RpXXX.XXX
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center items-center">
          <Link href="/products">
            <button className="text-gray-50 bg-green-700 rounded-xl hover:bg-green-900 transition cursor-pointer font-poppins font-semibold px-5 py-3">
              Lihat lebih banyak
            </button>
          </Link>
        </div>
      </section>
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
        id="lokasi"
      >
        <div className="flex items-center gap-5 mb-5">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold font-kaushan text-gray-900 mb-4">
            Lokasi Kami
          </h2>
          <div className="w-32 h-[3px] bg-green-700"></div>
          <p className="text-gray-900 font-jura text-sm md:text-lg max-w-lg">
            Kunjungi langsung kedai kami untuk merasakan aroma dan cita rasa
            kopi pilihan secara langsung.
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
              Jl. Kopi Sejati No. 10
              <br />
              Doloksanggul, Sumatera Utara
              <br />
              Indonesia 22457
            </p>
            <p className="text-gray-950 font-quicksand">
              <strong className="font-poppins">Jam Buka:</strong>
              <br />
              Senin – Sabtu: 08.00 – 18.00
              <br />
              Minggu: Libur
            </p>
          </div>

          <div className="bg-white md:w-[60%] p-4 rounded-xl">
            <div className="h-[25rem] w-[100%] md:h-[35rem] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.625907250678!2d98.99129772726377!3d2.302087447339394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e05e1146f9e11%3A0xe6539d6a8e4019b7!2sDoloksanggul%2C%20Kabupaten%20Humbang%20Hasundutan%2C%20Sumatera%20Utara!5e0!3m2!1sen!2sid!4v1712299922222!5m2!1sen!2sid"
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
            Follow kami di Instagram!
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
