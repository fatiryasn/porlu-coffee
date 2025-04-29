"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import news2 from "@/public/assets/news2.jpg";
import news4 from "@/public/assets/news4.jpg";
import news5 from "@/public/assets/news5.jpg"

const images = [news2, news4, news5];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Ganti gambar setiap 4 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[20rem] lg:w-[40rem] xl:w-[50rem] lg:h-[35rem] overflow-hidden rounded-lg lg:shadow-[-20px_-20px_2px_#178033]">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`PorluCoffee with Mr. Surip Mawardi ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 z-20 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_,index) => (
          <button
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              index === currentIndex ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel
