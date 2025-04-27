import type { Metadata } from "next";
import { Poppins, Raleway, Quicksand, Outfit, Jura, Kaushan_Script, Oregano, Grenze } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-outfit",
});
const jura = Jura({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jura",
});
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kaushan",
});
const grenze = Grenze({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-grenze",
});

export const metadata: Metadata = {
  title: "PorluCoffee",
  description: "Kopi dari dataran tinggi Doloksanggul, Sumatera Utara",
  icons: {
    icon: "/assets/porlucoffee-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} ${quicksand.variable} ${outfit.variable} ${jura.variable} ${kaushan.variable} ${grenze.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
