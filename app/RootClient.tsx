"use client";

import { usePathname } from "next/navigation";
import NavbarID from "./components/NavbarID";
import NavbarEN from "./components/NavbarEN";
import FooterID from "./components/FooterID";
import FooterEN from "./components/FooterEN";
import WhatsappButton from "./components/WhatsappButton";

export default function RootClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isIndonesian = pathname.startsWith("/id");

  return (
    <>
      {isIndonesian ? <NavbarID /> : <NavbarEN />}

      <div className="min-h-screen">{children}</div>

      <WhatsappButton />

      {isIndonesian ? <FooterID /> : <FooterEN />}
    </>
  );
}
