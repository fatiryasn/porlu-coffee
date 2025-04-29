"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const pathMap: Record<string, { en: string; id: string }> = {
  "/": { en: "/", id: "/id" },
  "/products": { en: "/products", id: "/id/produk" },
  "/about": { en: "/about", id: "/id/tentang-kami" },
  "/contact": { en: "/contact", id: "/id/kontak" },
  "/collaborate": { en: "/collaborate", id: "/id/kolaborasi"},
};

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    if (pathname.startsWith("/id")) {
      setSelectedLanguage("id");
    } else {
      setSelectedLanguage("en");
    }
  }, [pathname]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);

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
      // fallback kalau path tidak ada di map
      router.push(lang === "id" ? `/id${currentPath}` : currentPath);
    }
  };

  return (
    <div className="relative inline-block">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="appearance-none bg-white/90 text-green-950 border border-gray-300 py-1 px-4 pr-8 rounded-lg leading-tight shadow-sm text-sm md:text-base"
      >
        <option value="en">EN</option>
        <option value="id">ID</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
        ▼
      </div>
    </div>
  );
};

export default LanguageSelector;
