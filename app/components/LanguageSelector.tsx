"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const pathMap: Record<string, { en: string; id: string }> = {
  "/": { en: "/", id: "/id/" },
  "/products/": { en: "/products/", id: "/id/produk/" },
  "/about/": { en: "/about/", id: "/id/tentang-kami/" },
  "/contact/": { en: "/contact/", id: "/id/kontak/" },
  "/collaborate/": { en: "/collaborate/", id: "/id/kolaborasi/" },
};

const LanguageSelector = () => {
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

    let currentPath = pathname;

    if (currentPath.startsWith("/id/")) {
      currentPath = currentPath.replace(/^\/id/, "");
    } else if (currentPath === "/id") {
      currentPath = "/";
    }

    const matchedPath = Object.entries(pathMap).find(
      ([, paths]) =>
        (lang === "en" && paths.id === `/id${currentPath}`) ||
        (lang === "id" && paths.en === currentPath)
    );

    let newPath: string;

    if (matchedPath) {
      const [, paths] = matchedPath;
      newPath = lang === "id" ? paths.id : paths.en;
    } else {
      newPath = lang === "id" ? `/id${currentPath}` : currentPath;
    }

    window.location.href = newPath;
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center font-semibold bg-white/90 cursor-pointer hover:bg-gray-200 text-gray-700 border border-gray-300 py-1 px-3 rounded-lg shadow-sm text-sm md:text-base font-jura"
      >
        <img
          src={selectedLanguage === "en" ? "/assets/uk.png" : "/assets/id.png"}
          alt="flag"
          className="mr-1 lg:mr-2 rounded-xs object-cover w-6 h-3"
          loading="lazy"
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
            <img
              src="/assets/uk.png"
              alt="EN"
              className="mr-2 rounded-xs w-6 h-3"
              loading="lazy"
            />
            EN
          </button>
          <button
            onClick={() => changeLanguage("id")}
            className="flex w-full items-center px-3 py-2 hover:bg-gray-100 text-sm"
          >
            <img
              src="/assets/id.png"
              alt="ID"
              className="mr-2 rounded-xs w-6 h-3"
              loading="lazy"
            />
            ID
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
