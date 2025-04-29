"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import indo from "../../public/assets/id.png";
import brit from "../../public/assets/uk.png";

const pathMap: Record<string, { en: string; id: string }> = {
  "/": { en: "/", id: "/id" },
  "/products": { en: "/products", id: "/id/produk" },
  "/about": { en: "/about", id: "/id/tentang-kami" },
  "/contact": { en: "/contact", id: "/id/kontak" },
  "/collaborate": { en: "/collaborate", id: "/id/kolaborasi" },
};

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "id">("en");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname.startsWith("/id")) {
      setSelectedLanguage("id");
    } else {
      setSelectedLanguage("en");
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [pathname]);

  const changeLanguage = (lang: "en" | "id") => {
    setSelectedLanguage(lang);
    setOpen(false);

    const currentPath = pathname.startsWith("/id")
      ? pathname.replace(/^\/id/, "")
      : pathname;

    const matchedPath = Object.entries(pathMap).find(
      ([, paths]) =>
        paths.en === currentPath ||
        paths.id.replace(/^\/id/, "") === currentPath
    );

    if (matchedPath) {
      const [, paths] = matchedPath;
      const newPath = lang === "id" ? paths.id : paths.en;
      router.push(newPath);
    } else {
      router.push(lang === "id" ? `/id${currentPath}` : currentPath);
    }
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center font-semibold bg-white/90 cursor-pointer hover:bg-gray-200 text-gray-700 border border-gray-300 py-1 px-3 rounded-lg shadow-sm text-sm md:text-base font-jura"
      >
        <Image
          src={selectedLanguage === "en" ? brit : indo}
          alt="flag"
          width={20}
          height={20}
          className="mr-1 lg:mr-2 rounded-xs object-cover"
        />
        {selectedLanguage.toUpperCase()}
        <span className="ml-0.5 lg:ml-2 text-gray-500">▼</span>
      </button>

      {open && (
        <div className="absolute right-0 font-jura z-10 mt-2 w-full bg-white border text-gray-700 border-gray-200 rounded-lg shadow-lg">
          <button
            onClick={() => changeLanguage("en")}
            className="flex w-full font-semibold items-center px-3 py-2 hover:bg-gray-100 text-sm"
          >
            <Image
              src={brit}
              alt="EN"
              width={20}
              height={20}
              className="mr-2 rounded-xs"
            />
            EN
          </button>
          <button
            onClick={() => changeLanguage("id")}
            className="flex w-full items-center px-3 py-2 hover:bg-gray-100 text-sm"
          >
            <Image
              src={indo}
              alt="ID"
              width={20}
              height={20}
              className="mr-2 rounded-xs object-cover"
            />
            ID
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
