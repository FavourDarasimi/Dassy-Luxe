import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaWhatsapp, FaStar, FaStarHalfAlt } from "react-icons/fa";

export type Product = {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  image: any;
  category: { name: string };
  onSale?: boolean;
};

const postImageUrl = (image: any) => {
  return image ? urlFor(image)?.url() : null;
};

export default function ProductCard({ product }: { product: Product }) {
  const onSale = product.onSale !== false; // default to showing sale

  return (
    <div className="group bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/80 overflow-hidden flex flex-col hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
      {/* Image */}
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
        {product.image ? (
          <Image
            src={postImageUrl(product.image) || ""}
            alt={product.name}
            fill
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}

        {/* Sale Badge */}
        {onSale && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-bold  tracking-widest uppercase shadow-sm border border-gray-100">
            SALE
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col gap-2">
        {/* Product Name */}
        <h3 className="font-bold text-gray-600 text-sm sm:text-base tracking-wide uppercase truncate">
          {product.name}
        </h3>

        {/* Price Row */}
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-gray-900 text-sm sm:text-base">
            ₦{product.price?.toLocaleString()}
          </span>
        </div>

        {/* WhatsApp Order Button */}
        <a
          href={`https://wa.me/2349027458696?text=${encodeURIComponent(
            `Hello DassyLuxe! I'm interested in ordering the ${product.name}.`,
        )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs sm:text-sm font-bold rounded-md transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
