import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {FaWhatsapp} from "react-icons/fa"

export type Product = {
  _id: string;
  name: string;
  price: number;
  image: any; 
  category: { name: string };
};

const postImageUrl = (image: any) => {
  return image ? urlFor(image)?.url() : null;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/80 overflow-hidden flex flex-col hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
        {product.image ? (
          <Image
            src={postImageUrl(product.image) || ""}
            alt={product.name}
            fill
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
        )}
        
        {/* In Stock Badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 sm:px-3 sm:py-1 flex items-center rounded text-[9px] sm:text-xs font-bold text-emerald-600 tracking-wide uppercase shadow-sm border border-white/50">
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 mr-1 sm:mr-1.5 animate-pulse"></span>
          In stock
        </div>
      </div>
      
      {/* Content */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        {/* Category Name */}
        <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">
          {product.category?.name || "Uncategorized"}
        </span>
        
        <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate mb-1">
          {product.name}
        </h3>
        
        <div className="hidden sm:block mb-6">
          <p className="text-gray-500 text-xs line-clamp-2 min-h-[32px] leading-relaxed">
            {product.category?.name 
              ? `Experience ultimate luxury and uncompromised quality with our exclusive ${product.category.name.toLowerCase()} collection.` 
              : "Experience ultimate luxury and uncompromised quality tailored for your lifestyle."}
          </p>
        </div>
        <div className="sm:hidden mb-2"></div>
        
        {/* Price & Order Button Container */}
        <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-gray-100 gap-1">
          <span className="font-extrabold text-gray-900 text-sm sm:text-lg truncate">
            ₦{product.price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          
          {/* Compact WhatsApp Order Button */}
          <a 
            href={`https://wa.me/2349027458696?text=${encodeURIComponent(`Hello DassyLuxe! I'm interested in ordering the ${product.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-2 py-1.5 sm:px-4 sm:py-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-[11px] sm:text-sm font-bold rounded-md transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 shrink-0"
          >
            <FaWhatsapp className="w-6 h-6 mr-3 "/>
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
