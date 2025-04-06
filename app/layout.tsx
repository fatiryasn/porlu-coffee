import type { Metadata } from "next";
import { Poppins, Raleway, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

export const metadata: Metadata = {
  title: "PorluCoffe",
  description: "Kopi dari dataran tinggi Doloksanggul, pilihan masyarakat Sumatera Utara",
  icons: {
    icon: "/logo.png",
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
        className={`${poppins.variable} ${raleway.variable} ${quicksand.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-20 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
