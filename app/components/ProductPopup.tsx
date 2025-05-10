"use client";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation"; // <--- Tambahkan ini

type Variant = {
  name: string;
  price: number;
};

type Product = {
  id: number;
  productName: string;
  price: number;
  image: string;
  categories: string[];
  variants?: Variant[];
  description: {
    en: string;
    id: string;
  };
};

type ProductPopupProps = {
  product: Product;
  variant: Variant | null;
  onClose: () => void;
};

const ProductPopup = ({ product, variant, onClose }: ProductPopupProps) => {
  const pathname = usePathname(); 

  const handleOutsideClick = (e: React.MouseEvent) => {
    const popup = e.target as HTMLElement;
    if (popup.classList.contains("popup-background")) {
      onClose();
    }
  };

  // Pilih deskripsi berdasarkan URL
  const description = pathname.includes("/id/produk/")
    ? product.description.id
    : product.description.en;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-20 animate-onlyFade2 popup-background"
      onClick={handleOutsideClick}
    >
      <div className="bg-transparent rounded-lg relative w-full max-w-2xl p-5">
        <button
          onClick={onClose}
          className="absolute top-5 right-10 md:top-3 md:right-3 text-2xl md:text-3xl lg:text-4xl cursor-pointer text-gray-50 hover:text-gray-300 transition"
        >
          <MdClose />
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center shrink-0">
            <img
              src={`/${product.image}`}
              alt={product.productName}
              className="object-contain rounded w-full max-w-[200px] md:max-w-[300px] h-auto"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-jura text-lg sm:text-xl md:text-2xl lg:text-3xl p-3 -mt-5 md:mt-10 bg-green-800 text-white">
              {`${product.productName} ${variant?.name || ""}`}
            </h2>
            <p className="-mt-2 md:mt-0 font-kaushan text-xs sm:text-sm md:text-base lg:text-lg px-3 py-2 bg-gray-50 text-green-950">
              Rp{" "}
              {variant
                ? variant.price.toLocaleString()
                : product.price.toLocaleString()}
            </p>
            <p className="p-3 text-gray-50 text-xs md:text-sm lg:text-base font-quicksand font-medium text-center md:text-start">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
